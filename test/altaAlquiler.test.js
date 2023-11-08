let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:4004';



describe('Insertar un Alquiler: ', () => {
    it('se deberia insertar un Alquiler con exito', (done) => {
        chai.request(url)
            .get('/api/altaAlquiler/obtenerEmpresasConYacimiento')
            .end(function (err, empresasConYac) {
                var idempresa = empresasConYac.body.data[0].empresa_id;
                expect(empresasConYac).to.have.status(200); 
                console.log(idempresa);
                //Suponemos que la empresa quiere actualizar el contacto asi pasamos por esa ruta
                var contactoNuevo = 'Roman Riquelme - 2995087522'
                chai.request(url)
                    .put('/api/altaAlquiler/actualizarContactoEmpresa/' + idempresa)
                    .send({ contacto: contactoNuevo })
                    .end(function (err, empContacto) {
                        contactoNuevo = empContacto.body.data[0].contacto;
                        expect(empContacto).to.have.status(200); 
                        console.log(contactoNuevo);
                        chai.request(url)
                            .get('/api/altaAlquiler/obtenerVendedores')
                            .end(function (err, vendedores) {
                                var idVendedor = vendedores.body.data[0].legajo_id;
                                expect(vendedores).to.have.status(200); 
                                console.log(idVendedor);
                                //Estos datos tienen que venir del front al principio de la transaccion
                                //Aca ponemos unos que sabemos que nos permiten continuar.
                                //Asumimos que el alquiler es por plantas permanentes
                                var numeroPlantas = 2, capacidadMin = 3;
                                chai.request(url)
                                    .get('/api/altaAlquiler/obtenerPlantasPermanentesParaAsignar/' + numeroPlantas + '/' + capacidadMin)
                                    .end(function (err, plantas) {
                                        var plantasSelecc = plantas.body;
                                        expect(plantas).to.have.status(200); 
                                        console.log(plantas.body);
                                        //Las fechas de alta y fin alquiler son recibidas desde el front
                                        //en este caso usamos fechas validas y un monto base de 50000
                                        var fecha_ini = "2021-11-01", fecha_final = "2023-02-02";
                                        chai.request(url)
                                            .post('/api/altaAlquiler/crearAlquiler/')
                                            .send({ fecha_inicio: fecha_ini, fecha_fin: fecha_final, monto_base: 50000, vendedor_id: idVendedor, empresa_id: idempresa })
                                            .end(function (err, alquiler) {
                                                var alquilerExitoso = alquiler.body;
                                                expect(alquiler).to.have.status(200); 
                                                console.log(alquilerExitoso);
                                                var i;
                                                for (i=0 ; i<numeroPlantas ; i++) {
                                                    chai.request(url)
                                                    .put('/api/altaAlquiler/cambiarDisponibilidadPlanta/'+ plantasSelecc.data[i].planta_id )
                                                    .end(function (err, plantaAso) {
                                                        var plantaAsociada = plantaAso.body;
                                                        console.log(plantaAsociada);
                                                    });
                                                }
                                                //expect(plantaAsociada).to.have.status(200);  
                                                done();     
                                            });  
                                    });
                            });
                    });
            });
    });
});





describe('Insertar un Alquiler: ', () => {
    it('La creacion del alquiler deberia fallar al no obtener la cantidad de plantas necesarias', (done) => {
        chai.request(url)
            .get('/api/altaAlquiler/obtenerEmpresasConYacimiento')
            .end(function (err, empresasConYac) {
                var idempresa = empresasConYac.body.data[0].empresa_id;
                console.log(idempresa);
                //Suponemos que la empresa quiere actualizar el contacto asi pasamos por esa ruta
                var contactoNuevo = 'Roman Riquelme - 2995087522'
                
                
                chai.request(url)
                    .put('/api/altaAlquiler/actualizarContactoEmpresa/' + idempresa)
                    .send({ contacto: contactoNuevo })
                    .end(function (err, empContacto) {
                        contactoNuevo = empContacto.body.data[0].contacto;
                        console.log(contactoNuevo);
                        
                        
                        chai.request(url)
                            .get('/api/altaAlquiler/obtenerVendedores')
                            .end(function (err, vendedores) {
                                var idVendedor = vendedores.body.data[0].legajo_id;
                                console.log(idVendedor);
                                //Estos datos tienen que venir del front al principio de la transaccion
                                //Aca ponemos unos que sabemos que nos permiten continuar.
                                //Asumimos que el alquiler es por plantas permanentes
                                
                                var numeroPlantas = osdahuias, capacidadMin = 30;    
                                chai.request(url)
                                    .get('/api/altaAlquiler/obtenerPlantasPermanentesParaAsignar/' + numeroPlantas + '/' + capacidadMin)
                                    .end(function (err, plantas) {
                                        var plantasSelecc = plantas.body;
                                        console.log(plantas.body);
                                        expect(plantas).to.have.status(500);
                                        done();
                                    });
                            });
                    });
            });
    });
});





describe('Insertar un Alquiler: ', () => {
    it('La creacion del alquiler deberia fallar cuando no consiga empresas que tengan yacimientos', (done) => {
        chai.request(url)
            .get('/api/altaAlquiler/obtenerEmpresasConYacimiento')
            .end(function (err, empresasConYac) {
                //var idempresa = empresasConYac.body.data[0].empresa_id;
                console.log(idempresa);
                expect(empresasConYac).to.have.status(500);
                done();
            });
    });
});




/*
describe('Insertar un Alquiler: ', () => {
    it('La creacion del alquiler deberia fallar al no encontrar ningun vendedor en la base de datos', (done) => {
    
                        chai.request(url)
                            .get('/api/altaAlquiler/obtenerVendedores')
                            .end(function (err, vendedores) {
                                var idVendedor = vendedores.body.data[0].legajo_id;
                                console.log(idVendedor);
                                expect(idVendedor).to.have.status(500);
                                done();
                            });
                    });
            });

});
*/



describe('Insertar un Alquiler: ', () => {
    it('La creacion del alquiler deberia fallar al no ser valido los datos para actualizar los contactos', (done) => {
        chai.request(url)
            .get('/api/altaAlquiler/obtenerEmpresasConYacimiento')
            .end(function (err, empresasConYac) {
                var idempresa = empresasConYac.body.data[0].empresa_id;
                console.log(idempresa);
                var contactoNuevo = '151bhbsajb knsnmasknn'
                chai.request(url)
                    .put('/api/altaAlquiler/actualizarContactoEmpresa/' + idempresa)
                    .send({ contacto: contactoNuevo })
                    .end(function (err, empContacto) {
                        contactoNuevo = empContacto.body.data[0].contacto;
                        console.log(contactoNuevo);
                        expect(empContacto).to.have.status(400);
                        done();
                    });
            });
    });
});













/*
   describe('Deberia Fallar al guardar un alquiler: ',()=>{
    it('se deberia insertar un Alquiler con exito', (done) => {
    chai.request(url)
    .post('/api/altaAlquiler/crearAlquiler')
    .send({fecha_inicio:'2021-10-10', fecha_fin: "2021-11-12", monto_base: 50000, vendedor_id: 10, empresa_id: 10})
    .end(function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   */