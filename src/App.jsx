import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './templates/header.jsx';
import SideNav from './templates/SideBar.jsx';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AccountContainer from "./containers/AccountContainer.jsx";
import PaymentContainer from "./containers/PaymentContainer.jsx";
import CustomerContainer from "./containers/CustomerContainer.jsx";
import DepositContainer from "./containers/DepositContainer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div><Header /></div>
                <div className="row">
                    <div className="col-2">
                        <SideNav />
                    </div>
                    <div className="col-10">
                        <Routes>
                            {/* Redirect root path to /payments */}
                            <Route path="/" element={<Navigate to="/payments" replace />} />

                            <Route path="/payments" element={<PaymentContainer />} />
                            <Route path="/accounts" element={<AccountContainer />} />
                            <Route path="/customers" element={<CustomerContainer />} />
                            <Route path="/deposits" element={<DepositContainer />} />
                            {/* fallback */}
                            <Route path="*" element={<Navigate to="/payments" replace />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
