import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CurrencyForm from './CurrencyForm';
import CurrencyResult from './CurrencyResult';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <h1>OFX Currency Converter</h1>
          <Route exact path='/' component={CurrencyForm} />
          <Route exact path='/result' component={CurrencyResult} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
