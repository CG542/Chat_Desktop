/**
 * Created by zhang.huiming on 2017/1/11.
 */

const electron = require('electron');
const ipc = electron.ipcRenderer;

const sql_addon=require('../../addon/sqlite3/sqlite3');
//

verify=function (name,psw) {
    console.log('Verify name and password');
    var db = new sql_addon.Database('e:\\test.db');

    db.all("SELECT * from testtable", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": "+row.name);
        });

    });


    var result = true;

    if(result){
        //ipc.send('login-success');
    }
    return result;
};

exports.login_verify=verify;