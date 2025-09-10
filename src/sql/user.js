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
    getdrugorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.paitentdrug where paid = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getbedsorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.paitentbeds where paid = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    setorder: (paid,status,address,note,fee,drugid,time) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.user_order(paid,status,address,note,fee,drugid,time) value (?,?,?,?,?,?,?)',[paid,status,address,note,fee,drugid,time],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
   getmyorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.user_order where paid = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    }
}