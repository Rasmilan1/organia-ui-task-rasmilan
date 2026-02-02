import * as yup from "yup";
import { ShipmentFormValues } from "./FormHelpers";

export const shipmentSchema: yup.ObjectSchema<ShipmentFormValues> = yup.object({
  shipper: yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().optional(),
    contactPerson: yup.string().required("Contact Person is required"),
    countryCode: yup.string().required("Country code is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone number must be digits only"),
    lat: yup
      .number()
      .optional()
      .min(-90, "Latitude must be >= -90")
      .max(90, "Latitude must be <= 90"),
    lng: yup
      .number()
      .optional()
      .min(-180, "Longitude must be >= -180")
      .max(180, "Longitude must be <= 180"),
    province: yup.string().required("Province is required"),
    district: yup.string().required("District is required"),
    city: yup.string().required("City is required"),
    street: yup.string().required("Street is required"),
    addressNote: yup.string().required("Address note is required"),
  }),
  receiver: yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().optional(),
    contactPerson: yup.string().required("Contact Person is required"),
    countryCode: yup.string().required("Country code is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone number must be digits only"),
    lat: yup
      .number()
      .optional()
      .min(-90, "Latitude must be >= -90")
      .max(90, "Latitude must be <= 90"),
    lng: yup
      .number()
      .optional()
      .min(-180, "Longitude must be >= -180")
      .max(180, "Longitude must be <= 180"),
    province: yup.string().required("Province is required"),
    district: yup.string().required("District is required"),
    city: yup.string().required("City is required"),
    street: yup.string().required("Street is required"),
    addressNote: yup.string().required("Address note is required"),
  }),
  subDetails: yup.object({
    name: yup.string().required("Name is required"),
    totalValue: yup.string().required("Total value is required"),
    description: yup.string().required("Description is required"),
    quantity: yup.number().required("Quantity is required").min(0),
    number: yup.number().required("Number is required").min(0),
    weight: yup.number().required("Weight is required").min(0),
    height: yup.number().required("Height is required").min(0),
    length: yup.number().required("Length is required").min(0),
    width: yup.number().required("Width is required").min(0),
  }),
}) as yup.ObjectSchema<ShipmentFormValues>;
