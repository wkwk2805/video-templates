const sql = require("./query");

const likeService = (database) => {
  return {
    upLikePost: async (req) => {
      console.log("up like post");
      const { userUuid, postUuid } = req.body;
      const result = await database.query(sql.upLikePost(userUuid, postUuid));
      console.log(result.row);
    },
    delete: async (req) => {
      console.log("down like");
      const { likeUuid } = req.body;
      const result = await database.query(sql.downLike(likeUuid));
      console.log(result.row);
    },
    update: async (req) => {
      console.log("up like comment");
      const { userUuid, commentUuid } = req.body;
      const result = await database.query(
        sql.upLikeComment(userUuid, commentUuid)
      );
      console.log(result.row);
    },
  };
};

module.exports = likeService;
