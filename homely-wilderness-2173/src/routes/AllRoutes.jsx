import { Routes, Route } from "react-router-dom";
import ProductPage from "../components/ProductPageLink";
import Checkout from "./checkcout";
import Payment from "./payment";
import Signup from "./signup";
import WomensPage from "./WomensPage"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<WomensPage/>} />
            <Route path="/menpage" element={<ProductPage/>} />
            <Route path="/kidspage" element={<ProductPage/>} />
            <Route path="/lifepage" element={<ProductPage/>} />
            <Route path="/newsletter" element={<WomensPage/>} />
            <Route path="/myaccount" element={<Signup/>} />
            <Route path="/productPage" element={<ProductPage/>} />
            <Route path="/paymentpage" element={<Payment/>}/>
            <Route path="/checkoutpage" element={<Checkout/>}/>
        </Routes>
    )
}

export default AllRoutes;