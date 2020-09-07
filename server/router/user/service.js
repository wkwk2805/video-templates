const sql = require("./query");

const userService = (database) => {
  return {
    register: async () => {
      console.log("register user");
      const result = await database.query(
        sql.insertUser("wkwk2805@gmail.com", "1234", "01051197633")
      );
      console.log(result.row);
    },
    delete: async () => {
      console.log("delete user");
      await database.query(sql.deleteUser("wkwk2805@gmail.com"));
    },
    update: async () => {
      console.log("update user");
      await database.query(
        sql.updateUser("wkwk2805@gmail.com", "1234567890", "01051197633")
      );
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
