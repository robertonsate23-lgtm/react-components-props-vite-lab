import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./Article List";

console .log(blogData); 

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
//renders a div with the class "App" that contains the Header, About, and ArticleList components, passing the appropriate data from the blogData object as props.
