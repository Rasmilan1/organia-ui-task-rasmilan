import * as yup from "yup";
import { ShipmentFormValues } from "./FormHelpers";

export const shipmentSchema: yup.ObjectSchema<ShipmentFormValues> = yup.object({
  // shipper form validation
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

  // receiver form validation

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

  // subDetails form validation

  subDetails: yup.object({
    name: yup.string().required("Name is required"),
    totalValue: yup.string().optional(),
    description: yup.string().optional(),
    type: yup.string().optional(),
    quantity: yup.number().required("Quantity is required").min(0),
    number: yup.number().optional(),
    weight: yup.number().optional(),
    height: yup.number().optional(),
    length: yup.number().optional(),
    width: yup.number().optional(),
  }),
}) as yup.ObjectSchema<ShipmentFormValues>;
