import React from 'react';
import {
    Form, Icon, Input, Button, Row, Col,
} from 'antd';
const FormItem = Form.Item;

const LoginComponent = ({ loading, form, loginRequest }) => {

    const { getFieldDecorator } = form;

    const tryLogin = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                loginRequest(values.rut, values.password);
            }
        });
    }

    return (
        <Row type="flex" style={{ height: '100vh' }} justify="space-around" align="middle">
            <Col xs={{span: 16}} lg={{span: 10}} xl={{span: 8}}>
                <Form onSubmit={tryLogin} className="login-form">
                    <FormItem>
                        {getFieldDecorator('rut', {
                            rules: [{ required: true, message: 'Rut inválido!' }],
                        })(
                            <Input size="large" disabled={loading} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Rut" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Debe ingresar una contraseña' }],
                        })(
                            <Input size="large" disabled={loading} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Contraseña" type="password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <p className="login-form-forgot">Olvidó su contraseña?</p>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button" block loading={loading}>
                            Ingresar
                    </Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    )
}

export default LoginComponent;