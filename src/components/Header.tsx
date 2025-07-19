import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-2 rounded-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Naija Internships Hub
              </h1>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-3 w-3 mr-1" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#opportunities" 
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Opportunities
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSejAWzaaONU2zaWARQ8W4nUSuN724DPPX1qJ6U0wUqT5joEjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Submit Opportunity
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;