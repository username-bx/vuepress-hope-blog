import{_ as n,o as s,c as e,e as a}from"./app-65608fb9.js";const i={},t=a(`<h1 id="vscode使用snippets设置代码块" tabindex="-1"><a class="header-anchor" href="#vscode使用snippets设置代码块" aria-hidden="true">#</a> VSCode使用Snippets设置代码块</h1><h2 id="_1-如何设置" tabindex="-1"><a class="header-anchor" href="#_1-如何设置" aria-hidden="true">#</a> 1. 如何设置</h2><p>Windows: 文件(file) &gt; 首选项(preferences) &gt; 用户代码片段(configure user snippets)</p><p>Mac: Code &gt; 首选项 &gt; 用户片段</p><p>VSCode Command</p><h2 id="_2-全局设置或对应语言设置" tabindex="-1"><a class="header-anchor" href="#_2-全局设置或对应语言设置" aria-hidden="true">#</a> 2. 全局设置或对应语言设置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">1</span>. Ctrl + Shift + p

<span class="token number">2</span>. Configure User Snippets

// 全局文件
<span class="token number">3</span>. Global Snippets
// 对应语言
<span class="token number">3</span>. js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-snippet-语法" tabindex="-1"><a class="header-anchor" href="#_3-snippet-语法" aria-hidden="true">#</a> 3. Snippet 语法</h2><h3 id="_1-占位符" tabindex="-1"><a class="header-anchor" href="#_1-占位符" aria-hidden="true">#</a> 1. 占位符 $</h3><p>光标会默认落到 $1 的位置<br> 按 TAB, 光标会默认落到 $2 的位置</p><h3 id="_2-占位内容的可选项" tabindex="-1"><a class="header-anchor" href="#_2-占位内容的可选项" aria-hidden="true">#</a> 2. 占位内容的可选项</h3><p>\${1|a,b,c}，括号中的 1 对应的是按 TAB 之后的光标落点顺序， abc 为可选的项，用逗号隔开。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token property">&quot;方法注释&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zs-Function&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @description description...&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @param { \${1|Boolean,Number,String,Object,Array,*|} } name description...&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @return { \${2|Boolean,Number,String,Object,Array,*|} } description...&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; */&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;$0&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;添加方法注释&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-变量" tabindex="-1"><a class="header-anchor" href="#_3-变量" aria-hidden="true">#</a> 3. 变量</h3><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>
TM_SELECTED_TEXT  当前选定的文本或空字符串
CLIPBOARD 剪贴板的内容




{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	&quot;Benjamin Print to console&quot;: {
		&quot;prefix&quot;: &quot;clg&quot;,
		&quot;body&quot;: [
			&quot;console.log(&#39;----\${CURRENT_MONTH_NAME}_\${CURRENT_DATE}_\${CURRENT_HOUR}:\${CURRENT_MINUTE} \${CLIPBOARD}----&#39;, $1);&quot;
		],
		&quot;description&quot;: &quot;Benjamin Log output to console&quot;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[t];function r(l,o){return s(),e("div",null,d)}const p=n(i,[["render",r],["__file","snippets.html.vue"]]);export{p as default};
