const fileService = (props) => {
  return {
    insert: () => {
      console.log("insert file");
    },
    delete: () => {
      console.log("delete file");
    },
    update: () => {
      console.log("update file");
    },
    upload: () => {
      console.log("upload file");
    },
    download: () => {
      console.log("download file");
    },
  };
};

module.exports = fileService;
