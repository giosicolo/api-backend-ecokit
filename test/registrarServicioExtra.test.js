let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:4004';


/*
describe('Registrar Servicio Extra: ', () => {
    it('se deberia insertar un Servicio Extra con exito', (done) => {
        chai.request(url)
            .get('/api/registrarServicioExtra/obtenerAlquileresActivos')
            .end(function (err, AlquileresAct) {
                var idAlquiler = AlquileresAct.body.data[0].alquiler_id;
                var idPlanta= AlquileresAct.body.data[0].perteneces[0].plantum.planta_id;
                expect(AlquileresAct).to.have.status(200); 
                console.log("Alquiler " + idAlquiler + " --- Planta " + idPlanta );
                chai.request(url)
                    .get('/api/registrarServicioExtra/yaExisteServicio/' + idAlquiler + '/' + idPlanta)
                    .end(function (err, tieneServicio) {
                        //tieneServicio = empContacto.body.data[0];
                        expect(tieneServicio).to.have.status(200); 
                        var fecha = '2021-10-25', monto = '3000', descripcion = "desagote";
                        chai.request(url)
                            .post('/api/registrarServicioExtra/altaServicioExtra')
                            .send({ servicio_extra_id: 303 , fecha: fecha , monto: monto , descripcion: descripcion, alquiler_id: idAlquiler , planta_id: idPlanta })
                            .end(function (err, servicio) {
                                expect(servicio).to.have.status(200); 
                                console.log(servicio.body);
                                done();
                            });
                    });
            });
    });
});*/

/*
describe('Registrar Servicio Extra: ', () => {
    it(' No se deberia insertar un Servicio Extra con exito, dado que no encuentra alquileres activos', (done) => {
        chai.request(url)
            .get('/api/registrarServicioExtra/obtenerAlquileresActivos')
            .end(function (err, AlquileresAct) {
                //var idAlquiler = AlquileresAct.body.data[0].alquiler_id;
                //var idPlanta= AlquileresAct.body.data[0].perteneces[0].plantum.planta_id;
                expect(AlquileresAct).to.have.status(500);
                done();
            });
    });
});
*/


/*
describe('Registrar Servicio Extra: ', () => {
    it('No se deberia insertar un Servicio Extra, dado que ya existe un servicio ese dia para dicha planta ', (done) => {
        chai.request(url)
            .get('/api/registrarServicioExtra/obtenerAlquileresActivos')
            .end(function (err, AlquileresAct) {
                var idAlquiler = AlquileresAct.body.data[0].alquiler_id;
                var idPlanta= AlquileresAct.body.data[0].perteneces[0].plantum.planta_id;
                expect(AlquileresAct).to.have.status(200); 
                console.log("Alquiler " + idAlquiler + " --- Planta " + idPlanta );
                chai.request(url)
                    .get('/api/registrarServicioExtra/yaExisteServicio/' + idAlquiler + '/' + idPlanta)
                    .end(function (err, tieneServicio) {
                        //tieneServicio = empContacto.body.data[0];
                        expect(tieneServicio).to.have.status(500); 
                    });
            });
    });
});
*/


describe('Registrar Servicio Extra: ', () => {
    it('se deberia insertar un Servicio Extra con exito', (done) => {
        chai.request(url)
            .get('/api/registrarServicioExtra/obtenerAlquileresActivos')
            .end(function (err, AlquileresAct) {
                var idAlquiler = AlquileresAct.body.data[0].alquiler_id;
                var idPlanta= AlquileresAct.body.data[0].perteneces[0].plantum.planta_id;
                expect(AlquileresAct).to.have.status(200); 
                console.log("Alquiler " + idAlquiler + " --- Planta " + idPlanta );
                chai.request(url)
                    .get('/api/registrarServicioExtra/yaExisteServicio/' + idAlquiler + '/' + idPlanta)
                    .end(function (err, tieneServicio) {
                        //tieneServicio = empContacto.body.data[0];
                        expect(tieneServicio).to.have.status(200); 
                        var fecha = '2021-10-25', monto = '3000', descripcion = "desagote";
                        chai.request(url)
                            .post('/api/registrarServicioExtra/altaServicioExtra')
                            .send({ servicio_extra_id: 301 , fecha: fecha , monto: monto , descripcion: descripcion, alquiler_id: idAlquiler , planta_id: idPlanta })
                            .end(function (err, servicio) {
                                expect(servicio).to.have.status(500); 
                                console.log(servicio.body);
                                done();
                            });
                    });
            });
    });
});