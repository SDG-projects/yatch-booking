import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
// import Package from "./components/Package";
const Package = lazy(() => import("./components/Package"));

function App() {
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
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
