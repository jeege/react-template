import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Menu from './Menu/Index'
const { Header, Content } = Layout;

const Index: React.FC = () => {
  return (
    <Layout>
      <Header className='header'>
        <p style={{color: '#fff', fontSize: '18px'}} >react + antd + typescrpt + react-router + redux</p>
      </Header>
      <Layout style={{ height: 'calc(100vh - 64px)'}}>
        <Menu></Menu>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0
            }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Index;
