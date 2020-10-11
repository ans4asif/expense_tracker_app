import React ,{useContext}from 'react'
import {GlobalContext} from '../GlobalState';

export const Transactions = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext);
    const sign=transaction.amount<0 ?'':'+' ;
    return (
        <li className={transaction.amount<0 ?'minus':'plus'}> {transaction.description}
                <span className='amount'>{sign}${transaction.amount}</span>
                    <button onClick={()=>deleteTransaction(transaction.id)} className='delete'>X</button>
                </li>
    )
}
