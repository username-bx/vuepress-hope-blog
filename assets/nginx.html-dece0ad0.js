import{_ as l,o as i,c as t,e}from"./app-65608fb9.js";const n={},s=e('<h1 id="nginx-重启-linux-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#nginx-重启-linux-关闭防火墙" aria-hidden="true">#</a> nginx 重启 linux 关闭防火墙</h1><ol><li>查看进程号</li></ol><p>ps -ef|grep nginx</p><ol start="2"><li>杀死进程</li></ol><p>kill -QUIT 2072</p><ol start="3"><li>重启Nginx服务</li></ol><p>./nginx -s reload</p><ol start="4"><li>验证nginx配置文件是否正确</li></ol><p>./nginx -t</p><ol start="5"><li>查看防火状态</li></ol><p>systemctl status firewalld</p><ol start="6"><li>暂时关闭防火墙</li></ol><p>systemctl stop firewalld</p><ol start="7"><li>永久关闭防火墙</li></ol><p>systemctl disable firewalld</p>',15),o=[s];function a(r,c){return i(),t("div",null,o)}const d=l(n,[["render",a],["__file","nginx.html.vue"]]);export{d as default};