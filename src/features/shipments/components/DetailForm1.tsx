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
          name="shipper.firstName"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="First Name"
              placeholder="First Name"
              {...field}
              required
              error={errors.shipper?.firstName?.message}
            />
          )}
        />
        <Controller
          name="shipper.lastName"
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
          name="shipper.contactPerson"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Contact Person Name"
              placeholder="Enter contact person name"
              {...field}
              required
              error={errors.shipper?.contactPerson?.message}
            />
          )}
        />
        <Controller
          name="shipper.phone"
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
              error={errors.shipper?.phone?.message}
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
            name="shipper.lat"
            control={control}
            render={({ field: latField }) => (
              <Controller
                name="shipper.lng"
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
            name="shipper.lat"
            control={control}
            render={({ field }) => (
              <CustomTextField label="Latitude" {...field} />
            )}
          />
          <Controller
            name="shipper.lng"
            control={control}
            render={({ field }) => (
              <CustomTextField label="Longitude" {...field} />
            )}
          />
        </div>

        <Controller
          name="shipper.province"
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
              error={errors.shipper?.province?.message}
            />
          )}
        />

        {/* District & City */}
        <Controller
          name="shipper.district"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="District"
              placeholder="Enter district"
              required
              {...field}
              error={errors.shipper?.district?.message}
            />
          )}
        />
        <Controller
          name="shipper.city"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="City"
              placeholder="Enter city"
              required
              {...field}
              error={errors.shipper?.city?.message}
            />
          )}
        />

        {/* Street & Address Note */}
        <Controller
          name="shipper.street"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Street / Lane"
              placeholder="Enter street name"
              required
              {...field}
              error={errors.shipper?.street?.message}
            />
          )}
        />
        <Controller
          name="shipper.addressNote"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Address Note"
              placeholder="Enter address note"
              required
              {...field}
              error={errors.shipper?.addressNote?.message}
            />
          )}
        />
      </div>
    </DetailCard>
  );
}
