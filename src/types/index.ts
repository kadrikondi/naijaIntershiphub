export interface Internship {
  timestamp: string;
  companyName: string;
  email: string;
  role: string;
  jobDescription: string;
  country: string;
  workType: 'Onsite' | 'Remote' | 'Hybrid';
  state: string;
  salary: string;
  startDate: string;
  category: 'Internship' | 'SIWES';
}

export interface FilterOptions {
  search: string;
  workType: string;
  state: string;
  category: string;
  salaryRange: string;
}