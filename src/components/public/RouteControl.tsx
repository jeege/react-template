import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routeConfig } from '@/router/index';
import Layout from '@/components/public/Layout/Index';
interface RouterControlProps {
  routes: routeConfig[];
  location?: any;
}

const Index = (props: RouterControlProps) => {
  console.log('router--------', props);
  const { location, routes } = props;
  const { pathname } = location;
  const targetRoute = routes.find((r: routeConfig) => r.path === pathname);
  if (targetRoute) {
    //真正的页面组件
    const Component = targetRoute.component ? (
      <targetRoute.component></targetRoute.component>
    ) : null;
    return (
      <Route
        exact={targetRoute.exact}
        path={pathname}
        children={
          targetRoute.useLayout ? <Layout>{Component}</Layout> : Component
        }></Route>
    );
  } else {
    return <Redirect to='/login' />;
  }
};

export default Index;
