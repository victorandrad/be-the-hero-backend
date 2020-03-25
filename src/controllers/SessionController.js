const connection = require('../database/connection');

module.exports = {
    async store(req, res) {
        const {id} = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('*')
            .first();

        if (!ong) {
            return res.status(400).json({error: 'Nenhuma ONG encontrada com esse ID.'});
        }

        return res.json(ong);

    }

};