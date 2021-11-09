import Login from './childrens/Login';
import Register from './childrens/Register';
import Auth from './Auth';
import { PageRoute } from '../core/modules/custom-router-dom/router.interface';

const authRoutes: PageRoute[] = [
  {
    path: '/auth',
    element: Auth,
    children: [
      {
        path: '/',
        redirect: 'login'
      },
      {
        path: '/login',
        element: Login
      },
      {
        path: '/register',
        element: Register
      }
    ]
  }
];

export default authRoutes;
