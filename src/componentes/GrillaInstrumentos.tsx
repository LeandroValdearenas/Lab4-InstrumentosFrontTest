import { useState, useEffect, ChangeEvent } from 'react'
import Instrumento from '../entidades/Instrumento';
import { deleteInstrumentoXId, getCategoriasFetch, getInstrumentosFetch, getInstrumentosXCategoriaFetch } from '../servicios/funcionesApi';
import MenuOpciones from './MenuOpciones';
import '../index.css';
import CategoriaInstrumento from '../entidades/CategoriaInstrumento';

function GrillaInstrumentos() {   
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    const [categorias, setCategorias] = useState<CategoriaInstrumento []>([]);
    
    const getInstrumentosResto =  async (id?:number) => {
      let datos:Instrumento[];
      if (id) { datos = await getInstrumentosXCategoriaFetch(id); }
      else { datos = await getInstrumentosFetch(); }
      setInstrumentos(datos);
    }

    const getCategoriasResto = async () => {
      let categorias:CategoriaInstrumento[] = await getCategoriasFetch();
      setCategorias(categorias);
  }

    useEffect(() => { 
      getInstrumentosResto();
      getCategoriasResto();
    }, []);

    const deleteInstrumento = async (idInstrumento:number) => {
      await deleteInstrumentoXId(idInstrumento);
      window.location.reload();
    }

    function handleChange(e:ChangeEvent<HTMLSelectElement>) {
      getInstrumentosResto(Number(e.target.value));
    }

    return (
        <div className='full-screen'>
        <MenuOpciones></MenuOpciones>
        <div>
            <br/>
            <div className='row'>
              <div className='col'><a className="btn btn-lg btn-primary m-3" href={`/formulario/0`}>Nuevo</a></div>
              <div className='col text-end'>
              <label htmlFor="cboCategoria" className="m-3">Categoría</label>
              <select id="cboCategoria" onChange={e => handleChange(e)}>
                <option value={0}>Filtrar por categoría</option>
                  {categorias?.map((categoria:CategoriaInstrumento) => 
                  <option key={categoria.id} value={categoria.id}>{categoria.denominacion}</option>
                  )}
              </select>
              </div>
            </div>
            <table className='table'>
              <thead>
              <tr>
                  <th scope="col">
                  <b>ID</b>
                  </th>
                  <th scope="col">
                  <b>Instrumento</b>
                  </th>
                  <th scope="col">
                  <b>Marca</b>
                  </th>
                  <th scope="col">
                  <b>Modelo</b>
                  </th>
                  <th scope="col">
                  <b>Precio</b>
                  </th>
                  <th scope="col">
                  <b>Descripción</b>
                  </th>
                  <th scope="col">
                  <b>Costo de envío</b>
                  </th>
                  <th scope="col">
                  <b>Cantidad vendida</b>
                  </th>
                  <th scope="col">
                  <b>Categoría</b>
                  </th>
                  <th scope="col">
                  <b>Modificar</b>
                  </th>
                  <th scope="col">
                  <b>Eliminar</b>
                  </th>
              </tr>
              </thead>
              <tbody>
              {instrumentos.map((instrumento:Instrumento) => 
              <tr key={instrumento.id}>
                  <th scope="row">
                  {instrumento.id}
                  </th>
                  <td>
                  {instrumento.instrumento}
                  </td>
                  <td>
                  {instrumento.marca}
                  </td>
                  <td>
                  {instrumento.modelo}
                  </td>
                  <td>
                  {instrumento.precio}
                  </td>
                  <td className='text-truncate' style={{maxWidth: "150px"}}>
                  {instrumento.descripcion}
                  </td>
                  <td>
                  {instrumento.costoEnvio}
                  </td>
                  <td>
                  {instrumento.cantidadVendida}
                  </td>
                  <td>
                  {instrumento.categoria.denominacion}
                  </td>
                  <td>
                  <a className="btn btn-info" style={{ marginBottom:10 }} href={`/formulario/` + instrumento.id}>Modificar</a>
                  </td>
                  <td>
                  <a className="btn btn-danger" style={{ marginBottom:10 }} onClick={(e) => deleteInstrumento(instrumento.id)}>Eliminar</a>
                  </td>
              </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      )
}
    
export default GrillaInstrumentos