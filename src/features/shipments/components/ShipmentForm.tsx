"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import SubDetailForm from "./SubDetailForm";
import { ShipmentFormValues } from "../helpers/FormHelpers";
import ProgressTracker from "./ProgressTracker";
import { yupResolver } from "@hookform/resolvers/yup";
import { shipmentSchema } from "../helpers/ValidationSchema";
import DetailForm1 from "./DetailForm1";
import DetailForm2 from "./DetailForm2";

type ShipmentFormProps = {
  tabId: string;
  defaultValues?: ShipmentFormValues;
  onSubmit?: (data: ShipmentFormValues) => void;
};

export default function ShipmentForm({
  //   tabId,
  defaultValues,
}: ShipmentFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShipmentFormValues>({
    defaultValues: {
      shipper: {},
      receiver: {},
      subDetails: {},
    },
    resolver: yupResolver(shipmentSchema),
  });

  const form1 = useForm<ShipmentFormValues>({ defaultValues });
  const form2 = useForm<ShipmentFormValues>({ defaultValues });

  const onSubmit: SubmitHandler<ShipmentFormValues> = (data) => {
    console.log("Form submitted:", data);
    onSubmit?.(data);
  };

  return (
    <div
      className="
        flex flex-col
        w-full
        md:flex-row
      "
    >
      <ProgressTracker />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full
        "
      >
        <div
          className="
            flex flex-col
            gap-2
            md:flex-row
          "
        >
          <div
            className="
              w-full
              md:w-1/2
            "
          >
            <DetailForm1 control={form1.control} errors={errors} />
          </div>
          <div
            className="
              w-full
              md:w-1/2
            "
          >
            <DetailForm2 control={form2.control} errors={errors} />
          </div>
        </div>
        <div
          className="
            w-full
            pt-2
          "
        >
          <SubDetailForm control={control} errors={errors} />
        </div>

        <div
          className="
            flex
            mt-6
            justify-end
          "
        >
         <button
  type="submit"
  className="
    h-7
    px-4 ml-2 mr-2
    w-auto md:w-36
    text-xs text-white
    bg-[linear-gradient(90deg,#E51C25_0%,#031B3C_97%)]
    rounded-full
    shrink-0
    transition-all
  "
>
  Save
</button>
        </div>
      </form>
    </div>
  );
}
