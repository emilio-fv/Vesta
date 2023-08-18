import { Button } from "@mui/material";
import { openUploadWidget } from "../../utils/CloudinaryService";

const ImageUploadWidget = ({ cloud_name, upload_preset, onImageUpload }) => {
  const uploadImageWidget = () => {
    console.log(cloud_name, upload_preset); // props check
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloud_name,
        uploadPreset: upload_preset, 
      },
      function (error, result) {
        if (error) {
          console.log(error);
        }
        if (!error && result.event === 'success') {
          onImageUpload(result.info.secure_url)
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <Button 
      sx={{ 
        '&:hover': {
          backgroundColor: 'white',
          textDecoration: 'underline'
        }
      }} 
      onClick={uploadImageWidget}
    >
      Upload Image
    </Button>
  )
}

export default ImageUploadWidget;