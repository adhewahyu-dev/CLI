const Obfuscator = require('caporal')
Obfuscator
    .version('1.0.0')
    .description('CLI Challenge-04')
    .command('obfuscate')
    .argument('<text>','input text', Obfuscator.STRING, 'start challenge')
    .action((args, options, logger) => {
        let bytes = []
        const word = args.text
        for(let i =0; i<word.length; i++){
            bytes.push('&#'+word.charCodeAt(i)+';')
        }
         console.log(bytes.join(''))
    })
    Obfuscator.parse(process.argv)
