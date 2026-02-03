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
  defaultValues,
  onSubmit,
}: ShipmentFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShipmentFormValues>({
    defaultValues: defaultValues || {
      shipper: {},
      receiver: {},
      subDetails: {},
    },
    resolver: yupResolver(shipmentSchema),
  });

  const handleFormSubmit: SubmitHandler<ShipmentFormValues> = (data) => {
    console.log("Entire Form Data:", data);
    if (onSubmit) {
      onSubmit(data);
    }
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
        onSubmit={handleSubmit(handleFormSubmit)}
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
            <DetailForm1 control={control} errors={errors} />
          </div>
          <div
            className="
              w-full
              md:w-1/2
            "
          >
            <DetailForm2 control={control} errors={errors} />
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
              h-7 w-auto
              px-4 ml-2 mr-2
              text-xs text-white
              bg-[linear-gradient(90deg,#E51C25_0%,#031B3C_97%)]
              rounded-full
              transition-all
              shrink-0
              md:w-36
            "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
