import { useContext } from "react";
import { EstimateCtx } from "../App";
import { EstimateService } from "../services/estimateService";
import PDFprinter from "../services/PDFprinter";

export default function MyEstimates() {
  const estimateSrv = useContext<EstimateService>(EstimateCtx);
  const estimates = estimateSrv.readEstimate();
  return (
    <>
      <h3>All my estimates</h3>
      <div>TODO list all estimates</div>
      <PDFprinter>{JSON.stringify(estimates, null, 2)}</PDFprinter>
    </>
  );
}
