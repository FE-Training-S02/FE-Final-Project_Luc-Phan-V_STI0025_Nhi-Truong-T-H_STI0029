import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import CreateArticle from './childrens/CreateArticle';

import ArticleDetail from './childrens/ArticleDetail';
import ArticleList from './childrens/ArticleList';
import Articles from './Articles';

const articleRoutes: PageRoute[] = [
  {
    path: '/articles',
    element: Articles,
    //isProtected: true,
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
        element: CreateArticle
      },
      {
        path: '/:id/edit',
        element: CreateArticle
      }
    ]
  }
];

export default articleRoutes;
