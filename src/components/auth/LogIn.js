import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './auth.css'
import { Spin } from 'antd'
import * as actions from '../../store/actions/auth'



const LogIn = (props) => {
    const onFinish = values => {
        
        
        props.onAuth(values.username, values.password)
        props.history.push('/') // redirect
      };

    
    let errorMessage = null
    if (props.error) {
        errorMessage = <p>{props.error.message}</p>
    }
    return (
        <div>
            {errorMessage}
            {props.loading ? (
                <Spin />
            ) : (
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginRight: '10px' }}
                        >
                            Login
                        </Button>
                        Or
                        <Link
                            style={{ marginLeft: '10px', marginRight: '10px' }}
                            to="/register"
                        >
                            Sign Up
                        </Link>
                    </Form.Item>
                </Form>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, password) =>
            dispatch(actions.authLogin(username, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
