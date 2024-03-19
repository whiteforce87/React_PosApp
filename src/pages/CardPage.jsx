import React from "react";
import Header from "../components/header/Header";
import { Button, Card, Space, Table } from "antd";
import { useState } from "react";
import CreateBill from "../components/card/CreateBill";

export const CardPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);


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
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
        <div className="cardTotal flex justify-end mt-4">
          <Space direction="vertical" size={16}>
            <Card className="w-72"
              size="small"
              //title="Small size card"
              //extra={<a href="#">More</a>}
             // style={{
             //   width: 300,
             // }}
            >
                <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span> 600.00 ₺</span>
              </div>
              <div className="flex justify-between my-2">
              <span>Kdv toplam %8</span>
              <span className="text-red-600"> 48.00₺</span>
              </div>
              <div className="flex justify-between">
              <span>Toplam</span>
              <span> 648.00₺</span>
              </div>
            </Card>
            <div>
                <Button className="mt-4 w-full bg-blue-600" type="primary" size="large" onClick={() => setIsModalOpen(true)}>Sipraiş Oluştur</Button>
            </div>
          </Space>
          <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
      </div>
    </>
  );
};
