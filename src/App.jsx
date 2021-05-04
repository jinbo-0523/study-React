import React, { useEffect, useState } from "react";

// import ColorfullMessage from "./components/ColorfullMessage";
// ⑦export const 〜の個別のexportは以下の分割代入方式で記述
// メリットは命名をタイポするとエラーを吐いてくれること・個々に宣言をexportできること
import { ColorfullMessage } from "./components/ColorfullMessage";

// JSX記法で記述
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // これだとひたすらレンダリングしてしまいReactのよくあるエラー
  // 　　　Error
  // 　　　Too many re-renders.
  // が発生してしまう
  // if (num % 3 === 0){
  //   setFaceShowFlag(true);
  // }else{
  //   setFaceShowFlag(false);
  // }
  // useEffectは最初の一回だけ読み込んでくれる（関心の分離）
  // 第二引数の変数が変化したときだけ処理を走らせることが出来る（[num]の事）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // useEffectでnumを監視するようセットしている。
    // これにより
  }, [num]);
  // ③オブジェクトの変数を定義してプロパティを書きスタイルを当てていく
  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };
  // ⑥useStateは関数。
  // 上のimport Reactに自動で補完され、{ useState }が入力される
  // [stateとして使用する変数名, 変数を変更するための関数（setOOOとするのが一般的）]

  //　表示・非表示を扱うstateを作成
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
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};
// Appファイルの内容をexportする
export default App;
