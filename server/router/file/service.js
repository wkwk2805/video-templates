const sql = require("./query");

const fileService = (database) => {
  return {
    insert: async (req) => {
      console.log("insert file");
      const { path, name, type, size, userUuid, postUuid } = req.body;
      const result = await database.query(
        sql.insert(path, name, type, size, userUuid, postUuid)
      );
      console.log(result.row);
    },
    delete: async (req) => {
      console.log("delete file");
      const { fileUuid } = req.body;
      const result = await database.query(sql.delete(fileUuid));
      console.log(result.row);
    },
    update: async (req) => {
      console.log("update file");
      const { fileUuid, path, name, type, size } = req.body;
      const result = await database.query(
        sql.update(fileUuid, path, name, type, size)
      );
      console.log(result.row);
    },
    downloadCount: async (req) => {
      console.log("download count");
      const { fileUuid } = req.body;
      const result = await database.query(sql.download(fileUuid));
      console.log(result.row);
    },
    upload: async (req) => {
      console.log("upload file");
    },
    download: async (req) => {
      console.log("download file");
    },
  };
};

module.exports = fileService;
