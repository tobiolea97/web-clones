import { Pool } from "pg";
import Person from "../models/person";

export default class PersonDao {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async getAllPersons(): Promise<Person[]> {
    const result = await this.pool.query("SELECT * FROM person");
    return result.rows;
  }

  async getPersonById(id: number): Promise<Person | null> {
    const result = await this.pool.query("SELECT * FROM person WHERE id = $1", [
      id,
    ]);
    if (result.rows.length) {
      return result.rows[0];
    }
    return null;
  }

  async createPerson(person: Person): Promise<void> {
    await this.pool.query(
      "INSERT INTO person (first_name, last_name, email, birth_date) VALUES ($1, $2, $3, $4)",
      [person.firstName, person.lastName, person.email, person.birthDate],
    );
  }

  async updatePerson(id: number, person: Person): Promise<void> {
    await this.pool.query(
      "UPDATE person SET first_name = $1, last_name = $2, email = $3, birth_date = $4 WHERE id = $5",
      [person.firstName, person.lastName, person.email, person.birthDate, id],
    );
  }

  async deletePerson(id: number): Promise<void> {
    await this.pool.query("DELETE FROM person WHERE id = $1", [id]);
  }
}
