import MenuOpciones from "./MenuOpciones";
import '/src/instrumentos.css';

function Home() {
    return (
        <div className='full-screen'>
        <MenuOpciones />
        <div className="card">
            <h1 className="card-title text-center">Musical Hendrix</h1>
            <div className="d-flex justify-content-center">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/home1.jpg" className="d-block w-100" alt="home1.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/home2.jpg" className="d-block w-100" alt="home2.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/home3.jpg" className="d-block w-100" alt="home3.jpg" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <p className="card-text mt-4">Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Home;