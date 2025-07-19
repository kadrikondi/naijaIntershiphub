import React from 'react';
import { ArrowRight, Users, MapPin, Star } from 'lucide-react';

interface HeroSectionProps {
  onBrowseClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBrowseClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310B981%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4 mr-2" />
            Nigeria's Premier Internship Platform
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Internships &{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              SIWES Opportunities
            </span>{' '}
            in Nigeria
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Curated for students and fresh graduates across the country. 
            Discover your next career opportunity with Nigeria's top companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBrowseClick}
              className="group bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
            >
              Browse Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejAWzaaONU2zaWARQ8W4nUSuN724DPPX1qJ6U0wUqT5joEjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Submit an Opportunity
            </a>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-lg">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Students Placed</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">36</h3>
            <p className="text-gray-600">States Covered</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-lg">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600">Partner Companies</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;