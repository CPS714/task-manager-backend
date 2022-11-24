const PostgresPool = require('pg').Pool;
const dotenv = require('dotenv');

const {generateUpdateTaskQuery} = require('./utils');

dotenv.config();

const instance = null;

// TODO: Add these config vars to .env file
// For now it doesn't matter since these creds aren't going to be used in PROD
const connection = new PostgresPool({
    host: 'localhost',
    user : 'postgres',
    password : 'password',
    database : 'postgres',
    port : '5432'
});

// TODO: A lot of repeated logic here. Can probably collapse all of this down into a singular method
class DbService {
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }

    async insertTasks(props){
        props.forEach(async(prop) => {
            const {name, is_completed, description, priority, schedule_date, email} = prop;
            try{
                const insertId = await new Promise((resolve, reject) => {
                    const query = 'INSERT INTO tasks (name, is_completed, description, priority, schedule_date, email, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
                    connection.query(query, [name, is_completed, description, priority, schedule_date, email, new Date()], (error, result) => {
                        if(error){
                            reject(new Error(error.message));
                        }
                        else{
                            resolve(result.insertId);
                        }
                    })
                })
                return insertId;
            }
            catch(error){
                console.log(error.message);
            }
        });
    }

    async getTasks(email){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM tasks WHERE email = $1 ;"
                connection.query(query, [email], (error, result) => {
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(result);
                    }
                })
            })
            return response;
        }
        catch(error){
            throw error;
        }
    }

    async getTask(id){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM tasks WHERE id = $1;"
                connection.query(query, [id], (error, result) => {
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(result);
                    }
                })
            })
            return response;
        }
        catch(error){
            throw error;
        }
    }

    async updateTask(id, props){

        const {query, values} = generateUpdateTaskQuery(id, props);

        try{
            const response = await new Promise((resolve, reject) => {
                connection.query(query, values, (error, result) => {
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(result);
                    }
                })
            })
            return response;
        }
        catch(error){
            console.log(error);
        }
    }

    async deleteTask(id){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = `DELETE FROM tasks WHERE id = $1;`
                connection.query(query, [id], (error, result) => {
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(result);
                    }
                })
            })
            return response;
        }
        catch(error){
            throw error;
        }
    }

    


}


module.exports = DbService;