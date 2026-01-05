import type { useTranslations } from 'next-intl'

import { SiFacebook, SiGithub, SiInstagram, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import { BarChartIcon, FlameIcon, MessageCircleIcon, MonitorIcon, PencilIcon, UserCircleIcon } from 'lucide-react'

import { SITE_FACEBOOK_URL, SITE_GITHUB_URL, SITE_INSTAGRAM_URL, SITE_X_URL, SITE_YOUTUBE_URL } from '@/lib/constants'

// Seems that next-intl doesn't expose the type for translation key,
// so we extract it here
type TranslationKey = Parameters<ReturnType<typeof useTranslations<never>>>[0]

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  key: string
  labelKey: TranslationKey
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/blog',
    key: 'blog',
    // t('common.labels.blog')
    labelKey: 'common.labels.blog'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    key: 'projects',
    // t('common.labels.projects')
    labelKey: 'common.labels.projects'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    key: 'about',
    // t('common.labels.about')
    labelKey: 'common.labels.about'
  },
  
]

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    labelKey: TranslationKey
  }>
}>

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      // t('common.labels.home')
      { href: '/', labelKey: 'common.labels.home' },
      // t('common.labels.blog')
      { href: '/blog', labelKey: 'common.labels.blog' },
      // t('common.labels.about')
      { href: '/about', labelKey: 'common.labels.about' },
      // t('common.labels.projects')
      { href: '/projects', labelKey: 'common.labels.projects' }
    ]
  },
  {
    id: 3,
    links: [
      // t('common.labels.facebook')
      { href: SITE_FACEBOOK_URL, labelKey: 'common.labels.facebook' },
      // t('common.labels.instagram')
      { href: SITE_INSTAGRAM_URL, labelKey: 'common.labels.instagram' },
      // t('common.labels.github')
      { href: SITE_GITHUB_URL, labelKey: 'common.labels.github' },
      // t('common.labels.youtube')
      { href: SITE_YOUTUBE_URL, labelKey: 'common.labels.youtube' }
    ]
  },
  {
    id: 4,
    links: [
      // t('common.labels.terms')
      { href: '/terms', labelKey: 'common.labels.terms' },
      // t('common.labels.privacy')
      { href: '/privacy', labelKey: 'common.labels.privacy' }
    ]
  }
]

type SocialLinks = Array<{
  href: string
  title: string
  icon: React.ReactNode
}>

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: <SiGithub />
  },
  {
    href: SITE_FACEBOOK_URL,
    title: 'Facebook',
    icon: <SiFacebook />
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: 'Instagram',
    icon: <SiInstagram />
  },
  {
    href: SITE_X_URL,
    title: 'X',
    icon: <SiX />
  },
  {
    href: SITE_YOUTUBE_URL,
    title: 'YouTube',
    icon: <SiYoutube />
  }
]

type AccountSidebarLinks = Array<{
  href: string
  labelKey: TranslationKey
}>

export const ACCOUNT_SIDEBAR_LINKS: AccountSidebarLinks = [
  {
    href: '/account',
    // t('common.labels.account')
    labelKey: 'common.labels.account'
  },
  {
    href: '/account/settings',
    // t('common.labels.settings')
    labelKey: 'common.labels.settings'
  }
]
