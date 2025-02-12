// var 
function varExample()
{
    var x = 10;
    console.log(x);//10
    if(true)
    {
        var x =20//redeclared inside block
        console.log(x);//20
    }
    console.log(x);//20
}
varExample();

//let

function letExample()
{
    let y =30;
    console.log(y);
    if(true)
    {
        let y = 40;//new vatiable inside block
        console.log(y)//40
    }
    console.log(y);//30
}
letExample();

//const

function constExample()
{
    const z = 50;
    console.log(z);
    if(true)
    {
        const z = 70;
        console.log(z);
    }
    console.log(z);
}
constExample();