import { Row, Col } from 'antd';

export const HeaderDeskComponent = () => {
    return (
        <>
            <Row>
                <Col span={4}>logo</Col>
                <Col span={16}>menu</Col>
                <Col span={4}>buttonGroup</Col>
            </Row>
            {/* <Row>
                <Col span={24}>sub menu</Col>
            </Row>
            <Row>
                <Col span={24}>search</Col>
            </Row> */}
        </>
    )
}