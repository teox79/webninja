import { Layout, Row, Col, } from 'antd'


export default function Steps({
    description = [" "],
    img={src: "",
         alt: ""}
}) {
    const { Content } = Layout;

    const renderDescription = () => {
        return description.map((desc) => {
            return (<p dangerouslySetInnerHTML={{ __html: desc }} />)
        });
    }

    return (
        <Content className="site-layout">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                    {renderDescription()}
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row center" span={24}>
                    <img src={img.src} alt={img.alt} />
                </Col>
            </Row>
        </Content>
    )
}