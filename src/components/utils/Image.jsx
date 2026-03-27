import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import Loading from "../Loading";

function Image({ url, ...props }) {
  const [imageUrl, setImageUrl] = useState(null);
  const storage = getStorage();

  useEffect(() => {
    const fetchImage = async () => {
      if (!url) {
        setImageUrl(null);
        return;
      }

      const storageRef = ref(storage, url);
      try {
        const fetchedUrl = await getDownloadURL(storageRef);
        setImageUrl(fetchedUrl);
      } catch {
        setImageUrl(null);
      }
    };

    fetchImage();
  }, [url]);

  return !imageUrl ? <Loading /> : <img {...props} src={imageUrl} />;
}

export default Image;
