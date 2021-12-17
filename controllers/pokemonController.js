const {Pokemon} = require('../models');
const categories = ['https://image.ibb.co/nhYAf6/purple_icon.png', 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png', 'https://uploads.scratch.mit.edu/users/avatars/38728667.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1200px-Pok%C3%A9mon_Water_Type_Icon.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png'];

module.exports.viewAll = async function(req, res, next) {
    let searchCategories = ['All'];
    let searchRandom = req.query.random || false;
    for(let i = 0; i<categories.length; i++){
        searchCategories.push(categories[i]);
    }
    let pokemons;
    let searchCategory = req.query.category || 'All';
    if (searchCategory==='All'){
        pokemons = await Pokemon.findAll();
    } else {
        pokemons = await Pokemon.findAll({
            where: {
                        category: searchCategory
                    }
        });
    }
    if (pokemons.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(pokemons.length);
        pokemons = [pokemons[randomIndex]];
    }
    res.render('index', {pokemons, categories:searchCategories, searchCategory, searchRandom});
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}