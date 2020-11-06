import React, { Component } from 'react';

const sampleItems = [
  {
    name: "TV",
    id: 876234812,
  },
];

class ShoppingList extends React.Component {
  constructor(props) {
    const { items } = props;
    super(props);
    this.state = { items };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    // Write your code here
    console.log(id);
    const {items} = this.state
    let res = items.filter(item => item.id !== id)
    this.setState({
        items: res
    })
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.name}
            <button
              id="removeBtn"
              onClick={() => this.removeItem(item.id)}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default function ListApp() {
  return (
    <div>
      <ShoppingList items={sampleItems} />
    </div>
  );
}
//   document.body.innerHTML = "<div id='root'> </div>";
//   const rootElement = document.getElementById( "root" );
//   ReactDOM.render(<ShoppingList items = { sampleItems } />, rootElement);

//   document.getElementById("removeBtn").click();
//   setTimeout(() => console.log(rootElement.innerHTML));
