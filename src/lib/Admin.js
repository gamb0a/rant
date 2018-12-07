
import React from "react";
import PropTypes from 'prop-types'
import { UserComponent, DashboardComponent, SesionesComponent } from "./components";
import { Nav, Side, AccessControl } from "./core";
import { Layout } from "antd";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const { Content, Footer } = Layout;

const Admin = ({ store }) => 
    <Provider store={store}>
        <Router>
            <AccessControl>
                <Layout>
                    <Side />
                    <Layout>
                        <Nav />
                        <Content style={{ margin: "20px", padding: 20, background: "#fff" }}>
                            <Switch>
                                <Route exact path="/sesiones" component={SesionesComponent} />
                                <Route exact path="/usuario" component={UserComponent} />
                                <Route exact path="/" component={DashboardComponent} />
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: "center" }}>Créditos</Footer>
                    </Layout>
                </Layout>
            </AccessControl>
        </Router>
    </Provider>

Admin.propTypes = {
    store: PropTypes.object.isRequired
}

export default Admin
