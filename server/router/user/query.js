// { id:query }
const query = {
  insertUser: (email, password, phone) => `
    INSERT INTO VT_USER (
        email
        ,password
        ${phone && ",phone"}
    ) VALUES (
        '${email}', '${password}' ${phone && ",'" + phone + "'"}
    )
  `,
  updateUser: (email, password, phone) => `
    UPDATE VT_USER SET 
        update_date = now()
        ${email && ",email='" + email + "'"}
        ${password && ",password='" + password + "'"}
        ${phone && ",phone='" + phone + "'"}
    WHERE 1=1
        ${email && "AND email='" + email + "'"}
    `,
  deleteUser: (email) => `
    UPDATE VT_USER SET
        update_date = now()
        ,out_yn = 'Y'
    WHERE 1=1
    AND email = '${email}'
    `,
};

module.exports = query;
