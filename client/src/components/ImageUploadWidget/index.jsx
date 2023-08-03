import { Button } from "@mui/material";
import { openUploadWidget } from "../../utils/CloudinaryService";

const ImageUploadWidget = ({ cloud_name, upload_preset, onImageUpload }) => {
  const uploadImageWidget = () => {
    console.log(cloud_name, upload_preset); // props check
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloud_name,
        uploadPreset: upload_preset, 
        // sources: ['local', "url", 'camera']
      },
      function (error, result) {
        if (error) {
          console.log(error);
        }
        if (!error && result.event === 'success') {
          console.log(result); // result check
          onImageUpload(result.info.secure_url) // pass image upload data
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <Button onClick={uploadImageWidget}>
      Upload Image
    </Button>
  )
}

export default ImageUploadWidget;