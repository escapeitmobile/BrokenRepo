/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import { notification, Space } from 'antd';
import axios from 'axios';
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../images/img-signin.jpg";
import Header_Pro from "./Header_Pro";
import Footer_Pro from "./Footer_Pro";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
export default function SignIn(){
    const history = useHistory();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[api, contextHolder] = notification.useNotification();
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const handleclick= async()=>{
      if(email != "" && password != "")
        axios.post('/api/signin',{email:email, password:password})
        .then((res)=>{
            console.log(res.data);
            if(res.data == "ok")
              history.push('/dashboard');
            else 
            if(res.data == "failed")
              api.open({
                message: "Can't find",
                description:
                  "You don't have account. Please signup first!",
                showProgress: true,
                // pauseOnHover: false,
              });
            
        }).catch((err)=>{
            console.log(err);
        })
          
    }

    

    return (
      <>
        {contextHolder}
        {/* <Layout className="layout-default layout-signin">
          <Header>
            <Header_Pro />
          </Header>
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Sign In</Title>
                <Title className="font-regular text-muted" level={5}>
                  Enter your email and password to sign in
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Remember me
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                      onClick={handleclick}
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                  <p className="font-semibold text-muted">
                    Don't have an account?{" "}
                    <Link to="/authentication/sign-up/cover" className="text-dark font-bold">
                      Sign Up
                    </Link>
                  </p>
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                <img src={signinbg} alt="" />
              </Col>
            </Row>
          </Content>
          <Footer>
            <Footer_Pro />
          </Footer>
        </Layout> */}
        <Layout className="layout-default ant-layout layout-sign-up-cover  bg-white">
        <Header>
          <Header_Pro />
        </Header>
        <Content className="sign-in ">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 6 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
              <Title className="font-regular text-muted" level={5}>
                Enter your email and password to sign in
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                >
                  <Switch defaultChecked onChange={onChange} />
                  Remember me
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={handleclick}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted">
                  Don't have an account?{" "}
                  <Link to="/authentication/sign-up/cover" className="text-dark font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img mt-minus-150 text-center"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" className="inline-block" />
            </Col>
          </Row>
        </Content>
        <Footer>
          <Footer_Pro />
        </Footer>
      </Layout>
      </>
    );
}
