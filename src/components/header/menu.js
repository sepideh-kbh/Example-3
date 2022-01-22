import React from "react";
import { Menu } from "antd";

const MainMenu = () => {
  return (
    <Menu mode="horizontal" theme="light">
      <Menu.SubMenu key="Trade" title="Trade" className="active-item font-weight-bold color-purple">
        <Menu.Item>Exchange</Menu.Item>
        <Menu.Item>Liquidity</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="Earn" title="Earn">
        <Menu.Item>Farms</Menu.Item>
        <Menu.Item>Pools</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="Win" title="Win">
        <Menu.Item>Trading Competition</Menu.Item>
        <Menu.Item>Prediction (BETA)</Menu.Item>
        <Menu.Item>Lottery</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="NFT" title="NFT">
        <Menu.Item>Overview</Menu.Item>
        <Menu.Item>Collections</Menu.Item>
        <Menu.Item>Activity</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="..." title="...">
        <Menu.ItemGroup>
          <Menu.Item key="Info">Info</Menu.Item>
          <Menu.Item key="IFO">IFO</Menu.Item>
          <Menu.Item key="Voting">Voting</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider/>
        <Menu.ItemGroup>
          <Menu.Item key="Leaderboard">Leaderboard</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.ItemGroup>
          <Menu.Item key="Blog">Blog</Menu.Item>
          <Menu.Item key="Docs">Docs</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  )
}
export default MainMenu;