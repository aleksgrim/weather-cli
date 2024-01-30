#!usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, prindSuccess, printError } from './services/log.service.js'
import { saveKeyValue, TOKENT_DICTIONARY } from './services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token empty')

        return 
    }

    try {
        await saveKeyValue(TOKENT_DICTIONARY.token, token)

        prindSuccess('Token saved')
    } catch(err) {
        printError(err.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }

    if (args.s) {
        // Display city
    }

    if (args.t) {
        return saveToken(args.t)
    }

    getWeather('frankfurt')
}

initCLI()

