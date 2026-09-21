/**
 * Scrolls to a section by id, respecting the sticky navbar height and the
 * user's reduced-motion preference. Returns false when the target is missing
 * so callers can fall back to default anchor behaviour.
 */
export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return false

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const navbarHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
    10,
  )
  const top = target.getBoundingClientRect().top + window.scrollY - (navbarHeight || 64) - 8

  window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  return true
}
