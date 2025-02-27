namespace fwdSensors {

    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading in meters
         */
        //% group="Temperature"
        //% block="$this temperature (\\°)"
        //% blockId=fwd_ph_get_temperature
        fwdTemperature(): number { return super.temperature() }


    }

    //% fixedInstance whenUsed
    export const temperature1 = new FwdTemperatureClient("temperature1");
}
