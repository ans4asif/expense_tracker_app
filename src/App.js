import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import {Header} from './components/Header';
import {AccountSummary} from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './GlobalState';

function App() {
  return (
    <GlobalProvider>
     <div className='container'>
        <Header/>
       <Balance/>
       <AccountSummary/>
       <TransactionHistory/>
       <AddTransaction/>
     </div>
     </GlobalProvider>
     
  );
}

export default App;
