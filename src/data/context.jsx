import { createContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    offers: [],
    products: [],
    services: [],
  });
  const getProduct = (id) => {
    return data.products.find((product) => product.id === id);
  };
  const getVipProducts = () => {
    return data.products.filter((product) => product.isVIP);
  };
  useEffect(() => {
    const db = getFirestore();

    const fetchData = async (collectionName) => {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(data);
      setData((prevState) => ({
        ...prevState,
        [collectionName]: data,
      }));
    };

    fetchData("offers");
    fetchData("products");
    fetchData("services");
  }, []);

  return (
    <DataContext.Provider value={{ ...data, getProduct, getVipProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
