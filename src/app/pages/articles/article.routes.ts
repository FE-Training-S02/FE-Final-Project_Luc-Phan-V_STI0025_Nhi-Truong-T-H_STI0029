import ArticleDetail from './childrens/ArticleDetail';
import ArticleList from './childrens/ArticleList';
import Articles from './Articles';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const articleRoutes: PageRoute[] = [
  {
    path: '/articles',
    element: Articles,
    isProtected: true,
    children: [
      {
        path: '/',
        element: ArticleList
      },
      {
        path: '/:id',
        element: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;
