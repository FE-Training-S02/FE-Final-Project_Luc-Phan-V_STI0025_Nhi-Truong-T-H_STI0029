import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import CreateArticle from './childrens/CreateArticle';

import ArticleDetail from './childrens/ArticleDetail';
import ArticleList from './childrens/ArticleList';
import Articles from './Articles';
import { PageNotFound } from './partials/PageNotFound';

const articleRoutes: PageRoute[] = [
  {
    path: '/articles',
    element: Articles,
    children: [
      {
        path: '/',
        element: ArticleList
      },
      {
        path: '/:id',
        element: ArticleDetail
      },
      {
        path: '/new',
        element: CreateArticle,
        isProtected: true
      },
      {
        path: '/:id/edit',
        element: CreateArticle,
        isProtected: true
      },
      {
        path: '/page-not-found',
        element: PageNotFound,
      }
    ]
  }
];

export default articleRoutes;
