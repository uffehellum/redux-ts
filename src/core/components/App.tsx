import React, { Component } from 'react';
import './App.css';
import AddendOnePage from '../../features/AddendOne/components/AddendOnePageWrap'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { MultiNumberPage } from '../../features/MultiNumber/components/MultiNumberPage';
import SumPage from '../../features/Sum/components/SumPageWrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddendOnePage />
          <MultiNumberPage />
          <SumPage />
        </div>
      </Provider>
    );
  }
}

export default App;
