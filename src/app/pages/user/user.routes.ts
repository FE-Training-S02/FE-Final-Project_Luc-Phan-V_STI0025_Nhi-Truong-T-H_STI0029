import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
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
