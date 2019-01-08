import React, { Component } from 'react';
import './App.css';
import AddendOnePage from '../../features/AddendOne/components/AddendOnePageWrap'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { MultiNumberPage } from '../../features/MultiNumberPage/components/MultiNumberPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddendOnePage />
          <MultiNumberPage/>
        </div>
      </Provider>
    );
  }
}

export default App;
