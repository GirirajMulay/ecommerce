import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProductDetail} from './ProductDetails';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  showProductDetails(index){
    this.props.history.push(`/products/${index}`);
}
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="products">
          {items.map((item) => (
            <li key={item.id}>
              <div className="product">                
                <img className="product-image" src={item.image} alt="product"/>
                <div className="product-name" onClick={()=> this.showProductDetails(item.id)}>
                {item.title}
                  {/* <Route exact path="/" component={ProductDetail}>{item.title}</Route> */}
                  {/* <Link to={'/product/'+ item.id}>{item.title}</Link> */}
                </div>
                <div className="product-brand">Brand</div>
                <div className="product-price">${item.price}</div>               
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default ProductList;