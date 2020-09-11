// { id:query }
const query = {
  insert: (path, name, type, size, userUuid, postUuid) => `
  INSERT INTO vt_file (
    file_path
    ,file_name
    ,file_type
    ,file_size
    ,user_uuid
    ,post_uuid
    ,download_count
  ) VALUES (
    '${path}'
    ,'${name}'
    ,'${type}'
    ,'${size}'
    ,'${userUuid}'
    ,'${postUuid}'
    ,0
  )`,
  update: (fileUuid, path, name, type, size) => `
  UPDATE vt_file SET
    update_date = now()
    ,file_path = '${path}'
    ,file_name = '${name}'
    ,file_type = '${type}'
    ,file_size = '${size}'
  WHERE file_uuid = '${fileUuid}'
  `,
  delete: (fileUuid) => `DELETE FROM vt_file WHERE file_uuid = '${fileUuid}'`,
  download: (fileUuid) => `
  UPDATE vt_file SET
    update_date = now()
    ,download_count = download_count + 1
  WHERE file_uuid = '${fileUuid}'
  `,
};

module.exports = query;
