const AbstractRepository = require("./AbstractRepository");

class personRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "person" });
  }

  // The C of CRUD - Create operation

  async create(person) {
    // Execute the SQL INSERT query to add a new person to the "person" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, pseudo, password, desc) values (?, ?, ?, ?, ?)`,
      [person.firstname, person.lastname, person.pseudo, person.password, person.desc]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) { // readOne
    // Execute the SQL SELECT query to retrieve a specific person by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = personRepository;
