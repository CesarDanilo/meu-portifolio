import { useState, useEffect } from 'react'

interface TerminalProps {
  lines?: string[]
  title?: string
  autoStart?: boolean
  delay?: number
}

export default function Terminal({ lines = [], title = 'terminal', autoStart = true, delay = 0 }: TerminalProps) {
  const safeLines = lines.filter((l): l is string => typeof l === 'string')
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!autoStart) return
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [autoStart, delay])

  useEffect(() => {
    if (!started) return
    setVisibleLines([])
    let i = 0
    const interval = setInterval(() => {
      if (i < safeLines.length) {
        setVisibleLines(prev => [...prev, safeLines[i]])
        i++
      } else {
        clearInterval(interval)
      }
    }, 180)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 10, overflow: 'hidden', fontFamily: 'var(--font-mono)',
    }}>
      {/* Title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px',
        borderBottom: '1px solid var(--border)', background: 'var(--surface-2)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--text-faint)' }}>{title}</span>
      </div>
      {/* Content */}
      <div style={{ padding: '14px 16px', minHeight: 120, overflowX: 'auto' }}>
        {visibleLines.filter(Boolean).map((line, i) => (
          <div key={i} style={{
            fontSize: 12, lineHeight: 1.7, whiteSpace: 'pre',
            color: line.startsWith('$') ? 'var(--accent)' : line.startsWith('→') ? 'var(--text-primary)' : 'var(--text-muted)',
          }}>
            {line}
          </div>
        ))}
        {visibleLines.length < safeLines.length && (
          <span className="cursor-blink" style={{ display: 'inline-block', width: 7, height: 14, background: 'var(--accent)', verticalAlign: 'middle' }} />
        )}
      </div>
    </div>
  )
}
