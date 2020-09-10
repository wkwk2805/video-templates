// { id:query }
const query = {
  insert: (comment, userUuid, postUuid) =>
    `
    INSERT INTO vt_comment (
      comment
      ,user_uuid
      ,post_uuid
    ) VALUES (
      '${comment}'
      ,'${userUuid}'
      ,'${postUuid}'
    )
  `,
  update: (commentUuid, comment) =>
    `
  UPDATE vt_comment SET
    update_date = now()
    ,comment = '${comment}'
  WHERE comment_uuid = '${commentUuid}'
  `,
  delete: (commentUuid) =>
    `
      DELETE FROM vt_comment WHERE comment_uuid = '${commentUuid}'
  `,
};

module.exports = query;
