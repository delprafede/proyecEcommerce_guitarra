export const Guitarras = ({ guitar, setCart, cart }) => {
  const { id, name, description, image, price } = guitar;
 
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt="hola" />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>

        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => setCart((previewCart) => [...previewCart, guitar])}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
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
