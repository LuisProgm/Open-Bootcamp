// Crea un nuevo proyecto de Node

//- Instala la dependencia Winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function mostrarError() {
    throw new Error('Hay un error en tu código!')
}

// - Registra el error en un archivo a través de un try...catch
try {
    mostrarError();
} catch (e) {
    logger.log("error", e.toString());
}