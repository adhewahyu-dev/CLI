const worldRandom = require('caporal')
worldRandom
    .version('1.0.0')
    .description('CLI Challenge-05')
    .command('random')
    .action((args, options, logger) => {
            let result           = '';
            const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for ( var i = 0; i < 32; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length));
                }
    logger.info(result)
    })
worldRandom.parse(process.argv)



