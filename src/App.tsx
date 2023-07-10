import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Estimate from "./pages/Estimate";
import Receipt from "./pages/Receipt";
import Pricing from "./pages/Pricing";

export type Task = {
  reference: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vat: number;
  deposit: number;
};

export type Estimate = {
  id?: string;
  estimateNumber: string;
  estimateDate: Date;
  paymentDate: Date;
  title: string;
  tasks: Task[];
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-estimate" element={<Estimate />} />
        <Route path="/new-receipt" element={<Receipt />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
