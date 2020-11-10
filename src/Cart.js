import React, { Component } from 'react';
import ls from 'local-storage'


class Cart extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        cartItems: JSON.parse(ls.get("products")),
        };
      }
   
    render(){
        const {  cartItems } = this.state;

        {console.log("IN Cart ...."+cartItems);}
      return (
        <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
              </h3>
              <div>
                Price
              </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
              </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div> {item.title} </div>                     
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                    <div className="cart-price">
                      ${item.description}
                    </div>
    
                  </li>
                )
            }
          </ul>
            <button  className="button primary" onClick={()=>{
                this.props.history.push(`/checkout`);
            }}>
                Checkout
            </button>    
        </div>
      </div>
      );
    }
}

export default Cart;