"use client"
import Link from 'next/link'
import { FaShieldAlt, FaClock, FaMobileAlt, FaCheckCircle, FaLock, FaGlobe, FaUsers, FaFileAlt } from 'react-icons/fa'
import CountdownTimer from './components/CountdownTimer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/assets/hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/30 to-slate-900/80"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className='flex flex-col'>

          <div className="relative container mx-auto px-4 text-center z-10">
            <div className="max-w-6xl mx-auto">
              {/* Logo/Branding */}
              <div className="my-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img src="/assets/logo.png" alt="Ministry of Interior" className="w-10 h-10 object-contain" />
                  </div>
                  <span className="text-white font-semibold">Ministry of The Interior</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="block text-white mb-2">Recruitment into the</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-float">
                  Internal Security Agencies
                </span>
              </h1>

              {/* Services in Hero Section */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link href="/ghana-police-service" className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center block hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg p-2">
                    <img src="/assets/services/ghana_police_service_logo.png" alt="Ghana Police Service" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Ghana Police Service</h3>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Learn more →</p>
                </Link>

                <Link href="/ghana-national-fire-service" className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center block hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg p-2">
                    <img src="/assets/services/ghana_national_fire_service_logo.png" alt="Ghana National Fire Service" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Ghana National Fire Service</h3>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Learn more →</p>
                </Link>

                <Link href="/ghana-immigration-service" className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center block hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg p-2">
                    <img src="/assets/services/ghana_immigration_service_logo.png" alt="Ghana Immigration Service" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Ghana Immigration Service</h3>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Learn more →</p>
                </Link>

                <Link href="/ghana-prisons-service" className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center block hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg p-2">
                    <img src="/assets/services/ghana_prisons_service_logo.png" alt="Ghana Prisons Service" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Ghana Prisons Service</h3>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Learn more →</p>
                </Link>
              </div>



              <div id="countdown">
                <span id="days"></span> days
                <span id="hours"></span> hours
                <span id="minutes"></span> minutes
                <span id="seconds"></span> seconds
              </div>



              {/*
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 animate-bounce-slow">
                <Link href="javascript:void(0)">
                  <span>Start Your Application</span>
                </Link>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div> */}


            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer
            title="Recruitment Starts In"
            subtitle=""
            deadlineLabel="Application Deadline"
            showIcons={true}
            showDeadline={true}
            variant="default"
            targetDate={new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)} // 30 days from now
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-scale-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick & Easy Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Simple 5-Step Application
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12 relative">
              <div className="group text-center animate-fade-in-left " >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-15 group-hover:opacity-25 transition-opacity"></div>
                  <div className="relative bg-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 animate-float">
                    1
                  </div>
                </div>
                <div style={{ height: '200px' }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Purchase Voucher</h3>
                  <p className="text-gray-600">Buy application credentials from authorized vendors</p>
                </div>
              </div>

              <div className="group text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-15 group-hover:opacity-25 transition-opacity"></div>
                  <div className="relative bg-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.4s' }}>
                    2
                  </div>
                </div>
                <div style={{ height: '200px' }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Create Account</h3>
                  <p className="text-gray-600">Register with your serial, pin, and personal details</p>
                </div>
              </div>

              <div className="group text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-yellow-500 rounded-full blur-lg opacity-15 group-hover:opacity-25 transition-opacity"></div>
                  <div className="relative bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.6s' }}>
                    3
                  </div>
                </div>
                <div style={{ height: '200px' }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Choose Service</h3>
                  <p className="text-gray-600">Select your preferred security service</p>
                </div>
              </div>

              <div className="group text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-15 group-hover:opacity-25 transition-opacity"></div>
                  <div className="relative bg-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.8s' }}>
                    4
                  </div>
                </div>
                <div style={{ height: '200px' }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Complete Form</h3>
                  <p className="text-gray-600">Fill application and upload documents</p>
                </div>
              </div>

              <div className="group text-center animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-yellow-500 rounded-full blur-lg opacity-15 group-hover:opacity-25 transition-opacity"></div>
                  <div className="relative bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                    5
                  </div>
                </div>
                <div style={{ height: '200px' }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Submit & Track</h3>
                  <p className="text-gray-600">Submit and monitor your progress</p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>


      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center" >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Have you purchased your voucher already?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'javascript:void(0)'} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 animate-slide-up flex items-center justify-center gap-2" style={{ animationDelay: '0.4s' }}>
              <span>Apply Now !!!</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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
              <p className="text-gray-600 mb-4">Ministries, Accra<br />Greater Accra Region</p>
              <div className="text-sm text-blue-600 font-medium">
                <div>Mon - Fri: 8:00 AM - 5:00 PM</div>
                <div>Sat: 9:00 AM - 1:00 PM</div>
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
                Response within 24 hours
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
                Mon - Fri: 8:00 AM - 8:00 PM
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Have you purchased your voucher already?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'javascript:void(0)'} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 animate-slide-up flex items-center justify-center gap-2" style={{ animationDelay: '0.4s' }}>
              <span>Apply Now !!!</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )

}
