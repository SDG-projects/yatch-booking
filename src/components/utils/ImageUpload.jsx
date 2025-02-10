import React, { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const storage = getStorage();
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    setUploadError(null); // Reset error state

    const storageRef = ref(storage, `Products/${selectedImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        setUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);

          // Store the downloadURL in Firestore
          const docRef = addDoc(collection(db, "images"), {
            imageUrl: downloadURL,
          });
          console.log("Document written with ID:", docRef.id);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={!selectedImage}>
        Upload
      </button>

      {uploadProgress > 0 && !imageUrl && <div>Upload {uploadProgress}</div>}

      {uploadError && <div>Error uploading image: {uploadError.message}</div>}

      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
    </div>
  );
}

export default ImageUpload;
