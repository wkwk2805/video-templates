const sql = require("./query");
const fs = require("fs");
const path = require("path");

const fileService = (database) => {
  return {
    insert: async (req) => {
      console.log("insert file");
      try {
        await database.query("BEGIN");
        const { userUuid, postUuid } = req.body;
        /* userUuid = "15dfeeb0-f980-11ea-9995-23d60f7f8577";
        postUuid = "2cbca09c-014b-11eb-8e78-17e9cc900d8a"; */
        const files = req.files;
        for (let file of files) {
          const { path, filename, mimetype, size } = file;
          const result = await database.query(
            sql.insert(path, filename, mimetype, size, userUuid, postUuid)
          );
          if (result.rowCount === 0) {
            throw Error();
          }
        }
        await database.query("COMMIT");
      } catch (error) {
        await database.query("ROLLBACK");
        // file 지우기
        for (let file of req.files) {
          fs.unlink(file.path, (err) => console.error(err));
        }
        console.log(error);
      }
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
    getFilePath: async (req) => {
      const { fileUuid } = req.body;
      const result = await database.query(sql.getFile(fileUuid));
      const row = result.rows.length > 0 && result.rows[0];
      const filePath = row["file_path"];
      return path.resolve("./" + filePath);
    },
  };
};

module.exports = fileService;
