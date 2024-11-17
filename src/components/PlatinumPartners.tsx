import React from 'react';
import { Phone, Globe } from 'lucide-react';
import { platinumPartners } from '../data/mockData';

export default function PlatinumPartners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {platinumPartners.map((partner) => (
        <div
          key={partner.id}
          className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
          <p className="text-blue-100 text-sm mb-4">{partner.description}</p>
          
          <div className="space-y-3">
            <a
              href={`tel:${partner.phone}`}
              className="flex items-center text-blue-100 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">{partner.phone}</span>
            </a>
            
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-100 hover:text-white transition-colors"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">Visit Website</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}