export interface DetailFormValues {
  id: string;
  firstName: string;
  lastName: string;
  contactPerson: string;
  countryCode: string;
  phone: string;
  lat: number;
  lng: number;
  province: string;
  district: string;
  city: string;
  street: string;
  addressNote: string;
}

export interface SubDetailFormValues {
  id: string;
  name: string;
  totalValue: string;
  description: string;
  type: string;
  quantity: number;
  number: number;
  weight: number;
  height: number;
  length: number;
  width: number;
}

export interface ShipmentFormValues {
  shipper: DetailFormValues;
  receiver: DetailFormValues;
  subDetails: SubDetailFormValues;
}
