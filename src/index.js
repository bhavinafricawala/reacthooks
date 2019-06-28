import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./bootstrap.css";
import { number } from "prop-types";

const ToggleWithHooks = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <label>
      <input
        className="form-control"
        onChange={e => setToggle(!toggle)}
        type="checkbox"
        checked={toggle}
      />
      <span className="badge badge-secondary">{JSON.stringify(toggle)}</span>
    </label>
  );
};

const SearchPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <br />
      <span className="badge badge-secondary">
        <h1>{search}</h1>
      </span>
    </div>
  );
};

function RandomList() {
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState();

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: number
      }
    ]);
    setNumber("");
  };

  return (
    <div>
      <div className="row">&nbsp;</div>
      <div className="row">
        <div className="col-7">
          <input
            type="text"
            className="form-control"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <div className="col-5">
          <button onClick={addItem} className="btn btn-primary">
            Add to List
          </button>
        </div>
        <div className="col-12">
          <ul>
            To do list:
            {items.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="container">
    <RandomList />
  </div>,
  rootElement
);
