import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'

const Register = (props) => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        // console.log('Received values of form: ', values)

        props.onAuth(
            values.username,
            values.email,
            values.password1,
            values.password2,
            values.confirm
        )
    }

    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }

                            return Promise.reject(
                                'The two passwords that you entered do not match!'
                            )
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginRight: '10px' }}
                >
                    Register
                </Button>
                Or
                <Link
                    style={{ marginLeft: '10px', marginRight: '10px' }}
                    to="/login"
                >
                    Login
                </Link>
            </Form.Item>
        </Form>
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
        onAuth: (username, email, password1, password2) =>
            dispatch(actions.authSignup(username, email, password1, password2)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
