// var a =10;
// var b =25;

// document.write("Addition is :",a+b);
// document.write("<br> Subtraction is :",a-b);
// document.write("<br>Division is :",a/b);
// document.write("<br>Modulus is :",a%b);
// document.write("<br>Multiplication is :",a*b);
// document.write("<br>Increment is :",a++);
// document.write("<br> Dercrement is :",a--);

// // logical
// let a = true;
// let b = false;

// console.log(a && b);
// console.log(a||b);
// console.log(!a);
// console.log(!b);

// let age = 20;

// let canVote = (age>=18)?"YES,you can vote":"NO, you cannot vote";
// console.log(canVote);


// //Conditional Statements

// let clname ="III B.Tech CSE A2";
// let cr ="trisha";
// let game="ThrowBall";

// if(clname=="III B.Tech CSE A2")
// {
//     document.write("CR of the class is:",cr);
// }
// if(game=="ThrowBall")
// {
//     document.write("<br> Captain of the team is tulasi");

// }
// else
// {
//     document.write("Inavlid Input");
// }



//switch Statements

switch(true)
{
    case 10>20:
        myAnswer = "red color";
        break;
    case 20 < 30:
        myAnswer = "green color";
        break;
    case 50>20:
        myAnswer = "black color";
        break;
    case 100==200:
        myAnswer = "orange color";
        break;
    default:
        myAnswer = "None Of The Above";
        break;
     
}
document.write(myAnswer);