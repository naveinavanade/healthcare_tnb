import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter, Download, AlertCircle, HelpCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ZoomIn, ZoomOut, X, CheckCircle, Search, Info, Heart } from 'lucide-react';
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
      <div className="w-1/2 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden flex flex-col justify-between p-12">
        {/* TNB Logo */}
        <div className="relative z-10">
          <img src={TNB_LOGO} alt="TNB Logo" className="w-20 h-20 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform" />
        </div>
        
        {/* Main Content - Editable */}
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
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder={loginContent.emailPlaceholder}
                className="w-full pl-14 pr-4 py-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100 transition-all text-lg"
              />
            </div>
          </div>
          
          {/* Get Started Button */}
          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
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
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    overdue: false,
    dateFrom: '',
    dateTo: ''
  });
  
  const tabs = [
    { name: 'All', count: '15' },
    { name: 'Uploaded', count: '03' },
    { name: 'Queued', count: '02' },
    { name: 'QA', count: '04' },
    { name: 'Captured', count: '02' },
    { name: 'Approved', count: '02' },
    { name: 'Rejected', count: '01' },
    { name: 'Error', count: '01' }
  ];
  
  const getStatusStyles = (status) => {
    const styles = {
      'Captured': 'bg-blue-100 text-blue-700 border border-blue-200',
      'Uploaded': 'bg-indigo-100 text-indigo-700 border border-indigo-200',
      'QA': 'bg-purple-100 text-purple-700 border border-purple-200',
      'Queued': 'bg-amber-100 text-amber-700 border border-amber-200',
      'Approved': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
      'Rejected': 'bg-rose-100 text-rose-700 border border-rose-200',
      'Error': 'bg-red-100 text-red-700 border border-red-200'
    };
    return styles[status] || 'bg-gray-100 text-gray-700 border border-gray-200';
  };
  
  const getStatusColor = (status) => {
    const colors = {
      'Captured': 'bg-blue-100 text-blue-700',
      'QA': 'bg-yellow-100 text-yellow-700',
      'Uploaded': 'bg-gray-100 text-gray-700',
      'Queued': 'bg-purple-100 text-purple-700',
      'Approved': 'bg-green-100 text-green-700',
      'Rejected': 'bg-red-100 text-red-700',
      'Error': 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };
  
  const handleApplyFilters = () => {
    const filters = [];
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
    if (filterType === 'overdue') {
      setFilterOptions({ ...filterOptions, overdue: false });
    } else if (filterType === 'dateRange') {
      setFilterOptions({ ...filterOptions, dateFrom: '', dateTo: '' });
    }
  };
  
  // Filter documents based on search query
  const getFilteredDocuments = (documents) => {
    if (!searchQuery.trim()) {
      return documents;
    }
    return documents.filter(doc => 
      doc.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const allDocumentsData = {
    'All': [
      { id: '1387452', fileName: 'invoice-medical-2024...', pendingAge: '200', status: 'Captured', owner: 'name@mail.com', receivedOn: '2025-07-21, 18:45', modified: 'name@mail.com' },
      { id: '1387453', fileName: 'guarantee-letter-abc...', pendingAge: '180', status: 'Uploaded', owner: 'john@mail.com', receivedOn: '2025-07-21, 17:30', modified: 'john@mail.com' },
      { id: '1387454', fileName: 'pre-admission-form...', pendingAge: '150', status: 'QA', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 16:20', modified: 'sarah@mail.com' },
      { id: '1387455', fileName: 'invoice-pharmacy...', pendingAge: '120', status: 'Queued', owner: 'mike@mail.com', receivedOn: '2025-07-21, 15:45', modified: 'mike@mail.com' },
      { id: '1387456', fileName: 'medical-report-xyz...', pendingAge: '100', status: 'Approved', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 14:30', modified: 'lisa@mail.com' },
      { id: '1387457', fileName: 'claim-form-2024...', pendingAge: '80', status: 'QA', owner: 'name@mail.com', receivedOn: '2025-07-21, 13:15', modified: 'name@mail.com' },
      { id: '1387458', fileName: 'receipt-consultation...', pendingAge: '60', status: 'Rejected', owner: 'admin@mail.com', receivedOn: '2025-07-21, 12:00', modified: 'admin@mail.com' },
      { id: '1387459', fileName: 'lab-results-patient...', pendingAge: '45', status: 'Captured', owner: 'john@mail.com', receivedOn: '2025-07-21, 11:30', modified: 'john@mail.com' },
      { id: '1387460', fileName: 'insurance-verification...', pendingAge: '30', status: 'Error', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 10:45', modified: 'sarah@mail.com' },
      { id: '1387461', fileName: 'billing-statement...', pendingAge: '25', status: 'Uploaded', owner: 'mike@mail.com', receivedOn: '2025-07-21, 10:00', modified: 'mike@mail.com' },
      { id: '1387462', fileName: 'referral-letter-dr...', pendingAge: '20', status: 'QA', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 09:30', modified: 'lisa@mail.com' },
      { id: '1387463', fileName: 'prescription-scan...', pendingAge: '15', status: 'Approved', owner: 'name@mail.com', receivedOn: '2025-07-21, 09:00', modified: 'name@mail.com' },
      { id: '1387464', fileName: 'discharge-summary...', pendingAge: '12', status: 'QA', owner: 'john@mail.com', receivedOn: '2025-07-21, 08:45', modified: 'john@mail.com' },
      { id: '1387465', fileName: 'follow-up-notes...', pendingAge: '8', status: 'Queued', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 08:20', modified: 'sarah@mail.com' },
      { id: '1387466', fileName: 'payment-receipt...', pendingAge: '5', status: 'Uploaded', owner: 'mike@mail.com', receivedOn: '2025-07-21, 08:00', modified: 'mike@mail.com' }
    ],
    'Uploaded': [
      { id: '1387453', fileName: 'guarantee-letter-abc...', pendingAge: '180', status: 'Uploaded', owner: 'john@mail.com', receivedOn: '2025-07-21, 17:30', modified: 'john@mail.com' },
      { id: '1387461', fileName: 'billing-statement...', pendingAge: '25', status: 'Uploaded', owner: 'mike@mail.com', receivedOn: '2025-07-21, 10:00', modified: 'mike@mail.com' },
      { id: '1387466', fileName: 'payment-receipt...', pendingAge: '5', status: 'Uploaded', owner: 'mike@mail.com', receivedOn: '2025-07-21, 08:00', modified: 'mike@mail.com' }
    ],
    'Queued': [
      { id: '1387455', fileName: 'invoice-pharmacy...', pendingAge: '120', status: 'Queued', owner: 'mike@mail.com', receivedOn: '2025-07-21, 15:45', modified: 'mike@mail.com' },
      { id: '1387465', fileName: 'follow-up-notes...', pendingAge: '8', status: 'Queued', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 08:20', modified: 'sarah@mail.com' }
    ],
    'QA': [
      { id: '1387454', fileName: 'pre-admission-form...', pendingAge: '150', status: 'QA', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 16:20', modified: 'sarah@mail.com' },
      { id: '1387457', fileName: 'claim-form-2024...', pendingAge: '80', status: 'QA', owner: 'name@mail.com', receivedOn: '2025-07-21, 13:15', modified: 'name@mail.com' },
      { id: '1387462', fileName: 'referral-letter-dr...', pendingAge: '20', status: 'QA', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 09:30', modified: 'lisa@mail.com' },
      { id: '1387464', fileName: 'discharge-summary...', pendingAge: '12', status: 'QA', owner: 'john@mail.com', receivedOn: '2025-07-21, 08:45', modified: 'john@mail.com' }
    ],
    'Captured': [
      { id: '1387452', fileName: 'invoice-medical-2024...', pendingAge: '200', status: 'Captured', owner: 'name@mail.com', receivedOn: '2025-07-21, 18:45', modified: 'name@mail.com' },
      { id: '1387459', fileName: 'lab-results-patient...', pendingAge: '45', status: 'Captured', owner: 'john@mail.com', receivedOn: '2025-07-21, 11:30', modified: 'john@mail.com' }
    ],
    'Approved': [
      { id: '1387456', fileName: 'medical-report-xyz...', pendingAge: '100', status: 'Approved', owner: 'lisa@mail.com', receivedOn: '2025-07-21, 14:30', modified: 'lisa@mail.com' },
      { id: '1387463', fileName: 'prescription-scan...', pendingAge: '15', status: 'Approved', owner: 'name@mail.com', receivedOn: '2025-07-21, 09:00', modified: 'name@mail.com' }
    ],
    'Rejected': [
      { id: '1387458', fileName: 'receipt-consultation...', pendingAge: '60', status: 'Rejected', owner: 'admin@mail.com', receivedOn: '2025-07-21, 12:00', modified: 'admin@mail.com' }
    ],
    'Error': [
      { id: '1387460', fileName: 'insurance-verification...', pendingAge: '30', status: 'Error', owner: 'sarah@mail.com', receivedOn: '2025-07-21, 10:45', modified: 'sarah@mail.com' }
    ]
  };
  
  const documents = allDocumentsData[activeTab] || [];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={TNB_LOGO} alt="TNB Logo" className="w-12 h-12 rounded-lg" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TNB Claims Management</h1>
              <p className="text-sm text-gray-500">Smart Claims Processing System V1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
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
              className={`py-4 px-2 font-medium text-sm transition-all relative ${
                activeTab === tab.name
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                {tab.name}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.name
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </span>
              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
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
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
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
              <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {filter.label}
                <button onClick={() => removeFilter(filter.type)} className="hover:bg-purple-200 rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
        
        {/* Search Results Count */}
        {searchQuery && (
          <div className="mb-4 text-sm text-gray-600">
            Found {getFilteredDocuments(documents).length} result{getFilteredDocuments(documents).length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}
      </div>
      
      {/* Document Table */}
      <div className="px-8 pb-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Document ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">File Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pending Age</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Owner</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Received On</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Modified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getFilteredDocuments(documents).map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onDocumentClick(doc.id)}
                      className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
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
                  <td className="px-4 py-3 text-sm text-gray-500">{doc.modified}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50">
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-gray-200 rounded transition-colors disabled:opacity-50" disabled>
                <ChevronsLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded transition-colors disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="min-w-[32px] h-8 px-2 bg-purple-600 text-white rounded font-medium text-sm">
                1
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                <ChevronsRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <select className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500">
                <option>10</option>
                <option>25</option>
                <option>50</option>
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
                  checked={filterOptions.overdue}
                  onChange={(e) => setFilterOptions({...filterOptions, overdue: e.target.checked})}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">Show overdue only</span>
              </label>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date From</label>
                <input
                  type="date"
                  value={filterOptions.dateFrom}
                  onChange={(e) => setFilterOptions({...filterOptions, dateFrom: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date To</label>
                <input
                  type="date"
                  value={filterOptions.dateTo}
                  onChange={(e) => setFilterOptions({...filterOptions, dateTo: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
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
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
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
          <Heart className="w-5 h-5 text-green-600" />
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
  
  const mainTabs = ['Invoices', 'Guarantee Letter', 'Pre-Admission Form', 'AG Top Up', 'CR', 'Others'];
  
  const [expandedAccordions, setExpandedAccordions] = useState({
    documentReview: false,
    validateMedicalNotes: false,
    medicalPolicy: false,
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
  const [newLineItem, setNewLineItem] = useState({
    category: 'medicalPolicy',
    discrepancyDetail: ''
  });
  
  const [showSummaryDialog, setShowSummaryDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showDraftToast, setShowDraftToast] = useState(false);
  
  const toggleAccordion = (section) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const handleAddLineItem = () => {
    const newField = {
      label: newLineItem.discrepancyDetail.substring(0, 50) + (newLineItem.discrepancyDetail.length > 50 ? '...' : ''),
      value: newLineItem.discrepancyDetail,
      approved: false,
      rejected: false,
      rejectionReason: '',
      rejectionSubmitted: false,
      mmuValidation: false
    };
    
    if (newLineItem.category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => [...prev, newField]);
    } else {
      setDynamicOtherPolicyFields(prev => [...prev, newField]);
    }
    
    setShowAddLineItemDialog(false);
    setNewLineItem({ category: 'medicalPolicy', discrepancyDetail: '' });
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
        window.location.reload();
      }, 3000);
    }, 3000);
  };
  
  const [fieldStates, setFieldStates] = useState({
    0: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false },
    1: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false },
    2: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false },
    3: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false },
    4: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false },
    5: { approved: false, rejected: false, rejectionReason: '', rejectionSubmitted: false, mmuValidation: false, bearer: 'hospital', bearerSelected: false }
  });
  
  const [pdfScale, setPdfScale] = useState(1.0);
  
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
      actual: '4',
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
      setDynamicMedicalPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, approved: true, rejected: false } : field
      ));
    } else {
      setDynamicOtherPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, approved: true, rejected: false } : field
      ));
    }
  };
  
  const handleDynamicFieldReject = (category, fieldIndex) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejected: true, approved: false } : field
      ));
    } else {
      setDynamicOtherPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejected: true, approved: false } : field
      ));
    }
  };
  
  const handleDynamicFieldRejectionChange = (category, fieldIndex, reason) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionReason: reason } : field
      ));
    } else {
      setDynamicOtherPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionReason: reason } : field
      ));
    }
  };
  
  const handleDynamicFieldSubmitRejection = (category, fieldIndex) => {
    if (category === 'medicalPolicy') {
      setDynamicMedicalPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionSubmitted: true } : field
      ));
    } else {
      setDynamicOtherPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, rejectionSubmitted: true } : field
      ));
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
      setDynamicMedicalPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, mmuValidation: !field.mmuValidation } : field
      ));
    } else {
      setDynamicOtherPolicyFields(prev => prev.map((field, idx) => 
        idx === fieldIndex ? { ...field, mmuValidation: !field.mmuValidation } : field
      ));
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
    { label: 'Pharmacy Items', value: 'CETAPHIL MOISTURIZING LOTION 200ML OTC', status: 'Out of policy', flagged: true, reason: 'Flagged because the total number of prescribed Panadol is exceeding the allocated limit for 1 Month' },
    { label: 'Medical Services', value: 'RECEPTIVE AND EXPRESSIVE LANGUAGE INTERVENTION', status: 'Out of policy', flagged: true, reason: 'Flagged because the total number of prescribed Panadol is exceeding the allocated limit for 1 Month' },
    { label: 'Medical Services', value: 'MOTOR SPEECH DISORDER INTERVENTION', status: 'Out of policy', flagged: true, reason: 'Flagged because the total number of prescribed Panadol is exceeding the allocated limit for 1 Month' },
    { label: 'Medical Services', value: 'SOCIO / COGNITIVE COMMUNICATION INTERVENTION', status: 'Out of policy', flagged: true, reason: 'Flagged because the total number of prescribed Panadol is exceeding the allocated limit for 1 Month' },
    { label: 'Consultation Fee', value: 'CONSULTATION CHARGE UNDER DR SARAVANAN', status: 'Exceeded coverage limit', flagged: true, reason: 'Flagged because the total number of prescribed Panadol is exceeding the allocated limit for 1 Month' }
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
          bearerSelected: true 
        }
      }));
    }
  };
  
  // Get PDF path based on active tab
  const getPdfPath = () => {
    if (activeMainTab === 'Invoices') {
      return '/invoice.pdf';
    }
    else if (activeMainTab === 'Guarantee Letter') {
      return '/gl.pdf';
    }
    else if (activeMainTab === 'Pre-Admission Form') {
      return '/paf.pdf';
    }
    else if (activeMainTab === 'AG Top Up') {
      return '/ag.pdf';
    }
    else if (activeMainTab === 'CR') {
      return '/cr.pdf';
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
    setFieldStates(prev => ({
      ...prev,
      [index]: { approved: true, rejected: false, rejectionReason: '', rejectionSubmitted: false }
    }));
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
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all font-semibold">
          <HelpCircle className="w-4 h-4" />
          Guideline
        </button>
      </div>
      
      <div className="border-b bg-white shadow-sm">
        <div className="flex px-6 overflow-x-auto">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-3 px-5 text-sm font-bold border-b-3 transition-all whitespace-nowrap ${
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
      
      <div className="flex h-[calc(100vh-180px)]">
        <div className="w-1/2 bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex flex-col">
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
        
        <div className="w-1/2 bg-gradient-to-br from-white to-blue-50 p-6 overflow-y-auto">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-5 mb-6 flex gap-3 shadow-md">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-900 font-medium leading-relaxed">
              *This invoice has been flagged due to several non-compliant services and supplements included under it. 
              Additionally, there may be overcharges in consultation fees billed by Dr. Saravanan when compared to hospital rates.
            </p>
          </div>
          
          {/* Accordion: Validate Medical Notes - MOVED TO TOP */}
          <div className="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <button
              onClick={() => toggleAccordion('validateMedicalNotes')}
              className="w-full bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 px-5 py-4 flex justify-between items-center transition-all"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Validate Medical Notes</h3>
              </div>
              {expandedAccordions.validateMedicalNotes ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedAccordions.validateMedicalNotes && (
              <div className="p-5 space-y-4 bg-white">
                {/* Diagnosis */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Diagnosis</label>
                  <input
                    type="text"
                    value={medicalNotesFields.diagnosis}
                    onChange={(e) => setMedicalNotesFields(prev => ({
                      ...prev,
                      diagnosis: e.target.value
                    }))}
                    placeholder="Enter diagnosis"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                {/* Estimated Cost (PAF) */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Cost (PAF)</label>
                  <input
                    type="text"
                    value={medicalNotesFields.estimatedCost}
                    onChange={(e) => setMedicalNotesFields(prev => ({
                      ...prev,
                      estimatedCost: e.target.value
                    }))}
                    placeholder="Enter estimated cost"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                {/* Number of Days */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Number of Days</label>
                  <input
                    type="text"
                    value={medicalNotesFields.numberOfDays}
                    onChange={(e) => setMedicalNotesFields(prev => ({
                      ...prev,
                      numberOfDays: e.target.value
                    }))}
                    placeholder="Enter number of days"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                {/* Admission Date */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Admission Date</label>
                  <input
                    type="date"
                    value={medicalNotesFields.admissionDate}
                    onChange={(e) => setMedicalNotesFields(prev => ({
                      ...prev,
                      admissionDate: e.target.value
                    }))}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                {/* Treatment Plan */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Treatment Plan</label>
                  <textarea
                    value={medicalNotesFields.treatmentPlan}
                    onChange={(e) => setMedicalNotesFields(prev => ({
                      ...prev,
                      treatmentPlan: e.target.value
                    }))}
                    placeholder="Enter treatment plan"
                    rows={3}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Accordion: Document Review */}
          <div className="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <button
              onClick={() => toggleAccordion('documentReview')}
              className="w-full bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 px-5 py-4 flex justify-between items-center transition-all"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Document Review</h3>
                {getDocumentReviewStatus() === 'approved' && (
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
              <div className="p-5 space-y-4 bg-white">
                {/* AG Top Up */}
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <label className="text-sm font-bold text-gray-700 w-24 flex-shrink-0">AG Top Up</label>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">System Collection</label>
                        <input
                          type="text"
                          value={documentReviewFields.agTopUp.systemCollection}
                          readOnly
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Agent Observed <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={documentReviewFields.agTopUp.agentObserved}
                          onChange={(e) => setDocumentReviewFields(prev => ({
                            ...prev,
                            agTopUp: { ...prev.agTopUp, agentObserved: e.target.value }
                          }))}
                          placeholder="Enter value"
                          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.agTopUp.checked}
                      onChange={() => handleDocumentReviewCheck('agTopUp')}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
                
                {/* PAF */}
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <label className="text-sm font-bold text-gray-700 w-24 flex-shrink-0">PAF</label>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">System Collection</label>
                        <input
                          type="text"
                          value={documentReviewFields.paf.systemCollection}
                          readOnly
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Agent Observed <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={documentReviewFields.paf.agentObserved}
                          onChange={(e) => setDocumentReviewFields(prev => ({
                            ...prev,
                            paf: { ...prev.paf, agentObserved: e.target.value }
                          }))}
                          placeholder="Enter value"
                          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.paf.checked}
                      onChange={() => handleDocumentReviewCheck('paf')}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
                
                {/* CR */}
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <label className="text-sm font-bold text-gray-700 w-24 flex-shrink-0">CR</label>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">System Collection</label>
                        <input
                          type="text"
                          value={documentReviewFields.cr.systemCollection}
                          readOnly
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Agent Observed <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={documentReviewFields.cr.agentObserved}
                          onChange={(e) => setDocumentReviewFields(prev => ({
                            ...prev,
                            cr: { ...prev.cr, agentObserved: e.target.value }
                          }))}
                          placeholder="Enter value"
                          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.cr.checked}
                      onChange={() => handleDocumentReviewCheck('cr')}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
                
                {/* Invoice */}
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <label className="text-sm font-bold text-gray-700 w-24 flex-shrink-0">Invoice</label>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">System Collection</label>
                        <input
                          type="text"
                          value={documentReviewFields.invoice.systemCollection}
                          readOnly
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Agent Observed <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={documentReviewFields.invoice.agentObserved}
                          onChange={(e) => setDocumentReviewFields(prev => ({
                            ...prev,
                            invoice: { ...prev.invoice, agentObserved: e.target.value }
                          }))}
                          placeholder="Enter value"
                          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={documentReviewFields.invoice.checked}
                      onChange={() => handleDocumentReviewCheck('invoice')}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Accordion: Medical Policy Guideline */}
          <div className="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <button
              onClick={() => toggleAccordion('medicalPolicy')}
              className="w-full bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 px-5 py-4 flex justify-between items-center transition-all"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Medical Policy Guideline (Anomalies)</h3>
                {getMedicalPolicyStatus() === 'approved' && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {getMedicalPolicyStatus() === 'warning' && (
                  <AlertCircle className="w-5 h-5 text-yellow-600 fill-current" />
                )}
              </div>
              {expandedAccordions.medicalPolicy ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedAccordions.medicalPolicy && (
              <div className="p-4 space-y-6 bg-white">
                {lineItems.map((item, index) => (
              <div key={index} data-field-index={index} className="transition-all">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {item.label}<span className="text-red-500">*</span>
                </label>
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.value}
                      readOnly={fieldStates[index].approved}
                      className={`w-full border rounded px-3 py-2 text-sm text-gray-700 ${
                        fieldStates[index].approved 
                          ? 'border-green-500 bg-gray-50' 
                          : 'border-gray-300'
                      }`}
                    />
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
                          <span className="text-sm text-red-600 font-medium">Out of policy</span>
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
                          className={`w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
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
                    {fieldStates[index].rejectionSubmitted && !fieldStates[index].approved && (
                      <div className="p-1.5 text-yellow-600" title="Rejected">
                        <AlertCircle className="w-5 h-5 fill-current" />
                      </div>
                    )}
                    {!fieldStates[index].approved && (
                      <button
                        onClick={() => handleReject(index)}
                        className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                        title="Reject"
                      >
                        <AlertCircle className="w-5 h-5" />
                      </button>
                    )}
                    {/* Bearer Selection Button */}
                    <button
                      onClick={() => handleBearerClick(index)}
                      disabled={fieldStates[index].rejectionSubmitted}
                      className={`p-1.5 rounded-full transition-all ${
                        fieldStates[index].rejectionSubmitted 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title="Select Bearer"
                    >
                      <Heart 
                        className="w-5 h-5" 
                        fill={fieldStates[index].bearerSelected ? 'currentColor' : 'none'}
                      />
                    </button>
                    {fieldStates[index].approved ? (
                      <div className="p-1.5 text-green-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleApprove(index)}
                        className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                        title="Approve"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Invoice Date<span className="text-red-500">*</span>
              </label>
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Placeholder"
                    readOnly={fieldStates[5].approved}
                    className={`w-full border rounded px-3 py-2 text-sm ${
                      fieldStates[5].approved 
                        ? 'border-green-500 bg-gray-50 text-gray-700' 
                        : 'border-gray-300 text-gray-400'
                    }`}
                  />
                  {fieldStates[5].rejected && !fieldStates[5].approved && (
                    <div className="mt-2">
                      <textarea
                        placeholder="Enter rejection reason..."
                        value={fieldStates[5].rejectionReason}
                        onChange={(e) => handleRejectionReasonChange(5, e.target.value)}
                        disabled={fieldStates[5].rejectionSubmitted}
                        className={`w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
                          fieldStates[5].rejectionSubmitted 
                            ? 'bg-gray-50 border-gray-300' 
                            : 'border-red-300'
                        }`}
                        rows={2}
                      />
                      {!fieldStates[5].rejectionSubmitted && (
                        <button
                          onClick={() => handleSubmitRejection(5)}
                          disabled={!fieldStates[5].rejectionReason.trim()}
                          className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 pt-2">
                  {fieldStates[5].rejectionSubmitted && !fieldStates[5].approved && (
                    <div className="p-1.5 text-yellow-600" title="Rejected">
                      <AlertCircle className="w-5 h-5 fill-current" />
                    </div>
                  )}
                  {!fieldStates[5].approved && (
                    <button
                      onClick={() => handleReject(5)}
                      className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                      title="Reject"
                    >
                      <AlertCircle className="w-5 h-5" />
                    </button>
                  )}
                  {fieldStates[5].approved ? (
                    <div className="p-1.5 text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleApprove(5)}
                      className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                      title="Approve"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Dynamic Medical Policy Fields */}
            {dynamicMedicalPolicyFields.map((item, index) => (
              <div key={`dynamic-medical-${index}`} data-dynamic-medical-index={index} className="transition-all">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {item.label}<span className="text-red-500">*</span>
                </label>
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.value}
                      readOnly={item.approved}
                      className={`w-full border rounded px-3 py-2 text-sm ${
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
                          <span className="text-sm text-red-600 font-medium">Out of policy</span>
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
                          className={`w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
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
                    {item.rejectionSubmitted && !item.approved && (
                      <div className="p-1.5 text-yellow-600" title="Rejected">
                        <AlertCircle className="w-5 h-5 fill-current" />
                      </div>
                    )}
                    {!item.approved && (
                      <button
                        onClick={() => handleDynamicFieldReject('medicalPolicy', index)}
                        className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                        title="Reject"
                      >
                        <AlertCircle className="w-5 h-5" />
                      </button>
                    )}
                    {item.approved ? (
                      <div className="p-1.5 text-green-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDynamicFieldApprove('medicalPolicy', index)}
                        className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                        title="Approve"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
              </div>
            )}
          </div>
          
          {/* Accordion: Other Policy Rules */}
          <div className="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <button
              onClick={() => toggleAccordion('otherPolicy')}
              className="w-full bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 px-5 py-4 flex justify-between items-center transition-all"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-800 text-base">Other Policy Rules</h3>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                          className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Total Invoice Cost</label>
                        <input
                          type="text"
                          value={otherPolicyFields.pafVsInvoice.totalInvoiceCost}
                          readOnly
                          className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-700"
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
                          className={`w-full border rounded px-3 py-2 text-sm text-gray-700 ${
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
                      {otherPolicyFields.pafVsInvoice.rejectionSubmitted && !otherPolicyFields.pafVsInvoice.approved && (
                        <div className="p-1.5 text-yellow-600">
                          <AlertCircle className="w-5 h-5 fill-current" />
                        </div>
                      )}
                      {!otherPolicyFields.pafVsInvoice.approved && (
                        <button
                          onClick={() => handleOtherPolicyReject('pafVsInvoice')}
                          className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                      )}
                      {otherPolicyFields.pafVsInvoice.approved ? (
                        <div className="p-1.5 text-green-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleOtherPolicyApprove('pafVsInvoice')}
                          className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Total Days of Stay */}
                <div className="transition-all">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                          className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Actual</label>
                        <input
                          type="text"
                          value={otherPolicyFields.daysOfStay.actual}
                          readOnly
                          className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-700"
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
                          className={`w-full border rounded px-3 py-2 text-sm text-gray-700 ${
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
                      {otherPolicyFields.daysOfStay.rejectionSubmitted && !otherPolicyFields.daysOfStay.approved && (
                        <div className="p-1.5 text-yellow-600">
                          <AlertCircle className="w-5 h-5 fill-current" />
                        </div>
                      )}
                      {!otherPolicyFields.daysOfStay.approved && (
                        <button
                          onClick={() => handleOtherPolicyReject('daysOfStay')}
                          className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                      )}
                      {otherPolicyFields.daysOfStay.approved ? (
                        <div className="p-1.5 text-green-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleOtherPolicyApprove('daysOfStay')}
                          className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Total Number of Visitations */}
                <div className="transition-all">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                          className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">Actual</label>
                        <input
                          type="text"
                          value={otherPolicyFields.visitations.actual}
                          readOnly
                          className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-700"
                        />
                      </div>
                    </div>
                    {otherPolicyFields.visitations.rejected && !otherPolicyFields.visitations.approved && (
                      <div className="flex-1">
                        <textarea
                          placeholder="Enter rejection reason..."
                          value={otherPolicyFields.visitations.rejectionReason}
                          onChange={(e) => handleOtherPolicyRejectionReason('visitations', e.target.value)}
                          disabled={otherPolicyFields.visitations.rejectionSubmitted}
                          className={`w-full border rounded px-3 py-2 text-sm text-gray-700 ${
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
                      {otherPolicyFields.visitations.rejectionSubmitted && !otherPolicyFields.visitations.approved && (
                        <div className="p-1.5 text-yellow-600">
                          <AlertCircle className="w-5 h-5 fill-current" />
                        </div>
                      )}
                      {!otherPolicyFields.visitations.approved && (
                        <button
                          onClick={() => handleOtherPolicyReject('visitations')}
                          className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                      )}
                      {otherPolicyFields.visitations.approved ? (
                        <div className="p-1.5 text-green-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleOtherPolicyApprove('visitations')}
                          className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Dynamic Other Policy Fields */}
                {dynamicOtherPolicyFields.length > 0 && dynamicOtherPolicyFields.map((item, index) => (
                    <div key={`dynamic-other-${index}`} data-dynamic-other-index={index} className="transition-all">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {item.label}<span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={item.value}
                            readOnly={item.approved}
                            className={`w-full border rounded px-3 py-2 text-sm ${
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
                                <span className="text-sm text-red-600 font-medium">Out of policy</span>
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
                                className={`w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-red-500 ${
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
                          {item.rejectionSubmitted && !item.approved && (
                            <div className="p-1.5 text-yellow-600" title="Rejected">
                              <AlertCircle className="w-5 h-5 fill-current" />
                            </div>
                          )}
                          {!item.approved && (
                            <button
                              onClick={() => handleDynamicFieldReject('otherPolicy', index)}
                              className="p-1.5 rounded-full hover:bg-red-50 text-red-600"
                              title="Reject"
                            >
                              <AlertCircle className="w-5 h-5" />
                            </button>
                          )}
                          {item.approved ? (
                            <div className="p-1.5 text-green-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleDynamicFieldApprove('otherPolicy', index)}
                              className="p-1.5 rounded-full hover:bg-green-50 text-green-600"
                              title="Approve"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            </button>
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
              onClick={() => setShowAddLineItemDialog(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 font-semibold"
            >
              <span className="text-xl font-bold">+</span>
              Add Line Item
            </button>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors">
                Query File
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-50 hover:border-gray-400 font-semibold transition-all shadow-sm">
                Generate
              </button>
              <button
                onClick={handleSaveDraft}
                className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-50 hover:border-blue-700 font-semibold transition-all shadow-sm"
              >
                Save as Draft
              </button>
            </div>
          </div>
          
          {/* Add Line Item Dialog */}
          {showAddLineItemDialog && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all animate-slideUp">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
                  <h2 className="text-xl font-bold">Add New Line Item</h2>
                  <button
                    onClick={() => {
                      setShowAddLineItemDialog(false);
                      setNewLineItem({ category: 'medicalPolicy', discrepancyDetail: '' });
                    }}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-1 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 space-y-5">
                  {/* Anomaly Category Dropdown */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Anomaly Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={newLineItem.category}
                      onChange={(e) => setNewLineItem({ ...newLineItem, category: e.target.value })}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
                    >
                      <option value="medicalPolicy">Medical Policy Guideline (Anomalies)</option>
                      <option value="otherPolicy">Other Policy Rules</option>
                    </select>
                  </div>
                  
                  {/* Discrepancy Detail Textarea */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Discrepancy Detail <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={newLineItem.discrepancyDetail}
                      onChange={(e) => setNewLineItem({ ...newLineItem, discrepancyDetail: e.target.value })}
                      placeholder="Enter discrepancy details..."
                      rows={4}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>
                
                <div className="px-6 pb-6 flex gap-3">
                  <button
                    onClick={() => {
                      setShowAddLineItemDialog(false);
                      setNewLineItem({ category: 'medicalPolicy', discrepancyDetail: '' });
                    }}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddLineItem}
                    disabled={!newLineItem.discrepancyDetail.trim()}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Floating Submit Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleSubmitCase}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-semibold"
        >
          Submit Case
        </button>
      </div>
      
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
                    
                    {/* Medical Policy Section */}
                    <tr className="bg-blue-50">
                      <td colSpan="4" className="px-4 py-2 font-bold text-blue-800">Medical Policy Guideline (Anomalies)</td>
                    </tr>
                    {lineItems.map((item, idx) => (
                      <tr key={`medical-${idx}`} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm"></td>
                        <td className="px-4 py-2 text-sm font-medium">
                          {item.label}
                          {fieldStates[idx]?.bearer && (
                            <span className="ml-2 text-xs text-gray-600">
                              ({fieldStates[idx].bearer === 'hospital' ? 'Hospital to bear' : 'Patient to bear'})
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2 text-sm">{item.value}</td>
                        <td className="px-4 py-2 text-sm">
                          {fieldStates[idx]?.approved ? (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span>
                          ) : fieldStates[idx]?.rejectionSubmitted ? (
                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Rejected</span>
                          ) : (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Pending</span>
                          )}
                        </td>
                      </tr>
                    ))}
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
              <div>
                {checkDocumentReviewMismatches() && (
                  <p className="text-sm text-yellow-700 font-medium">⚠️ Pending items for review</p>
                )}
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
