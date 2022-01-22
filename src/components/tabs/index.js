import React from "react";
import { Tabs, Row, Col, Typography } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconTransformer from "./../../services/iconTransformer";
import FormContent from "../form";
import currency from "./../../assets/images/bnb.svg";
import logo from "./../../assets/images/pancake-small.svg";
import LineChart from "../lineChart";

const TabsContent = () => {

  return (
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="Exchange" key="1">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 36 }}>
          <Col xs={24} xl={16} className="gutter-row">
            <div className="box-wrapper left p-3">
              <Row className="align-items-center mb-4">
                <Col xs={23}>
                  <div className="d-flex flex-row align-items-center">
                    <img src={currency} alt="currency" className="mr-1" />
                    <img src={logo} alt="pancake swap" className="m-1" />
                    <Typography.Text className="mr-3 color-dark-purple font-weight-600">BNB/CAKE</Typography.Text>
                    <FontAwesomeIcon className="mr-3 color-light-blue" icon={iconTransformer("exchange-alt")} />
                    <Typography.Text className="mr-3 color-light-blue font-weight-bold">Basic</Typography.Text>
                    <Typography.Text className="color-light-blue font-weight-bold">TradingView</Typography.Text>
                  </div>
                </Col>
                <Col xs={1} className="text-center">
                  <FontAwesomeIcon icon={iconTransformer("expand-alt")} className="color-dark-purple" />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs={24} xl={15}>
                  <Typography.Paragraph className="mb-0">
                    <Typography.Text className="color-dark-purple font-weight-bold font-size-40">42.26</Typography.Text>
                    <Typography.Text className="color-light-purple font-weight-bold font-size-20 px-2">BNB/CAKE</Typography.Text>
                    <Typography.Text className="color-pink font-weight-bold font-size-20">-0.456 (-1.07%)</Typography.Text>
                  </Typography.Paragraph>
                </Col>
                <Col xs={24} xl={9}>
                  <Typography.Paragraph className="filter-wrapper mb-0">
                    <Typography.Text className="font-weight-bold active">24H</Typography.Text>
                    <Typography.Text className="font-weight-bold">1W</Typography.Text>
                    <Typography.Text className="font-weight-bold">1M</Typography.Text>
                    <Typography.Text className="font-weight-bold">1Y</Typography.Text>
                  </Typography.Paragraph>
                </Col>
                <Col xxs={24}>
                  <Typography.Paragraph className="color-purple font-weight-600">
                    Jan 21, 2022, 04:30 AM
                  </Typography.Paragraph>
                </Col>
                <Col xs={24}>
                  <LineChart />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} xl={8} className="gutter-row">
            <div className="box-wrapper right">
              <Row className="align-items-start p-3">
                <Col xs={2} className="text-center">
                  <FontAwesomeIcon icon={iconTransformer("chart-bar")} className="color-light-purple" />
                </Col>
                <Col xs={18} className="text-center d-flex flex-column">
                  <Typography.Text className="font-weight-bold">Swap</Typography.Text>
                  <Typography.Text className="color-light-purple font-weight-600">Trade tokens in an instant</Typography.Text>
                </Col>
                <Col xs={2} className="text-center">
                  <FontAwesomeIcon icon={iconTransformer("cog")} className="color-light-purple" />
                </Col>
                <Col xs={2} className="text-center">
                  <FontAwesomeIcon icon={iconTransformer("history")} className="color-light-purple" />
                </Col>
              </Row>
              <FormContent />
            </div>
          </Col>
        </Row>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Liquidity" key="2">
        is Loading...
      </Tabs.TabPane>
    </Tabs>
  )
}
export default TabsContent;