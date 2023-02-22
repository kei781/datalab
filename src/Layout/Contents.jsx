import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Contents.module.css";

const Contents = () => {
  const [data, setData] = useState([]);
  const [viewMax, setViewMax] = useState(0);
  const [soldMax, setSoldMax] = useState(0);
  const [revenueMax, setRevenueMax] = useState([]);
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/data`,
          method: "GET",
        });
        setData(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    // 최대 최솟값구하기
  }, []);

  data.map((data) => {
    if (data.views > viewMax) {
      setViewMax(data.views);
    }
    if (data.sold > soldMax) {
      setSoldMax(data.sold);
    }
    if (data.revenue > revenueMax) {
      setRevenueMax(data.revenue);
    }
  });

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

  //백그라운드 퍼센테이지
  const ViewsMax = (views) => ({
    width: `${(views / viewMax) * 100 - 10}%`,
  });
  const SoldMax = (sold) => ({
    width: `${(sold / soldMax) * 100 - 10}%`,
  });
  const RevenueMax = (revenue) => ({
    width: `${(revenue / revenueMax) * 100 - 10}%`,
  });

  const handleClick1 = () => {
    setShowTooltip1(!showTooltip1);
  };
  const handleClick2 = () => {
    setShowTooltip2(!showTooltip2);
  };
  const handleClick3 = () => {
    setShowTooltip3(!showTooltip3);
  };

  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <div className={style.Title}>
          <span>
            라방랭킹
            <i onClick={handleClick1} />
            {showTooltip1 && (
              <div className={style.Tooltip}>
                <div>
                  <h5>라방랭킹</h5>
                  <i onClick={handleClick1} />
                </div>
                <p>
                  상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기 라방
                  랭킹
                </p>
              </div>
            )}
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
                  판매량
                  <i className={style.SmallIcon} onClick={handleClick2} />
                  {showTooltip2 && (
                    <div className={style.Tooltip}>
                      <div>
                        <h5>라방랭킹</h5>
                        <i onClick={handleClick2} />
                      </div>
                      <p>
                        상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기
                        라방 랭킹
                      </p>
                    </div>
                  )}
                </span>
              </th>
              <th>
                <span className={style.Thead}>
                  매출액{" "}
                  <i className={style.SmallIcon} onClick={handleClick3} />
                  {showTooltip3 && (
                    <div className={style.Tooltip}>
                      <div>
                        <h5>라방랭킹</h5>
                        <i onClick={handleClick3} />
                      </div>
                      <p>
                        상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기
                        라방 랭킹
                      </p>
                    </div>
                  )}
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
