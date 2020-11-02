import { Card } from 'antd';
import Link from 'next/link'

const { Meta } = Card;

export default function CommonCard({
    data
}) {

    const { img, meta, href, icon } = data;

    return (

            <Link href={href} >
                <div>
                <Card
                    hoverable
                    cover={<img alt={img.alt} src={img.src} />}
                    href={href}
                >
                    <div className="card-icon">
                        <img src={icon.src} className="img-fuid" />
                    </div>
                    <Meta title={meta.title} description={meta.description} />
                </Card>
                </div>
            </Link>

    )
}