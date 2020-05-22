// 新增人员信息
import React from "react";
import { Descriptions, Input, Button, Select, Row } from "antd";
const { Option } = Select;

class AddPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
    };
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    const person = Object.assign({}, this.state.person, {
      [e.target.name]: e.target.value,
    });
    this.setState({
      person: person,
    });
  }
  selectChange(name, value) {
    const person = Object.assign({}, this.state.person, {
      [name]: value,
    });
    this.setState({
      person: person,
    });
  }

  render() {
    const { person } = this.state;
    const { handleAdd, quitAdd } = this.props;

    return (
      <Row justify="space-around" align="middle" style={{ margin: 50 }}>
        <Descriptions column={1}>
          <Descriptions.Item label="编号">
            <Input
              style={{ width: 320 }}
              name="Code"
              value={person.Code || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="姓名">
            <Input
              style={{ width: 320 }}
              name="UserName"
              value={person.UserName || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="性别">
            <Select
              style={{ width: 320 }}
              defaultValue={person.Gender || ""}
              onChange={this.selectChange.bind(this, "Gender")}
            >
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          </Descriptions.Item>
          <Descriptions.Item label="状态">
            <Select
              style={{ width: 320 }}
              defaultValue={person.Status || ""}
              onChange={this.selectChange.bind(this, "Status")}
            >
              <Option value="新增">新增</Option>
              <Option value="在职">在职</Option>
              <Option value="离职">离职</Option>
            </Select>
          </Descriptions.Item>
          <Descriptions.Item label="身份证号">
            <Input
              style={{ width: 292 }}
              name="IDNo"
              value={person.IDNo || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">
            <Input
              style={{ width: 320 }}
              name="Mail"
              value={person.Mail || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="手机">
            <Input
              style={{ width: 320 }}
              name="Telephone"
              value={person.Telephone || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="联系地址">
            <Input
              style={{ width: 292 }}
              name="Address"
              value={person.Address || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="备注">
            <Input
              style={{ width: 320 }}
              name="Remark"
              value={person.Remark || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
        </Descriptions>
        <Button
          type="primary"
          onClick={() => {
            handleAdd(person);
          }}
        >
          确定
        </Button>
        <Button
          type="primary"
          onClick={() => {
            quitAdd();
          }}
        >
          取消
        </Button>
      </Row>
    );
  }
}

export default AddPeople;
