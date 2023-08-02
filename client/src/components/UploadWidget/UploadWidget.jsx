import { useEffect } from "react";
// import Button from '@mui/material/Button';

let cloudinary;
let widget;

const UploadWidget = ({ children, onUpload }) => {
  // const cloudinaryRef = useRef();
  // const widgetRef = useRef();

  useEffect(() => {
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }

    function onIdle() {
      if ( !widget ) {
        widget = createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
    // cloudinaryRef.current = window.cloudinary;
    // widgetRef.current = cloudinaryRef.current.createUploadWidget({
      // }, function(err, result) {
        //   console.log(result);
        // });
      }, []);
      
  function createWidget() {
    const options = {
      cloudName: 'dvugkhi4r',
      uploadPreset: ' vesta-app'
    }

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (error || result.event === 'success') {
        onUpload(error, result, widget);
      }
    })
  }

  function open() {
    if (!widget) {
      widget = createWidget();
    }

    widget && widget.open();
  }

  return (
    <>
      {children({ cloudinary, widget, open })}
    </>
  )
};

export default UploadWidget;