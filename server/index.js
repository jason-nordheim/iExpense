const express = require("express");
const bodyParser = require("body-parser");

const {
  insertUser,
  findUserByUsername,
  findUserById,
  getUserExpenses,
  insertUserExpense,
  getCollections,
} = require("./mongo");
const { compareHash } = require("./bcrypt");
const { encodeToken, decodeToken } = require("./jwt");
const {
  BAD_REQUEST,
  SUCCESS,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  NOT_IMPLEMENTED,
} = require("./statusCodes");

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = "/api/v1/";

const credError = { error: "invalid credentials" };
const usrExistsError = { error: "user already exists" };
const reqError = { error: "invalid request body" };

// middleware
app.use(bodyParser.json());

app.post(BASE_URL + "users/", async (req, res) => {
  const { username, password } = req.body;
  // make sure we have a username and password
  const invalidRequest = !username && !password;
  if (invalidRequest) res.status(BAD_REQUEST).send(reqError);
  try {
    const user = await findUserByUsername(username);
    if (user) return res.status(FORBIDDEN).send(usrExistsError);
    const newUser = await insertUser(username, password);
    res.status(SUCCESS).send(newUser);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
});

app.post(BASE_URL + "auth/login/", async (req, res) => {
  const { username, password } = req.body;
  const invalidRequest = !username && !password;
  if (invalidRequest) return res.status(BAD_REQUEST).send(reqError);
  try {
    const user = await findUserByUsername(username);
    if (user && user.username && user.hashedPassword) {
      const passwordMatches = await compareHash(password, user.hashedPassword);

      if (!passwordMatches) return res.status(FORBIDDEN).send(credError);

      const token = encodeToken(user);
      return res.status(SUCCESS).send({ token });
    } else {
      return res.status(FORBIDDEN).send(credError);
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
});

app.post(BASE_URL + "expenses/", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(BAD_REQUEST).send(credError);
  } else if (!req.body.expense) {
    return res.status(BAD_REQUEST).send(reqError);
  }

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = decodeToken(token);
  const user = await findUserById(decodedToken.sub);

  try {
    const newExpense = await insertUserExpense(user, req.body.expense);
    return res.send(newExpense);
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).send({ ...error });
  }
});

app.get(BASE_URL + "expenses/", async (req, res) => {
  if (!req.headers.authorization)
    return res.status(BAD_REQUEST).send(credError);

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = decodeToken(token);
  const user = await findUserById(decodedToken.sub);
  const expenses = await getUserExpenses(user);
  return res.send(expenses);
});

app.get(BASE_URL + "collections/", async (req, res) => {
  const collections = await getCollections();
  res.send(collections);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
