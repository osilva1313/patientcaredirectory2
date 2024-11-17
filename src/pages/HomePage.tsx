import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FeaturedAgencies from '../components/FeaturedAgencies';
import PlatinumPartners from '../components/PlatinumPartner';
import PartnerCTA from '../components/PartnerCTA';
import { agencies, platinumPartners } from '../data/mockData';
import type { SearchFilters } from '../types';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (filters: SearchFilters) => {
    setIsSearching(true);
    const params = new URLSearchParams();
    if (filters.serviceType) params.set('serviceType', filters.serviceType);
    if (filters.county) params.set('county', filters.county);
    if (filters.insurance) params.set('insurance', filters.insurance);
    await new Promise(resolve => setTimeout(resolve, 500));
    navigate(`/search?${params.toString()}`);
    setIsSearching(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-8 sm:py-12">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              The Coastal Bend
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4">
              Home Health Care Directory
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with quality home health, hospice, and healthcare providers in the South Texas Coastal Bend area.
            </p>
            <SearchBar 
              onSearch={handleSearch} 
              isSearching={isSearching}
              initialFilters={{}}
            />
          </div>
        </div>
      </div>

      {/* Platinum Partners Section */}
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 px-4 sm:px-6 lg:px-8">
          Platinum Partners
        </h2>
        <div className="px-4 sm:px-6 lg:px-8">
          <PlatinumPartners partners={platinumPartners} />
        </div>
      </div>

      {/* Trusted Providers Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 px-4 sm:px-6 lg:px-8">
          Trusted Providers
        </h2>
        <FeaturedAgencies agencies={agencies.filter(agency => agency.featured)} />
      </div>

      {/* Partner CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PartnerCTA />
      </div>
    </main>
  );
}