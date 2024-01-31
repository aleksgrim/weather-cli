#!usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, prindSuccess, printError, printWeather } from './services/log.service.js'
import { getKeyValue, saveKeyValue, TOKENT_DICTIONARY } from './services/storage.service.js'

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

const saveCity = async (city) => {
    if (!city.length) {
        printError('City empty')

        return 
    }

    try {
        await saveKeyValue(TOKENT_DICTIONARY.city, city)

        prindSuccess('City saved')
    } catch(err) {
        printError(err.message)
    }
}

const getForcast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKENT_DICTIONARY.city)
        const weather = await getWeather(city)

        printWeather(weather, '☁️')
    } catch (error) {
        if (error?.response?.status === 404) {
            printError('City name is incorrect')
        } else if (error?.response?.status === 401) {
            printError('Token is inccorect')
        } else {    
            printError(error.message)
        }   
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    
    if (args.h) {
        return printHelp()
    }

    if (args.c) {
        return saveCity(args.c)
    }

    if (args.t) {
        return saveToken(args.t)
    }

    return getForcast()
}

initCLI()

