import React, { useState } from "react";
import style from "./Contents.module.css";

const Contents = () => {
  // 어차피 RestApi로 불러올꺼같음..
  // 그럼 백엔드 조건안보임
  // 프론트 한정이면 차라리 Json으로
  const data = [
    {
      index: 1,
      title: "삼성전자 갤럭시 S23 사전판매 2차 라이브",
      site: "G라이브",
      link: "https://datalab.labangba.com/report/labang/55f69b6ee311c6d96f2a6ef1373605b4",
      category: "디지털/가전",
      time: { date: "2023.02.13", hour: "18:00" },
      views: 505000,
      sold: 2030,
      revenue: 2500000000,
      products: 9,
    },
    {
      index: 2,
      title: "커져라, 우리 아이의 가능성",
      site: "네이버쇼핑LIVE",
      link: "https://datalab.labangba.com/report/labang/e13f00e7ab293f538c2f1e784c91014a",
      category: "가구/인테리어",
      time: { date: "2023.02.13", hour: "19:59" },
      views: 7667,
      sold: 1558,
      revenue: 581231231,
      products: 10,
    },
    {
      index: 3,
      title: "갤럭시 S23 사전판매 LIVE 마지막 기회",
      site: "네이버쇼핑LIVE",
      link: "https://datalab.labangba.com/report/labang/12149ca9c38581b795b98693cd963ffc",
      category: "디지털/가전",
      time: { date: "2023.02.13", hour: "09:59" },
      views: 245123,
      sold: 376,
      revenue: 527000000,
      products: 3,
    },
    {
      index: 4,
      title: '팸둥이들을 위한 " 팸퍼스클럽" 100% 활용법!',
      site: "네이버쇼핑LIVE",
      link: "https://datalab.labangba.com/report/labang/888a09b7f74c45e51503db3f1fa518f6",
      category: "출산/육아",
      time: { date: "2023.02.13", hour: "11:00" },
      views: 8700,
      sold: 6249,
      revenue: 516000000,
      products: 17,
    },
    {
      index: 5,
      title: "우리아이 방학 간식으로 딱🥰사세 치킨 3봉 골라담기!",
      site: "네이버쇼핑LIVE",
      link: "https://datalab.labangba.com/report/labang/7859fd470d92389b0c83fe73c54f909b",
      category: "식품",
      time: { date: "2023.02.13", hour: "10:30" },
      views: 166123,
      sold: 17712,
      revenue: 420000000,
      products: 1,
    },
    {
      index: 6,
      title: "[50만원상당혜택포함] 괌 특급 롯데호텔 클럽룸UP 4/5일 초특가",
      site: "쓱라이브",
      link: "https://datalab.labangba.com/report/labang/186926f399e784e5695484de761e7bfc",
      category: "식품",
      time: { date: "2023.02.13", hour: "20:00" },
      views: 12912,
      sold: 414,
      revenue: 362000000,
      products: 3,
    },
    {
      index: 7,
      title: "디지털가전빅세일 '삼성 갤럭시북3'편",
      site: "G라이브",
      link: "https://datalab.labangba.com/report/labang/c0c14586d1e10da5d72bcfee6021399e",
      category: "디지털/가전",
      time: { date: "2023.02.14", hour: "20:00" },
      views: 843123,
      sold: 149,
      revenue: 335000000,
      products: 1,
    },
    {
      index: 8,
      title: "뛰어난 성능, 뛰어난 혜택 ASUS노트북",
      site: "11번가 라이브11",
      link: "https://datalab.labangba.com/report/labang/2bf3239fed476a818ff3bd107ac50b21",
      category: "디지털/가전",
      time: { date: "2023.02.15", hour: "19:00" },
      views: 429123,
      sold: 246,
      revenue: 333000000,
      products: 3,
    },
    {
      index: 9,
      title: "스타벅스로 미리 만나는 봄! MD선출시 with 해나",
      site: "네이버쇼핑LIVE",
      link: "https://datalab.labangba.com/report/labang/616466fd8b045e81d1563cfe04d3ce23",
      category: "생활/건강",
      time: { date: "2023.02.14", hour: "18:59" },
      views: 615123,
      sold: 8666,
      revenue: 285000000,
      products: 30,
    },
    {
      index: 10,
      title: "[메가세일] 최대 50% 할인+사은품+빠른배송",
      site: "네이버쇼핑LIVE",
      link: "https://datalab.labangba.com/report/labang/9bde11cd0775e43d53446ec1191d5c85",
      category: "화장품/미용",
      time: { date: "2023.02.14", hour: "19:59" },
      views: 5554,
      sold: 9838,
      revenue: 275000000,
      products: 7,
    },
  ];
  const Maxdata = {
    viewMax: 843123,
    soldMax: 17700,
    revenueMax: 2500000000,
  };
  // '숫자 1만이 넘을시' ~만으로 값을 변환시켜주는 함수
  const TenThousand = (x) => {
    if (x > 10000) {
      let a = parseFloat((x / 10000).toFixed(2));
      a += "만";
      return a;
    } else {
      return x.toLocaleString();
    }
  };
  // ~억으로 값을 변환시켜주는 함수
  const HundredMillion = (x) => {
    return parseFloat((x / 100000000).toFixed(2)) + "억";
  };
  const ViewsMax = (views) => ({
    width: `${(views / Maxdata.viewMax) * 100 - 10}%`,
  });
  const SoldMax = (sold) => ({
    width: `${(sold / Maxdata.soldMax) * 100 - 10}%`,
  });
  const RevenueMax = (revenue) => ({
    width: `${(revenue / Maxdata.revenueMax) * 100 - 10}%`,
  });
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <div className={style.Title}>
          <span>
            라방랭킹
            <i />
            <div className={style.Tooltip}>
              <div>
                <h5>라방랭킹</h5>
                <i />
              </div>
              <p>
                상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기 라방
                랭킹
              </p>
            </div>
          </span>
        </div>
        <div className={style.SubTitle}>
          <span>72시간 동안 가장 매출액 높은 라이브방송</span>
        </div>
        <table className={style.Ranking}>
          <thead className={style.RankingTitle}>
            <tr>
              <th></th>
              <th>
                <span>방송정보</span>
              </th>
              <th>
                <span>분류</span>
              </th>
              <th>
                <span>방송시간</span>
              </th>
              <th>
                <span>조회수</span>
              </th>
              <th>
                <span className={style.Thead}>
                  판매량 <i className={style.SmallIcon} />
                  <div className={style.Tooltip}>
                    <div>
                      <h5>라방랭킹</h5>
                      <i />
                    </div>
                    <p>
                      상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기
                      라방 랭킹
                    </p>
                  </div>
                </span>
              </th>
              <th>
                <span className={style.Thead}>
                  매출액 <i className={style.SmallIcon} />
                  <div className={style.Tooltip}>
                    <div>
                      <h5>라방랭킹</h5>
                      <i />
                    </div>
                    <p>
                      상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기
                      라방 랭킹
                    </p>
                  </div>
                </span>
              </th>
              <th>
                <span>상품수</span>
              </th>
            </tr>
          </thead>
          <tbody className={style.RankingContents}>
            {data.map((data) => (
              <tr>
                <td className={style.Index}>
                  <span>{data.index}</span>
                </td>
                <td className={style.Subject}>
                  <a href={data.link}>
                    <span>
                      {data.title} <br />
                    </span>
                    <span>{data.site}</span>
                  </a>
                </td>
                <td className={style.Category}>{data.category}</td>
                <td className={style.Date}>
                  <span>
                    {data.time.date}
                    <br />
                  </span>
                  <span>{data.time.hour}</span>
                </td>

                <td className={style.Number}>
                  <span>{TenThousand(data.views)}</span>
                  <div
                    className={style.NumberGraph}
                    style={ViewsMax(data.views)}
                  />
                </td>
                <td className={style.Number}>
                  <span>{TenThousand(data.sold)}</span>
                  <div
                    className={style.NumberGraph}
                    style={SoldMax(data.sold)}
                  />
                </td>
                <td className={style.Number}>
                  <span>{HundredMillion(data.revenue)}</span>
                  <div
                    className={style.NumberGraph}
                    style={RevenueMax(data.revenue)}
                  />
                </td>
                <td className={style.Number}>
                  <span>{data.products.toLocaleString()}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contents;
