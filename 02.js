const arithmatic = require('caporal')
arithmatic
    .version('1.0.0')
    .description('CLI Challenge-02')
    .command('add')
    .argument('[numb...]','input angka')
    .action((args, options, logger) => {
        const adm = args.numb.map(angka => parseFloat(angka))
        logger.info(adm.reduce((a,b) => a+b))
    })
    .command('subtract')
    .argument('[numb...]','input angka')
    .action((args, options, logger) => {
        const adm = args.numb.map(angka => parseFloat(angka))
        logger.info(adm.reduce((a,b) => a-b))
    })
    .command('multiply')
    .argument('[numb...]','input angka')
    .action((args, options, logger) => {
        const adm = args.numb.map(angka => parseFloat(angka))
        logger.info(adm.reduce((a,b) => a*b))
    })
    .command('divide')
    .argument('[numb...]','input angka')
    .action((args, options, logger) => {
        const adm = args.numb.map(angka => parseFloat(angka))
        logger.info(adm.reduce((a,b) => a/b))
    })
    
arithmatic.parse(process.argv)