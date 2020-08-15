const express = require('express');
const router = express.Router();
const projectDatabase = require('../data/helpers/projectModel');

// Get Requests - Insomnia - Get Projects
router.get('/', (req, res) => {
  projectDatabase
    .get()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log('Post get error: ', err);
      res
        .status(500)
        .json({ errorMessage: 'There was an error retrieving the posts.' });
    });
});

router.get('/:id', (req, res) => {
  res.status(200).json(req.proj);
});

// POST requests /projects/  Insomnia - Create Project **
router.post('/', (req, res) => {
  projectDatabase
    .insert(req.body)
    .then(proj => {
      res.status(201).json(proj);
    })
    .catch(err => {
      console.log('Add Project Error:', err);
      res
        .status(500)
        .json({ Error: 'There was an error creating the project.' });
    });
});

// PUT requests Insomnia - Update Project **
router.put('/:id', (req, res) => {
  projectDatabase
    .update(req.params.id, req.body)
    .then(proj => {
      res.status(201).json(proj);
    })
    .catch(err => {
      res.status(500).json({ Error: 'There was an error updating the project.' });
    });
});

// DELETE requests Insomnia - Delete Project By ID
router.delete('/:id', (req, res) => {
  projectDatabase
    .remove(req.params.id)
    .then(proj => {
      res.status(201).end();
    })
    .catch(err => {
      console.log('Delete error: ', err);
      res.status(400).json({ errorMessage: 'The project could not be deleted' });
    });
});

module.exports = router;