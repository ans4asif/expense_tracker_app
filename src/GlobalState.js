import React,{ createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
export const initialState ={
    transactions:[
        {id:1,description:'car',amount:10000},
        {id:2,description:'grocery',amount:3000},
        {id:3,description:'payment',amount:-500},
        {id:4,description:'burger',amount:-90},
    ]
    

}


export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
const [state,dispatch]=useReducer(AppReducer,initialState);
//Actions
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    });

}

function addTransaction(transactions){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transactions     
    });

}
return(
   < GlobalContext.Provider value={{
       transactions:state.transactions,
       deleteTransaction,
       addTransaction
   }}>
   {children}
   </GlobalContext.Provider>
)
}
