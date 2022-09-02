import winston, { createLogger, transports, addColors } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

interface IPrintFormat {
  timestamp: string
  level: string
  message: string
}

const infoFileTransport = new DailyRotateFile({
  filename: 'logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
})

const errorFileTransport = new DailyRotateFile({
  level: 'error',
  filename: 'logs/application-error-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
})

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
}

const level = (): string => {
  const env = process.env.NODE_ENV != null || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

addColors(colors)

const formatOptions = winston.format.combine(
  winston.format.json(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.prettyPrint(),
  winston.format.colorize({ all: true }),
  winston.format.align(),
  winston.format.printf(info => {
    const { timestamp, level, message } = info as IPrintFormat
    return `${timestamp} [${level}]: ${message}`
  }),
)

const logger = createLogger({
  level: level(),
  transports: [new transports.Console(), infoFileTransport, errorFileTransport],
  levels,
  format: formatOptions,
})

export default logger
