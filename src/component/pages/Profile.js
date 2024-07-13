/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import BgProfile from "../images/bg-profile.jpg";
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";
import profilavatar from "../images/face-1.jpg";
import convesionImg from "../images/face-3.jpg";
import convesionImg2 from "../images/face-4.jpg";
import convesionImg3 from "../images/face-5.jpeg";
import convesionImg4 from "../images/face-6.jpeg";
import convesionImg5 from "../images/face-2.jpg";
import project1 from "../images/home-decor-1.jpeg";
import project2 from "../images/home-decor-2.jpeg";
import project3 from "../images/home-decor-3.jpeg";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placement: "left",
      loading: false,
    };
  }

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: false });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl: false,
          loading: false,
        })
      );
    }
  };

  render() {
    function beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    }
    function onChange(checked) {
      console.log(`switch to ${checked}`);
    }
    const { imageUrl } = this.state;
    const uploadButton = (
      <div className="ant-upload-text font-semibold text-dark">
        {/* {loading ? <LoadingOutlined /> :<VerticalAlignTopOutlined /> } */}
        {
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289L9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289L13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711C13.3166 7.09763 12.6834 7.09763 12.2929 6.70711L11 5.41421L11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13L9 5.41421L7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711Z"
              fill="#111827"
            ></path>
          </svg>
        }
        <div>Upload New Project</div>
      </div>
    );
    const data = [
      {
        title: "Sophie B.",
        avatar: convesionImg,
        description: "Hi! I need more information…",
      },
      {
        title: "Anne Marie",
        avatar: convesionImg2,
        description: "Awesome work, can you…",
      },
      {
        title: "Ivan",
        avatar: convesionImg3,
        description: "About files I can…",
      },
      {
        title: "Peterson",
        avatar: convesionImg4,
        description: "Have a great afternoon…",
      },
      {
        title: "Nick Daniel",
        avatar: convesionImg5,
        description: "Hi! I need more information…",
      },
    ];

    const project = [
      {
        img: project1,
        titlesub: "Project #1",
        title: "Modern",
        disciption:
          "As Uber works through a huge amount of internal management turmoil.",
      },
      {
        img: project2,
        titlesub: "Project #2",
        title: "Scandinavian",
        disciption:
          "Music is something that every person has his or her own specific opinion about.",
      },
      {
        img: project3,
        titlesub: "Project #3",
        title: "Minimalist",
        disciption:
          "Different people have different taste, and various types of music, Zimbali Resort",
      },
    ];
    return (
      <>
        <div
          className="profile-nav-bg"
          style={{ backgroundImage: "url(" + BgProfile + ")" }}
        ></div>

        <Card
          className="card-profile-head"
          bodyStyle={{ display: "none" }}
          title={
            <Row justify="space-between" align="middle" gutter={[24, 0]}>
              <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                  <Avatar size={74} shape="square" src={profilavatar} />

                  <div className="avatar-info">
                    <h4 className="font-semibold m-0">Sarah Jacob</h4>
                    <p>CEO / Co-Founder</p>
                  </div>
                </Avatar.Group>
              </Col>
              <Col
                span={24}
                md={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Radio.Group onChange={onChange} defaultValue="a">
                  <Radio.Button value="a">OVERVIEW</Radio.Button>
                  <Radio.Button value="b">TEAMS</Radio.Button>
                  <Radio.Button value="c">PROJECTS</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          }
        ></Card>

        <Row gutter={[24, 0]}>
          <Col span={24} md={8} className="mb-24 ">
            <Card
              bordered={false}
              className="header-solid h-full"
              title={<h6 className="font-semibold m-0">Platform Settings</h6>}
            >
              <ul className="list settings-list">
                <li>
                  <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
                </li>
                <li>
                  <Switch defaultChecked onChange={onChange} />

                  <span>Email me when someone follows me</span>
                </li>
                <li>
                  <Switch onChange={onChange} />
                  <span>Email me when someone answers me</span>
                </li>
                <li>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Email me when someone mentions me</span>
                </li>
                <li>
                  <h6 className="list-header text-sm text-muted m-0">
                    APPLICATION
                  </h6>
                </li>
                <li>
                  <Switch defaultChecked onChange={onChange} />
                  <span>New launches and projects</span>
                </li>
                <li>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Monthly product updates</span>
                </li>
                <li>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Subscribe to newsletter</span>
                </li>
              </ul>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Profile Information</h6>}
              className="header-solid h-full card-profile-information"
              extra={<Button type="link">{pencil}</Button>}
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p className="text-dark">
                {" "}
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).{" "}
              </p>
              <hr className="my-25" />
              <Descriptions title="Oliver Liam">
                <Descriptions.Item label="Full Name" span={3}>
                  Sarah Emily Jacob
                </Descriptions.Item>
                <Descriptions.Item label="Mobile" span={3}>
                  (44) 123 1234 123
                </Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>
                  sarahjacob@mail.com
                </Descriptions.Item>
                <Descriptions.Item label="Location" span={3}>
                  USA
                </Descriptions.Item>
                <Descriptions.Item label="Social" span={3}>
                  <a href="#" className="mx-5 px-5">
                    {<TwitterOutlined />}
                  </a>
                  <a href="#" className="mx-5 px-5">
                    {<FacebookOutlined style={{ color: "#344e86" }} />}
                  </a>
                  <a href="#" className="mx-5 px-5">
                    {<InstagramOutlined style={{ color: "#e1306c" }} />}
                  </a>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Conversations</h6>}
              className="header-solid h-full"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                split={false}
                className="conversations-list"
                renderItem={(item) => (
                  <List.Item actions={[<Button type="link">REPLY</Button>]}>
                    <List.Item.Meta
                      avatar={
                        <Avatar shape="square" size={48} src={item.avatar} />
                      }
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card
          bordered={false}
          className="header-solid mb-24"
          title={
            <>
              <h6 className="font-semibold">Projects</h6>
              <p>Architects design houses</p>
            </>
          }
        >
          <Row gutter={[24, 24]}>
            {project.map((p, index) => (
              <Col span={24} md={12} xl={6} key={index}>
                <Card
                  bordered={false}
                  className="card-project"
                  cover={<img alt="example" src={p.img} />}
                >
                  <div className="card-tag">{p.titlesub}</div>
                  <h5>{p.title}</h5>
                  <p>{p.disciption}</p>
                  <Row gutter={[6, 0]} className="card-footer">
                    <Col span={12}>
                      <Button type="button" size="small">
                        VIEW PROJECT
                      </Button>
                    </Col>
                    <Col span={12} className="text-right">
                      <Avatar.Group className="avatar-chips">
                        <Avatar size="small" src={profilavatar} />
                        <Avatar size="small" src={convesionImg} />
                        <Avatar size="small" src={convesionImg2} />
                        <Avatar size="small" src={convesionImg3} />
                      </Avatar.Group>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
            <Col span={24} md={12} xl={6}>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader projects-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}
