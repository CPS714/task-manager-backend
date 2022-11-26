const Joi = require('joi');

const schemas = {
    createTasks: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            is_completed: Joi.boolean().required(),
            description: Joi.string(),
            priority: Joi.number(),
            schedule_date: Joi.string(),
            created_on: Joi.string(),
            categories: Joi.array().items(Joi.string())
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