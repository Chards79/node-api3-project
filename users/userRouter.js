const express = require('express');

const router = express.Router();

const db = require('../users/userDb');

router.use(express.json());

router.get('/', (req, res) => {
  db.get(req.query)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving the hubs' })
    })
})

// endpoints

// POST to /api/users
router.post('/', (req, res) => {
  const data = req.body;

  if (data.name) {
    db.insert(data)
      .then(users => {
        res.status(201).json({ ...users, ...data })
      })
      .catch(error => {
        console.log('error on POST for users', error);
        res.status(500).json({ error: 'There was an error while saving the user to the database' })
      })
  } else {
    res.status(400).json({ errorMessage: 'Please provide a name for the user' })
  }
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// GET to /api/users
router.get('/', (req, res) => {
  db.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log('error on get for all users', error);
      res.status(500).json({ error: 'The users information could not be retrieved' })
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
