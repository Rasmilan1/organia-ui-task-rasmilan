import CustomTextField from "@/components/CustomTextField";
import DetailCard from "./DetailCard";
import CustomSelectField from "@/components/CustomSelectField";
import MapPicker from "./LocationPicker";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ShipmentFormValues } from "../helpers/FormHelpers";

interface DetailFormProps {
  control: Control<ShipmentFormValues>;
  errors: FieldErrors<ShipmentFormValues>;
}

// ... (imports remain the same)

export default function DetailForm2({ control, errors }: DetailFormProps) {
  return (
    <DetailCard
      title="Details 2"
      className="
        w-full
      "
    >
      <div
        className="
          grid grid-cols-1
          gap-x-6 gap-y-4
          md:grid-cols-2
        "
      >
        {/* ROW 1: First & Last Name */}
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

        {/* ROW 2: Contact Person & Contact Number */}
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
          name="receiver.countryCode"
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
              inputProps={{ type: "tel", placeholder: " " }}
              required
            />
          )}
        />

        {/* ROW 3: MAP (Full Width) */}
        <div
          className="
            overflow-hidden
            h-32 w-full
            rounded-2xl border border-gray-200
            md:col-span-2
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

        {/* ROW 4: Lat/Lng Group & Province */}
        {/* We group Lat/Lng in one column to match Figma's visual balance */}
        <div
          className="
            grid grid-cols-2
            gap-4
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
            />
          )}
        />

        {/* ROW 5: District & City */}
        <Controller
          name="receiver.district"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="District"
              placeholder="Enter district"
              required
              {...field}
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
            />
          )}
        />

        {/* ROW 6: Street & Address Note */}
        <Controller
          name="receiver.street"
          control={control}
          render={({ field }) => (
            <CustomTextField
              label="Street / Lane"
              placeholder="Enter street name"
              required
              {...field}
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
            />
          )}
        />
      </div>
    </DetailCard>
  );
}
