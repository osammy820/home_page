"use client"

import React, { useState } from 'react'
import { FaFire, FaShieldAlt, FaHeartbeat, FaArrowLeft, FaFileAlt, FaUser, FaGraduationCap, FaChevronDown, FaChevronUp, FaMusic, FaUtensils, FaFutbol, FaBolt, FaWrench, FaTools, FaDraftingCompass, FaPray, FaMosque, FaCross } from 'react-icons/fa'
import Link from 'next/link'

export default function GNFS() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/assets/bg/fire.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/85 to-orange-500/75"></div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="flex items-center justify-between mb-8">
            <Link href="/#services" className="flex items-center gap-3 text-white hover:text-yellow-200 transition-colors" aria-label="Back to services">
              <FaArrowLeft className="text-xl" />
              <span className="font-semibold">Back to Services</span>
            </Link>

          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 border-2 border-blue-200">
              <img src="/assets/services/ghana_national_fire_service_logo.png" alt="Ghana National Fire Service Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ghana National Fire Service</h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect lives and property through fire prevention, rescue operations, and emergency response.
              Join a team of dedicated professionals committed to serving Ghana with courage and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16" aria-labelledby="service-overview">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">


            {/* General Eligibility */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-blue-200 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">General Eligibility Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <FaUser className="text-orange-700" aria-hidden="true" />
                    Personal Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Must be a Ghanaian citizen by birth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>No criminal record and of good character</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Not dismissed from any public service or employment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Height: Minimum 1.73m (5'8") for males, 1.63m (5'4") for females</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Physically and medically fit by Fire Service standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Not bonded by any organization</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <FaGraduationCap className="text-orange-700" aria-hidden="true" />
                    Educational Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>5 credits (not less than Grade 6) at BECE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>5 passes (up to Grade C6 including English and Mathematics) at WASSCE/SSSCE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Age: 18-35 years for Officer Corps (by 1st November 2025)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Age: 18-32 years for non-Tradesmen (by 1st November 2025)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Age: 18-35 years for Tradesmen/Artisans (by 1st November 2025)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Officer Corps */}
            <section className="mb-6" aria-labelledby="officer-corps">
              <button
                onClick={() => toggleCategory('officer')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'officer'}
                aria-controls="officer-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaGraduationCap className="text-orange-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="officer-corps" className="text-xl font-semibold text-gray-900">Officer Corps Recruitment</h3>
                      <p className="text-sm text-gray-600">First Degree Holders (27 Fields)</p>
                    </div>
                  </div>
                  {expandedCategory === 'officer' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'officer' && (
                <div id="officer-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-4 text-orange-900">In addition to general eligibility, applicants must have a minimum of first degree (Second-Class Lower Division) in:</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      'Civil Engineering', 'Mechanical Engineering', 'Chemical Engineering',
                      'Electrical Engineering', 'Architectural Engineering', 'Building Technology',
                      'Forensic Science', 'Physics', 'Chemistry', 'Bio-Chemistry',
                      'Computer Science / ICT', 'Transport and Logistics', 'Estate Management',
                      'Marketing', 'Accounting', 'Finance', 'Human Resource Management',
                      'Catering / Hospitality', 'Public Relations', 'Public Administration',
                      'Disaster Management', 'LLB/BL', 'Medical and Allied Sciences',
                      'French', 'English', 'Fire Engineering', 'Mathematics / Statistics'
                    ].map((field, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 border border-orange-200">
                        <span className="text-gray-800 font-medium">{field}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Religious Affairs */}
            <section className="mb-6" aria-labelledby="religious-affairs">
              <button
                onClick={() => toggleCategory('religious')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'religious'}
                aria-controls="religious-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaPray className="text-blue-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="religious-affairs" className="text-xl font-semibold text-gray-900">Religious Affairs</h3>
                      <p className="text-sm text-gray-600">Ordained Ministers & Imams</p>
                    </div>
                  </div>
                  {expandedCategory === 'religious' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'religious' && (
                <div id="religious-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <FaCross className="text-blue-700" /> Ordained Minister/Chaplain
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• First degree in Theology</li>
                        <li>• Good standing in Christian denomination approved by:</li>
                        <li className="ml-4">- Ghana Catholic Secretariat</li>
                        <li className="ml-4">- Christian Council of Ghana</li>
                        <li className="ml-4">- Pentecostal Council of Ghana</li>
                        <li className="ml-4">- Other recognized Christian bodies</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <FaMosque className="text-blue-700" /> Imam
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• First degree in Islamic Studies</li>
                        <li>• Excellent knowledge in Arabic</li>
                        <li>• Good standing in Muslim denomination approved by:</li>
                        <li className="ml-4">- Office of National/Regional Chief Imam</li>
                        <li className="ml-4">- Office of Ameer of Ahmadiyya Muslim Mission</li>
                        <li className="ml-4">- Other recognized Muslim bodies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* General Duties Firefighters */}
            <section className="mb-6" aria-labelledby="general-duties">
              <button
                onClick={() => toggleCategory('general-duties')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'general-duties'}
                aria-controls="general-duties-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaFire className="text-orange-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="general-duties" className="text-xl font-semibold text-gray-900">General Duties Firefighters & Rescue Crew</h3>
                      <p className="text-sm text-gray-600">Non-Trade Recruitment</p>
                    </div>
                  </div>
                  {expandedCategory === 'general-duties' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'general-duties' && (
                <div id="general-duties-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-4 text-orange-900">In addition to general eligibility, applicants must have:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 5 passes SSCE/WASSCE including English language and Mathematics</li>
                    <li>• 4 credits in GES Intermediate Level Certificate with pass in English and Mathematics</li>
                    <li>• 'A' Level or 'O' Level with credit in English</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Accounting Officers */}
            <section className="mb-6" aria-labelledby="accounting-officers">
              <button
                onClick={() => toggleCategory('accounting')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'accounting'}
                aria-controls="accounting-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FaFileAlt className="text-amber-600 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="accounting-officers" className="text-xl font-semibold text-gray-900">Accounting Officers</h3>
                      <p className="text-sm text-gray-600">Financial Management Roles</p>
                    </div>
                  </div>
                  {expandedCategory === 'accounting' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'accounting' && (
                <div id="accounting-content" className="mt-4 p-6 bg-amber-50 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-4 text-amber-900">In addition to general eligibility, applicants must have:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 6 passes including English and Mathematics at WASSCE with Accounting/Business options</li>
                    <li>• RSA Stage III in Accounting</li>
                    <li>• Diploma in Business Studies (Accounting Option)</li>
                    <li>• HND Accounting</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Medical and Allied Sciences */}
            <section className="mb-6" aria-labelledby="medical-allied">
              <button
                onClick={() => toggleCategory('medical')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'medical'}
                aria-controls="medical-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaHeartbeat className="text-orange-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="medical-allied" className="text-xl font-semibold text-gray-900">Medical and Allied Sciences</h3>
                      <p className="text-sm text-gray-600">Healthcare Professionals (18+ Roles)</p>
                    </div>
                  </div>
                  {expandedCategory === 'medical' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'medical' && (
                <div id="medical-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-4 text-orange-900">In addition to general eligibility, must have 1 year working experience in recognized health facility:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'General Nurses', desc: '3-year Diploma in Nursing + NMC registration', icon: 'FaStethoscope' },
                      { title: 'Midwives', desc: 'Diploma in Midwifery + completed rotation', icon: 'FaHeartbeat' },
                      { title: 'Pharmacy Technicians', desc: 'HND/3-year Diploma in Dispensing Technology', icon: 'FaPills' },
                      { title: 'Dental Surgery Assistant', desc: '3-year Diploma + completed service', icon: 'FaStethoscope' },
                      { title: 'Dental Technology', desc: '3-year Diploma + completed service', icon: 'FaTools' },
                      { title: 'Radiology', desc: '3-year Diploma in Radiology Technology', icon: 'FaBolt' },
                      { title: 'Nutrition', desc: '3-year Diploma in Public Health (Nutrition)', icon: 'FaUtensils' },
                      { title: 'Health Promotion', desc: '3-year Diploma in Public Health (Health Promotion)', icon: 'FaUsers' },
                      { title: 'Disease Control & Surveillance', desc: '3-year Diploma in Public Health + 1 year service', icon: 'FaClipboardCheck' },
                      { title: 'Medical Laboratory', desc: '3-year Diploma in Medical Laboratory Technology + 1 year service', icon: 'FaStethoscope' },
                      { title: 'Physiotherapy', desc: '3-year Diploma in Physiotherapy + 1 year service', icon: 'FaDumbbell' },
                      { title: 'Health Information Systems', desc: '3-year Diploma in Public Health (Informatics)', icon: 'FaDatabase' },
                      { title: 'Bio-statistics', desc: '3-year Diploma in Health Statistics + 1 year service', icon: 'FaClipboardCheck' },
                      { title: 'Psychiatry/Mental Nurses', desc: '3-year Diploma in Mental Nursing + NMC registration', icon: 'FaBrain' },
                      { title: 'Optical Technology', desc: '3-year Diploma in Optical Technology', icon: 'FaStethoscope' },
                      { title: 'Nurse Assistants Clinical', desc: 'Certificate in Nursing + NMC registration', icon: 'FaHandHoldingMedical' },
                      { title: 'Medical Laboratory Assistants', desc: 'Certificate in Medical Laboratory Technology + 1 year service', icon: 'FaStethoscope' },
                      { title: 'Biomedical Technician', desc: 'CTVET/GES Diploma in Biomedical and Electro Medical Engineering', icon: 'FaBolt' }
                    ].map((role, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                        <h5 className="font-semibold text-red-800 mb-1">{role.title}</h5>
                        <p className="text-sm text-gray-600">{role.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Catering/Hospitality */}
            <section className="mb-6" aria-labelledby="catering">
              <button
                onClick={() => toggleCategory('catering')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'catering'}
                aria-controls="catering-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaUtensils className="text-orange-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="catering" className="text-xl font-semibold text-gray-900">Catering / Hospitality</h3>
                      <p className="text-sm text-gray-600">Food Service Management</p>
                    </div>
                  </div>
                  {expandedCategory === 'catering' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'catering' && (
                <div id="catering-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-4 text-orange-900">In addition to general eligibility, applicants must have:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• HND/3-Year Diploma in Hotel Tourism and Hospitality Management + 1 year service</li>
                    <li>• GES (COTVET) Certificate II in Hospitality and Catering Management</li>
                    <li>• GES Intermediate Certificate in Food and Beverage Service</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Records and Archives */}
            <section className="mb-6" aria-labelledby="records-archives">
              <button
                onClick={() => toggleCategory('records')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'records'}
                aria-controls="records-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FaFileAlt className="text-gray-600 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="records-archives" className="text-xl font-semibold text-gray-900">Records and Archives</h3>
                      <p className="text-sm text-gray-600">Document Management</p>
                    </div>
                  </div>
                  {expandedCategory === 'records' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'records' && (
                <div id="records-content" className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-4 text-gray-900">In addition to general eligibility, applicants must have:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Diploma in Archival Studies</li>
                    <li>• Diploma in Records Management from accredited Institution</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Surveyors */}
            <section className="mb-6" aria-labelledby="surveyors">
              <button
                onClick={() => toggleCategory('surveyors')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'surveyors'}
                aria-controls="surveyors-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaDraftingCompass className="text-blue-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="surveyors" className="text-xl font-semibold text-gray-900">Surveyors</h3>
                      <p className="text-sm text-gray-600">Land Mapping & Surveying</p>
                    </div>
                  </div>
                  {expandedCategory === 'surveyors' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'surveyors' && (
                <div id="surveyors-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-4 text-blue-900">In addition to general eligibility, applicants must have:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• GSSM Certificate in Surveying</li>
                    <li>• GSSM Certificate in Mapping</li>
                    <li>• GES Intermediate Certificate in Surveying</li>
                    <li>• COTVET Certificate II in Surveying</li>
                    <li>• Certificate in Surveying (GSSM)</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Sports */}
            <section className="mb-6" aria-labelledby="sports">
              <button
                onClick={() => toggleCategory('sports')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'sports'}
                aria-controls="sports-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaFutbol className="text-orange-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="sports" className="text-xl font-semibold text-gray-900">Sports Personnel</h3>
                      <p className="text-sm text-gray-600">Athletes & Sports Instructors</p>
                    </div>
                  </div>
                  {expandedCategory === 'sports' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'sports' && (
                <div id="sports-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-4 text-orange-900">In addition to general eligibility, applicants must:</h4>
                  <ul className="space-y-3 mb-6">
                    <li>• Proven track record in recognized sports discipline</li>
                    <li>• Be proficient in any of the following sports:</li>
                  </ul>

                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      'Boxing', 'Football', 'Handball', 'Basketball',
                      'Hockey', 'Table Tennis', 'Tennis', 'Volleyball',
                      'Athletics (Track & Field)', 'Badminton', 'Wrestling', 'Martial Arts', 'Bowling'
                    ].map((sport, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 border border-orange-200 text-center">
                        <span className="text-gray-800 font-medium">{sport}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-orange-100 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-orange-900">Additional Requirements:</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Meet GNFS physical standards</li>
                      <li>• Pass full medical examination</li>
                      <li>• Exhibit discipline, good character and team spirit</li>
                      <li>• Pass sports-specific trials during recruitment</li>
                      <li>• Club affiliation and active participation in recognized Sports Association Leagues is an advantage</li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* Bandsmen */}
            <section className="mb-6" aria-labelledby="bandsmen">
              <button
                onClick={() => toggleCategory('bandsmen')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'bandsmen'}
                aria-controls="bandsmen-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaMusic className="text-blue-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="bandsmen" className="text-xl font-semibold text-gray-900">Bandsmen</h3>
                      <p className="text-sm text-gray-600">Musicians & Performers</p>
                    </div>
                  </div>
                  {expandedCategory === 'bandsmen' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'bandsmen' && (
                <div id="bandsmen-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-4 text-blue-900">Diploma/Certificate in Music plus:</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800">Regimental Band</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Play more than one instrument: Clarinets, Bassoons, Flutes, Alto and Tenor Sax</li>
                        <li>• Read staff notations</li>
                        <li>• Good at percussion</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800">Dance Band</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Conversant with all types of songs as Keyboardist</li>
                        <li>• Sing all types of songs as Vocalist</li>
                        <li>• Conversant with all types as Bass and Lead Guitarist</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Tradesmen Section */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tradesmen & Artisans Recruitment</h2>

              {/* Electricians */}
              <section className="mb-6" aria-labelledby="electricians">
                <button
                  onClick={() => toggleCategory('electricians')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'electricians'}
                  aria-controls="electricians-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaBolt className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="electricians" className="text-xl font-semibold text-gray-900">Electricians</h3>
                        <p className="text-sm text-gray-600">Electrical Installation & Maintenance</p>
                      </div>
                    </div>
                    {expandedCategory === 'electricians' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'electricians' && (
                  <div id="electricians-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <ul className="space-y-2 text-gray-700">
                      <li>• GES Intermediate Certificate in Electrical Installation</li>
                      <li>• COTVET Certificate II in Electrical Works</li>
                      <li>• City and Guilds Certificate in Electrical Engineering</li>
                      <li>• Electrical Engineering Technology Part I (GES)</li>
                      <li>• NVTI Candidates must have 6 passes in BECE and Proficiency II/Certificate I/Certificate II</li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Plant Mechanics/Fitters */}
              <section className="mb-6" aria-labelledby="plant-mechanics">
                <button
                  onClick={() => toggleCategory('plant-mechanics')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'plant-mechanics'}
                  aria-controls="plant-mechanics-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FaWrench className="text-orange-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="plant-mechanics" className="text-xl font-semibold text-gray-900">Plant Mechanics / Fitters</h3>
                        <p className="text-sm text-gray-600">Heavy Equipment Maintenance</p>
                      </div>
                    </div>
                    {expandedCategory === 'plant-mechanics' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'plant-mechanics' && (
                  <div id="plant-mechanics-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <ul className="space-y-2 text-gray-700">
                      <li>• GES Intermediate Certificate in Plant Mechanic/Fitting</li>
                      <li>• GES Certificate in Plant Mechanic Fitting</li>
                      <li>• COTVET Certificate II in Plant Mechanic Fitting</li>
                      <li>• City and Guilds Certificate in Electrical/Mechanical Engineering</li>
                      <li>• NVTI Candidates must have 6 passes in BECE and Proficiency II/Certificate I/Certificate II</li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Additional Trade Categories (simplified for space) */}
              <section className="mb-6" aria-labelledby="other-trades">
                <button
                  onClick={() => toggleCategory('other-trades')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'other-trades'}
                  aria-controls="other-trades-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaTools className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="other-trades" className="text-xl font-semibold text-gray-900">Additional Trade Categories</h3>
                        <p className="text-sm text-gray-600">20+ Technical & Vocational Roles</p>
                      </div>
                    </div>
                    {expandedCategory === 'other-trades' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'other-trades' && (
                  <div id="other-trades-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Painting/Sign Writing */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Painting/Sign Writing</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• GES Intermediate Certificate</li>
                          <li>• COTVET Certificate II</li>
                          <li>• City and Guilds Certificate</li>
                          <li>• NVTI: 6 BECE passes + Proficiency II/I/II</li>
                        </ul>
                      </div>

                      {/* Plumbers */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Plumbers</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• GES Intermediate Certificate</li>
                          <li>• COTVET Certificate II</li>
                          <li>• City and Guilds Certificate</li>
                          <li>• NVTI: 6 BECE passes + Proficiency II/I/II</li>
                        </ul>
                      </div>

                      {/* Masons */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Masons</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• GES Intermediate Certificate</li>
                          <li>• COTVET Certificate II</li>
                          <li>• City and Guilds Certificate</li>
                          <li>• NVTI: 6 BECE passes + Proficiency II/I/II</li>
                        </ul>
                      </div>

                      {/* Wood Construction/Carpentry */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Wood Construction/Carpentry</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• GES Intermediate Certificate</li>
                          <li>• GES/COTVET Certificate II</li>
                          <li>• City and Guilds Certificate</li>
                          <li>• NVTI: 6 BECE passes + Proficiency II/I/II</li>
                        </ul>
                      </div>

                      {/* Architectural Draughtsman */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Architectural Draughtsman</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• GES Intermediate Certificate</li>
                          <li>• COTVET Certificate II</li>
                        </ul>
                      </div>

                      {/* Automotive Technicians */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Automotive Technicians</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• CTVET/GES Diploma</li>
                          <li>• City and Guilds Certificate/Diploma</li>
                          <li>• Motor Vehicle Tech (Parts I-III)</li>
                          <li>• NABTEX Certificate II</li>
                        </ul>
                      </div>

                      {/* Drivers */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Drivers</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• License Class C, D, E, F</li>
                          <li>• Minimum 5 years experience</li>
                        </ul>
                      </div>

                      {/* Welding, Steel Bender and Fabrication */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Welding & Fabrication</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• CTVET/GES Diploma</li>
                          <li>• Advance Craft (Advanced Welding)</li>
                          <li>• NABTEX Certificate II</li>
                        </ul>
                      </div>

                      {/* Office Machine Technician */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Office Machine Technician</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• CTVET/GES Diploma</li>
                          <li>• NABTEX Certificate II (Computer System)</li>
                        </ul>
                      </div>

                      {/* Automobile Electricals/Electronics */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Automobile Electricals</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• CTVET/GES Diploma</li>
                          <li>• City and Guilds Certificate</li>
                          <li>• Motor Vehicle Tech (Parts I-III)</li>
                          <li>• NABTEX Certificate II</li>
                        </ul>
                      </div>

                      {/* Upholstery Technician */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Upholstery Technician</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Advance Craft (General Tailoring)</li>
                          <li>• NABTEX Certificate II</li>
                        </ul>
                      </div>

                      {/* Refrigeration & Air Conditioning */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Refrigeration & AC</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• CTVET/GES Diploma</li>
                          <li>• City & Guilds HVAC Diploma</li>
                          <li>• Refrigeration Mechanic Part II</li>
                          <li>• NABTEX Certificate II</li>
                        </ul>
                      </div>

                      {/* Network Technicians */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Network Technicians</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Network Technician Diploma</li>
                          <li>• CCNA/CCNP Certification</li>
                          <li>• MCSE/MCSA Certification</li>
                          <li>• Software/Network/Telecom Engineering</li>
                          <li>• Ethical Hacking, Cyber Security</li>
                        </ul>
                      </div>

                      {/* Hardware Technicians */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Hardware Technicians</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• COMPTIA A+ Certification</li>
                          <li>• COMPTIA Network+ Certification</li>
                          <li>• Networking/Telecom Engineering</li>
                        </ul>
                      </div>

                      {/* Radio Technician */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Radio Technician</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Telecom Technician (Parts II/III)</li>
                          <li>• Electronic Technicians (Parts II/III)</li>
                          <li>• Radio Servicing Technician</li>
                          <li>• RF/Microwave/Power Technician</li>
                        </ul>
                      </div>

                      {/* Telephone Technician */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Telephone Technician</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Telecom Technician (Parts II/III)</li>
                          <li>• Equipment Repair/Maintenance</li>
                          <li>• Electronic Engineering</li>
                          <li>• Fibre Optic Technician</li>
                          <li>• Cisco CCNA (VOIP)</li>
                        </ul>
                      </div>

                      {/* IT/Network Administration */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">IT/Network Administration</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Certificate with LINUX/Windows Server knowledge</li>
                          <li>• Server 2003, 2008 and above</li>
                        </ul>
                      </div>

                      {/* Database Administration */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Database Administration</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• MySQL, SQL, Oracle Certification</li>
                        </ul>
                      </div>

                      {/* Computer System Development */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Computer System Development</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• VB, C++, Java Certification</li>
                          <li>• HTML, PHP, CSS, CMS Certification</li>
                          <li>• Adobe, Photoshop Certification</li>
                        </ul>
                      </div>

                      {/* Tailors/Textiles */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Tailors/Textiles</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 6 BECE passes + NVTI proficiency I/II</li>
                          <li>• GES Intermediate Certificate</li>
                          <li>• COTVET Certificate II</li>
                          <li>• NVTI Grade I & II proficiency</li>
                        </ul>
                      </div>

                      {/* Education Corps */}
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Education Corps</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Diploma in Education (French)</li>
                          <li>• Diploma in Education (English)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Sports */}
            <section className="mb-6" aria-labelledby="sports">
              <button
                onClick={() => toggleCategory('sports')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'sports'}
                aria-controls="sports-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaFutbol className="text-orange-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="sports" className="text-xl font-semibold text-gray-900">Sports Personnel</h3>
                      <p className="text-sm text-gray-600">Athletes & Sports Instructors</p>
                    </div>
                  </div>
                  {expandedCategory === 'sports' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'sports' && (
                <div id="sports-content" className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-4 text-orange-900">In addition to general eligibility, applicants must:</h4>
                  <ul className="space-y-3 mb-6">
                    <li>• Proven track record in recognized sports discipline</li>
                    <li>• Be proficient in any of the following sports:</li>
                  </ul>

                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      'Boxing', 'Football', 'Handball', 'Basketball',
                      'Hockey', 'Table Tennis', 'Tennis', 'Volleyball',
                      'Athletics (Track & Field)', 'Badminton', 'Wrestling', 'Martial Arts', 'Bowling'
                    ].map((sport, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 border border-orange-200 text-center">
                        <span className="text-gray-800 font-medium">{sport}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-orange-100 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-orange-900">Additional Requirements:</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Meet GNFS physical standards</li>
                      <li>• Pass full medical examination</li>
                      <li>• Exhibit discipline, good character and team spirit</li>
                      <li>• Pass sports-specific trials during recruitment</li>
                      <li>• Club affiliation and active participation in recognized Sports Association Leagues is an advantage</li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* Bandsmen */}
            <section className="mb-6" aria-labelledby="bandsmen">
              <button
                onClick={() => toggleCategory('bandsmen')}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors text-left"
                aria-expanded={expandedCategory === 'bandsmen'}
                aria-controls="bandsmen-content"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaMusic className="text-blue-700 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 id="bandsmen" className="text-xl font-semibold text-gray-900">Bandsmen</h3>
                      <p className="text-sm text-gray-600">Musicians & Performers</p>
                    </div>
                  </div>
                  {expandedCategory === 'bandsmen' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {expandedCategory === 'bandsmen' && (
                <div id="bandsmen-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-4 text-blue-900">Diploma/Certificate in Music plus:</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800">Regimental Band</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Play more than one instrument: Clarinets, Bassoons, Flutes, Alto and Tenor Sax</li>
                        <li>• Read staff notations</li>
                        <li>• Good at percussion</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800">Dance Band</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Conversant with all types of songs as Keyboardist</li>
                        <li>• Sing all types of songs as Vocalist</li>
                        <li>• Conversant with all types as Bass and Lead Guitarist</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Required Documents */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Required Documents</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Birth Certificate',
                  'Ghana Card/National ID',
                  'WASSCE/SSSCE Certificate',
                  'Passport Photographs (4 copies)',
                  'Medical Fitness Report (if available)',
                  'Swimming Certificate (if available)',
                  'Professional Certificates (if applicable)',
                  'Character Reference Letters',
                  'Proof of Residency'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" aria-hidden="true"></div>
                    <span className="text-gray-800">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Serve Your Country?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join the Ghana National Fire Service and become a hero in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="javascript:void(0)" className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              <span>Apply Now </span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-700 transition-colors inline-flex items-center justify-center">
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-scale-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Need Support?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our dedicated support team is ready to assist you throughout your application journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Head Office</h3>
              <p className="text-gray-600 mb-4">Ministries, Accra<br />Greater Accra Region</p><div className="text-sm text-blue-600 font-medium">
                24/7 Emergency Line Available
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-100" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <div className="text-gray-600 mb-2">
                <div className="font-medium">+233 30 222 2222</div>
                <div className="font-medium">+233 50 111 1111</div>
              </div>
              <div className="text-sm text-blue-600 font-medium">
                24/7 Emergency Line Available
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-100" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <div className="text-gray-600 mb-4">
                <div className="font-medium">support@c-serp.gov.gh</div>
                <div className="font-medium">info@c-serp.gov.gh</div>
              </div>
              <div className="text-sm text-blue-600 font-medium">
                24/7 Emergency Line Available
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-100" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Available on our website<br />
                Mobile App Support
              </p>
              <div className="text-sm text-blue-600 font-medium">
                24/7 Emergency Line Available
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}