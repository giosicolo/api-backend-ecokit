CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL CHECK name <> '',
    priority INTEGER NOT NULL,
    description TEXT,
    delivery DATE NOT NULL
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id)
);

CREATE TABLE alquiler( 
	alquiler_id SERIAL, 
	fecha_inicio DATE NOT NULL,
	fecha_fin DATE NOT NULL,
	monto_base DOUBLE NOT NULL,
	PRIMARY KEY (alquiler_id));
	
CREATE TABLE cobro(
	nro_operacion_id SERIAL,
	fecha DATE NOT NULL,
	PRIMARY KEY (nro_operacion_id));

CREATE TABLE servicio_extra(
	servicio_extra_id SERIAL,
	fecha DATE,
	monto DOUBLE,
   	descripcion VARCHAR(300),
	PRIMARY KEY (servicio_extra_id));
	
CREATE TABLE vendedor(
	legajo_id VARCHAR(12),
	dni VARCHAR(8)
	nombre VARCHAR (50),
	telefono VARCHAR (15),
	email VARCHAR (50),
	PRIMARY KEY (legajo_id));
	
CREATE TABLE remito(
	remito_id SERIAL,
	monto DOUBLE,
	conformidad BOOLEAN,
	detalle VARCHAR(300),
	fecha DATE(),
	PRIMARY KEY (remito_id));
