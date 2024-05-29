import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img
      className='logo__img'
      src='/img/FlameLogoBaker.png'
      alt='Rostelecom Logo'
    />
  </Link>
)

export default Logo
