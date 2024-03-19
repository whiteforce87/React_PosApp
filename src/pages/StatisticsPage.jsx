import React from "react";
import Header from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";
import { useState, useEffect } from 'react';
import { Area, Pie } from "@ant-design/charts";

export default function StatisticsPage () {

const [data, setData] = useState([]);

useEffect(() => {
  asyncFetch();
}, []);

const asyncFetch = () => {
  fetch(
    "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
  )
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};


const config = {
  data,
  xField: "timePeriod",
  yField: "value",
  xAxis: {
    range: [0, 1],
  },
};

const config2 = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
      <h1 className="text-4xl bold text-center mb-4">İstatisklerim</h1>
      <div className="statistic-section">
        <h2 className="text-lg">Hoş geldin  {" "}
            <span className="text-green-700 font-bold text-x1">admin</span>.</h2>
      <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2  my-10 md:gap-10 gap-4">
        <StatisticCard title={"Toplam Müşteri"} amount={"6"} img={"images/user.png"}/>
        <StatisticCard title={"Toplam Kazanç"} amount={"66.00₺"} img={"images/money.png"}/>
        <StatisticCard title={"Toplam Satış"} amount={"2"} img={"images/sale.png"}/>
        <StatisticCard title={"Toplam Ürün"} amount={"28"} img={"images/product.png"}/>
      </div>
      <div className="flex justify-between gap-10 lg:flex-row flex-col items-center"> 
      <div className="lg:w-1/2 lg:h-full h-72"><Area {...config}/></div>
      <div className="lg:w-1/2 lg:h-full h-72"><Pie {...config2}/></div>
        </div>
      </div>

      </div>
    </>
  );
};
