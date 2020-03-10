const screenShot = require('caporal')
const webshot = require('webshot');
const fs = require('fs')

//Create 1 to 001 for example
const pad = (number, length)=>{  
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
  }
  
  const screenshot = (toFormat, fromWeb) => {
    let url = fromWeb.parent.rawArgs[3]; //catch of url web
    let format=''; //the end format of images'screenshot
  
    //looping to create formatName if file already exist
    for(let i=1 ;i<=Infinity ;i++){
      format = `screenshot-${pad(i, 3)}.${toFormat}`;
      try {
        if (fs.existsSync(format)) {
          format = `screenshot-${pad(i+1, 3)}.${toFormat}`;
        }
        else{
          break;
        }
      } catch(err) {
        console.error(err)
      }
    }
    
    //screenshot proccess
    webshot(url, format, function(err) {
      if(err){
        return console.log(err);
      }
      console.log('Image Screenshot Succesfully');
    });
  
  }
  screenShot
    .version('1.0.0')
    .description('CLI Challenge-10')
    .command('screenshot <webSiteFrom>')
    .option('--format')
    .action((to, webSiteFrom) => {
         screenshot(to, webSiteFrom);
    });
screenShot.parse(process.argv)

