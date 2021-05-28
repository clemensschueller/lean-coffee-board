module.exports = (err, req, res, next) => {
  console.log(err.message)
  res.status(404).send('Not found')
}
