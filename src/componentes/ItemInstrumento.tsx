import '../instrumentos.css';

type InstrumentoArgs = {
    id:number,
    instrumento:string,
    marca:string,
    modelo:string,
    imagen:string,
    precio:number,
    costoEnvio:string,
    cantidadVendida:number,
    descripcion:string,
    categoria:CategoriaArgs
}

type CategoriaArgs = {
    id:number,
    denominacion:string
}

function ItemInstrumento(args : InstrumentoArgs) {
    const img = args.costoEnvio=='G' ? <><img src='./img/camion.png' alt='camion.png'></img></> : '';
    const text = args.costoEnvio=='G' ? 'Envío gratis a todo el país' : 'Costo de envío interior de argentina: $'+args.costoEnvio;
    const envioClassName = args.costoEnvio=='G'
    ? 'card-text mb-1 costoGratis'
    : 'card-text mb-1 costo';
    return (
        <div className='card'>
            <div className="row p-3">
                <img className="imagen" src={`${args.imagen}`} alt={args.imagen}></img>
                <div className="col">
                    <h5 className="card-title">{args.instrumento} ({args.categoria.denominacion})</h5>
                    <p className="card-text precio mb-1">${args.precio}</p>
                    <p className={envioClassName}>{img}{text}</p>
                    <p className="card-text">{args.cantidadVendida} vendidos</p>
                    <a href={`detalle/${args.id}`}>
                        <button type="button" className="btn btn-warning">Detalle</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ItemInstrumento;