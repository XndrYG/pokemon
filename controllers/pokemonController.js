const {Pokemon} = require('../models')

module.exports.viewAll = async function(req, res, next) {
    const pokemonList = await Pokemon.findAll();

    res.render('index', {pokemonList});
}

module.exports.renderEditForm = async function(req, res, next) {
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon});
}

module.exports.updatePokemon = async function(req, res) {
    await Pokemon.update(
        {
            name: req.body.name,
            type: req.body.type,
            picture: req.body.picture,
            move1cost1: req.body.move1cost1,
            move1cost2: req.body.move1cost2,
            move1name: req.body.move1name,
            move1power: req.body.move1power,
            move2cost1: req.body.move2cost1,
            move2cost2: req.body.move2cost2,
            move2cost3: req.body.move2cost3,
            move2name: req.body.move2name,
            move2power: req.body.move2power,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreatcost: req.body.retreatcost
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}
module.exports.renderAddForm = function(req,res){
    const pokemon = {
        name: "",
        type: "",
        picture: "",
        move1cost1: "",
        move1cost2: "",
        move1name: "",
        move1power: "",
        move2cost1: "",
        move2cost2: "",
        move2cost3: "",
        move2name: "",
        move2power: "",
        weakness: "",
        resistance: "",
        retreatcost: "",
    };
    res.render('add', {pokemon});
}

module.exports.deletePokemon = async function(req, res){
    await Pokemon.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.addPokemon = async function(req,res){
    await Pokemon.create(
        {
            name: req.body.name,
            type: req.body.type,
            picture: req.body.picture,
            move1cost1: req.body.move1cost1,
            move1cost2: req.body.move1cost2,
            move1name: req.body.move1name,
            move1power: req.body.move1power,
            move2cost1: req.body.move2cost1,
            move2cost2: req.body.move2cost2,
            move2cost3: req.body.move2cost3,
            move2name: req.body.move2name,
            move2power: req.body.move2power,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreatcost: req.body.retreatcost
        });
    res.redirect('/');
}