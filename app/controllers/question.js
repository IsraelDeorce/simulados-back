const create = (req, res) =>{
    res.status(201).json({
        message: 'Successfully created new question'     
    })
}

module.exports = {
    create
}