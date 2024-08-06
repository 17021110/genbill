// import axios from "axios";
// import ConstantAPI from "./ConstantAPI";
// import { toast } from "vue3-toastify";
// import { getToken, setToken } from "@/utils/index";
// import { TIME_OUT_IMPORT, CLIENT_TYPE_LOGIN } from "@/constants/index";
// import { translate } from "@/languages/i18n";
// const httpClient = axios.create({
//   baseURL: import.meta.env.VITE_API_ENDPOINT,
//   timeout: TIME_OUT_IMPORT,
//   headers: {
//     "Content-Type": "application/json",
//     "x-company-id": getToken()?.company_id,
//     "X-User-Id": getToken()?.user_id,
//   },
// });

// httpClient.interceptors.request.use((config: any) => {
//   const { headers } = config;
//   if (/[\w]*\/oauth\/token/g.test(config.url)) {
//     config.headers = { ...headers, Authorization: import.meta.env.VITE_API_BASIC, "Content-Type": "application/x-www-form-urlencoded" };
//   } else {
//     config.headers = {
//       ...headers,
//       Authorization: `Bearer ${getToken()?.access_token}`,
//       "x-company-id": getToken()?.company_id,
//       "X-User-Id": getToken()?.user_id,
//     };
//   }
//   return config;
// });

// let refreshing = false;

// httpClient.interceptors.response.use(
//   (response) => response.data,
//   async (error) => {
//     if(!error.response){
//       console.log(error)
//       toast.error('Failed to load response data');
//       return
//     }
//     const config = error.config;
//     if (/[\w]*\/oauth\/token/g.test(config.url) || config.retry) {
//       return Promise.reject(error.response.data);
//     }
//     if (error.response) {
//       let errorMessage = error.response.data === null ? translate("errorWeb") : error.response.data.message;
//       switch (error.response.status) {
//         case 500:
//           toast.error(translate("error500"));
//           break;
//         case 499:
//             break;
//         case 404:
//           toast.error(translate("error404"));
//           break;
//         case 403:
//           toast.error(translate("error403"));
//           break;
//         case 401:
//           try {
//             if (refreshing && !config.retry) {
//               for (let i = 0; i < 10; i++) {
//                 await new Promise((r) => setTimeout(r, 100));
//                 if (!refreshing) break;
//               }
//               return httpClient(config);
//             }
//             config.retry = true;
//             refreshing = true;
//             const response = await importFile.callApi(
//               ConstantAPI.auth.LOGIN,
//               {
//                 grant_type: "refresh_token",
//                 refresh_token: getToken()?.refresh_token,
//                 client_type: CLIENT_TYPE_LOGIN,
//               },
//               null,
//               {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 Authorization: import.meta.env.VITE_API_BASIC,
//               },
//             );
//             setToken(JSON.stringify(response));
//             refreshing = false;
//             return httpClient(config);
//           } catch (_error) {
//             (Object.keys(window.localStorage) || []).forEach((key) => {
//               window.localStorage.removeItem(key);
//             });
//             window.location.href = "/login";
//             refreshing = false;
//             return Promise.reject(_error);
//           }
//         default:
//           toast.error(errorMessage);
//           break;
//       }
//     }
//     return Promise.reject(error.response ? error.response.data : error.response);
//   },
// );

// class importFile {
//   static callApi(api: any, data?: any, params?: any, headers?: any) {
//     return httpClient({
//       method: api.method,
//       url: api.url,
//       data,
//       params,
//       headers,
//     });
//   }

//   static upload(api: any, data?: any, config?: any) {
//     return httpClient({
//       method: api.method,
//       url: api.url,
//       data,
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       ...config,
//     });
//   }
// }

// export { importFile };
