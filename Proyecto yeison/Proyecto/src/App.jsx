import React from 'react';
import { useGlobalState } from './GlobalStateProvider'; 

const App = () => {
    const { state, addToCart, removeFromCart } = useGlobalState();

    const products = [
        { id: 1, name: 'Coach ', price: 380, image: new URL('./assets/Gorra.jpeg', import.meta.url).href },
        { id: 2, name: 'Hugo Boss', price: 400, image: new URL('./assets/Gorra2.jpg', import.meta.url).href },
        { id: 3, name: 'Burberry', price: 200, image: new URL('./assets/Gorra3.jpeg', import.meta.url).href }
    ];
    

    return (
        <div className="container">
            <h1>Caps Imperial</h1>

            <h2>Productos</h2>
            <div className="productos">
                {products.map((product) => (
                    <div className="producto" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>

            <h2>Carrito</h2>
            <div className="carrito">
                {state.cart.length > 0 ? (
                    state.cart.map((item) => (
                        <div className="carrito-item" key={item.id}>
                            <p>
                                {item.name} - ${item.price}
                            </p>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))
                ) : (
                    <p>No has añadido ningún artículo.</p>
                )}
            </div>
        </div>
    );
};

export default App;
