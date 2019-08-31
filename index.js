const { EtherPortClient } = require("etherport-client");
const five = require("johnny-five");

const board = new five.Board({
  port: new EtherPortClient({
    host: process.env.NODE_IP,
    port: 3030
  }),
  repl: false
});

board.on("ready", () => {
  console.log("Board is ready");
  let led = new five.Led(process.env.LED_PIN || 2);
  let rate = process.env.BLINK_RATE || 500;
  console.log(`Blinking at ${rate} ms`);
  led.blink(rate);
});
