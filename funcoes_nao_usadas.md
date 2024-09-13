const getLevelUser = async (userr) => {
try {
db.transaction((tx) => {
tx.executeSql(
`          SELECT u.user, l.level
          FROM usuario u 
          JOIN levelUser l ON u.id = l.usuario_id
          WHERE u.user = ? AND u.password = ?
         `,
[userr.user, userr.password],
(_, result) => {
if (result.rows.length > 0) {
const level = result.rows.item(0).level;
setLevel(level);
console.log("Nível do usuário:", level);
} else {
console.log("Usuário não encontrado na função getLevelUser");
}
},
(_, error) => {
console.log("Erro na execução da consulta:", error);
}
);
});
} catch (error) {
console.log("Erro ao recuperar nível do usuário:", error);
}
};
