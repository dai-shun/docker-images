const ngrok = require('ngrok');
const process = require("process");
(async function() {
    console.log("ngrok http ",process.env.NGROK_URL);
    const url = await ngrok.connect(process.env.NGROK_URL);
    console.log(url);
})();