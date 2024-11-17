import React from 'react';
import { Phone, Globe } from 'lucide-react';

interface PlatinumPartner {
  id: string;
  name: string;
  description: string;
  image: string;
  phone: string;
  website: string;
}

interface PlatinumPartnersProps {
  partners: PlatinumPartner[];
}

export default function PlatinumPartners({ partners }: PlatinumPartnersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48">
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{partner.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
            <div className="space-y-3">
              <a
                href={`tel:${partner.phone}`}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">{partner.phone}</span>
              </a>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Globe className="h-4 w-4 mr-2" />
                <span className="text-sm">Visit Website</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}