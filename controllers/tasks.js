const dbService = require('../database/dbService');

const db = dbService.getDbServiceInstance();


const createTasks = async (req, res) => {
    try {
        await db.insertTasks(req.body);

        res.status(200);
    } catch(err) {
        console.log('Encountered error creating tasks', err)

        res.status(500).send({code: 500, error: 'server_error'})

    }
}

const getTasks = async (_req, res) => {
    try {
        const tasks = await db.getTasks();

        return res.status(200).json(tasks.rows);
    } catch(err) {
        console.log('Encountered error getting tasks', err)

        res.status(500).send({code: 500, error: 'server_error'})
    }
}

const updateTasks = async (req, res) => {
    try {
        const {task_id} = req.params;

        const task = await db.getTask(task_id);

        // TODO: We should different error codes. Right now we throw 500 for everything
        if (task.rows.length === 0)
            throw Error(`Unable to find task id ${task_id}`)

        await db.updateTask(task_id, req.body);

        res.status(200).send();
    } catch (err) {
        console.log('Encountered error updating tasks', err);

        res.status(500).send('server_error')
    }
}

module.exports = {
    createTasks,
    getTasks,
    updateTasks,
}