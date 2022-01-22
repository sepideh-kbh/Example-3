import React from "react";
import { Menu, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconTransformer from "./../../services/iconTransformer";
import logo from "./../../assets/images/pancake-small.svg"

const RightMenu = () => {
  return (
    <Menu mode="horizontal" theme="light" className="right-menu">
      <Menu.Item
        key="$9.855"
        className="color-light-purple font-weight-bold">
        <img src={logo} alt="pancake swap" />$9.855
      </Menu.Item>
      <Menu.SubMenu
        key="Earn"
        title={<FontAwesomeIcon
          className="color-light-purple"
          icon={iconTransformer("globe")}
        />}>
        <Menu.Item key="English">English</Menu.Item>
        <Menu.Item key="Spanol">Spanol</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="Setting">
        <FontAwesomeIcon icon={iconTransformer("cog")} className="color-light-purple" />
      </Menu.Item>
      <Menu.Item key="Connect Wallet">
        <Button type="primary" className="btn-public w-100 font-weight-bold">Connect Wallet</Button>
      </Menu.Item>
    </Menu>
  )
}
export default RightMenu;