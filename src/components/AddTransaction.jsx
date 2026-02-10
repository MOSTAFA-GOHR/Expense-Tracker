import { useState, useContext } from 'react'
import {GlobalContext} from '../contexts/GlobaleState'

export default function AddTransaction() {
    const [input, setInput] =useState({
        description: "",
        amount:""
    });

    const {dispatch}=useContext(GlobalContext);

    //handler
    const HandleSubmit =(e)=>{
        e.preventDefault();
        if (!input.description.trim() || input.amount === 0) return;

        dispatch({
            type: "ADD_TRANSACTION",
            payload:input
        });
        
    // reset form
    setInput({ description: "", amount: "" });
    };

    const HandleDescription = (e)=>{
        setInput({...input,description:e.target.value});
    };

    const HandelAmount =(e)=>{
        setInput({...input,amount:+e.target.value});
    };
    
    return (
        <>
            <h2>Add Transactions</h2>
            <hr className='h-h' />
            <form className='form' onSubmit={HandleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name' >Description</label>
                    <input type='text' value={input.description} onChange={HandleDescription} id='name' placeholder='Enter Description...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount' >Amount
                        <br />
                        (negatice - expense, postive - income)
                    </label>
                    <input type='number' value={input.amount} onChange={HandelAmount} id='amount' placeholder='Enter Amount...' />
                </div>
                <button className='btn' type='submit'>Add Transaction</button>
            </form>
        
        </>
    )
}
