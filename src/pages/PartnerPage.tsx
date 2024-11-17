import React from 'react';
import { Shield, Mail } from 'lucide-react';

export function PartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Shield className="mx-auto h-12 w-12 text-white" />
            <h1 className="mt-2 text-3xl font-bold text-white">Become a Partner</h1>
            <p className="mt-2 text-lg text-blue-100 max-w-2xl mx-auto">
              Join our network of trusted healthcare providers and expand your reach in the South Texas Coastal Bend area.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="px-6 py-6">
            <div className="flex items-center justify-center -mt-12">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-center text-lg text-gray-700 mt-4 mb-6">
              Thank you for your interest in becoming a trusted partner. Please email <a href="mailto:osilva@pyp.com" className="text-blue-600 font-semibold hover:text-blue-700">osilva@pyp.com</a> with your company listing information:
            </p>
            <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Company Name
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Address
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Phone Number
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Website
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Services Offered (Home Health, Hospice, Provider)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Counties Serviced
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Insurances Accepted
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}