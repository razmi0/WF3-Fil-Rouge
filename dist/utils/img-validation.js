// File containing functions for validating images array
// path : src/utils/image-validation.ts
//--
function validateImagesArray(images) {
    const testedImages = imagesArrayEmptyTest(images);
    return imageFalsyTest(testedImages);
}
function getDefaultImage() {
    return {
        src: "./public/assets/images/logo/logo.jpg",
        alt: "default image",
    };
}
function imagesArrayEmptyTest(images) {
    if (images.length === 0) {
        return [getDefaultImage()];
    }
    return images;
}
function imageFalsyTest(images) {
    return images.map((image) => {
        if (!image) {
            return getDefaultImage();
        }
        return image;
    });
}
export { validateImagesArray };
//# sourceMappingURL=img-validation.js.map