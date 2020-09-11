const sql = require("./query");

const fileService = (database) => {
  return {
    insert: (req) => {
      console.log("insert file");
      const { path, name, type, size, userUuid, postUuid } = req.body;
      const result = await database.query(sql.insert(path, name, type, size, userUuid, postUuid));
      console.log(result.row);
    },
    delete: (req) => {
      console.log("delete file");
      const { fileUuid } = req.body;
      const result = await database.query(sql.delete(fileUuid));
      console.log(result.row);
    },
    update: (req) => {
      console.log("update file");
      const { fileUuid, path, name, type, size } = req.body;
      const result = await database.query(sql.update(fileUuid, path, name, type, size));
      console.log(result.row);
    },
    downloadCount:() => {
      console.log("download count");
      const { fileUuid } = req.body;
      const result = await database.query(sql.download(fileUuid));
      console.log(result.row);
    },
    upload: (req) => {
      console.log("upload file");
    },
    download: (req) => {
      console.log("download file");
    },
  };
};

module.exports = fileService;
