import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import http from "http";
import { passportInitialize } from "./routes/users/users.auth.js";
import { connectRoutes } from "./routes/index.routes.js";
import { sessionConfig } from "./routes/users/users.auth.js";
import { corsOptions } from "./cors.service.js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);

passportInitialize(passport);
app.use(express.static("public"));
app.use(cookieParser("give me give me some time to think"));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionConfig()));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

connectRoutes(app);

// if (process.env.ENV === "PROD") {
console.log("PROD");
app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// }

server.listen(port, () => console.log(`Listening on port ${port}`));
