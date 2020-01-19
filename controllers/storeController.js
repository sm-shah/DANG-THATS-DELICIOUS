exports.homePage = (req, res) => {
    res.render('index')
}
exports.addStore = (req, res) => {
    // res.send('It Works')
    res.render('editStore', { title: ' +poo Add Store' })
}

exports.createStore = (req, res) => {
    res.json(req.body)
}