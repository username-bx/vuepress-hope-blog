import{_ as s,o as n,c as e,b as a}from"./app-3acb1bab.js";const i={},l=a(`<h1 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Users/benjaminma/Documents/vuepress-hope-blog/*

<span class="token function">cp</span> <span class="token parameter variable">-a</span> /Users/benjaminma/Documents/vuepress-hope-blog-source/src/.vuepress/dist/ /Users/benjaminma/Documents/vuepress-hope-blog/

<span class="token function">git</span> status

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;&#39;</span>

<span class="token function">git</span> push

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">cp</span> <span class="token parameter variable">-a</span> ~/Documents/vuepress-hope-blog-source/src/.vuepress/dist/ ~/Documents/vuepress-hope-blog/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function d(r,t){return n(),e("div",null,c)}const u=s(i,[["render",d],["__file","buildAndCopy.html.vue"]]);export{u as default};
