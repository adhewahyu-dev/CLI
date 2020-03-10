# CLI
CLI (Command line interface) adalah sebuah mekanisme untuk melakukan interaksi dengan program dengan menggunakan sebuah teks untuk menjalankan tugas tertentu.

## Unix Philosophy
Sebuah norma atau aturan dalam pengembangan aplikasi software yang minimalis.
 - Setiap program melakukan satu hal dengan baik.
 - Lakukan percobaan di awal sewaktu mendesain atau membangun sebuah program.
 - Pilih tools yang lebih disukai daripada tools yang tidak baik dalam meringankan program yang dibuat
 
> Beberapa package yang membantu dalam pengembangan aplikasi command line pada Node JS, diantaranya: caporal, commander, yargs dsb

### Caporal
Setup caporal pada project Node JS :
```sh
adhe@adhe-HP-Notebook:~/Documents/bootcamp/CommandLine$ mkdir cli-app
adhe@adhe-HP-Notebook:~/Documents/bootcamp/CommandLine$ cd cli-app/
adhe@adhe-HP-Notebook:~/Documents/bootcamp/CommandLine$/cli-app$ npm init --y
adhe@adhe-HP-Notebook:~/Documents/bootcamp/CommandLine$/cli-app$ npm i caporal
adhe@adhe-HP-Notebook:~/Documents/bootcamp/CommandLine$/cli-app$ touch index.js
adhe@adhe-HP-Notebook:~/Documents/bootcamp/CommandLine$/cli-app$ code
```

#### Contoh Penggunaan
```
const cli = require('caporal');
cli
  .version('1.0.0')
  .command('obfuscate', 'Obfuscate the string')
  .argument('<string>', 'String to be obfuscated', cli.STRING)
  .action(function(args, options, logger) {
	  logger.info(args.string.replace(/./gm, function(i) {
		  return '&#'+i.charCodeAt(0)+';';
	  }));
  });
 
cli.parse(process.argv);
```
Pada caporal.js action mengandung 3 argument yaitu `args`, `options`, `logger`. tidak hanya itu `.command` berguna untuk memberikan command tertentu pada command line sebagai contoh `obfuscate` seperti contoh diatas
```

