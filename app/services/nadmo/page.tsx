import { FaExclamationTriangle, FaShieldAlt, FaUsers, FaHandshake, FaArrowLeft, FaFileAlt, FaUser, FaGraduationCap, FaRulerVertical, FaWeight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function NADMO() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link href="/#services" className="flex items-center gap-3 text-white hover:text-emerald-200 transition-colors">
              <FaArrowLeft className="text-xl" />
              <span className="font-semibold">Back to Services</span>
            </Link>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <FaExclamationTriangle className="text-white text-xl" />
              <span className="font-semibold">NADMO</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 border-2 border-emerald-200">
              <img src="/assets/services/nadmo_logo.png" alt="NADMO" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">National Disaster Management Organization</h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Manage disasters and emergencies, coordinate response, and build community resilience.
              Be at the forefront of saving lives and protecting communities during emergencies.
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
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaExclamationTriangle className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Disaster Response</h3>
                <p className="text-gray-600">Rapid response to natural and man-made disasters</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Coordination</h3>
                <p className="text-gray-600">Coordinate multi-agency emergency response efforts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Resilience</h3>
                <p className="text-gray-600">Build community capacity to prevent and respond to disasters</p>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-r from-emerald-50 to-orange-50 rounded-2xl p-8 border border-emerald-100 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-800">Disaster Management Officer</h3>
                  <p className="text-gray-600 mb-4">Plan and coordinate disaster response operations across regions</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <FaShieldAlt />
                    <span>Crisis management skills essential</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-800">Search and Rescue Officer</h3>
                  <p className="text-gray-600 mb-4">Conduct search and rescue operations during emergencies</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <FaUsers />
                    <span>Physical fitness required</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-800">Emergency Medical Technician</h3>
                  <p className="text-gray-600 mb-4">Provide emergency medical care during disaster response</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <FaGraduationCap />
                    <span>Medical certification required</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-800">Community Education Officer</h3>
                  <p className="text-gray-600 mb-4">Educate communities on disaster preparedness and prevention</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <FaHandshake />
                    <span>Communication skills vital</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-r from-emerald-50 to-orange-50 rounded-2xl p-8 border border-emerald-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <FaUser className="text-emerald-600" />
                    Personal Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Must be a Ghanaian citizen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Age: 18-24 years (as of August 30, 2025)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Height: Minimum 5'8" (173cm) for males, 5'4" (163cm) for females</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ability to work under pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strong problem-solving abilities</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <FaGraduationCap className="text-emerald-600" />
                    Educational Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>WASSCE/SSSCE with at least 5 passes (A1-C6)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Credit passes in English Language and Mathematics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No failing grades in any subject</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Science background advantageous</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>First aid certification preferred</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-emerald-100 rounded-xl border border-emerald-200">
                <h3 className="text-lg font-semibold mb-3 text-emerald-900 flex items-center gap-2">
                  <FaFileAlt className="text-emerald-600" />
                  Required Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>Birth Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>Ghana Card/National ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>WASSCE/SSSCE Certificate</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>Passport Photographs (4 copies)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>Medical Fitness Report (if available)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>First Aid Certificate (if available)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join NADMO and be a hero when your community needs you most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="http://uerp.test/register" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              <span>Start Application</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}