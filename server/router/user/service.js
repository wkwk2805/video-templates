const sql = require("./query");

const userService = (database) => {
  return {
    register: async (req) => {
      try {
        console.log("register user");
        const { id, password, phone } = req.body;
        const result = await database.query(
          sql.insertUser(id, password, phone)
        );
        return result.rowCount > 0;
      } catch (error) {
        return false;
      }
    },
    delete: async (req) => {
      try {
        console.log("delete user");
        const { id } = req.body;
        const result = await database.query(sql.deleteUser(id));
        return result.rowCount > 0;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    update: async (req) => {
      try {
        console.log("update user");
        const { id, password, phone } = req.body;
        const result = await database.query(
          sql.updateUser(id, password, phone)
        );
        return result.rowCount > 0;
      } catch (error) {
        return false;
      }
    },
    searchEmail: async (req) => {
      const { name, phone } = req.body;
      const email = await database.query(sql.searchEmail(name, phone));
      return email;
    },
    updatePassword: async (req) => {
      const { email, password } = req.body;
      await database.query(sql.updatePassword(email, password));
    },
  };
};

module.exports = userService;
