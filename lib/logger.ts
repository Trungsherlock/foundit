import pino from 'pino';

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: process.env.NODE_ENV === 'development',
            translateTime: 'HH:mm:ss Z',
            ignore: 'pid,hostname'
        }
    }
})

export default logger;