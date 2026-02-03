import CustomSelectField from "@/components/CustomSelectField";
import { ShipmentFormValues } from "../helpers/FormHelpers";
import DetailCard from "./DetailCard";
import CustomTextField from "@/components/CustomTextField";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface SubDetailFormProps {
  control: Control<ShipmentFormValues>;
  errors: FieldErrors<ShipmentFormValues>;
}
export default function SubDetailForm({ control, errors }: SubDetailFormProps) {
  return (
    <DetailCard
      title="Sub Details"
      className="
        w-full
      "
    >
      {/* top */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 items-start">
        <Controller
          name="subDetails.name"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Name"
              placeholder="Enter name"
              required
              {...field}
              error={errors.subDetails?.name?.message}
            />
          )}
        />

        <Controller
          name="subDetails.type"
          control={control}
          render={({ field }) => (
            <CustomSelectField
              label="Type"
              variant="select"
              options={[
                { label: "Select Type", value: "" },
                { label: "", value: "type" },
              ]}
              selectProps={{ ...field }}
              error={errors.subDetails?.type?.message}
            />
          )}
        />

        <Controller
          name="subDetails.totalValue"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Total Value"
              placeholder="Enter total value"
              {...field}
            />
          )}
        />

        <Controller
          name="subDetails.description"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Description"
              placeholder="Enter description"
              {...field}
            />
          )}
        />
      </div>

      {/* bottom */}
      <div
        className="
          p-5
          bg-gray-50/30
          border border-gray-200 rounded-2xl
        "
      >
        <div
          className="
            grid grid-cols-2
            gap-4
            md:grid-cols-6
          "
        >
          <Controller
            name="subDetails.quantity"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Quantity"
                placeholder="Enter quantity"
                required
                {...field}
                error={errors.subDetails?.quantity?.message}
              />
            )}
          />

          <Controller
            name="subDetails.number"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Number"
                placeholder="Enter number"
                {...field}
              />
            )}
          />

          <Controller
            name="subDetails.weight"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Weight (Kg)"
                placeholder="Enter weight"
                {...field}
              />
            )}
          />

          <Controller
            name="subDetails.height"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Height (m³)"
                placeholder="Enter height"
                {...field}
              />
            )}
          />

          <Controller
            name="subDetails.length"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Length (m)"
                placeholder="Enter length"
                {...field}
              />
            )}
          />

          <Controller
            name="subDetails.width"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Width"
                placeholder="Enter width"
                {...field}
              />
            )}
          />
        </div>
      </div>
    </DetailCard>
  );
}
