import { useState } from 'react'
import { COMPANY_NAME } from '../data/siteData'
import logoImg from '../assets/img/logo.png'

interface LogoProps {
  className?: string
}

function Logo({ className = '' }: LogoProps) {
  const [showFallback, setShowFallback] = useState(false)

  if (showFallback) {
    return (
      <span className={`logo-text ${className}`}>
        Prime<span>Carpet Cleaning</span>
      </span>
    )
  }

  return (
    <img
      src={logoImg}
      alt={COMPANY_NAME}
      className={`logo-image ${className}`}
      onError={() => setShowFallback(true)}
    />
  )
}

export default Logo
