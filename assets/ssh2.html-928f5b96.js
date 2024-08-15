import{_ as s,o as e,c as i,e as a}from"./app-f271b42a.js";const n={},l=a(`<h1 id="使用ssh同时连接gitlab-github" tabindex="-1"><a class="header-anchor" href="#使用ssh同时连接gitlab-github" aria-hidden="true">#</a> 使用ssh同时连接gitlab github</h1><ol><li><p>打开文件夹 c:/user/xxx/.ssh</p></li><li><p>右键 git bash here</p></li><li><p>生成ssh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;bx.ma@gmail.com&quot;</span>
// 输入名称 id_ssh_gitlab
$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;bx.ma@gmail.com&quot;</span>
// 输入名称 id_ssh_github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动ssh-agent</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-agent <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加ssh到ssh-agent</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-add c:/user/xxx/.ssh/id_ssh_gitlab
$ ssh-add c:/user/xxx/.ssh/id_ssh_github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加config文件</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Host gitlab.com
Hostname 192.168.1.178
Port 8088
IdentityFile ~/.ssh/id_ssh_github 

Host github.com
Hostname ssh.github.com
Username xxx
IdentityFile ~/.ssh/id_ssh_github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>测试连接</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh -T git@github.com
ssh -T git@gitee.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[l];function t(r,c){return e(),i("div",null,d)}const h=s(n,[["render",t],["__file","ssh2.html.vue"]]);export{h as default};
