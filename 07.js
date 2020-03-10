const ipAddress = require('caporal')
const os = require('os');
let ifaces = os.networkInterfaces();
ipAddress
    .version('1.0.0')
    .description('CLI Challenge-05')
    .command('ip-external')
    .action((args, options, logger) => {
    logger.info(ifaces.lo[0].address)
    })
ipAddress.parse(process.argv)