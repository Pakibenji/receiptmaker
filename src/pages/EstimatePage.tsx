import { Estimate } from "../App";
import EstimateForm from "../components/EstimateForm";
import { useContext } from "react";
import { EstimateCtx } from "../App";
import { EstimateService } from "../services/estimateService";

export default function EstimatePage() {
  const estimateSrv = useContext<EstimateService>(EstimateCtx);

  function handleEstimateCreate(data: Estimate) {
    console.log(data);
    estimateSrv.createEstimate(data);
  }
  return (
    <>
      <h3>Create a new estimate</h3>
      <EstimateForm onEstimateCreate={handleEstimateCreate} />
    </>
  );
}
