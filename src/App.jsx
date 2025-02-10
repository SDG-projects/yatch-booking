import { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { firebaseApp } from "./data/firebase";
import Layout from "./pages/Layout";
import Loading from "./components/Loading";
// const AdminPage = lazy(() => import("./pages/AdminPage"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
const Error404 = lazy(() => import("./pages/Errors"));
const Home = lazy(() => import("./pages/Home"));
// const Products = lazy(() => import("./pages/Products"));
// const CartPage = lazy(() => import("./pages/CartPage"));
const Packages = lazy(() => import("./pages/Packages"));
const CustomPackage = lazy(() => import("./pages/CustomPackage"));
const Services = lazy(() => import("./pages/Services"));
import ProductDetail from "./components/productdetail";
import ProductSection from "./components/Products";
import ContactPage from "./pages/Contact";
import About from "./pages/about";
import AIChat from "./components/AIChat";
import VIPRental from "./components/vipRental";
import AdminPanel from "./pages/AdminPanel";
import Login from "./components/Login";
import ServicePanel from "./components/AdminConponents/ServicePanel";
import Dashboard from "./components/AdminConponents/Dashboard";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import ProductPanel from "./components/AdminConponents/ProductPanel";
import ProductUpdate from "./components/AdminConponents/ProductUpdate";

// import Package from "./components/Package";
const Package = lazy(() => import("./components/Package"));

const PrivateRoute = ({ Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

function App() {
  firebaseApp;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ProductSection />} /> */}
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/home"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route path="/vipRental" element={<VIPRental />} />
            <Route
              path="/packages"
              element={
                <Suspense fallback={<Loading />}>
                  <Packages />
                </Suspense>
              }
            />
            <Route
              path="/services/:service"
              element={
                <Suspense fallback={<Loading />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<Loading />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/productdetail/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <ProductDetail />
                </Suspense>
              }
            />

            <Route
              path="/packages/:pack"
              element={
                <Suspense fallback={<Loading />}>
                  <Package details={true} />
                </Suspense>
              }
            />
            <Route
              path="index"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />

            {/* <Route
              path="/products"
              element={
                <Suspense fallback={<Loading />}>
                  <Products />
                </Suspense>
              }
            />

            <Route
              path="/about"
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<Loading />}>
                  <CartPage />
                </Suspense>
              }
            />
            <Route
              path="/rootUser"
              element={
                <Suspense fallback={<Loading />}>
                  <AdminPage />
                </Suspense>
              }
            /> */}
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <ContactPage />
                </Suspense>
              }
            />
            {/* <Route
              path="/admin"
              element={
                <Suspense fallback={<Loading />}>
                  <AdminPanel />
                </Suspense>
              }
            /> */}
            {/* <Route path="*" element={<Error404 />} /> */}
          </Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />

          <Route
            path="/admin"
            element={<PrivateRoute Component={AdminPanel} />}
          >
            <Route path="servicePanel" element={<ServicePanel />} />
            <Route path="productPanel" element={<ProductPanel />} />
            <Route path="productdetail/:id" element={<ProductUpdate />} />
            <Route path="addProduct" element={<ProductUpdate />} />

            <Route path="*" element={<Dashboard />} />
          </Route>
          {/* <Route path="/admin" element={<AdminPanel />}>
            <Route path="servicePanel" element={<ServicePanel />} />
            <Route path="" element={<Dashboard />} />
          </Route> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
