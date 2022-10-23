import { startLoading, stopLoading, getAllFlights, getAllDataFlights, deleteAllDataFlights } from "../Slice/HomePageSlice";

export const getFlights = () => {
    return async (dispatch, getState) => {
        dispatch(startLoading());
        await fetch(`https://travelflight.pdtcomunicaciones.com/api/airports`)
            .then(response => response.json())
            .then((data) => dispatch(getAllFlights(data)))
        dispatch(stopLoading());
    }
}

export const searchFlights = (countAdult, countChild, departureCity, arrivalCity, departureDate) => {
    const data = {
        "searchs": 2,
        "qtyPassengers": countAdult + countChild,
        "adult": countAdult,
        "child": countChild,
        "itinerary":
            [
                {
                    "departureCity": departureCity.gcd_iata,
                    "arrivalCity": arrivalCity.gcd_iata,
                    "hour": departureDate
                }
            ]
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    return async (dispatch, getState) => {
        dispatch(startLoading());
        await fetch(`https://travelflight.pdtcomunicaciones.com/api/flights`, requestOptions)
            .then(response => response.json())
            .then((responseData) => dispatch(getAllDataFlights(responseData.data)))
            .catch((err) => {
                dispatch(deleteAllDataFlights());
                alert('No se encontraron vuelos')
            });
        dispatch(stopLoading());
    }
}