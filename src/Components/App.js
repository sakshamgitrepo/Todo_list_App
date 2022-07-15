import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import React,{ useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");

  const setAndsaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  const AddItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const MynewItem = { id, checked: false, item };
    const listItems = [...items, MynewItem];
    setAndsaveItems(listItems);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    AddItems(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndsaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndsaveItems(listItems);
  };
  return (
    <div className="App">
      <div className="section">
        <Header title="To do list" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handlesubmit={handlesubmit}
        />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        </div>
        <Footer length={items.length} />
    </div>
  );
}

export default App;
