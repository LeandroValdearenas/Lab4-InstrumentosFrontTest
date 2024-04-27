import Instrumento from "../entidades/Instrumento";

export async function getInstrumentosFetch() {
    let urlServer = "https://lab4-instrumentosdocker.onrender.com/api/instrumentos";
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json();
}
export async function getInstrumentosXCategoriaFetch(categoriaId: number) {
    let urlServer = "https://lab4-instrumentosdocker.onrender.com/api/instrumentos/categoria/"+categoriaId;
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json();
}
export async function getInstrumentoXIdFetch(id:number) {
    let urlServer = "https://lab4-instrumentosdocker.onrender.com/api/instrumentos/"+id;
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json() as Instrumento;
}
export async function saveInstrumento(instrumento:Instrumento) {
    let urlServer = "https://lab4-instrumentosdocker.onrender.com/api/instrumentos/insert";
    let method:string = "POST";
    if (instrumento && instrumento.id > 0) {
        urlServer = "https://lab4-instrumentosdocker.onrender.com/instrumentos/update/"+instrumento.id;
        method = "PUT";
    }
    await fetch(urlServer, {
        "method": method,
        "body": JSON.stringify(instrumento),
        "headers": {
            'Content-type': 'application/json'
        }
    });
}
export async function deleteInstrumentoXId(id:number) {
	
	let urlServer = 'https://lab4-instrumentosdocker.onrender.com/api/instrumentos/delete/'+id;
	await fetch(urlServer, {
		method: 'DELETE',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
        mode: 'cors'
	});
}
export async function getCategoriasFetch() {
    let urlServer = "https://lab4-instrumentosdocker.onrender.com/api/categorias";
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json();
}
