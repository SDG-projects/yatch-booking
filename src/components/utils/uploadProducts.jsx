import { useEffect, useState } from "react";
import { db, storage } from "/src/data/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Products } from "/src/data/Services";

const UploadProducts = () => {
  const [uploadStatus, setUploadStatus] = useState("Starting upload process...");

  useEffect(() => {
    const uploadData = async () => {
      try {
        console.log(`📢 Total Products in Services.js: ${Products.length}`);

        setUploadStatus("Fetching existing products...");
        console.log("📡 Fetching existing products from Firestore...");

        const querySnapshot = await getDocs(collection(db, "products"));
        const existingProducts = new Set();
        querySnapshot.forEach((doc) => {
          existingProducts.add(doc.id);
        });

        console.log(`✅ Existing products in Firestore: ${existingProducts.size}`);

        let uploadedCount = 0;
        let failedCount = 0;

        for (const product of Products) {
          console.log(`🔎 Checking product: ${product.name} (ID: ${product.id})`);

          if (existingProducts.has(product.id)) {
            console.log(`⏭️ Skipping ${product.id} - Already exists.`);
            continue;
          }

          if (!product.images || product.images.length === 0) {
            console.warn(`⚠️ No images found for ${product.name}`);
            failedCount++;
            continue;
          }

          setUploadStatus(`Uploading ${product.name}...`);
          console.log(`📤 Uploading ${product.name}...`);

          const uploadedImageUrls = [];

          for (let i = 0; i < product.images.length; i++) {
            const imagePath = product.images[i];
            const imageRef = ref(storage, `Products/${product.id}_img${i}.jpg`);

            try {
              const response = await fetch(imagePath);
              const blob = await response.blob();
              await uploadBytes(imageRef, blob);
              const imageUrl = await getDownloadURL(imageRef);
              uploadedImageUrls.push(imageUrl);
              console.log(`✅ Uploaded image ${i + 1} for ${product.name}`);
            } catch (error) {
              console.error(`❌ Image upload failed for ${product.name}:`, error);
              failedCount++;
            }
          }

          try {
            await setDoc(doc(db, "products", product.id.toString()), {
              name: product.name,
              price: product.price,
              vip: product.isVIP || false,
              feet: product.feet,
              capacity: product.capacity,
              complementary: product.Complementary,
              images: uploadedImageUrls, // Store all image URLs
            });

            console.log(`🎉 Successfully uploaded ${product.name}`);
            uploadedCount++;
          } catch (error) {
            console.error(`🚨 Failed to upload ${product.name} to Firestore:`, error);
            failedCount++;
          }
        }

        console.log(`✅ Uploaded ${uploadedCount} products, ❌ Failed ${failedCount}`);
        setUploadStatus(`${uploadedCount} products uploaded successfully. ${failedCount} failed.`);
      } catch (error) {
        console.error("🚨 Upload failed:", error);
        setUploadStatus("Upload failed. Check console.");
      }
    };

    uploadData();
  }, []);

  return (
    <div>
      <h2>Product Upload Status</h2>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default UploadProducts;
