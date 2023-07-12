import { Estimate } from "../App";
import { Link } from "react-router-dom";

type EstimateSummaryProps = {
  data: Estimate;
};

export default function EstimateSummary({ data }: EstimateSummaryProps) {
  return (
    <div>
      <h4>{data.title}</h4>
      <div>
        Estimate date: {new Date(data.estimateDate).toLocaleDateString("en-US")}
      </div>
      <Link to={`/my-estimates/${data?.id}`}>See details</Link>
    </div>
  );
}
