import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { agencies } from '../data/mockData';
import type { SearchFilters, ServiceType, County, Insurance } from '../types';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const serviceType = searchParams.get('serviceType') as ServiceType;
    const county = searchParams.get('county') as County;
    const insurance = searchParams.get('insurance') as Insurance;

    const initialFilters: SearchFilters = {};
    if (serviceType) initialFilters.serviceType = serviceType;
    if (county) initialFilters.county = county;
    if (insurance) initialFilters.insurance = insurance;

    setFilters(initialFilters);
  }, [searchParams]);

  const handleSearch = async (newFilters: SearchFilters) => {
    setIsSearching(true);
    
    const params = new URLSearchParams();
    if (newFilters.serviceType) params.set('serviceType', newFilters.serviceType);
    if (newFilters.county) params.set('county', newFilters.county);
    if (newFilters.insurance) params.set('insurance', newFilters.insurance);
    setSearchParams(params);

    await new Promise(resolve => setTimeout(resolve, 800));
    setFilters(newFilters);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white mb-8">Search Healthcare Providers</h1>
          <SearchBar onSearch={handleSearch} isSearching={isSearching} initialFilters={filters} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mt-8">
          <SearchResults 
            agencies={agencies}
            filters={filters} 
            isLoading={isSearching}
          />
        </div>
      </div>
    </div>
  );
}