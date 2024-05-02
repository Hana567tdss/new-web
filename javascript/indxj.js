
// var name="jack";
// var age=23;
// var message=" hi my wow name is"+name+"and i am"+age+"years old";
// //alert(message);
// console.log(message);
//javascript to deep understand w3shool,MDN who build firefox mozilla
//node to run jsbin.com
// var firstname="john";
// var lastname="jacob";
// var dateofbirth="10-09-82"
// var age= 23;
// var profileimgurl="http://coolpink.com/johnjacob.jpj";

// var loginwelcomemessage="welcom, " + firstname + ".happy " + age + " rd brithday!";

// console.log(loginwelcomemessage);


// var sum = 7+23;
// var sub = 5-3;
// console.log(sub);
// var myaccountbalance = 300 ;
// var nicksbshoes = 799 ;
// var coupon= 500;
// var age=23;
// var josage="23";
// if(age===josage){
//     console.log(" i am the same age as joe")
// }
// else{
//     console.log("not the same..")
// }

// if(nicksbshoes<=myaccountbalance){
//     myaccountbalance-=nicksbshoes;
//     console.log(" we just bought dope shoes");
//     console.log("account balance"+myaccountbalance);
// }
// else if (nicksbshoes-coupon<=myaccountbalance){
//     console.log(" we just bought dope shoes with coupon");
//     myaccountbalance-=nicksbshoes-coupon;
//     console.log("account balance"+myaccountbalance);
    
// }
// else{
//     console.log("sorry can't buy family");
// }

//  var student1= "timmy";
//  var student2= "janessa";
//  var student3= "arun";

//  var students = ["timmy","janessa","arun"];

//  var naughtlist = [];
//  naughtlist.push(students[0]);
//  var index = naughtlist.indexOf("timmy");
//  console.log(naughtlist);
//  if( index > -1) {
//       naughtlist.splice(index, 1);
//  }

//  console.log(naughtlist);

//  var students = ["john"," jacob","jingle","heimer","smith"];
//  for( var x=0; x < students.length ; x++){
//     console.log( students[x]);
//  }

// function area( length,width){
//     return length*width;
// }
// var area1=area(5,4)
// console.log(area1);//or
// var rectangelesarea=[]
// rectangelesarea.push(area(2,4));
// rectangelesarea.push(area(4,4));
// rectangelesarea.push(area(3,4));
// console.log(rectangelesarea);
//  var bankaccount = 500;
// function maketransaction(priceofsale){
//     if(priceofsale<=bankaccount){
//         bankaccount-=priceofsale;
//         console.log("purchase successful!");
//     }
//     else{
//         console.log("insufficient fund !");
//     }

// }
// console.log( bankaccount);
// maketransaction(79.00);

// console.log( bankaccount);
// maketransaction(2.34);

// console.log( bankaccount);
// maketransaction(10.34);

// // console.log( bankaccount);
// // maketransaction(565.34);

// console.log( bankaccount);
// maketransaction(450.00);
// var bankaccount = 500;
//  var transaction=function maketransaction(priceofsale){
//     if(priceofsale<=bankaccount){
//         bankaccount-=priceofsale;
//         console.log(bankaccount);
//         console.log("purchase successful!");
//     }
//     else{
//         console.log("insufficient fund !");
//     }

// };
// transaction(10);
// var printcustomername=function(frist,last){
//     console.log("fristname:" +frist + "last name:" +last);
// }
// var applyforcreaditcard =function(creaditscore,soul){

// }
// var bankoperations=[];
// bankoperations.push(transaction);
// bankoperations.push(printcustomername);
// bankoperations.push(applyforcreaditcard);
// var students =[];

// function student(firstname,lastname,age){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.age=age;
//     this.greeting=function(){
//         return" hi my name is "+ this.firstname + "and i'm"+ this.age + " years old";
//     }
// }
// students.push(new student("jenny","lega",5));
// students.push(new student("timmy","turner",8));
// students.push(new student("carl","jta",4));
// // //not recommended but used to debuging the below for loop code called for in
// // var student=students[0];
// // for(var key in student){
// //     console.log(student[key]);
// // }

// // use this to display
//  for( var x=0; x < students.length ; x++){
//      var student=students[x];
//     console.log( student.greeting());
// }
    
// // var s1=new student("jenny","laga",5)
// // console.log(s1);
// // console.log(s1.greeting());
//  for( var x=0; x < students.length ; x++){
//         console.log( students[x]);}

var student0={
    firstname:" yjayne",
    lastname :"loo",
    age : 8,
   
    greeting:function(){
        return" hi my name is "+ this.firstname + "and i'm"+ this.age + " years old";
    }
};
console.log(student0.greeting());

 // to creat new objact
var student1 = new Object();
student1.firstname = "john";
student1.lastname = "parker";
student1.age= 7;


var student2 = {};
student2.firstname = "zeck";
student2.lastname = "bobo";
student2.age= 5;

 var students=[];
 students.push(student0);
 students.push(student1);
 students.push(student2);

for( var x=0; x < students.length ; x++){
       console.log( students[x]);
}
// console.log(student2.firstname);
// console.log(student2.lastname);
// console.log(student2["firstname"]);
// console.log(student2["lastname"]);

