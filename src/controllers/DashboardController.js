module.exports = {
  index(req, res) {
    res.send({ message: 'ok', user: req.userId });
  }
}