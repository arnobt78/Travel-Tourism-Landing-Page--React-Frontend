import { useState } from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

/**
 * Fixed top navbar: logo, mobile toggle (controls open state), links, social icons.
 * showLinks toggles the mobile menu; on desktop, links are always visible via CSS.
 */
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks((prev) => !prev)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="/images/logo.svg"
            className="nav-logo"
            alt="backroads"
          />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleLinks}
            aria-expanded={showLinks}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>

        <PageLinks
          parentClass={showLinks ? 'nav-links show-links' : 'nav-links'}
          itemClass="nav-link"
        />

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.id} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
