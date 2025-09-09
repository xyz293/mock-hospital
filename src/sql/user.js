const db = require('./index');
module.exports = {
    adduser: (username,password,role) => {
    return new Promise((resolve, reject) => {
        db.query('insert into mock.user set ?', {
            username: username,
            password: password,
            role:role,
        }, (err) => {
            if (err) {
                reject(err);
            }
            db.query('select * from mock.user',(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            })
        });
    })
},
    login: (username,password) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.user where username = ? and password = ?', [username, password], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getuser: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.user',(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.orders where user_id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },

}