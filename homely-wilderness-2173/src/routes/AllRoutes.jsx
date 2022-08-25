import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import WomensPage from "./WomensPage"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<WomensPage/>} />
            <Route path="/menpage" element={<Home/>} />
            <Route path="/kidspage" element={<Home/>} />
            <Route path="/lifepage" element={<Home/>} />
            <Route path="/newsletter" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default AllRoutes;