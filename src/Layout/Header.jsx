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
          <li>
            <img className={style.LogIcon} />
          </li>
          <li>
            <a href="https://datalab.labangba.com/user/sign_in?redirect=%2Frecruit">
              로그인
            </a>
          </li>
          <li>·</li>
          <li>
            <a href="https://datalab.labangba.com/user/sign_up?redirect=%2Frecruit">
              회원가입
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
