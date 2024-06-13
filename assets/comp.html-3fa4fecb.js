import{_ as n,o as s,c as a,e as p}from"./app-a747b37e.js";const e={},t=p(`<h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><h2 id="_1-组件" tabindex="-1"><a class="header-anchor" href="#_1-组件" aria-hidden="true">#</a> 1. 组件</h2><p>组件是 ui 单元 (内容、样式和功能)</p><h2 id="_2-创建组件" tabindex="-1"><a class="header-anchor" href="#_2-创建组件" aria-hidden="true">#</a> 2. 创建组件</h2><ol><li><p>函数组件</p></li><li><p>函数名用于组建虚拟 dom 树.可以是匿名函数,dom 树的节点为unknow</p></li><li><p><strong>函数名必须是大驼峰</strong> (本质是更改 React 元素对象的 type 如果是小写，认为是一个普通的react元素，而不是react组件)</p></li><li><p>返回一个 React 元素对象</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// import React form &#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">MyFuncComp</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>函数组件<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>类组件</p></li><li><p>必须继承 React.Component</p></li><li><p>必须有render函数 返回一个 React 元素对象</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// import React form &#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">MyFuncComp</span> extend React<span class="token punctuation">.</span><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>类组件<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// import React, { Component } form &#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">MyClassComp</span> extend <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>类组件<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-组件的使用" tabindex="-1"><a class="header-anchor" href="#_3-组件的使用" aria-hidden="true">#</a> 3. 组件的使用</h2><ol><li>函数执行的方式</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> MyFuncComp form <span class="token string">&#39;./MyFuncComp&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span><span class="token function">MyFuncComp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>表达式</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> MyFuncComp form <span class="token string">&#39;./MyFuncComp&#39;</span>

<span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token function">MyFuncComp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// const comp = &lt;MyFuncComp /&gt;</span>

<span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>comp<span class="token punctuation">)</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>作为组件使用，会组建dom树，节点名称为函数名，本质是更改 React 元素对象的 type</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> MyFuncComp form <span class="token string">&#39;./MyFuncComp&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>MyFuncComp <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-组件的属性" tabindex="-1"><a class="header-anchor" href="#_4-组件的属性" aria-hidden="true">#</a> 4. 组件的属性</h2><ol><li>对于函数组件，属性会作为一个对象的属性，传递给函数的参数</li><li>对于类组件，属性会作为一个对象的属性，传递给构造函数(constructor)的参数</li></ol><p>注意：组件的属性，应该使用小驼峰命名法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// MyFuncComp.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyFuncComp</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return &lt;h1&gt;函数组件的内容&lt;/h1&gt;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>函数组件，目前的数字：<span class="token punctuation">{</span>props<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// App.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MyFuncComp number<span class="token operator">=</span><span class="token string">&quot;2&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MyFuncComp number<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MyFuncComp number<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// MyClassComp.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyClassComp</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>

    <span class="token comment">// constructor(props) {</span>
    <span class="token comment">//     super(props); // this.props = props;</span>
    <span class="token comment">//     console.log(props, this.props, props === this.props);</span>
    <span class="token comment">// }</span>

    <span class="token doc-comment comment">/**
     * 该方法必须返回React元素
     */</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
                        姓名：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
                        年龄：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>ui<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>下面是传入的内容<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>ui<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>类组件的内容，数字：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">// App.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MyFuncComp number<span class="token operator">=</span><span class="token string">&quot;2&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MyFuncComp obj<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MyFuncComp ui<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>xxxx<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-组件中的数据" tabindex="-1"><a class="header-anchor" href="#_5-组件中的数据" aria-hidden="true">#</a> 5. 组件中的数据</h2><p>数据属于谁(哪个组件)，(那个组件)谁有权利可以更改。</p>`,24),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","comp.html.vue"]]);export{u as default};
