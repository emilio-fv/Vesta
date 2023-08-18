import { Button } from "@mui/material";

const CategoryButton = ({ text, handleClick, sx }) => {
  return (
    <Button
      onClick={handleClick}
      sx={sx}
    >
      {text}
    </Button>
  )
};

export default CategoryButton;