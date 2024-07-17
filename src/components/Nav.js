import { Link } from "react-router-dom"

function Nav() {
    return <nav className="bg-blue-600 p-4 text-white">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">
                        Inicio
                    </Link></li>
                    <li><Link to="/leads" className="hover:underline">
                        Leads
                    </Link></li>
                    <li><Link to="/leads-state-history" className="hover:underline">
                        Historiales de Estado de Leads
                    </Link></li>
                </ul>
            </nav>
}

export default Nav