const sql = require("./query");

const postService = (database) => {
  return {
    insert: (req) => {
      console.log("insert post");
      const { title, content, userUuid } = req.body;
      const result = await database.query(sql.insert(title, content, userUuid));
      console.log(result.row);
    },
    delete: (req) => {
      console.log("delete post");
      const { postUuid } = req.body;
      const result = await database.query(sql.delete(postUuid));
      console.log(result.row);
    },
    update: (req) => {
      console.log("update post");
      const { title, content, postUuid } = req.body;
      const result = await database.query(sql.update(postUuid, title, content));
      console.log(result.row);
    },
  };
};

module.exports = postService;
