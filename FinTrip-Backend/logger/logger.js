const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message, msName }) => {
            let colorString;

            if(level === 'info') colorString = `\x1b[32m ${level.toUpperCase()} \x1b[0m`;
            else if(level === 'error') colorString = `\x1b[31m ${level.toUpperCase()} \x1b[0m`;
            else colorString = `\x1b[33m ${level.toUpperCase()} \x1b[0m`;

            return `[MS-${msName}] ${colorString} - ${message} ${timestamp}`;
        })
    ),
    transports: [
        new transports.Console(),
        // Tu peux ajouter d'autres transports, comme pour écrire dans un fichier
        // new transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;
