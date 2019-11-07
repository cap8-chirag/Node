const fs=require('fs')

const getNotes= ()=>{return loadNotes();}
    
const addNote=(title,body)=>{
        const noteData=loadNotes();
        const newData={'title' : title,
                       'body' : body
                        };
        noteData.push(newData);
        writeData(noteData);             
    }
debugger
const removeNote=(title)=>{
        const noteData=loadNotes();
        const FileteredData=noteData.filter((note) => {return note.title!=title;})
        if (FileteredData.length>0)
        {
            writeData(FileteredData);
        }
      
    }

const loadNotes=()=>{
        const loadNotes=[];
        const readData=fs.readFileSync('notes.json');
        if (readData.length>0)
        {
            //console.log(JSON.stringify(readData.toString()));
            return JSON.parse(readData.toString());
        }
        else
        {
            return loadNotes;
        }
    }

const writeData=(notesData)=>{fs.writeFileSync('./notes.json',JSON.stringify(notesData));}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote 
    }