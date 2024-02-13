import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Post from "./components/Post";
const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-5 items-center justify-center w-[50vw] mx-auto">
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default App;
