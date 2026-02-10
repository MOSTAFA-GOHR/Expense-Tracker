import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import ExpenseAndIncome from './components/ExpenseAndIncome';
import Header from './components/Header';
import TransActionList from './components/TransActionList';
import { GloblaProvider } from './contexts/GlobaleState';


function App() {

  return (
    <GloblaProvider>
      <div className='app'>
        <Header />
        <div className='container'>
          <Balance />
          <ExpenseAndIncome />
          <TransActionList />
          <AddTransaction />
        </div>
      </div>
    </GloblaProvider>
  )
}

export default App
