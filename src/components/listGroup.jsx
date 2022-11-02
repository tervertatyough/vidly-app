import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, onItemSelect, selectedItem } = this.props;

    return (
      <>
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item._id}
              className={
                item === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onItemSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListGroup;
