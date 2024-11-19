import { Search, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ServiceType, County, Insurance, SearchFilters } from '../types';

const serviceTypes: ServiceType[] = [
  'Home Health',
  'Hospice Care',
  'Provider Service',
  'Physical Therapy',
  'Occupational Therapy',
  'Speech Therapy',
  'IV Therapy',
  'Cardiac Care',
  'Diabetic Management',
  'Diagnosis Education',
  'Medication Management',
  'Pulmonary Care'
];

const counties: County[] = [
  'Aransas',
  'Atacosa',
  'Bandera',
  'Bee',
  'Bexar',
  'Brooks',
  'Calhoun',
  'Comal',
  'Duval',
  'Goliad',
  'Guadalupe',
  'Jim Wells',
  'Kendall',
  'Kenedy',
  'Kleberg',
  'Live Oak',
  'McMullen',
  'Medina',
  'Nueces',
  'Refugio',
  'San Patricio',
  'Victoria',
  'Wilson'
];

const insuranceTypes: Insurance[] = [
  'Traditional Medicare',
  'Aetna Medicare',
  'Amerigroup',
  'United Healthcare Medicare',
  'BCBS Medicare',
  'Cigna Health Springs',
  'Christus Health Medicare',
  'Humana PPO',
  'Humana Medicare',
  'Wellmed',
  'Medicare',
  'Medicaid',
  'United Healthcare',
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna'
];

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  isSearching: boolean;
  initialFilters?: SearchFilters;
}

export default function SearchBar({ onSearch, isSearching, initialFilters = {} }: SearchBarProps) {
  const [serviceType, setServiceType] = useState<ServiceType | ''>(initialFilters.serviceType || '');
  const [county, setCounty] = useState<County | ''>(initialFilters.county || '');
  const [insurance, setInsurance] = useState<Insurance | ''>(initialFilters.insurance || '');

  useEffect(() => {
    setServiceType(initialFilters.serviceType || '');
    setCounty(initialFilters.county || '');
    setInsurance(initialFilters.insurance || '');
  }, [initialFilters]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const filters: SearchFilters = {};
    if (serviceType) filters.serviceType = serviceType;
    if (county) filters.county = county;
    if (insurance) filters.insurance = insurance;
    
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      <div className="flex flex-col p-4 sm:p-6 bg-white rounded-lg shadow-lg space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-blue-800 mb-1">
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              className="form-select"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value as ServiceType | '')}
              disabled={isSearching}
            >
              <option value="">Select service...</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="county" className="block text-sm font-medium text-blue-800 mb-1">
              County
            </label>
            <select
              id="county"
              name="county"
              className="form-select"
              value={county}
              onChange={(e) => setCounty(e.target.value as County | '')}
              disabled={isSearching}
            >
              <option value="">Select county...</option>
              {counties.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="insurance" className="block text-sm font-medium text-blue-800 mb-1">
              Insurance
            </label>
            <select
              id="insurance"
              name="insurance"
              className="form-select"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value as Insurance | '')}
              disabled={isSearching}
            >
              <option value="">Select insurance...</option>
              {insuranceTypes.map((insurance) => (
                <option key={insurance} value={insurance}>
                  {insurance}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto btn-primary"
            disabled={isSearching}
          >
            {isSearching ? (
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            ) : (
              <Search className="h-5 w-5 mr-2" />
            )}
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>
    </form>
  );
}
