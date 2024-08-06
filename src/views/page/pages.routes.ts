import { RouteRecordRaw } from "vue-router";
// import { isMobile } from "@/utils/common";
import PCRoutes from "./pc.routes"
// import MobileRoutes from "./mobile.routes";

export default (): RouteRecordRaw[] => {
  return PCRoutes
  // if (!isMobile()) {
  //   return PCRoutes;
  // } else {
  //   return MobileRoutes;
  // }
};
