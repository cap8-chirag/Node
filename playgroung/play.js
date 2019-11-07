const yargs=require('yargs')
const fs=require('fs')
const getdata=[];
//const note=[{'title':"title1",'body':"body1"}]
//const notedata=JSON.stringify(note);
//console.log(notedata);

//fs.appendFileSync('play.json',notedata);
const getdatabuffer=fs.readFileSync('play.json');
//const loadNotes=readData.toString();
//    console.log(JSON.parse(loadNotes));
if (getdatabuffer.length>0)
{
    console.log(getdatabuffer);
    getdata=JSON.parse(getdatabuffer.toString());
    console.log(getdata);
}
else
{   
    console.log('else');
    //const getdata={'title':"title1",'body':"body1"};
}   
    const newdata={'title':"title2",'body':"body2"};
    getdata.push(newdata);
    getdata.push({'title':"title3",'body':"body3"});
    const updateddata=JSON.stringify(getdata);
    fs.writeFileSync('play.json',updateddata);
    console.log(getdata.toString());
    console.log(JSON.stringify(getdata));
    console.log(updateddata);
