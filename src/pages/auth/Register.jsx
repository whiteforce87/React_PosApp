import React from "react";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import { Button, Carousel } from "antd";
import { Link } from "react-router-dom";
import AuthComponent from "./AuthComponent";

function Register() {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Kullanıcı Adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Alanı Boş Bırakılamaz",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Email"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Email Adı Alanı Boş Bırakılamaz",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Şifre  Alanı Boş Bırakılamaz",
                },
              ]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item
              label="Şifre Tekrar"
              name={"passwordAgain"}
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Şifre Tekrar  Alanı Boş Bırakılamaz",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "Şifreler Aynı Olmak Zorunda!"
                      )
                    );
                  },
                }),
              ]}

            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabınız var mı? &nbsp;{" "}
            <Link to="/login" className="text-blue-600">
              Şimdi giriş yap
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden  bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
            <Carousel className="!h-full px-6" autoplay>
           <AuthComponent img="/images/responsive.svg" title="Responsive" desc="Tüm Cihazlarla uyumluluk"></AuthComponent>
           <AuthComponent img="/images/statistic.svg" title="İstatistikler" desc="Geniş İstatistik"></AuthComponent>
           <AuthComponent img="/images/customer.svg" title="Müşteri" desc="Müşteri Memnuniyeti"></AuthComponent>
           <AuthComponent img="/images/admin.svg" title="Yönetici Paneli" desc="Tek Yerel Yönetim"></AuthComponent>
           </Carousel>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
