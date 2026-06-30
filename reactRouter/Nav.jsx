import { NavLink } from "react-router-dom";

function Nav({ title ,items,cartSize}) {
   
  return (<>
    <nav className="navbar navbar-dark bg-dark  p-3">
      <div className="container">
        <h1 className="navbar-brand">🛒
           {title}</h1>

        <div>
          <NavLink to="/" className="text-light text-decoration-none me-3 ">
            Home
          </NavLink>

          <NavLink to="/products" className="text-light text-decoration-none me-3">
            Products({items})
          </NavLink>

          <NavLink to="/user" className="text-light text-decoration-none me-3">
            Users
          </NavLink>

          <NavLink to="/contact" className="text-light text-decoration-none me-3">
            Contact
          </NavLink>
          <NavLink to="/about" className="text-light text-decoration-none me-3">
            About
          </NavLink>
           <NavLink to="/dashboard" className="text-light text-decoration-none  me-3">
            Dashboard
          </NavLink>
          <NavLink to="/cart" className="text-light text-decoration-none">
          Cart({cartSize})
          </NavLink>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;