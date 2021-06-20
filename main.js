const {readFileSync,writeFileSync}=require('fs');

const readPlain=(filePath)=>{
    var content=readFileSync(filePath,'utf8');
    var result=content.split('\n');

    result.forEach((item,index,arr)=>{
      arr[index]=arr[index].split(',')
    })

    var users=[];

    for(let i=1;i<result.length;i++){
     users.push({id: result[i][0],first_name:result[i][1],last_name:result[i][2],email:result[i][3],gender:result[i][4],
        ip_address:result[i][5],color:result[i][6],parentId:result[i][7]
        })
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



