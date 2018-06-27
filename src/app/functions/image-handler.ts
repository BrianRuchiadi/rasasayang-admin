export const previewSingleImageThumbnail = (
    thumbnailElement,
    thumbnailPreviewElement,
    imageFile
) => {
    const fileReader = new FileReader();

    fileReader.onloadend = (readerEvent: any) => {
        thumbnailElement.src = readerEvent.target.result;
        thumbnailPreviewElement.style.display = 'block';
    };

    fileReader.readAsDataURL(imageFile);
};

export const removeSingleImageThumbnail = (
    thumbnailElement,
    thumbnailPreviewElement
) => {
    thumbnailElement.src = null;
    thumbnailPreviewElement.style.display = 'none';
};

