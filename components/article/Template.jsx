import { Layout, Typography, Breadcrumb, Row, Col } from 'antd';

const { Title } = Typography;

export default function ArticleTemplate({
    children,
    title = '',
    description = '',
}) {

    const { Content, Footer } = Layout;
    return (
        <Layout className="articeTemplate">

            <Content className="site-layout">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="center gutter-row mt-40" span={24} >
                        <Title>{title}</Title>
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                        <p dangerouslySetInnerHTML={{__html: description}} /> 
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="mt-40">
                      {children}
                </Row>
            </Content>

        </Layout>
    );
}

