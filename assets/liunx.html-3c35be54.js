import{_ as n,o as a,c as e,f as s}from"./app-48ed2f42.js";const i={},d=s(`<h1 id="liunx-常用的部分指令" tabindex="-1"><a class="header-anchor" href="#liunx-常用的部分指令" aria-hidden="true">#</a> liunx 常用的部分指令</h1><h2 id="_1-修改linux-root-密码" tabindex="-1"><a class="header-anchor" href="#_1-修改linux-root-密码" aria-hidden="true">#</a> 1. 修改linux root 密码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

<span class="token function">sudo</span> <span class="token function">passwd</span> root


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nginx相关命令" tabindex="-1"><a class="header-anchor" href="#_2-nginx相关命令" aria-hidden="true">#</a> 2. nginx相关命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">whereis</span> nginx


<span class="token builtin class-name">cd</span> /usr/local/nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用wget下载github" tabindex="-1"><a class="header-anchor" href="#_3-使用wget下载github" aria-hidden="true">#</a> 3. 使用wget下载github</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

<span class="token function">wget</span> https://github.com/xxxxx/xxx/xxxx.zip


// 如果是404
// <span class="token number">1</span>. 检查链接能否正常访问
// <span class="token number">2</span>. 检查链接是不是直接进去下载


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-解压" tabindex="-1"><a class="header-anchor" href="#_4-解压" aria-hidden="true">#</a> 4. 解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">unzip</span> <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>目录名<span class="token punctuation">]</span> <span class="token punctuation">[</span>压缩包名<span class="token punctuation">]</span>


// 不提示,直接覆盖重名文件
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>目录名<span class="token punctuation">]</span> <span class="token punctuation">[</span>压缩包名<span class="token punctuation">]</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-上传本地文件到服务器" tabindex="-1"><a class="header-anchor" href="#_5-上传本地文件到服务器" aria-hidden="true">#</a> 5. 上传本地文件到服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">scp</span> /path/index.html root@142.141.1.31:/usr/local/nginx/html/ 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-从服务器上下载文件" tabindex="-1"><a class="header-anchor" href="#_6-从服务器上下载文件" aria-hidden="true">#</a> 6. 从服务器上下载文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">scp</span> root@142.141.1.31:/usr/local/nginx/html/index.html ~/Document/ 本地目录


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-上传本地文件到服务器" tabindex="-1"><a class="header-anchor" href="#_7-上传本地文件到服务器" aria-hidden="true">#</a> 7. 上传本地文件到服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">scp</span>  <span class="token parameter variable">-r</span> local_dir root@142.141.1.31:/usr/local/nginx/html/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-从服务器下载整个目录" tabindex="-1"><a class="header-anchor" href="#_8-从服务器下载整个目录" aria-hidden="true">#</a> 8. 从服务器下载整个目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

<span class="token function">scp</span> <span class="token parameter variable">-r</span> root@142.141.1.31:/usr/local/nginx/html/ ~/Document/ 本地目录


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[d];function r(c,u){return a(),e("div",null,l)}const v=n(i,[["render",r],["__file","liunx.html.vue"]]);export{v as default};
