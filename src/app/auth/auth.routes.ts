import Login from './childrens/Login';
import Register from './childrens/Register';
import Auth from './Auth';
import GoogleLoginResolver from './partials/GoogleLoginResolver';
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
      },
      {
        path: '/googleloginresolver',
        element: GoogleLoginResolver
      }
    ]
  }
];

export default authRoutes;
