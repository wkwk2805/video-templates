const sql = require("./query");

const userService = (database) => {
  return {
    register: async (req) => {
      console.log("register user");
      const { id, password, phone } = req.body;
      const result = await database.query(sql.insertUser(id, password, phone));
      console.log(result.row);
    },
    delete: async (req) => {
      console.log("delete user");
      const { id } = req.body;
      await database.query(sql.deleteUser(id));
    },
    update: async (req) => {
      console.log("update user");
      const { id, password, phone } = req.body;
      await database.query(sql.updateUser(id, password, phone));
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
