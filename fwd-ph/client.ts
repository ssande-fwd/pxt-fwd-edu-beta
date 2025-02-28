namespace fwdSensors {

    //% fixedInstances
    export class FwdPhClient extends modules.AcidityClient {

        private ph4Reading: number;
        private ph7Reading: number;

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading in meters
         */
        //% group="pH"
        //% block="$this pH"
        //% blockId=fwd_ph_get_ph
        fwdPh(): number { return this.ph4Reading }


        /**
         * Generates linear calibration and saves slope and y-intercept for future readings
         * @param ph4Reading test
         * @param ph7Reading test
         */
        //% group="pH"
        //% block="Calibrate $this measures pH 4 as $ph4Reading measures pH 7 as $ph7Reading"
        //% blockId=fwd_ph_calibration
        //% inlineInputMode=external
        fwdPhCalibrate( ph4Reading: number, ph7Reading: number ): void {
            this.ph4Reading = ph4Reading;
            this.ph7Reading = ph7Reading;
        }
    }

    //% fixedInstance whenUsed
    export const ph1 = new FwdPhClient("ph1");
}