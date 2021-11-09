import Home from './Home';
import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const homeRoutes: PageRoute[] = [
  {
    path: '/',
    element: Home
  }
];

export default homeRoutes;
