import authRoutes from './auth/auth.routes';
import pageRoutes from './pages/page.routes';
import { PageRoute } from './core/modules/custom-router-dom/router.interface';

const appRoutes: PageRoute[] = [
  ...authRoutes,
  ...pageRoutes
];

export default appRoutes;
