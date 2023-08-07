// Imports
import Link from '@mui/material/Link';

const Logo = ({ sx, component, variant }) => {
  return (
    <Link
      component={component}
      to='/'
      underline='none'
      variant={variant}
      noWrap
      sx={sx}
    >
      VESTA
    </Link>
  )
};

export default Logo;