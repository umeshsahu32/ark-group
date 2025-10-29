import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  AboutUs,
  ArkAgro,
  ArkFoundation,
  Blogs,
  Careers,
  ContactUs,
  InfraProjects,
  Media,
  ResidentialProjects,
  NotFound,
  PrivacyPolicy,
  TermsConditions,
} from "./index";
import Layout from "../layout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/ark-agro", element: <ArkAgro /> },
      { path: "/ark-foundation", element: <ArkFoundation /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/infra-projects", element: <InfraProjects /> },
      { path: "/media", element: <Media /> },
      { path: "/residential-projects", element: <ResidentialProjects /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default AppRouter;
