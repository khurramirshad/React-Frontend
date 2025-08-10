import './header.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/">

                    <span className="fw-bold fs-5">Solance</span>
                </a>

                <form className="d-flex ms-auto" role="search">
                    <input
                        className="form-control form-control-sm me-2"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        style={{ maxWidth: '300px' }}
                    />
                    <button className="btn btn-sm btn-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
