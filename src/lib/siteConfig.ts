export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'career-blog',
  name: 'Ladder',
  origin: 'https://career-blog.oriz.in',
  tagline: 'Honest roadmaps for tech careers, breaking in and levelling up',
  description:
    'Ladder — honest, specific notes on tech careers: breaking into engineering, AI and SAP paths, AdSense and side income, and levelling up without the hustle-porn.',
}
