import { Img, Section } from '@react-email/components'

const Logo = () => {
  return (
    <Section className='mb-6'>
      <Img
        src='https://nelsonlai.dev/images/avatarandrea.png'
        alt="Andrea's logo"
        width='100'
        height='100'
        className='rounded-full'
      />
    </Section>
  )
}

export default Logo
