
import React from "react";
import { Layout } from 'antd';
import AppCard from "./components/Card";
import { AppTitle } from "./utils/contants";

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <>
      <Header className="headerClass">
        <img
          alt="babbel-logo"
          id="babbel-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Babbel_logo.svg"
          style={{ width: '200px', position: 'relative' }}
        />
        <span id="title-text" style={{ color: '#ff7913', opacity: 0, padding: '1rem' }}>
          {AppTitle}
        </span>
      </Header>
      <Content>
        <AppCard />
      </Content>
    </>
  );
}

export default App;
