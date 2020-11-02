import { useState } from 'react'
import { Layout, Typography, Button, Row, Col, Modal } from 'antd'
import Template from '../../../components/Template'
import CommonStep from '../../../components/common/Step'
import Steps from '../../../components/scratch-per-iniziare/interfaccia/Steps'

const Interfaccia = () => {
    const title = "Interfaccia";
    const subTitle = "La finestra di Scratch";
    const description = [];
    description.push("In questo primo tutorial Scratch ti spiegheremo in che modo funziona la sua interfaccia e come accedere ai comandi principali.");
    description.push("Per lanciare il programma fai clic sull’icona di Scratch che trovi sulla scrivania.");
    description.push("Visualizzerai una finestra come questa:");

    const { Content } = Layout;
    const { Title } = Typography;
    const [render, setRender] = useState(false);
    const [modal, setModal] = useState({
        title:"Tutorial Interfaccia",
        centered:true,
        visible:false,
        onCancel:() => openModal(false),
        width:"auto",
        footer: []
    })

    const renderDescription = () => {
        return description.map((desc, index) => {
            return (<p dangerouslySetInnerHTML={{ __html: desc }} key={`p_${index}`}/>)
        });
    }

    const openModal = (open) =>{
        const tmpModal = modal;
        tmpModal.visible = open;
        setModal(tmpModal);
        setRender(open);
    }

    const basePath = "/static/img/risorse/scratch_per_iniziare/interfaccia_di_scratch/";

    const steps = [
        {
            title: '',
            content: <Steps description={
                ["La parte evidenziata in rosso, in cui si trova il gatto, è lo <b>stage</b> o <b>palcoscenico</b>, dove verrà visualizzato il risultato dei nostri programmi."]
            } img={{src:`${basePath}1.png`, alt:"Lo Stage"}} 
            />,
        },
        {
            title: '',
            content: <Steps description={
                ["Sotto lo stage si trova la galleria dei personaggi/sprite, in questo momento contiene solamente il gatto."]
            } img={{src:`${basePath}2.png`, alt:"Lo Sprite"}} 
            />,
        },
        {
            title: '',
            content: <Steps description={
                ["Evidenziate in rosso l'elenco delle azioni che gli sprite possono compiere. Costituiscono i mattoncini elementari dei nostri dei nostri programmi.<br>Un programma sarà costituito dall'insieme di più mattoncini. "]
            } img={{src:`${basePath}3.png`, alt:"Le Azioni"}} 
            />,
        },
        {
            title: '',
            content: <Steps description={
                ["Il programma viene costruito trascinando i mattoncini nell'area programma. Mattoncini funzionalmente compatibili potrenno essere incastrati tra loro.<br>I colori dei mattoncini identificano le diverse tipologie di funzionalità."]
            } img={{src:`${basePath}4.png`, alt:"Area Programmazione"}} 
            />,
        },
    ];

    return (
        <Template title={title}>
            <Content className="site-layout">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="center gutter-row mt-40" span={24} >
                        <Title>{title}</Title>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24}>
                        <Title level={2}>{subTitle}</Title>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24}>
                        {renderDescription()}
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row center" span={24}>
                        <img src="/static/img/risorse/scratch_per_iniziare/interfaccia_di_scratch/0.png" alt="interfaccia" />
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="center gutter-row mt-40 buttonGroup" span={24} >
                        <Button type="primary" size="large" onClick={() => openModal(true)}>INIZIA TUTORIAL</Button>
                    </Col>
                </Row>
            </Content>
            <Modal
               title={modal.title}
               centered={modal.centered}
               visible={modal.visible}
               onCancel={modal.onCancel}
               width={modal.width}
               footer={modal.footer}
             >
                <CommonStep steps={steps}/>
            </Modal>
        </Template>
    )
}

export default Interfaccia;