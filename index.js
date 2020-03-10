// const cli = require('caporal')

// cli
//     .version('1.1.1')
//     .description('Own cli app')
//     .command('hello', 'print hello world')
//     .argument('<text>', 'input text', cli.STRING, 'world hello')
//     .option('--repeat <times>','repeat string', cli.INTEGER,1)
//     .action((args, options, logger) => {
//         logger.info(args.text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" "))
//     })
// cli.parse(process.argv)


const request = require('request');
const cheerio = require('cheerio');