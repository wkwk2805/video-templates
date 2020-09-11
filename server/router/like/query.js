// { id:query }
const query = {
  upLikePost: (userUuid, postUuid) =>
    `INSERT INTO vt_like (user_uuid, post_uuid) VALUES ('${userUuid}', '${postUuid}')`,
  upLikeComment: (userUuid, commentUuid) =>
    `INSERT INTO vt_like (user_uuid, comment_uuid) VALUES ('${userUuid}', '${commentUuid}')`,
  downLike: (likeUuid) => `DELETE FROM vt_like WHERE like_uuid = '${likeUuid}'`,
};

module.exports = query;
