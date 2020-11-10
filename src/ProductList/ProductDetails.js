import React, { Component } from 'react';
import ls from 'local-storage'

class ProductDetails extends Component {
    
    constructor(props) {
        super(props);
        // ls.remove("product")
        // console.log("rrtt"+JSON.stringify(ls.get("product")));
        this.state = { id: this.props.match.params.id }
    }

    componentDidMount() {
        fetch(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
            .then(res => res.json())
            .then((result) => {
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

    render(){ 
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
            <div className="details">
                <div className="details-image">
                  <img src={items.image} alt="product"></img>
                </div>
                <div className="details-info">
                  <ul>
                    <li>
                      <h4>{items.title}</h4>
                    </li>                  
                    <li>
                      Price: <b>${items.price}</b>
                    </li>
                    <li>
                      Description:
                      <div>{items.description}</div>
                    </li>
                    <li>
                        <button  className="button primary" onClick={()=>{
                            var cartProducts = JSON.parse(ls.get("products")); 
                            var arrProducts = [];
                            cartProducts.map((product)=>{
                                arrProducts.push(product);
                            });                          
                            arrProducts.push(items);
                            ls.set("products",JSON.stringify(arrProducts))       

                            this.props.history.push(`/cart`);

                        }}>
                      Add to Cart
                    </button>
                    </li>
                  </ul>
                </div>
            </div>  
            );
        }
    }
}

export default ProductDetails;