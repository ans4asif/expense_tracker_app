import React ,{useContext}from 'react';

import {GlobalContext} from '../GlobalState';
// import {TransactionHistory} from './TransactionHistory';
// import {getIncome} from './Balance';
export const AccountSummary = () => {
    const {transactions} = useContext(GlobalContext);

   
    const transactionalAmounts=transactions.map((transaction)=>transaction.amount);

    console.log(transactionalAmounts);
    const income=( transactionalAmounts
    .filter(transaction=>transaction >0)
    .reduce((acc,transaction)=>(acc+=transaction),0)
    .toFixed(2));

    const expense=(transactionalAmounts
    .filter(transaction=>transaction<0)
    .reduce((acc,transaction)=>(acc+=transaction),0)
    .toFixed(2));
 
    console.log(transactionalAmounts
        .filter(transaction=>transaction<0).reduce((acc,transaction)=>(acc+=transaction),0).toFixed(2));
    
    return (
        <div className='income-expense-tab'>
            <div id='income'>
                <h3>Income</h3>
    <h2 className='income'>{income}</h2>
                
            </div>
            <div id='expense'>
            <h3>Expense</h3>
    <h2 className='expense'>{expense}</h2>
                
            </div>
            
        </div>
    )
    
}
