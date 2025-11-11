
import { FaLeaf, FaShieldAlt, FaUsers, FaEye, FaArrowLeft, FaFileAlt, FaUser, FaGraduationCap, FaRulerVertical, FaWeight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function NarcoticsControlCommission() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link href="/#services" className="flex items-center gap-3 text-white hover:text-green-200 transition-colors">
              <FaArrowLeft className="text-xl" />
              <span className="font-semibold">Back to Services</span>
            </Link>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <FaLeaf className="text-white text-xl" />
              <span className="font-semibold">Narcotics Control Commission</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 border-2 border-green-200">
              <img src="/assets/services/ghana_nacortics_control_commission_logo.png" alt="Narcotics Control Commission" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Narcotics Control Commission</h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Control narcotic drugs, prevent substance abuse, and enforce drug laws in Ghana.
              Protect communities from the dangers of drug abuse and illicit trafficking.
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Drug Control</h3>
                <p className="text-gray-600">Regulate and control narcotic drugs and psychotropic substances</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEye className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prevention</h3>
                <p className="text-gray-600">Prevent substance abuse through education and awareness programs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rehabilitation</h3>
                <p className="text-gray-600">Support treatment and rehabilitation of drug dependents</p>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 border border-green-100 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Narcotics Officer</h3>
                  <p className="text-gray-600 mb-4">Enforce drug laws and conduct investigations into narcotics offenses</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <FaShieldAlt />
                    <span>Investigative skills essential</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Prevention Officer</h3>
                  <p className="text-gray-600 mb-4">Develop and implement drug prevention and education programs</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <FaUsers />
                    <span>Community outreach experience</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Intelligence Analyst</h3>
                  <p className="text-gray-600 mb-4">Analyze drug trafficking patterns and gather intelligence</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <FaEye />
                    <span>Analytical skills required</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Treatment Coordinator</h3>
                  <p className="text-gray-600 mb-4">Coordinate rehabilitation services for drug dependents</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <FaLeaf />
                    <span>Social work background helpful</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 border border-green-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <FaUser className="text-green-600" />
                    Personal Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Must be a Ghanaian citizen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Age: 18-24 years (as of August 30, 2025)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Height: Minimum 5'8" (173cm) for males, 5'4" (163cm) for females</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High level of integrity and discipline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No history of drug use or substance abuse</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <FaGraduationCap className="text-green-600" />
                    Educational Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>WASSCE/SSSCE with at least 5 passes (A1-C6)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Credit passes in English Language and Mathematics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No failing grades in any subject</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Degree in Criminal Justice/Psychology preferred</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Background in social sciences advantageous</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-100 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-900 flex items-center gap-2">
                  <FaFileAlt className="text-green-600" />
                  Required Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Birth Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Ghana Card/National ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>WASSCE/SSSCE Certificate</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Passport Photographs (4 copies)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Medical Fitness Report (if available)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Police Clearance Certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Our Communities?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the Narcotics Control Commission and fight drug abuse in Ghana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="javascript:void(0)" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              <span>Apply Now </span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}