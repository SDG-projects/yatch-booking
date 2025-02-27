import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import Loading from "../Loading";

function Image({ url, ...props }) {
  const [imageUrl, setImageUrl] = useState(null);
  const storage = getStorage();

  useEffect(() => {
    if (!url) {
      setImageUrl("default-image-url");
      return;
    }

    const fetchImage = async () => {
      try {
        const storageRef = ref(storage, url); // Ensure correct path
        const imgUrl = await getDownloadURL(storageRef);
        setImageUrl(imgUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
        setImageUrl("default-image-url");
      }
    };

    fetchImage();
  }, [url]);

  return !imageUrl ? <Loading /> : <img {...props} src={imageUrl} />;
}

export default Image;
