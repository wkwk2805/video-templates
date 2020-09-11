const sql = require('./query');

const commentService = (database) => {
  return {
    insert: () => {
      console.log("insert comment");
      const { comment, userUuid, postUuid } = req.body;
      const result = await database.query(sql.insert(comment, userUuid, postUuid));
      console.log(result.row);
    },
    delete: () => {
      console.log("delete comment");
      const { commentUuid } = req.body;
      const result = await database.query(sql.delete(commentUuid));
      console.log(result.row);
    },
    update: () => {
      console.log("update comment");
      const { comment, commentUuid } = req.body;
      const result = await database.query(sql.update(commentUuid, comment));
      console.log(result.row);
    },
  };
};

module.exports = commentService;
