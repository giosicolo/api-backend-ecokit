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

CREATE TABLE planta(
	planta_id SERIAL,
	capacidad INTEGER,
	disponibilidad BOOLEAN,
	PRIMARY KEY (planta_id)
);
	
CREATE TABLE cobro(
	nro_operacion_id SERIAL,
	fecha DATE NOT NULL,
	PRIMARY KEY (nro_operacion_id));
	
CREATE TABLE vendedor(
	legajo_id VARCHAR(12),
	dni VARCHAR(8),
	nombre VARCHAR (50),
	telefono VARCHAR (15),
	email VARCHAR (50),
	PRIMARY KEY (legajo_id));
	
CREATE TABLE empresa(
	empresa_id SERIAL,
	razonsocial Varchar(30),
	direccion varchar(30),
	contacto varchar(20),
	primary key (empresa_id));


CREATE TABLE alquiler( 
	alquiler_id SERIAL, 
	fecha_inicio DATE NOT NULL,
	fecha_fin DATE NOT NULL,
	monto_base decimal,
	vendedor_id VARCHAR(30),
	empresa_id INTEGER,
	FOREIGN KEY (vendedor_id) REFERENCES vendedor (legajo_id) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (empresa_id) REFERENCES empresa(empresa_id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY (alquiler_id));


CREATE TABLE pertenece(
	pertenece_id SERIAL,
	fecha_inicio DATE,
	fecha_fin DATE,
	alquiler_id INTEGER,
	planta_id INTEGER,
	FOREIGN KEY (alquiler_id) REFERENCES alquiler (alquiler_id) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (planta_id) REFERENCES planta (planta_id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY(pertenece_id)
);

CREATE TABLE remito(
	remito_id SERIAL,
	monto decimal,
	conformidad BOOLEAN,
	detalle VARCHAR(300),
	fecha DATE ,
	alquiler_id INTEGER,
	cobro_id INTEGER,
	FOREIGN KEY (alquiler_id) REFERENCES alquiler (alquiler_id) ON UPDATE CASCADE ON DELETE RESTRICT,	
	FOREIGN KEY (cobro_id) REFERENCES cobro (nro_operacion_id) ON UPDATE CASCADE ON DELETE RESTRICT,	
	PRIMARY KEY (remito_id));

CREATE TABLE servicio_extra(
	servicio_extra_id SERIAL,
	fecha DATE,
	monto decimal,
   	descripcion VARCHAR(300),
	remito_id INTEGER,
	planta_id INTEGER,
	FOREIGN KEY (remito_id) REFERENCES remito (remito_id) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (planta_id) REFERENCES planta (planta_id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY (servicio_extra_id));
	

	