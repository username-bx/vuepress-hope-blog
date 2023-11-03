import{_ as s,o as a,c as e,f as n}from"./app-131752ea.js";const i={},l=n(`<h1 id="ssh生成密钥-git使用ssh连接" tabindex="-1"><a class="header-anchor" href="#ssh生成密钥-git使用ssh连接" aria-hidden="true">#</a> SSH生成密钥,git使用ssh连接</h1><h3 id="打开git-bash" tabindex="-1"><a class="header-anchor" href="#打开git-bash" aria-hidden="true">#</a> 打开Git Bash</h3><p>切换路径到 c:/user/xxx/.ssh 下.<br> 打开 git bash here</p><h3 id="生成ssh密钥" tabindex="-1"><a class="header-anchor" href="#生成ssh密钥" aria-hidden="true">#</a> 生成ssh密钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span>

$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;bx.ma@gmail.com&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>按Enter接受默认文件位置</li><li>键入默认文件位置并将 id_ssh_keyname 替换为您的自定义密钥名称</li></ol><h3 id="ssh-agent-来管理密钥" tabindex="-1"><a class="header-anchor" href="#ssh-agent-来管理密钥" aria-hidden="true">#</a> ssh-agent 来管理密钥</h3><ol><li>启动 ssh-agent</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#start the ssh-agent in the background</span>

$ <span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span><span class="token punctuation">\\</span>
// 或者
$ ssh-agent <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加密钥到 ssh-agent</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$ ssh-add C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx/.ssh/id_ssh_xxx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加公钥到github" tabindex="-1"><a class="header-anchor" href="#添加公钥到github" aria-hidden="true">#</a> 添加公钥到github</h3><ol><li>&quot;setting&quot;</li><li>&quot;ssh and gpg keys&quot;</li><li>&quot;new ssh key&quot;</li><li>复制 pub 到 ssh</li></ol><h3 id="添加ssh-config" tabindex="-1"><a class="header-anchor" href="#添加ssh-config" aria-hidden="true">#</a> 添加ssh config</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ vim config
&quot;i&quot; 切换为输入模式
&quot;esc&quot; 切换为命令模式
&quot;:wq&quot; 命令模式下,保存退出

Host github.com
User username-bx
Hostname ssh.github.com
IdentityFile ~/.ssh/xxx
Port 443

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置git-config" tabindex="-1"><a class="header-anchor" href="#设置git-config" aria-hidden="true">#</a> 设置git config</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证连接" tabindex="-1"><a class="header-anchor" href="#验证连接" aria-hidden="true">#</a> 验证连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$ <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com

Hi username-bx<span class="token operator">!</span> You&#39;ve successfully authenticated, but GitHub does not provide shell access.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),d=[l];function t(r,c){return a(),e("div",null,d)}const u=s(i,[["render",t],["__file","ssh.html.vue"]]);export{u as default};
