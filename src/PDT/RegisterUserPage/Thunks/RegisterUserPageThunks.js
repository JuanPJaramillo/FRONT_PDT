import { onDeleteTotalAdults, onAddTotalAdults, onAddTotalChild, onDeleteTotalChild } from "../Slice/RegisterUserPageSlice"
import url from "../../Utils/Const"

export const onAddRegisterTotalAdult = (documentAdults, nameAdults, dateBirthAdults, totalAdults) => {
    const data = [...totalAdults, {
        documentAdults,
        nameAdults,
        dateBirthAdults
    }]
    return async (dispatch, getState) => {
        dispatch(onDeleteTotalAdults());
        dispatch(onAddTotalAdults(data));
    }
}

export const onDeleteRegisterTotalAdult = (documentAdults, totalAdults) => {
    const filter = totalAdults.filter((iter) => iter.documentAdults !== documentAdults);
    return async (dispatch, getState) => {
        dispatch(onAddTotalAdults(filter));
    }
}

export const onAddRegisterTotalChild = (documentChild, nameChild, dateBirthChild, totalChild) => {
    const data = [...totalChild, {
        documentChild,
        nameChild,
        dateBirthChild
    }]
    return async (dispatch, getState) => {
        dispatch(onDeleteTotalChild());
        dispatch(onAddTotalChild(data));
    }
}

export const onDeleteRegisterTotalChild = (documentChild, totalChild) => {
    const filter = totalChild.filter((iter) => iter.documentChild !== documentChild);
    return async (dispatch, getState) => {
        dispatch(onAddTotalChild(filter));
    }
}

export const postRegisterUser = (departureCity, arrivalCity, money, hour, countAdultRegister, countChildRegister, totalAdults, totalChild) => {
    const data = {
        "departureCity": departureCity,
        "arrivalCity": arrivalCity,
        "money": money,
        "hour": hour,
        "adult": countAdultRegister,
        "child": countChildRegister,
        "createDate": new Date()
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };

    return async (dispatch, getState) => {
        await fetch(`${url}/Flight`, requestOptions)
            .then(response => response.json())
            .then(({ idxFlights }) => {
                postAdult(totalAdults, idxFlights);
                postChild(totalChild, idxFlights);
            }).then((res) => alert('Insertado'))
    }
}

const postAdult = (totalAdults, idxFlights) => {
    totalAdults.forEach(element => {
        const dataTotalAdult = {
            "idxFlights": idxFlights,
            "documentPerson": element.documentAdults,
            "namePerson": element.nameAdults,
            "dateBirth": element.dateBirthAdults,
            "isChild": false
        }
        const requestOptionsAdult = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataTotalAdult),
        };
        fetch(`${url}/DetailsFlight`, requestOptionsAdult)
    });
}

const postChild = (totalChild, idxFlights) => {
    totalChild.forEach(element => {
        const dataTotalAdult = {
            "idxFlights": idxFlights,
            "documentPerson": element.documentChild,
            "namePerson": element.nameChild,
            "dateBirth": element.dateBirthChild,
            "isChild": true
        }
        const requestOptionsAdult = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataTotalAdult),
        };
        fetch(`${url}/DetailsFlight`, requestOptionsAdult)
    });
}