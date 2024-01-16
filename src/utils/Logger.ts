import { COLOR } from "../constant/Color.enum";
import { LoggerType } from "../constant/Logger.enum";

export class Logger {
    private static log(type: LoggerType, message: string) {
        const logStyle = `color: ${Logger.getColor(type)}; font-weight: bold`;
        console.log(`%c[${type}] ${message}`, logStyle);
    }

    private static getColor(type: LoggerType): string {
        switch (type) {
            case LoggerType.INFO:
                return COLOR.BLUE;
            case LoggerType.DEBUG:
                return COLOR.GREEN;
            case LoggerType.WARN:
                return COLOR.YELLOW;
            case LoggerType.ERROR:
                return COLOR.RED;
            case LoggerType.FATAL:
                return COLOR.PURPLE;
            case LoggerType.TRACE:
                return COLOR.GRAY;
            default:
                return 'black';
        }
    }

    public static info(message: string) {
        Logger.log(LoggerType.INFO, message);
    }

    public static debug(message: string) {
        Logger.log(LoggerType.DEBUG, message);
    }

    public static warn(message: string) {
        Logger.log(LoggerType.WARN, message);
    }

    public static error(message: string) {
        Logger.log(LoggerType.ERROR, message);
    }

    public static fatal(message: string) {
        Logger.log(LoggerType.FATAL, message);
    }

    public static trace(message: string) {
        Logger.log(LoggerType.TRACE, message);
    }
}
