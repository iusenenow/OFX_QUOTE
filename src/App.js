import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CurrencyForm from './CurrencyForm';
import CurrencyResult from './CurrencyResult';
import { FormProvider } from './FormContext'

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <div className="App">
          <h2 className="title">OFX Currency Converter</h2>
          <Switch>
            <Route exact path='/' component={CurrencyForm} />
            <Route exact path='/result' component={CurrencyResult} />
          </Switch>
        </div>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
