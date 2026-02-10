import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobaleState";

export default function Balance() {
    const {transaction} = useContext(GlobalContext);
    const amount = transaction.map((item)=>{
        return item.amount
    })
    const total = amount.reduce((acr,item)=>{
        return Number(acr) + Number(item);
    },0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
            <h1>{total}$</h1>
        </div>
    )
}
