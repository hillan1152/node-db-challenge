const express = require('express');

const Business = require('./business-model.js');

const router = express.Router();


router.get('/resource', (req, res) => {
    Business.findResources()
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
          });
})
router.get('/', (req, res) => {
    Business.findProjects()
        .then(project => {
            const newList = [];
            project.forEach(proj => {
                if(proj.completed === 0){
                    proj = {...proj, completed: false}
                    console.log('new for each', proj)
                    newList.push(proj)
                } else {
                    proj = {...proj, completed: true}
                    newList.push(proj)
                }
            })
            res.json(newList)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
          });
})
router.get('/task', (req, res) => {
    Business.findTasks()
        .then(task => {
            const newList = [];
            task.forEach(tasks => {
                if(tasks.completed === 0){
                    tasks = {...tasks, completed: false}
                    console.log('new for each', tasks)
                    newList.push(tasks)
                } else {
                    tasks = {...tasks, completed: true}
                    newList.push(tasks)
                }
            })
            res.json(newList)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
          });
})
////// POSTS
router.post('/task', (req, res) => {
    const { id } = req.params
    Business.addTask(req.body, id)
        .then(task => {
            console.log(task)
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add tasks' });
          });
})
router.post('/', (req, res) => {
    Business.addProject(req.body)
        .then(project => {
            console.log(project)
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add project' });
          });
})
router.post('/resource', (req, res) => {
    Business.addResource(req.body)
        .then(resource => {
            console.log(resource)
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add resource' });
          });
})







module.exports = router;