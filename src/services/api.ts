import { Internship } from '../types';

// SheetDB API URL - commented out for future use
// const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/YOUR_SHEETDB_API_KEY';

// Real data from the provided spreadsheet
const REAL_DATA: Internship[] = [
  {
    timestamp: '2025-07-03T22:04:21Z',
    companyName: 'Xuriel Resources Limited',
    email: 'a.adedeji@xuriel.co',
    role: 'Social media/digital marketing, website designer',
    jobDescription: 'Join our team as a Social Media/Digital Marketing specialist and Website Designer. You will be responsible for creating engaging digital content, managing social media platforms, and designing modern websites that drive business growth.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Oyo',
    salary: '₦70,000 - ₦100,000',
    startDate: '2025-07-17',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-24T22:52:04Z',
    companyName: 'Oic Hub',
    email: 'abiodunwariz251@gmail.com',
    role: 'Internship',
    jobDescription: 'General internship opportunity with comprehensive training and hands-on experience in various aspects of business operations and technology.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '₦500,000',
    startDate: '2025-08-24',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-22T06:24:31Z',
    companyName: 'Volta Charger',
    email: 'ac@voltacharger.com',
    role: 'EDM coordinator, Content Coordinator, Content Strategist, Influencer Marketing',
    jobDescription: 'Join our dynamic marketing team as an EDM Coordinator, Content Coordinator, Content Strategist, or Influencer Marketing specialist. Work with cutting-edge electric vehicle charging technology while building engaging marketing campaigns.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '₦200,000 - ₦500,000',
    startDate: '2025-07-06',
    category: 'Internship'
  },
  {
    timestamp: '2025-07-12T15:24:01Z',
    companyName: 'Gusto Media & Entertainment',
    email: 'admin@gustoentertainment.ng',
    role: 'Digital Content Creator Intern',
    jobDescription: 'Create youth-friendly entertainment content by appearing in front of the screen and developing engaging visual content. Basic mobile editing knowledge is a plus. Ideate and create content that resonates with young audiences.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦50,000 - ₦70,000',
    startDate: '2025-07-19',
    category: 'SIWES'
  },
  {
    timestamp: '2025-06-20T20:38:34Z',
    companyName: 'Nimbus Media Limited',
    email: 'Admin@nimbus.com.ng',
    role: 'Sales associate, Operations Executive, Project Manager',
    jobDescription: 'Multiple roles available including Sales Associate, Operations Executive, and Project Manager. Gain experience in sales, operations management, and project coordination in a dynamic media environment.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦100,000 - ₦200,000',
    startDate: '2025-07-04',
    category: 'Internship'
  },
  {
    timestamp: '2025-07-12T19:46:39Z',
    companyName: 'Seso Global',
    email: 'admin@seso.global',
    role: 'Sales',
    jobDescription: 'Sales role requiring excellent communication skills to speak with prospective homebuyers and mortgagees looking to purchase real estate in Africa. International exposure with US-based company.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '$100 - $200 per month plus commissions',
    startDate: '2025-07-19',
    category: 'Internship'
  },
  {
    timestamp: '2025-07-13T03:22:55Z',
    companyName: 'Visacompanion',
    email: 'admin@visacompanion.ai',
    role: 'Social Media Manager',
    jobDescription: 'Drive VisaCompanion\'s online presence by crafting engaging, immigration-tech-focused content across Instagram, LinkedIn, and X. Grow our community, boost brand visibility, and turn followers into clients with smart, data-driven campaigns.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '₦100,000',
    startDate: '2025-07-20',
    category: 'Internship'
  },
  {
    timestamp: '2025-07-13T03:28:31Z',
    companyName: 'Visacompanion',
    email: 'admin@visacompanion.ai',
    role: 'ML Engineer & Software Engineer',
    jobDescription: 'Build and fine-tune intelligent models that power VisaCompanion\'s core immigration tools, from RFE analyzers to profile evaluators. Work with structured and unstructured data to deliver real-time, AI-driven insights for global immigrants.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '₦150,000 - ₦200,000',
    startDate: '2025-07-20',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-21T19:33:52Z',
    companyName: 'African Rhapsody',
    email: 'africanrhapsody@gmail.com',
    role: 'Social Media Manager',
    jobDescription: 'Celebrate African beauty through skincare by managing our social media presence. Create compelling content, build community engagement, and represent our authentic African beauty brand across digital platforms. Experience with beauty, lifestyle, or wellness brands preferred.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦50,000 - ₦100,000',
    startDate: '2025-06-28',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-21T19:41:12Z',
    companyName: 'African Rhapsody',
    email: 'africanrhapsody@gmail.com',
    role: 'Female Personal Assistant',
    jobDescription: 'Support the founder of African Rhapsody in managing day-to-day administrative, business, and personal tasks. Handle calendars, correspondence, meetings, and coordination in a fast-paced, creative beauty brand environment.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦50,000 - ₦100,000',
    startDate: '2025-06-28',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-21T19:24:48Z',
    companyName: 'African Rhapsody',
    email: 'africanrhapsody@gmail.com',
    role: 'Bio Chemist',
    jobDescription: 'Join our product development team to formulate skincare and beauty products using natural African botanicals. Conduct laboratory tests, evaluate ingredient interactions, and contribute to clean beauty innovation rooted in African heritage.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦50,000 - ₦100,000',
    startDate: '2025-06-28',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-21T19:47:24Z',
    companyName: 'African Rhapsody',
    email: 'africanrhapsody@gmail.com',
    role: 'Sales and Marketing Intern',
    jobDescription: 'Support in-store activations and brand promotions at supermarkets and retail outlets. Engage with customers, educate about products, manage displays, and collect feedback for our African-inspired skincare brand.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦50,000 - ₦100,000',
    startDate: '2025-06-28',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-17T18:42:00Z',
    companyName: 'Ai Teacha',
    email: 'aiteachaedu@gmail.com',
    role: 'Social Media/Digital Marketer, Graphics Designer, Community Manager, AI Engineer, Growth Executive',
    jobDescription: 'Multiple roles available in our AI education platform including Social Media/Digital Marketing, Graphics Design, Community Management, AI Engineering, and Growth Executive positions. Join the future of education technology.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦100,000 - ₦350,000',
    startDate: '2025-06-24',
    category: 'Internship'
  },
  {
    timestamp: '2025-07-13T12:16:45Z',
    companyName: 'Amoke ewa Agoyin sauce \'N\' special',
    email: 'amokewaagoyinspecial@gmail.com',
    role: 'Social Media Manager and Assistant Cook',
    jobDescription: 'Handle social media pages and assist in kitchen operations for our traditional Nigerian food business. Perfect opportunity to combine digital marketing skills with culinary experience.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '₦50,000',
    startDate: '2025-07-27',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-19T22:58:02Z',
    companyName: 'Anesi Lifestyle',
    email: 'anesilifestyle@gmail.com',
    role: 'Digital Marketer',
    jobDescription: 'Handle social media management, digital marketing, customer support, and sales for our lifestyle brand. Comprehensive role covering multiple aspects of digital business operations.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦70,000 - ₦100,000',
    startDate: '2025-06-26',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-19T23:04:53Z',
    companyName: 'Anesi Lifestyle',
    email: 'anesilifestyle@gmail.com',
    role: 'Production Assistant',
    jobDescription: 'Support production and packaging operations, inventory management, order fulfillment, and maintain cleanliness and safety standards in our home fragrance manufacturing facility.',
    country: 'Nigeria',
    workType: 'Onsite',
    state: 'Lagos',
    salary: '₦70,000',
    startDate: '2025-06-26',
    category: 'Internship'
  },
  {
    timestamp: '2025-07-13T01:06:28Z',
    companyName: 'Estendo Power Products Co. Ltd.',
    email: 'Arinze@estendo.net',
    role: 'Accountant and Marketer',
    jobDescription: 'Dual role combining accounting responsibilities with marketing activities. Gain experience in financial management and business development in the power products industry.',
    country: 'Nigeria',
    workType: 'Onsite',
    state: 'Lagos',
    salary: '₦95,000',
    startDate: '2025-07-27',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-22T20:30:50Z',
    companyName: 'Ari_design',
    email: 'Arishuaib@gmail.com',
    role: 'Brand Manager in Health Niche',
    jobDescription: 'Manage brand strategy and operations in the health sector. International opportunity with remote work flexibility and exposure to global health industry trends.',
    country: 'Nigeria',
    workType: 'Remote',
    state: 'Any',
    salary: '₦80,000',
    startDate: '2025-06-29',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-22T15:57:23Z',
    companyName: 'Jekacode Africa',
    email: 'ayo@jekacode.africa',
    role: 'Frontend, Backend and UI/UX',
    jobDescription: 'Multiple software development roles available including Frontend Development, Backend Development, and UI/UX Design. Join our African tech company and build innovative solutions.',
    country: 'Nigeria',
    workType: 'Hybrid',
    state: 'Lagos',
    salary: '₦100,000 - ₦150,000',
    startDate: '2025-07-06',
    category: 'Internship'
  },
  {
    timestamp: '2025-06-26T17:01:52Z',
    companyName: 'Maayoit Healthcare Limited',
    email: 'ayodeji.ipinlaiye@maayoithealth.org',
    role: 'Quality Assurance Executive & Marketing Executive',
    jobDescription: 'Dual roles available in Quality Assurance and Marketing within the healthcare sector. Ensure product quality standards while developing marketing strategies for healthcare products and services.',
    country: 'Nigeria',
    workType: 'Onsite',
    state: 'Kwara',
    salary: '₦80,000 - ₦100,000',
    startDate: '2025-08-26',
    category: 'Internship'
  }
];

export const fetchInternships = async (): Promise<Internship[]> => {
  try {
    // For production with SheetDB, uncomment and configure this:
    /*
    const response = await fetch(SHEETDB_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch internships');
    }
    const data = await response.json();
    return data.map(mapSheetDataToInternship);
    */
    
    // Using real data provided
    await new Promise(resolve => setTimeout(resolve, 800));
    return REAL_DATA;
  } catch (error) {
    console.error('Error fetching internships:', error);
    throw error;
  }
};

// Map function to convert Google Sheet data to our Internship interface
// This will be used when SheetDB integration is enabled
const mapSheetDataToInternship = (sheetRow: any): Internship => {
  return {
    timestamp: sheetRow['Timestamp'] || '',
    companyName: sheetRow['Name of your Company'] || '',
    email: sheetRow['Official email address ( Please only add work email address here )'] || '',
    role: sheetRow['The role you\'re hiring for - Kindly state the exact role'] || '',
    jobDescription: sheetRow['Is there a JD for this role?  Kindly add if you have one'] || '',
    country: sheetRow['Company\'s Country'] || '',
    workType: sheetRow['Is this Role Onsite - Remote or Hybrid'] || 'Onsite',
    state: sheetRow['If role is Onsite or Hybrid, please Add the state'] || '',
    salary: sheetRow['Salary - Include Currency ( Kindly include actual salary amount or range )'] || '',
    startDate: sheetRow['How soon do you need someone to start?'] || '',
    category: sheetRow['What are you hiring for?'] || 'Internship'
  };
};