import { storage, db } from "/src/data/firebase"; // Firebase config
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Services from "/src/data/Services"; // Import services data

export const uploadServices = async () => {
  try {
    console.log("Starting service upload...");

    // Get existing services to prevent duplicate uploads
    const existingDocs = await getDocs(collection(db, "services"));
    const existingNames = existingDocs.docs.map((doc) => doc.data().name);

    for (const service of Services) {
      if (existingNames.includes(service.name)) {
        console.log(`Skipping ${service.name} (already uploaded)`);
        continue;
      }

      console.log(`Uploading: ${service.name}`);

      // Upload first image
      const response1 = await fetch(service.img);
      const blob1 = await response1.blob();
      const storageRef1 = ref(
        storage,
        `services/${service.name.replace(/\s+/g, "_")}_1.jpg`
      );
      await uploadBytes(storageRef1, blob1);
      const imageUrl1 = await getDownloadURL(storageRef1);

      // Upload second image
      const response2 = await fetch(service.img2);
      const blob2 = await response2.blob();
      const storageRef2 = ref(
        storage,
        `services/${service.name.replace(/\s+/g, "_")}_2.jpg`
      );
      await uploadBytes(storageRef2, blob2);
      const imageUrl2 = await getDownloadURL(storageRef2);

      // Save service data in Firestore
      await addDoc(collection(db, "services"), {
        name: service.name,
        heading: service.heading,
        description: service.description,
        weoffer1: service.weoffer1,
        weoffer2: service.weoffer2,
        weoffer3: service.weoffer3,
        weoffer4: service.weoffer4,
        img: imageUrl1,
        img2: imageUrl2,
        price: service.price,
        rating: service.info.rating,
      });

      console.log(`${service.name} uploaded successfully!`);
    }
  } catch (error) {
    console.error("Error uploading services:", error);
  }
};

// 🔥 **Automatically Start Uploading Services When the App Starts**
// uploadServices();
