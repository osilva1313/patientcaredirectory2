import React from 'react';
import { useParams } from 'react-router-dom';

export function AgencyPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1>Agency Details</h1>
      </div>
    </div>
  );
}