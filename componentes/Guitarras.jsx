import { useState } from "react";
import { db } from "../dataBase/db";

export const Guitarras = () => {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([db]);

  const addToCart = (elem) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === elem.id);
    if (itemExists >= 0) {
    //   alert("El producto ya está en el carrito");
      const updatecart = [...cart]
      updatecart[itemExists].quantity++;
      setCart(updatecart)
    } else {
      elem.quantity = 1;
      alert("El producto ha sido agregado al carrito");
      setCart([...cart, elem]);
    }

    // setCart([...cart, elem]);
  };

  return data.map((elem) => {
    return (
      <div
        key={elem.id}
        className="col-md-6 col-lg-4 my-4 row align-items-center"
      >
        <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${elem.image}.jpg`}
            alt="hola"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            {elem.name}
          </h3>
          <p>{elem.description}</p>
          <p className="fw-black text-primary fs-3">${elem.price}</p>

          <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => addToCart(elem)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    );
  });
};

{
  /* <div key={data.id} className="col-md-6 col-lg-4 my-4 row align-items-center">
        
        <div className="col-4">
          <img
            className="img-fluid"
            src={data.image}
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{data.name}</h3>
          <p>
           {data.description}
          </p>
          <p className="fw-black text-primary fs-3">${data.price}</p>
          <button type="button" className="btn btn-dark w-100">
            Agregar al Carrito
          </button>
        </div>
      </div> */
}
