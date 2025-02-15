import React, { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
// import { storage } from "./firebaseConfig"; // Import your Firebase storage instance

const ImageUpload = ({ urlToUpload, afterUpload }) => {
  const [images, setImages] = useState([]);
  const imgTag = useRef();
  const [uploadProgress, setUploadProgress] = useState({});
  const storage = getStorage();
  const handleImageChange = (e) => {
    // const files = Array.from(e.target.files);
    // setImages((prevImages) => [...prevImages, ...files]);
    setImages([...e.target.files]);
  };
  useEffect(() => {
    console.log(images);
  }, [images]);

  const handleUpload = async () => {
    for (const image of images) {
      const storageRef = ref(storage, urlToUpload + Date.now().toString());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [image.name]: progress,
          }));
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        () => {
          console.log(uploadTask.snapshot);
          // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //   console.log("File available at", downloadURL,);
          //   // Store the downloadURL in your database or use it as needed
          // });

          afterUpload(uploadTask);
        }
      );
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => {
          handleImageChange(e);
        }}
        ref={imgTag}
      />
      <button onClick={handleUpload} disabled={images.length === 0}>
        Upload Images
      </button>
      <ul>
        {images.map((image) => (
          <li key={image.name}>
            {image.name} -{" "}
            {uploadProgress[image.name]
              ? `${uploadProgress[image.name]}%`
              : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUpload;
