//加载mysql模块
var mysql = require('mysql');

//创建连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '970928',
    database : 'bilibili'
});

//开始连接
connection.connect();

//数据库操作---插入
// connection.query('insert into `user` values (\'中国大陆\',\'哔哩哔哩\',\'666\',\'12345678911\')', function (error, results, fields) {
//     //如果异常，则停止，抛出error
//     if (error) throw error;
// });

//数据库操作---删除
// connection.query('DELETE from `user` where userPassword = \'666\'', function (error, results, fields) {
//     //如果异常，则停止，抛出error
//     if (error) throw error;
// });

//数据库操作---查询
connection.query('select * from `user`', function (error, results, fields) {
    //如果异常，则停止，抛出error
    if (error) throw error;
    //打印结果
    results.forEach(function (item,index) {
        console.log('The solution is: ',item);
    })
});


//关闭数据库连接
connection.end();