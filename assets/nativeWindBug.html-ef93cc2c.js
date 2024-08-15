import{_ as n,o as s,c as a,e as t}from"./app-f271b42a.js";const e="/assets/rn_nativeWind-9da5eda6.png",p={},o=t('<h1 id="nativewind-bug-the-web-platform-does-not-word-on-windows" tabindex="-1"><a class="header-anchor" href="#nativewind-bug-the-web-platform-does-not-word-on-windows" aria-hidden="true">#</a> [NativeWind Bug] The web platform does not word on windows</h1><h2 id="_1-bug-description" tabindex="-1"><a class="header-anchor" href="#_1-bug-description" aria-hidden="true">#</a> 1. bug description</h2><p>No error message or anything, the terminal just freezes. I have tried with both npm and yarn. At least in my case, the issue is only on Windows 10. I have tried on macOS and everything works fine.</p><p>编译过程中，没有报错信息，卸载 node module, 用 npm yarn bun 下载包，都一样的结果, 编译不过去，也不报错。<br> 只有 windows 出现这个情况，macOS 一切正常。</p><figure><img src="'+e+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="_2-fix-bug" tabindex="-1"><a class="header-anchor" href="#_2-fix-bug" aria-hidden="true">#</a> 2. fix bug</h2><h3 id="_1-package-json" tabindex="-1"><a class="header-anchor" href="#_1-package-json" aria-hidden="true">#</a> 1. package.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node fix.js &amp;&amp; expo start&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-新建一个文件-fix-js-放在根目录" tabindex="-1"><a class="header-anchor" href="#_2-新建一个文件-fix-js-放在根目录" aria-hidden="true">#</a> 2. 新建一个文件 fix.js 放在根目录</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// fix.js</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nativewind&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;metro&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;transformer.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> issue <span class="token operator">=</span> <span class="token string">&quot;\`require(&#39;\${config.nativewind.output}&#39;);\`&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>content<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>issue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;NativeWind fix already applied!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> fix <span class="token operator">=</span> <span class="token string">&quot;\`require(&#39;\${config.nativewind.output.replace(/\\\\\\\\/g, &#39;\\\\\\\\\\\\\\\\&#39;)}&#39;);\`&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>issue<span class="token punctuation">,</span> fix<span class="token punctuation">)</span><span class="token punctuation">;</span>

  fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;NativeWind fix applied successfully!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[o];function c(u,l){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","nativeWindBug.html.vue"]]);export{d as default};