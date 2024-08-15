import{_ as n,o as s,c as a,e as t}from"./app-f271b42a.js";const e={},p=t(`<h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h1><h2 id="_1-react-元素" tabindex="-1"><a class="header-anchor" href="#_1-react-元素" aria-hidden="true">#</a> 1. react 元素</h2><h2 id="_2-自定义-react-元素" tabindex="-1"><a class="header-anchor" href="#_2-自定义-react-元素" aria-hidden="true">#</a> 2. 自定义 react 元素</h2><ol><li>在React中，组件的事件，本质上就是一个属性</li></ol><p>按照之前React对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法</p><p><strong>如果没有特殊处理，在事件处理函数中，this指向undefined</strong></p><ol><li>使用bind函数，绑定this</li><li>使用箭头函数</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> Tick <span class="token keyword">from</span> <span class="token string">&quot;./Tick&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TickControl</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isOver</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//倒计时是否完成</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// constructor(props){</span>
    <span class="token comment">//     super(props);</span>
    <span class="token comment">//     this.handleClick = this.handleClick.bind(this);</span>
    <span class="token comment">//     this.handleOver = this.handleOver.bind(this);</span>
    <span class="token comment">// }</span>

    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击了&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">handleOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">isOver</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> status <span class="token operator">=</span> <span class="token string">&quot;正在倒计时&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isOver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            status <span class="token operator">=</span> <span class="token string">&quot;倒计时完成&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Tick
                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    onOver<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    number<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>status<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> Tick <span class="token keyword">from</span> <span class="token string">&quot;./Tick&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TickControl</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isOver</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//倒计时是否完成</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 结果：handleClick不在原型上，而在对象上</span>
    <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击了&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">handleOver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">isOver</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> status <span class="token operator">=</span> <span class="token string">&quot;正在倒计时&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isOver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            status <span class="token operator">=</span> <span class="token string">&quot;倒计时完成&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Tick
                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span>
                    onOver<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span>
                    number<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>status<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","event.html.vue"]]);export{r as default};
