const Movies = require('caporal');
const request = require('request');
const cheerio = require('cheerio');

Movies
    .version('1.0.0')
    .description('CLI Challenge-12')
    .command('movies')
    .action(() => {
        let url = 'https://www.cgv.id/en/';
        request(url, (err, res, html)=>{
        let urlMovies = [];
        if(!err){
            let $ = cheerio.load(html);
            for(let i =0; i<$('.slides').children().length;i++){
            urlMovies.push($('.slides').children()[i].children[0].next.attribs.href)
            } 
        }
        for(let j of urlMovies){
            request(j,(err,res,html)=>{
            if(!err){
                let $ = cheerio.load(html);
                console.log(`Title : ${$('.movie-info-title')[0].children[0].data.trim()}`);
                console.log(`Synopsis : ${$('.movie-synopsis')[0].children[0].data.trim()}`);
                for(let k=0; k<$('.movie-add-info').children().find('li').length;k++){
                console.log($('.movie-add-info').children().find('li')[k].children[0].data);
                }
                console.log('================================');
                
            }
            });
        }
        });
    })
Movies.parse(process.argv)