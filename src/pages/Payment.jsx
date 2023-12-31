import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";


const Payment=({userToken})=>{
    const location = useLocation();
    const stripePromise = loadStripe(
        "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
      );
     
    return userToken ? ( <Elements stripe={stripePromise}>
        <CheckoutForm paymentInfos={location.state}/>
      </Elements>):(<Navigate to="/login"/>)

    
}
export default Payment