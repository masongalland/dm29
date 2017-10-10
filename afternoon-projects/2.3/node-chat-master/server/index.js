const express = require("express"),
  bodyParser = require("body-parser"),
  mc = require("./controllers/messages_controller")
  app = express(),
  port = 3000;

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
