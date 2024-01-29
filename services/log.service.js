import chalk from 'chalk'
import dedent from 'dedent-js'

function printError(err) {
    console.log(`${chalk.bgRed(' Error: ')} ${err}`)
}

function prindSuccess(msg) {
    console.log(`${chalk.bgGreen(' Message: ')} ${msg}`)
}

function printHelp() {
    console.log(dedent`
        ${chalk.bgYellow.bold(' HELP ')}

        ${chalk.bgCyan(' No parameters – display weather ')}

        ${chalk.bgMagenta(' Support parameters: ')}
        -s [CITY] – set city
        -h – display help information
        -t [API_KEY] – for save token
    `)
}

export { printError, prindSuccess, printHelp }
