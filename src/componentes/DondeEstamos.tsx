import { Status, Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './MapComponent';
import MenuOpciones from './MenuOpciones';

function DondeEstamos() {
    const render = (status: Status) => (<h1>{status}</h1>)
    return (
        <div className='full-screen'>
        <MenuOpciones />
        <div className="d-flex justify-content-center">
        <Wrapper apiKey='' render={render}>
            <MapComponent />
        </Wrapper>
        </div>
        </div>
    );
}

export default DondeEstamos;