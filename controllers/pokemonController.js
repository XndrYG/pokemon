module.exports.viewAll = function(req, res, next) {
    const pokemonList = [ {
        id: 1,
        name: 'Mewtwo - 130 HP',
        type: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
        move1cost1: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        move1cost2: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png',
        move1name: 'Super Absorbtion',
        move1power: '60',
        move2cost1: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        move2cost2: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        move2cost3: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        move2name: 'Psystrike',
        move2power: '200',
        weakness: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1200px-Pok%C3%A9mon_Dark_Type_Icon.svg.png',
        resistance: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        retreatcost: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png'
    },
    {
        id: 2,
        name: 'Mew - 50 HP',
        type: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        picture: 'https://www.seekpng.com/png/full/202-2022812_151-mew-dream-2-mew-pokemon.png',
        move1cost1: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        move1cost2: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png',
        move1name: 'Psywave',
        move1power: '10x',
        move2cost1: 'https://image.ibb.co/nhYAf6/purple_icon.png',
        move2cost2: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png',
        move2cost3: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_1280.png',
        move2name: 'Cosmic Storm',
        move2power: '50+',
        weakness: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1200px-Pok%C3%A9mon_Dark_Type_Icon.svg.png',
        resistance: 'https://www.pngkit.com/png/full/353-3532588_pokemon-fighting-type-symbol-pokemon-card-fighting-energy.png',
        retreatcost: 'https://image.ibb.co/nhYAf6/purple_icon.png'
    }];
    res.render('index', {pokemonList});
}