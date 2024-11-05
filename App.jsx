import { useEffect, useState } from "react";
import { Encabezado } from "./componentes/Encabezado";
import { Guitarras } from "./componentes/Guitarras";
import { db } from "./dataBase/db";

function App() {
  //localStorage persistente para no peder los datos al recargar la pagina 
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart") || [];
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (elem) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === elem.id);
    if (itemExists >= 0) {
      const updatecart = [...cart];
      updatecart[itemExists].quantity++;
      setCart(updatecart);
    } else {
      elem.quantity = 1;

      setCart([...cart, elem]);
    }
  };

  const removeFromCart = (elem) => {
    console.log("Eliminando", elem);
    setCart((prevCart) => cart.filter((guitar) => guitar.id !== elem));
    //
  };

  const increment = (id) => {
    const updatecart = cart.map((guitar) => {
      if (guitar.id === id && guitar.quantity < MAX_ITEMS) {
        return { ...guitar, quantity: guitar.quantity + 1 };
      }
      return guitar;
    });
    setCart(updatecart);
  };
  const decrement = (id) => {
    const updatecart = cart.map((guitar) => {
      if (guitar.id === id && guitar.quantity > MIN_ITEMS) {
        return { ...guitar, quantity: guitar.quantity - 1 };
      }
      return guitar;
    });
    setCart(updatecart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Encabezado
        cart={cart}
        removeFromCart={removeFromCart}
        increment={increment}
        decrement={decrement}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitarras
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
