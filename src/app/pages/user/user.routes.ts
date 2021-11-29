import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import ChangePassword from './childrens/ChangePassword';
import Profile from './childrens/Profile';
import User from './User';
const userRoutes: PageRoute[] = [
  {
    path: '/users',
    element: User,
    children: [
      {
        path: '/',
        element: Profile
      },
      {
        path: '/profile',
        element: Profile
      },
      {
        path: '/:id',
        element: Profile
      },
      {
        path: '/change-password',
        element: ChangePassword
      }
    ]
  }
];

export default userRoutes;
