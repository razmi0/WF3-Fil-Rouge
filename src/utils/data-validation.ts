// File containing functions for validating data
// path : src/utils/image-validation.ts
//--

import { Images, Image } from "../interface/index-types.js";

export function validateImagesArray(images: Images): Images {
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

/**
 * Removes falsy values from a value or array of values or object.
 * @template T
 * @param {T | T[]} data - The value or array or object of values to remove falsy values from.
 * @returns {T | T[] | false} The param with falsy values removed, or false if the input value is falsy or empty.
 */
export function removeFalsy(data: any | any[]): any | any[] | false {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === "string") {
        // @ts-ignore
        data[i] = data[i].trim();
      }
      if (data[i] === undefined || data[i] === null || data[i] === "") {
        data.splice(i, 1);
        i--;
      }
      if (typeof data[i] === "object" || Array.isArray(data[i])) {
        // @ts-ignore
        removeFalsy(data[i]);
      }
    }
    return data.length ? data : false;
  }

  if (typeof data === "object" && data !== null) {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "string") {
        // @ts-ignore
        data[key] = value.trim();
      }
      if (value === undefined || value === null || value === "") {
        // @ts-ignore
        delete data[key];
      }
      if (typeof value === "object" || Array.isArray(value)) {
        removeFalsy(value);
      }
    }
    return Object.keys(data).length ? data : false;
  }

  if (typeof data === "string") {
    // @ts-ignore
    data = data.trim();
  }

  return data || 0 ? data : false;
}

export function stringFormat(str: string | undefined): string | undefined {
  const regexp = /[\w]+[s]$/g;
  if (typeof str === "string") {
    if (!regexp.test(str)) {
      str = str?.charAt(0).toUpperCase() + str?.slice(1) + "s";
    }
  }
  return str ? str : undefined;
}
