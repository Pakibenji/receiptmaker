import { useContext, useEffect, useState } from "react";
import { Estimate, EstimateCtx } from "../App";
import { EstimateService } from "../services/estimateService";
import PDFprinter from "../services/PDFprinter";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

export default function EstimateDetails() {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [currentEstimate, setCurrentEstimate] = useState<Estimate | undefined>(
    undefined
  );
  const id = useParams().id || "";

  const estimateSrv = useContext<EstimateService>(EstimateCtx);

  useEffect(() => {
    const result = estimateSrv.getEstimateByID(id);
    console.log("result", result);
    setCurrentEstimate(result);
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {loading && <div>loading...</div>}
      {currentEstimate === undefined && (
        <div>No corresponding estimate was found</div>
      )}
      {currentEstimate && (
        <PDFprinter>
          <Card data={currentEstimate} />
        </PDFprinter>
      )}
    </>
  );
}
