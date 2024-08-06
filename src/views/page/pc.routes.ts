import LayoutDefaut from "@/components/layout/defaultLayout/index.vue";

export default [
  {
    path: "/",
    name: "Trang chủ",
    component: () => import("./dashboard/index.vue"),
    meta: {
      title: "homePage",
      layout: LayoutDefaut,
    },
  },
  // {
  //   path: "/bill/:id",
  //   name: "Hóa đơn",
  //   component: () => import("./dashboard/index.vue"),
  //   meta: {
  //     title: "Hóa đơn",
  //     layout: LayoutDefaut,
  //   },
  // },
];
