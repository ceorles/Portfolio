/** Builds a Google Maps search link for an address that has no explicit URL. */
export const mapSearchUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

/** Shared props for links that leave the site. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}
