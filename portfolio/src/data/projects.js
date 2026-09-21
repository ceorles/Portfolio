import koiImage from '../assets/images/Koi.png'
import mp3Image from '../assets/images/mp3.png'
import pokemonImage from '../assets/images/Pokemon.png'
import libraryImage from '../assets/images/Library.png'
import enrollmentImage from '../assets/images/Enrollment.png'

/**
 * Every project shown in the Projects section.
 *
 * `url` is the link opened in a new tab when the card is clicked.
 * Replace the "#" placeholders with the real links — this file is the only
 * place project links live, so nothing else needs to change.
 */
export const projects = [
  {
    id: 'koi',
    title: 'KOI Cafe & Restaurant',
    description:
      'A restaurant landing page with a menu, product pages and a sign in / sign up flow, built with HTML and CSS.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: koiImage,
    url: 'https://ceorles.github.io/midterm_project.github.io/',
  },
  {
    id: 'music-player',
    title: 'Music Player',
    description:
      'A browser music player with playlist controls, track switching and a seekable progress bar.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: mp3Image,
    url: 'https://ceorles.github.io/music_player.github.io/',
  },
  {
    id: 'pokedex',
    title: 'Pokedex',
    description:
      'A Pokemon browser that fetches creature data and renders searchable, detailed cards.',
    tags: ['JavaScript', 'API'],
    image: pokemonImage,
    url: 'https://ceorles.github.io/responsive_website.github.io/',
  },
  {
    id: 'library-system',
    title: 'Library System',
    description:
      'A library management tool for tracking books, borrowers and returns through a simple admin view.',
    tags: ['Python', 'Database'],
    image: libraryImage,
    url: 'https://ceorles-library.netlify.app/',
  },
  {
    id: 'enrollment-form',
    title: 'Student Enrollment Form',
    description:
      'A student enrollment form with validated inputs and a live table of submitted student records.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: enrollmentImage,
    url: 'https://ceorles.github.io/enrollment_form.github.io/',
  },
]

/** Note shown under the project grid. `Ceorles` links to the GitHub profile. */
export const projectsNote = {
  before: 'This is not all my project, some projects are undeployed, you can see them in my Github Account: ',
  linkLabel: 'Ceorles',
}
