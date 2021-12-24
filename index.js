// document.addEventListener('keypress',(event)=>
// {
//   alert(event.key);
// });
// let r1=localStorage.setItem("rod-A")?JSON.parse(localStorage.getItem("rod-A")):0;
// let r2=localStorage.setItem("rod-B")?JSON.parse(localStorage.getItem("rod-B")):0;
let r3=localStorage.getItem("highest")?JSON.parse(localStorage.getItem("highest")):0;
localStorage.setItem("rod-A",0);
localStorage.setItem("rod-B",0);
var pos=document.querySelector('.rod');
var pos1=document.querySelector('.rod1');
var pos2=document.querySelector('.rod2');
var canvas=document.getElementById('game');
// var rod=document.querySelector('.rod');
// var rw=r.width.

var canw=canvas.width;
var canh=canvas.height;

pos1.style.left=canw/2 + "px";
pos2.style.left=canw/2 + "px";
// setInterval(()=>
// {
//   alert(pos1.style.left);
// },1000);

  document.addEventListener('keypress',(e)=>
{
  if(e.key=='a')
  {
    // alert("aman");
    if( parseInt(pos1.style.left)>=0)
    {
      // alert(pos1.style.left)
      pos1.style.left = parseInt(pos1.style.left) - 10 + "px";
      pos2.style.left = parseInt(pos2.style.left) - 10 + "px";
    }


  }
  else if(e.key=='d')
  {
    if( parseInt(pos1.style.left)<canw-100)
    {
      pos1.style.left = parseInt(pos1.style.left) + 10 + "px";
      pos2.style.left = parseInt(pos2.style.left) + 10 + "px";
    }


  }
});

var bx,by,vx,vy;
bx=canw/2;
by=canh/2;
bs=30;
const fps=30;
var context=canvas.getContext('2d');


// context.fillStyle="yellow";
// context.stroke();
document.addEventListener('keypress',(e)=>
{
  if(e.keyCode==13)
  {
    setInterval(update,1000/fps);
    vx=Math.floor(Math.random() * 75 + 100)/fps;
    vy=Math.floor(Math.random() * 75 + 100)/fps;
    if(Math.floor(Math.random()*2)==0)
    vx=0-vx;
    if(Math.floor(Math.random()*2)==0)
    vy=0-vy;

    function update()
    {
      let temp=parseInt(pos1.style.left);
      let ch=by;
      let temp1=parseInt(pos1.style.left),ch1=by;
      if(bx<=0 && vx<0)
      vx=0-vx;

      if(bx>=canw-bs && vx>0)
      vx=0-vx;
       if(temp < bx && temp + 90 > bx &&((ch>625 && ch<canh) || (ch>0 && ch<48)) )
       {
         if(ch<=48 && vy<0)
         {
           var r1=parseInt(localStorage.getItem("rod-A"));
           r1+=1;
           localStorage.setItem("rod-A",r1);
            vy=0-vy;
         }

         if(ch>=625 && vy>0)
         {
           var r1=parseInt(localStorage.getItem("rod-B"));
           r2+=1;
           localStorage.setItem("rod-B",r1);
            vy=0-vy;
         }

       }
       else if((temp > bx || temp + 90 < bx) && (ch>=canh || ch<=0))
       {
         var r1=parseInt(localStorage.getItem("rod-A"));
         var r2=parseInt(localStorage.getItem("rod-B"));
         // var r3=parseInt(localStorage.getItem("highest"));
         r3=Math.max(r3,Math.max(r1,r2));
         localStorage.setItem("highest",r3);
         alert("highest Score is-->"+r3);
           location.reload(true);
       }

      // alert(pos1.style.left + "---" + by);
      // if()
      // {
      //
      // }


    bx += vx;
    by += vy
    context.fillStyle="black";
    context.fillRect(0,0,canw,canh);
    context.fillStyle="yellow";
    context.fillRect(bx,by,bs,bs);


      // alert(vx);

    }
  }

});
