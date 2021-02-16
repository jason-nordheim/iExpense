const { MongoClient, ObjectID } = require("mongodb");
const { hashPassword } = require("./bcrypt");
const { mongoUri } = require("./keys.dev");

const DATABASE_NAME = "expense-me";
const USERS_COLLECTION = "users";
const EXPENSES_COLLECTION = "expenses";

/**
 * creates a new mongoDB client and connects to the
 * Mongo instance
 */
const connect = async () => {
  const client = await new MongoClient(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return await client.connect();
};

/**
 * Creates a new user document with a hashed password
 * @param {String} username
 * @param {String} password
 */
const insertUser = async (username, password) => {
  // todo: add password validation
  const hashed = await hashPassword(password);
  const newUser = {
    username,
    hashedPassword: hashed,
  };
  const client = await connect();

  const result = await client
    .db(DATABASE_NAME)
    .collection(USERS_COLLECTION)
    .insertOne(newUser);

  await client.close();
  return result;
};

/**
 * returns the user document for a user with the username provided
 * @param {String} username
 */
const findUserByUsername = async (username) => {
  const client = await connect();

  const result = await client
    .db(DATABASE_NAME)
    .collection(USERS_COLLECTION)
    .findOne({ username });

  await client.close();
  return result;
};

/**
 * returns the user associated with the id Provided
 * @param {Number} id
 */
const findUserById = async (id) => {
  const client = await connect();

  const result = await client
    .db(DATABASE_NAME)
    .collection(USERS_COLLECTION)
    .findOne({ _id: new ObjectID(id) });

  await client.close();
  return result;
};

/**
 * creates a  new expense document associated with the provided
 * user
 * @param {Object} user
 * @param {Object} expense
 */
const insertUserExpense = async (user, expense) => {
  const client = await connect();

  const newExpense = {
    ...expense,
    user: user._id,
  };

  const result = await client
    .db(DATABASE_NAME)
    .collection(EXPENSES_COLLECTION)
    .insertOne(newExpense, {
      forceServerObjectId: true,
    });

  await client.close();

  return result;
};

/**
 * returns the expense documents associated with the current user
 * @param {Object} user
 */
const getUserExpenses = async (user) => {
  const client = await connect();

  const cursor = await client
    .db(DATABASE_NAME)
    .collection(EXPENSES_COLLECTION)
    .find({
      user: new ObjectID(user._id),
    });

  const results = await cursor.toArray();

  await client.close();
  return results;
};

/**
 * returns the collections associated with the current database
 */
const getCollections = async () => {
  const client = await connect();

  const cursor = await client.db(DATABASE_NAME).listCollections();
  const results = await cursor.toArray();

  await client.close();
  return results;
};

module.exports = {
  insertUser,
  findUserByUsername,
  findUserById,
  getUserExpenses,
  insertUserExpense,
  getCollections,
};
// module.exports = async function () {
//   try {
//     await client.connect();
//     await listDatabases(client);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// };

// async function listDatabases(client) {
//   const databaseList = await client.db().admin().listDatabases();
//   console.log("Databases: ");
//   databaseList.databases.forEach((db) => console.log(`    -${db.name}`));
//   databaseList.databases.forEach((db) =>
//     console.log(`    -${Object.values(db)}`)
//   );
// }
