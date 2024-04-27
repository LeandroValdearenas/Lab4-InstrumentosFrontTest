function MenuOpciones() {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a className="nav-link" aria-current="true" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="true" href="/dondeestamos">Dónde estamos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="true" href="/productos">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="true" href="/grilla">Grilla de Productos</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuOpciones;