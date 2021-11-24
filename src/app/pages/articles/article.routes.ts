import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import CreateArticle from './childrens/CreateArticle';

import ArticleDetail from './childrens/ArticleDetail';
import ArticleList from './childrens/ArticleList';
import Articles from './Articles';

const articleRoutes: PageRoute[] = [
  {
    path: '/',
    element: Articles,
    //isProtected: true,
    children: [
      {
        path: '/',
        element: ArticleList
      },
      {
        path: '/articles/:id',
        element: ArticleDetail
      },
      {
        path: '/articles/new',
        element: CreateArticle
      },
      {
        path: '/articles/:id/edit',
        element: CreateArticle
      }
    ]
  }
];

export default articleRoutes;
