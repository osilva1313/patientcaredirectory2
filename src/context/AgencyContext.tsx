import React, { createContext, useContext, useState } from 'react';
import { mockAgencies } from '../data/mockData';
import type { Agency } from '../types';

interface AgencyContextType {
  agencies: Agency[];
  addAgency: (agency: Omit<Agency, 'id' | 'featured'>) => void;
}

const AgencyContext = createContext<AgencyContextType | undefined>(undefined);

export function AgencyProvider({ children }: { children: React.ReactNode }) {
  const [agencies, setAgencies] = useState<Agency[]>(mockAgencies);

  const addAgency = (newAgency: Omit<Agency, 'id' | 'featured'>) => {
    const agency: Agency = {
      ...newAgency,
      id: (agencies.length + 1).toString(),
      featured: false,
    };
    setAgencies(prev => [...prev, agency]);
  };

  return (
    <AgencyContext.Provider value={{ agencies, addAgency }}>
      {children}
    </AgencyContext.Provider>
  );
}

export function useAgencies() {
  const context = useContext(AgencyContext);
  if (context === undefined) {
    throw new Error('useAgencies must be used within an AgencyProvider');
  }
  return context;
}