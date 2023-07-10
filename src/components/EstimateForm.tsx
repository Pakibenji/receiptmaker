import { useForm, SubmitHandler } from "react-hook-form";
import { Estimate } from "../App";
export default function EstimateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Estimate>();

  const onSubmit: SubmitHandler<Estimate> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="estimateNumber">Estimate Number</label>
      <input
        type="text"
        id="estimateNumber"
        {...register("estimateNumber", { required: true })}
      />
      {errors.estimateNumber && <span>This field is required</span>}
      <label htmlFor="estimateDate">Estimate Date</label>
      <input
        type="date"
        id="estimateDate"
        {...register("estimateDate", { required: true })}
      />
      {errors.estimateDate && <span>This field is required</span>}
      <label htmlFor="paymentDate">Payment Date</label>
      <input
        type="date"
        id="paymentDate"
        {...register("paymentDate", { required: true })}
      />
      {errors.paymentDate && <span>This field is required</span>}
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <label htmlFor="tasks">Tasks</label>
      <input
        type="text"
        id="tasks"
        {...register("tasks", { required: true })}
      />
      {errors.tasks && <span>This field is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
