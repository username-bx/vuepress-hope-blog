function p(){document.addEventListener("touchmove",function(i){i.preventDefault()});const g=document.body,e=document.createElement("canvas");e.id="bgCanvas",e.style.zIndex="3",e.style.width="100vw",e.style.height="100vh",e.style.position="fixed",e.style.left="0",e.style.top="0",g.appendChild(e);let s=document.getElementById("bgCanvas"),t=s.getContext("2d"),d=window.devicePixelRatio||1,h=window.innerWidth,l=window.innerHeight,c=90,o,u=Math,a=0,y=u.PI*2,r=u.cos,f=u.random;s.width=h*d,s.height=l*d,t.scale(d,d),t.globalAlpha=.6;function x(){for(t.clearRect(0,0,h,l),o=[{x:0,y:l*.7+c},{x:0,y:l*.7-c}];o[1].x<h+c;)b(o[0],o[1])}function b(i,n){t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(n.x,n.y);let v=n.x+(f()*2-.25)*c,w=m(n.y);t.lineTo(v,w),t.closePath(),a-=y/-50,t.fillStyle="#"+(r(a)*127+128<<16|r(a+y/3)*127+128<<8|r(a+y/3*2)*127+128).toString(16),t.fill(),o[0]=o[1],o[1]={x:v,y:w}}function m(i){let n=i+(f()*2-1.1)*c;return n>l||n<0?m(i):n}document.onclick=x,document.ontouchstart=x,x()}export{p as default};
