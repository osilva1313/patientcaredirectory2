export type ServiceType = 
  | 'Home Health'
  | 'Hospice Care'
  | 'Provider Service'
  | 'Physical Therapy'
  | 'Occupational Therapy'
  | 'Speech Therapy'
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
  | 'Brooks'
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
  | 'Amerigroup'
  | 'United Healthcare Medicare'
  | 'BCBS Medicare'
  | 'Cigna Health Springs'
  | 'Christus Health Medicare'
  | 'Humana PPO'
  | 'Humana Medicare'
  | 'Wellmed'
  | 'Medicare'
  | 'Medicaid'
  | 'United Healthcare'
  | 'Blue Cross Blue Shield'
  | 'Aetna'
  | 'Cigna';

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
  fax?: string;
  website: string;
  logo?: string;
  featured: boolean;
  serviceTypes: ServiceType[];
  counties: County[];
  insuranceAccepted: Insurance[];
}
