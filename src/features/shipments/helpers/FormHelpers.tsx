export interface ShipperDetailFormValues {
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

export interface RecieverDetailFormValues {
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
  quantity: number;
  number: number;
  weight: number;
  height: number;
  length: number;
  width: number;
}


export interface ShipmentFormValues {
  shipper: ShipperDetailFormValues;
  receiver: RecieverDetailFormValues;
  subDetails: SubDetailFormValues;
}
