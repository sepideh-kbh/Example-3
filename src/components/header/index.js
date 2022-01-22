import React from "react";
import { Row, Col } from "antd";
import MainMenu from "./menu";
import RightMenu from "./rightMenu";
import logo from "./../../assets/images/logo.svg";

const MainHeader = () => {
  return (
    <Row>
      <Col xs={3}>
        <a href="/" className="logo">
          <img src={logo} alt="pancake swap" />
        </a>
      </Col>
      <Col xs={13}>
        <MainMenu />
      </Col>
      <Col xs={8}>
        <RightMenu />
      </Col>
    </Row>
  )
}
export default MainHeader;