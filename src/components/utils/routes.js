import { lazy } from 'react';

const routesPath = {
  homePage: '/',
  moviesPage: '/movies',
  movieDetailsPage: '/movies/:movieId',
  cast: '/movies/:movieId/cast',
  reviews: '/movies/:movieId/reviews',
};

const routes = [
  {
    path: routesPath.homePage,
    exact: true,
    component: lazy(() => import('../../components/pages/HomePage/HomePage')),
  },
  {
    path: routesPath.moviesPage,
    exact: true,
    component: lazy(() =>
      import('../../components/pages/MoviesPage/MoviesPage'),
    ),
  },
  {
    path: routesPath.movieDetailsPage,
    exact: false,
    component: lazy(() =>
      import('../../components/pages/MovieDetailsPage/MovieDetailsPage'),
    ),
  },
  // {
  //   path: routesPath.cast,
  //   exact: false,
  //   component: lazy(() =>
  //     import('../../components/pages/MovieDetailsPage/Cast/Cast'),
  //   ),
  // },
  // {
  //   path: routesPath.reviews,
  //   exact: false,
  //   component: lazy(() =>
  //     import('../../components/pages/MovieDetailsPage/Reviews/Reviews'),
  //   ),
  // },
];

export { routes, routesPath };
