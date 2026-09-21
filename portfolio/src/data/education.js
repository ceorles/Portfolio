/** Google Maps entry for the current school — reused by the Education cards. */
export const currentSchoolMapUrl = 'https://maps.google.com/maps?cid=3356680135033761432'

/**
 * Education history, grouped by level.
 * `mapUrl` is optional — when present the address becomes a link.
 */
export const education = [
  {
    level: 'Primary Education',
    entries: [
      {
        id: 'primary',
        years: '2011 – 2017',
        school: 'Lucena East II Elementary School',
        address: 'M. H. del Pilar Street, Barangay 7, Lucena City, 4301 Quezon',
      },
    ],
  },
  {
    level: 'Secondary Education',
    entries: [
      {
        id: 'junior-high',
        track: 'Junior High',
        years: '2017 – 2021',
        school: 'Quezon National High School',
        address:
          'M.L. Tagarao Street, Barangay Ibabang Iyam, Lucena City, 4301 Quezon Province, Philippines',
      },
      {
        id: 'senior-high',
        track: 'Senior High',
        years: '2021 – 2023',
        school: 'Quezon National High School',
        address:
          'M.L. Tagarao Street, Barangay Ibabang Iyam, Lucena City, 4301 Quezon Province, Philippines',
      },
    ],
  },
  {
    level: 'Tertiary Education',
    entries: [
      {
        id: 'tertiary',
        years: '2023 – Present',
        school: 'Dalubhasaan ng Lungsod ng Lucena',
        address: 'City Hall Annex Compound, Barangay Isabang, Lucena City, Quezon',
        mapUrl: currentSchoolMapUrl,
        current: true,
      },
    ],
  },
]
