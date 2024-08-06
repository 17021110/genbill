import { createApp } from 'vue'
import App from './index.vue';

import router from "./router";
import vue3ToPdf from 'vue3-to-pdf'

import vClickOutside from "click-outside-vue3";
import {
  Modal,
  Button,
} from "ant-design-vue";
import "./assets/styles/tailwind.css";

// toast
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

// style
import "./style.scss";
// import "ant-design-vue/dist/antd.less";
import "vue3-toastify/dist/index.css";
import "nprogress/nprogress.css";



import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone  from "dayjs/plugin/timezone";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("en");
dayjs.locale("vi");

// create app
const app = createApp(App, {
});

// Register a global custom directive called `v-focus`
app.directive("focus", {
  // When the bound element is mounted into the DOM...
  mounted(el, binding) {
    // Focus the element
    if (binding.value) el.focus();
  },
});

app.use(Vue3Toastify, {
    autoClose: 3000,
    dangerouslyHTMLString: true,
  } as ToastContainerOptions);
  app.use(vue3ToPdf)
  app.use(router);
  app.use(vClickOutside);
  app.use(Modal);
  app.use(Button);
  // mount app
  app.mount("#app");
