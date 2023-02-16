import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <img
          src="https://datalab.labangba.com/_app/Nav/gnb_bi.png"
          alt="로고 이미지"
        />
        <ul>
          <li>로그인</li>
          <li>·</li>
          <li>회원가입</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
