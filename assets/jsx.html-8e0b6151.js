import{_ as n,o as s,c as a,b as p}from"./app-3acb1bab.js";const t={},e=p(`<h1 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> jsx</h1><h2 id="_1-jsx" tabindex="-1"><a class="header-anchor" href="#_1-jsx" aria-hidden="true">#</a> 1. jsx</h2><ol><li><p>jsx 本质是一个对象, 是一个 React.createElement 生成的对象.</p></li><li><p>表达式 需要加 ()</p></li><li><p>只有一个根节点</p></li><li><p>&lt;&gt;&lt;/&gt; 语法糖</p></li></ol><h2 id="_2-在-jsx-中写表达式" tabindex="-1"><a class="header-anchor" href="#_2-在-jsx-中写表达式" aria-hidden="true">#</a> 2. 在 jsx 中写表达式</h2><h3 id="_1-将表达式作为内容的一部分" tabindex="-1"><a class="header-anchor" href="#_1-将表达式作为内容的一部分" aria-hidden="true">#</a> 1. 将表达式作为内容的一部分</h3><ol><li>普通表达式</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>a<span class="token punctuation">}</span> <span class="token operator">*</span> <span class="token punctuation">{</span>b<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>a <span class="token operator">*</span> b<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>null、undefined、false不会显示</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token keyword">null</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token boolean">false</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token keyword">undefined</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* 0 会显示 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token number">0</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>普通对象 不能做为子元素</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* 报错 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>obj<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>可以放数组</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* ok */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>arr<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* 报错 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>arr1<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>可以放置React元素对象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> lis <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>item<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* 报错 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>lis<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-将表达式作为属性" tabindex="-1"><a class="header-anchor" href="#_2-将表达式作为属性" aria-hidden="true">#</a> 2. 将表达式作为属性</h3><ol start="6"><li>属性</li></ol><p>属性可以是正常的对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&quot;https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&amp;fm=27&amp;gp=0.jpg&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cls <span class="token operator">=</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span>cls<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&quot;200px&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>特殊字符 防止注入攻击</li></ol><ul><li>自动编码</li><li>dangerouslySetInnerHTML</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token string">&quot;&lt;h1&gt;标题&lt;/h1&gt;&lt;p&gt;小标题&lt;/p&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">__html</span><span class="token operator">:</span> content
    <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-元素的不可变性" tabindex="-1"><a class="header-anchor" href="#_3-元素的不可变性" aria-hidden="true">#</a> 3. 元素的不可变性</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div title<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>num<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Object.frez(obj)</span>

<span class="token comment">// div是一个react元素对象</span>
<span class="token comment">// 不能更改</span>
div<span class="token punctuation">.</span>props<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;newname&#39;</span>
<span class="token comment">// 不能更改</span>
div<span class="token punctuation">.</span>props<span class="token punctuation">.</span>childre <span class="token operator">=</span> <span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","jsx.html.vue"]]);export{u as default};
