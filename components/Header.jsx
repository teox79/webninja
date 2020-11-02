import { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import Link from 'next/link'
export default Header => {

    const [tab,setTab] = useState("0");

    const handleClick = (e) => {
        setTab(e.key);
      };

    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', boxShadow: "0 3px 3px rgba(0,0,0,.1)" }}>
            <Row>
                <Col span={16} offset={4}>
                    <Link href="/">
                        <div className="logo" />
                    </Link>
                    <Menu theme="light" mode="horizontal" onClick={(e) => handleClick(e)} selectedKeys={[tab]}>
                        <Menu.Item key="1">
                            <Link href="/risorse" >
                                <a>Risorse</a>
                            </Link>
                        </Menu.Item>
                        {/*
                        <Menu.Item key="2" >nav 2</Menu.Item>
                        <Menu.Item key="3" >nav 3</Menu.Item>
                        */}
                    </Menu>
                </Col>
            </Row >
        </Layout.Header >
    )
}