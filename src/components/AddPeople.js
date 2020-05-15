// 新增人员信息
import React from "react";
import { Descriptions, Input, Button } from "antd";

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

  render() {
    const { person } = this.state;
    const { handleAdd, quitAdd } = this.props;

    return (
      <div>
        <Descriptions layout="vertical">
          <Descriptions.Item label="编号">
            <Input
              name="Code"
              value={person.Code || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="姓名">
            <Input
              name="UserName"
              value={person.UserName || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="性别">
            <Input
              name="Gender"
              value={person.Gender || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="状态">
            <Input
              name="Status"
              value={person.Status || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="身份证号">
            <Input
              name="IDNo"
              value={person.IDNo || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">
            <Input
              name="Mail"
              value={person.Mail || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="手机">
            <Input
              name="Telephone"
              value={person.Telephone || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="联系地址">
            <Input
              name="Address"
              value={person.Address || ""}
              onChange={this.inputChange}
            />
          </Descriptions.Item>
          <Descriptions.Item label="备注">
            <Input
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
      </div>
    );
  }
}

export default AddPeople;
