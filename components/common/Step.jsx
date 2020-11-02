import { useState } from 'react';
import { Steps, Button, message, Row, Col } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';

export default function CommonStep({
    steps
}) {

    const { Step } = Steps;

    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current + 1);
    }

    const prev = () => {
        setCurrent(current - 1);
    }

    return (
        <>
            <Steps current={current}>
                {steps.map((item,index) => (
                    <Step key={item.title} title={item.title} key={`step_${index}`} />
                ))}
            </Steps>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24} >
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action center">
                        {current > 0 && (
                            <CaretLeftOutlined onClick={() => prev()} />
                        )}
                        {current < steps.length - 1 && (
                            <CaretRightOutlined onClick={() => next()} />
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')} style={{display:'none'}}>
                                Done
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>

        </>
    );

}