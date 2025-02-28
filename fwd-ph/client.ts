namespace fwdSensors {

    //% fixedInstances
    export class FwdPhClient extends modules.AcidityClient {

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading in meters
         */
        //% group="pH"
        //% block="$this pH"
        //% blockId=fwd_ph_get_ph
        fwdPh(): number { return super.acidity() }


        /**
         * Generates linear calibration and saves slope and y-intercept for future readings
         * @param ph4Reading test
         * @param ph7Reading test
         */
        //% group="pH"
        //% block="$this measures pH 4 as $ph4Reading and pH 7 as $ph4Reading"
        //% blockId=fwd_ph_calibration
        fwdPhCalibrate( ph4Reading: number, ph7Reading: number ): void {
            return super.acidity()
        }
    }

    //% fixedInstance whenUsed
    export const ph1 = new FwdPhClient("ph1");
}