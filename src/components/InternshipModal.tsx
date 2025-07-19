import React from 'react';
import { X, MapPin, Calendar, DollarSign, Mail, Building, Clock, ExternalLink } from 'lucide-react';
import { Internship } from '../types';

interface InternshipModalProps {
  internship: Internship;
  onClose: () => void;
}

const InternshipModal: React.FC<InternshipModalProps> = ({ internship, onClose }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getWorkTypeColor = (workType: string) => {
    switch (workType) {
      case 'Remote':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Hybrid':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Onsite':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    return category === 'SIWES' 
      ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
      : 'bg-amber-100 text-amber-800 border-amber-200';
  };

  const handleApply = () => {
    const subject = encodeURIComponent(`Application for ${internship.role} - Naija Internships Hub`);
    const body = encodeURIComponent(
      `Dear ${internship.companyName} Team,\n\nI am writing to express my interest in the ${internship.role} position advertised on Naija Internships Hub.\n\nPlease find my application details below:\n\n[Your Name]\n[Your Contact Information]\n[Your University/Institution]\n[Brief introduction and qualifications]\n\nI look forward to hearing from you.\n\nBest regards,\n[Your Name]`
    );
    window.open(`mailto:${internship.email}?subject=${subject}&body=${body}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <div className="flex items-center space-x-3 mb-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(internship.category)}`}>
                  {internship.category}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getWorkTypeColor(internship.workType)}`}>
                  {internship.workType}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {internship.role}
              </h2>
              <div className="flex items-center text-lg text-gray-600">
                <Building className="h-5 w-5 mr-2" />
                <span className="font-semibold">{internship.companyName}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-gray-900 font-semibold">
                {internship.state || 'Any Location'}, {internship.country}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center text-gray-600 mb-2">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-medium">Salary</span>
              </div>
              <p className="text-gray-900 font-semibold">{internship.salary}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">Start Date</span>
              </div>
              <p className="text-gray-900 font-semibold">
                {formatDate(internship.startDate)}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {internship.jobDescription}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-emerald-900 mb-3">
              Contact Information
            </h3>
            <div className="flex items-center text-emerald-700">
              <Mail className="h-5 w-5 mr-3" />
              <a 
                href={`mailto:${internship.email}`}
                className="font-medium hover:underline"
              >
                {internship.email}
              </a>
            </div>
          </div>

          {/* Application Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Ready to Apply?
            </h3>
            <p className="text-gray-600 mb-4">
              Click the button below to compose an email application that will be sent directly to {internship.companyName}.
            </p>
            <button
              onClick={handleApply}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Apply Now</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Posted: {new Date(internship.timestamp).toLocaleDateString()}</span>
            </div>
            <span className="text-emerald-600 font-medium">
              Naija Internships Hub
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipModal;