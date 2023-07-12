import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";
import Pricing from "./pages/Pricing";
import EstimatePage from "./pages/EstimatePage";
import { createContext } from "react";
import { EstimateService } from "./services/estimateService";
import MyEstimates from "./pages/MyEstimate";
import EstimateDetails from "./pages/EstimateDetails";

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

const mockData: Estimate[] = [
  {
    id: "1",
    estimateNumber: "123",
    estimateDate: new Date("12/08/11"),
    paymentDate: new Date("12/31/2022"),
    title: "Super Estimate from Hell",
    tasks: [
      {
        reference: "frfs",
        description: "French Fries",
        quantity: 2,
        unitPrice: 4.99,
        deposit: 0,
        vat: 20,
      },
      {
        reference: "pzz",
        description: "Pizza Regina",
        quantity: 4,
        unitPrice: 12,
        deposit: 5,
        vat: 20,
      },
    ],
  },
  {
    id: "2",
    estimateNumber: "456",
    estimateDate: new Date("12/12/11"),
    paymentDate: new Date("12/30/2022"),
    title: "Another Great Estimate",
    tasks: [
      {
        reference: "drn",
        description: "Flying Drone",
        quantity: 1,
        unitPrice: 419.99,
        deposit: 100,
        vat: 20,
      },
      {
        reference: "smrtphn",
        description: "iPhone 13",
        quantity: 1,
        unitPrice: 989.6,
        deposit: 200,
        vat: 20,
      },
    ],
  },
];

const estimateService = new EstimateService([...mockData]);
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
        <Route path="/my-estimates/:id" element={<EstimateDetails />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
