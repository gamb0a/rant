import React from 'react';
import PropTypes from 'prop-types'

import { Row, Col, Dropdown, Menu, Icon, Avatar, Input, Layout } from 'antd';
const { Header } = Layout;
const Search = Input.Search;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

const Nav = ({collapsed, onToggleNav}) => {
    return <Header style={{ background: "#fff", padding: "0px 20px" }}>
        <Row type="flex">
            <Col>
                <Icon className="trigger" type={ collapsed ? "menu-unfold" : "menu-fold" } onClick={onToggleNav} />
            </Col>
            <Col>
                <Search placeholder="Buscar" onSearch={value => console.log(value)} style={{ width: 200 }} />
            </Col>
            <Col style={{ marginLeft: "auto" }}>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Avatar style={{ cursor: "pointer" }} icon="user" />
                </Dropdown>
            </Col>
        </Row>
    </Header>
}

Nav.propTypes = {
    onToggleNav: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired
}

export default Nav;