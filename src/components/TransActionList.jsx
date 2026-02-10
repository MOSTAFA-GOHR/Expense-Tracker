import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobaleState";


export default function TransActionList() {
    const {transaction,dispatch} = useContext(GlobalContext);
    function deletedTransaction(id){
        dispatch({
            type:"DELETED_TRANSACTION",
            payload:id
        })
    }
    
    
    return (
        <div className='transaction-list'>
            <h1>History</h1>
            <hr className='h-h' />
            <ul className='list'>
                {
                    transaction.map((item)=>{
                        return(
                            <li key={item.id} id="li-list" className={item.amount >0?'plus':'minus'}>
                            {item.description} <span>{item.amount}$</span> 
                            <button className='btn-deleted' onClick={()=>{
                                deletedTransaction(item.id)}
                                }>
                                X
                            </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
