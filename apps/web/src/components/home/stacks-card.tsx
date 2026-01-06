'use client'

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiCanva,
  SiFigma,
  SiSketchup,
  SiNotion,
  SiCoreldraw,
  SiKrita,
  SiRoblox,
  SiCisco
} from '@icons-pack/react-simple-icons'
import { Marquee } from '@repo/ui/components/marquee'
import { ZapIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

const StacksCard = () => {
  const t = useTranslations()

  return (
    <div className='flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-4.5' />
        <h2 className='text-sm'>{t('homepage.about-me.stacks')}</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiHtml5 className='size-10' />
        <SiCss className='size-10' />
        <SiJavascript className='size-10' />
        <SiCanva className='size-10' />
        <SiSketchup className='size-10' />
        <SiNotion className='size-10' />
        <SiTypescript className='size-10' />
        <SiFigma className='size-10' />
        <SiTailwindcss className='size-10' />
        <SiNextdotjs className='size-10' />
        <SiReact className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiCoreldraw className='size-10' />
        <SiKrita className='size-10' />
        <SiNodedotjs className='size-10' />
        <SiRoblox className='size-10' />
        <SiCisco className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
