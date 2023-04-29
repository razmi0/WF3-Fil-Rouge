// File containing functions for validating images array
// path : src/utils/image-validation.ts
//--

import { Images, Image } from "../interface/index-types.js";

function validateImagesArray(images: Images): Images {
  const testedImages = imagesArrayEmptyTest(images);
  return imageFalsyTest(testedImages);
}

function getDefaultImage(): Image {
  return {
    src: "./public/assets/images/logo/logo.jpg",
    alt: "default image",
  };
}

function imagesArrayEmptyTest(images: Images): Images {
  if (images.length === 0) {
    return [getDefaultImage()];
  }
  return images;
}

function imageFalsyTest(images: Images): Images {
  return images.map((image) => {
    if (!image) {
      return getDefaultImage();
    }
    return image;
  });
}

export { validateImagesArray };
