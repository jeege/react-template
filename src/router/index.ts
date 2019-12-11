import Login from '@/pages/Login/Index';
import userRoutes from './routes/user';

export interface routeConfig {
  path?: string;
  component?: React.ComponentType | React.JSXElementConstructor<any>;
  children?: routeConfig[];
  [propName: string]: any;
}

const routes:routeConfig[] = [
  ...userRoutes,
  {
    path: '/login',
    component: Login
  }
];

export default routes;
