export type ServiceType = 
  | 'Home Health' 
  | 'Hospice Care' 
  | 'Provider Service'
  | 'Physical Therapy'
  | 'Occupational Therapy'
  | 'IV Therapy'
  | 'Cardiac Care'
  | 'Diabetic Management'
  | 'Diagnosis Education'
  | 'Medication Management'
  | 'Pulmonary Care';

export type County = 
  | 'Aransas'
  | 'Atacosa'
  | 'Bandera'
  | 'Bee'
  | 'Bexar'
  | 'Books'
  | 'Calhoun'
  | 'Comal'
  | 'Duval'
  | 'Goliad'
  | 'Guadalupe'
  | 'Jim Wells'
  | 'Kendall'
  | 'Kenedy'
  | 'Kleberg'
  | 'Live Oak'
  | 'McMullen'
  | 'Medina'
  | 'Nueces'
  | 'Refugio'
  | 'San Patricio'
  | 'Victoria'
  | 'Wilson';

export type Insurance = 
  | 'Traditional Medicare'
  | 'Aetna Medicare'
  | 'Medicare'
  | 'Medicaid'
  | 'United Healthcare'
  | 'Blue Cross Blue Shield'
  | 'Aetna'
  | 'Cigna'
  | 'Humana PPO';

export interface SearchFilters {
  serviceType?: ServiceType;
  county?: County;
  insurance?: Insurance;
}

export interface Agency {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  featured: boolean;
  serviceTypes: ServiceType[];
  counties: County[];
  insuranceAccepted: Insurance[];
}

export interface PlatinumPartner {
  id: string;
  name: string;
  description: string;
  image: string;
  phone: string;
  website: string;
}