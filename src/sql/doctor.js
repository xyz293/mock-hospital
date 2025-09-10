const db = require('./index');
module.exports = {
   getlist: () => {
    return new Promise((resolve, reject) => {
        db.query('select * from mock.doctors',(err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
   },
   classpecialization: (specialization) => {
    return new Promise((resolve, reject) => {
        db.query('select * from mock.doctors where specialization = ?',[specialization],(err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
   },
   getdetail: (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from mock.doctors where id = ?',[id],(err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
   },
   getdepartment: () => {
    return new Promise((resolve, reject) => {
        db.query('select * from mock.departments',(err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
   },
   getdepartmentdoctors: (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from mock.doctors where department_id = ?',[id],(err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
   }
}