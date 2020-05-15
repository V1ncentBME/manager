// 人员信息管理主界面
import React from "react";
import { Button } from "antd";
import PeopleList from "./PeopleList";
import Popup from "./Popup";

//人员信息数据
const people = [
  {
    Code: "1",
    UserName: "张三",
    Gender: "男",
    Status: "在职",
    IDNo: "",
    Mail: "zhangsan@supcon.com",
    Telephone: "18888888888",
    Address: "浙江省杭州市滨江区六合路",
    Remark: "",
  },
  {
    Code: "2",
    UserName: "李四",
    Gender: "女",
    Status: "离职",
    IDNo: "",
    Mail: "lisi@supcon.com",
    Telephone: "18666666666",
    Address: "浙江省杭州市滨江区六合路",
    Remark: "",
  },
  {
    Code: "3",
    UserName: "王五",
    Gender: "男",
    Status: "在职",
    IDNo: "",
    Mail: "wangwu@supcon.com",
    Telephone: "18666666666",
    Address: "浙江省杭州市滨江区六合路",
    Remark: "",
  },
];

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: "", modalVisible: false, addable: false };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  componentDidMount() {
    this.setState({
      people: people,
    });
  }

  // 处理新增人员信息
  handleAdd(newPeople) {
    const people = this.state.people;
    this.setState({
      people: people.concat([newPeople]),
      modalVisible: false,
    });
  }
  // 处理编辑人员信息
  handleEdit(content, index) {
    const people = this.state.people;
    people[index] = content;
    console.log(people);
    this.setState({
      people: people,
    });
  }
  // 处理删除人员信息
  handleDelete(index) {
    const people = this.state.people;
    this.setState({
      people: people
        .slice(0, index)
        .concat(people.slice(index + 1, people.length)),
    });
  }
  // 设置弹框状态
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    const { people, modalVisible, addable } = this.state;

    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.setState({ modalVisible: true, addable: true });
          }}
        >
          新增人员
        </Button>
        <PeopleList
          people={people}
          handleEdit={(e, i) => this.handleEdit(e, i)}
          handleDelete={(i) => this.handleDelete(i)}
        />
        <Popup
          addable={addable}
          modalVisible={modalVisible}
          setModalVisible={this.setModalVisible}
          handleAdd={(e) => this.handleAdd(e)}
        />
      </div>
    );
  }
}

export default Manager;
