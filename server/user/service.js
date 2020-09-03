const userService = (props) => {
  return {
    register: () => {
      console.log("register user");
    },
    delete: () => {
      console.log("delete user");
    },
    update: () => {
      console.log("update user");
    },
    logout: () => {
      console.log("logout user");
    },
    login: () => {
      console.log("login user");
    },
  };
};

module.exports = userService;
