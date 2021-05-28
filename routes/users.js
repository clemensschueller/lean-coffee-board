const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let users = [
  {
    name: 'Jane Doe',
    age: 33,
    email: 'jane@doe.com',
    id: '0',
  },
  {
    name: 'John Doe',
    age: 32,
    email: 'john@doe.com',
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(users)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const foundUser = users.find(user => user.id === id)
  foundUser ? res.json(foundUser) : next()
})

router.post('/', (req, res, next) => {
  const newUser = { ...req.body, id: uuidv4() }
  users.push(newUser)
  res.status(201).json(newUser)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = users.findIndex(user => user.id === id)
  const user = users[index]
  const updatedUser = { ...user, ...req.body }
  users.splice(index, 1, updatedUser)
  res.json(updatedUser)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  users = users.filter(user => user.id !== id)
  res.sendStatus(204)
})

module.exports = router
