import loadable from "@loadable/component";

export const LandingPage = loadable(
  () => import("./index"),
  (module) => module.LandingPage
);
