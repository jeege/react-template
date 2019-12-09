import React from 'react';
import { Button } from 'antd';
import '../../App.css';

const Index: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button
          type='primary'
          target='_blank'
          href='https://reactjs.org'>
          Learn React
        </Button>
      </header>
    </div>
  );
};

export default Index;