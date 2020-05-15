import React from "react";
import "./App.css";
import { Layout, Breadcrumb } from "antd";
import Manager from "./components/Manager";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", width: "100%" }}>
        <div className="head">人员信息管理</div>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Manager</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Manager />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
