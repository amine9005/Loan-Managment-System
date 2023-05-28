import { format } from "date-fns";
import { v4 as uuidv4 } from 'uuid';
import fs from "node:fs"
import fsPromises from "node:fs/promises"
import path ,{ dirname } from "path";
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const logEvent = async(message,logFileName)=>{
    const dateTime = `${format(new Date() ,`yyyy-MM-dd\tHH:mm:ss`)}`
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`

    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logFileName),logItem)
    }catch(err){
        console.log(err)
    }
}

const logger = (req,res,next)=>{
    logEvent(`${req.method}\t${req.url}\t${req.headers.origin}`,`reqLog.log`)
    console.log(`${req.method} ${req.path}`)
    next()
}

export const LogEvent = logEvent
export default logger