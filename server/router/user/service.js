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
    logout: async () => {
      console.log("logout user");
    },
    login: async () => {
      console.log("login user");
    },
  };
};

module.exports = userService;
