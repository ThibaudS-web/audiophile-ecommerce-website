import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <nav>
          <Link href="/headphones">HEADPHONES</Link>
          <Link href="/speakers">SPEAKERS</Link>
          <Link href="/earphones">EARPHONES</Link>
    </nav>
  )
}

export default Header