// Imports
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const MenuLink = ({ text, sx, to }) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline='none'
      noWrap
      sx={sx}
    >
      {text}
    </Link>
  )
};

export default MenuLink;