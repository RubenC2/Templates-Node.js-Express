
// READ
const getHome = async (req, res) => {
        try {
            res.status(200).render("home.pug"); // Respuesta de la API para 1 producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

module.exports = {
    getHome
}