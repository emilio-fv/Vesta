import React, { useEffect, useState } from 'react';

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    }
    img.onerror = img.onabort = function() {
      reject(src)
    }
    img.src = src;
  })
}

const useImagePreloader = (images) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      console.log("Preloading images...");

      if (isCancelled) {
        return;
      }

      const promises = [];

      for (const image of images) {
        promises.push(preloadImage(image));
      }

      await Promise.all(promises);

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    }

    // Add delayed effect
    setTimeout(() => {
      effect();
    }, 3000);

    return () => {
      isCancelled = true;
    }
  }, [images]);

  return { imagesPreloaded }
}

export default useImagePreloader;