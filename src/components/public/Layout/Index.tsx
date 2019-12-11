import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Menu from '../Menu/Index';
import './index.less';

const { Header, Content } = Layout;

const Index: React.FC = props => {
  console.log(props);
  return (
    <Layout>
      <Header className='header'>
        <p>国民健康</p>
      </Header>
      <Layout className='main-bottom'>
        <Menu></Menu>
        <Layout className='main-bottom-right'>
          <Breadcrumb className='breadcrumb'>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className='main-content'>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Index;
