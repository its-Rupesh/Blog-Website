import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./PostSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllPost } from "./PostSlice";

function Addpostform() {
  const [title, settitle] = useState("");
  const [context, setcontext] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => {
    settitle(e.target.value);
  };
  const onContextChanged = (e) => {
    setcontext(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title && context) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: title,
          context: context,
        })
      );
    }
    settitle("");
    setcontext("");
  };
  const b = useSelector(selectAllPost);
  console.log(b);
  return (
    <section>
      <h1>Add new Post</h1>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          id="postTitle"
          type="text"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContext">Context</label>
        <textarea
          id="postContext"
          value={context}
          onChange={onContextChanged}
        ></textarea>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default Addpostform;
