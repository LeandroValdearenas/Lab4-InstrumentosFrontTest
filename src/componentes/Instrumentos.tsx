import { useEffect, useState } from "react";
import Instrumento from "../entidades/Instrumento";
import ItemInstrumento from "./ItemInstrumento";
import { getInstrumentosFetch } from "../servicios/funcionesApi";
import MenuOpciones from "./MenuOpciones";

function Instrumentos() {
    const [instrumentos, setInstrumentos] = useState<Instrumento []>([]);

    const getInstrumentosResto = async () => {
      const datos:Instrumento[] = await getInstrumentosFetch();
      setInstrumentos(datos);
    }
  
    useEffect(() => {
      getInstrumentosResto();
    }, []);
  
    return (
      <div className="full-screen">
      <MenuOpciones />
      <div className='row p-3'>
        {instrumentos.map((instrumento:Instrumento) => 
          <ItemInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} marca={instrumento.marca} modelo={instrumento.modelo} imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida} descripcion={instrumento.descripcion} categoria={instrumento.categoria}/>
        )}
      </div>
      </div>
    )
}

export default Instrumentos;