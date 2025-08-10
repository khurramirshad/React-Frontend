import { NavLink } from "react-router-dom";
import "./SideNav.css"; // custom styles

function SideNav() {
    return (
        <div className="sidenav">
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <NavLink to="/accounts" className="nav-link">
                        <i className="bi bi-bank me-2"></i> Accounts
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/customers" className="nav-link">
                        <i className="bi bi-people me-2"></i> Customers
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/payments" className="nav-link">
                        <i className="bi bi-cash-stack me-2"></i> Payments
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/deposits" className="nav-link">
                        <i className="bi bi-wallet2 me-2"></i> Deposits
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideNav;
