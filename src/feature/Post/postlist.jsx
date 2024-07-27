import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./PostSlice";

function Postlist() {
  const posts = useSelector(selectAllPost);
  console.log(posts);

  let rederPost = posts.map((posts) => (
    <article key={posts.id}>
      <h3>{posts.title}</h3>
      <p>{posts.context}</p>
    </article>
  ));

  return (
    <section>
      <h2>posts</h2>
      {rederPost}
    </section>
  );
}

export default Postlist;
