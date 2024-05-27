import{_ as n,o as s,c as a,e}from"./app-c26bd9fc.js";const t="/assets/post-5c3f33c6.png",p={},o=e(`<h1 id="debugger时-get-post请求的content-length" tabindex="-1"><a class="header-anchor" href="#debugger时-get-post请求的content-length" aria-hidden="true">#</a> debugger时,get post请求的content-length</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token constant">F12</span>
<span class="token number">2.</span> Network
<span class="token number">3.</span> 找到一个 post 请求
<span class="token number">4.</span> Headers
<span class="token number">5.</span> Request Headers
<span class="token number">6.</span> Content<span class="token operator">-</span>Length
<span class="token number">7.</span> 如果 content<span class="token operator">-</span>length 为 <span class="token number">0</span><span class="token punctuation">,</span> post 请求失败<span class="token punctuation">,</span> 代表传递数据是通过 param<span class="token punctuation">,</span> 不是在 body 里传的。



<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/getlist&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ！！！！！！！</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">saveList</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/saveList&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ！！！！！！！</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>',3),i=[o];function c(l,r){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","contentLengthInPost.html.vue"]]);export{d as default};
