import fetch from 'node-fetch'

export const root = {
    sensor: () => {
        return fetch(`https://daresay.herokuapp.com/nv/plan/3/sensor/5?key=41938416368104621`).then(
            (resp) => resp.json()).then(resp => resp[0])

    },
    sensorUnique: (_, { sensorNumber, plane }) => {
        return fetch(`https://daresay.herokuapp.com/nv/plan/${plane}/sensor/${sensorNumber}?key=41938416368104621`).then(
            (resp) => resp.json()).then(resp => resp[0])

    }
};
