"use client"
import { useState, useEffect } from "react"
import { FaCalendarAlt, FaClock, FaHourglassHalf, FaExclamationTriangle } from "react-icons/fa"

interface CountdownTimerProps {
  targetDate?: Date | string | number
  title?: string
  subtitle?: string
  deadlineLabel?: string
  showDeadline?: boolean
  showIcons?: boolean
  className?: string
  variant?: "default" | "compact" | "minimal"
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({
  targetDate,
  title = "Recruitment Starts",
  subtitle = "",
  deadlineLabel = "Application Starts",
  showDeadline = true,
  showIcons = true,
  className = "",
  variant = "default",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    // normalize target to a Date instance
    const parseTarget = (t?: Date | string | number) => {
      if (!t) {
        const def = new Date()
        def.setDate(def.getDate() + 30)
        return def
      }
      return t instanceof Date ? t : new Date(t)
    }

    const finalTarget = parseTarget(targetDate)

    const compute = () => {
      const now = new Date().getTime()
      const diff = finalTarget.getTime() - now

      console.log('Countdown Debug:', {
        now: new Date(now),
        target: finalTarget,
        diff: diff,
        diffHours: Math.floor(diff / (1000 * 60 * 60))
      })

      if (diff <= 0) {
        console.log('Countdown expired - setting to zeros')
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
        return false
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      console.log('Countdown calculated:', { days, hours, minutes, seconds })

      setTimeLeft({ days, hours, minutes, seconds })
      setIsExpired(false)
      return true
    }

    // run immediately so we don't wait 1s for first update
    const stillCounting = compute()

    // if already expired, nothing else to do
    if (!stillCounting) return

    const id = window.setInterval(() => {
      const cont = compute()
      if (!cont) {
        // stop interval when expired
        clearInterval(id)
      }
    }, 1000)

    return () => clearInterval(id)
  }, [targetDate])

  const TimeUnit = ({
    value,
    label,
    icon: Icon,
    colorClass,
    delay = 0,
  }: {
    value: number
    label: string
    icon?: React.ComponentType<any> | null
    colorClass: string
    delay?: number
  }) => (
    <div className="text-center group">
      <div
        className={`
          ${colorClass}
          rounded-xl ${showIcons ? "p-4 md:p-6" : "p-3 md:p-4"} shadow-lg
          group-hover:shadow-xl transition-all duration-300
          group-hover:scale-105 animate-float
          ${isExpired ? "opacity-50" : ""}
        `}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* {showIcons && Icon && <Icon className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-2" />} */}
        <div className={`${showIcons ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-bold text-white`}>
          {String(value).padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base text-white/90 font-semibold">{label}</div>
      </div>
    </div>
  )

  const renderCompactTimer = () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg px-3 py-2">
          <span className="text-xl font-bold text-slate-900">
            {String(timeLeft.days).padStart(2, "0")}d {String(timeLeft.hours).padStart(2, "0")}h
          </span>
        </div>
      </div>
      <span className="text-white/80 text-sm">{title.toLowerCase()}</span>
    </div>
  )

  const renderMinimalTimer = () => (
    <div className="text-center">
      <div className="text-2xl font-bold text-yellow-300">
        {String(timeLeft.days).padStart(2, "0")}d : {String(timeLeft.hours).padStart(2, "0")}h :{" "}
        {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s
      </div>
      <div className="text-white/60 text-sm mt-1">{title}</div>
    </div>
  )

  const renderDefaultTimer = () => (
    <>
      {/* {showDeadline && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 px-6 py-3 rounded-full text-sm font-semibold border border-yellow-400/30">
            <FaExclamationTriangle className="w-5 h-5 animate-pulse" />
            <span>{deadlineLabel}</span>
          </div>
        </div>
      )} */}

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Days" icon={FaCalendarAlt} colorClass="bg-gradient-to-br from-yellow-400 to-yellow-500" />
          <TimeUnit value={timeLeft.hours} label="Hours" icon={FaClock} colorClass="bg-gradient-to-br from-blue-400 to-blue-500" delay={200} />
          <TimeUnit value={timeLeft.minutes} label="Minutes" icon={FaHourglassHalf} colorClass="bg-gradient-to-br from-green-400 to-green-500" delay={400} />
          <TimeUnit value={timeLeft.seconds} label="Seconds" icon={FaExclamationTriangle} colorClass="bg-gradient-to-br from-red-400 to-red-500 animate-pulse" delay={600} />
        </div>
      </div>
    </>
  )

  return (
    <div className={`max-w-4xl mx-auto mb-16 animate-fade-in-up ${className}`} style={{ animationDelay: "0.8s" }}>
      {variant === "compact" && renderCompactTimer()}
      {variant === "minimal" && renderMinimalTimer()}
      {variant === "default" && renderDefaultTimer()}
    </div>
  )
}
