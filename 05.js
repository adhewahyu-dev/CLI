// function random(wordrandom = 32){
//     let result           = '';
//     const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length
//             for ( var i = 0; i < wordrandom; i++ ) {
//                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
//                 }
//                 console.log(result)     
// }

// random(4)


const worldRandom = require('caporal')
worldRandom
    .version('1.0.0')
    .description('CLI Challenge-05')
    .command('random')
    //.argument('<text>','input text', worldRandom.STRING, 'start challenge')
    .action((args, options, logger) => {
            let result           = '';
            const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for ( var i = 0; i < 32; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length));
                }
    logger.info(result)
    })
worldRandom.parse(process.argv)






// function random(wordrandom = 32){
//     let result           = '';

//     if(wordrandom == 'letters=false'){
//         const characters = '0123456789'
//         for ( var i = 0; i < 32; i++ ) {
//             result += characters.charAt(Math.floor(Math.random() * characters.length));
//             }
//             console.log(result)    
//     } else if(wordrandom == 'numbers=false'){
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//         for ( var i = 0; i < 32; i++ ) {
//             result += characters.charAt(Math.floor(Math.random() * characters.length));
//             }
//             console.log(result)
//     } else if (wordrandom == 'uppercase'){
//         const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         const charactersLength = characters.length
//             for ( var i = 0; i < 32; i++ ) {
//                 result += characters.toUpperCase().charAt(Math.floor(Math.random() * charactersLength));
//                 }
//                 console.log(result)  
//     }
//     // const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     // const charactersLength = characters.length
//     //         for ( var i = 0; i < wordrandom; i++ ) {
//     //             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     //             }
//     //             console.log(result)     
// }

// random('numbers=false');


