import { lazy } from "react";

export const Home = lazy(() => import("../pages/home/Home"));
export const AboutUs = lazy(() => import("../pages/about-us/AboutUs"));
export const ArkAgro = lazy(() => import("../pages/ark-agro/ArkAgro"));
export const ArkFoundation = lazy(() =>
  import("../pages/ark-foundation/ArkFoundation")
);
export const Blogs = lazy(() => import("../pages/blogs/Blogs"));
export const Careers = lazy(() => import("../pages/careers/Careers"));
export const ContactUs = lazy(() => import("../pages/contact-us/ContactUs"));
export const InfraProjects = lazy(() =>
  import("../pages/infra-projects/InfraProjects")
);
export const Media = lazy(() => import("../pages/media/Media"));
export const ResidentialProjects = lazy(() =>
  import("../pages/residential-projects/ResidentialProjects")
);
export const NotFound = lazy(() => import("../pages/not-found/NotFound"));
export const PrivacyPolicy = lazy(() => import("../pages/privacy-policy/PrivacyPolicy"));
export const TermsConditions = lazy(() => import("../pages/terms-conditions/TermsConditions"));
