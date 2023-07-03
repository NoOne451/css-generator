document.addEventListener("DOMContentLoaded",()=>{
 let box=document.querySelector(".box");
 let allr=document.getElementById("allr");
 let allru=document.getElementById("allru");
 let output=document.querySelector('.outputtext');
let conc=document.querySelector("#cc");
let tl=document.getElementById("tl");
let tlu=document.getElementById("tlu");

let tr=document.getElementById("tr");
let tru=document.getElementById("tru"); 

let br=document.getElementById("br");
let bru=document.getElementById("bru");

let bl=document.getElementById("bl");
let blu=document.getElementById("blu");

let bc=document.getElementById("bc");
let bs=document.getElementById("bs");
let bw=document.getElementById("bw")
let bwu=document.getElementById("bwu");

let copybtn=document.getElementById("copybtn");

var bcv="#000000";
var bsv=bs.value;
var bwv=bw.value;
var cod2;

var color="#e67e22";
var cod1;
var allrv=allr.value;
var tlv=tl.value;
var trv=tr.value;
var brv=br.value;
var blv=bl.value;
 

allr.addEventListener("input",allrad);
function allrad(){ 
    color=conc.value;
    box.style.backgroundColor=color;
    allrv=allr.value;
    tl.value=allrv
    tr.value=allrv
    br.value=allrv
    bl.value=allrv

    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    allru.innerText=`${allrv}px`;
    output.value=cod2;
    box.style.cssText=cod2;

}


tl.addEventListener("input",tlrad);
function tlrad(){ 
    color=conc.value;
    box.style.backgroundColor=color;
    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    tlu.innerText=`${tlv}px`;
    output.value=cod2;
    box.style.cssText=cod2;

}




tr.addEventListener("input",trrad);
function trrad(){ 
    color=conc.value;
    box.style.backgroundColor=color;
    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    tru.innerText=`${trv}px`;
    output.value=cod2;
    box.style.cssText=cod2;

}

br.addEventListener("input",brrad);
function brrad(){ 
    color=conc.value;
    box.style.backgroundColor=color;
    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    bru.innerText=`${brv}px`;
    output.value=cod2;
    box.style.cssText=cod2;

}

bl.addEventListener("input",blrad);
function blrad(){ 
    color=conc.value;
    box.style.backgroundColor=color;
    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    blu.innerText=`${blv}px`;
    output.value=cod2;
    box.style.cssText=cod2;

}

conc.addEventListener("input",()=>{
    color=conc.value;
    
    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    output.value=cod2;
    box.style.cssText=cod2;
    
    
})

bc.addEventListener("input",borderchange)
bs.addEventListener("input",borderchange)
bw.addEventListener("input",()=>{
    color=conc.value;
    box.style.backgroundColor=color;

    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    bwu.innerText=`${bwv}px`;
    console.log(cod2)
    box.style.cssText=cod2;
    output.value=cod2;
})
function borderchange(){
    color=conc.value;
    box.style.backgroundColor=color; 

    tlv=tl.value;
    trv=tr.value;
    brv=br.value;
    blv=bl.value;

    bcv=bc.value;
    bsv=bs.value;
    bwv=bw.value;
    cod2=`border:${bsv} ${bwv}px ${bcv};
    border-radius:${tlv}px ${trv}px ${brv}px ${blv}px ;
    background-color:${color} ;`;
    console.log(cod2)
    box.style.cssText=cod2;
    output.value=cod2;
}

copybtn.addEventListener("click",()=>{
 output.select()
 document.execCommand("copy")
})

})
