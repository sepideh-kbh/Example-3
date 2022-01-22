import React from "react";
import { Layout } from 'antd';
import MainHeader from "../components/header";
import TabsContent from "../components/tabs";

const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header>
        <MainHeader />
      </Layout.Header>
      <Layout.Content>
        <div className="site-layout-content">
          <TabsContent />
        </div>
      </Layout.Content>
    </Layout>
  )
}
export default MainLayout;