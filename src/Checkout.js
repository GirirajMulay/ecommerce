import React, { Component } from 'react';
import ls from 'local-storage'


class Checkout extends Component {
    
    constructor(props) {
        super(props);
      }
   
    setAddress(val){
          console.log("In method");
      }
      setCity(val){
        console.log("In method");
    }
    setPostalCode(val){
        console.log("In method");
    }
    setCountry(val){
        console.log("In method");
    }
    
    render(){
    const submitHandler = (e) => {
            e.preventDefault();
            
            // dispatch(saveShipping({ address, city, postalCode, country }));
            // props.history.push('payment');
    }
      return (

        <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Shipping</h2>
            </li>
  
            <li>
              <label htmlFor="address">
                Address
            </label>
              <input type="text" name="address" id="address" onChange={(e) => this.setAddress(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="city">
                City
            </label>
              <input type="text" name="city" id="city" onChange={(e) => this.setCity(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="postalCode">
                Postal Code
            </label>
              <input type="text" name="postalCode" id="postalCode" onChange={(e) => this.setPostalCode(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="country">
                Country
            </label>
              <input type="text" name="country" id="country" onChange={(e) => this.setCountry(e.target.value)}>
              </input>
            </li>
    
            <li>
              <button type="submit" className="button primary">Continue</button>
            </li>
  
          </ul>
        </form>
      </div>
      
      );
    }
}

export default Checkout;