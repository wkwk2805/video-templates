// { id:query }
const query = {
  insert: (title, content, userUuid) => `
    INSERT INTO vt_post (
      title
      ,content
      ,user_uuid
    ) VALUES (
      '${title}'
      ,'${content}'
      ,'${userUuid}'
    )`,
  update: (postUuid, title, content) => `
      UPDATE vt_post SET 
        update_date = now()
        ,title = '${title}'
        ,content = '${content}'
      WHERE post_uuid = '${postUuid}'  
    `,
  delete: (postUuid) => `DELETE FROM vt_post WHERE post_uuid = '${postUuid}'`,
  read: (postUuid) => `
    UPDATE vt_post SET 
      update_date = now()
      ,read_count = read_count + 1
    WHERE post_uuid = '${postUuid}'  
  `,
};

module.exports = query;
