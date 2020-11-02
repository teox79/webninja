import { Layout, Breadcrumb, Row, Col } from 'antd';
import Head from 'next/head'
import Header from './Header'

export default function Template({
  children,
  title = 'WebNinja'
}) {

  const { Content, Footer } = Layout;
  return (
    <Layout style={{height:"100vh"}}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <Content className="site-layout" style={{ padding: '0 50px 50px 50px', marginTop: "76px" }}>
          <Row>
            <Col span={16} offset={4}>
              <Breadcrumb style={{ margin: '16px 0',display:"none" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" >
                {children}
              </div>
            </Col>
          </Row>
        </Content>
        <Row style="">
            <Col span={24} >
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Col>
        </Row>
    </Layout>
  );
}

