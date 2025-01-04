import { lazy, Suspense, useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Loading from "./components/Loading";
import ProductSection from "./components/Products";
import HeroSection from './components/HeroSection'; 
import About from "./pages/about";
const Error404 = lazy(() => import("./pages/Errors"));
const Home = lazy(() => import("./pages/Home"));
const Packages = lazy(() => import("./pages/Packages"));
const CustomPackage = lazy(() => import("./pages/CustomPackage"));
const Services = lazy(() => import("./pages/Services"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" indexelement={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }/>
            <Route path="/home" element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
              <Route path="/about" element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            
            <Route
              path="/Products"
              element={
                <Suspense fallback={<Loading />}>
                  <ProductSection />
                </Suspense>
              }
            />
            <Route path="/" element={<Suspense fallback={<Loading />}>
            <HeroSection />
            </Suspense>} /> 
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
              path="/packages/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <Packages />
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
            <Route
              path="/customPack"
              element={
                <Suspense fallback={<Loading />}>
                  <CustomPackage />
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
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
