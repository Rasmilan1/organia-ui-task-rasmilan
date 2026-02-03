import CustomTextField from "@/components/CustomTextField";
import DetailCard from "./DetailCard";
import CustomSelectField from "@/components/CustomSelectField";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ShipmentFormValues } from "../helpers/FormHelpers";
import dynamic from "next/dynamic";

const MapPicker = dynamic(
  () => import("./LocationPicker"),
  { ssr: false }
);

interface DetailFormProps {
  control: Control<ShipmentFormValues>;
  errors: FieldErrors<ShipmentFormValues>;
}

export default function DetailForm1({ control, errors }: DetailFormProps) {
  return (
    <DetailCard
      title="Details 1"
      className="
        w-full
      "
    >
      <div
        className="
          grid grid-cols-1
          gap-x-6 gap-y-2
          md:grid-cols-2
        "
      >
        {/* First & Last Name */}
        <Controller
          name="receiver.firstName"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="First Name"
              placeholder="First Name"
              {...field}
              required
              error={errors.receiver?.firstName?.message}
            />
          )}
        />
        <Controller
          name="receiver.lastName"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Last Name"
              placeholder="Last Name"
              {...field}
            />
          )}
        />

        {/* Contact Person & Contact Number */}
        <Controller
          name="receiver.contactPerson"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Contact Person Name"
              placeholder="Enter contact person name"
              {...field}
              required
              error={errors.receiver?.contactPerson?.message}
            />
          )}
        />
        <Controller
          name="receiver.phone"
          control={control}
          render={({ field }) => (
            <CustomSelectField
              label="Contact Number"
              variant="select-input"
              options={[
                { label: "+ 94", value: "+94" },
                { label: "+ 91", value: "+91" },
              ]}
              selectProps={{ ...field }}
              inputProps={{ type: "tel", placeholder: "" }}
              required
              error={errors.receiver?.phone?.message}
            />
          )}
        />

        {/* MAP */}
        <div
          className="
            overflow-hidden
            w-full
            rounded-2xl
            md:h-30 md:col-span-2
          "
        >
          <Controller
            name="receiver.lat"
            control={control}
            render={({ field: latField }) => (
              <Controller
                name="receiver.lng"
                control={control}
                render={({ field: lngField }) => (
                  <div
                    className="
                      overflow-hidden
                      h-48 w-full
                      rounded-2xl border border-gray-200
                      md:col-span-2
                    "
                  >
                    <MapPicker
                      lat={Number(latField.value || 0)}
                      lng={Number(lngField.value || 0)}
                      onChange={(newLat, newLng) => {
                        latField.onChange(newLat.toFixed(6));
                        lngField.onChange(newLng.toFixed(6));
                      }}
                    />
                  </div>
                )}
              />
            )}
          />
        </div>

        {/* Lat/Lng Group & Province */}
        <div
          className="
            grid grid-cols-2
            gap-2
          "
        >
          <Controller
            name="receiver.lat"
            control={control}
            render={({ field }) => (
              <CustomTextField label="Latitude" {...field} />
            )}
          />
          <Controller
            name="receiver.lng"
            control={control}
            render={({ field }) => (
              <CustomTextField label="Longitude" {...field} />
            )}
          />
        </div>

          <Controller
            name="receiver.province"
            control={control}
            render={({ field }) => (
              <CustomSelectField
                label="Province"
                variant="select"
                required
                options={[
                  { label: "Select the province", value: "" },
                  { label: "Northern", value: "northern" },
                ]}
                selectProps={{ ...field }}
                error={errors.receiver?.province?.message}
              />
            )}
          />

        {/* District & City */}
        <Controller
          name="receiver.district"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="District"
              placeholder="Enter district"
              required
              {...field}
              error={errors.receiver?.district?.message}
            />
          )}
        />
        <Controller
          name="receiver.city"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="City"
              placeholder="Enter city"
              required
              {...field}
              error={errors.receiver?.city?.message}
            />
          )}
        />

        {/* Street & Address Note */}
        <Controller
          name="receiver.street"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Street / Lane"
              placeholder="Enter street name"
              required
              {...field}
              error={errors.receiver?.street?.message}
            />
          )}
        />
        <Controller
          name="receiver.addressNote"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Address Note"
              placeholder="Enter address note"
              required
              {...field}
              error={errors.receiver?.addressNote?.message}
            />
          )}
        />
      </div>
    </DetailCard>
  );
}
