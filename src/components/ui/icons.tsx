import { siGithub } from 'simple-icons'

interface IconProps { className?: string }

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 12h15m-6-6 6 6-6 6" strokeLinecap="square" />
    </svg>
  )
}

export function ExternalArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  )
}

export function GithubMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d={siGithub.path} />
    </svg>
  )
}
