const fs=require('fs')

const getNotes=function(){
        getNotes=JSON.stringify(loadNotes);
        console.log(getNotes);
    }

const addNote=function(title,body){
        const noteData=loadNotes();
        const newData={'title' : title,
                       'body' : body
                        };
        noteData.push(newData);
        writeData(noteData);             
    }

const removeNote=function(title){
        const noteData=loadNotes();
        const FileteredData=noteData.filter((note) => {
            return note.title!=title;    
        })
        writeData(FileteredData);
        //console.log(JSON.stringify(testData));    
    }

const loadNotes=function(){
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

const writeData=function(notesData){
        fs.writeFileSync('./notes.json',JSON.stringify(notesData));
    }

    module.exports={
        getNotes:getNotes,
        addNote:addNote,
        removeNote:removeNote 
    }