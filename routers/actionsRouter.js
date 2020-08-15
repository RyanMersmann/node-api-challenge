const express = require('express');
const router = express.Router();
const projectDatabase = require('../data/helpers/projectModel');
const actionDatabase = require('../data/helpers/actionModel');

// GET requests
router.get('/', (req, res) => {
  actionDatabase
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ Error: 'There was a problem retrieving the action' });
    });
});

router.get('/:id', (req, res) => {
  actionDatabase
    .get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ Error: 'There was a problem retrieving the action' });
    });
});

router.get('/:id/actions', (req, res) => {
  projectDatabase
    .getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(400).json({ Error: 'There was an error retriecing the actions' });
    });
});

// POST requests
router.post('/', (req, res) => {
  actionDatabase
    .insert(req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ Error: 'there was a problem adding the action' });
    });
});

// PUT reqests
router.put('/:id', (req, res) => {
  actionDatabase
    .update(req.params.id, req.body)
    .then(action => {
      res.status(200).json(req.body);
    })
    .catch(err => {
      res.status(500).json({ Error: 'there was an error updating the action' });
    });
});

// DELETE request
router.delete('/:id', (req, res) => {
  actionDatabase
    .remove(req.params.id)
    .then(res.status(200).json({ message: 'action has been deleted' }))
    .catch(err => {
      res.status(500).json({ Error: 'there was a problem deleting the action' });
    });
});

module.exports = router;