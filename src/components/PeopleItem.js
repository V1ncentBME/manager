// 单个人员信息
import React from "react";
import { Descriptions, Button } from "antd";
import Popup from "./Popup";

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
    const modalVisible = this.state.modalVisible;
    const { person, index, handleEdit, handleDelete } = this.props;

    return (
      <div>
        <Descriptions column={4}>
          <Descriptions.Item label="编号">{person.Code}</Descriptions.Item>
          <Descriptions.Item label="姓名">{person.UserName}</Descriptions.Item>
          <Descriptions.Item label="性别">{person.Gender}</Descriptions.Item>
          <Descriptions.Item>
            <Button type="primary" onClick={() => this.setModalVisible(true)}>
              查看
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
