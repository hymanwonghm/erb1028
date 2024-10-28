const indexController = (req, res) => {
    res.render("index", {})
}

const currentController = (req, res) => {
    res.send('Current Weather 123')
}

module.exports = {indexController, currentController}