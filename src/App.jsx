import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CardPage } from "./pages/CardPage";
import BillPage from "./pages/BillPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticsPage from "./pages/StatisticsPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/bills" element={<BillPage/>}/>
          <Route path="/customers" element={<CustomerPage/>}/>
          <Route path="/statistics" element={<StatisticsPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
