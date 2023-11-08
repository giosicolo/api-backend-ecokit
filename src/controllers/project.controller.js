import Project from '../models/Projects';
import Task from '../models/Task';

export async function createProject(req, res) {
    const { name, priority, description, delivery } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            delivery
        }, {
            fields: ['name', 'priority', 'description', 'delivery']
        })
        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
    } catch (error) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

};

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneProject(req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id
            }
        });
        res.json({
            data: project
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteProject(req, res) {
    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Project eliminado satisfactoriamente'
    })
}

export async function updateProyect(req, res) {
    const { id } = req.params;
    const { name, priority, description, delivery } = req.body;

    const project = await Project.findAll({
        attributes: ['id', 'priority', 'description', 'delivery'],
        where: { id }
    });

    if (project.length) {
        project.forEach(async project => {
            await Project.update({
                name,
                priority,
                description,
                delivery
            })
        });
    };

    return res.json({
        message: 'Proyecto actualizado correctamente',
        data: project
    });
}