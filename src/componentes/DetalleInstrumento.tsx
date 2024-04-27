import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instrumento from "../entidades/Instrumento";
import { getInstrumentoXIdFetch } from "../servicios/funcionesApi";
import MenuOpciones from "./MenuOpciones";
import '../instrumentos.css';

function DetalleInstrumento() {
    const {idinstrumento} = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>();
    const getInstrumento = async () => {
        const instrumentoSelect:Instrumento = await getInstrumentoXIdFetch(Number(idinstrumento));
        setInstrumento(instrumentoSelect);
    }
    useEffect(() => {
        getInstrumento();
    }, []);

    const img = instrumento?.costoEnvio=='G' ? <><img src='/img/camion.png' alt='camion.png'></img></> : '';
    const text = instrumento?.costoEnvio=='G' ? 'Envío gratis' : '$'+instrumento?.costoEnvio;
    const envioClassName = instrumento?.costoEnvio=='G'
    ? 'card-text costoGratis'
    : 'card-text costo';
    return (
        <div className='full-screen'>
        <MenuOpciones />
        <div className='card mb-3 auto-width'>
            <div className="row g-0">
                <div className="col-md-4 img-60">
                    <div className="container text-center">
                        <img className="img-altura" src={`${instrumento?.imagen}`} alt={instrumento?.imagen}></img>
                    </div>
                    <p className="card-text">Descripción:</p>
                    <p className="card-text">{instrumento?.descripcion}</p>
                </div>
                <div className="col-md-8 img-40 border-start border-secondary">
                    <div className="card-body">
                        <div className="row-max">
                        <p className="card-text cantidadVendido mb-1">{instrumento?.cantidadVendida} vendidos</p>
                        <p className="card-text mb-0">Categoría: {instrumento?.categoria?.denominacion}</p>
                        <h5 className="card-title">{instrumento?.instrumento}</h5>
                        <p className="card-text precioDetalle">${instrumento?.precio}</p>
                        <p className="card-text mb-0">Marca: {instrumento?.marca}</p>
                        <p className="card-text">Modelo: {instrumento?.modelo}</p>
                        <p className="card-text fw-bold mb-0">Costo Envío: </p>
                        <p className={envioClassName}>{img}{text}</p>
                        </div>
                        <button type="button" className="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetalleInstrumento;