const {readFileSync,writeFileSync}=require('fs');
var User=require('./user.js')

const readPlain=(filePath)=>{
    var content=readFileSync(filePath,'utf8');
    var result=content.split('\n');

    result.forEach((item,index,arr)=>{
      arr[index]=arr[index].split(',')
    })

    var users=[];

    for(let i=1;i<result.length;i++){
    let u=new User(result[i][0],result[i][1],result[i][2],result[i][3],result[i][4],result[i][5],result[i][6],result[i][7])

    users.push(u);
    
    }

    return users;

}


const saveToFile =(filePath,usersData)=>{
    writeFileSync(filePath,JSON.stringify(usersData))
}

saveToFile('userData.json',readPlain('input.csv'));

const readJsonFile=(filePath)=>{
    console.log(JSON.parse(readFileSync(filePath,'utf8')))    
}

readJsonFile('userData.json')

