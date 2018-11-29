var { buildSchema } = require('graphql');
export const schema = buildSchema(`
    type Query {
        sensor: SensorData,
        sensorUnique(sensorNumber: Int, plane: Int): SensorData
    },
    type SensorData {
        time: String,
        dd: DD
    },
    type DD {
        temperature: Float,
        humidity: Float,
        light: Float,
        pir: Float,
        vdd: Float,
    }
`);
