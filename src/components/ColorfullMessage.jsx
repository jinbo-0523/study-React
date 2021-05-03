import React from "react";

const ColorfullMessage = (props) => {
  // props.OOOが複数箇所あるのでそこを『分割代入』を使ってリファクタリンングしていく
  const { color, children } = props;
  const contentStyle = {
    // color: color,のようにプロパティと与える変数が一緒なら
    // 『color: 』を省略できるのがJavaScript
    color,
    fontSize: "18px"
  };

  return (
    // ④childrenで渡す
    <p style={contentStyle}>{children}</p>
    // ⑤props.OOOで渡す
    // <p style={contentStyle}>{props.message}</p>
  );
};

export default ColorfullMessage;
