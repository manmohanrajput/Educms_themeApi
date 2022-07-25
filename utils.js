module.exports = function queryIt(sql, conn){
    return new Promise((resolve, reject) => {
        conn.query(sql, function(err, rows){
            return err ? reject(err) : resolve(rows);
        })
    })
}