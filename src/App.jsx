import { useState } from "react";

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("안녕하세요 ");
  const [editText, setEditText] = useState("");

  const showEdit = () => {
    setEditMode(true);
    setEditText(text);
  };

  let content = (
    <div>
      <span>{text}</span>
      <button onClick={showEdit}>수정모드로 변경</button>
    </div>
  );

  if (editMode) {
    const commitEdit = () => {
      setEditMode(false);
    };

    const cancelEdit = () => {
      setEditMode(false);
      setText(editText);
    };

    content = (
      <>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setText(value);
          }}
          value={text}
        />

        <button onClick={commitEdit}>수정</button>
        <button onClick={cancelEdit}>취소</button>
      </>
    );
  }

  return <div className="App">{content}</div>;
};

export default App;
