"use client"

import { FaPassport, FaShieldAlt, FaGlobe, FaUserShield, FaArrowLeft, FaFileAlt, FaUser, FaGraduationCap, FaUserMd, FaStethoscope, FaBrain, FaPills, FaHandHoldingMedical, FaPray, FaTools, FaChevronDown, FaChevronUp, FaHardHat, FaBolt, FaWrench, FaHammer, FaCar, FaAmbulance, FaBus, FaTruck, FaCut, FaWifi, FaBroadcastTower, FaLaptop, FaScrewdriver, FaPaintRoller, FaDesktop, FaGamepad, FaMusic, FaBroom, FaLeaf, FaFootballBall, FaVolleyballBall, FaTableTennis, FaBasketballBall, FaWalking, FaRunning } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'

export default function GIS() {
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
          style={{ backgroundImage: "url('/assets/bg/immigration.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 to-orange-500/75"></div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-3 text-white hover:text-green-200 transition-colors" aria-label="Back to home">
              <FaArrowLeft className="text-xl" />
              <span className="font-semibold">Back to Home</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 border-2 border-green-200">
              <img src="/assets/services/ghana_immigration_service_logo.png" alt="Ghana Immigration Service Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ghana Immigration Service</h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Control and monitor borders, regulate entry/exit, and manage residence permits in Ghana.
              Secure our nation's borders while facilitating legitimate travel and trade.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16" aria-labelledby="service-overview">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="service-overview" className="sr-only">Service Overview</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <article className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-green-700 text-2xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Border Security</h3>
                <p className="text-gray-600">Protect Ghana's borders and prevent illegal cross-border activities</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-green-700 text-2xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel Facilitation</h3>
                <p className="text-gray-600">Enable legitimate travel and promote tourism and trade</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserShield className="text-green-700 text-2xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Management</h3>
                <p className="text-gray-600">Issue and manage passports, visas, and residence permits</p>
              </article>
            </div>

            {/* Qualifications and Competencies */}
            <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 border border-green-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qualifications and Competencies</h2>

              {/* Category A - Graduate Entry */}
              <section className="mb-6" aria-labelledby="category-a">
                <button
                  onClick={() => toggleCategory('graduate')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'graduate'}
                  aria-controls="graduate-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaGraduationCap className="text-green-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-a" className="text-xl font-semibold text-gray-900">Category A: General Duties (Graduate Entry) </h3>
                        <p className="text-sm text-gray-600">First Degree Holders</p>
                      </div>
                    </div>
                    {expandedCategory === 'graduate' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'graduate' && (
                  <div id="graduate-content" className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-4 text-green-900">Eligible applicant must:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be a Ghanaian citizen by birth with no criminal record</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Possess a first degree from an accredited university not below second class lower (division)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have completed National Service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of a minimum age of 18 years and not more than 35 years by 1st November, 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of good character</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Not be bonded by any organisation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Should not have been dismissed by any public service institution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have a minimum height of 1.68m (5ft 6inch) for males and 1.57m (5ft 2inch) for females</span>
                      </li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Category B - Non-Graduate Entry */}
              <section className="mb-6" aria-labelledby="category-b">
                <button
                  onClick={() => toggleCategory('non-graduate')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'non-graduate'}
                  aria-controls="non-graduate-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaUser className="text-green-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-b" className="text-xl font-semibold text-gray-900">Category B:General Duties (Non-Graduate Entry - Recruits)</h3>
                        <p className="text-sm text-gray-600">HND/Diploma/WASSCE</p>
                      </div>
                    </div>
                    {expandedCategory === 'non-graduate' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'non-graduate' && (
                  <div id="non-graduate-content" className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-4 text-blue-900">Eligible applicant must:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be a Ghanaian citizen by birth with no criminal record</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Hold SSCE/WASSCE Certificate with at least five (5) credits including English and Mathematics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of a minimum age of 18 and not more than 32 years by 1st November, 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be physically and medically fit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of good character</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Not be bonded by any organisation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Must not have been dismissed by any public service institution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have a minimum height of 1.68m (5ft 6inch) for males and 1.57m (5ft 2inch) for females</span>
                      </li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Category C - Medical */}
              <section className="mb-6" aria-labelledby="category-c">
                <button
                  onClick={() => toggleCategory('medical')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'medical'}
                  aria-controls="medical-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaUserMd className="text-green-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-c" className="text-xl font-semibold text-gray-900">Category C: Medical</h3>
                        <p className="text-sm text-gray-600">Healthcare Professionals</p>
                      </div>
                    </div>
                    {expandedCategory === 'medical' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'medical' && (
                  <div id="medical-content" className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 mb-4 font-medium">In addition to general eligibility, applicants:</p>

                    <div className="space-y-4">
                      <article className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaUserMd className="text-green-700" aria-hidden="true" /> Doctors
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must possess MD CHB from a recognized university</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must be registered with the Ghana Medical & Dental Council</span>
                          </li>
                        </ul>
                      </article>

                      <article className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaStethoscope className="text-green-700" aria-hidden="true" /> Nurses
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must possess Nursing Certificate from a recognized institution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must be registered with the Nursing and Midwifery Council of Ghana</span>
                          </li>
                        </ul>
                      </article>

                      <article className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaBrain className="text-green-700" aria-hidden="true" /> Psychologist
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must possess relevant professional qualification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Be registered and licensed by the Ghana Psychology Council</span>
                          </li>
                        </ul>
                      </article>

                      <article className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaPills className="text-green-700" aria-hidden="true" /> Pharmacist
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must possess a minimum of first degree from an accredited university and the relevant professional qualification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must be registered and licensed with the Pharmacy Council of Ghana</span>
                          </li>
                        </ul>
                      </article>

                      <article className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaHandHoldingMedical className="text-green-700" aria-hidden="true" /> Physician Assistant
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must possess a bachelor's degree in physician assistantship (medical/clinical) from an accredited institution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must be registered and licensed with the Medical and Dental Council of Ghana</span>
                          </li>
                        </ul>
                      </article>
                    </div>
                  </div>
                )}
              </section>

              {/* Category D - Religious Affairs */}
              <section className="mb-6" aria-labelledby="category-d">
                <button
                  onClick={() => toggleCategory('religious')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'religious'}
                  aria-controls="religious-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPray className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-d" className="text-xl font-semibold text-gray-900">Category D: Religious Affairs</h3>
                        <p className="text-sm text-gray-600">Chaplains and Religious Leaders</p>
                      </div>
                    </div>
                    {expandedCategory === 'religious' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'religious' && (
                  <div id="religious-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-4 font-medium">In addition to the general eligibility, applicants must be:</p>

                    <div className="space-y-4">
                      <article className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 text-purple-900">Ordained Minister or Chaplain</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Have at least a first degree in Theology</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Be of good standing in a Christian denomination approved by: Ghana Catholic Secretariat, Christian Council of Ghana, Pentecostal Council of Ghana or other recognized Christian Bodies</span>
                          </li>
                        </ul>
                      </article>

                      <article className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 text-purple-900">Imam</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Have at least a first degree in Islamic Studies with an excellent knowledge in Arabic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Be of good standing in a Muslim denomination approved by: office of the National/Regional Chief Imam, office of the Ameer of the Ahmadiyya Muslim Mission or other similar nationally recognized Muslim bodies</span>
                          </li>
                        </ul>
                      </article>
                    </div>
                  </div>
                )}
              </section>

              {/* Category E - Technical & Vocational Staff */}
              <section className="mb-6" aria-labelledby="category-e">
                <button
                  onClick={() => toggleCategory('technical')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'technical'}
                  aria-controls="technical-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaTools className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-e" className="text-xl font-semibold text-gray-900">Category E: Technical & Vocational Staff</h3>
                        <p className="text-sm text-gray-600">Estates & Projects Division</p>
                      </div>
                    </div>
                    {expandedCategory === 'technical' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'technical' && (
                  <div id="technical-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-4 text-orange-900">Eligible applicant must:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be a Ghanaian citizen by birth with no criminal record</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have a BECE certificate or WASSCE/SSSCE or NVTI, COVTVET, City & Guilds, or Technical Certificate in the relevant field from an accredited institution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of a minimum age of 18 years and not more than 35 years by 1st November, 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be physically and medically fit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of good character</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Not be bonded by any organisation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have a minimum height of 1.68m (5ft 6inch) for males and 1.57m (5ft 2inch) for females</span>
                      </li>
                    </ul>

                    <div className="space-y-4">
                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaHardHat className="text-blue-700" aria-hidden="true" /> Masons
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>A minimum of two (2) years practical experience in building or construction work</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Practical knowledge in building, repairing, and maintaining concrete and block structures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Ability to lay blocks and bricks, mix mortar accurately, and perform plastering and tiling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Understanding of building measurements, levelling, and basic site preparation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Familiarity with construction safety procedures and reading simple building plans</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaBolt className="text-blue-700" aria-hidden="true" /> Electricians
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Practical knowledge and experience in installation, maintenance, and repair of electrical systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Install and maintain wiring, lighting, sockets, and power systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Troubleshoot and repair electrical faults in buildings and equipment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Understand electrical safety codes, wiring diagrams, and load distribution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Knowledge of solar power systems and backup power units is an added advantage</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaWrench className="text-blue-700" aria-hidden="true" /> Plumbers
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Install and repair pipes, valves, fixtures, and fittings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Identify and fix leakages, blockages, and faulty plumbing components</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Install and maintain water heaters, pumps, tanks, and sanitary systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Read and interpret plumbing blueprints and technical diagrams</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaHammer className="text-blue-700" aria-hidden="true" /> Carpenters
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Construct, install, and repair wooden structures, roofs, doors, windows, and furniture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Read and interpret technical drawings, sketches, and blueprints</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Measure, cut, and assemble materials accurately with attention to safety and detail</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Maintain and use carpentry tools, machines, and materials safely and efficiently</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Category F - Transport & Logistics Staff */}
              <section className="mb-6" aria-labelledby="category-f">
                <button
                  onClick={() => toggleCategory('transport')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'transport'}
                  aria-controls="transport-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaTruck className="text-green-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-f" className="text-xl font-semibold text-gray-900">Category F: Transport & Logistics Staff</h3>
                        <p className="text-sm text-gray-600">Transport Division</p>
                      </div>
                    </div>
                    {expandedCategory === 'transport' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'transport' && (
                  <div id="transport-content" className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-4 text-blue-900">In addition to general eligibility, applicants must:</h4>

                    <div className="space-y-4">
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaCar className="text-green-700" aria-hidden="true" /> Drivers
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Possess a valid driver's license issued by DVLA (Class A, B, C, D, or F)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Minimum of three (3) years practical driving experience</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Class A: Motorbike riders, Class B: Small cars and light-duty vehicles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Class C/D: Vans, buses, and medium-duty vehicles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Class F: Heavy-duty trucks and water tankers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Ability to inspect, service, and maintain vehicles in good running condition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Knowledge of traffic regulations and road safety laws</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaAmbulance className="text-green-700" aria-hidden="true" /> Emergency/Ambulance Drivers
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Must be certified emergency medical technicians (EMT)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Additional requirements include valid driver's license with emergency vehicle experience</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaWrench className="text-green-700" aria-hidden="true" /> Mechanics
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Practical knowledge and experience in maintenance, repair, and servicing of vehicles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Cars and vans (Light Duty), Buses and trucks (Heavy Duty)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Motorcycles and generators maintenance experience</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Ability to diagnose mechanical and electrical faults, replace damaged parts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Knowledge of engine systems, braking, suspension, and transmission systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Experience using modern diagnostic tools is an added advantage</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaScrewdriver className="text-green-700" aria-hidden="true" /> Technical Staff
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span><strong>Welders, Fabricators:</strong> Minimum of two (2) years experience in the relevant field</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span><strong>Auto Electricians:</strong> Electrical systems diagnostics and repair expertise</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span><strong>Auto AC Repairers:</strong> Air conditioning system maintenance and repair</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span><strong>Sprayers:</strong> Vehicle painting and finishing expertise</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Category G - Uniform & Support Services */}
              <section className="mb-6" aria-labelledby="category-g">
                <button
                  onClick={() => toggleCategory('support')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'support'}
                  aria-controls="support-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaLaptop className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-g" className="text-xl font-semibold text-gray-900">Category G: Uniform & Support Services</h3>
                        <p className="text-sm text-gray-600">Specialized Support Staff</p>
                      </div>
                    </div>
                    {expandedCategory === 'support' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'support' && (
                  <div id="support-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-4 text-purple-900">In addition to general eligibility, applicants:</h4>

                    <div className="space-y-4">
                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaCut className="text-blue-700" aria-hidden="true" /> Tailors
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Demonstrate proficiency in garment construction, uniform production, and alteration of official clothing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Ability to operate industrial sewing machines and handle various fabric types</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Take accurate body measurements, cut patterns, and finish garments neatly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Experience in designing uniforms for public institutions or disciplined services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Additional training or certification from recognized vocational institution in Tailoring, Dressmaking, or Fashion Design is an added advantage</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FaBroadcastTower className="text-blue-700" aria-hidden="true" /> Communication Technicians
                        </h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Operate, maintain, and repair communication equipment, including radios, intercom systems, and network devices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Knowledge of signal transmission systems, radio frequencies, and data communication protocols</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Set up, troubleshoot, and maintain ICT or radio networks used in command operations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Familiar with basic computer systems, satellite communication, or HF/VHF radio systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Understanding of communication security procedures and radio discipline</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                            <span>Experience in radio operations, ICT support, or technical maintenance in a security or communications environment is an added advantage</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Category H - Computer Hardware & IT Support */}
              <section className="mb-6" aria-labelledby="category-h">
                <button
                  onClick={() => toggleCategory('computer')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'computer'}
                  aria-controls="computer-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaDesktop className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-h" className="text-xl font-semibold text-gray-900">Category H: Computer Hardware & IT Support</h3>
                        <p className="text-sm text-gray-600">IT Technical Staff</p>
                      </div>
                    </div>
                    {expandedCategory === 'computer' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'computer' && (
                  <div id="computer-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-4 text-cyan-900">In addition to general eligibility, applicants must:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have at least a Technical or Vocational Certificate in Computer hardware, Electronics or IT support from a recognized Institution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be skilled in computer assembly, printers, repairs, and troubleshooting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Knowledge of network setup and diagnostics is an added advantage</span>
                      </li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Category I - Sports Personnel */}
              <section className="mb-6" aria-labelledby="category-i">
                <button
                  onClick={() => toggleCategory('sports')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'sports'}
                  aria-controls="sports-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaFootballBall className="text-green-600 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-i" className="text-xl font-semibold text-gray-900">Category I: Sports Personnel</h3>
                        <p className="text-sm text-gray-600">Athletes & Sports Instructors</p>
                      </div>
                    </div>
                    {expandedCategory === 'sports' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'sports' && (
                  <div id="sports-content" className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-4 text-green-900">In addition to general eligibility, applicants must:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be proficient in any of the following fields:</span>
                      </li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                          <FaFootballBall className="text-green-600" aria-hidden="true" /> Football
                        </h5>
                      </div>
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                          <FaVolleyballBall className="text-green-600" aria-hidden="true" /> Volleyball
                        </h5>
                      </div>
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                          <FaTableTennis className="text-green-600" aria-hidden="true" /> Table Tennis
                        </h5>
                      </div>
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                          <FaBasketballBall className="text-green-600" aria-hidden="true" /> Basketball
                        </h5>
                      </div>
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                          <FaWalking className="text-green-600" aria-hidden="true" /> Arm Wrestling
                        </h5>
                      </div>
                      <div className="border border-green-200 rounded-lg p-4 bg-white">
                        <h5 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                          <FaRunning className="text-green-600" aria-hidden="true" /> Athletics
                        </h5>
                      </div>
                    </div>

                    <div className="bg-green-100 rounded-lg p-4">
                      <h5 className="font-semibold mb-2 text-green-900">Important Requirements:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                          <span>Must pass sports-specific trials during recruitment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                          <span>Applicants affiliated with clubs and actively participating in recognized sports associations/leagues shall have an added advantage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </section>

              {/* Category J - Band & Music Staff */}
              <section className="mb-6" aria-labelledby="category-j">
                <button
                  onClick={() => toggleCategory('band')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'band'}
                  aria-controls="band-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaMusic className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-j" className="text-xl font-semibold text-gray-900">Category J: Band & Music Staff</h3>
                        <p className="text-sm text-gray-600">Musicians & Band Members</p>
                      </div>
                    </div>
                    {expandedCategory === 'band' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'band' && (
                  <div id="band-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-4 text-purple-900">In addition to general eligibility, applicants must:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have proficiency in music</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be able to read musical notation and play at least one instrument</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Experience in performing with a recognized band, orchestra or church group is an added advantage</span>
                      </li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Category K - Auxiliary Staff */}
              <section className="mb-6" aria-labelledby="category-k">
                <button
                  onClick={() => toggleCategory('auxiliary')}
                  className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors text-left"
                  aria-expanded={expandedCategory === 'auxiliary'}
                  aria-controls="auxiliary-content"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaBroom className="text-blue-700 text-xl" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 id="category-k" className="text-xl font-semibold text-gray-900">Category K: Auxiliary Staff</h3>
                        <p className="text-sm text-gray-600">Janitorial Workers & Gardeners</p>
                      </div>
                    </div>
                    {expandedCategory === 'auxiliary' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedCategory === 'auxiliary' && (
                  <div id="auxiliary-content" className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-4 text-yellow-900">Eligible applicant must:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be a Ghanaian citizen by birth with no criminal record</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of a minimum age of 18 years and not more than 35 years by 31st December, 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be physically and medically fit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be of good character</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Have a minimum height of 1.68m (5ft 6inch) for males and 1.57m (5ft 2inch) for females</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span>Be able to read and write</span>
                      </li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Required Documents */}
              <section className="mt-8 p-6 bg-green-100 rounded-xl border border-green-200" aria-labelledby="required-documents">
                <h3 id="required-documents" className="text-lg font-semibold mb-3 text-green-900 flex items-center gap-2">
                  <FaFileAlt className="text-green-600" aria-hidden="true" />
                  Required Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" aria-hidden="true"></div>
                      <span>Birth Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" aria-hidden="true"></div>
                      <span>Ghana Card/National ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" aria-hidden="true"></div>
                      <span>WASSCE/SSSCE Certificate</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" aria-hidden="true"></div>
                      <span>Passport Photographs (4 copies)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" aria-hidden="true"></div>
                      <span>Medical Fitness Report (if available)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" aria-hidden="true"></div>
                      <span>Character Reference Certificate</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500 text-white" aria-labelledby="apply-section">
        <div className="container mx-auto px-4 text-center">
          <h2 id="apply-section" className="text-3xl font-bold mb-4">Ready to Secure Our Borders?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the Ghana Immigration Service and protect our nation's gateway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="http://uerp.test/register"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              aria-label="Start your application for Ghana Immigration Service"
            >
              <span>Start Application</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              aria-label="View other security services"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}