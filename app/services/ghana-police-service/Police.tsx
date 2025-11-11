"use client"
import React, { useState } from 'react'
import { FaShieldAlt, FaUsers, FaClipboardList, FaClock, FaArrowLeft, FaFileAlt, FaUser, FaGraduationCap, FaRulerVertical, FaWeight, FaCalendarAlt, FaMapMarkerAlt, FaCar, FaWrench, FaPlug, FaTools, FaPaintBrush, FaTshirt, FaHammer, FaFire, FaSnowflake, FaBasketballBall, FaMusic, FaStethoscope, FaMosque, FaChurch, FaChevronDown, FaChevronUp, FaUserMd, FaHeartbeat, FaPills, FaSyringe, FaMicroscope, FaNotesMedical, FaHospital, FaBrain, FaBone, FaEye, FaUserNurse, FaDna, FaRunning, FaWheelchair, FaHandHoldingMedical, FaAmbulance } from 'react-icons/fa'
import Link from 'next/link'

function Police() {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({})

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-slate-800 text-white" style={{ backgroundImage: 'url(/assets/bg/police.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-slate-900/80"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
              <FaArrowLeft className="text-xl" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <FaShieldAlt className="text-yellow-400 text-xl" />
              <span className="font-semibold">Ghana Police Service</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 border-2 border-blue-200">
              <img src="/assets/services/ghana_police_service_logo.png" alt="Ghana Police Service" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ghana Police Service</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maintain law and order, protect citizens, and prevent crime in communities across Ghana.
              Join the proud tradition of service to our nation through community policing and crime prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
                <p className="text-gray-600">Build trust and partnership with communities to create safer neighborhoods</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Crime Prevention</h3>
                <p className="text-gray-600">Proactive measures to prevent and reduce criminal activities nationwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClipboardList className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Law Enforcement</h3>
                <p className="text-gray-600">Uphold the rule of law and ensure justice for all citizens</p>
              </div>
            </div>

  

            {/* General Requirements */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">General Requirements</h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                All applicants must satisfy these requirements in addition to specific requirements for each category.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Be a Ghanaian by birth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Be of good character</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Be without criminal records</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Not have been dismissed from any public service or any other employment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Not be more than the age stated for a specific category by 1/11/2025</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Be at least 5 feet 8 inches (173cm) tall for males and 5 feet 4 inches (163cm) for females</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Be physically and medically fit by Ghana Police Service standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Have 5 passes in BECE including English and Mathematics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Be ready to undergo basic Police training and other forms of training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Have completed National Service for graduate applicants</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recruitment Categories */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recruitment Categories</h2>

              {/* General Duty Recruits */}
              <div className="mb-6">
                <button
                  onClick={() => toggleCategory('general-duty')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-left flex items-center justify-between hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <FaShieldAlt className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">General Duty Recruits</h3>
                      <p className="text-blue-100">Frontline policing and law enforcement duties</p>
                    </div>
                  </div>
                  {expandedCategories['general-duty'] ? <FaChevronUp className="text-2xl" /> : <FaChevronDown className="text-2xl" />}
                </button>

                {expandedCategories['general-duty'] && (
                  <div className="mt-4 p-6 bg-white rounded-xl border border-blue-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <FaCalendarAlt />
                          Age Requirement
                        </h4>
                        <p className="text-gray-700">Not less than 18 years and not more than 30 years by 1/11/2025</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <FaGraduationCap />
                          Educational Requirement
                        </h4>
                        <p className="text-gray-700">Minimum of five passes in SSSCE/WASSCE including Mathematics and English</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tradesmen Recruits */}
              <div className="mb-6">
                <button
                  onClick={() => toggleCategory('tradesmen')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-left flex items-center justify-between hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <FaTools className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">Tradesmen Recruits</h3>
                      <p className="text-blue-100">Technical and vocational specialists supporting police operations</p>
                    </div>
                  </div>
                  {expandedCategories['tradesmen'] ? <FaChevronUp className="text-2xl" /> : <FaChevronDown className="text-2xl" />}
                </button>

                {expandedCategories['tradesmen'] && (
                  <div className="mt-4 p-6 bg-white rounded-xl border border-blue-200">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Motor Vehicle Mechanics */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaWrench />
                          Motor Vehicle Mechanics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II</li>
                          <li>• National Proficiency I/II Certificates</li>
                          <li>• City & Guilds Certificate</li>
                          <li>• NVTI Proficiency Certificate I/II</li>
                        </ul>
                      </div>

                      {/* Drivers/Riders */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaCar />
                          Drivers/Riders
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Educational Requirements:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• 5 passes in SSSCE/WASSCE OR</li>
                          <li>• Technical/Vocational Certificates</li>
                        </ul>
                        <p className="text-sm text-gray-700 font-medium mt-2">Licenses Required:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• Valid Driver's License 'B' or above (≥3 years)</li>
                          <li>• Valid Rider's License 'A' (≥3 years)</li>
                        </ul>
                      </div>

                      {/* Electricians */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaPlug />
                          Electricians
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Electrical</li>
                          <li>• City & Guilds Certificate in Electrical Engineering</li>
                          <li>• NVTI Proficiency Certificate in Electrical</li>
                        </ul>
                      </div>

                      {/* Plumbers & Masons */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaTools />
                          Plumbers & Masons
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Plumbing/Masonry</li>
                          <li>• City & Guilds Certificate in Plumbing/Masonry</li>
                          <li>• NVTI Proficiency Certificate in Plumbing/Masonry</li>
                        </ul>
                      </div>

                      {/* Painting/Sign Writing */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaPaintBrush />
                          Painting/Sign Writing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Painting</li>
                          <li>• City & Guilds Certificate in Painting</li>
                          <li>• NVTI Proficiency Certificate in Painting</li>
                        </ul>
                      </div>

                      {/* Tailors/Seamstress */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaTshirt />
                          Tailors/Seamstress
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Tailoring</li>
                          <li>• Diploma/HND in Fashion Design</li>
                          <li>• NVTI Proficiency Certificate in Tailoring</li>
                        </ul>
                      </div>

                      {/* Wood Construction Technology */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaHammer />
                          Wood Construction Technology
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Carpentry</li>
                          <li>• City & Guilds Certificate in Carpentry</li>
                          <li>• NVTI Proficiency Certificate in Carpentry</li>
                        </ul>
                      </div>

                      {/* Welder & Steel Bender */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaFire />
                          Welder & Steel Bender
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Welding</li>
                          <li>• NVTI Proficiency Certificate in Welding</li>
                        </ul>
                      </div>

                      {/* Refrigeration */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaSnowflake />
                          Refrigeration
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Required Certifications:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• GES (COTVET) Certificate I/II in Refrigeration</li>
                          <li>• NVTI Proficiency Certificate in Refrigeration</li>
                        </ul>
                      </div>
                    </div>

                    {/* Sportsmen and Band */}
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Sportsmen */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaBasketballBall />
                          Sportsmen
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: 18-30 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Sports Disciplines:</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {['Boxing', 'Football', 'Handball', 'Basketball', 'Hockey', 'Tennis', 'Table Tennis', 'Volleyball', 'Athletics', 'Badminton', 'Arm Wrestling', 'Martial Arts'].map((sport) => (
                            <span key={sport} className="text-sm text-gray-600">• {sport}</span>
                          ))}
                        </div>
                      </div>

                      {/* Band */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaMusic />
                          Band
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700 font-medium">Requirements:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• 5 passes in SSSCE/WASSCE</li>
                          <li>• Ability to sight-read musical notes</li>
                          <li>• Ability to play woodwind or brass instruments</li>
                          <li>• ABRSM Theory Grade 4 (advantage)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Graduates */}
              <div className="mb-6">
                <button
                  onClick={() => toggleCategory('graduates')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-left flex items-center justify-between hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <FaGraduationCap className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">Graduates (General Duty)</h3>
                      <p className="text-blue-100">Professional officers with tertiary education qualifications</p>
                    </div>
                  </div>
                  {expandedCategories['graduates'] ? <FaChevronUp className="text-2xl" /> : <FaChevronDown className="text-2xl" />}
                </button>

                {expandedCategories['graduates'] && (
                  <div className="mt-4 p-6 bg-white rounded-xl border border-blue-200">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Degree Holders */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Degree Holders</h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">Minimum of Bachelor's Degree (Second Class Lower Division) from recognized university</p>
                      </div>

                      {/* HND Holders */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">HND Holders</h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 32 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">HND from Technical University or GTEC-accredited tertiary institution</p>
                      </div>

                      {/* Diploma Holders */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Diploma Holders</h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 32 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">Diploma from Technical University or GTEC-accredited tertiary institution</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Medical Professionals */}
              <div className="mb-6">
                <button
                  onClick={() => toggleCategory('medical')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-left flex items-center justify-between hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <FaStethoscope className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">Medical Professionals</h3>
                      <p className="text-blue-100">Healthcare specialists supporting police medical services</p>
                    </div>
                  </div>
                  {expandedCategories['medical'] ? <FaChevronUp className="text-2xl" /> : <FaChevronDown className="text-2xl" />}
                </button>

                {expandedCategories['medical'] && (
                  <div className="mt-4 p-6 bg-white rounded-xl border border-blue-200">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Medical Doctors */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaUserMd />
                          Medical Doctors
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">MB ChB/BDS with Ghana Medical & Dental Council registration</p>
                        <p className="text-sm text-gray-700 mt-1">1 year post-qualification experience required</p>
                      </div>

                      {/* Medical Specialists */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaBrain />
                          Medical Specialists
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 40 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">GCPS/WACS/WACP Membership/Fellowship</p>
                        <p className="text-sm text-gray-700 mt-1">2+ years post-qualification experience</p>
                      </div>

                      {/* Pharmacists */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaPills />
                          Pharmacists
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">BPharm/PharmD/MPharm (Second Class Lower)</p>
                        <p className="text-sm text-gray-700 mt-1">Pharmacy Council & PSG registration required</p>
                      </div>

                      {/* Nursing Services */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaUserNurse />
                          Nursing Services
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: 32-35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">NMC registration required</p>
                        <p className="text-sm text-gray-700 mt-1">Degree/Diploma/Certificate in Nursing specialties</p>
                      </div>

                      {/* Specialized Nursing */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaHeartbeat />
                          Specialized Nursing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">Bachelor's Degree in Nursing + 2 years experience</p>
                        <p className="text-sm text-gray-700 mt-1">Critical Care, ENT, Emergency, Pediatrics, etc.</p>
                      </div>

                      {/* Medical Laboratory Scientists */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaMicroscope />
                          Medical Laboratory Scientists
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">BSc/HND/Diploma in Medical Laboratory Science</p>
                      </div>

                      {/* Physician Assistant */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaNotesMedical />
                          Physician Assistant
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">BSc Physician Assistantship (Second Class Lower)</p>
                        <p className="text-sm text-gray-700 mt-1">GMD registration + 2 years experience</p>
                      </div>

                      {/* Certified Registered Anaesthetists */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <FaSyringe />
                          Certified Registered Anaesthetists
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 35 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">BSc or Advanced Diploma in Anesthesia</p>
                      </div>

                      {/* Additional Medical Roles */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Other Medical Roles</h4>
                        <p className="text-sm text-gray-600">Health Informatics, Clinical Nutritionist, Physiotherapist, Public Health Officers, BMS/Histo Technologist, Pharmacy Technologists, Sonographers</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Religious Affairs */}
              <div className="mb-6">
                <button
                  onClick={() => toggleCategory('religious')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-left flex items-center justify-between hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <FaChurch className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">Religious Affairs</h3>
                      <p className="text-blue-100">Chaplains and religious counselors supporting police welfare</p>
                    </div>
                  </div>
                  {expandedCategories['religious'] ? <FaChevronUp className="text-2xl" /> : <FaChevronDown className="text-2xl" />}
                </button>

                {expandedCategories['religious'] && (
                  <div className="mt-4 p-6 bg-white rounded-xl border border-blue-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Ordained Minister or Chaplain */}
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-2 flex items-center gap-2">
                          <FaChurch />
                          Ordained Minister or Chaplain
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 40 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">At least a first degree in Theology</p>
                        <p className="text-sm text-gray-700 mt-2">Good standing in approved Christian denominations:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• Ghana Catholic Secretariat</li>
                          <li>• Christian Council of Ghana</li>
                          <li>• Pentecostal Council of Ghana</li>
                          <li>• Other recognized Christian bodies</li>
                        </ul>
                      </div>

                      {/* Imam */}
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-2 flex items-center gap-2">
                          <FaMosque />
                          Imam
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Age: Not more than 40 years by 1/11/2025</p>
                        <p className="text-sm text-gray-700">At least a first degree in Islamic Studies</p>
                        <p className="text-sm text-gray-700 mt-2">Excellent knowledge in Arabic</p>
                        <p className="text-sm text-gray-700 mt-2">Good standing in approved Muslim denominations:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• Office of the National/Regional Chief Imam</li>
                          <li>• Office of the Ameer of Ahmadiyya Muslim Mission</li>
                          <li>• Other nationally recognized Muslim bodies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Required Documents */}
              <div className="mt-8 p-6 bg-blue-100 rounded-xl border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 flex items-center gap-2">
                  <FaFileAlt className="text-blue-600" />
                  Required Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Birth Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Ghana Card/National ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>WASSCE/SSSCE Certificate</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Passport Photographs (4 copies)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Medical Fitness Report (if available)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Character Reference Letter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Serve Your Country?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the Ghana Police Service and make a difference in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="http://uerp.test/register" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center gap-2">
              <span>Start Application</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Police