import React from 'react';
import { MapPin, Calendar, DollarSign, Clock, Building } from 'lucide-react';
import { Internship } from '../types';

interface InternshipCardProps {
  internship: Internship;
  onClick: () => void;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, onClick }) => {
  const isUrgent = () => {
    const startDate = new Date(internship.startDate);
    const now = new Date();
    const diffTime = startDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14 && diffDays > 0;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getWorkTypeColor = (workType: string) => {
    switch (workType) {
      case 'Remote':
        return 'bg-green-100 text-green-800';
      case 'Hybrid':
        return 'bg-blue-100 text-blue-800';
      case 'Onsite':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    return category === 'SIWES' 
      ? 'bg-emerald-100 text-emerald-800' 
      : 'bg-amber-100 text-amber-800';
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-emerald-300 group"
      onClick={onClick}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(internship.category)}`}>
                {internship.category}
              </span>
              {isUrgent() && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                  Urgent
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
              {internship.role}
            </h3>
            <div className="flex items-center text-gray-600 mb-3">
              <Building className="h-4 w-4 mr-2" />
              <span className="font-medium">{internship.companyName}</span>
            </div>
          </div>
        </div>

        {/* Location and Work Type */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{internship.state || 'Any Location'}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getWorkTypeColor(internship.workType)}`}>
            {internship.workType}
          </span>
        </div>

        {/* Job Description Preview */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {internship.jobDescription.length > 120 
            ? `${internship.jobDescription.substring(0, 120)}...` 
            : internship.jobDescription}
        </p>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="font-medium">{internship.salary}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(internship.startDate)}</span>
          </div>
        </div>

        <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium group-hover:bg-emerald-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;