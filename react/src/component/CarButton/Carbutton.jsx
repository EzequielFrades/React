import React from 'react';

const CartButton = () => {
  // Agrega la lógica para abrir el carrito de compras aquí
  const openCart = () => {
    // Coloca para abrir el carrito
    alert('Carrito de compras abierto');
  };

  return (
    <button onClick={openCart} className="btn btn-primary">
      Carrito
    </button>
  );
};

export default CartButton;
