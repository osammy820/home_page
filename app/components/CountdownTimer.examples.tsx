// Example usage of the reusable CountdownTimer component

import CountdownTimer from './CountdownTimer'

// Example 1: Default usage (like in the hero section)
export function DefaultTimerExample() {
  return <CountdownTimer />
}

// Example 2: Custom target date
export function CustomDateTimerExample() {
  const targetDate = new Date('2024-12-31T23:59:59')
  return <CountdownTimer targetDate={targetDate} />
}

// Example 3: Custom text
export function CustomTextTimerExample() {
  return (
    <CountdownTimer
      title="Special Recruitment Drive Ends"
      subtitle="Limited time opportunity for qualified candidates"
      deadlineLabel="Special Recruitment Deadline"
    />
  )
}

// Example 4: Compact variant for sidebars
export function CompactTimerExample() {
  return (
    <CountdownTimer
      variant="compact"
      title="Application Deadline"
      className="mb-4"
    />
  )
}

// Example 5: Minimal variant for footers
export function MinimalTimerExample() {
  return (
    <CountdownTimer
      variant="minimal"
      title="Next Recruitment Cycle"
      className="mb-4"
      showDeadline={false}
    />
  )
}

// Example 6: Usage in service pages with custom styling
export function ServicePageTimerExample() {
  return (
    <div className="my-8">
      <CountdownTimer
        title="Ghana Police Service Recruitment Closes"
        subtitle="Complete your application before the deadline"
        deadlineLabel="Police Service Application Deadline"
        className="max-w-3xl mx-auto"
      />
    </div>
  )
}

// Example 7: Timer without icons (clean text-only version)
export function NoIconsTimerExample() {
  return (
    <CountdownTimer
      title="Application Deadline"
      subtitle="Submit your application before it's too late"
      showIcons={false}
      deadlineLabel="Last Chance"
      className="max-w-3xl mx-auto"
    />
  )
}

// Example 8: Compact timer without icons
export function CompactNoIconsTimerExample() {
  return (
    <CountdownTimer
      title="Application Deadline"
      variant="compact"
      showIcons={false}
      className="mb-4"
    />
  )
}

// Example 9: Minimal timer (perfect for footers)
export function MinimalNoIconsTimerExample() {
  return (
    <CountdownTimer
      title="Recruitment Ends Soon"
      variant="minimal"
      showIcons={false}
      showDeadline={false}
      className="text-center"
    />
  )
}