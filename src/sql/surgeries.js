const db = require('./index');
module.exports = {
    create: (paid,doid,type,data,duration,room,status,notes,created_at,updated_at) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.surgeries (patient_id,doctor_id,type,data,duration,room,status,notes,created_at,updated_at) values (?,?,?,?,?,?,?,?,?,?)',[paid,doid,type,data,duration,room,status,notes,created_at,updated_at],(err) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
}