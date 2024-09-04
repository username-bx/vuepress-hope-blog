import{_ as n,o as s,c as a,b as e}from"./app-00ed1d93.js";const t={},o=e(`<h1 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo" aria-hidden="true">#</a> mongo</h1><h2 id="_1-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-常用命令" aria-hidden="true">#</a> 1. 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>use <span class="token operator">&lt;</span>db_name<span class="token operator">&gt;</span>
use admin
use <span class="token builtin class-name">test</span>
use recodeDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.auth<span class="token punctuation">(</span><span class="token punctuation">)</span>
db.getUser<span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
db.getUsers<span class="token punctuation">(</span><span class="token punctuation">)</span>
db.updateUser<span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span>, <span class="token punctuation">{</span>pwd: <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function c(d,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","mongo.html.vue"]]);export{r as default};
