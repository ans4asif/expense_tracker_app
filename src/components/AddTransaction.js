import React,{useState,useContext} from 'react'
import {GlobalContext} from '../GlobalState'
export const AddTransaction = () => {
    const[description,setDescription]=useState('');
    const[amount,setAmount]=useState('');
    const {addTransaction}=useContext(GlobalContext);
    const onSubmit= e =>{
        
            e.preventDefault();

            const  newTransaction={
                //  id: Math.floor(Math.random() * 100000000),
            
                description,
                amount
            }
      addTransaction(newTransaction);

        }
    return (
        <div>
            <hr/>
            <h3>Add new transaction</h3>
            
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder="Enter Transaction Detail"/>
                </div>

                <div className='form-control'>
                    <label htmlFor="Amount">Amount</label>
                    <input type="number"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    placeholder="Enter Amount"/>
                </div>
                <button className='add-btn' >Add Transaction</button>
            </form>
            
        </div>
    )
}
