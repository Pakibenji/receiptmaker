import { useForm, useFieldArray } from "react-hook-form";
import { Estimate } from "../App";
import styles from "./EstimateForm.module.css";

type estimateFormProps = {
  onEstimateCreate: (data: Estimate) => void;
};

export default function EstimateForm({ onEstimateCreate }: estimateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Estimate>();

  const { fields, append, remove } = useFieldArray({
    name: "tasks",
    control,
  });

  function onSubmit(data: Estimate) {
    onEstimateCreate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="estimateTitle" className={styles.formlabel}>
        Estimate Title
      </label>
      <input
        {...register("title", { required: true })}
        id="estimateTitle"
        className={styles.forminput}
        placeholder="Estimate Title"
      />
      <span className={styles.formerror}>
        {errors.title && "Please, enter an estimate title"}
      </span>
      <label htmlFor="estimateNumber" className={styles.formlabel}>
        Estimate Number
      </label>
      <input
        className={styles.forminput}
        type="text"
        placeholder="Estimate Number"
        id="estimateNumber"
        {...register("estimateNumber", { required: true })}
      />
      {errors.estimateNumber && (
        <span className={styles.formerror}>
          Please, enter an estimate number
        </span>
      )}
      <label htmlFor="estimateDate" className={styles.formlabel}>
        Estimate Date
      </label>
      <input
        className={styles.forminput}
        type="date"
        id="estimateDate"
        {...register("estimateDate", { required: true })}
      />
      {errors.estimateDate && (
        <span className={styles.formerror}>Please, enter an estimate date</span>
      )}
      <label htmlFor="paymentDate" className={styles.formlabel}>
        Payment Date
      </label>
      <input
        className={styles.forminput}
        type="date"
        id="paymentDate"
        {...register("paymentDate", { required: true })}
      />
      {errors.paymentDate && (
        <span className={styles.formerror}>Please, enter a payment date</span>
      )}
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <section className={styles.task}>
              <div>
                <label htmlFor="taskReference" className={styles.formlabel}>
                  Item Reference
                </label>
                <input
                  className={styles.forminput}
                  type="text"
                  placeholder="Item Reference"
                  id="taskReference"
                  {...register(`tasks.${index}.reference` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.reference &&
                    "Please, enter a reference"}
                </div>
              </div>
              <div>
                <label htmlFor="taskDescription" className={styles.formlabel}>
                  Item Description
                </label>
                <input
                  className={styles.forminput}
                  type="text"
                  placeholder="Item Description"
                  id="taskDescription"
                  {...register(`tasks.${index}.description` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.description &&
                    "Please, enter a description"}
                </div>
              </div>
              <div>
                <label htmlFor="taskQuantity" className={styles.formlabel}>
                  Item Quantity
                </label>
                <input
                  className={styles.forminput}
                  type="number"
                  placeholder="Item Quantity"
                  id="taskQuantity"
                  {...register(`tasks.${index}.quantity` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.quantity &&
                    "Please, enter a quantity"}
                </div>
              </div>
              <div>
                <label htmlFor="taskUnitPrice" className={styles.formlabel}>
                  Item Unit Price
                </label>
                <input
                  className={styles.forminput}
                  type="text"
                  placeholder="Item Unit Price"
                  id="taskUnitPrice"
                  {...register(`tasks.${index}.unitPrice` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.unitPrice &&
                    "Please, enter a unit price"}
                </div>
              </div>
              <div>
                <label htmlFor="taskVat" className={styles.formlabel}>
                  Item VAT
                </label>
                <input
                  className={styles.forminput}
                  type="text"
                  placeholder="Item VAT"
                  id="taskVat"
                  {...register(`tasks.${index}.vat` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.vat && "Please, enter a vat"}
                </div>
              </div>
              <div>
                <label htmlFor="taskDeposit" className={styles.formlabel}>
                  Item Deposit
                </label>
                <input
                  className={styles.forminput}
                  type="text"
                  placeholder="Item Deposit"
                  id="taskDeposit"
                  {...register(`tasks.${index}.deposit` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.deposit && "Please, enter a deposit"}
                </div>
              </div>
              <button
                className={styles.delete}
                type="button"
                onClick={() => {
                  remove(index);
                }}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
      <button
        className={styles.formbutton}
        type="button"
        onClick={() =>
          append({
            reference: "",
            description: "",
            quantity: 1,
            unitPrice: 0,
            vat: 20,
            deposit: 0,
          })
        }
      >
        Add item
      </button>
      <input
        className={styles.formbutton}
        type="submit"
        value="create estimate"
      />
    </form>
  );
}
