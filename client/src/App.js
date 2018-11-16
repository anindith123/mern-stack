import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './component/AppNavbar';
import ShoppingList from './component/Shopping_list';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './component/itemModal';
import {Container} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
        <ItemModal/>
        <ShoppingList/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
