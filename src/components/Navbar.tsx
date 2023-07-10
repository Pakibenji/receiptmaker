import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new-estimate">New estimate</NavLink>
      <NavLink to="/new-receipt">New Receipt</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
    </nav>
  );
}
