import { v4 as uuidv4 } from 'uuid';


export default function GlobalReducer(currentState,action){
    
    switch(action.type){
        case("DELETED_TRANSACTION"):{
            const newTransaction = currentState.transaction.filter((item)=>{
                return item.id !== action.payload;
            });

            localStorage.setItem("transaction",JSON.stringify({...currentState,transaction:newTransaction}))
            return {...currentState,transaction:newTransaction};
        }

        case("ADD_TRANSACTION"):{
            const newTransaction = {
                id:uuidv4(),
                description:action.payload.description,
                amount:action.payload.amount
            }

            localStorage.setItem("transaction",JSON.stringify({...currentState,transaction:[...currentState.transaction,newTransaction]}));

            return{...currentState,transaction:[...currentState.transaction,newTransaction]};
        }

        default:{
            return currentState;
        }
    }

}