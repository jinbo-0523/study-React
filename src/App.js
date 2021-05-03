import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

// JSX記法で記述
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // ③オブジェクトの変数を定義してプロパティを書きスタイルを当てていく
  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };
  // ⑥useStateは関数。
  // 上のimport Reactに自動で補完され、{ useState }が入力される
  // [stateとして使用する変数名, 変数を変更するための関数（setOOOとするのが一般的）]
  const [num, setNum] = useState(0);
  return (
    <>
      {/* ①直接オブジェクトにスタイルを当てていく */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* ③オブジェクトの変数を定義してプロパティを書きスタイルを当てていく
      <p style={contentStyle}>お元気ですか？</p> */}
      {/* <p style={contentLedyStyle}>元気です</p> */}
      {/* ②タグにイベント、{}内にで関数を書く */}

      {/* ColorfullMessageのコンポーネントを使い、propsを個々に渡すことででスッキリ書くことができた↓↓↓ */}
      {/* ④書き方としてタグで囲った部分を『children』として渡す方法と・・・ */}
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      {/* ⑤prposで渡す方法２種類がある */}
      {/* <ColorfullMessage color="pink" message="元気です！"/> */}

      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};
// Appファイルの内容をexportする
export default App;
