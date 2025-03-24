namespace fwdSensors {

  //% fixedInstances
  export class FwdFloatClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Code to run when a chosen event occurs
     * @param event Button pressed (down), released (up)
     */
    //% group="Float"
    //% block="on $this $event"
    //% blockId=fwd_float_on_change
    fwdOnFloat(event: jacdac.ButtonEvent, handler: () => void) { this.onEvent(event, handler) }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Float"
    //% block="$this pressed"
    //% blockId=fwd_float_is_up
    fwdIsPressed(): boolean { return this.pressed() }


  }

  //% fixedInstance whenUsed
  export const float = new FwdFloatClient("float1")
}
