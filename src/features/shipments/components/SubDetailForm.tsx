import {
  ShipmentFormValues,
} from "../helpers/FormHelpers";
import DetailCard from "./DetailCard";
import CustomTextField from "@/components/CustomTextField";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface SubDetailFormProps {
  control: Control<ShipmentFormValues>;
  errors: FieldErrors<ShipmentFormValues>;
}
export default function SubDetailForm({
  control,
  errors,
}: SubDetailFormProps) {
  return (
    <div
      className="
        w-full
      "
    >
      <DetailCard
        title="Sub Details"
        className="
          w-full
        "
      >
        <div
          className="
            space-y-6
          "
        >
          {/* Main Info Section */}
          <div
            className="
              grid grid-cols-1
              gap-4 items-end
              md:grid-cols-12
            "
          >
            <div
              className="
                md:col-span-2
              "
            >
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
            </div>

            <div
              className="
                flex flex-col
                gap-1.5
                md:col-span-2
              "
            >
              <label
                className="
                  ml-2
                  text-xs font-bold text-gray-500
                "
              >
                Type
              </label>
              <div
                className="
                  relative
                "
              >
                <select
                  className="
                    w-full
                    px-4 py-2
                    text-xs
                    border border-gray-300 rounded-full
                    outline-none focus:ring-1 focus:ring-blue-400
                    sm:text-xs
                  "
                >
                  <option>Select type</option>
                </select>
              </div>
            </div>

            <div
              className="
                md:col-span-2
              "
            >
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
            </div>

            <div
              className="
                md:col-span-6
              "
            >
              <Controller
                name="subDetails.description"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    label="Description"
                    placeholder="Enter description"
                    {...field} // connects value and onChange to RHF
                  />
                )}
              />
            </div>
          </div>

          {/* Measurements Section */}
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
        </div>
      </DetailCard>
    </div>
  );
}
