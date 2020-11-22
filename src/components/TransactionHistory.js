import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';

import { Transactions } from '../components/Transactions';


export const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext);

    // const getIncome = () => {
    //     let income = 0;
    //     for (var i = 0; i < transactions.length; i++) {
    //         if (transactions[i].amount > 0)
    //             income = income + transactions[i].amount
    //     }
    //     return income;
    // }

    // const getExpense = () => {
    //     let expense = 0;
    //     for (var i = 0; i < transactions.length; i++) {
    //         if (transactions[i].amount < 0)
    //             expense += transactions[i].amount
    //     }
    //     return expense;
    // }


    return (
        <div>
            
            <hr />
            <h3>Transaction History</h3>
            <ul className='list'>
                {transactions.map(transaction=>( <Transactions key={transaction.id} transaction={transaction}/>))}
               

            </ul>
        </div>
    )
}
