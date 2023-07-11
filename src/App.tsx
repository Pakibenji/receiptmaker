import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";
import Pricing from "./pages/Pricing";
import EstimatePage from "./pages/EstimatePage";
import { createContext, useContext } from "react";
import { EstimateService } from "./services/estimateService";
import MyEstimates from "./pages/MyEstimate";

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

const estimateService = new EstimateService([]);
export const EstimateCtx = createContext(estimateService);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-estimate" element={<EstimatePage />} />
        <Route path="/new-receipt" element={<Receipt />} />
        <Route path="/my-estimates" element={<MyEstimates />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
