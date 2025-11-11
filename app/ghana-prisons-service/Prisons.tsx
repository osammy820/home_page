"use client"
import React, { useState } from 'react'
import {
    FaBuilding, FaShieldAlt, FaUsers, FaHeart, FaArrowLeft, FaFileAlt, FaUser, FaGraduationCap,
    FaRulerVertical, FaWeight, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp,
    FaStethoscope, FaGavel, FaLeaf, FaChalkboardTeacher, FaTruck, FaTools, FaMusic, FaUtensils,
    FaLaptopCode, FaCamera, FaFootballBall, FaHospital, FaPills, FaTooth, FaEye, FaFlask,
    FaUserMd, FaMicroscope, FaHandHoldingMedical, FaChartBar, FaWarehouse, FaBroadcastTower,
    FaCalculator, FaHammer, FaCross, FaMosque, FaPalette, FaBus, FaDraftingCompass, FaBolt,
    FaWrench, FaPaintBrush, FaGamepad, FaPray, FaBook, FaSeedling, FaDog, FaTractor,
    FaTree, FaWifi, FaDatabase, FaGlobe, FaPrint, FaVideo, FaVolumeUp, FaEdit
} from 'react-icons/fa'
import Link from 'next/link'

function Prisons() {
    const [expandedSenior, setExpandedSenior] = useState<string | null>(null)
    const [expandedJunior, setExpandedJunior] = useState<string | null>(null)

    const toggleSenior = (category: string) => {
        setExpandedSenior(expandedSenior === category ? null : category)
    }

    const toggleJunior = (category: string) => {
        setExpandedJunior(expandedJunior === category ? null : category)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 text-white">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/bg/prisons.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-700/70 via-stone-800/75 to-amber-900/70"></div>
                </div>

                <div className="relative container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center gap-3 text-white hover:text-amber-200 transition-colors">
                            <FaArrowLeft className="text-xl" />
                            <span className="font-semibold">Back to Home</span>
                        </Link>

                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 border-2 border-amber-200 shadow-xl">
                            <img src="/assets/services/ghana_prisons_service_logo.png" alt="Ghana Prisons Service" className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ghana Prisons Service</h1>
                        <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Ensure safe custody of prisoners and promote their rehabilitation and reformation.
                            Transform lives through correctional services and contribute to national security.
                        </p>
                    </div>
                </div>
            </section>

            {/* Senior Officer Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Senior Officer Recruitment</h2>
                            <p className="text-xl text-gray-600">Join the Ghana Prisons Service as a Senior Officer</p>
                        </div>

                        {/* General Eligibility - Senior Officer */}
                        <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-200 mb-12">
                            <h3 className="text-2xl font-bold mb-6 text-amber-900 flex items-center gap-3">
                                <FaUser className="text-amber-700" />
                                General Eligibility Requirements
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Must be a Ghanaian citizen by birth with no criminal record</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Must have completed National Service</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Must be computer literate</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Age: 18-35 years (as of November 1, 2025)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Must be physically and medically fit by Prisons Service standards</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Not bonded by any organization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Not dismissed from any public service or employment</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Height: Minimum 1.68m (5'6") for males, 1.57m (5'2") for females</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Must have active email and mobile phone number</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Ready to undergo paramilitary and physical training</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Senior Officer Categories */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Senior Officer Categories</h3>

                            {/* General Duties */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleSenior('general-duties')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <FaShieldAlt className="text-amber-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">General Duties</h4>
                                            <p className="text-gray-600">Humanities and Social Sciences</p>
                                        </div>
                                    </div>
                                    {expandedSenior === 'general-duties' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedSenior === 'general-duties' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                In addition to general eligibility, applicants must have a minimum of first degree from an accredited university not below second class (lower division) in any of the following areas with at least one (1) year post qualification work experience.
                                            </p>
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2">Field of Study:</h5>
                                                <p className="text-amber-800">Humanities and Social Sciences</p>
                                                <p className="text-amber-700 text-sm mt-1">Additional qualifications will be an added advantage</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Agriculture */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleSenior('agriculture')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <FaLeaf className="text-amber-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Agriculture</h4>
                                            <p className="text-gray-600">Agricultural Sciences and Farming</p>
                                        </div>
                                    </div>
                                    {expandedSenior === 'agriculture' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedSenior === 'agriculture' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                In addition to general eligibility, applicants must have at least a first degree from an accredited university not below second class (lower division) in the following areas with at least one (1) year post qualification work experience.
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-3">
                                                {['Animal Science', 'Crop Science', 'Soil Science', 'General Agric', 'Agric Mechanic', 'Agribusiness', 'Agriculture Biotechnology', 'Agriculture Engineering', 'Agriculture Economist'].map((field) => (
                                                    <div key={field} className="bg-amber-50 rounded-lg p-3">
                                                        <p className="text-amber-800 text-sm font-medium">{field}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Education */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleSenior('education')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <FaChalkboardTeacher className="text-amber-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Education</h4>
                                            <p className="text-gray-600">Educational Services</p>
                                        </div>
                                    </div>
                                    {expandedSenior === 'education' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedSenior === 'education' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                In addition to general eligibility, applicants must have at least first degree from an accredited university not below second class (lower division) in any of the following areas with at least one (1) year post qualification work experience.
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-3">
                                                {['Basic Education', 'Early Childhood Education', 'Guidance and Counselling'].map((field) => (
                                                    <div key={field} className="bg-amber-50 rounded-lg p-3">
                                                        <p className="text-amber-800 text-sm font-medium">{field}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Legal Officers */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleSenior('legal')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <FaGavel className="text-amber-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Legal Officers</h4>
                                            <p className="text-gray-600">Legal Services</p>
                                        </div>
                                    </div>
                                    {expandedSenior === 'legal' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedSenior === 'legal' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2">Requirements:</h5>
                                                <ul className="space-y-2 text-amber-800">
                                                    <li>• Minimum LLB/BL degree</li>
                                                    <li>• Must have been called to the Bar</li>
                                                    <li>• At least one (1) year post qualification work experience</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Medical Category */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleSenior('medical')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <FaStethoscope className="text-amber-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Medical Category</h4>
                                            <p className="text-gray-600">Healthcare Professionals</p>
                                        </div>
                                    </div>
                                    {expandedSenior === 'medical' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedSenior === 'medical' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4 space-y-4">
                                            {/* Medical Doctors */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaUserMd /> Medical Doctors
                                                </h5>
                                                <ul className="space-y-1 text-amber-800 text-sm">
                                                    <li>• MBChB or MD from accredited university</li>
                                                    <li>• Must be registered with Medical and Dental Council</li>
                                                </ul>
                                            </div>

                                            {/* Dental Surgeons */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaTooth /> Dental Surgeons
                                                </h5>
                                                <ul className="space-y-1 text-amber-800 text-sm">
                                                    <li>• Bachelor of Dental Surgery (BDS) from accredited university</li>
                                                    <li>• Must be registered with Medical and Dental Council</li>
                                                </ul>
                                            </div>

                                            {/* Ophthalmologist */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaEye /> Ophthalmologist
                                                </h5>
                                                <ul className="space-y-1 text-amber-800 text-sm">
                                                    <li>• MBBS/MD in Ophthalmology from accredited university</li>
                                                    <li>• Must be registered with relevant professional regulatory body</li>
                                                </ul>
                                            </div>

                                            {/* Pharmacists */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaPills /> Pharmacists
                                                </h5>
                                                <ul className="space-y-1 text-amber-800 text-sm">
                                                    <li>• B.Sc. Pharmacy (B. Pharm/Pharm D.) from accredited university</li>
                                                    <li>• Must be registered with Ghana Pharmacy Council</li>
                                                </ul>
                                            </div>

                                            {/* Physician Assistants */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaHandHoldingMedical /> Physician Assistants
                                                </h5>
                                                <ul className="space-y-1 text-amber-800 text-sm">
                                                    <li>• B.Sc. Physician Assistant or B.Sc. Medical Assistant from accredited university</li>
                                                    <li>• Must be registered with Medical and Dental Council</li>
                                                    <li>• One (1) year post qualification experience</li>
                                                </ul>
                                            </div>

                                            {/* Medical Laboratory Technologist */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaMicroscope /> Medical Laboratory Technologist
                                                </h5>
                                                <ul className="space-y-1 text-amber-800 text-sm">
                                                    <li>• B.Sc. Medical Laboratory Technology from accredited university</li>
                                                    <li>• Must be registered with Allied Health Professions Council</li>
                                                    <li>• One (1) year post qualification experience</li>
                                                </ul>
                                            </div>

                                            {/* Nursing Officers */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                                                    <FaHospital /> Nursing Officers
                                                </h5>
                                                <div className="grid md:grid-cols-3 gap-2 mt-2">
                                                    {[
                                                        'General Nurses', 'Midwives', 'Public Health Nurses', 'Community Mental Health Nurses',
                                                        'Ear, Nose and Throat Nurses', 'Ophthalmic Nurses'
                                                    ].map((nurse) => (
                                                        <div key={nurse} className="bg-white rounded p-2">
                                                            <p className="text-amber-800 text-xs">{nurse}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <ul className="space-y-1 text-amber-800 text-sm mt-2">
                                                    <li>• First degree in relevant field from accredited university</li>
                                                    <li>• One (1) year post qualification experience</li>
                                                    <li>• Must be registered with Nursing and Midwifery Council or Allied Health Professions Council</li>
                                                </ul>
                                            </div>

                                            {/* Other Health Professionals */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-amber-900 mb-2">Other Health Professionals</h5>
                                                <div className="grid md:grid-cols-4 gap-2 mt-2">
                                                    {[
                                                        'Dental Therapist', 'Clinical Psychologist', 'Radiography/Sonography', 'Public Health',
                                                        'Health Information Officer', 'Health Promotion Officer', 'Optometrist', 'Nutritionist'
                                                    ].map((prof) => (
                                                        <div key={prof} className="bg-white rounded p-2">
                                                            <p className="text-amber-800 text-xs">{prof}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <ul className="space-y-1 text-amber-800 text-sm mt-2">
                                                    <li>• First degree in relevant field from accredited university</li>
                                                    <li>• One (1) year post qualification experience</li>
                                                    <li>• Must be registered with relevant professional regulatory body</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Additional Categories */}
                            {[
                                {
                                    id: 'procurement',
                                    title: 'Procurement/Supply Chain Management',
                                    icon: FaWarehouse,
                                    description: 'First degree in Procurement/Supply chain management with one (1) year post qualification experience'
                                },
                                {
                                    id: 'public-affairs',
                                    title: 'Public Affairs',
                                    icon: FaBroadcastTower,
                                    description: 'First degree in Communication Studies, Public Relations or Journalism, OR first degree in any discipline plus Diploma in Communication Studies/Public Relations/Journalism'
                                },
                                {
                                    id: 'statisticians',
                                    title: 'Statisticians',
                                    icon: FaChartBar,
                                    description: 'First degree in Statistics or Mathematics with one (1) year post qualification experience'
                                },
                                {
                                    id: 'technical-officers',
                                    title: 'Technical Officers',
                                    icon: FaHammer,
                                    description: 'First degree or its equivalence in: BSc Land Economy, Building Technology, BSc Quantity Surveying, BSc Civil/Mechanical/Electrical Engineering, BSc Geomatics Engineering'
                                },
                                {
                                    id: 'religious-affairs',
                                    title: 'Religious Affairs',
                                    icon: FaPray,
                                    description: 'Ordained Minister/Chaplain with first degree in Theology, OR Imam with first degree in Islamic Studies',
                                    details: [
                                        'Christian: Good standing in Ghana Catholic Secretariat, Christian Council of Ghana, Pentecostal Council of Ghana or other recognized Christian Bodies',
                                        'Muslim: Good standing in office of National/Regional Chief Imam, office of Ameer of Ahmadiyya Muslim Mission or other recognized Muslim bodies'
                                    ]
                                },
                                {
                                    id: 'creative-arts',
                                    title: 'Creative Arts & Culture',
                                    icon: FaPalette,
                                    description: 'First Degree not below second class (lower division) with one (1) year post qualification experience in:',
                                    details: ['Theatrical Music Composers', 'Drama & Play Writers', 'Other relevant creative art and culture disciplines']
                                }
                            ].map((category) => (
                                <div key={category.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => toggleSenior(category.id)}
                                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                                <category.icon className="text-amber-700 text-xl" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="text-xl font-semibold text-gray-900">{category.title}</h4>
                                                <p className="text-gray-600">Professional Services</p>
                                            </div>
                                        </div>
                                        {expandedSenior === category.id ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {expandedSenior === category.id && (
                                        <div className="px-6 pb-6 border-t border-gray-200">
                                            <div className="mt-4">
                                                <p className="text-gray-700 mb-3">{category.description}</p>
                                                {category.details && (
                                                    <div className="bg-amber-50 rounded-lg p-4">
                                                        {category.details.map((detail, index) => (
                                                            <p key={index} className="text-amber-800 text-sm">
                                                                • {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Note about Ranks */}
                        <div className="mt-8 p-6 bg-amber-100 rounded-xl border border-amber-200">
                            <h4 className="text-lg font-semibold mb-3 text-amber-900">Important Note:</h4>
                            <p className="text-amber-800">
                                For Senior Officer category, apart from Medical Doctors, Dental Surgeons, Ophthalmologists, and Pharmacists with Pharm D who will be placed on the rank of Deputy Superintendent of Prisons (DSP), all other graduates shall start from Assistant Superintendent of Prisons (ASP) after completion of training.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Junior Officer Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Junior Officer Recruitment</h2>
                            <p className="text-xl text-gray-600">Join the Ghana Prisons Service as a Junior Officer</p>
                        </div>

                        {/* General Eligibility - Junior Officer */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-12">
                            <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-3">
                                <FaUser className="text-blue-700" />
                                General Eligibility Requirements
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Must be a Ghanaian citizen</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Be of good character without criminal record</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Be physically and medically fit by Prisons Service standards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Age: 18-32 years (as of November 1, 2025)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Age: 18-35 years for artisans, tradesmen and professionals only</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Minimum academic qualification: BECE with at least 5 passes</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Not dismissed from any public service or employment</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Height: Minimum 1.68m (5'6") for males, 1.57m (5'2") for females</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Have active email account and mobile phone number</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Ready to undergo basic Prisons training</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Not bonded by any organization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Be registered with appropriate professional body (for medical category)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Junior Officer Categories */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Junior Officer Categories</h3>

                            {/* General Duties */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-general')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaShieldAlt className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">General Duties</h4>
                                            <p className="text-gray-600">Basic Service Entry</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-general' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-general' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2">Requirements:</h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• SSSCE/WASSCE with at least five (5) passes</li>
                                                    <li>• Candidates with passes in English or Mathematics will have an advantage</li>
                                                    <li>• Candidates with Stenographer Certificate (COTVET/NVTI)/Stenographer I & II Certificates can apply</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Medical */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-medical')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaStethoscope className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Medical</h4>
                                            <p className="text-gray-600">Healthcare Support Staff</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-medical' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-medical' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                All applicants must possess at least an HND or Diploma from an accredited institution in the relevant field, completed mandatory rotation and be registered with the appropriate professional body with one (1) year practical work experience.
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-2">
                                                {[
                                                    'General Nurses', 'Anaesthetic Nurses', 'Intensive Care Nurses', 'Orthopaedic Nurses',
                                                    'Midwives', 'Mental Health Nurses', 'Public Health Nurses', 'Ear, Nose and Throat Nurses',
                                                    'Medical Laboratory Technicians/Assistants', 'Disease Control Technical Officers', 'Health Information Officers',
                                                    'Health Administration Assistants', 'Nutrition Technical Officers', 'Opticians', 'Dental Health Nurses',
                                                    'Health Promotion Officers', 'Pharmacy Technicians'
                                                ].map((role) => (
                                                    <div key={role} className="bg-blue-50 rounded p-2">
                                                        <p className="text-blue-800 text-xs">{role}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-blue-100 rounded-lg p-4 mt-3">
                                                <h5 className="font-semibold text-blue-900 mb-2">Nurse Assistant:</h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• Certificate in Nurse Assistant Clinical or Nurse Assistant Preventive from accredited institution</li>
                                                    <li>• Registered with Nursing and Midwifery Council</li>
                                                    <li>• One (1) year practical work experience</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Agriculture */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-agriculture')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaLeaf className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Agriculture</h4>
                                            <p className="text-gray-600">Farming and Agricultural Services</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-agriculture' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-agriculture' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4 space-y-4">
                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaSeedling /> General Agric
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• HND, Diploma or Certificate in General Agric from accredited institution</li>
                                                    <li>• One (1) year practical work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaDog /> Veterinary/Animal Health
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• HND, Diploma or Certificate in Veterinary/Animal Health from accredited institution</li>
                                                    <li>• One (1) year practical work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaTractor /> Tractor Operators/Mechanics
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• GES Intermediate Certificate in Tractor Operating or Mechanic, OR</li>
                                                    <li>• GES or COTVET Certificate II in Tractor Operating or Mechanic</li>
                                                    <li>• One (1) year practical work experience</li>
                                                    <li>• Must be able to repair tractors</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaTree /> Horticulturist
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• Horticulture Certificates from accredited institution</li>
                                                    <li>• One (1) year practical work experience</li>
                                                    <li>• Acceptable qualifications: Higher National Diploma, Diploma/Certificate in Horticulture, NVTI I & II Certificate in Horticulture</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* General Tradesmen - showing first few */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-trades')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaTools className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">General Tradesmen</h4>
                                            <p className="text-gray-600">Skilled Technical Workers (35+ trades)</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-trades' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-trades' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                All applicants must possess qualification as specified below from an accredited institution with one (1) year practical work experience:
                                            </p>
                                            <div className="bg-blue-50 rounded-lg p-4 mb-3">
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• Higher National Diploma in the relevant field</li>
                                                    <li>• Ghana Education Service (GES) Intermediate Certificate in the relevant field</li>
                                                    <li>• Ghana Education Service (GES) or COTVET Certificate II in the relevant field</li>
                                                    <li>• City and Guilds (Intermediate) Certificate in the relevant field</li>
                                                    <li>• NVTI I & II or Trade Test Certificate II in the relevant field</li>
                                                </ul>
                                            </div>
                                            <div className="grid md:grid-cols-3 gap-2">
                                                {[
                                                    'Electricians', 'Masons/Stone Masons', 'Plumbers', 'Wood Construction Technology/Carpentry/Wood Carvers',
                                                    'Welding & Fabrication', 'Painters and Sign Writers', 'Steel Benders', 'Blacksmiths/Metal Workers/Metal Sculptures',
                                                    'Tilers', 'Aluminium and Glass Fabrication', 'Land Survey Technicians', 'Refrigeration and Air-Conditioning Technicians',
                                                    'Draughtmen', 'Ceramics', 'Lift Technicians', 'Plant Operators (Grader, Excavator, Bull Dozers, etc.)',
                                                    'Car Sprayers', 'Vulcanizers', 'Screen Printers', 'Digital Fabricators', 'Mixed Media Artists',
                                                    'Jewellery Makers', 'Kente Weaving', 'Pop Ceiling Designers', 'Glass Blowers', 'Gypsum Board Installers',
                                                    'Interior Decorators', 'Concrete Sculptors', 'Calligraphy and Lettering Technicians', 'Mechanics–Automobile and Automotive Technicians/Auto Electricians',
                                                    'Tailors, Textiles & Design and Embroidery Technicians', 'Cobblers/Leather Work'
                                                ].map((trade) => (
                                                    <div key={trade} className="bg-white rounded p-2 border border-blue-200">
                                                        <p className="text-blue-800 text-xs">{trade}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Special Categories */}
                                            <div className="mt-4 space-y-3">
                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                        <FaBus /> Drivers and Motor Riders
                                                    </h5>
                                                    <ul className="space-y-1 text-blue-800 text-sm">
                                                        <li>• Professional Driver's Licence not less than Class B with one (1) year driving experience</li>
                                                        <li>• Professional Driver's Licence A with one (1) year riding experience</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h5 className="font-semibold text-blue-900 mb-2">Building Technology</h5>
                                                    <ul className="space-y-1 text-blue-800 text-sm">
                                                        <li>• Higher National Diploma or Diploma from accredited institution</li>
                                                        <li>• One (1) year work experience</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h5 className="font-semibold text-blue-900 mb-2">Furniture and Designing</h5>
                                                    <ul className="space-y-1 text-blue-800 text-sm">
                                                        <li>• Higher National Diploma or Diploma from accredited institution</li>
                                                        <li>• One (1) year work experience</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Additional Junior Categories */}
                            {[
                                {
                                    id: 'junior-operations',
                                    title: 'Operations',
                                    icon: FaHammer,
                                    description: 'Weapon Mechanics/Fitters',
                                    details: [
                                        'NVTI I & II or Trade Test Certificate II in Weapon Mechanic or Fitting',
                                        'One (1) year practical work experience',
                                        'License in Weapon Mechanic or Fitting would be an advantage'
                                    ]
                                },
                                {
                                    id: 'junior-music',
                                    title: 'Music (Dance Band & Regimental)',
                                    icon: FaMusic,
                                    description: 'Musical Services',
                                    details: [
                                        'GES Intermediate Certificate/COTVET Certificate II/NVTI Grade I or Trade Test Certificate II/City and Guilds (Intermediate)/Proficiency in Basic Music (ABRSM) grade 4',
                                        'Ability to sight-read musical notes',
                                        'Ability to play Wood Wind or Brass Instruments and any other dance band instrument'
                                    ]
                                },
                                {
                                    id: 'junior-catering',
                                    title: 'Catering',
                                    icon: FaUtensils,
                                    description: 'Food Services',
                                    details: [
                                        'NVTI Grade I or Trade Test Certificate II in Hospitality and Catering Management',
                                        'GES Intermediate Certificate or COTVET Certificate II in Hospitality and Catering Management',
                                        'City and Guilds (Intermediate) in the above',
                                        'One (1) year practical work experience'
                                    ]
                                }
                            ].map((category) => (
                                <div key={category.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => toggleJunior(category.id)}
                                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <category.icon className="text-blue-700 text-xl" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="text-xl font-semibold text-gray-900">{category.title}</h4>
                                                <p className="text-gray-600">{category.description}</p>
                                            </div>
                                        </div>
                                        {expandedJunior === category.id ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {expandedJunior === category.id && (
                                        <div className="px-6 pb-6 border-t border-gray-200">
                                            <div className="mt-4">
                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    {category.details.map((detail, index) => (
                                                        <p key={index} className="text-blue-800 text-sm">
                                                            • {detail}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* IT/Communication - Complex Category */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-it')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaLaptopCode className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Information Technology/Communication</h4>
                                            <p className="text-gray-600">IT and Technical Support Services</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-it' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-it' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4 space-y-4">
                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaWifi /> Radio/Telephone/Telecom Technicians
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• NVTI I & II/City and Guilds Certificate in Electronics, OR</li>
                                                    <li>• NVTI I & II/City and Guilds Certificate in Telecommunication</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaDatabase /> Networking Technicians
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• N+ Certificate from recognized institution</li>
                                                    <li>• Knowledge in LINUX/Windows Server 2003, 2008 and above</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaDatabase /> Database Administrators
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• Certificate in MySQL, SQL, and Oracle from recognized institution</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                                    <FaGlobe /> Web Designers
                                                </h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• Certificate in HTML, PHP, CSS, CMS, Adobe and Photoshop from recognized institution</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2">Office & Industrial Machine Mechanics</h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• GES Intermediate Certificate/COTVET Certificate II in Office Machines or Industrial Mechanics, OR</li>
                                                    <li>• City and Guilds Certificate in Electronics</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2">Computer Hardware Technicians</h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• COTVET Certificate II in Computer Hardware, OR</li>
                                                    <li>• NVTI I & II/City and Guilds Certificate in Computer Hardware</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2">Satellite Dish Technicians</h5>
                                                <ul className="space-y-1 text-blue-800 text-sm">
                                                    <li>• COTVET Certificate II in Computer Hardware, OR</li>
                                                    <li>• NVTI I & II/City and Guilds Certificate in Computer Hardware</li>
                                                    <li>• One (1) year work experience</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Public Relations */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-pr')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaCamera className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Public Relations</h4>
                                            <p className="text-gray-600">Media and Communication Services</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-pr' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-pr' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                In addition to General Eligibility, applicants must possess at least a Diploma or Certificate from UNIMAC or any accredited institution with one (1) year work experience in:
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-2">
                                                {[
                                                    'Videographers/Photographers', 'Master Control Room (MCR) Technicians', 'Graphic Designers',
                                                    'Sound Technicians', 'Video Editors', 'Editors'
                                                ].map((role) => (
                                                    <div key={role} className="bg-blue-50 rounded p-2">
                                                        <p className="text-blue-800 text-xs">{role}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Creative Art & Culture */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-creative')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaPalette className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Creative Art & Culture</h4>
                                            <p className="text-gray-600">Cultural and Artistic Services</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-creative' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-creative' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <p className="text-gray-700 mb-3">
                                                In addition to General Eligibility, applicants must possess a Diploma or Certificate from UNIMAC or any accredited institution in:
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-2">
                                                {[
                                                    'Theatrical Musicians', 'Drama & Theatre Artistes', 'Other relevant creative art and culture disciplines'
                                                ].map((art) => (
                                                    <div key={art} className="bg-blue-50 rounded p-2">
                                                        <p className="text-blue-800 text-xs">{art}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sports */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleJunior('junior-sports')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FaFootballBall className="text-blue-700 text-xl" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-gray-900">Sports</h4>
                                            <p className="text-gray-600">Athletic and Sports Services</p>
                                        </div>
                                    </div>
                                    {expandedJunior === 'junior-sports' ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedJunior === 'junior-sports' && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div className="mt-4">
                                            <div className="bg-blue-50 rounded-lg p-4">
                                                <h5 className="font-semibold text-blue-900 mb-2">Sporting Disciplines:</h5>
                                                <div className="grid md:grid-cols-4 gap-2">
                                                    {[
                                                        'Taekwondo', 'Boxing', 'Athletics', 'Football', 'Basketball', 'Volleyball',
                                                        'Hockey', 'Handball', 'Table Tennis', 'Judo', 'Arm Wrestling'
                                                    ].map((sport) => (
                                                        <div key={sport} className="bg-white rounded p-2">
                                                            <p className="text-blue-800 text-xs">{sport}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-blue-800 text-sm mt-3 font-semibold">
                                                    Age requirement: Minimum 18 and not more than 25 years (as of November 1, 2025)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Note about Junior Officer Ranks */}
                        <div className="mt-8 p-6 bg-blue-100 rounded-xl border border-blue-200">
                            <h4 className="text-lg font-semibold mb-3 text-blue-900">Important Note:</h4>
                            <p className="text-blue-800">
                                For Junior Officer category, apart from applicants with Diploma/HND in Agriculture and Health related programmes that will be placed on the rank of Sergeant, all other applicants shall start from Second Class Officer Rank after completion of training.
                            </p>
                        </div>

                        {/* Competency Test Notice */}
                        <div className="mt-6 p-6 bg-amber-100 rounded-xl border border-amber-200">
                            <h4 className="text-lg font-semibold mb-3 text-amber-900">Competency Test Requirements:</h4>
                            <p className="text-amber-800 mb-3">
                                All applicants shortlisted under the following categories will undergo practical/competency-based test to determine their suitability:
                            </p>
                            <div className="grid md:grid-cols-2 gap-2">
                                {[
                                    'General Tradesmen', 'Agriculture – Tractor Operators/Mechanics', 'Operations',
                                    'Music (Dance Band & Regimental)', 'Catering', 'Information Technology and Communication',
                                    'Public Relations', 'Sports'
                                ].map((category) => (
                                    <div key={category} className="bg-white rounded p-2">
                                        <p className="text-amber-800 text-sm">• {category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Required Documents Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                                <FaFileAlt className="text-amber-700" />
                                Required Documents
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Basic Documents</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Birth Certificate</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Ghana Card/National ID</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Educational Certificates (WASSCE/SSSCE/Degrees/Diplomas)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>National Service Certificate (for Senior Officers)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Additional Documents</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Passport Photographs (4 copies)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Medical Fitness Report</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Character Reference Certificate</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                                            <span>Professional Registration Certificates (for Medical/Legal/Technical categories)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-700 to-stone-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Lives?</h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Join the Ghana Prisons Service and make a difference in correctional reform while serving your nation
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="javascript:void(0)" className="bg-amber-400 text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-300 transition-colors inline-flex items-center justify-center gap-2">
                            <span>Apply Now </span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link href="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-colors inline-flex items-center justify-center">
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

export default Prisons