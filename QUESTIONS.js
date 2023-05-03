//1.HOW TO COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER.

let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
 let objkeys1= Object.keys(obj1);
 let objkeys2= Object.keys(obj2);
 function equal(obj1,obj2){
     if(objkeys1.length!==objkeys2.length)
 {
   return "The two JSON don't have same properties";
 }
for(let userkey of objkeys1){
  if(obj1[userkey]!=obj2[userkey]){
    return "The two JSON don't same properties";
  }
  else{
    return "The two JSON have same properties";
  }
}
}
console.log(equal(obj1,obj2));
//OUTPUT:The two JSON have same properties



//2.USE THE RAEST COUNTRIES API URL https://restcountries.com/v3.1/all  AND DISPLAY ALL COUNTRY FLAGS IN CONSOLE.
 
var xhr= new XMLHttpRequest();
xhr.open ('GET','https://restcountries.com/v3.1/all')
xhr.responseType='json';
xhr.send();
xhr.onload=function(){
  var responseObj=xhr.response;
  for(i=0;i<responseObj.length;i++){
 console.log("COUNTRY NAME: "+responseObj[i].name.common+"                           "+"FLAG: "+responseObj[i].flags.png);

  }
}

//OUTPUT

// myscript.js:9 COUNTRY NAME: Guatemala                    FLAG: https://flagcdn.com/w320/gt.png
// myscript.js:9 COUNTRY NAME: Singapore                    FLAG: https://flagcdn.com/w320/sg.png
// myscript.js:9 COUNTRY NAME: Bosnia and Herzegovina       FLAG: https://flagcdn.com/w320/ba.png
// myscript.js:9 COUNTRY NAME: Maldives                     FLAG: https://flagcdn.com/w320/mv.png
// myscript.js:9 COUNTRY NAME: Latvia                       FLAG: https://flagcdn.com/w320/lv.png
// myscript.js:9 COUNTRY NAME: Greece                       FLAG: https://flagcdn.com/w320/gr.png
// myscript.js:9 COUNTRY NAME: Cocos (Keeling) Islands      FLAG: https://flagcdn.com/w320/cc.png
// myscript.js:9 COUNTRY NAME: Mayotte                      FLAG: https://flagcdn.com/w320/yt.png


//3.USE THE REST COUNTRIES AND DISPLAY ALL COUNTRIES NAME, REGION, SUB REGION AND POPULATION IN CONSOLE.

var xhr= new XMLHttpRequest();
xhr.open ('GET','https://restcountries.com/v3.1/all')
xhr.responseType='json';
xhr.send();
xhr.onload=function(){
  var responseObj=xhr.response;
for(i=0;i<responseObj.length;i++){
 console.log( `COUNTRY NAME: ${responseObj[i].name.common}             REGION: ${responseObj[i].region}        SUBREGION: ${responseObj[i].subregion}          POPULATION: ${responseObj[i].population}`);

  }
}


//OUTPUT:
// COUNTRY NAME: Guatemala                               REGION: Americas    SUBREGION: Central America            POPULATION: 16858333
// myscript.js:8 COUNTRY NAME: Singapore                 REGION: Asia        SUBREGION: South-Eastern Asia         POPULATION: 5685807
// myscript.js:8 COUNTRY NAME: Bosnia and Herzegovina    REGION: Europe      SUBREGION: Southeast Europe           POPULATION: 3280815
// myscript.js:8 COUNTRY NAME: Maldives                  REGION: Asia        SUBREGION: Southern Asia              POPULATION: 540542
// myscript.js:8 COUNTRY NAME: Latvia                    REGION: Europe      SUBREGION: Northern Europe            POPULATION: 1901548
// myscript.js:8 COUNTRY NAME: Greece                    REGION: Europe      SUBREGION: Southern Europe            POPULATION: 10715549
// myscript.js:8 COUNTRY NAME: Cocos (Keeling) Islands   REGION: Oceania     SUBREGION: Australia and New Zealand  POPULATION: 544
// myscript.js:8 COUNTRY NAME: Mayotte                   REGION: Africa      SUBREGION: Eastern Africa             POPULATION: 226915
// myscript.js:8 COUNTRY NAME: Jordan                    REGION: Asia        SUBREGION: Western Asia               POPULATION: 10203140
// myscript.js:8 COUNTRY NAME: Bangladesh                REGION: Asia        SUBREGION: Southern Asia              POPULATION: 164689383