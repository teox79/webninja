import { Layout, Menu, Row, Col } from 'antd';
import Template from '../components/Template'
import ArticleTemplate from '../components/article/Template'
import CommonCard from '../components/common/Card'

const Risorse = () => {
    const title="Risorse";
    const span="6"
    const cardList = [
        {
            img:{
                alt:"scratch",
                src:"/static/img/risorse/card_scratch.png"
            },
            meta:{
                title:"Scratch",
                description:"Progetti"
            },
            href:"/risorse/scratch",
            icon:{
                src:""
            }
        },
        {
            img:{
                alt:"scratch",
                src:"/static/img/risorse/card_scratch.png"
            },
            meta:{
                title:"Scratch",
                description:"Card"
            },
            href:"/card",
            icon:{
                src:""
            }
        }
    ]

    const createCard = () => {

        return cardList.map((data, index) => {
            return (
                <Col span={span} className="gutter-row" key={`card_${index}`}>
                    <CommonCard data={data}/>
                </Col>
            )
        })
    }

    return (
        <Template title={title}>
            <ArticleTemplate title={title} children={createCard()}/>
        </Template>
    )
}

export default Risorse;