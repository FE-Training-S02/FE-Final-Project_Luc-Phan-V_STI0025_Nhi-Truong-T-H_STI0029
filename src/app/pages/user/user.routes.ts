import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import User from './User';
import Profile from './childrens/Profile';
const userRoutes: PageRoute[] = [
  {
    path: '/user',
    element: Profile,
    children: [
      {
        path: '/profile',
        element: Profile
      }
    ]
  }
];

export default userRoutes;
