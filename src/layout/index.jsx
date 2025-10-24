import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Loader from "../components/loader/Loader";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

const Layout = ()=>{
    return (
      <div>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    )
  }
  
  export default Layout;    