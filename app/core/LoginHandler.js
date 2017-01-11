/**
 * Created by zhang.huiming on 2017/1/11.
 */

const electron = require('electron');
const ipc = electron.ipcRenderer;


verify=function (name,psw) {
    console.log('Verify name and password');
    var result = true;

    if(result){
        ipc.send('login-success');
    }
    return result;
};

exports.login_verify=verify;