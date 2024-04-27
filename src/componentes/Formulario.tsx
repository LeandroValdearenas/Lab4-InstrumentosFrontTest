import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Instrumento from "../entidades/Instrumento";
import { getData, postData, putData } from "../servicios/GenericFetch";
import MenuOpciones from "./MenuOpciones";
import CategoriaInstrumento from "../entidades/CategoriaInstrumento";

function Formulario() {
    const navigate = useNavigate();

    const {idinstrumento} = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>(new Instrumento());
    const [categorias, setCategorias] = useState<CategoriaInstrumento []>([]);
    const [txtValidacion, setTxtValidacion] = useState<string>("");
    const [selectedCategoria, setSelectedCategoria] = useState("1");
    
    const urlapi = "https://lab4-instrumentosdocker.onrender.com/";

    const getInstrumentoResto = async () => {

        if(Number(idinstrumento) !== 0) {
            let instrumentoSelect:Instrumento = await getData(urlapi + `api/instrumentos/${instrumento?.id}`);
            instrumentoSelect.strPrecio = String(instrumentoSelect.precio);
            instrumentoSelect.strCantidadVendida = String(instrumentoSelect.cantidadVendida);
            setInstrumento(instrumentoSelect);
            setSelectedCategoria(String(instrumentoSelect.categoria.id));
        } else {
            let instrumentoSelect:Instrumento = new Instrumento();
            setInstrumento(instrumentoSelect);
        }
    }

    const getCategoriasResto = async () => {

        let categorias:CategoriaInstrumento[] = await getData(urlapi + `api/categorias`);
        setCategorias(categorias);
    }

    useEffect(() => {
        getInstrumentoResto();
        getCategoriasResto();
    }, []);

    const save = async () => {
        if (instrumento.instrumento == undefined || instrumento.instrumento === "") {
            setTxtValidacion("Ingrese el nombre del instrumento");
            return;
        }
        if (instrumento.marca == undefined || instrumento.marca === "") {
            setTxtValidacion("Ingrese la marca del instrumento");
            return;
        }
        if (instrumento.modelo == undefined || instrumento.modelo === "") {
            setTxtValidacion("Ingrese el modelo del instrumento");
            return;
        }
        if (instrumento.descripcion == undefined || instrumento.descripcion === "") {
            setTxtValidacion("Ingrese la descripción del instrumento");
            return;
        }
        if (instrumento.precio == undefined || instrumento.precio === 0) {
            setTxtValidacion("El precio debe ser distinto de cero");
            return;
        }
        if (instrumento.costoEnvio == undefined || instrumento.costoEnvio == "NaN") {
            setTxtValidacion("El costo de envío debe ser un valor numérico o debe quedar vacío (gratis)");
            return;
        }
        if (instrumento.cantidadVendida == undefined || instrumento.cantidadVendida === 0) {
            setTxtValidacion("La cantidad vendida debe ser distinta de cero");
            return;
        }
        if (instrumento.imagen == undefined || instrumento.imagen === "") {
            setTxtValidacion("Ingrese la imágen del instrumento");
            return;
        }

        if (Number(idinstrumento) !== 0)
            await putData(urlapi + `api/instrumentos/${instrumento?.id}`,instrumento);
        else
            await postData(urlapi + `api/instrumentos`,instrumento);
        navigate("/grilla");
    }
    
    return (
        <div className='full-screen'>
        <MenuOpciones></MenuOpciones>
        <div className="center">
            <div className="mb-3">
                <label htmlFor="txtInstrumento" className="form-label">Nombre</label>
                <input type="text" id="txtInstrumento" className="form-control" placeholder="Ingrese el nombre del instrumento" defaultValue={instrumento?.instrumento} onChange={e => instrumento.instrumento = String(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtMarca" className="form-label">Marca</label>
                <input type="text" id="txtMarca" className="form-control" placeholder="Ingrese la marca del instrumento" defaultValue={instrumento?.marca} onChange={e => instrumento.marca = String(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtModelo" className="form-label">Modelo</label>
                <input type="text" id="txtModelo" className="form-control" placeholder="Ingrese el modelo del instrumento" defaultValue={instrumento?.modelo} onChange={e => instrumento.modelo = String(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtImagen" className="form-label">Imágen</label>
                <input type="text" id="txtImagen" className="form-control" placeholder="Ingrese el path de la imágen del instrumento" defaultValue={instrumento?.imagen} onChange={e => instrumento.imagen = String(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtDescripcion" className="form-label">Descripción</label>
                <input type="text" id="txtDescripcion" className="form-control" placeholder="Ingrese la descripción del instrumento" defaultValue={instrumento?.descripcion} onChange={e => instrumento.descripcion = String(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtPrecio" className="form-label">Precio</label>
                <input type="text" id="txtPrecio" className="form-control" placeholder="Ingrese el precio del instrumento" defaultValue={instrumento?.strPrecio} onChange={e => instrumento.precio = Number(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtCostoEnvio" className="form-label">Costo de envío</label>
                <input type="text" id="txtCostoEnvio" className="form-control" placeholder="Gratis" defaultValue={instrumento?.costoEnvio==="G" ? "" : instrumento?.costoEnvio} onChange={e => instrumento.costoEnvio = e.target.value==="" ? "G" : String(Number(e.target.value))} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtCantidadVendida" className="form-label">Cantidad vendida</label>
                <input type="text" id="txtCantidadVendida" className="form-control" placeholder="Ingrese la cantidad vendida del instrumento" defaultValue={instrumento?.strCantidadVendida} onChange={e => instrumento.cantidadVendida = Number(e.target.value)} />
            </div>
            <div>
                <p style={{ color: 'red', lineHeight: 5, padding: 5}}>{txtValidacion}</p>
            </div>
            <div className="col">
                <button onClick={save} className="btn btn-success" type="button">
                    Guardar
                </button>
            </div>
        </div>
        </div>
    );
}

export default Formulario;