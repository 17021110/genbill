import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import NProgress from "nprogress/nprogress";
// import { getToken } from "@/utils";
// import { isMobile } from "@/utils/common";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to?.name === from?.name && to.params === from.params) {
      return {};
    }
    if (to?.path !== from?.path) {
      return {
        top: 0,
        left: 0,
      };
    }
  },
});

router.onError((error) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    window.location.reload();
  }
})

// Before each route evaluates...
router.beforeEach((routeTo: any, routeFrom, next) => {
  const title = routeTo?.meta?.title ?? "Home";
  document.title = "" + title;
  // If this isn't an initial page load...
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start();
  }
  return next();
  // const publicRoute = routeTo.meta.publicRoute;
  // const token = getToken()?.access_token;
  // if (!token && routeTo?.name !== "login") {
  //   redirectToLogin(next, publicRoute, routeTo);
  // } else {
  //   return next();
  // }
});

function redirectToLogin(next, publicRoute, routeTo) {
  // Pass the original route to the login component
  if (!publicRoute)
    return next({
      name: "login",
      replace: true,
      path: routeTo.path,
      query: { redirect: `${routeTo.fullPath}` },
    });
  return next();
}

router.beforeResolve(async (routeTo: any, routeFrom, next: any) => {
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve: any, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args: any[]) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              if (routeFrom.name === args[0].name) {
                // Complete the animation of the route progress bar.
                NProgress.done();
              }else(
                console.log('bug')
              )
              // Complete the redirect.
              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          // Otherwise, continue resolving the route.
          resolve();
        }
      });
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return;
  }

  // If we reach this point, continue resolving the route.
  next();
});

// When each route is finished evaluating...
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
