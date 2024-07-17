import { Routes, Route} from "react-router-dom" 
import Home from "./components/Home"
import Leads from "./components/Leads"
import LeadStateHistory from "./components/LeadStateHistory"
import Nav from "./components/Nav"

function App() {
    return  <div className="min-h-screen bg-gray-100">
                <Nav />
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/leads" element={<Leads/>} />
                        <Route path="/leads-state-history" element={<LeadStateHistory/>} />
                        <Route path="*" element={<Home/>} />
                    </Routes>
                </div>
            </div>
}

export default App