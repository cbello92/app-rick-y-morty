import axios from 'axios';

// constantes
let initialdata = {
    fetching: false, // para saber si se hizo la carga
    array: [],
    current: {}
}

let URL = "https://rickandmortyapi.com/api/character";
// nos permite saber mediante estados que sucede con la carga en el store
let GET_CHARACTERS = "GET_CHARACTERS";
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

// reducer
// el reducer es el encargado de colocar los datos en el store, una vez que es disparado el action
export default function reducer(state = initialdata, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, fetching: true }
        case GET_CHARACTERS_SUCCESS:
            return { ...state, array: action.payload, fetching: false }
        case GET_CHARACTERS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        default:
            return state;
    }
}

// actions (thunks)
// realiza las conexiones al servidor para obtener los datos, dispatch es el encargado de desencadenar la accion
// y pasarle los datos al reducer
export function getCharactersAction() {
    return async (dispatch, getState) => {
        // este dispatch nos sirve para manejar el estado de loading de los datos
        dispatch({
            type: GET_CHARACTERS
        });

        try {
            let res = await axios.get(URL);
            return dispatch({
                type: GET_CHARACTERS_SUCCESS,
                payload: res.data.results
            });
        } catch (err) {
            return dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: err.response.message
            });
        }
        // return axios.get(URL)
        //     .then(res=> {
        //         dispatch({
        //             type: GET_CHARACTERS_SUCCESS,
        //             payload: res.data.results
        //         });
        //     })
        //     .catch(err => {
        //         dispatch({
        //             type: GET_CHARACTERS_ERROR,
        //             payload: err.response.message
        //         });
        //     });
    }
}