import { Layout, Menu, Row, Col } from 'antd';
import Template from '../../components/Template'
import ArticleTemplate from '../../components/article/Template'
import CommonCard from '../../components/common/Card'

const RisorseScratch = () => {
    const title="Progetti Scratch";
    const span="6"
    const cardList = [
        {
            img:{
                alt:"scratch",
                src:"/static/img/progetti/card_start.png"
            },
            meta:{
                title:"Scratch",
                description:"Per Iniziare"
            },
            href:"/risorse/scratch-per-iniziare",
            icon:{
                src:"/static/img/progetti/scratch.png"
            }
        },
        {
            img:{
                alt:"scratch",
                src:"/static/img/progetti/card_test.png"
            },
            meta:{
                title:"Test",
                description:"Test"
            },
            href:"/card",
            icon:{
                src:"/static/img/progetti/scratch.png"
            }
        }
    ]

    let description = "In questa sezione troverai degli utili <b>progetti per Scratch in italiano</b>, il linguaggio di programmazione grafico più diffuso al mondo. ";
    description += "<a href='/risorse'>Scratch</a> è stato creato dal gruppo Lifelong Kindergarten del MIT Media Lab, ed è un linguaggio orientato agli oggetti che permette di creare arte, musica, ";
    description += "ideogiochi e animazioni imparando i principi del <a href='/risorse'>coding</a> fin dalla scuola primaria.";
    description += "<br><br>Esplora le risorse di questa sezione e consulta i tutorial dei progetti per Scratch!";

    const createCard = () => {

        return cardList.map((data,index) => {
            return (
                <Col span={span} className="gutter-row" key={`card_${index}`}>
                    <CommonCard data={data}/>
                </Col>
            )
        })
    }

    return (
        <Template title={title}>
            <ArticleTemplate title={title} children={createCard()} description={description}/>
        </Template>
    )
}

export default RisorseScratch;