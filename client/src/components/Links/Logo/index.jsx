// Imports
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const LogoLink = ({ sx, variant }) => {
  return (
    <Link
      component={RouterLink}
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

export default LogoLink;