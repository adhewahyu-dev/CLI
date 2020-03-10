const ipAddress = require('caporal')
const os = require('os');
let ifaces = os.networkInterfaces();
ipAddress
    .version('1.0.0')
    .description('CLI Challenge-05')
    .command('ip')
    .action((args, options, logger) => {
    logger.info(ifaces.wlp2s0[0].address)
    })
ipAddress.parse(process.argv)