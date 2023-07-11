import { Estimate } from "../App";

type cardProps = {
  data: Estimate;
};

export default function Card({ data }: cardProps) {
  function calculateSubTotal(quantity: number, unitPrice: number) {
    return (quantity * unitPrice).toFixed(2);
  }

  return (
    <>
      <h3>{data.title}</h3>
      <div>
        <div>
          <div>Reference</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Unit Price</div>
          <div>Deposit</div>
          <div>VAT</div>
          <div>Sub-Total</div>
        </div>
        {data.tasks.map((task) => {
          return (
            <div key={task.reference}>
              <div>{task.reference}</div>
              <div>{task.description}</div>
              <div>{task.quantity}</div>
              <div>{task.unitPrice}</div>
              <div>{task.deposit}</div>
              <div>{task.vat}%</div>
              <div>{calculateSubTotal(task.quantity, task.unitPrice)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
