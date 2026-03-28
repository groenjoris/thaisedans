export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PerformingGroup',
    name: 'Akhira Thai Dance',
    url: 'https://thaisedans.nl',
    email: 'oui@thaisedans.nl',
    telephone: '+31648262749',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
    description:
      'Thai dance performances and workshops across Europe. Solo dance, dance groups, and live Thai music for events, weddings, and celebrations.',
    founder: {
      '@type': 'Person',
      name: 'Ratchaneekorn Vichayanon',
    },
    sameAs: [],
  };
}
