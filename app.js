#!usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, prindSuccess, printError } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)

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

    // Display weather
}

initCLI()

