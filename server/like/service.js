const likeService = (props) => {
  return {
    insert: () => {
      console.log("insert like");
    },
    delete: () => {
      console.log("delete like");
    },
    update: () => {
      console.log("update like");
    },
  };
};

module.exports = likeService;
