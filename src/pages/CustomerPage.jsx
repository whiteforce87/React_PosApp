import React from "react";
import Header from "../components/header/Header";
import { Table } from "antd";

export default function CustomerPage () {


  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="text-4xl bold text-center mb-4">Müşteriler</div>
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
      </div>
    </>
  );
};
