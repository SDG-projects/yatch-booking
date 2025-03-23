import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";
import { app } from "/src/data/firebase"; // Adjust path if needed
import services from "/src/data/Services"; // Adjust path if needed

const storage = getStorage(app);
const db = getFirestore(app);

export const uploadServiceImages = async () => {
  console.log("Checking for existing services in Firestore...");

  try {
    // Get existing services to prevent duplicates
    const existingDocs = await getDocs(collection(db, "services"));
    const existingNames = existingDocs.docs.map((doc) => doc.data().name);

    for (const service of services) {
      if (existingNames.includes(service.name)) {
        console.log(`Skipping ${service.name} (Already exists)`);
        continue;
      }

      console.log(`Uploading ${service.name} images...`);

      // Upload first image
      const img1Ref = ref(storage, `Services/${service.img.split("/").pop()}`);
      const img1Upload = await uploadBytesResumable(img1Ref, await (await fetch(service.img)).blob());
      const img1URL = await getDownloadURL(img1Upload.ref);

      // Upload second image
      const img2Ref = ref(storage, `Services/${service.img2.split("/").pop()}`);
      const img2Upload = await uploadBytesResumable(img2Ref, await (await fetch(service.img2)).blob());
      const img2URL = await getDownloadURL(img2Upload.ref);

      // Store service details in Firestore
      await setDoc(doc(db, "services", service.name), {
        name: service.name,
        heading: service.heading,
        description: service.description,
        weoffer1: service.weoffer1,
        weoffer2: service.weoffer2,
        weoffer3: service.weoffer3,
        weoffer4: service.weoffer4,
        rating: service.info.rating,
        price: service.price,
        img: img1URL,
        img2: img2URL,
      });

      console.log(`Uploaded ${service.name} successfully.`);
    }

    console.log("All services uploaded successfully.");
  } catch (error) {
    console.error("Error uploading services:", error);
  }
};
