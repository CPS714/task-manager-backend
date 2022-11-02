const Joi = require('joi');

const schemas = {
    createTasks: Joi.array().items(
        Joi.object({
            id: Joi.number().required(),
            name: Joi.string().required(),
            description: Joi.string(),
            priority: Joi.string(),
            schedule_date: Joi.string(),
            created_on: Joi.string(),
        })
    )
};


const verifyTasks = async(req, res, next) => {
    const validation = schemas.createTasks.validate(req.body);

    if(validation.error)
        return res.status(400).send({code: 400, error: 'invalid_request_error'});

    next();
}

module.exports = {
    verifyTasks
};