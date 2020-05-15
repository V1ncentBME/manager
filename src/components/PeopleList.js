// 人员列表
import React from "react";
import { List } from "antd";
import PeopleItem from "./PeopleItem";

class PeopleList extends React.Component {
  render() {
    const { people, handleEdit, handleDelete } = this.props;

    return (
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(person, index) => (
          <List.Item key={index}>
            <PeopleItem
              person={person}
              index={index}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default PeopleList;
