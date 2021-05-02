import React from "react";
// JSX記法で記述
const App = () => {
  const onClickButton = () => alert("");
  // ③オブジェクトの変数を定義してプロパティを書きスタイルを当てていく
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      {/* ①直接オブジェクトにスタイルを当てていく */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* ③オブジェクトの変数を定義してプロパティを書きスタイルを当てていく */}
      <p style={contentStyle}>お元気ですか？</p>
      {/* ②タグにイベント、{}内にで関数を書く */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
// Appファイルの内容をexportする
export default App;
