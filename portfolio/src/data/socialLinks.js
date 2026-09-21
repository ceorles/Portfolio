import { FacebookIcon, GithubIcon, DiscordIcon } from '../components/icons/BrandIcons'

/**
 * Social profiles. Replace the "#" placeholders with the real URLs —
 * this is the only place they are defined.
 */
export const socialLinks = [
  { id: 'facebook', name: 'Facebook', handle: 'Charles Berches', url: 'https://www.facebook.com/ceorIes', Icon: FacebookIcon },
  { id: 'github', name: 'GitHub', handle: 'ceorles', url: '#', Icon: GithubIcon },
  { id: 'discord', name: 'Discord', handle: 'ceorles', url: '#', Icon: DiscordIcon },
]

/** Helper so components never have to know the shape of the array. */
export const getSocialUrl = (id) => socialLinks.find((link) => link.id === id)?.url ?? '#'
