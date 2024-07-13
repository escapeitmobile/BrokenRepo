/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Checkbox,
} from "antd";
import signinbg from "../../images/img-signin.png";

import Header_Pro from "../../pages/Header_Pro";
import Footer_Pro from "../../pages/Footer_Pro";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export default function Cover(){
  const history=useHistory();
  const[username, setUserName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleclick= async()=>{
    if(username != "" && email != "" && password != "")
      axios.post('/api/signup',{username: username, email:email, password:password})
      .then((res)=>{
          console.log(res.data);
          history.push('/dashboard');
      }).catch((err)=>{
          console.log(err);
      })
        
  }
  return (
    <>
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
              <Title className="mb-15">Join us today</Title>
              <Title className="font-regular text-muted" level={5}>
                Enter your email and password to register
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input placeholder="Name" onChange={(e)=>setUserName(e.target.value)}/>
                </Form.Item>
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
                  <Checkbox defaultChecked={true}>
                    I agree to the{" "}
                    <a href="#" className="font-bold text-dark">
                      Terms and Conditions
                    </a>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={handleclick}
                  >
                    SIGN UP
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted">
                  Don't have an account?{" "}
                  <Link to="#" className="text-dark font-bold">
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
