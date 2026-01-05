type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>

const Logo = (props: LogoProps) => {
  return (
    <img src="/faviconandrea.svg" alt="Logo" width={100} height={100} {...props} />
  )
}

export { Logo }
