import{_ as n,o as a,c as s,e}from"./app-f271b42a.js";const t={},c=e(`<h1 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h1><h2 id="_1-使用官方脚手架搭建" tabindex="-1"><a class="header-anchor" href="#_1-使用官方脚手架搭建" aria-hidden="true">#</a> 1. 使用官方脚手架搭建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
npx create-react-app xxxxx
<span class="token builtin class-name">cd</span> xxxxx
<span class="token function">npm</span> start


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-index-js" tabindex="-1"><a class="header-anchor" href="#_2-index-js" aria-hidden="true">#</a> 2. index.js</h2><p>凡是使用JSX的文件，必须导入React</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello World <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>span元素<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[c];function p(i,r){return a(),s("div",null,o)}const d=n(t,[["render",p],["__file","env.html.vue"]]);export{d as default};
