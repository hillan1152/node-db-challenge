const db = require('../data/db-config.js');

module.exports = {
    findResources,
    addResource, 
    findProjects,
    addProject, 
    findTasks,
    addTask
}

function findResources(){
    return db('resource')
}

function findProjects(){
    return db('project')
}

function findTasks(){
    return db('task')
}

function addResource(resource){
    return db('resource')
        .insert(resource, "id")
        .into('resource')
}
function addProject(project){
    return db('resource')
        .insert(project, "id")
        .into('project')

}
function addTask(task, id){
    return db('resource')
        .insert(task, "id")
        .into('task')
        .where({ project_id: id })
}