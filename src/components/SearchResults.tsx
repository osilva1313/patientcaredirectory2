import { Phone, Globe, MapPin, Shield, Heart, CreditCard, Loader2 } from 'lucide-react';
import type { Agency, SearchFilters } from '../types';

interface SearchResultsProps {
  agencies: Agency[];
  filters: SearchFilters;
  isLoading?: boolean;
}

export default function SearchResults({ agencies, filters, isLoading = false }: SearchResultsProps) {
  // Filter agencies based on ALL selected criteria matching
  const filteredAgencies = agencies.filter(agency => {
    // If no filters are selected, show all agencies
    if (!filters.serviceType && !filters.county && !filters.insurance) {
      return true;
    }

    // Check if ALL selected filters match
    const serviceTypeMatch = !filters.serviceType || agency.serviceTypes.includes(filters.serviceType);
    const countyMatch = !filters.county || agency.counties.includes(filters.county);
    const insuranceMatch = !filters.insurance || agency.insuranceAccepted.includes(filters.insurance);

    // Agency must match ALL selected filters
    return serviceTypeMatch && countyMatch && insuranceMatch;
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
        <p className="text-blue-600 font-medium">Finding matching healthcare providers...</p>
      </div>
    );
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '');

  if (hasActiveFilters) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm px-6 py-4 border-l-4 border-blue-600">
          <p className="text-blue-800">
            Found {filteredAgencies.length} matching healthcare provider{filteredAgencies.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        {filteredAgencies.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Shield className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No matching providers found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your search criteria or contact us for assistance
            </p>
          </div>
        ) : (
          <div className="space-y-6 transition-all duration-300">
            {filteredAgencies.map((agency) => (
              <div
                key={agency.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          <a href={`/agency/${agency.id}`} className="hover:text-rose-600">
                            {agency.name}
                          </a>
                        </h3>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {agency.address}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {/* Service Types */}
                          {agency.serviceTypes.map((service) => (
                            <span
                              key={service}
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                filters.serviceType === service
                                  ? 'bg-rose-200 text-rose-800 ring-2 ring-rose-500'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              <Heart className="h-3 w-3 mr-1" />
                              {service}
                            </span>
                          ))}
                          
                          {/* Counties */}
                          {agency.counties.map((county) => (
                            <span
                              key={county}
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                filters.county === county
                                  ? 'bg-blue-200 text-blue-800 ring-2 ring-blue-500'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              <MapPin className="h-3 w-3 mr-1" />
                              {county}
                            </span>
                          ))}
                          
                          {/* Insurance */}
                          {agency.insuranceAccepted.map((insurance) => (
                            <span
                              key={insurance}
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                filters.insurance === insurance
                                  ? 'bg-green-200 text-green-800 ring-2 ring-green-500'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              <CreditCard className="h-3 w-3 mr-1" />
                              {insurance}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-gray-600">{agency.description}</p>
                    </div>

                    <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-start space-y-3">
                      <a
                        href={`tel:${agency.phone}`}
                        className="inline-flex items-center text-gray-700 hover:text-rose-600"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="text-sm">{agency.phone}</span>
                      </a>
                      
                      <a
                        href={agency.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 hover:text-rose-600"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="text-sm">Visit Website</span>
                      </a>

                      <a
                        href={`/agency/${agency.id}`}
                        className="inline-flex items-center px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50 transition-colors"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Show all agencies when no filters are active
  return (
    <div className="space-y-6 transition-all duration-300">
      {agencies.map((agency) => (
        <div
          key={agency.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn"
        >
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <a href={`/agency/${agency.id}`} className="hover:text-rose-600">
                      {agency.name}
                    </a>
                  </h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {agency.address}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {/* Service Types */}
                    {agency.serviceTypes.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800"
                      >
                        <Heart className="h-3 w-3 mr-1" />
                        {service}
                      </span>
                    ))}
                    
                    {/* Counties */}
                    {agency.counties.map((county) => (
                      <span
                        key={county}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {county}
                      </span>
                    ))}
                    
                    {/* Insurance */}
                    {agency.insuranceAccepted.map((insurance) => (
                      <span
                        key={insurance}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        <CreditCard className="h-3 w-3 mr-1" />
                        {insurance}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600">{agency.description}</p>
              </div>

              <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-start space-y-3">
                <a
                  href={`tel:${agency.phone}`}
                  className="inline-flex items-center text-gray-700 hover:text-rose-600"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">{agency.phone}</span>
                </a>
                
                <a
                  href={agency.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-rose-600"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-sm">Visit Website</span>
                </a>

                <a
                  href={`/agency/${agency.id}`}
                  className="inline-flex items-center px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50 transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}