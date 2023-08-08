import React from "react";
import macbook from "/public/peripherals/macbook.png"
import mouse from "/public/peripherals/mx-master.png"
import keyboard from "/public/peripherals/mx-keys.png"
import monitor from "/public/peripherals/monitor.png"

export default function HardwareCard(props) {
    const hardwareProducts = [
        {id: 1, name:"Macbook Air M1", image: macbook},
        // {id: 2, name:"Odyssey G5 34", image: monitor},
        {id: 3, name:"MX Keys Mini", image: keyboard},
        {id: 4, name:"MX Master 3", image: mouse}
    ];

    const [selectedProduct, setSelectedProduct] = React.useState(hardwareProducts[0]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };


    return (
        <div className={props.className}>
            <h2>Current hardware</h2>
            <div className="hardware-grid">
                <div className="hardware-grid-left">
                    {hardwareProducts.map((product) => (
                        <p
                            className={`hardware-item ${selectedProduct.id === product.id ? "active" : ""}`}
                            key={product.id}
                            onClick={()=>handleProductClick(product)}
                        >
                            {product.name}
                        </p>
                    ))}
                </div>
                <div className="hardware-grid-right">
                    <img src={selectedProduct.image} alt={selectedProduct.name} loading="lazy" />
                </div>
            </div>
        </div>
    )
}