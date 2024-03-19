import { Modal, Form ,Input, Select, Card, Button } from 'antd'
import React from 'react'

function CreateBill({isModalOpen, setIsModalOpen}) {

    const onFinish= (values) =>{

    }


  return (
    
    <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
        <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label="Müşteri Adı" name="customerName" rules={[{ required: true, message: "Username is required" }]} >
                <Input placeholder='Bir müşteri adı yazınız'></Input>
            </Form.Item>
            <Form.Item label="Tel No">
                <Input placeholder='Bir Tel no yazınız' maxLength={11}></Input>
            </Form.Item>
            <Form.Item label="Ödeme Yöntemi" name="paymentMode" rules={[{ required: true, message: "PaymentType is required" }]}>
                <Select placeholder="Ödeme Yöntemi Seçiniz">
                    <Select.Option value="Nakit">Nakit</Select.Option>
                    <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                </Select>
            </Form.Item>
            <Card 
              //size="large"
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
            <div className='flex justify-end'>
                <Button className="mt-4  bg-blue-600" type="primary" size="large" onClick={() => setIsModalOpen(true)} htmlType='submit'>
                    Sipraiş Oluştur</Button>
            </div>

        </Form>
    </Modal>
    
  )
}

export default CreateBill