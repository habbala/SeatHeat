import fetch from 'node-fetch'

const findLevel = (sensor_data) => {
    return ({
        group: sensor_data.pir,
        alone: 3,
        fika: 4
    });
}

const groupLevel = () => {

}

const aloneLevel = () => {

}
const fikaLevel = () => {

}

export const root = {
    sensor: () => {
        return fetch(`https://daresay.herokuapp.com/nv/plan/3/sensor/5?key=41938416368104621`).then(
            (resp) => resp.json()).then(resp => resp[0])

    },
    sensorUnique: (_, { sensorNumber, plane }) => {
        return fetch(`https://daresay.herokuapp.com/nv/plan/${plane}/sensor/${sensorNumber}?key=41938416368104621`).then(
            (resp) => resp.json()).then(resp => resp[0])

    },
    level: () => {
        return fetch(`https://daresay.herokuapp.com/nv/plan/3/sensor/5?key=41938416368104621`).then(
            (resp) => resp.json()).then(resp => findLevel(resp[0].dd))
    }
};
