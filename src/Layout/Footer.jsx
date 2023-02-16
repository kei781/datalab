import React from "react";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <div className={style.Links}>
          <a href="https://goofy-swoop-805.notion.site/839611e1fdeb448e82a68b7673a3bdc7">
            라방바 데이터랩 소개
          </a>
          <a href="https://datalab.labangba.com/terms/privacy">
            개인정보처리방침
          </a>
          <a href="https://datalab.labangba.com/terms/service">이용약관</a>
          <a href="contact@cv-3.com">문의하기/제휴하기</a>
        </div>
        <div className={style.info}>
          <div>
            씨브이쓰리 주식회사
            <br />
            사업자등록번호 891-81-02188 · 통신판매업 신고2021-서울성동-01100
            <br />
            주소 대전광역시 유성구 대덕대로512번길 20 · 대표번호 070-4466-6599
            <br />
            개인정보관리 책임자 이기백 · 대표자 양진호
          </div>
          <div>
            평일 09:00 - 18:00
            <br />
            점심시간 12:00 - 13:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
