// { id:query }
const query = {
  insertUser: (email, password, phone, name, nickname) => `
    INSERT INTO VT_USER (
        email
        ,password
        ${phone && ",phone"}
        ${name && ",name"}
        ${nickname && ",nickname"}
    ) VALUES (
        '${email}', '${password}' ${phone && ",'" + phone + "'"}
        ${name && ",'" + name + "'"} ${nickname && ",'" + nickname + "'"}
    )
  `,
  updateUser: (userUuid, email, password, phone, name, nickname) => `
    UPDATE VT_USER SET 
        update_date = now()
        ${email && ",email='" + email + "'"}
        ${password && ",password='" + password + "'"}
        ${phone && ",phone='" + phone + "'"}
        ${name && ",name='" + name + "'"}
        ${nickname && ",nickname='" + nickname + "'"}
    WHERE user_uuid= '${userUuid}'
    `,
  deleteUser: (userUuid) => `
    UPDATE VT_USER SET
        update_date = now()
        ,out_yn = 'Y'
    WHERE 1=1
    AND user_uuid = '${userUuid}'
    `,
  searchEmail: (name, phone) => `
      SELECT email FROM VT_USER WHERE phone = '${phone}' AND name = '${name}'
    `,
  updatePassword: (email, password) =>
    `UPDATE VT_USER SET password = '${password}' WHERE email = '${email}'`,
};

module.exports = query;
