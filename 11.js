const screenShot = require('caporal');
const webshot = require('webshot');
const fs = require('fs')

const screenshot = (toFormat, fromWeb) => {
  let fileUrl = fs.readFileSync(fromWeb,'utf8').split('\n');
  for(i of fileUrl){
    let format=`${i.replace(/^[https:/]+/i,'').replace(/[./]/g,'-')}.${toFormat}`;
    webshot(`${i}`, format, function(err) {
      if(err){
        return console.log(err);
      }
      console.log('Image Screenshot Succesfully');
    }); 
  }
}

screenShot
    .version('1.0.0')
    .description('CLI Challenge-11')
    .command('screenshot 11-list.txt')
    .option('--format')
    .action((to, webSiteFrom) => {
        screenshot(to, webSiteFrom)
    })
screenShot.parse(process.argv)