const commentService = (props) => {
  return {
    insert: () => {
      console.log("insert comment");
    },
    delete: () => {
      console.log("delete comment");
    },
    update: () => {
      console.log("update comment");
    },
  };
};

module.exports = commentService;
