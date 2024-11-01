import { useState } from "react";
import { Encabezado } from "./componentes/Encabezado";
import { Guitarras } from "./componentes/Guitarras";
import { db } from "./dataBase/db";

function App() {
  const [data, setData] = useState(db);

  const [cart, setCart] = useState([]);

  const addToCart = (elem) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === elem.id);
    if (itemExists >= 0) {
      //   alert("El producto ya está en el carrito");
      const updatecart = [...cart];
      updatecart[itemExists].quantity++;
      setCart(updatecart);
    } else {
      elem.quantity = 1;
      alert("El producto ha sido agregado al carrito");
      setCart([...cart, elem]);
    }
    // console.log(data)
    // setCart([...cart, elem]);
  };
  console.log(cart)
  return (
    <>
      <Encabezado cart={cart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitarras
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              setCart={setCart}
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
