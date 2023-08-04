import React from "react";
import macbook from "/public/peripherals/macbook.png"
import mouse from "/public/peripherals/mx-master.png"
import keyboard from "/public/peripherals/mx-keys.png"

export default function HardwareCard() {
    const hardwareProducts = [
        {id: 1, name:"Macbook Air M1", image: macbook},
        {id: 2, name:"MX Keys Mini", image: keyboard},
        {id: 3, name:"MX Master 3", image: mouse}
    ];

    const [selectedProduct, setSelectedProduct] = React.useState(hardwareProducts[0]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };


    return (
        <div className="hardware-card">
            <h2>Current hardware</h2>
            <div className="hardware-grid">
                <div className="hardware-grid-left">
                    {hardwareProducts.map((product) => (
                        <p
                            className="hardware-item"
                            key={product.id}
                            onClick={()=>handleProductClick(product)}
                            style={{color: selectedProduct.id === product.id ? "black" : "#6e6e6e73"}}
                        >
                            {product.name}
                        </p>
                    ))}
                </div>
                <div className="hardware-grid-right">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
            </div>
        </div>
    )
}