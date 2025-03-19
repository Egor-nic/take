import type { RouteConfig } from '@react-router/dev/routes';
import {
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('./FSD/shared/layouts/default.tsx', [
    index('./FSD/pages/Home/Home.tsx'),
  ]),
  // route("about", "./about.tsx"),

  // layout("./auth/layout.tsx", [
  //   route("login", "./auth/login.tsx"),
  //   route("register", "./auth/register.tsx"),
  // ]),

  // ...prefix("concerts", [
  //   index("./concerts/home.tsx"),
  //   route(":city", "./concerts/city.tsx"),
  //   route("trending", "./concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;
