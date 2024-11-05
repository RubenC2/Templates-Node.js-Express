// READ
const getAbout = async (req, res) => {
    try {
        res.status(200).render("about.pug"); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
getAbout
}