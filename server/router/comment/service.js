const sql = require("./query");

const commentService = (database) => {
  return {
    insert: async (req) => {
      console.log("insert comment");
      const { comment, userUuid, postUuid } = req.body;
      const result = await database.query(
        sql.insert(comment, userUuid, postUuid)
      );
      console.log(result);
    },
    delete: async (req) => {
      console.log("delete comment");
      const { commentUuid } = req.body;
      const result = await database.query(sql.delete(commentUuid));
      console.log(result);
    },
    update: async (req) => {
      console.log("update comment");
      const { comment, commentUuid } = req.body;
      const result = await database.query(sql.update(commentUuid, comment));
      console.log(result);
    },
  };
};

module.exports = commentService;
