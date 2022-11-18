var index=-1;
var arrayRollnum = [];
var arrayName = [];
var arrayFname =[];
var arrayMname=[];
var arraycls =[];

function myNewRecord(){
    document.getElementById("addnewrecord").style.display="block";
    document.getElementById("mysearch").style.display="none";
    document.getElementById("myupdate").style.display="none";
    document.getElementById("mydelete").style.display="none";
}


function mySearch(){
    document.getElementById("addnewrecord").style.display="none";
    document.getElementById("mysearch").style.display="block";
    document.getElementById("myupdate").style.display="none";
    document.getElementById("mydelete").style.display="none";
}


function myUpdate(){
    document.getElementById("addnewrecord").style.display="none";
    document.getElementById("mysearch").style.display="none";
    document.getElementById("myupdate").style.display="block";
    document.getElementById("mydelete").style.display="none";
}


function myDelete(){
    document.getElementById("addnewrecord").style.display="none";
    document.getElementById("mysearch").style.display="none";
    document.getElementById("myupdate").style.display="none";
    document.getElementById("mydelete").style.display="block";
}




function Record(){
    var rollnum,name,fname,mname,sclass;
    
    rollnum = parseInt(document.getElementById("rollnum").value);
    name = document.getElementById("name").value;
    fname = document.getElementById("fname").value;
    mname = document.getElementById("mname").value;
    sclass = document.getElementById("sclass").value;
    
    

    arrayRollnum.push(rollnum);
    arrayName.push(name);
    arrayFname.push(fname);
    arrayMname.push(mname);
    arraycls.push(sclass);

    alert("Data Saved")
    alert(arrayName.toString())
}

function Search(){
    var searchrollnum;
    
    var length = arrayRollnum.length

    var flag=false;

    searchrollnum = parseInt(document.getElementById("searchrollnum").value);
    
    for(i=0; i<length; i++)
    {
        if(searchrollnum == arrayRollnum[i])
        {
            document.getElementById("getrollnum").value = arrayRollnum[i];
            document.getElementById("getname").value = arrayName[i];
            document.getElementById("getfname").value = arrayFname[i];
            document.getElementById("getmname").value = arrayMname[i];
            document.getElementById("getsclass").value = arraycls[i];
            flag=true;
            break;
        
        }
        
    }   

    if (flag==false){
        alert("Record Not Found");
    }

}


function SearchUpdate(){
    var searchrollnum;
    
    var length = arrayRollnum.length

    var flag=false;

    searchrollnum = parseInt(document.getElementById("searchrollnumu").value);
    
    for(i=0; i<length; i++)
    {
        if(searchrollnum == arrayRollnum[i])
        {
            document.getElementById("ugetrollnum").value = arrayRollnum[i];
            document.getElementById("ugetname").value = arrayName[i];
            document.getElementById("ugetfname").value = arrayFname[i];
            document.getElementById("ugetmname").value = arrayMname[i];
            document.getElementById("ugetsclass").value = arraycls[i];
            index = i;
            flag=true;
            break;
        
        }
        
    }   
    
    if (flag==false){
        alert("Record Not Found");
    }
   
    
}

function Updated(){
    alert(index);   

    arrayRollnum[index] = document.getElementById("ugetrollnum").value;
    arrayName[index] = document.getElementById("ugetname").value;
    arrayFname[index] = document.getElementById("ugetfname").value;
    arrayMname[index] = document.getElementById("ugetmname").value;
    arraycls[index] = document.getElementById("ugetclass").value;
    alert("Record Updated");
}