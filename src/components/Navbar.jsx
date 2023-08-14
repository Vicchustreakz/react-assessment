import { useNavigate } from "react-router-dom";
import '../index.css';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand pointer" onClick={() => navigate("/")}>
          React Contact App
        </a>

        <div>
          <button className="btn btn-outline-primary btn-light my-2 my-sm-0"
          onClick={() => navigate("/create-form")}>Create Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
