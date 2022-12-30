
import React from "react";
import EmailForm from "./components/Form";
import { Layout } from 'antd';
import { Col, Row } from 'antd';
import AppCard from "./components/Card";

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <>
      <Content>
        <AppCard />
      </Content>
    </>
  );
}

export default App;
