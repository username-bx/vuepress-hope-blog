import{_ as n,o as a,c as s,e}from"./app-15de045c.js";const i={},d=e(`<h1 id="liunx-常用的部分指令" tabindex="-1"><a class="header-anchor" href="#liunx-常用的部分指令" aria-hidden="true">#</a> liunx 常用的部分指令</h1><h2 id="_1-修改linux-root-密码" tabindex="-1"><a class="header-anchor" href="#_1-修改linux-root-密码" aria-hidden="true">#</a> 1. 修改linux root 密码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[d];function c(r,t){return a(),s("div",null,l)}const o=n(i,[["render",c],["__file","liunx.html.vue"]]);export{o as default};
