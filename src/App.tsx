import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import InternshipGrid from './components/InternshipGrid';
import InternshipModal from './components/InternshipModal';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchInternships } from './services/api';
import { Internship, FilterOptions } from './types';

function App() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    workType: '',
    state: '',
    category: '',
    salaryRange: ''
  });

  useEffect(() => {
    loadInternships();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [internships, filters]);

  const loadInternships = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchInternships();
      setInternships(data);
    } catch (err) {
      setError('Failed to load internships. Please try again later.');
      console.error('Error loading internships:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...internships];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        internship =>
          internship.role.toLowerCase().includes(searchLower) ||
          internship.companyName.toLowerCase().includes(searchLower) ||
          internship.jobDescription.toLowerCase().includes(searchLower)
      );
    }

    if (filters.workType) {
      filtered = filtered.filter(internship => internship.workType === filters.workType);
    }

    if (filters.state) {
      filtered = filtered.filter(internship => internship.state === filters.state);
    }

    if (filters.category) {
      filtered = filtered.filter(internship => internship.category === filters.category);
    }

    if (filters.salaryRange) {
      filtered = filtered.filter(internship => {
        const salary = extractSalaryNumber(internship.salary);
        switch (filters.salaryRange) {
          case '0-50000':
            return salary <= 50000;
          case '50000-100000':
            return salary > 50000 && salary <= 100000;
          case '100000-200000':
            return salary > 100000 && salary <= 200000;
          case '200000+':
            return salary > 200000;
          default:
            return true;
        }
      });
    }

    setFilteredInternships(filtered);
  };

  const extractSalaryNumber = (salaryString: string): number => {
    const numbers = salaryString.match(/\d+/g);
    return numbers ? parseInt(numbers.join('')) : 0;
  };

  const scrollToOpportunities = () => {
    const element = document.getElementById('opportunities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection onBrowseClick={scrollToOpportunities} />
      
      <section id="opportunities" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your next career opportunity from top companies across Nigeria
            </p>
          </div>

          <FilterSection 
            filters={filters} 
            setFilters={setFilters}
            internships={internships}
          />

          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={loadInternships}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <InternshipGrid 
              internships={filteredInternships}
              onSelectInternship={setSelectedInternship}
            />
          )}
        </div>
      </section>

      <Footer />

      {selectedInternship && (
        <InternshipModal
          internship={selectedInternship}
          onClose={() => setSelectedInternship(null)}
        />
      )}
    </div>
  );
}

export default App;