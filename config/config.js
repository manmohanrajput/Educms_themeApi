import mysql from 'mysql';

const poolconnection = mysql.createPool({
    connectionLimit :10,
    host: '162.214.80.49',
    user: 'qjzcohmy_vasudha',
    password: 'NO*2mJ=fEx2I',
    database :'qjzcohmy_educms',
    waitForConnections :true,
    queueLimit :0
});

export default poolconnection;