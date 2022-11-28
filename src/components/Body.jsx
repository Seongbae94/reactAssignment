import { React, useState } from "react";
import { nanoid } from "nanoid";
import CardSet from "./CardSet";

export default function Body() {
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState("");
  const [cards, setCards] = useState([
    {
      topic: "리액트 공부하기",
      desc: "리액트 기초를 공부해봅시다",
      id: 0,
      done: false,
    },
    {
      topic: "리액트 공부하기",
      desc: "리액트 기초를 공부해봅시다",
      id: 1,
      done: true,
    },
  ]);

  //todo 화살표 함수로변경
  // github에 코드 업로드하기(repo하나 만들어서)

  const handleNameChange = (e) => {
    setTopic(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const addCard = () => {
    setCards((prev) => [
      ...prev,
      { topic: topic, desc: desc, id: nanoid(), done: false },
    ]);
    setTopic("");
    setDesc("");
  };

  const onClickToggleHandler = (id) => {
    setCards((prev) =>
      prev.map((prev) =>
        prev.id === id ? { ...prev, done: !prev.done } : { ...prev }
      )
    );
  };

  const onClickDeleteHandler = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="container">
      <div className="body-top-container">
        <div className="flex">
          <div className="flex flex-row-verticalCenter">
            <p>제목</p>
            <input
              className="input-shape"
              id="name"
              onChange={handleNameChange}
              value={topic}
            />
          </div>
          <div className="flex flex-row-verticalCenter">
            <p>내용</p>
            <input
              className="input-shape"
              id="desc"
              onChange={handleDescChange}
              value={desc}
            />
          </div>
        </div>
        <button className="btn btn-teal" onClick={addCard}>
          추가하기
        </button>
      </div>
      <div className="body-padding">
        <h1>working...🔥</h1>
        <div className="flex flex-wrap cards-flex cards-gap">
          <CardSet
            cards={cards}
            toggle={onClickToggleHandler}
            del={onClickDeleteHandler}
            done={false}
          />
        </div>
        <h1>done..! 🎉</h1>
        <div className="flex flex-wrap cards-flex cards-gap">
          <CardSet
            cards={cards}
            toggle={onClickToggleHandler}
            del={onClickDeleteHandler}
            done={true}
          />
        </div>
      </div>
    </div>
  );
}
