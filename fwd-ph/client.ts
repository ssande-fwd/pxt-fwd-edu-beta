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
        fwdPh(): number {
            if (this.ph4Reading !== undefined && this.ph7Reading !== undefined) {
                // Implement your calibration logic here
                // For example, a simple linear calibration:
                const slope = (7 - 4) / (this.ph7Reading - this.ph4Reading);
                const intercept = 4 - slope * this.ph4Reading;
                const reading = super.acidity(); // Get the raw reading
                return slope * reading + intercept;
            } else {
                // If calibration is not done, return the raw reading or a default value
                return super.acidity(); // Or return a default value like 0 or NaN
            }
        }


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