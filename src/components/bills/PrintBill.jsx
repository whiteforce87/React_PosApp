import { Modal, Button } from "antd";
import React from "react";

function PrintBill({ isModalOpen, setIsModalOpen }) {
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 selection:grid-cols-4 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura Detayı:</p>
                  Eşya
                  <p>Street 123</p>
                  <p>Oak village</p>
                  <p>Ca 12223</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura</p>
                  Company
                  <p>Street 123</p>
                  <p>Oak village</p>
                  <p>Ca 12223</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Fatura Numarası</p>
                    <p>089123</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700">Date of Issue</p>
                    <p>2022-11-02</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700">Terms</p>
                    Unwrapped
                  </div>
                  <div>
                    <p className="font-bold text-slate-700">Due</p>
                    2023-01
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                    {" "}
                      Başlık
                    </th>
                    <th
                    colSpan="4"
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                    >
                    {" "}
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5  text-center text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5  text-center text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5  text-end text-sm font-normal text-slate-700  md:pl-0 " 
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      ></img>
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                        <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">Birim Fiyatı 5₺</span>
                        </div>
                    </td>
                    <td className="py-4 sm:hidden">
                        <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">Birim Fiyatı 5₺</span>
                        </div>
                    </td>
                    <td className="py-4 sm:text-center sm:table-cell hidden">
                      <span>5₺</span>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4  text-right" colSpan="4">
                      <span>5.00₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-right pt-6 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th className="text-left pt-6 sm:hidden" scope="row" colSpan="4">
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th className="text-right pt-6" scope="row" colSpan="4">
                      <span className="font-normal text-slate-700">
                        60₺
                      </span>
                    </th>
                    </tr>
                    <tr>
                    <th className="text-right pt-4 sm:table-cell hidden" scope="row" colSpan="4">
                      <span className="font-normal text-slate-700">
                        Kdv
                      </span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Kdv
                      </span>
                    </th>
                    
                    <th className="text-right pt-3" scope="row">
                      <span className="font-normal text-red-700">
                        10.8₺
                      </span>
                    </th>
                    </tr>
                    <tr>
                    <th className="text-end pt-4 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Toplam
                      </span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Toplam
                      </span>
                    </th>
                    <th className="text-right pt-3" scope="row">
                      <span className="font-normal text-slate-700">
                        70.8₺
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9">
                <p className="text-sm font-light text-slate-700">
                    "Ödemenizi kredi kartı ya da iban ile yapabilirsiniz. 
                    14 gün içinde ödenmezse iade gerçekleşmediği taktirde yasal olarak %8 ceszası bulunmaktadır."
                </p>
              </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
      <Button type="primary" size="large">Yazdır</Button>
      </div>
    </Modal>
  );
}

export default PrintBill;
