// alert("Hello World!!");
console.log("コンソール出力TEST");
var a=100;
var b=200;
var c=0;
c=a+b;
console.log(c);
var num=[1, 2, 3];
console.log(num[0]);

if(a<b)
{
    console.log("bの方が大きい",a,b);
}
else
{
    conso.log("aの方が大きい");
}

func(1,2);
console.log(func2(2,3));
func3();

var f = func3;
f();

////////////////////////////////
// 関数
////////////////////////////////

function func(x,y)
{
    console.log(x+y);
}

function func2(x,y)
{
    return(x+y);
}

function func3()
{
    var x1=1;
    var y1=2;

    console.log("TEST");
    console.log(x1+y1);
}