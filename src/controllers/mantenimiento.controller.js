const Mantenimiento = require('../models/Mantenimiento');

const obtenerTodosLosMantenimientos = async (req, res) => {
  try {
    const mantenimientos = await Mantenimiento.findAll();
    res.json(mantenimientos);
  } catch (error) {
    console.error('Error al obtener todos los mantenimientos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerMantenimientoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const mantenimiento = await Mantenimiento.findByPk(id);
    if (mantenimiento) {
      res.json(mantenimiento);
    } else {
      res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el mantenimiento por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const crearMantenimiento = async (req, res) => {
  const nuevoMantenimiento = req.body;

  try {

    console.log(nuevoMantenimiento);

    if(!nuevoMantenimiento.fecha || !nuevoMantenimiento.alquiler 
        || !nuevoMantenimiento.tipoMantenimiento || !nuevoMantenimiento.planta || !nuevoMantenimiento.usuario){
        res.status(400).json({ error: 'Faltan datos' });
        return;
    }


    const mantenimientoCreado = await Mantenimiento.create(nuevoMantenimiento);
    res.status(201).json(mantenimientoCreado);
  } catch (error) {
    console.error('Error al crear el mantenimiento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const borrarMantenimientoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Mantenimiento.destroy({
      where: { id },
    });
    if (resultado === 1) {
      res.json({ mensaje: 'Mantenimiento eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el mantenimiento por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerTodosLosMantenimientos,
  obtenerMantenimientoPorId,
  crearMantenimiento,
  borrarMantenimientoPorId,
};
