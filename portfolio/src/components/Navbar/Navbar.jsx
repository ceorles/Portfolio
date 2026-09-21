import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navLinks'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollLock } from '../../hooks/useScrollLock'
import { scrollToSection } from '../../utils/scroll'
import styles from './Navbar.module.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useScrollLock(menuOpen)

  // Subtle border/background change once the page is no longer at the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNavClick = (event, id) => {
    // Keep the URL hash, but scroll ourselves so the sticky navbar is accounted for.
    if (scrollToSection(id)) event.preventDefault()
    setMenuOpen(false)
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Main navigation">
        <a
          href="#home"
          className={styles.logo}
          onClick={(event) => handleNavClick(event, 'home')}
        >
          ceorles
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${styles.link} ${activeId === link.id ? styles.active : ''}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={(event) => handleNavClick(event, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.mobileLink} ${activeId === link.id ? styles.active : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={(event) => handleNavClick(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  )
}
