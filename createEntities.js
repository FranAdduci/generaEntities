const fs = require('fs');

function generarEntidad(nombre, columnas) {
    // Definir el código de la entidad con las columnas proporcionadas
    const codigoEntidad = `import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ${nombre} {
  @PrimaryGeneratedColumn()
  id: number;

  ${generarColumnas(columnas)}
}
`;

    // Guardar el código en un archivo con el nombre proporcionado
    fs.writeFileSync(`${nombre}.entity.ts`, codigoEntidad);

    console.log(`Entidad ${nombre} generada correctamente.`);
}

function generarColumnas(columnas) {
    // Generar el código de las columnas en función del objeto de columnas
    return columnas
        .map((columna) => {
            // Dividir la columna en sus partes (nombre y tipo)
            const partesColumna = columna.split(':');
            const nombre = partesColumna[0];
            const tipo = partesColumna[1] || 'string';

            // Verificar si la columna debe ser única
            const esUnica = columna.includes('unique');
            const decoradorUnique = esUnica ? '{ unique: true }' : '';

            // Generar el código de la columna con el decorador adecuado
            const codigoColumna = `@Column(${decoradorUnique})
  ${nombre}: ${tipo};`;
            return codigoColumna;
        })
        .join('\n');
}

// Ejemplo de uso:
const nombreEntidad = process.argv[2]; // Obtener el nombre de la entidad desde la línea de comandos
const columnasEntidad = process.argv.slice(3); // Obtener las columnas desde la línea de comandos

if (!nombreEntidad || columnasEntidad.length === 0) {
    console.error('Uso incorrecto. Debe proporcionar al menos un nombre de entidad y una columna.');
    return;
}

// Crear un objeto de entidad con el nombre y las columnas proporcionados
const miEntidad = {
    nombre: nombreEntidad,
    columnas: columnasEntidad,
};

generarEntidad(miEntidad.nombre, miEntidad.columnas);
