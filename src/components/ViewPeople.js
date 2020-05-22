// 查看人员信息详情
import React from "react";
import { Descriptions, Button, Row } from "antd";

class ViewPeople extends React.Component {
  render() {
    const { person, onEdit, setModalVisible } = this.props;

    return (
      <Row justify="space-around" align="middle" style={{ margin: 50 }}>
        <Descriptions column={1}>
          <Descriptions.Item label="编号">
            {person.Code || ""}
          </Descriptions.Item>
          <Descriptions.Item label="姓名">
            {person.UserName || ""}
          </Descriptions.Item>
          <Descriptions.Item label="性别">
            {person.Gender || ""}
          </Descriptions.Item>
          <Descriptions.Item label="状态">
            {person.Status || ""}
          </Descriptions.Item>
          <Descriptions.Item label="身份证号">
            {person.IDNo || ""}
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">
            {person.Mail || ""}
          </Descriptions.Item>
          <Descriptions.Item label="手机">
            {person.Telephone || ""}
          </Descriptions.Item>
          <Descriptions.Item label="联系地址">
            {person.Address || ""}
          </Descriptions.Item>
          <Descriptions.Item label="备注">
            {person.Remark || ""}
          </Descriptions.Item>
        </Descriptions>
        {/* 开始编辑 */}
        <Button type="primary" onClick={onEdit}>
          编辑
        </Button>
        {/* <Button
          type="primary"
          onClick={() => {
            setModalVisible();
          }}
        >
          关闭
        </Button> */}
      </Row>
    );
  }
}

export default ViewPeople;
