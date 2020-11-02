import { Layout, Typography, Button, Row, Col } from 'antd'
import Template from '../../components/Template'
import Link from 'next/link'

const ScratchPerIniziare = () => {
    const title = "Scratch per iniziare";
    const description = [];
    description.push("Ti proponiamo una <b>guida per usare Scratch</b> e cominciare a programmare in men che non si dica.");
    description.push("Partiremo proprio dalla base: nella prima risorsa L’interfaccia di Scratch, imparerai a lanciare il programma e a orientarti al suo interno.");
    description.push("Nella seconda guida a Scratch, Cominciare a muoversi, imparerai a usare i primi comandi per controllare i movimenti dei <b>personaggi</b>, gli sprites.");
    description.push("Infine, nella terza, Il labirinto, scriverai il tuo primo <b>programma</b> completo!");
    description.push("Buon lavoro e buon divertimento con la <b>guida Scratch!</b>");

    const { Content } = Layout;
    const { Title } = Typography;

    const renderDescription = () => {
        return description.map((desc,index) => {
            return (<p dangerouslySetInnerHTML={{ __html: desc }} key={`p_${index}`}/>)
        });
    }

    return (
        <Template title={title}>
            <Content className="site-layout">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="center gutter-row mt-40" span={24} >
                        <Title>{title}</Title>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                        {renderDescription()}
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="center gutter-row mt-40 buttonGroup" span={24} >
                    <Link href="/risorse/scratch-per-iniziare/interfaccia" >
                          <Button type="primary" size="large" href="/risorse/scratch-per-iniziare/interfaccia">INTERFACCIA</Button>
                    </Link>
                        <Button type="primary" size="large">PRIMI PASSI</Button>
                        <Button type="primary" size="large">PRIMO GIOCO</Button>
                    </Col>
                </Row>
            </Content>
        </Template>
    )
}

export default ScratchPerIniziare;