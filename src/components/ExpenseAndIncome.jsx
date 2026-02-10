import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobaleState";


export default function ExpenseAndIncome() {
    const {transaction} = useContext(GlobalContext);
    const amount = transaction.map((item)=>{
        return Number(item.amount);
    });
    
    const income = amount.filter((item)=>{
        return item > 0;
    }).reduce((acc,cur)=>{
        return acc += cur;
    },0);

    const expense = amount.filter((item)=>{
        return Number(item) < 0;
    }).reduce((acc,cur)=>{
        return Math.abs(acc) + Math.abs(cur);
    },0);

    return (
        <div className='expense-and-income'>
            <div >
                <h4 >Expense</h4>
                <h1 className="header-expense">${expense==0?"":'-'}{expense}</h1>
            </div>
            <hr className="hr"/>
            <div >
                <h4 >Income</h4>
                <h1 className="header-income">${Math.abs(income)}</h1>
            </div>
        </div>
    )
}
