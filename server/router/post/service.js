const sql = require("./query");

const postService = (database) => {
  return {
    insert: async (req) => {
      try {
        console.log("insert post");
        const { title, content, userUuid } = req.body;
        const result = await database.query(
          sql.insert(title, content, userUuid)
        );
        return result.rowCount > 0;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    delete: async (req) => {
      try {
        console.log("delete post");
        const { postUuid } = req.body;
        const result = await database.query(sql.delete(postUuid));
        return result.rowCount > 0;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    update: async (req) => {
      try {
        console.log("update post");
        const { title, content, postUuid } = req.body;
        const result = await database.query(
          sql.update(postUuid, title, content)
        );
        return result.rowCount > 0;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  };
};

module.exports = postService;
