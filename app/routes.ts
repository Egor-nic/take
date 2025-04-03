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

  layout('./FSD/shared/layouts/product.tsx', [
    route('product', './FSD/pages/Search/Search.tsx'),
    route('product/:uuid', './FSD/pages/Product/Product.tsx'),
    route('pay/:uuid', './FSD/pages/Pay/Pay.tsx'),

  ]),

  // ...prefix("concerts", [
  //   index("./concerts/home.tsx"),
  //   route(":city", "./concerts/city.tsx"),
  //   route("trending", "./concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;
