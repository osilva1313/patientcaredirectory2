import { Phone, Globe, Heart, MapPin, CreditCard } from 'lucide-react';
import type { Agency } from '../types';

interface FeaturedAgenciesProps {
  agencies: Agency[];
}

export default function FeaturedAgencies({ agencies }: FeaturedAgenciesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
      {agencies.map((agency) => (
        <div key={agency.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{agency.name}</h3>
              {agency.featured && (
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-blue-700 text-sm mb-4 line-clamp-2">{agency.address}</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-blue-800">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href={`tel:${agency.phone}`} className="text-sm hover:text-blue-600 font-medium truncate">
                  {agency.phone}
                </a>
              </div>
              
              <div className="flex items-center text-blue-800">
                <Globe className="h-5 w-5 mr-2 flex-shrink-0" />
                <a 
                  href={agency.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 font-medium truncate"
                >
                  Visit Website
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Service Types */}
              {agency.serviceTypes.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center px-2.5 py-1 bg-rose-100 text-rose-800 text-xs font-medium rounded-full"
                >
                  <Heart className="h-3 w-3 mr-1" />
                  {service}
                </span>
              ))}

              {/* Counties */}
              {agency.counties.map((county) => (
                <span
                  key={county}
                  className="inline-flex items-center px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {county}
                </span>
              ))}

              {/* Insurance */}
              {agency.insuranceAccepted.map((insurance) => (
                <span
                  key={insurance}
                  className="inline-flex items-center px-2.5 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                >
                  <CreditCard className="h-3 w-3 mr-1" />
                  {insurance}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}