const db = require('./index');
/*预约主体

一般由 医生开单或医院安排，患者不能像普通挂号那样直接在线预约手术。

患者通常需要先就诊，由主治医生判断是否需要手术。

预约流程

术前评估：体检、实验室检查、影像学检查等

麻醉评估：麻醉科医生确认是否适合手术

手术排期：根据手术室资源和患者病情安排手术时间

缴费：部分医院可能先支付预付款

预约方式

医院官网或 App（部分医院支持）

电话预约或现场预约

由医生或护士直接安排

注意事项

手术类型不同，预约难度不同：常规小手术一般容易安排，大型手术或紧急手术可能排期较长

手术预约通常不可随意取消，需要提前通知*/
module.exports = {
     createappoint:(name,time,docid,urgent,status,type)=>{      //下午完成订单的sql和路由   {包括病房手术药品体检挂号}      type作为体检看病之类的

            return new Promise((resolve, reject) => {
                db.query('insert into mock.appoint (patient_name,time,doctor_id,urgent,status) values (?,?,?,?,?,?)',[name,time,docid,urgent,status,type],(err,result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })//创建完毕之后自动生成表单
            })
     },//创建预约信息    明天过来书写预约系统里面的逻辑    /**/
    getappoint: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.appoint',(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });// 获取预约信息
    },
    getpersonappoint:(id)=>{
            return new Promise((resolve, reject) => {
                db.query('select * from mock.appoint where patient_id = ?',[id],(err,result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })
            })
    },
    deleteappoint: (id) => {
        return new Promise((resolve, reject) => {
            db.query('delete from mock.appoint where id = ?',[id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },//删除预约信息
    urgentappoint: (id,urgent) => { //urgent是字符串
        return new Promise((resolve, reject) => {
            db.query('update mock.appoint set urgent = ? where id = ?',[urgent,id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });//挂急诊
    },
    updateappoint: (id,status) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.appoint set status = ? where id = ?',[status,id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },//更新预约信息
    endappoint: (id,status) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.appoint set status = ? where id = ?',[status,id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },
    createbills: (paid,amount,type,description,status,paid_method,create_at) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.appoint (paid,amount,type,description,status,paid_method,create_at) values (?,?,?,?,?,?,?)',[paid,amount,type,description,status,paid_method,create_at],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })//创建完毕之后自动生成表单
        })
    },//创建预约信息    明天过来书写预约系统里面的逻辑    /**/
}//结束预约


