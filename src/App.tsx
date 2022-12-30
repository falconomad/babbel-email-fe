
import React from "react";
import { Layout } from 'antd';
import AppCard from "./components/Card";
import { AppTitle } from "./utils/contants";
import { ImageSource } from "./utils/urls";

const { Header, Content } = Layout;

function App() {


  return (
    <>
      <Header className="headerClass">
        <img
          alt="babbel-logo"
          id="babbel-logo"
          src={ImageSource.babbelLogo}
          style={{ width: '200px', position: 'relative' }}
        />
        <span id="title-text">
          {AppTitle}
        </span>
      </Header>
      <Content style={{ background: 'rgb(255 0 0 / 16%)' }}>
        <AppCard />
      </Content>
    </>
  );
}

export default App;
