import React from 'react';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import data from "./data/products.json";

function App() {
    return (
        <div className="ml-5">
            <div className="row">
                <div class="col-lg-8">
                    <div class="row col-lg-12">
                        {data && data.map((product,i) => 
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{marginTop:"20px"}}>
                                <ProductCard key={i*2} product={product}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="container col-lg-4">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default App
