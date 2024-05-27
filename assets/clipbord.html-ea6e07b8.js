import{_ as n,o as s,c as a,e as p}from"./app-46a07672.js";const e={},t=p(`<h1 id="vue3中-实现复制到剪切板功能" tabindex="-1"><a class="header-anchor" href="#vue3中-实现复制到剪切板功能" aria-hidden="true">#</a> vue3中 实现复制到剪切板功能</h1><h2 id="_1-vue-clipbord3" tabindex="-1"><a class="header-anchor" href="#_1-vue-clipbord3" aria-hidden="true">#</a> 1. vue-clipbord3</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> vue-clipboard3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> useClipboard <span class="token keyword">from</span> <span class="token string">&#39;vue-clipboard3&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> toClipboard <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token function">toClipboard</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>




<span class="token keyword">const</span> <span class="token function-variable function">handleClickCopyApp</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Copied to clipboard&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">toClipboard</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Copied to clipboard&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;复制成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;复制失败&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-vue-use" tabindex="-1"><a class="header-anchor" href="#_2-vue-use" aria-hidden="true">#</a> 2. vue-use</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
// package.json

<span class="token string">&quot;@vueuse/core&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^10.9.0&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useClipboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> copy<span class="token punctuation">,</span> isSupported <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useClipboard</span><span class="token punctuation">(</span><span class="token punctuation">{</span> source <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token function">copy</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleClickCopyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Copied to clipboard&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">copy</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Copied to clipboard&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;复制成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;复制失败&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","clipbord.html.vue"]]);export{d as default};
