// 单个人员信息
import React from "react";
import { Descriptions, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Popup from "./Popup";
const { confirm } = Modal;

class PeopleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  // 设置弹框状态
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }
  render() {
    const { modalVisible } = this.state;
    const { person, index, handleEdit, handleDelete } = this.props;

    function showConfirm() {
      confirm({
        okText: "确认",
        cancelText: "取消",
        icon: <ExclamationCircleOutlined />,
        content: "确定要删除该人员信息吗？",
        onOk() {
          handleDelete(index);
        },
        onCancel() {},
      });
    }

    return (
      <div>
        <Descriptions column={5}>
          <Descriptions.Item label="编号">{person.Code}</Descriptions.Item>
          <Descriptions.Item label="姓名">{person.UserName}</Descriptions.Item>
          <Descriptions.Item label="性别">{person.Gender}</Descriptions.Item>
          <Descriptions.Item>
            <Button type="primary" onClick={() => this.setModalVisible(true)}>
              查看
            </Button>
          </Descriptions.Item>
          <Descriptions.Item>
            <Button type="primary" onClick={showConfirm}>
              删除
            </Button>
          </Descriptions.Item>
        </Descriptions>
        <Popup
          index={index}
          modalVisible={modalVisible}
          person={person}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setModalVisible={this.setModalVisible}
        />
      </div>
    );
  }
}

export default PeopleItem;
