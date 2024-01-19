emparr = [{empid:111, ename:'Rajan',sal:23456}];

exports.adddata=function(ob){
    //find data
    ob1=emparr.find(x=>x.empid==ob.empid);
    if(ob1 == null){
        emparr.push(ob);
        console.log(emparr);
        return "added successfully";
    }else{
        console.log(emparr);
        return "duplicate object";
    }
}

exports.searchdata=function(empid){
     return emparr.find(x=>x.empid==empid);
}