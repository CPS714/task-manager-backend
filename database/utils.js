const generateUpdateTaskQuery = (id, fields) => {
    let query = 'UPDATE tasks SET'
    let fieldCount = 1;
    let updatedValues = [];

    for (const field in fields) {
        query += ` ${field} = $${fieldCount},`
        updatedValues.push(fields[field])
        fieldCount += 1
    }

    // Remove last "," to avoid sql error
    query = query.slice(0, -1);


    query += ` WHERE id = $${fieldCount}`;
    updatedValues.push(id)

    return {query, values: updatedValues};
}


module.exports = {
    generateUpdateTaskQuery,
}