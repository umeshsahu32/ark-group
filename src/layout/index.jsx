import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Loader from "../components/loader/Loader";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ScrollTop from "./scroll-top/ScrollTop";
import GoToTop from "./go-to-top/GoToTop";

const Layout = ()=>{
    return (
      <div>
        <ScrollTop />
        <ErrorBoundary>
          <Suspense fallback={
            <div className="fixed inset-0 bg-linear-to-br from-primary-200 to-secondary-200 flex items-center justify-center z-50">
              <Loader />
            </div>
          }>
            <Header />
            <Outlet />
            <Footer />
          </Suspense>
        </ErrorBoundary>
        <GoToTop />
      </div>
    )
  }
  
  export default Layout;    