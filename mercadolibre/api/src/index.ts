import express from "express";
import configureRoutes from "./routes/routes";
import connectMongo from "./db/mongo";
import pool from "./db/postgres";
import Person from "./models/person";
import PersonDao from "./daos/PersonDao";

const personDao = new PersonDao(pool);

const app = express();
const port = 3000;

app.use(express.json());

configureRoutes(app);
connectMongo();

async function testPersonDao() {
  try {
    // Create a new person
    // const newPerson: Person = {
    //   firstName: "John",
    //   lastName: "Doe",
    //   email: "john.doe@example.com",
    //   birthDate: new Date("1990-01-01"),
    // };
    // await personDao.createPerson(newPerson);
    // console.log("Person created");

    // Get all persons
    const persons = await personDao.getAllPersons();
    console.log("All persons:", persons);

    // Get person by ID
    if (persons.length > 0) {
      const person = await personDao.getPersonById(persons[0].id!);
      console.log("Person by ID:", person);

      // Update person
      const updatedPerson: Person = { ...person!, firstName: "Jane" };
      console.log("Person to update:", updatedPerson);
      await personDao.updatePerson(persons[0].id!, updatedPerson);
      console.log("Person updated");

      // Delete person
      await personDao.deletePerson(persons[0].id!);
      console.log("Person deleted");
    }
  } catch (err) {
    console.error("Error testing PersonDao:", err);
  } finally {
    pool.end();
  }
}

testPersonDao();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
