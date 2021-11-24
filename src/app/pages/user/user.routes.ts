import User from './User';
import UserProfile from './childrens/UserProfile';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const userRoutes: PageRoute[] = [
  {
    path: '/user',
    element: User,
    children: [
      {
        path: '/',
        element: UserProfile
      }
    ]
  },
];

export default userRoutes;
