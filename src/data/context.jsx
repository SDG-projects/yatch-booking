import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    offers: [],
    products: [],
    services: [],
  });

  useEffect(() => {
    const db = getFirestore();

    const fetchData = async (collectionName) => {
      try {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (collectionName === "products") {
          fetchedData.sort((a, b) => (a.position || 999) - (b.position || 999));
        }

        setData((prevState) => ({
          ...prevState,
          [collectionName]: fetchedData,
        }));
      } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
      }
    };

    fetchData("offers");
    fetchData("products");
    fetchData("services");
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
