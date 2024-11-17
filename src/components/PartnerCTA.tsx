import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl overflow-hidden">
      <div className="px-6 py-12 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Become a Trusted Partner</h2>
            </div>
            <p className="text-blue-100 text-lg mb-6 max-w-xl">
              Join our network of trusted healthcare providers and connect with patients who need your services. 
              Get featured listings, premium visibility, and exclusive benefits.
            </p>
            <ul className="space-y-3 text-blue-100 mb-8">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-100 rounded-full mr-3"></span>
                Enhanced visibility in search results
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-100 rounded-full mr-3"></span>
                Detailed agency profile page
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-100 rounded-full mr-3"></span>
                Direct patient referrals
              </li>
            </ul>
            <Link
              to="/partners"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500"
              alt="Healthcare professionals"
              className="rounded-lg shadow-2xl"
              width="400"
              height="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}