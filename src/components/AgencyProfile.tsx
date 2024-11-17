import { Phone, Globe, MapPin, Heart, Shield, CheckCircle } from 'lucide-react';
import type { Agency } from '../types';

interface AgencyProfileProps {
  agency: Agency;
}

export default function AgencyProfile({ agency }: AgencyProfileProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-rose-600 text-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center">
            <img src={agency.logo} alt={agency.name} className="h-16 w-auto bg-white rounded-lg p-2" />
            <div className="ml-6">
              <h1 className="text-2xl font-bold">{agency.name}</h1>
              <div className="flex items-center mt-2 text-rose-100">
                <MapPin className="h-4 w-4 mr-1" />
                {agency.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-600">{agency.description}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {agency.serviceTypes.map((service) => (
                  <div
                    key={service}
                    className="flex items-center p-4 bg-rose-50 rounded-lg"
                  >
                    <Heart className="h-5 w-5 text-rose-600 mr-3" />
                    <span className="text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {agency.counties.map((county) => (
                  <div
                    key={county}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <MapPin className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-900">{county} County</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href={`tel:${agency.phone}`}
                  className="flex items-center text-gray-700 hover:text-rose-600"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  {agency.phone}
                </a>
                
                <a
                  href={agency.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-rose-600"
                >
                  <Globe className="h-5 w-5 mr-3" />
                  Visit Website
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Accepted</h3>
                <ul className="space-y-2">
                  {agency.insuranceAccepted.map((insurance) => (
                    <li key={insurance} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {insurance}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button className="w-full bg-rose-600 text-white py-3 px-4 rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Contact Agency
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}