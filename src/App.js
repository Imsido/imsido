
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Text from './components/Text/Text';
import Info from './components/info/Info';
import {ProviderExcel} from './context/DataExcel'
import Provider from './context/Provider';

function App() {
  return (

    <div className="App">
      <ProviderExcel>
        <Provider>
          <Header />
          <Menu />
          <Text/>
          <Main />  
          <Info />
        </Provider>
      </ProviderExcel>
    </div>
  );
}

export default App;
