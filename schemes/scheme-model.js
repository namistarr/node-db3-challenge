const db = require('../data/db-config.js');

module.exports = {
find,
findById,
findSteps,
add,
update,
remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id})
}

function findSteps(id) {
    return db('steps as st')
        .join('schemes as sch', 'st.scheme_id', '=', 'sch.id')
        .where({ scheme_id: id })
        .select('st.id', 'sch.scheme_name', 'st.step_number', 'st.instructions')
}

function add(scheme) {
    return db('schemes').insert(scheme)
}

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
}

function remove(id) {
return db('schemes').where({id}).delete()
}