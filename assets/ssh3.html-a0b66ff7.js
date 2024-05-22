import{_ as s,o as n,c as a,e as i}from"./app-84b17e71.js";const e={},l=i(`<h1 id="linux使用ssh连接github" tabindex="-1"><a class="header-anchor" href="#linux使用ssh连接github" aria-hidden="true">#</a> linux使用ssh连接github</h1><ol><li>切换路径到 .ssh</li><li>使用 ssh 生成密钥</li><li>新建一个 config 文件</li><li>打开 ssh 代理</li><li>添加新的密钥到 ssh 代理</li><li>添加密钥到 github</li><li>测试 github 连接</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 切换路径到 .ssh</span>
$ <span class="token builtin class-name">cd</span> ~/.ssh
<span class="token comment"># 2. 使用 ssh 生成密钥</span>
$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;bx.ma@gmail.com&quot;</span>
<span class="token comment"># 3. 新建一个 config 文件 (&quot;i&quot; 输入, &quot;Esc&quot; 命令, &quot;:wq&quot; 保存退出)</span>
$ <span class="token function">vi</span> config 
<span class="token comment"># 4. 打开 ssh 代理</span>
$ ssh-agent <span class="token function">bash</span>
<span class="token comment"># 5. 添加新的密钥到 ssh 代理</span>
$ ssh-add ./github
<span class="token comment"># 6. 添加密钥到 github</span>
<span class="token comment"># 7. 测试 github 连接</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com

<span class="token comment"># 安装 git</span>
$ yum <span class="token function">install</span> <span class="token function">git</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function c(o,d){return n(),a("div",null,t)}const m=s(e,[["render",c],["__file","ssh3.html.vue"]]);export{m as default};
