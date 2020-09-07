const postService = (database) => {
  return {
    insert: () => {
      console.log("insert post");
    },
    delete: () => {
      console.log("delete post");
    },
    update: () => {
      console.log("update post");
    },
  };
};

module.exports = postService;
