const yargs=require('yargs')
const notes=require('./notes_concise')
argv=yargs.argv

//notes.addNote(argv.title,argv.body);
notes.removeNote(argv.title);
console.log(notes.getNotes());
