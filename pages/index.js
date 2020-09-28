import React from "react";

const index = () => {
  return (
    <>
      <h1>파일업로드 테스트</h1>
      <div>
        <form
          action="http://192.168.0.8:3005/file/upload"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="assets" multiple />
          <input type="submit" value="제출" />
        </form>
      </div>
    </>
  );
};

export default index;
