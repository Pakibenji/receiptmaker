import { useContext } from "react";
import { EstimateCtx } from "../App";
import { EstimateService } from "../services/estimateService";
import PDFprinter from "../services/PDFprinter";
import EstimateSummary from "../components/EstimateSummary";

export default function MyEstimates() {
  const estimateSrv = useContext<EstimateService>(EstimateCtx);
  const estimates = estimateSrv.readEstimate();
  return (
    <>
      <h3>All my estimates</h3>
      <div>TODO list all estimates</div>
      <PDFprinter>
        {estimates.map((est) => (
          <EstimateSummary data={est} key={est.id} />
        ))}
      </PDFprinter>
    </>
  );
}
