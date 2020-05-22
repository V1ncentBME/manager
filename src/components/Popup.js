// 弹框
// 查看人员信息详情、新增人员信息、编辑人员信息、删除人员信息
import React from "react";
import { Modal } from "antd";
import AddPeople from "./AddPeople";
import EditPeople from "./EditPeople";
import ViewPeople from "./ViewPeople";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }
  render() {
    const { editable } = this.state;
    const {
      person,
      index,

      addable,
      handleAdd,
      handleEdit,
      handleDelete,
      modalVisible,
      setModalVisible,
    } = this.props;

    if (addable) {
      return (
        // 新增人员信息弹框
        <Modal
          title=""
          centered
          visible={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
        >
          <AddPeople
            handleAdd={handleAdd}
            quitAdd={() => setModalVisible(false)}
          />
        </Modal>
      );
    } else if (editable) {
      return (
        // 编辑人员信息弹框
        <Modal
          title=""
          centered
          visible={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
        >
          <EditPeople
            index={index}
            person={person}
            handleEdit={handleEdit}
            quitEdit={() => this.setState({ editable: false })}
            setModalVisible={() => setModalVisible(false)}
          />
        </Modal>
      );
    } else {
      return (
        // 查看人员信息弹框
        <Modal
          title=""
          centered
          visible={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
        >
          <ViewPeople
            index={index}
            person={person}
            onEdit={() => this.setState({ editable: true })}
            onDelete={handleDelete}
            setModalVisible={() => setModalVisible(false)}
          />
        </Modal>
      );
    }
  }
}

export default Popup;
