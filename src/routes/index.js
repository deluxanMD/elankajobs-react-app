import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import DemoRoutes from './DemoRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([DemoRoutes, LoginRoutes, MainRoutes]);
}
