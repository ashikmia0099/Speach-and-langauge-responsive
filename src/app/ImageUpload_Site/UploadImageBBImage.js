// utils/uploadToImgBB.js

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const uploadToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data?.data?.url; // returns the image URL
    } catch (err) {
        console.error("Image upload failed:", err);
        return null;
    }
};

export default uploadToImgBB;