import React from "react";
import { Form, Input, Typography, Button,Row,Col } from 'antd';
import currency from "./../../assets/images/bnb.svg";
import logo from "./../../assets/images/pancake-small.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconTransformer from "./../../services/iconTransformer";

const FormContent = () => {
  const bnbText = (
    <>
      <img src={currency} alt="currency"/>
      <Typography.Text className="px-2 font-weight-bold">BNB</Typography.Text>
      <FontAwesomeIcon icon={iconTransformer("chevron-down")} />
    </>
  )
  const cakeText = (
    <>
      <img src={logo} alt="pancake swap"/>
      <Typography.Text className="px-2 font-weight-bold">Cake</Typography.Text>
      <FontAwesomeIcon icon={iconTransformer("chevron-down")} />
    </>
  )
  return (
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      className="p-3 form-wrapper d-flex flex-column"
    >
      <Form.Item
        label={bnbText}
        name="BNB"
      >
        <Input placeholder="0.0" dir="rtl"/>
      </Form.Item>
      <FontAwesomeIcon icon={iconTransformer("arrow-circle-down")} className="exchange-icon"/>
      <Form.Item
        label={cakeText}
        name="BNB"
      >
        <Input placeholder="0.0" dir="rtl"/>
      </Form.Item>
      <Row className="flex-row mb-5">
        <Col xs={20}>
          <Typography.Text className="color-purple font-weight-bold">Slippage Tolerance</Typography.Text>
        </Col>
        <Col xs={4} className="text-right">
          <Typography.Text className="color-light-blue font-weight-bold">0.5%</Typography.Text>
        </Col>
      </Row>
      <Button type="primary" className="btn-public w-100 font-weight-bold">Connect Wallet</Button>

    </Form>
  )
}
export default FormContent;