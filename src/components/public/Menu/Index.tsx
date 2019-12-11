import React, { useEffect } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import routes, { routeConfig } from '@/router/index';
import './index.less';
const { SubMenu } = Menu;
const { Sider } = Layout;

interface moduleList {
  [propName: string]: routeConfig[];
}

export default () => {
  const location = useLocation();
  const history = useHistory();
  const moduleList: moduleList = {};
  //路由模块
  routes.map(route => {
    if (route.group) {
      if (!moduleList[route.group]) {
        moduleList[route.group] = [route];
      } else {
        moduleList[route.group].push(route);
      }
    }
    return route.title;
  });
  const clickHandle = ({ key }: any) => {
    history.push(key);
  };
  useEffect(() => {
    console.log('location', location);
  }, [location]);

  return (
    <Sider width={200} className='sidebar'>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        onClick={clickHandle}
        style={{ height: '100%', borderRight: 0 }}>
        {Object.entries(moduleList).map(([key, children], i) => {
          return (
            <SubMenu
              key={i}
              title={
                <span>
                  <Icon type='user' />
                  {key}
                </span>
              }>
              {children
                .filter(s => {
                  return s.isMenu;
                })
                .map((m, _index) => {
                  return (
                    <Menu.Item key={m.path as string}>{m.title}</Menu.Item>
                  );
                })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};
