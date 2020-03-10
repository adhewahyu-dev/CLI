const stringTransform = require('caporal')
stringTransform
    .version('1.0.0')
    .description('CLI Challenge-03')
    .command('palindrome')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .action((args, options, logger) => {
		const re = /[\W_]/g
		const ins = args.text.toLowerCase().replace(re, "")
    logger.info(ins === [...ins].reverse().join('') ? "Is palindrome? Yes" : "Is palindrome? No")
    })
stringTransform.parse(process.argv)

