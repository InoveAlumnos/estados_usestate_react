const MiTarjeta = (props) => {
  // En este caso se crea un contenedor principal
  // "div" dado que JSX espera que siempre retornemos
  // un elemento padre que agrupe a todos
  // podría utilizarse <> .... </> en vez de div
  // dado que no estamos aprovechando ninguna propiedad de div

  return (
    <div>
      <h2>Tarjeta: {props.nombre}</h2>
      {props.children}
    </div>
  );
};

export default MiTarjeta;
