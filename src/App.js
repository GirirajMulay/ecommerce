import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import ProductList from './ProductList/ProductList.js'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import ProductDetails from './ProductList/ProductDetails';
import Checkout from './Checkout';
import Cart from './Cart';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoute : 0
    }
  }
  render() {
    let {activeRoute} = this.state;
    return (
      <Router> 
      <div className="App">
        <Grid container direction='column'>
          <Grid item style={{backgroundColor:'#f1f1f1', padding:'10px', height:'50px'}}>
            {/* <Header></Header> */}

          </Grid>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/products/:id" component={ProductDetails}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
          {/* <Route exact path="/coaches/:id" component={Coches}/>
          <Route exact path="/sigin" component={Sigin}/>
          <Route path ='*' render={()=> <div>ohhh You Lost!!</div>}/>
           */}
        </Grid>
      </div>
      </Router>
    );
  }
}

export default App;
