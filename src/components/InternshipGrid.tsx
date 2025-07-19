import React from 'react';
import InternshipCard from './InternshipCard';
import { Internship } from '../types';

interface InternshipGridProps {
  internships: Internship[];
  onSelectInternship: (internship: Internship) => void;
}

const InternshipGrid: React.FC<InternshipGridProps> = ({ internships, onSelectInternship }) => {
  if (internships.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          No opportunities found
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Try adjusting your search criteria or check back later for new opportunities.
        </p>
      </div>
    );
  }

  // Sort internships by urgency (soonest start date first)
  const sortedInternships = [...internships].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="space-y-8">
      {/* Urgent Roles Banner */}
      {sortedInternships.length > 0 && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              🚨 Urgent Roles
            </span>
            <h3 className="text-lg font-semibold text-red-900">
              Starting Soon - Apply Now!
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedInternships.slice(0, 3).map((internship, index) => (
              <div
                key={`${internship.companyName}-${index}`}
                className="bg-white p-4 rounded-lg border border-red-200 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onSelectInternship(internship)}
              >
                <h4 className="font-semibold text-gray-900 mb-1">{internship.role}</h4>
                <p className="text-sm text-gray-600 mb-2">{internship.companyName}</p>
                <p className="text-xs text-red-600 font-medium">
                  Starts: {new Date(internship.startDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedInternships.map((internship, index) => (
          <InternshipCard
            key={`${internship.companyName}-${index}`}
            internship={internship}
            onClick={() => onSelectInternship(internship)}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipGrid;