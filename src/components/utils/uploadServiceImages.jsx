import { storage } from "/src/data/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Function to upload image to Firebase Storage and return the download URL
export const uploadServiceImages = async (image) => {
  if (!image) {
    throw new Error("No image selected");
  }

  try {
    // Reference to Firebase Storage (services folder)
    const storageRef = ref(storage, `services/${image.name}`);
    const uploadTask = await uploadBytesResumable(storageRef, image);

    // Get the download URL of the uploaded image
    return await getDownloadURL(uploadTask.ref);
  } catch (error) {
    console.error("Image upload error:", error);
    throw new Error("Image upload failed");
  }
};
