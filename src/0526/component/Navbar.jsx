export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <button className="btn btn-outline-success position-relative" type="button">
                    購物車
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                        99
                    </span>
                </button>
            </div>
        </nav>
    )
}