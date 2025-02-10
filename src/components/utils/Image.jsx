import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Loading from "../Loading";

function Image({ url, ...props }) {
  const [imageUrl, setImageUrl] = useState(null);
  const storage = getStorage();
  useEffect(() => {
    const fetchImage = async () => {
      const storageRef = ref(storage, url);
      const imgUrl = await getDownloadURL(storageRef);
      setImageUrl(imgUrl);
    };

    fetchImage().catch(() => setImageUrl("null"));
  }, []);
  return !imageUrl ? <Loading /> : <img {...props} src={imageUrl} />;
}

export default Image;
