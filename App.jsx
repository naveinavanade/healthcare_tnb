import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter, Download, AlertCircle, HelpCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ZoomIn, ZoomOut, X, CheckCircle, Search, Info, Heart, DollarSign, FileSpreadsheet, ShieldAlert } from 'lucide-react';
import * as XLSX from 'xlsx';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// TNB Logo as base64 (the red/orange lightning bolt logo)
const TNB_LOGO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMTUiIGZpbGw9IiNFQzRBM0EiLz4KPHBhdGggZD0iTTMwIDI1SDU1TDQwIDUwSDYwTDM1IDc1TDQ1IDUwSDI1TDMwIDI1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";

// Screen 1: Login
const LoginScreen = ({ onLogin }) => {
  // Editable content - can be easily modified
  const loginContent = {
    logo: {
      text: "TNB",
      subtext: "LOGO"
    },
    title: "TNB Claims Management",
    subtitle: "Smart Claims Processing System V1.0",
    welcomeText: "Welcome!",
    welcomeSubtext: "Let's get started",
    emailPlaceholder: "moira@tnb.com.my",
    buttonText: "GET STARTED"
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Dark with Graphics */}
      <div className="w-1/2 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden flex flex-col justify-center items-start p-12">
        {/* TNB Logo */}
        <div className="absolute top-12 left-12 z-10">
          <img src={TNB_LOGO} alt="TNB Logo" className="w-20 h-20 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform" />
        </div>
        
        {/* Main Content - Editable - Centered */}
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl font-bold text-white leading-tight">
            {loginContent.title}
          </h1>
          <p className="text-xl text-blue-200 font-light">
            {loginContent.subtitle}
          </p>
        </div>
        
        {/* Animated Graphics Background - Digital Particles Effect */}
        <div className="absolute inset-0 opacity-30">
          {/* Particle dots pattern */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96">
            <div className="relative w-full h-full">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Flowing lines effect */}
          <div className="absolute bottom-1/4 right-0 w-full h-64">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q200,150 400,200 T800,200"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <path
                d="M0,220 Q200,170 400,220 T800,220"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M0,240 Q200,190 400,240 T800,240"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Right Panel - White Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Welcome Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {loginContent.welcomeText}
            </h2>
            <p className="text-gray-500 text-lg">
              {loginContent.welcomeSubtext}
            </p>
          </div>
          
          {/* Email Input with Icon */}
          <div className="space-y-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder={loginContent.emailPlaceholder}
                className="w-full pl-14 pr-4 py-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
              />
            </div>
          </div>
          
          {/* Get Started Button */}
          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            {loginContent.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Screen 2: Dashboard
const DashboardScreen = ({ onDocumentClick }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [activeFilters, setActiveFilters] = useState([{ type: 'assignedToMe', label: 'Assigned to me' }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    overdue: false,
    assignedToMe: true,
    dateFrom: '',
    dateTo: ''
  });
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const tabs = [
    { name: 'All', count: '20' },
    { name: 'Not Started', count: '08' },
    { name: 'In Progress', count: '07' },
    { name: 'Completed', count: '05' }
  ];
  
  const getStatusStyles = (status) => {
    const styles = {
      'In-Progress': 'bg-blue-100 text-blue-700 border border-blue-200',
      'Pending Validation': 'bg-amber-100 text-amber-700 border border-amber-200',
      'System Process': 'bg-purple-100 text-purple-700 border border-purple-200',
      'Pending Pickup': 'bg-orange-100 text-orange-700 border border-orange-200',
      'Approved': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
      'Rejected': 'bg-rose-100 text-rose-700 border border-rose-200',
      'Closed': 'bg-gray-100 text-gray-700 border border-gray-200',
      'No Anomalies': 'bg-green-100 text-green-700 border border-green-200'
    };
    return styles[status] || 'bg-gray-100 text-gray-700 border border-gray-200';
  };
  
  const getStatusColor = (status) => {
    const colors = {
      'Not Started': 'bg-gray-100 text-gray-700',
      'In Progress': 'bg-blue-100 text-blue-700',
      'Completed': 'bg-green-100 text-green-700',
      // Legacy status colors (in case any remain)
      'Captured': 'bg-blue-100 text-blue-700',
      'QA': 'bg-yellow-100 text-yellow-700',
      'Uploaded': 'bg-gray-100 text-gray-700',
      'Queued': 'bg-blue-100 text-blue-700',
      'Approved': 'bg-green-100 text-green-700',
      'Rejected': 'bg-red-100 text-red-700',
      'Error': 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };
  
  const handleApplyFilters = () => {
    const filters = [];
    if (filterOptions.assignedToMe) {
      filters.push({ type: 'assignedToMe', label: 'Assigned to me' });
    }
    if (filterOptions.overdue) {
      filters.push({ type: 'overdue', label: 'Overdue' });
    }
    if (filterOptions.dateFrom && filterOptions.dateTo) {
      filters.push({ 
        type: 'dateRange', 
        label: `${filterOptions.dateFrom} - ${filterOptions.dateTo}`,
        dateFrom: filterOptions.dateFrom,
        dateTo: filterOptions.dateTo
      });
    }
    setActiveFilters(filters);
    setShowFilterDialog(false);
  };
  
  const removeFilter = (filterType) => {
    setActiveFilters(activeFilters.filter(f => f.type !== filterType));
    if (filterType === 'assignedToMe') {
      setFilterOptions({ ...filterOptions, assignedToMe: false });
    } else if (filterType === 'overdue') {
      setFilterOptions({ ...filterOptions, overdue: false });
    } else if (filterType === 'dateRange') {
      setFilterOptions({ ...filterOptions, dateFrom: '', dateTo: '' });
    }
  };
  
  // Filter documents based on search query and active filters
  const getFilteredDocuments = (documents) => {
    let filtered = documents;
    
    // Apply search query filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(doc => 
        doc.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply active filters
    activeFilters.forEach(filter => {
      switch(filter.type) {
        case 'assignedToMe':
          // Filter to show only documents assigned to current user (name@mail.com)
          filtered = filtered.filter(doc => doc.owner === 'name@mail.com');
          break;
        case 'overdue':
          // Filter to show only overdue documents (pending age > 120 minutes)
          filtered = filtered.filter(doc => parseInt(doc.pendingAge) > 120);
          break;
        case 'dateRange':
          // Filter based on date range
          if (filter.dateFrom && filter.dateTo) {
            const fromDate = new Date(filter.dateFrom);
            const toDate = new Date(filter.dateTo);
            toDate.setHours(23, 59, 59, 999); // Include the entire end date
            
            filtered = filtered.filter(doc => {
              // Parse the receivedOn date (format: "2025-07-21, 18:45")
              const docDateStr = doc.receivedOn.split(',')[0]; // Get "2025-07-21" part
              const docDate = new Date(docDateStr);
              return docDate >= fromDate && docDate <= toDate;
            });
          }
          break;
      }
    });
    
    return filtered;
  };
  
  // Pagination functions
  const getPaginatedDocuments = (documents) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return documents.slice(startIndex, endIndex);
  };
  
  const getTotalPages = (documentsLength) => {
    return Math.ceil(documentsLength / itemsPerPage);
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };
  
  const getPageNumbers = (totalPages) => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };
  
  const allDocumentsData = {
    'All': [
      { id: '1387452', fileName: 'invoice-medical-2024...', pendingAge: '200', status: 'In Progress', owner: 'name@mail.com', receivedOn: '2025-07-21, 18:45', modifiedOn: '2025-07-21, 19:15', modifiedBy: 'name@mail.com' },
  { id: '1387453', fileName: 'guarantee-letter-abc...', pendingAge: '180', status: 'Not Started', owner: 'john@mail.com', receivedOn: '2025-07-21, 17:30', modifiedOn: '', modifiedBy: '' },
  { id: '1387454', fileName: 'pre-admission-form...', pendingAge: '150', status: 'Not Started', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 16:20', modifiedOn: '', modifiedBy: '' },
  { id: '1387455', fileName: 'invoice-pharmacy...', pendingAge: '120', status: 'Not Started', owner: 'mike@mail.com', receivedOn: '2025-07-21, 15:45', modifiedOn: '', modifiedBy: '' },
      { id: '1387456', fileName: 'medical-report-xyz...', pendingAge: '100', status: 'Completed', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 14:30', modifiedOn: '2025-07-21, 15:00', modifiedBy: 'lisa@mail.com' },
  { id: '1387457', fileName: 'claim-form-2024...', pendingAge: '80', status: 'Not Started', owner: 'name@mail.com', receivedOn: '2025-07-21, 13:15', modifiedOn: '', modifiedBy: '' },
      { id: '1387458', fileName: 'receipt-consultation...', pendingAge: '60', status: 'Completed', owner: 'admin@mail.com', receivedOn: '2025-07-21, 12:00', modifiedOn: '2025-07-21, 12:30', modifiedBy: 'admin@mail.com' },
      { id: '1387459', fileName: 'lab-results-patient...', pendingAge: '45', status: 'In Progress', owner: 'john@mail.com', receivedOn: '2025-07-21, 11:30', modifiedOn: '2025-07-21, 12:00', modifiedBy: 'john@mail.com' },
      { id: '1387460', fileName: 'insurance-verification...', pendingAge: '30', status: 'Completed', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 10:45', modifiedOn: '2025-07-21, 11:15', modifiedBy: 'sarah@mail.com' },
  { id: '1387461', fileName: 'billing-statement...', pendingAge: '25', status: 'Not Started', owner: 'mike@mail.com', receivedOn: '2025-07-21, 10:00', modifiedOn: '', modifiedBy: '' },
  { id: '1387462', fileName: 'referral-letter-dr...', pendingAge: '20', status: 'Not Started', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 09:30', modifiedOn: '', modifiedBy: '' },
      { id: '1387463', fileName: 'prescription-scan...', pendingAge: '15', status: 'Completed', owner: 'name@mail.com', receivedOn: '2025-07-21, 09:00', modifiedOn: '2025-07-21, 09:30', modifiedBy: 'name@mail.com' },
  { id: '1387464', fileName: 'discharge-summary...', pendingAge: '12', status: 'Not Started', owner: 'john@mail.com', receivedOn: '2025-07-21, 08:45', modifiedOn: '', modifiedBy: '' },
      { id: '1387465', fileName: 'follow-up-notes...', pendingAge: '8', status: 'In Progress', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 08:20', modifiedOn: '2025-07-21, 08:50', modifiedBy: 'sarah@mail.com' },
      { id: '1387466', fileName: 'payment-receipt...', pendingAge: '5', status: 'In Progress', owner: 'mike@mail.com', receivedOn: '2025-07-21, 08:00', modifiedOn: '2025-07-21, 08:30', modifiedBy: 'mike@mail.com' },
      { id: '1387467', fileName: 'surgery-report...', pendingAge: '3', status: 'Completed', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 07:30', modifiedOn: '2025-07-21, 08:00', modifiedBy: 'lisa@mail.com' },
      { id: '1387468', fileName: 'therapy-notes...', pendingAge: '90', status: 'In Progress', owner: 'john@mail.com', receivedOn: '2025-07-21, 06:45', modifiedOn: '2025-07-21, 07:15', modifiedBy: 'john@mail.com' },
      { id: '1387469', fileName: 'consultation-fee...', pendingAge: '70', status: 'In Progress', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 06:00', modifiedOn: '2025-07-21, 06:30', modifiedBy: 'sarah@mail.com' },
      { id: '1387470', fileName: 'ambulance-receipt...', pendingAge: '50', status: 'In Progress', owner: 'mike@mail.com', receivedOn: '2025-07-21, 05:30', modifiedOn: '2025-07-21, 06:00', modifiedBy: 'mike@mail.com' },
  { id: '1387471', fileName: 'rehab-program...', pendingAge: '40', status: 'Not Started', owner: 'name@mail.com', receivedOn: '2025-07-21, 05:00', modifiedOn: '', modifiedBy: '' }
    ],
    'Not Started': [
  { id: '1387453', fileName: 'guarantee-letter-abc...', pendingAge: '180', status: 'Not Started', owner: 'john@mail.com', receivedOn: '2025-07-21, 17:30', modifiedOn: '', modifiedBy: '' },
  { id: '1387454', fileName: 'pre-admission-form...', pendingAge: '150', status: 'Not Started', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 16:20', modifiedOn: '', modifiedBy: '' },
  { id: '1387455', fileName: 'invoice-pharmacy...', pendingAge: '120', status: 'Not Started', owner: 'mike@mail.com', receivedOn: '2025-07-21, 15:45', modifiedOn: '', modifiedBy: '' },
  { id: '1387457', fileName: 'claim-form-2024...', pendingAge: '80', status: 'Not Started', owner: 'name@mail.com', receivedOn: '2025-07-21, 13:15', modifiedOn: '', modifiedBy: '' },
  { id: '1387461', fileName: 'billing-statement...', pendingAge: '25', status: 'Not Started', owner: 'mike@mail.com', receivedOn: '2025-07-21, 10:00', modifiedOn: '', modifiedBy: '' },
  { id: '1387462', fileName: 'referral-letter-dr...', pendingAge: '20', status: 'Not Started', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 09:30', modifiedOn: '', modifiedBy: '' },
  { id: '1387464', fileName: 'discharge-summary...', pendingAge: '12', status: 'Not Started', owner: 'john@mail.com', receivedOn: '2025-07-21, 08:45', modifiedOn: '', modifiedBy: '' },
  { id: '1387471', fileName: 'rehab-program...', pendingAge: '40', status: 'Not Started', owner: 'name@mail.com', receivedOn: '2025-07-21, 05:00', modifiedOn: '', modifiedBy: '' }
    ],
    'In Progress': [
      { id: '1387452', fileName: 'invoice-medical-2024...', pendingAge: '200', status: 'In Progress', owner: 'name@mail.com', receivedOn: '2025-07-21, 18:45', modifiedOn: '2025-07-21, 19:15', modifiedBy: 'name@mail.com' },
      { id: '1387459', fileName: 'lab-results-patient...', pendingAge: '45', status: 'In Progress', owner: 'john@mail.com', receivedOn: '2025-07-21, 11:30', modifiedOn: '2025-07-21, 12:00', modifiedBy: 'john@mail.com' },
      { id: '1387465', fileName: 'follow-up-notes...', pendingAge: '8', status: 'In Progress', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 08:20', modifiedOn: '2025-07-21, 08:50', modifiedBy: 'sarah@mail.com' },
      { id: '1387466', fileName: 'payment-receipt...', pendingAge: '5', status: 'In Progress', owner: 'mike@mail.com', receivedOn: '2025-07-21, 08:00', modifiedOn: '2025-07-21, 08:30', modifiedBy: 'mike@mail.com' },
      { id: '1387468', fileName: 'therapy-notes...', pendingAge: '90', status: 'In Progress', owner: 'john@mail.com', receivedOn: '2025-07-21, 06:45', modifiedOn: '2025-07-21, 07:15', modifiedBy: 'john@mail.com' },
      { id: '1387469', fileName: 'consultation-fee...', pendingAge: '70', status: 'In Progress', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 06:00', modifiedOn: '2025-07-21, 06:30', modifiedBy: 'sarah@mail.com' },
      { id: '1387470', fileName: 'ambulance-receipt...', pendingAge: '50', status: 'In Progress', owner: 'mike@mail.com', receivedOn: '2025-07-21, 05:30', modifiedOn: '2025-07-21, 06:00', modifiedBy: 'mike@mail.com' }
    ],
    'Completed': [
      { id: '1387456', fileName: 'medical-report-xyz...', pendingAge: '100', status: 'Completed', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 14:30', modifiedOn: '2025-07-21, 15:00', modifiedBy: 'lisa@mail.com' },
      { id: '1387458', fileName: 'receipt-consultation...', pendingAge: '60', status: 'Completed', owner: 'admin@mail.com', receivedOn: '2025-07-21, 12:00', modifiedOn: '2025-07-21, 12:30', modifiedBy: 'admin@mail.com' },
      { id: '1387460', fileName: 'insurance-verification...', pendingAge: '30', status: 'Completed', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 10:45', modifiedOn: '2025-07-21, 11:15', modifiedBy: 'sarah@mail.com' },
      { id: '1387463', fileName: 'prescription-scan...', pendingAge: '15', status: 'Completed', owner: 'name@mail.com', receivedOn: '2025-07-21, 09:00', modifiedOn: '2025-07-21, 09:30', modifiedBy: 'name@mail.com' },
      { id: '1387467', fileName: 'surgery-report...', pendingAge: '3', status: 'Completed', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 07:30', modifiedOn: '2025-07-21, 08:00', modifiedBy: 'lisa@mail.com' }
    ]
  };
  
  const documents = allDocumentsData[activeTab] || [];
  const filteredDocuments = getFilteredDocuments(documents);
  const totalPages = getTotalPages(filteredDocuments.length);
  const paginatedDocuments = getPaginatedDocuments(filteredDocuments);
  
  // Reset to page 1 when tab changes or filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, activeFilters, searchQuery]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 overflow-visible">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={TNB_LOGO} alt="TNB Logo" className="w-12 h-12 rounded-lg flex-shrink-0" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TNB Claims Management</h1>
              <p className="text-sm text-gray-500">Smart Claims Processing System V1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold">
              M
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-8">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`py-3 px-2 font-medium text-sm transition-all relative whitespace-nowrap ${
                activeTab === tab.name
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                {tab.name}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.name
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </span>
              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="px-8 py-6">
        <div className="flex items-center gap-4 mb-4">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Claim #"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
            
          
          <button
            onClick={() => setShowFilterDialog(true)}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
        
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-sm text-gray-600 font-medium">Active filters:</span>
            {activeFilters.map((filter, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {filter.label}
                <button onClick={() => removeFilter(filter.type)} className="hover:bg-blue-200 rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
        
        {/* Search Results Count */}
        {searchQuery && (
          <div className="mb-4 text-sm text-gray-600">
            Found {filteredDocuments.length} result{filteredDocuments.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}
      </div>
      
      {/* Document Table */}
      <div className="px-8 pb-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Document ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">File Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pending Age (Minutes)</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Reviewer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Received On</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Modified On</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Modified By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onDocumentClick(doc.id)}
                      className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                    >
                      {doc.id}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{doc.fileName}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{doc.pendingAge}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{doc.owner}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{doc.receivedOn}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{doc.modifiedOn}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{doc.modifiedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronsLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              
              {getPageNumbers(totalPages).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-[32px] h-8 px-2 rounded font-medium text-sm transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
              <button 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronsRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredDocuments.length)} to {Math.min(currentPage * itemsPerPage, filteredDocuments.length)} of {filteredDocuments.length} results
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <select 
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-600">items per page</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Dialog */}
      {showFilterDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Filters</h3>
              <button onClick={() => setShowFilterDialog(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={filterOptions.assignedToMe}
                  onChange={(e) => setFilterOptions({...filterOptions, assignedToMe: e.target.checked})}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">Assigned to me</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={filterOptions.overdue}
                  onChange={(e) => setFilterOptions({...filterOptions, overdue: e.target.checked})}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">Show overdue only</span>
              </label>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Date From</label>
                <input
                  type="date"
                  value={filterOptions.dateFrom}
                  onChange={(e) => setFilterOptions({...filterOptions, dateFrom: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Date To</label>
                <input
                  type="date"
                  value={filterOptions.dateTo}
                  onChange={(e) => setFilterOptions({...filterOptions, dateTo: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowFilterDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyFilters}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Info Popup Component
const InfoPopup = ({ message, onClose, position }) => {
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div 
        className="absolute bg-white border-2 border-red-500 rounded-lg shadow-2xl p-4 max-w-xs animate-fadeIn"
        style={{
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -120%)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

// Bearer Selection Dialog Component
const BearerSelectionDialog = ({ onClose, onSelect, currentSelection }) => {
  const [selected, setSelected] = useState(currentSelection || 'hospital');
  
  const handleConfirm = () => {
    onSelect(selected);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          Select Bearer
        </h3>
        
        <div className="space-y-3 mb-6">
          <label className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${selected === 'hospital' ? 'border-green-600 bg-green-50' : 'border-gray-300'}`}>
            <input
              type="radio"
              name="bearer"
              value="hospital"
              checked={selected === 'hospital'}
              onChange={(e) => setSelected(e.target.value)}
              className="w-5 h-5 text-green-600 focus:ring-green-500"
            />
            <span className="text-sm font-medium text-gray-700">Hospital to bear</span>
          </label>
          
          <label className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${selected === 'patient' ? 'border-green-600 bg-green-50' : 'border-gray-300'}`}>
            <input
              type="radio"
              name="bearer"
              value="patient"
              checked={selected === 'patient'}
              onChange={(e) => setSelected(e.target.value)}
              className="w-5 h-5 text-green-600 focus:ring-green-500"
            />
            <span className="text-sm font-medium text-gray-700">Patient to bear</span>
          </label>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// Screen 3: Document Detail
const DocumentDetailScreen = ({ documentId, onBack }) => {
  const [activeMainTab, setActiveMainTab] = useState('Invoices');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [showInfoPopup, setShowInfoPopup] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [showBearerDialog, setShowBearerDialog] = useState(false);
  const [selectedBearerFieldIndex, setSelectedBearerFieldIndex] = useState(null);
  const [showGuidelineDropdown, setShowGuidelineDropdown] = useState(false);
  
  const mainTabs = ['Invoices', 'Guarantee Letter (GL)', 'Pre-Admission Form (PAF)', 'Cross Referral (CR)', 'Additional Guarantee (AG)', 'Others'];
  
  // Guideline dropdown options
  const guidelineOptions = [
    {
      name: '5TH MMA fee - edition',
      url: 'https://ts.accenture.com/:b:/r/sites/AAAMSDelivery/Shared%20Documents/General/02%20App%20Development%20(AD)/2025%20-%2001%20-%20Healthcare%20Digitization/Functional_Docs/TNB%20Medical%20Guidelines%20and%20Fees/5TH%20MMA%20FEE%20-EDITION-VERSION-2.0-2020.pdf?csf=1&web=1&e=Txu6GV'
    },
    {
      name: '7. MMA 13th fee schedule',
      url: 'https://ts.accenture.com/:b:/r/sites/AAAMSDelivery/Shared%20Documents/General/02%20App%20Development%20(AD)/2025%20-%2001%20-%20Healthcare%20Digitization/Functional_Docs/TNB%20Medical%20Guidelines%20and%20Fees/7.%20MMA%2013th%20fee%20schedule.pdf?csf=1&web=1&e=mqHplJ'
    },
    {
      name: 'Final Bill Assessment',
      url: 'https://ts.accenture.com/:x:/r/sites/AAAMSDelivery/Shared%20Documents/General/02%20App%20Development%20(AD)/2025%20-%2001%20-%20Healthcare%20Digitization/Functional_Docs/TNB%20Medical%20Guidelines%20and%20Fees/Final%20Bill%20Assessment%20Guidelines%20Edited%2009072025.xlsx?d=w8c21e340a447460e9a4be78eaa29732f&csf=1&web=1&e=hjg1E6'
    },
    {
      name: 'Medical Guidelines',
      url: 'https://ts.accenture.com/:b:/r/sites/AAAMSDelivery/Shared%20Documents/General/02%20App%20Development%20(AD)/2025%20-%2001%20-%20Healthcare%20Digitization/Functional_Docs/TNB%20Medical%20Guidelines%20and%20Fees/MEDICAL%20GUIDELINES%20HOSP%20VER%204.0.pdf?csf=1&web=1&e=nyJDFs'
    }
  ];
  
  // Handler for opening guideline links
  const handleGuidelineClick = (url) => {
    window.open(url, '_blank');
    setShowGuidelineDropdown(false);
  };
  
  const [expandedAccordions, setExpandedAccordions] = useState({
    documentReview: false,
    medicalPolicy: false,
    mmaFeeSchedule: false,
    otherPolicy: false
  });
  
  const [documentReviewFields, setDocumentReviewFields] = useState({
    agTopUp: { 
      value: '2 pages', 
      checked: false,
      systemCollection: '2 pages',
      agentObserved: ''
    },
    paf: { 
      value: '2 pages', 
      checked: false,
      systemCollection: '2 pages',
      agentObserved: ''
    },
    cr: { 
      value: '2 pages', 
      checked: false,
      systemCollection: '2 pages',
      agentObserved: ''
    },
    invoice: { 
      value: '2 pages', 
      checked: false,
      systemCollection: '2 pages',
      agentObserved: ''
    }
  });
  
  const [showAddLineItemDialog, setShowAddLineItemDialog] = useState(false);
  const [showQueryChatbot, setShowQueryChatbot] = useState(false);
  const [newLineItem, setNewLineItem] = useState({
    itemCategory: 'medicalPolicy',
    category: 'Pharma & Medication',
    description: '',
    payable: '',
    status: 'Not Covered',
    reason: '',
    bearer: '', // 'hospital' or 'patient'
    mmuValidation: false
  });
  
  const [showSummaryDialog, setShowSummaryDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showDraftToast, setShowDraftToast] = useState(false);
  
  const toggleAccordion = (section) => {
    setExpandedAccordions(prev => {
      // Close all accordions
      const allClosed = {
        documentReview: false,
        medicalPolicy: false,
        mmaFeeSchedule: false,
        otherPolicy: false
      };
      // Toggle only the clicked section
      return {
        ...allClosed,
        [section]: !prev[section]
      };
    });
  };
  
  const handleAddLineItem = () => {
    const newField = {
      label: newLineItem.category,
      value: newLineItem.description,
      amount: parseFloat(newLineItem.payable) || 0,
      approved: false, // NOT auto-approved - user must click green tick
      rejected: false,
      rejectionReason: newLineItem.reason,
      rejectionSubmitted: false, // NOT auto-flagged
      mmuValidation: newLineItem.mmuValidation,
      status: 'Not Covered',
      bearer: newLineItem.bearer || 'hospital',
      bearerSelected: true,
      isNotCovered: true // Always flag for display logic (shows edit + green check)
    };
    
    // Add to the appropriate accordion based on itemCategory
    if (newLineItem.itemCategory === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => [...prev, newField]);
      setExpandedAccordions(prev => ({ ...prev, medicalPolicy: true }));
    } else if (newLineItem.itemCategory === 'otherPolicy') {
      setDynamicOtherPolicyFields(prev => [...prev, newField]);
      setExpandedAccordions(prev => ({ ...prev, otherPolicy: true }));
    } else if (newLineItem.itemCategory === 'documentReview') {
      setDynamicMedicalPolicyFields(prev => [...prev, newField]);
      setExpandedAccordions(prev => ({ ...prev, documentReview: true }));
    } else if (newLineItem.itemCategory === 'mmaFeeSchedule') {
      setDynamicMedicalPolicyFields(prev => [...prev, newField]);
      setExpandedAccordions(prev => ({ ...prev, mmaFeeSchedule: true }));
    }
    
    setShowAddLineItemDialog(false);
    setNewLineItem({ 
      itemCategory: 'medicalPolicy',
      category: 'Pharma & Medication',
      description: '',
      payable: '',
      status: 'Not Covered',
      reason: '',
      bearer: '',
      mmuValidation: false
    });
    
    // Scroll to the accordion section after a small delay
    setTimeout(() => {
      const accordionMap = {
        'documentReview': 'Document Review',
        'medicalPolicy': 'Medical Policy',
        'mmaFeeSchedule': 'MMA Fee Schedule',
        'otherPolicy': 'Other Policy'
      };
      const sectionName = accordionMap[newLineItem.itemCategory];
      if (sectionName) {
        const section = document.querySelector(`h3:contains("${sectionName}")`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }, 100);
  };
  
  const handleDocumentReviewCheck = (field) => {
    setDocumentReviewFields(prev => ({
      ...prev,
      [field]: { ...prev[field], checked: !prev[field].checked }
    }));
  };
  
  const getDocumentReviewStatus = () => {
    const fields = Object.values(documentReviewFields);
    if (fields.every(f => f.checked)) return 'approved';
    if (fields.some(f => f.checked)) return 'partial';
    return 'none';
  };
  
  // Check if Document Review is fully validated (all checked AND values match)
  const isDocumentReviewComplete = () => {
    const fields = Object.entries(documentReviewFields);
    return fields.every(([key, field]) => {
      // Must be checked
      if (!field.checked) return false;
      // System collection must match agent observed
      const systemValue = (field.systemCollection || field.value || '').toString().trim();
      const agentValue = (field.agentObserved || '').toString().trim();
      
      // Extract numbers for comparison (e.g., "2 pages" vs "2")
      const systemNum = systemValue.match(/\d+/)?.[0];
      const agentNum = agentValue.match(/\d+/)?.[0];
      
      // If both have numbers, compare numbers; otherwise compare strings
      if (systemNum && agentNum) {
        return systemNum === agentNum;
      }
      return systemValue === agentValue;
    });
  };
  
  const hasDocumentReviewMismatch = () => {
    const fields = Object.entries(documentReviewFields);
    return fields.some(([key, field]) => {
      const systemValue = (field.systemCollection || field.value || '').toString().trim();
      const agentValue = (field.agentObserved || '').toString().trim();
      
      if (!agentValue) return false; // No mismatch if agent hasn't entered value
      
      const systemNum = systemValue.match(/\d+/)?.[0];
      const agentNum = agentValue.match(/\d+/)?.[0];
      
      if (systemNum && agentNum) {
        return systemNum !== agentNum;
      }
      return systemValue !== agentValue;
    });
  };
  
  const getMedicalPolicyStatus = () => {
    const states = Object.values(fieldStates);
    if (states.every(s => s.approved)) return 'approved';
    if (states.some(s => s.rejectionSubmitted)) return 'warning';
    return 'none';
  };
  
  const getOtherPolicyStatus = () => {
    const states = Object.values(otherPolicyFields);
    if (states.every(s => s.approved)) return 'approved';
    if (states.some(s => s.rejectionSubmitted)) return 'warning';
    return 'none';
  };
  
  const getMmaFeeScheduleStatus = () => {
    const states = Object.values(mmaFeeScheduleFields);
    if (states.every(s => s.approved)) return 'approved';
    if (states.some(s => s.rejectionSubmitted)) return 'warning';
    return 'none';
  };
  
  const calculateStatistics = () => {
    const allFieldStates = Object.values(fieldStates);
    const dynamicMedicalFields = dynamicMedicalPolicyFields;
    const dynamicOtherFields = dynamicOtherPolicyFields;
    
    const totalFlagged = lineItems.length + dynamicMedicalFields.length + dynamicOtherFields.length;
    const totalAccepted = allFieldStates.filter(f => f.approved).length + 
                         dynamicMedicalFields.filter(f => f.approved).length +
                         dynamicOtherFields.filter(f => f.approved).length;
    const totalRejected = allFieldStates.filter(f => f.rejectionSubmitted).length +
                         dynamicMedicalFields.filter(f => f.rejectionSubmitted).length +
                         dynamicOtherFields.filter(f => f.rejectionSubmitted).length;
    
    return { totalFlagged, totalAccepted, totalRejected };
  };
  
  const checkPendingFields = () => {
    // Check Document Review - Agent Observed must be filled
    const hasEmptyAgentObserved = Object.values(documentReviewFields).some(
      field => field.agentObserved === ''
    );
    
    if (hasEmptyAgentObserved) return true;
    
    // Check all fieldStates for pending items
    const allFieldStates = Object.values(fieldStates);
    const hasPendingStatic = allFieldStates.some(f => !f.approved && !f.rejectionSubmitted);
    
    // Check dynamic fields
    const hasPendingDynamicMedical = dynamicMedicalPolicyFields.some(f => !f.approved && !f.rejectionSubmitted);
    const hasPendingDynamicOther = dynamicOtherPolicyFields.some(f => !f.approved && !f.rejectionSubmitted);
    
    return hasPendingStatic || hasPendingDynamicMedical || hasPendingDynamicOther;
  };
  
  const scrollToFirstPending = () => {
    // Find first pending field index
    const allFieldStates = Object.values(fieldStates);
    const firstPendingStaticIndex = allFieldStates.findIndex(f => !f.approved && !f.rejectionSubmitted);
    
    if (firstPendingStaticIndex !== -1) {
      // Scroll to medical policy accordion if not expanded
      if (!expandedAccordions.medicalPolicy) {
        setExpandedAccordions(prev => ({ ...prev, medicalPolicy: true }));
      }
      // Small delay to allow accordion to expand
      setTimeout(() => {
        const element = document.querySelector(`[data-field-index="${firstPendingStaticIndex}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          }, 3000);
        }
      }, 300);
      return;
    }
    
    // Check dynamic medical fields
    const firstPendingDynamicMedical = dynamicMedicalPolicyFields.findIndex(f => !f.approved && !f.rejectionSubmitted);
    if (firstPendingDynamicMedical !== -1) {
      if (!expandedAccordions.medicalPolicy) {
        setExpandedAccordions(prev => ({ ...prev, medicalPolicy: true }));
      }
      setTimeout(() => {
        const element = document.querySelector(`[data-dynamic-medical-index="${firstPendingDynamicMedical}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          }, 3000);
        }
      }, 300);
      return;
    }
    
    // Check dynamic other fields
    const firstPendingDynamicOther = dynamicOtherPolicyFields.findIndex(f => !f.approved && !f.rejectionSubmitted);
    if (firstPendingDynamicOther !== -1) {
      if (!expandedAccordions.otherPolicy) {
        setExpandedAccordions(prev => ({ ...prev, otherPolicy: true }));
      }
      setTimeout(() => {
        const element = document.querySelector(`[data-dynamic-other-index="${firstPendingDynamicOther}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          }, 3000);
        }
      }, 300);
    }
  };
  
  const handleSubmitCase = () => {
    if (checkPendingFields()) {
      alert('⚠️ There are pending discrepancies that require action by the adjudicator. Please review all fields before submitting.');
      scrollToFirstPending();
      return;
    }
    setShowSummaryDialog(true);
  };
  
  const handleFinalSubmit = () => {
    setShowSummaryDialog(false);
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessToast(true);
      
      setTimeout(() => {
        // Go back to detail/list page instead of reloading
        setCurrentView('detail');
      }, 3000);
    }, 3000);
  };
  
  const handleExportToExcel = () => {
    // Prepare data for Excel export
    const exportData = [];
    
    // Add header
    exportData.push(['TNB Claims Management - Validation Summary']);
    exportData.push(['Claim #' + documentId]);
    exportData.push([]);
    
    // Document Review Section
    exportData.push(['Document Review']);
    exportData.push(['Field', 'Extracted Value', 'Status']);
    Object.entries(documentReviewFields).forEach(([key, field]) => {
      const status = field.checked ? 'Approved' : 'Pending';
      exportData.push([key.replace(/([A-Z])/g, ' $1').trim(), field.agentObserved || field.value, status]);
    });
    exportData.push([]);
    
    // Medical Policy Guideline Section
    exportData.push(['Medical Policy Guideline (Anomalies)']);
    exportData.push(['Line Item', 'Amount (MYR)', 'Status', 'MMU Review', 'Reason']);
    const mmuRowIndexes = []; // Track rows that need yellow highlighting
    
    lineItems.forEach((item, idx) => {
      const state = fieldStates[idx];
      const status = state?.approved ? 'Approved' : state?.rejectionSubmitted ? 'Rejected' : 'Pending';
      const mmuReview = state?.mmuValidation ? 'YES' : 'NO';
      const reason = state?.rejectionReason || '';
      
      const currentRow = exportData.length;
      exportData.push([item.value, item.amount.toFixed(2), status, mmuReview, reason]);
      
      // Mark row for yellow highlighting if MMU Review is needed
      if (state?.mmuValidation) {
        mmuRowIndexes.push(currentRow);
      }
    });
    
    // Add dynamic medical policy fields
    dynamicMedicalPolicyFields.forEach((item) => {
      const status = item.approved ? 'Approved' : item.rejectionSubmitted ? 'Rejected' : 'Pending';
      const mmuReview = item.mmuValidation ? 'YES' : 'NO';
      const reason = item.rejectionReason || '';
      
      const currentRow = exportData.length;
      exportData.push([item.label, item.value, status, mmuReview, reason]);
      
      // Mark row for yellow highlighting if MMU Review is needed
      if (item.mmuValidation) {
        mmuRowIndexes.push(currentRow);
      }
    });
    
    exportData.push([]);
    
    // Rejected Items
    const rejectedItems = lineItems.filter((item, idx) => fieldStates[idx]?.rejectionSubmitted);
    if (rejectedItems.length > 0) {
      exportData.push(['Rejected']);
      exportData.push(['Line Item', 'Amount (MYR)']);
      let rejectedTotal = 0;
      rejectedItems.forEach(item => {
        exportData.push([item.value, item.amount.toFixed(2)]);
        rejectedTotal += item.amount;
      });
      exportData.push(['TOTAL', rejectedTotal.toFixed(2)]);
      exportData.push([]);
    }
    
    // Hospital to Bear
    const hospitalItems = lineItems.filter((item, idx) => 
      fieldStates[idx]?.approved && fieldStates[idx]?.bearer === 'hospital'
    );
    if (hospitalItems.length > 0) {
      exportData.push(['Hospital to bear']);
      exportData.push(['Line Item', 'Amount (MYR)']);
      let hospitalTotal = 0;
      hospitalItems.forEach(item => {
        exportData.push([item.value, item.amount.toFixed(2)]);
        hospitalTotal += item.amount;
      });
      exportData.push(['TOTAL', hospitalTotal.toFixed(2)]);
      exportData.push([]);
    }
    
    // Patient to Bear
    const patientItems = lineItems.filter((item, idx) => 
      fieldStates[idx]?.approved && fieldStates[idx]?.bearer === 'patient'
    );
    if (patientItems.length > 0) {
      exportData.push(['Patient to bear']);
      exportData.push(['Line Item', 'Amount (MYR)']);
      let patientTotal = 0;
      patientItems.forEach(item => {
        exportData.push([item.value, item.amount.toFixed(2)]);
        patientTotal += item.amount;
      });
      exportData.push(['TOTAL', patientTotal.toFixed(2)]);
      exportData.push([]);
    }
    
    // MMA Fee Schedule Section
    exportData.push(['MMA Fee Schedule']);
    exportData.push(['Procedure', 'MMA Estimate | Actual Cost', 'Status', 'MMU Review', 'Reason']);
    
    const proc1Status = mmaFeeScheduleFields.procedure1?.approved ? 'Approved' : 
                        mmaFeeScheduleFields.procedure1?.rejectionSubmitted ? 'Rejected' : 'Pending';
    const proc1MMU = mmaFeeScheduleFields.procedure1?.mmuValidation ? 'YES' : 'NO';
    const proc1Reason = mmaFeeScheduleFields.procedure1?.rejectionReason || '';
    const proc1Row = exportData.length;
    exportData.push([
      mmaFeeScheduleFields.procedure1.name,
      `MMA: ${mmaFeeScheduleFields.procedure1.mmaEstimate} | Actual: ${mmaFeeScheduleFields.procedure1.actualCost}`,
      proc1Status,
      proc1MMU,
      proc1Reason
    ]);
    if (mmaFeeScheduleFields.procedure1?.mmuValidation) {
      mmuRowIndexes.push(proc1Row);
    }
    
    const proc2Status = mmaFeeScheduleFields.procedure2?.approved ? 'Approved' : 
                        mmaFeeScheduleFields.procedure2?.rejectionSubmitted ? 'Rejected' : 'Pending';
    const proc2MMU = mmaFeeScheduleFields.procedure2?.mmuValidation ? 'YES' : 'NO';
    const proc2Reason = mmaFeeScheduleFields.procedure2?.rejectionReason || '';
    const proc2Row = exportData.length;
    exportData.push([
      mmaFeeScheduleFields.procedure2.name,
      `MMA: ${mmaFeeScheduleFields.procedure2.mmaEstimate} | Actual: ${mmaFeeScheduleFields.procedure2.actualCost}`,
      proc2Status,
      proc2MMU,
      proc2Reason
    ]);
    if (mmaFeeScheduleFields.procedure2?.mmuValidation) {
      mmuRowIndexes.push(proc2Row);
    }
    exportData.push([]);
    
    // Other Policy Rules Section
    exportData.push(['Other Policy Rules']);
    exportData.push(['Field', 'Value', 'Status', 'MMU Review', 'Reason']);
    
    // PAF Cost vs Invoice
    const pafStatus = otherPolicyFields.pafVsInvoice?.approved ? 'Approved' : 
                      otherPolicyFields.pafVsInvoice?.rejectionSubmitted ? 'Rejected' : 'Pending';
    const pafMMU = otherPolicyFields.pafVsInvoice?.mmuValidation ? 'YES' : 'NO';
    const pafReason = otherPolicyFields.pafVsInvoice?.rejectionReason || '';
    const pafRow = exportData.length;
    exportData.push([
      'PAF Cost Vs Total Invoice',
      `PAF: ${otherPolicyFields.pafVsInvoice.pafCost} | Invoice: ${otherPolicyFields.pafVsInvoice.totalInvoiceCost}`,
      pafStatus,
      pafMMU,
      pafReason
    ]);
    if (otherPolicyFields.pafVsInvoice?.mmuValidation) {
      mmuRowIndexes.push(pafRow);
    }
    
    // Days of Stay
    const daysStatus = otherPolicyFields.daysOfStay?.approved ? 'Approved' : 
                       otherPolicyFields.daysOfStay?.rejectionSubmitted ? 'Rejected' : 'Pending';
    const daysMMU = otherPolicyFields.daysOfStay?.mmuValidation ? 'YES' : 'NO';
    const daysReason = otherPolicyFields.daysOfStay?.rejectionReason || '';
    const daysRow = exportData.length;
    exportData.push([
      'Total Days of Stay',
      `Max: ${otherPolicyFields.daysOfStay.maxAllowed} | Actual: ${otherPolicyFields.daysOfStay.actual}`,
      daysStatus,
      daysMMU,
      daysReason
    ]);
    if (otherPolicyFields.daysOfStay?.mmuValidation) {
      mmuRowIndexes.push(daysRow);
    }
    
    // Visitations
    const visitStatus = otherPolicyFields.visitations?.approved ? 'Approved' : 
                        otherPolicyFields.visitations?.rejectionSubmitted ? 'Rejected' : 'Pending';
    const visitMMU = otherPolicyFields.visitations?.mmuValidation ? 'YES' : 'NO';
    const visitReason = otherPolicyFields.visitations?.rejectionReason || '';
    const visitRow = exportData.length;
    exportData.push([
      'Number of Visitations',
      `Max: ${otherPolicyFields.visitations.maxAllowed} | Actual: ${otherPolicyFields.visitations.actual}`,
      visitStatus,
      visitMMU,
      visitReason
    ]);
    if (otherPolicyFields.visitations?.mmuValidation) {
      mmuRowIndexes.push(visitRow);
    }
    
    // Add dynamic other policy fields
    dynamicOtherPolicyFields.forEach((item) => {
      const status = item.approved ? 'Approved' : item.rejectionSubmitted ? 'Rejected' : 'Pending';
      const mmuReview = item.mmuValidation ? 'YES' : 'NO';
      const reason = item.rejectionReason || '';
      
      const currentRow = exportData.length;
      exportData.push([item.label, item.value, status, mmuReview, reason]);
      
      // Mark row for yellow highlighting if MMU Review is needed
      if (item.mmuValidation) {
        mmuRowIndexes.push(currentRow);
      }
    });
    
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(exportData);
    
    // Set column widths
    ws['!cols'] = [
      { wch: 40 }, // Column A
      { wch: 20 }, // Column B
      { wch: 15 }, // Column C
      { wch: 12 }, // Column D (MMU Review)
      { wch: 50 }  // Column E (Reason)
    ];
    
    // Add borders and formatting to all cells
    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!ws[cellAddress]) continue;
        
        // Add borders to all cells
        ws[cellAddress].s = {
          border: {
            top: { style: 'thin', color: { rgb: '000000' } },
            bottom: { style: 'thin', color: { rgb: '000000' } },
            left: { style: 'thin', color: { rgb: '000000' } },
            right: { style: 'thin', color: { rgb: '000000' } }
          }
        };
        
        // Bold headers
        if (R === 0 || R === 1 || exportData[R][0] === 'Document Review' || 
            exportData[R][0] === 'Medical Policy Guideline (Anomalies)' ||
            exportData[R][0] === 'MMA Fee Schedule' || exportData[R][0] === 'Other Policy Rules') {
          ws[cellAddress].s.font = { bold: true };
        }
        
        // Yellow highlight for MMU Review rows
        if (mmuRowIndexes.includes(R)) {
          ws[cellAddress].s.fill = {
            patternType: 'solid',
            fgColor: { rgb: 'FFFF00' }
          };
        }
      }
    }
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Validation Summary');
    
    // Generate file name with timestamp
    const timestamp = new Date().toISOString().slice(0, 10);
    const fileName = `Claim_${documentId}_ValidationSummary_${timestamp}.xlsx`;
    
    // Save file
    XLSX.writeFile(wb, fileName);
  };
  
  const [fieldStates, setFieldStates] = useState({
    0: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: true },
    1: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    2: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    3: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    4: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    5: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    6: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    7: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false },
    8: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false, systemAssessment: false }
  });
  
  const [pdfScale, setPdfScale] = useState(0.8);
  
  const [dynamicMedicalPolicyFields, setDynamicMedicalPolicyFields] = useState([]);
  const [dynamicOtherPolicyFields, setDynamicOtherPolicyFields] = useState([]);
  
  const [otherPolicyFields, setOtherPolicyFields] = useState({
    pafVsInvoice: {
      pafCost: 'RM 1,500.00',
      totalInvoiceCost: 'RM 1,450.00',
      approved: false,
      rejected: false,
      rejectionReason: '',
      rejectionSubmitted: false
    },
    daysOfStay: {
      maxAllowed: '3',
      actual: '3',
      approved: false,
      rejected: false,
      rejectionReason: '',
      rejectionSubmitted: false
    },
    visitations: {
      maxAllowed: '5',
      actual: '7',
      approved: false,
      rejected: false,
      rejectionReason: '',
      rejectionSubmitted: false,
      exceeds: true
    }
  });
  
  const [mmaFeeScheduleFields, setMmaFeeScheduleFields] = useState({
    procedure1: {
      name: 'Speech Therapy Session',
      mmaEstimate: 'RM 120.00',
      actualCost: 'RM 150.00',
      approved: false,
      rejected: false,
      rejectionReason: '',
      rejectionSubmitted: false
    },
    procedure2: {
      name: 'Cognitive Assessment',
      mmaEstimate: 'RM 200.00',
      actualCost: 'RM 250.00',
      approved: false,
      rejected: false,
      rejectionReason: '',
      rejectionSubmitted: false
    }
  });
  
  const [showPdfControls, setShowPdfControls] = useState(false);
  
  const [medicalNotesFields, setMedicalNotesFields] = useState({
    diagnosis: 'Speech and Language Disorder',
    estimatedCost: 'RM 1,500.00',
    numberOfDays: '3',
    admissionDate: '2025-07-18',
    treatmentPlan: 'Comprehensive speech therapy including receptive/expressive language intervention, motor speech disorder intervention, and socio-cognitive communication intervention'
  });
  
  const handleDynamicFieldApprove = (category, fieldIndex) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, approved: true, rejected: false } : field
      ) : prev);
    } else {
      setDynamicOtherPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, approved: true, rejected: false } : field
      ) : prev);
    }
  };
  
  const handleDynamicFieldReject = (category, fieldIndex) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejected: true, approved: false } : field
      ) : prev);
    } else {
      setDynamicOtherPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejected: true, approved: false } : field
      ) : prev);
    }
  };
  
  const handleDynamicFieldRejectionChange = (category, fieldIndex, reason) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionReason: reason } : field
      ) : prev);
    } else {
      setDynamicOtherPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionReason: reason } : field
      ) : prev);
    }
  };
  
  const handleDynamicFieldSubmitRejection = (category, fieldIndex) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionSubmitted: true } : field
      ) : prev);
    } else {
      setDynamicOtherPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionSubmitted: true } : field
      ) : prev);
    }
  };
  
  const handleMmuValidationToggle = (index) => {
    setFieldStates(prev => ({
      ...prev,
      [index]: { ...prev[index], mmuValidation: !prev[index].mmuValidation }
    }));
  };
  
  const handleDynamicMmuValidationToggle = (category, fieldIndex) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, mmuValidation: !field.mmuValidation } : field
      ) : prev);
    } else {
      setDynamicOtherPolicyFields(prev => Array.isArray(prev) ? prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, mmuValidation: !field.mmuValidation } : field
      ) : prev);
    }
  };
  
  const handleSaveDraft = () => {
    setShowDraftToast(true);
    setTimeout(() => {
      setShowDraftToast(false);
    }, 3000);
  };
  
  const extractNumericValue = (str) => {
    if (!str) return null;
    // Extract first number from string (e.g., "2 pages" -> 2, "2" -> 2)
    const match = str.toString().match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };
  
  const checkDocumentReviewMismatches = () => {
    return Object.values(documentReviewFields).some(field => {
      if (field.agentObserved === '') return false;
      
      // Try numeric comparison first
      const systemNum = extractNumericValue(field.systemCollection);
      const agentNum = extractNumericValue(field.agentObserved);
      
      if (systemNum !== null && agentNum !== null) {
        return systemNum !== agentNum;
      }
      
      // Fall back to exact string comparison
      return field.systemCollection !== field.agentObserved;
    });
  };
  
  const lineItems = [
    { label: 'Pharmacy Items', value: 'MULTIVITAMIN AND MINERAL COMPOSITE (SET)', status: 'Not Covered', flagged: true, reason: `The multivitamin and mineral composite matches Rule 214 which specifically covers 'Other vitamins and supplements not listed in List A & B' and is explicitly marked as 'Not Covered'`, amount: 85.00 },
    { label: 'Pharmacy Items', value: 'CETAPHIL LOTION (237ML)', status: 'Not Covered', flagged: true, reason: `1.The item CETAPHIL LOTION matches Rule 182 which specifically covers 'Cleanser | Cetaphil', but this rule has a status of 'Not Covered'. 
2.While Cetaphil is explicitly mentioned in the rule, it refers to cleanser products rather than lotion/moisturizer formulations. 
3.Additionally, none of the patient's diagnoses (ovarian cyst, sepsis, hypoxemia, LRTI, indigestion, abdominal pain, altered bowel habit, heartburn, hypertension, diabetes) are related to dermatological conditions that would typically require emollients or skin care products.`, amount: 150.00 },
    { label: 'Pharmacy Items', value: 'AMOXYCILLIN/ CLAV K TAB 625MG [AUGMENTIN 625]', status: 'Not Covered', flagged: true, reason: `1.The invoice item is Amoxicillin/Clavulanic Acid 625mg tablets (an antibiotic medication) 
2.Despite the patient having diagnoses like Sepsis and Lower Respiratory Tract Infection that would clinically justify antibiotic treatment, no guideline rule exists in this set that covers antibiotic medications.`, amount: 85.00 },
    { label: 'Pharmacy Items', value: 'ESOMEPRAZOLE TAB 40MG [NEXIUM 40]', status: 'Not Covered', flagged: true, reason: `1.The invoice item is Esomeprazole 40mg tablet (a proton pump inhibitor used for GERD/acid reflux).
2.While the patient has relevant diagnoses including indigestion, heartburn, and abdominal pain that are gastrointestinal-related, none of the items found in medical guideline rule that covers this specific medication.`, amount: 120.00 },
    { label: 'Procedures', value: 'C REACTIVE PROTEIN (CRP)', status: 'Not Covered', flagged: true, reason: `1.The item 'C REACTIVE PROTEIN (CRP)' is a laboratory test used to measure inflammation markers, not a medication or supplement. 
2.None of the provided rules cover laboratory tests - all rules are for Vitamin C supplements or protein/enzyme products, which are completely different from a diagnostic blood test. 
3.The item is not found in any medical guideline rule and has no clinically or semantically matching entries.`, amount: 95.00 },
    { label: 'Procedures', value: 'LIPID PROFILE (P12)', status: 'Not Covered', flagged: true, reason: `1.The item 'LIPID PROFILE (P12)' is a diagnostic laboratory test
2.The item is not found in any medical guideline rule and has no clinically or semantically matching entries`, amount: 95.00 },
    { label: 'Medical Supplies/Aid', value: 'DISPOSABLE GOWN APRON PVC', status: 'Not Covered', flagged: true, reason: `The item 'DISPOSABLE GOWN APRON PVC' is a medical protective equipment/supply item, but the item is not found in any medical guideline rule and has no clinically or semantically matching entries.`, amount: 95.00 },
    { label: 'Medical Supplies/Aid', value: `Micropore 3\\"Tape (per metre)"`, status: 'Not Covered', flagged: true, reason: `1. Micropore 3\\" Tape is a medical adhesive tape used for wound dressing and securing medical devices.
2. The item is not found in any medical guideline rule and has no clinically or semantically matching entries.`, amount: 95.00 },
    { label: 'Consultation Fee', value: 'Professional Fee: Cervical Or Vaginal Smear Pap Smear', status: 'Exceeded coverage limit', flagged: true, reason: `1.The item 'Professional Fee: Cervical Or Vaginal Smear Pap Smear' is a medical procedure/professional service fee, but none of the provided rules cover diagnostic procedures or professional fees for Pap smears. 
2.The top matching rules only cover prescription fees, dispensing fees, and vaginal cream medications, which are not clinically or semantically related to a Pap smear procedure. 
3.The item is not found in any medical guideline rule and has no clinically or semantically matching entries`, amount: 180.00 }
  ];
  
  const handleInfoClick = (event, reason) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.top,
      left: rect.left + rect.width / 2
    });
    setShowInfoPopup(reason);
  };
  
  const handleBearerClick = (index) => {
    setSelectedBearerFieldIndex(index);
    setShowBearerDialog(true);
  };
  
  const handleBearerSelect = (bearer) => {
    if (selectedBearerFieldIndex !== null) {
      setFieldStates(prev => ({
        ...prev,
        [selectedBearerFieldIndex]: { 
          ...prev[selectedBearerFieldIndex], 
          bearer,
          bearerSelected: true,
          approved: true,
          rejected: false,
          rejectionReason: '',
          rejectionSubmitted: false
        }
      }));
    }
  };
  
  // Get PDF path based on active tab
  const getPdfPath = () => {
    if (activeMainTab === 'Invoices') {
      return '/invoice.pdf';
    }
    else if (activeMainTab === 'Guarantee Letter (GL)') {
      return '/gl.pdf';
    }
    else if (activeMainTab === 'Pre-Admission Form (PAF)') {
      return '/paf.pdf';
    }
    else if (activeMainTab === 'Cross Referral (CR)') {
      return '/cr.pdf';
    }
    else if (activeMainTab === 'Additional Guarantee (AG)') {
      return '/ag.pdf';
    }
    return '/others.pdf';

  };
  
  // Reset to page 1 when tab changes
  const handleTabChange = (tab) => {
    setActiveMainTab(tab);
    setCurrentPage(1);
  };
  
  // Handle PDF load success
  const handlePdfLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
    console.log(`Loaded ${numPages} pages`);
  };
  
  const handleApprove = (index) => {
    // For index 0, use system assessment (default hospital)
    if (index === 0) {
      setFieldStates(prev => ({
        ...prev,
        [index]: { 
          approved: true, 
          rejected: false, 
          rejectionReason: '', 
          rejectionSubmitted: false,
          bearer: 'hospital',
          bearerSelected: true,
          systemAssessment: true
        }
      }));
    } else {
      // For other indices, show bearer selection dialog
      setSelectedBearerFieldIndex(index);
      setShowBearerDialog(true);
    }
  };
  
  const handleReject = (index) => {
    setFieldStates(prev => ({
      ...prev,
      [index]: { ...prev[index], rejected: true, approved: false, rejectionSubmitted: false }
    }));
  };
  
  const handleOtherPolicyApprove = (fieldKey) => {
    setOtherPolicyFields(prev => ({
      ...prev,
      [fieldKey]: { ...prev[fieldKey], approved: true, rejected: false, rejectionReason: '', rejectionSubmitted: false }
    }));
  };
  
  const handleOtherPolicyReject = (fieldKey) => {
    setOtherPolicyFields(prev => ({
      ...prev,
      [fieldKey]: { ...prev[fieldKey], rejected: true, approved: false, rejectionSubmitted: false }
    }));
  };
  
  const handleOtherPolicyRejectionReason = (fieldKey, reason) => {
    setOtherPolicyFields(prev => ({
      ...prev,
      [fieldKey]: { ...prev[fieldKey], rejectionReason: reason }
    }));
  };
  
  const handleOtherPolicySubmitRejection = (fieldKey) => {
    if (otherPolicyFields[fieldKey].rejectionReason.trim()) {
      setOtherPolicyFields(prev => ({
        ...prev,
        [fieldKey]: { ...prev[fieldKey], rejectionSubmitted: true }
      }));
    }
  };
  
  const handleMmaFeeApprove = (fieldKey) => {
    setMmaFeeScheduleFields(prev => ({
      ...prev,
      [fieldKey]: { ...prev[fieldKey], approved: true, rejected: false, rejectionReason: '', rejectionSubmitted: false }
    }));
  };
  
  const handleMmaFeeReject = (fieldKey) => {
    setMmaFeeScheduleFields(prev => ({
      ...prev,
      [fieldKey]: { ...prev[fieldKey], rejected: true, approved: false, rejectionSubmitted: false }
    }));
  };
  
  const handleMmaFeeRejectionReason = (fieldKey, reason) => {
    setMmaFeeScheduleFields(prev => ({
      ...prev,
      [fieldKey]: { ...prev[fieldKey], rejectionReason: reason }
    }));
  };
  
  const handleMmaFeeSubmitRejection = (fieldKey) => {
    if (mmaFeeScheduleFields[fieldKey].rejectionReason.trim()) {
      setMmaFeeScheduleFields(prev => ({
        ...prev,
        [fieldKey]: { ...prev[fieldKey], rejectionSubmitted: true }
      }));
    }
  };
  
  const handleRejectionReasonChange = (index, reason) => {
    setFieldStates(prev => ({
      ...prev,
      [index]: { ...prev[index], rejectionReason: reason }
    }));
  };
  
  const handleSubmitRejection = (index) => {
    if (fieldStates[index].rejectionReason.trim()) {
      setFieldStates(prev => ({
        ...prev,
        [index]: { ...prev[index], rejectionSubmitted: true }
      }));
    }
  };
  
  const handleZoomIn = () => {
    setPdfScale(prev => Math.min(prev + 0.2, 2.0));
  };
  
  const handleZoomOut = () => {
    setPdfScale(prev => Math.max(prev - 0.2, 0.5));
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-gray-600 hover:text-gray-900">
            ← Back
          </button>
          <h1 className="text-3xl font-bold">Claim #{documentId}</h1>
          <span className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
            <AlertCircle className="w-4 h-4" />
            Flagged
          </span>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowGuidelineDropdown(!showGuidelineDropdown)}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all font-semibold"
          >
            <HelpCircle className="w-4 h-4" />
            Guideline
            <ChevronDown className={`w-4 h-4 transition-transform ${showGuidelineDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu */}
          {showGuidelineDropdown && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2">
              {guidelineOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleGuidelineClick(option.url)}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                >
                  <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 hover:text-blue-700">
                    {option.name}
                  </span>
                </button>
              ))}
            </div>
          )}
          
          {/* Overlay to close dropdown when clicking outside */}
          {showGuidelineDropdown && (
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowGuidelineDropdown(false)}
            />
          )}
        </div>
      </div>
      
      <div className="border-b bg-white shadow-sm">
        <div className="flex px-3 overflow-x-auto">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap flex-shrink-0 ${
                activeMainTab === tab
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex h-[calc(100vh-180px)] gap-4">
        <div className="w-[45%] bg-gradient-to-br from-gray-50 to-blue-50 p-4 flex flex-col">
          <div 
            className="bg-white rounded-2xl shadow-xl mb-4 p-5 flex-1 flex flex-col border border-gray-100 relative"
            onMouseEnter={() => setShowPdfControls(true)}
            onMouseLeave={() => setShowPdfControls(false)}
          >
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl overflow-auto flex justify-center shadow-inner">
              <Document
                file={getPdfPath()}
                onLoadSuccess={handlePdfLoadSuccess}
                className="flex justify-center"
              >
                <Page 
                  pageNumber={currentPage} 
                  scale={pdfScale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </Document>
            </div>
            
            {/* Minimalist Floating PDF Controls */}
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${
              showPdfControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <div className="bg-gray-900/90 backdrop-blur-md text-white px-6 py-1.5 rounded-lg shadow-2xl flex items-center gap-1">
                {/* First Page */}
                <button 
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="hover:bg-white/20 p-1 rounded disabled:opacity-30 transition-all"
                  title="First Page"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                
                {/* Previous Page */}
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="hover:bg-white/20 p-1 rounded disabled:opacity-30 transition-all"
                  title="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {/* Page Counter */}
                <span className="font-medium text-xs px-3 select-none min-w-[60px] text-center">{currentPage} / {totalPages}</span>
                
                {/* Next Page */}
                <button 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="hover:bg-white/20 p-1 rounded disabled:opacity-30 transition-all"
                  title="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                {/* Last Page */}
                <button 
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="hover:bg-white/20 p-1 rounded disabled:opacity-30 transition-all"
                  title="Last Page"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
                
                {/* Divider */}
                <div className="w-px h-5 bg-white/30 mx-2"></div>
                
                {/* Zoom Out */}
                <button 
                  onClick={handleZoomOut}
                  disabled={pdfScale <= 0.5}
                  className="hover:bg-white/20 p-1 rounded disabled:opacity-30 transition-all"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                
                {/* Zoom Level */}
                <span className="text-xs font-medium px-2 select-none min-w-[45px] text-center">{Math.round(pdfScale * 100)}%</span>
                
                {/* Zoom In */}
                <button 
                  onClick={handleZoomIn}
                  disabled={pdfScale >= 2.0}
                  className="hover:bg-white/20 p-1 rounded disabled:opacity-30 transition-all"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[55%] bg-gradient-to-br from-white to-blue-50 p-4 overflow-y-auto">
          
          {/* Accordion: Document Review */}
          <div className="mb-3 border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <button
              onClick={() => toggleAccordion('documentReview')}
              className="w-full bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 px-4 py-2.5 flex justify-between items-center transition-all"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Document Review</h3>
                {hasDocumentReviewMismatch() && (
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" title="Value mismatch detected"></div>
                )}
                {getDocumentReviewStatus() === 'approved' && !hasDocumentReviewMismatch() && (
                  <CheckCircle className="w-5 h-5 text-green-600 animate-pulse" />
                )}
              </div>
              {expandedAccordions.documentReview ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedAccordions.documentReview && (
              <div className="p-3 space-y-2 bg-white">
                {/* Header Row */}
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  <div className="text-xs font-semibold text-gray-600 w-20">Field</div>
                  <div className="text-xs font-semibold text-gray-600 flex-1">System Collection</div>
                  <div className="text-xs font-semibold text-gray-600 flex-1">Agent Observed</div>
                  <div className="w-8"></div>
                </div>
                {/* AG Top Up */}
                <div className="p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-gray-700 w-20 flex-shrink-0">AG Top Up</label>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">System Collection</label>
                      <input
                        type="text"
                        value={documentReviewFields.agTopUp.systemCollection}
                        onChange={() => {}} 
                        readOnly
                        className="w-16 border border-gray-200 rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">Agent Observed <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={documentReviewFields.agTopUp.agentObserved}
                        onChange={(e) => setDocumentReviewFields(prev => ({
                          ...prev,
                          agTopUp: { ...prev.agTopUp, agentObserved: e.target.value }
                        }))}
                        placeholder="Enter value"
                        className="w-20 border border-gray-300 rounded px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                      />
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.agTopUp.checked}
                      onChange={() => handleDocumentReviewCheck('agTopUp')}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
                
                {/* PAF */}
                <div className="p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-gray-700 w-20 flex-shrink-0">PAF</label>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">System Collection</label>
                      <input
                        type="text"
                        value={documentReviewFields.paf.systemCollection}
                        onChange={() => {}}
                        readOnly
                        className="w-16 border border-gray-200 rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">Agent Observed <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={documentReviewFields.paf.agentObserved}
                        onChange={(e) => setDocumentReviewFields(prev => ({
                          ...prev,
                          paf: { ...prev.paf, agentObserved: e.target.value }
                        }))}
                        placeholder="Enter value"
                        className="w-20 border border-gray-300 rounded px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                      />
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.paf.checked}
                      onChange={() => handleDocumentReviewCheck('paf')}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
                
                {/* CR */}
                <div className="p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-gray-700 w-20 flex-shrink-0">CR</label>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">System Collection</label>
                      <input
                        type="text"
                        value={documentReviewFields.cr.systemCollection}
                        onChange={() => {}}
                        readOnly
                        className="w-16 border border-gray-200 rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">Agent Observed <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={documentReviewFields.cr.agentObserved}
                        onChange={(e) => setDocumentReviewFields(prev => ({
                          ...prev,
                          cr: { ...prev.cr, agentObserved: e.target.value }
                        }))}
                        placeholder="Enter value"
                        className="w-20 border border-gray-300 rounded px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                      />
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.cr.checked}
                      onChange={() => handleDocumentReviewCheck('cr')}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
                
                {/* Invoice */}
                <div className="p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-gray-700 w-20 flex-shrink-0">Invoice</label>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">System Collection</label>
                      <input
                        type="text"
                        value={documentReviewFields.invoice.systemCollection}
                        onChange={() => {}}
                        readOnly
                        className="w-16 border border-gray-200 rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-28 flex-shrink-0">Agent Observed <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={documentReviewFields.invoice.agentObserved}
                        onChange={(e) => setDocumentReviewFields(prev => ({
                          ...prev,
                          invoice: { ...prev.invoice, agentObserved: e.target.value }
                        }))}
                        placeholder="Enter value"
                        className="w-20 border border-gray-300 rounded px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                      />
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.invoice.checked}
                      onChange={() => handleDocumentReviewCheck('invoice')}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Accordion: Medical Policy Guideline */}
          <div className={`mb-3 border-2 rounded-xl overflow-hidden shadow-md transition-shadow ${
            !isDocumentReviewComplete() 
              ? 'border-gray-300 opacity-50 cursor-not-allowed' 
              : 'border-gray-200 hover:shadow-lg'
          }`}>
            <button
              onClick={() => isDocumentReviewComplete() && toggleAccordion('medicalPolicy')}
              disabled={!isDocumentReviewComplete()}
              className={`w-full px-4 py-2.5 flex justify-between items-center transition-all ${
                !isDocumentReviewComplete()
                  ? 'bg-gray-100 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Medical Policy Guideline (Anomalies)</h3>
                {!isDocumentReviewComplete() && (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
                {getMedicalPolicyStatus() === 'approved' && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {getMedicalPolicyStatus() === 'warning' && (
                  <ShieldAlert className="w-5 h-5 text-orange-600 fill-orange-100" />
                )}
              </div>
              {expandedAccordions.medicalPolicy ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedAccordions.medicalPolicy && (
              <div className="p-3 space-y-3 bg-white">
                {lineItems.map((item, index) => (
              <div key={index} data-field-index={index} className="transition-all">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  {item.label}<span className="text-red-500">*</span>
                </label>
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.value}
                      readOnly={fieldStates[index].approved}
                      className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                        fieldStates[index].approved 
                          ? 'border-green-500 bg-gray-50' 
                          : 'border-gray-300'
                      }`}
                    />
                    {/* Bearer Selection Label - Below field */}
                    {fieldStates[index].bearerSelected && (
                      <div className="mt-1.5 text-xs text-gray-500 italic">
                        {fieldStates[index].systemAssessment ? (
                          <span className="text-gray-600">System Assessment: Hospital to bear</span>
                        ) : (
                          <span>Bearer: {fieldStates[index].bearer === 'hospital' ? 'Hospital to bear' : 'Patient to bear'}</span>
                        )}
                      </div>
                    )}
                    {!fieldStates[index].approved && !fieldStates[index].rejectionSubmitted && (
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-red-600">{item.status}</p>
                        {item.flagged && (
                          <button
                            onClick={(e) => handleInfoClick(e, item.reason)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                    {fieldStates[index].rejected && !fieldStates[index].approved && (
                      <div className="mt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-red-600 font-medium">Not Covered</span>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={fieldStates[index].mmuValidation || false}
                              onChange={() => handleMmuValidationToggle(index)}
                              disabled={fieldStates[index].rejectionSubmitted}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-xs text-gray-700">Tag for MMU Validation</span>
                          </label>
                        </div>
                        <textarea
                          placeholder="Enter rejection reason..."
                          value={fieldStates[index].rejectionReason}
                          onChange={(e) => handleRejectionReasonChange(index, e.target.value)}
                          disabled={fieldStates[index].rejectionSubmitted}
                          className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
                            fieldStates[index].rejectionSubmitted 
                              ? 'bg-gray-50 border-gray-300' 
                              : 'border-red-300'
                          }`}
                          rows={2}
                        />
                        {!fieldStates[index].rejectionSubmitted && (
                          <button
                            onClick={() => handleSubmitRejection(index)}
                            disabled={!fieldStates[index].rejectionReason.trim()}
                            className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {fieldStates[index].rejectionSubmitted && !fieldStates[index].approved ? (
                      /* Rejected state: show ONLY edit button */
                      <button
                        onClick={() => {
                          setFieldStates(prev => ({
                            ...prev,
                            [index]: { ...prev[index], approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false }
                          }));
                        }}
                        className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                        title="Edit (Reset to Pending)"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    ) : fieldStates[index].approved ? (
                      /* Approved state: show green check + edit */
                      <>
                        <button
                          onClick={() => {
                            setFieldStates(prev => ({
                              ...prev,
                              [index]: { ...prev[index], approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '' }
                            }));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit decision"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <div className="p-1.5 text-green-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </>
                    ) : (
                      /* Pending state: show reject + approve */
                      <>
                        <button
                          onClick={() => handleReject(index)}
                          className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          title="Reject"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleApprove(index)}
                          className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          title="Approve"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Dynamic Medical Policy Fields */}
            {dynamicMedicalPolicyFields.map((item, index) => (
              <div key={`dynamic-medical-${index}`} data-dynamic-medical-index={index} className="transition-all">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  {item.label}<span className="text-red-500">*</span>
                </label>
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.value}
                      readOnly
                      className={`w-full border rounded px-3 py-1.5 text-sm ${
                        item.approved 
                          ? 'border-green-500 bg-gray-50 text-gray-700' 
                          : 'border-gray-300 text-gray-700'
                      }`}
                    />
                    {!item.approved && !item.rejectionSubmitted && (
                      <p className="text-xs text-red-600 mt-1">Pending Review</p>
                    )}
                    {item.rejected && !item.approved && (
                      <div className="mt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-red-600 font-medium">Not Covered</span>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.mmuValidation || false}
                              onChange={() => handleDynamicMmuValidationToggle('medicalPolicy', index)}
                              disabled={item.rejectionSubmitted}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-xs text-gray-700">Tag for MMU Validation</span>
                          </label>
                        </div>
                        <textarea
                          placeholder="Enter rejection reason..."
                          value={item.rejectionReason}
                          onChange={(e) => handleDynamicFieldRejectionChange('medicalPolicy', index, e.target.value)}
                          disabled={item.rejectionSubmitted}
                          className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
                            item.rejectionSubmitted 
                              ? 'bg-gray-50 border-gray-300' 
                              : 'border-red-300'
                          }`}
                          rows={2}
                        />
                        {!item.rejectionSubmitted && (
                          <button
                            onClick={() => handleDynamicFieldSubmitRejection('medicalPolicy', index)}
                            disabled={!item.rejectionReason.trim()}
                            className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {/* For "Not Covered" items - follow normal flow but with edit button on approved state */}
                    {item.isNotCovered && item.approved ? (
                      /* Approved flagged item: show edit + green check */
                      <>
                        <button
                          onClick={() => {
                            setDynamicMedicalPolicyFields(prev => prev.map((f, i) => 
                              i === index ? { ...f, approved: false } : f
                            ));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit (Unapprove)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <div className="p-1.5 text-green-600" title="Flagged & Approved">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </>
                    ) : item.mmuValidation ? (
                      /* MMU Review state: show ONLY yellow alert icon */
                      <div className="p-1.5 text-yellow-600" title="MMU Review Required">
                        <AlertCircle className="w-5 h-5 fill-current" />
                      </div>
                    ) : item.rejectionSubmitted && !item.approved ? (
                      /* Rejected state: show ONLY edit button */
                      <button
                        onClick={() => {
                          // Reset to pending state
                          setDynamicMedicalPolicyFields(prev => prev.map((f, i) => 
                            i === index ? { ...f, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false } : f
                          ));
                        }}
                        className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                        title="Edit (Reset to Pending)"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    ) : item.approved ? (
                      /* Approved state: show green check only */
                      <div className="p-1.5 text-green-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    ) : (
                      /* Pending state: show reject + approve buttons */
                      <>
                        <button
                          onClick={() => handleDynamicFieldReject('medicalPolicy', index)}
                          className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          title="Reject"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDynamicFieldApprove('medicalPolicy', index)}
                          className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          title="Approve"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
              </div>
            )}
          </div>
          
          {/* Accordion: MMA Fee Schedule */}
          <div className={`mb-3 border-2 rounded-xl overflow-hidden shadow-md transition-shadow ${
            !isDocumentReviewComplete() 
              ? 'border-gray-300 opacity-50 cursor-not-allowed' 
              : 'border-gray-200 hover:shadow-lg'
          }`}>
            <button
              onClick={() => isDocumentReviewComplete() && toggleAccordion('mmaFeeSchedule')}
              disabled={!isDocumentReviewComplete()}
              className={`w-full px-4 py-2.5 flex justify-between items-center transition-all ${
                !isDocumentReviewComplete()
                  ? 'bg-gray-100 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">MMA Fee Schedule</h3>
                {!isDocumentReviewComplete() && (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
                {getMmaFeeScheduleStatus() === 'approved' && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {getMmaFeeScheduleStatus() === 'warning' && (
                  <AlertCircle className="w-5 h-5 text-yellow-600 fill-current" />
                )}
              </div>
              {expandedAccordions.mmaFeeSchedule ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedAccordions.mmaFeeSchedule && (
              <div className="p-3 bg-white space-y-3">
                {/* Procedure 1 */}
                <div className="transition-all">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-gray-700 w-32 flex-shrink-0">
                      {mmaFeeScheduleFields.procedure1.name}<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-20 flex-shrink-0">MMA Estimates</label>
                      <input
                        type="text"
                        value={mmaFeeScheduleFields.procedure1.mmaEstimate}
                        onChange={() => {}}
                        readOnly
                        className="w-24 border rounded px-2 py-1 text-xs bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-24 flex-shrink-0">Actual Invoice Cost</label>
                      <input
                        type="text"
                        value={mmaFeeScheduleFields.procedure1.actualCost}
                        onChange={() => {}}
                        readOnly
                        className="w-24 border rounded px-2 py-1 text-xs bg-red-50 text-gray-700 border-red-300"
                      />
                    </div>
                    <div className="flex gap-2">
                      {mmaFeeScheduleFields.procedure1.rejectionSubmitted && !mmaFeeScheduleFields.procedure1.approved ? (
                        /* Rejected state: show ONLY edit button */
                        <button
                          onClick={() => {
                            setMmaFeeScheduleFields(prev => ({
                              ...prev,
                              procedure1: { ...prev.procedure1, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false }
                            }));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit (Reset to Pending)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      ) : mmaFeeScheduleFields.procedure1.approved ? (
                        /* Approved state: show edit + green check */
                        <>
                          <button
                            onClick={() => {
                              setMmaFeeScheduleFields(prev => ({
                                ...prev,
                                procedure1: { ...prev.procedure1, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '' }
                              }));
                            }}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                            title="Edit decision"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <div className="p-1.5 text-green-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </>
                      ) : (
                        /* Pending state: show reject + approve */
                        <>
                          <button
                            onClick={() => handleMmaFeeReject('procedure1')}
                            className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          >
                            <AlertCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleMmaFeeApprove('procedure1')}
                            className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {mmaFeeScheduleFields.procedure1.rejected && !mmaFeeScheduleFields.procedure1.approved && (
                    <div className="mt-2">
                      <textarea
                        placeholder="Enter rejection reason..."
                        value={mmaFeeScheduleFields.procedure1.rejectionReason}
                        onChange={(e) => handleMmaFeeRejectionReason('procedure1', e.target.value)}
                        disabled={mmaFeeScheduleFields.procedure1.rejectionSubmitted}
                        className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                          mmaFeeScheduleFields.procedure1.rejectionSubmitted ? 'bg-gray-50' : ''
                        }`}
                        rows={2}
                      />
                      {!mmaFeeScheduleFields.procedure1.rejectionSubmitted && (
                        <button
                          onClick={() => handleMmaFeeSubmitRejection('procedure1')}
                          disabled={!mmaFeeScheduleFields.procedure1.rejectionReason.trim()}
                          className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Procedure 2 */}
                <div className="transition-all">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-gray-700 w-32 flex-shrink-0">
                      {mmaFeeScheduleFields.procedure2.name}<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-20 flex-shrink-0">MMA Estimates</label>
                      <input
                        type="text"
                        value={mmaFeeScheduleFields.procedure2.mmaEstimate}
                        onChange={() => {}}
                        readOnly
                        className="w-24 border rounded px-2 py-1 text-xs bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-xs text-gray-600 w-24 flex-shrink-0">Actual Invoice Cost</label>
                      <input
                        type="text"
                        value={mmaFeeScheduleFields.procedure2.actualCost}
                        onChange={() => {}}
                        readOnly
                        className="w-24 border rounded px-2 py-1 text-xs bg-red-50 text-gray-700 border-red-300"
                      />
                    </div>
                    <div className="flex gap-2">
                      {mmaFeeScheduleFields.procedure2.rejectionSubmitted && !mmaFeeScheduleFields.procedure2.approved ? (
                        /* Rejected state: show ONLY edit button */
                        <button
                          onClick={() => {
                            setMmaFeeScheduleFields(prev => ({
                              ...prev,
                              procedure2: { ...prev.procedure2, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false }
                            }));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit (Reset to Pending)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      ) : mmaFeeScheduleFields.procedure2.approved ? (
                        /* Approved state: show edit + green check */
                        <>
                          <button
                            onClick={() => {
                              setMmaFeeScheduleFields(prev => ({
                                ...prev,
                                procedure2: { ...prev.procedure2, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '' }
                              }));
                            }}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                            title="Edit decision"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <div className="p-1.5 text-green-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </>
                      ) : (
                        /* Pending state: show reject + approve */
                        <>
                          <button
                            onClick={() => handleMmaFeeReject('procedure2')}
                            className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          >
                            <AlertCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleMmaFeeApprove('procedure2')}
                            className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {mmaFeeScheduleFields.procedure2.rejected && !mmaFeeScheduleFields.procedure2.approved && (
                    <div className="mt-2">
                      <textarea
                        placeholder="Enter rejection reason..."
                        value={mmaFeeScheduleFields.procedure2.rejectionReason}
                        onChange={(e) => handleMmaFeeRejectionReason('procedure2', e.target.value)}
                        disabled={mmaFeeScheduleFields.procedure2.rejectionSubmitted}
                        className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                          mmaFeeScheduleFields.procedure2.rejectionSubmitted ? 'bg-gray-50' : ''
                        }`}
                        rows={2}
                      />
                      {!mmaFeeScheduleFields.procedure2.rejectionSubmitted && (
                        <button
                          onClick={() => handleMmaFeeSubmitRejection('procedure2')}
                          disabled={!mmaFeeScheduleFields.procedure2.rejectionReason.trim()}
                          className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Accordion: Other Policy Rules */}
          <div className={`mb-3 border-2 rounded-xl overflow-hidden shadow-md transition-shadow ${
            !isDocumentReviewComplete() 
              ? 'border-gray-300 opacity-50 cursor-not-allowed' 
              : 'border-gray-200 hover:shadow-lg'
          }`}>
            <button
              onClick={() => isDocumentReviewComplete() && toggleAccordion('otherPolicy')}
              disabled={!isDocumentReviewComplete()}
              className={`w-full px-4 py-2.5 flex justify-between items-center transition-all ${
                !isDocumentReviewComplete()
                  ? 'bg-gray-100 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Other Policy Rules</h3>
                {!isDocumentReviewComplete() && (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
                {getOtherPolicyStatus() === 'approved' && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {getOtherPolicyStatus() === 'warning' && (
                  <AlertCircle className="w-5 h-5 text-yellow-600 fill-current" />
                )}
              </div>
              {expandedAccordions.otherPolicy ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedAccordions.otherPolicy && (
              <div className="p-4 bg-white space-y-6">
                {/* PAF Cost Vs Total Invoice */}
                <div className="transition-all">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    PAF Cost Vs Total Invoice<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-start gap-2">
                    <div className="flex-1 flex gap-3">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">PAF Cost</label>
                        <input
                          type="text"
                          value={otherPolicyFields.pafVsInvoice.pafCost}
                          readOnly
                          className="w-full border rounded px-3 py-1.5 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Total Invoice Cost</label>
                        <input
                          type="text"
                          value={otherPolicyFields.pafVsInvoice.totalInvoiceCost}
                          readOnly
                          className="w-full border rounded px-3 py-1.5 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                    </div>
                    {otherPolicyFields.pafVsInvoice.rejected && !otherPolicyFields.pafVsInvoice.approved && (
                      <div className="flex-1">
                        <textarea
                          placeholder="Enter rejection reason..."
                          value={otherPolicyFields.pafVsInvoice.rejectionReason}
                          onChange={(e) => handleOtherPolicyRejectionReason('pafVsInvoice', e.target.value)}
                          disabled={otherPolicyFields.pafVsInvoice.rejectionSubmitted}
                          className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                            otherPolicyFields.pafVsInvoice.rejectionSubmitted ? 'bg-gray-50' : ''
                          }`}
                          rows={2}
                        />
                        {!otherPolicyFields.pafVsInvoice.rejectionSubmitted && (
                          <button
                            onClick={() => handleOtherPolicySubmitRejection('pafVsInvoice')}
                            disabled={!otherPolicyFields.pafVsInvoice.rejectionReason.trim()}
                            className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    )}
                    <div className="flex gap-2 pt-6">
                      {otherPolicyFields.pafVsInvoice.rejectionSubmitted && !otherPolicyFields.pafVsInvoice.approved ? (
                        /* Rejected state: show ONLY edit button */
                        <button
                          onClick={() => {
                            setOtherPolicyFields(prev => ({
                              ...prev,
                              pafVsInvoice: { ...prev.pafVsInvoice, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false }
                            }));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit (Reset to Pending)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      ) : otherPolicyFields.pafVsInvoice.approved ? (
                        /* Approved state: show edit + green check */
                        <>
                          <button
                            onClick={() => {
                              setOtherPolicyFields(prev => ({
                                ...prev,
                                pafVsInvoice: { ...prev.pafVsInvoice, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '' }
                              }));
                            }}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                            title="Edit decision"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <div className="p-1.5 text-green-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </>
                      ) : (
                        /* Pending state: show reject + approve */
                        <>
                          <button
                            onClick={() => handleOtherPolicyReject('pafVsInvoice')}
                            className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          >
                            <AlertCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleOtherPolicyApprove('pafVsInvoice')}
                            className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Total Days of Stay */}
                <div className="transition-all">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Total Days of Stay<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-start gap-2">
                    <div className="flex-1 flex gap-3">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Max Allowed</label>
                        <input
                          type="text"
                          value={otherPolicyFields.daysOfStay.maxAllowed}
                          readOnly
                          className="w-full border rounded px-3 py-1.5 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Actual</label>
                        <input
                          type="text"
                          value={otherPolicyFields.daysOfStay.actual}
                          readOnly
                          className="w-full border rounded px-3 py-1.5 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                    </div>
                    {otherPolicyFields.daysOfStay.rejected && !otherPolicyFields.daysOfStay.approved && (
                      <div className="flex-1">
                        <textarea
                          placeholder="Enter rejection reason..."
                          value={otherPolicyFields.daysOfStay.rejectionReason}
                          onChange={(e) => handleOtherPolicyRejectionReason('daysOfStay', e.target.value)}
                          disabled={otherPolicyFields.daysOfStay.rejectionSubmitted}
                          className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                            otherPolicyFields.daysOfStay.rejectionSubmitted ? 'bg-gray-50' : ''
                          }`}
                          rows={2}
                        />
                        {!otherPolicyFields.daysOfStay.rejectionSubmitted && (
                          <button
                            onClick={() => handleOtherPolicySubmitRejection('daysOfStay')}
                            disabled={!otherPolicyFields.daysOfStay.rejectionReason.trim()}
                            className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    )}
                    <div className="flex gap-2 pt-6">
                      {otherPolicyFields.daysOfStay.rejectionSubmitted && !otherPolicyFields.daysOfStay.approved ? (
                        /* Rejected state: show ONLY edit button */
                        <button
                          onClick={() => {
                            setOtherPolicyFields(prev => ({
                              ...prev,
                              daysOfStay: { ...prev.daysOfStay, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false }
                            }));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit (Reset to Pending)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      ) : otherPolicyFields.daysOfStay.approved ? (
                        /* Approved state: show edit + green check */
                        <>
                          <button
                            onClick={() => {
                              setOtherPolicyFields(prev => ({
                                ...prev,
                                daysOfStay: { ...prev.daysOfStay, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '' }
                              }));
                            }}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                            title="Edit decision"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <div className="p-1.5 text-green-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </>
                      ) : (
                        /* Pending state: show reject + approve */
                        <>
                          <button
                            onClick={() => handleOtherPolicyReject('daysOfStay')}
                            className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          >
                            <AlertCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleOtherPolicyApprove('daysOfStay')}
                            className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Total Number of Visitations */}
                <div className="transition-all">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Total Number of Visitations<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-start gap-2">
                    <div className="flex-1 flex gap-3">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Max Allowed</label>
                        <input
                          type="text"
                          value={otherPolicyFields.visitations.maxAllowed}
                          readOnly
                          className="w-full border rounded px-3 py-1.5 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Actual</label>
                        <input
                          type="text"
                          value={otherPolicyFields.visitations.actual}
                          readOnly
                          className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                            otherPolicyFields.visitations.exceeds 
                              ? 'bg-red-50 border-red-500 border-2' 
                              : 'bg-gray-50'
                          }`}
                        />
                        {otherPolicyFields.visitations.exceeds && (
                          <p className="text-xs text-red-600 mt-1">Exceeds maximum allowed</p>
                        )}
                      </div>
                    </div>
                    {otherPolicyFields.visitations.rejected && !otherPolicyFields.visitations.approved && (
                      <div className="flex-1">
                        <textarea
                          placeholder="Enter rejection reason..."
                          value={otherPolicyFields.visitations.rejectionReason}
                          onChange={(e) => handleOtherPolicyRejectionReason('visitations', e.target.value)}
                          disabled={otherPolicyFields.visitations.rejectionSubmitted}
                          className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 ${
                            otherPolicyFields.visitations.rejectionSubmitted ? 'bg-gray-50' : ''
                          }`}
                          rows={2}
                        />
                        {!otherPolicyFields.visitations.rejectionSubmitted && (
                          <button
                            onClick={() => handleOtherPolicySubmitRejection('visitations')}
                            disabled={!otherPolicyFields.visitations.rejectionReason.trim()}
                            className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    )}
                    <div className="flex gap-2 pt-6">
                      {otherPolicyFields.visitations.rejectionSubmitted && !otherPolicyFields.visitations.approved ? (
                        /* Rejected state: show ONLY edit button */
                        <button
                          onClick={() => {
                            setOtherPolicyFields(prev => ({
                              ...prev,
                              visitations: { ...prev.visitations, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false }
                            }));
                          }}
                          className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit (Reset to Pending)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      ) : otherPolicyFields.visitations.approved ? (
                        /* Approved state: show edit + green check */
                        <>
                          <button
                            onClick={() => {
                              setOtherPolicyFields(prev => ({
                                ...prev,
                                visitations: { ...prev.visitations, approved: false, rejected: false, rejectionSubmitted: false, rejectionReason: '' }
                              }));
                            }}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                            title="Edit decision"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <div className="p-1.5 text-green-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </>
                      ) : (
                        /* Pending state: show reject + approve */
                        <>
                          <button
                            onClick={() => handleOtherPolicyReject('visitations')}
                            className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                          >
                            <AlertCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleOtherPolicyApprove('visitations')}
                            className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Dynamic Other Policy Fields */}
                {dynamicOtherPolicyFields.length > 0 && dynamicOtherPolicyFields.map((item, index) => (
                    <div key={`dynamic-other-${index}`} data-dynamic-other-index={index} className="transition-all">
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        {item.label}<span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={item.value}
                            readOnly
                            className={`w-full border rounded px-3 py-1.5 text-sm ${
                              item.approved 
                                ? 'border-green-500 bg-gray-50 text-gray-700' 
                                : 'border-gray-300 text-gray-700'
                            }`}
                          />
                          {!item.approved && !item.rejectionSubmitted && (
                            <p className="text-xs text-red-600 mt-1">Pending Review</p>
                          )}
                          {item.rejected && !item.approved && (
                            <div className="mt-2">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm text-red-600 font-medium">Not Covered</span>
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={item.mmuValidation || false}
                                    onChange={() => handleDynamicMmuValidationToggle('otherPolicy', index)}
                                    disabled={item.rejectionSubmitted}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                  />
                                  <span className="text-xs text-gray-700">Tag for MMU Validation</span>
                                </label>
                              </div>
                              <textarea
                                placeholder="Enter rejection reason..."
                                value={item.rejectionReason}
                                onChange={(e) => handleDynamicFieldRejectionChange('otherPolicy', index, e.target.value)}
                                disabled={item.rejectionSubmitted}
                                className={`w-full border rounded px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
                                  item.rejectionSubmitted 
                                    ? 'bg-gray-50 border-gray-300' 
                                    : 'border-red-300'
                                }`}
                                rows={2}
                              />
                              {!item.rejectionSubmitted && (
                                <button
                                  onClick={() => handleDynamicFieldSubmitRejection('otherPolicy', index)}
                                  disabled={!item.rejectionReason.trim()}
                                  className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                  Submit
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 pt-2">
                          {/* For "Not Covered" items - follow normal flow but with edit button on approved state */}
                          {item.isNotCovered && item.approved ? (
                            /* Approved flagged item: show edit + green check */
                            <>
                              <button
                                onClick={() => {
                                  setDynamicOtherPolicyFields(prev => prev.map((f, i) => 
                                    i === index ? { ...f, approved: false } : f
                                  ));
                                }}
                                className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                                title="Edit (Unapprove)"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <div className="p-1.5 text-green-600" title="Flagged & Approved">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                              </div>
                            </>
                          ) : item.mmuValidation ? (
                            /* MMU Review state: show ONLY yellow alert icon */
                            <div className="p-1.5 text-yellow-600" title="MMU Review Required">
                              <AlertCircle className="w-5 h-5 fill-current" />
                            </div>
                          ) : item.rejectionSubmitted && !item.approved ? (
                            /* Rejected state: show ONLY edit button */
                            <button
                              onClick={() => {
                                // Reset to pending state
                                setDynamicOtherPolicyFields(prev => prev.map((f, i) => 
                                  i === index ? { ...f, rejected: false, rejectionSubmitted: false, rejectionReason: '', mmuValidation: false } : f
                                ));
                              }}
                              className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                              title="Edit (Reset to Pending)"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                          ) : item.approved ? (
                            /* Approved state: show green check only */
                            <div className="p-1.5 text-green-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          ) : (
                            /* Pending state: show reject + approve buttons */
                            <>
                              <button
                                onClick={() => handleDynamicFieldReject('otherPolicy', index)}
                                className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                                title="Reject"
                              >
                                <AlertCircle className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleDynamicFieldApprove('otherPolicy', index)}
                                className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                                title="Approve"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t-2 border-gray-200">
            <button 
              onClick={() => isDocumentReviewComplete() && setShowAddLineItemDialog(true)}
              disabled={!isDocumentReviewComplete()}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium text-sm shadow-sm ${
                !isDocumentReviewComplete()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
              }`}
            >
              <span className="text-lg font-bold">+</span>
              Add Line Item
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleSaveDraft}
                className="bg-white border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 hover:border-blue-700 font-medium transition-all text-sm shadow-sm"
              >
                Save as Draft
              </button>
              <button
                onClick={handleSubmitCase}
                disabled={!isDocumentReviewComplete()}
                className={`px-6 py-2 rounded-lg transition-all font-medium text-sm ${
                  !isDocumentReviewComplete()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800'
                }`}
              >
                Submit Case
              </button>
            </div>
          </div>
          
          {/* Add Line Item Dialog */}
          {showAddLineItemDialog && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all animate-slideUp">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-t-2xl flex justify-between items-center">
                  <h2 className="text-lg font-bold">Add Line Item</h2>
                  <button
                    onClick={() => {
                      setShowAddLineItemDialog(false);
                      setNewLineItem({ 
                        itemCategory: 'medicalPolicy',
                        category: 'Pharma & Medication',
                        description: '',
                        payable: '',
                        status: 'Not Covered',
                        reason: '',
                        bearer: '',
                        mmuValidation: false
                      });
                    }}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-1 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-5 space-y-3">
                  {/* Item Category Dropdown - Full Width */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Item Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={newLineItem.itemCategory}
                      onChange={(e) => setNewLineItem({ ...newLineItem, itemCategory: e.target.value })}
                      className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="documentReview">Document Review</option>
                      <option value="medicalPolicy">Medical Policy Guideline (Anomalies)</option>
                      <option value="mmaFeeSchedule">MMA Fee Schedule</option>
                      <option value="otherPolicy">Other Policy Rules</option>
                    </select>
                  </div>
                  
                  {/* Item Type Dropdown - Full Width */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Item Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={newLineItem.category}
                      onChange={(e) => setNewLineItem({ ...newLineItem, category: e.target.value })}
                      className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="Pharma & Medication">Pharma & Medication</option>
                      <option value="Medical Supplies">Medical Supplies</option>
                      <option value="Consultation Fees">Consultation Fees</option>
                      <option value="Procedures">Procedures</option>
                    </select>
                  </div>
                  
                  {/* Description and Payable - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newLineItem.description}
                        onChange={(e) => setNewLineItem({ ...newLineItem, description: e.target.value })}
                        placeholder="Enter description..."
                        className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Payable (MYR) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newLineItem.payable}
                        onChange={(e) => setNewLineItem({ ...newLineItem, payable: e.target.value })}
                        placeholder="Enter amount..."
                        className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  {/* Reason - Full Width */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Reason <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={newLineItem.reason}
                      onChange={(e) => setNewLineItem({ ...newLineItem, reason: e.target.value })}
                      placeholder="Enter reason for flagging..."
                      rows={2}
                      className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  
                  {/* Bearer Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bearer Selection <span className="text-red-500">*</span>
                    </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newLineItem.bearer === 'hospital'}
                            onChange={() => setNewLineItem({ ...newLineItem, bearer: 'hospital' })}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700 font-medium">Hospital to bear</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newLineItem.bearer === 'patient'}
                            onChange={() => setNewLineItem({ ...newLineItem, bearer: 'patient' })}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700 font-medium">Patient to bear</span>
                        </label>
                      </div>
                    </div>
                  
                  {/* Tag for MMU Review Checkbox */}
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newLineItem.mmuValidation}
                        onChange={(e) => setNewLineItem({ ...newLineItem, mmuValidation: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">Tag for MMU Review</span>
                    </label>
                  </div>
                </div>
                
                <div className="px-5 pb-4 flex gap-3">
                  <button
                    onClick={() => {
                      setShowAddLineItemDialog(false);
                      setNewLineItem({ 
                        itemCategory: 'medicalPolicy',
                        category: 'Pharma & Medication',
                        description: '',
                        payable: '',
                        status: 'Not Covered',
                        reason: '',
                        bearer: '',
                        mmuValidation: false
                      });
                    }}
                    className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddLineItem}
                    disabled={
                      !newLineItem.description.trim() || 
                      !newLineItem.payable.trim() || 
                      !newLineItem.reason.trim() ||
                      !newLineItem.bearer
                    }
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Add to Flagged Items
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Floating Query Chatbot Button */}
      {!showQueryChatbot && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowQueryChatbot(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all"
            title="Query Document"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Query Chatbot Dialog */}
      {showQueryChatbot && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col animate-slideUp">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="font-semibold text-lg">Query</h3>
            <button
              onClick={() => setShowQueryChatbot(false)}
              className="text-white hover:bg-blue-700 rounded-lg p-1 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {/* User Message */}
            <div className="flex justify-end mb-4">
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md">
                  <p className="text-sm">From the document, can you provide me the billing address</p>
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-right mb-4">8:00 PM</div>
            
            {/* Bot Message */}
            <div className="flex justify-start mb-4">
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-md border border-gray-200">
                  <p className="text-sm text-gray-800 mb-2">The billing address details from the document are as follows:</p>
                  <p className="text-sm text-gray-800 font-medium">Recipient: POTASH CORP OF SASK INC.</p>
                  <p className="text-sm text-gray-800">Address: POTASH CORP OF SASK INC ALLAN POTASH HWY 397 N POBOX 301 ALLAN SK S0K 0C0</p>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-4">8:00 PM</div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter query here"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      
      {/* Summary Dialog */}
      {showSummaryDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl transform transition-all animate-slideUp max-h-[90vh] flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold">Case Summary</h2>
              <button
                onClick={() => setShowSummaryDialog(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-1 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border-2 border-orange-200">
                  <div className="text-sm font-semibold text-orange-600 mb-1">Total Flagged</div>
                  <div className="text-3xl font-bold text-orange-700">{calculateStatistics().totalFlagged}</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border-2 border-green-200">
                  <div className="text-sm font-semibold text-green-600 mb-1">Total Accepted</div>
                  <div className="text-3xl font-bold text-green-700">{calculateStatistics().totalAccepted}</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border-2 border-red-200">
                  <div className="text-sm font-semibold text-red-600 mb-1">Total Rejected</div>
                  <div className="text-3xl font-bold text-red-700">{calculateStatistics().totalRejected}</div>
                </div>
              </div>
              
              {/* Summary Table */}
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b-2">Section</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b-2">Field</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b-2">Value</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Document Review Section */}
                    <tr className="bg-blue-50">
                      <td colSpan="4" className="px-4 py-2 font-bold text-blue-800">Document Review</td>
                    </tr>
                    {Object.entries(documentReviewFields).map(([key, field], idx) => {
                      // Use numeric comparison for validation
                      const systemNum = extractNumericValue(field.systemCollection);
                      const agentNum = extractNumericValue(field.agentObserved);
                      let hasMismatch = false;
                      
                      if (field.agentObserved !== '') {
                        if (systemNum !== null && agentNum !== null) {
                          hasMismatch = systemNum !== agentNum;
                        } else {
                          hasMismatch = field.systemCollection !== field.agentObserved;
                        }
                      }
                      
                      return (
                        <tr key={`doc-review-${idx}`} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm"></td>
                          <td className="px-4 py-2 text-sm font-medium">{key.toUpperCase()}</td>
                          <td className="px-4 py-2 text-sm">
                            <div className="space-y-1">
                              <div className="text-xs text-gray-500">System: {field.systemCollection}</div>
                              <div className="text-xs text-gray-700">Agent: {field.agentObserved || 'Not entered'}</div>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm">
                            {hasMismatch ? (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Mismatch</span>
                            ) : field.checked ? (
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Validated</span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                    
                    {/* Medical Policy Section - Header */}
                    <tr className="bg-blue-50">
                      <td colSpan="4" className="px-4 py-2 font-bold text-blue-800">Medical Policy Guideline (Anomalies)</td>
                    </tr>
                    
                    {/* Rejected Items Section */}
                    {(() => {
                      const rejectedItems = lineItems.filter((item, idx) => fieldStates[idx]?.rejectionSubmitted);
                      if (rejectedItems.length > 0) {
                        const rejectedTotal = rejectedItems.reduce((sum, item, idx) => {
                          const originalIdx = lineItems.findIndex(li => li === item);
                          return sum + (fieldStates[originalIdx]?.rejectionSubmitted ? item.amount : 0);
                        }, 0);
                        return (
                          <>
                            <tr className="bg-red-50">
                              <td colSpan="3" className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="w-5 h-5 text-red-600" />
                                  <span className="font-semibold text-red-800">Rejected</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-xs font-semibold text-gray-600 text-right">Amount (MYR)</td>
                            </tr>
                            {rejectedItems.map((item, idx) => {
                              const originalIdx = lineItems.findIndex(li => li === item);
                              return (
                                <tr key={`rejected-${originalIdx}`} className="border-b hover:bg-gray-50">
                                  <td colSpan="3" className="px-6 py-2 text-sm">{item.value}</td>
                                  <td className="px-4 py-2 text-sm text-right">{item.amount.toFixed(2)}</td>
                                </tr>
                              );
                            })}
                            <tr className="bg-red-100 font-bold">
                              <td colSpan="3" className="px-6 py-3 text-sm">TOTAL</td>
                              <td className="px-4 py-3 text-sm text-right">{rejectedTotal.toFixed(2)}</td>
                            </tr>
                          </>
                        );
                      }
                      return null;
                    })()}
                    
                    {/* Hospital to Bear Section */}
                    {(() => {
                      // Include both static and dynamic items
                      const hospitalItems = [
                        ...lineItems.filter((item, idx) => 
                          fieldStates[idx]?.approved && fieldStates[idx]?.bearer === 'hospital'
                        ),
                        ...dynamicMedicalPolicyFields.filter(item => 
                          item.approved && item.isNotCovered && item.bearer === 'hospital'
                        ),
                        ...dynamicOtherPolicyFields.filter(item => 
                          item.approved && item.isNotCovered && item.bearer === 'hospital'
                        )
                      ];
                      
                      if (hospitalItems.length > 0) {
                        const hospitalTotal = hospitalItems.reduce((sum, item) => sum + item.amount, 0);
                        return (
                          <>
                            <tr className="bg-green-50">
                              <td colSpan="3" className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                  <span className="font-semibold text-green-800">Hospital to bear</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-xs font-semibold text-gray-600 text-right">Amount (MYR)</td>
                            </tr>
                            {hospitalItems.map((item, idx) => (
                              <tr key={`hospital-${idx}`} className="border-b hover:bg-gray-50">
                                <td colSpan="3" className="px-6 py-2 text-sm">{item.value}</td>
                                <td className="px-4 py-2 text-sm text-right">{item.amount.toFixed(2)}</td>
                              </tr>
                            ))}
                            <tr className="bg-green-100 font-bold">
                              <td className="px-6 py-3 text-sm">TOTAL</td>
                              <td colSpan="2" className="px-4 py-3"></td>
                              <td className="px-4 py-3 text-sm text-right">{hospitalTotal.toFixed(2)}</td>
                            </tr>
                          </>
                        );
                      }
                      return null;
                    })()}
                    
                    {/* Patient to Bear Section */}
                    {(() => {
                      // Include both static and dynamic items
                      const patientItems = [
                        ...lineItems.filter((item, idx) => 
                          fieldStates[idx]?.approved && fieldStates[idx]?.bearer === 'patient'
                        ),
                        ...dynamicMedicalPolicyFields.filter(item => 
                          item.approved && item.isNotCovered && item.bearer === 'patient'
                        ),
                        ...dynamicOtherPolicyFields.filter(item => 
                          item.approved && item.isNotCovered && item.bearer === 'patient'
                        )
                      ];
                      
                      if (patientItems.length > 0) {
                        const patientTotal = patientItems.reduce((sum, item) => sum + item.amount, 0);
                        return (
                          <>
                            <tr className="bg-green-50">
                              <td colSpan="3" className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                  <span className="font-semibold text-green-800">Patient to bear</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-xs font-semibold text-gray-600 text-right">Amount (MYR)</td>
                            </tr>
                            {patientItems.map((item, idx) => (
                              <tr key={`patient-${idx}`} className="border-b hover:bg-gray-50">
                                <td colSpan="3" className="px-6 py-2 text-sm">{item.value}</td>
                                <td className="px-4 py-2 text-sm text-right">{item.amount.toFixed(2)}</td>
                              </tr>
                            ))}
                            <tr className="bg-green-100 font-bold">
                              <td colSpan="3" className="px-6 py-3 text-sm">TOTAL</td>
                              <td className="px-4 py-3 text-sm text-right">{patientTotal.toFixed(2)}</td>
                            </tr>
                          </>
                        );
                      }
                      return null;
                    })()}
                    
                    {/* Dynamic Medical Policy Fields */}
                    {dynamicMedicalPolicyFields.map((item, idx) => (
                      <tr key={`dynamic-medical-${idx}`} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm"></td>
                        <td className="px-4 py-2 text-sm font-medium">{item.label}</td>
                        <td className="px-4 py-2 text-sm">{item.value}</td>
                        <td className="px-4 py-2 text-sm">
                          {item.approved ? (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                          ) : item.rejectionSubmitted ? (
                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                          ) : (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    
                    {/* MMA Fee Schedule Section */}
                    <tr className="bg-blue-50">
                      <td colSpan="4" className="px-4 py-2 font-bold text-blue-800">MMA Fee Schedule</td>
                    </tr>
                    
                    {/* Procedure 1 */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm"></td>
                      <td className="px-4 py-2 text-sm font-medium">{mmaFeeScheduleFields.procedure1.name}</td>
                      <td className="px-4 py-2 text-sm">
                        MMA: {mmaFeeScheduleFields.procedure1.mmaEstimate} | Actual: {mmaFeeScheduleFields.procedure1.actualCost}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        {mmaFeeScheduleFields.procedure1?.approved ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                        ) : mmaFeeScheduleFields.procedure1?.rejectionSubmitted ? (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                        )}
                      </td>
                    </tr>
                    
                    {/* Procedure 2 */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm"></td>
                      <td className="px-4 py-2 text-sm font-medium">{mmaFeeScheduleFields.procedure2.name}</td>
                      <td className="px-4 py-2 text-sm">
                        MMA: {mmaFeeScheduleFields.procedure2.mmaEstimate} | Actual: {mmaFeeScheduleFields.procedure2.actualCost}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        {mmaFeeScheduleFields.procedure2?.approved ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                        ) : mmaFeeScheduleFields.procedure2?.rejectionSubmitted ? (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                        )}
                      </td>
                    </tr>
                    
                    {/* Other Policy Rules Section */}
                    <tr className="bg-blue-50">
                      <td colSpan="4" className="px-4 py-2 font-bold text-blue-800">Other Policy Rules</td>
                    </tr>
                    
                    {/* PAF Cost vs Invoice */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm"></td>
                      <td className="px-4 py-2 text-sm font-medium">PAF Cost Vs Total Invoice</td>
                      <td className="px-4 py-2 text-sm">
                        PAF: {otherPolicyFields.pafVsInvoice.pafCost} | Invoice: {otherPolicyFields.pafVsInvoice.totalInvoiceCost}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        {otherPolicyFields.pafVsInvoice?.approved ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                        ) : otherPolicyFields.pafVsInvoice?.rejectionSubmitted ? (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                        )}
                      </td>
                    </tr>
                    
                    {/* Days of Stay */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm"></td>
                      <td className="px-4 py-2 text-sm font-medium">Total Days of Stay</td>
                      <td className="px-4 py-2 text-sm">
                        Max: {otherPolicyFields.daysOfStay.maxAllowed} | Actual: {otherPolicyFields.daysOfStay.actual}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        {otherPolicyFields.daysOfStay?.approved ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                        ) : otherPolicyFields.daysOfStay?.rejectionSubmitted ? (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                        )}
                      </td>
                    </tr>
                    
                    {/* Visitations */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm"></td>
                      <td className="px-4 py-2 text-sm font-medium">Number of Visitations</td>
                      <td className="px-4 py-2 text-sm">
                        Max: {otherPolicyFields.visitations.maxAllowed} | Actual: {otherPolicyFields.visitations.actual}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        {otherPolicyFields.visitations?.approved ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                        ) : otherPolicyFields.visitations?.rejectionSubmitted ? (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                        )}
                      </td>
                    </tr>
                    
                    {/* Other Policy Section - Dynamic Fields */}
                    {dynamicOtherPolicyFields.length > 0 && (
                      <>
                        {dynamicOtherPolicyFields.map((item, idx) => (
                          <tr key={`dynamic-other-${idx}`} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2 text-sm"></td>
                            <td className="px-4 py-2 text-sm font-medium">{item.label}</td>
                            <td className="px-4 py-2 text-sm">{item.value}</td>
                            <td className="px-4 py-2 text-sm">
                              {item.approved ? (
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                              ) : item.rejectionSubmitted ? (
                                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                              ) : (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="px-6 pb-6 flex justify-between items-center border-t-2 pt-4">
              <div className="flex items-center gap-4">
                {checkDocumentReviewMismatches() && (
                  <p className="text-sm text-yellow-700 font-medium">⚠️ Pending items for review</p>
                )}
                <button
                  onClick={handleExportToExcel}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold transition-all"
                  title="Export to Excel"
                >
                  <FileSpreadsheet className="w-5 h-5" />
                  Export to Excel
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSummaryDialog(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFinalSubmit}
                  className={`px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all ${
                    checkDocumentReviewMismatches()
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:from-yellow-700 hover:to-yellow-800'
                      : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
                  }`}
                >
                  {checkDocumentReviewMismatches() ? 'Save to Draft' : 'Final Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Info Popup */}
      {showInfoPopup && (
        <InfoPopup 
          message={showInfoPopup}
          onClose={() => setShowInfoPopup(null)}
          position={popupPosition}
        />
      )}
      
      {/* Bearer Selection Dialog */}
      {showBearerDialog && (
        <BearerSelectionDialog
          onClose={() => {
            setShowBearerDialog(false);
            setSelectedBearerFieldIndex(null);
          }}
          onSelect={handleBearerSelect}
          currentSelection={selectedBearerFieldIndex !== null ? fieldStates[selectedBearerFieldIndex]?.bearer : 'hospital'}
        />
      )}
      
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">Processing submission...</p>
          </div>
        </div>
      )}
      
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg shadow-2xl z-50 animate-slideUp">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            <div>
              <p className="font-bold text-lg">Case Submitted Successfully!</p>
              <p className="text-sm">You are now being redirected to the next case...</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Draft Toast */}
      {showDraftToast && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg shadow-2xl z-50 animate-slideUp">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            <div>
              <p className="font-bold text-lg">Document Saved as Draft!</p>
              <p className="text-sm">You can continue working on this later.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [selectedDocId, setSelectedDocId] = useState(null);
  
  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };
  
  const handleDocumentClick = (docId) => {
    setSelectedDocId(docId);
    setCurrentScreen('detail');
  };
  
  const handleBack = () => {
    setCurrentScreen('dashboard');
  };
  
  return (
    <div className="font-sans">
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      {currentScreen === 'dashboard' && <DashboardScreen onDocumentClick={handleDocumentClick} />}
      {currentScreen === 'detail' && <DocumentDetailScreen documentId={selectedDocId} onBack={handleBack} />}
    </div>
  );
}
