const stringTransform = require('caporal')
stringTransform
    .version('1.0.0')
    .description('CLI Challenge-01')
    .command('lowercase')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .action((args, options, logger) => {
        logger.info(args.text.toLowerCase(" "))
    })
    .command('uppercase')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .action((args, options, logger) => {
        logger.info(args.text.toUpperCase(" "))
    })
    .command('capitalize')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .action((args, options, logger) => {
        logger.info(args.text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" "))
    })
stringTransform.parse(process.argv)