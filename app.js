const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator')
const notesutilitis = require('./notes.js')

//const msg = getNotes()
//console.log(msg)

//console.log(validator.isURL('https/mead.io'));
//console.log(chalk.green('Success'));
//console.log(chalk.red('Failed'));
//console.log(chalk.green.inverse.bold('Success'));

//console.log(process.argv[2]);

//const command = process.argv[2];
/*
if(command === "add") {
    console.log("adding note");
} else if(command === "remove"){
    console.log("Removing notes");
}
*/


yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }, 
        body: {
            describe:'Note Body',
            demandOption:true,
            tyep:"string"
        }
    },
    handler:function (argv) {
        notesutilitis.addNote(argv.title,argv.body);
        //console.log("Title ", argv.title);
        //console.log("Body ", argv.body);

    }
});

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder: {
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function (argv){
        notesutilitis.removeNote(argv.title);
        //console.log("Removing a note");

    }
});

yargs.command({
    command:'read',
    describe:'Reading the note',
    handler:function(){
        console.log("Reading the notes");
    }
});

yargs.command({
    command:'list',
    describe:'List of notes',
    handler:function(){
        console.log("List all the notes");
    }
});
yargs.parse();
//console.log(yargs.argv);
