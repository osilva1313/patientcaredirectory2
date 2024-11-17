import type { Agency, PlatinumPartner } from '../types';

export const platinumPartners: PlatinumPartner[] = [
  {
    id: 'p1',
    name: 'Elite Care Medical Center',
    description: 'Premier healthcare services with state-of-the-art facilities',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&h=400&q=80',
    phone: '(361) 555-0201',
    website: 'https://elitecare.example.com'
  },
  {
    id: 'p2',
    name: 'Coastal Wellness Institute',
    description: 'Comprehensive healthcare solutions for the community',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=400&q=80',
    phone: '(361) 555-0202',
    website: 'https://coastalwellness.example.com'
  },
  {
    id: 'p3',
    name: 'South Texas Medical Group',
    description: 'Leading healthcare provider in the Coastal Bend',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&h=400&q=80',
    phone: '(361) 555-0203',
    website: 'https://stmg.example.com'
  }
];

export const agencies: Agency[] = [
  {
    id: '1',
    name: 'American Medical Home Health',
    description: 'Providing skilled nursing, therapy services, dementia and Alzheimer\'s care, and medication management.',
    address: '2820 SPID Suite 296, Corpus Christi, TX 78415',
    phone: '361.887.9760',
    website: 'https://www.americanmedicalprograms.com/',
    featured: true,
    serviceTypes: ['Home Health', 'Physical Therapy', 'Occupational Therapy', 'Medication Management'],
    counties: ['Nueces', 'San Patricio', 'Aransas', 'Kleberg', 'Bee', 'Jim Wells'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Aetna']
  },
  {
    id: '2',
    name: 'Coastal Bend Home Health and Hospice',
    description: 'Comprehensive home health and hospice care including skilled nursing and rehabilitative therapies.',
    address: '123 Medical Dr, Corpus Christi, TX 78412',
    phone: '(361) 555-0102',
    website: 'https://cbhomehealth.com',
    featured: true,
    serviceTypes: ['Home Health', 'Hospice Care', 'IV Therapy', 'Cardiac Care', 'Pulmonary Care'],
    counties: ['Nueces', 'San Patricio', 'Aransas', 'Kleberg', 'Bee', 'Live Oak', 'Refugio', 'Goliad'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Aetna', 'Cigna']
  },
  {
    id: '3',
    name: 'Angels Care Home Health',
    description: 'Skilled nursing, physical therapy, wound care, and chronic disease management.',
    address: '456 Healthcare Blvd, Corpus Christi, TX 78411',
    phone: '(361) 555-0103',
    website: 'https://angelscarehealth.com',
    featured: true,
    serviceTypes: ['Home Health', 'Physical Therapy', 'Diabetic Management', 'Diagnosis Education'],
    counties: ['Nueces', 'San Patricio', 'Bee', 'Victoria', 'Calhoun', 'Refugio'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Blue Cross Blue Shield']
  },
  {
    id: '4',
    name: 'Gulf Coast Healthcare Services',
    description: 'Specialized home health services with a focus on rehabilitation and recovery.',
    address: '789 Shoreline Blvd, Corpus Christi, TX 78401',
    phone: '(361) 555-0104',
    website: 'https://gulfcoasthealth.com',
    featured: true,
    serviceTypes: ['Home Health', 'Physical Therapy', 'Occupational Therapy', 'Cardiac Care'],
    counties: ['Nueces', 'San Patricio', 'Aransas', 'Kenedy', 'Kleberg', 'Jim Wells', 'Duval'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'United Healthcare']
  },
  {
    id: '5',
    name: 'Devoted Healthcare & Hospice Services',
    description: 'Hospice and palliative care with specialized programs for veterans and dementia patients.',
    address: '321 Care Way, Kingsville, TX 78363',
    phone: '(361) 555-0105',
    website: 'https://devotedhhs.com',
    featured: true,
    serviceTypes: ['Hospice Care', 'Medication Management', 'IV Therapy', 'Pulmonary Care'],
    counties: ['Kleberg', 'Nueces', 'Jim Wells', 'Brooks', 'Kenedy', 'Duval', 'McMullen'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Blue Cross Blue Shield', 'Aetna']
  },
  {
    id: '6',
    name: 'New Century Hospice',
    description: 'Comprehensive hospice services, including pain management and emotional support for patients and families.',
    address: '567 Wellness Dr, Corpus Christi, TX 78414',
    phone: '(361) 555-0106',
    website: 'https://kindredhospice.com',
    featured: true,
    serviceTypes: ['Hospice Care', 'Medication Management', 'Diagnosis Education'],
    counties: ['Nueces', 'San Patricio', 'Aransas', 'Bee', 'Live Oak', 'McMullen', 'Atacosa'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Cigna']
  },
  {
    id: '7',
    name: 'Valley Regional Medical Center',
    description: 'Full-service medical provider, including emergency care and various medical specialties.',
    address: '890 Medical Center Blvd, Corpus Christi, TX 78415',
    phone: '(361) 555-0107',
    website: 'https://valleyregionalmedicalcenter.com',
    featured: true,
    serviceTypes: ['Provider Service', 'Physical Therapy', 'Occupational Therapy', 'Cardiac Care', 'Diabetic Management'],
    counties: ['Nueces', 'Bexar', 'Wilson', 'Guadalupe', 'Comal', 'Kendall', 'Bandera'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Blue Cross Blue Shield', 'United Healthcare', 'Aetna', 'Cigna']
  },
  {
    id: '8',
    name: 'Corpus Christi Medical Center',
    description: 'Multi-facility hospital system offering emergency, surgical, and specialty care.',
    address: '234 Hospital Way, Corpus Christi, TX 78416',
    phone: '(361) 555-0108',
    website: 'https://ccmedicalcenter.com',
    featured: true,
    serviceTypes: ['Provider Service', 'IV Therapy', 'Cardiac Care', 'Pulmonary Care', 'Diagnosis Education'],
    counties: ['Nueces', 'San Patricio', 'Medina', 'Guadalupe', 'Comal', 'Kendall'],
    insuranceAccepted: ['Medicare', 'Medicaid', 'Blue Cross Blue Shield', 'United Healthcare', 'Aetna', 'Cigna']
  }
];