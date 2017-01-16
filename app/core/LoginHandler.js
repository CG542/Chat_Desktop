/**
 * Created by zhang.huiming on 2017/1/11.
 */

const electron = require('electron');
const ipc = electron.ipcRenderer;

const addon=require('../../addon/addon');
//

verify=function (name,psw) {
    console.log('Verify name and password');
    console.log(addon.hello());
    var result = true;
    console.log(addon.hello());
    if(result){
        ipc.send('login-success');
    }
    return result;
};

exports.login_verify=verify;