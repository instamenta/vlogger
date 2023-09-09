export class VLogger {

   private readonly $name: string
   private readonly $debug: boolean

   constructor($debug: boolean, $name: string) {
      this.$name = $name;
      this.$debug = true;
   }

   public static getInstance($debug: boolean = true, $name: string = ''): VLogger {
      return new VLogger($debug, $name);
   }

   info(className: string, data: any, msg: string, func: string): void {
      console.log(`${this.$name}[INFO] ${className}.${func}(): "${msg}"`, data);
   }

   debug(className: string, data: any, msg: string, func: string): void {
      console.log(`${this.$name}[DEBUG] ${className}.${func}(): "${msg}"`, data);
   }

   warn(className: string, data: any, msg: string, func: string): void {
      console.log(`${this.$name}[WARN] ${className}.${func}(): "${msg}"`, data);
   }

   error(className: string, error: any, msg: string, func: string): void {
      console.log(`${this.$name}[ERROR] ${className}.${func}(): "${msg}": `, error);
   }

   getVlog(className: string = ''): IVlog {
      return {
         info: ({data, msg = '', func = ''}: IVInfo) => {
            this.info(className, data, msg, func);
         },
         debug: ({data = {}, msg = '', func = ''}: IVDebug) => {
            this.debug(className, data, msg, func);
         },
         warn: ({data, msg = '', func = ''}: IVWarn) => {
            this.warn(className, data, msg, func);
         },
         error: ({e, msg = '', func = ''}: IVError) => {
            this.error(className, e, msg, func);
         }
      }
   };
}

export interface IVlog {
   info: (params: { data: any, msg: string, func?: string }) => void,
   debug: (params: { data?: any, msg?: string, func?: string }) => void,
   warn: (params: { data: any, msg?: string, func?: string }) => void,
   error: (params: { e: any, msg?: string, func?: string }) => void,
}

interface IVInfo {
   data: any,
   msg?: string | undefined,
   func?: string | undefined
}

interface IVDebug {
   data?: any,
   msg?: string | undefined,
   func?: string | undefined
}

interface IVWarn {
   data: any,
   msg?: string | undefined,
   func?: string | undefined
}

interface IVError {
   e: any,
   msg?: string | undefined,
   func?: string | undefined
}
