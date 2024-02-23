import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import { Book } from "./Book";
function Booklist() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const { img, author, title, id } = book;
          return <Book {...book} key={id} number={index}></Book>;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist></Booklist>);
