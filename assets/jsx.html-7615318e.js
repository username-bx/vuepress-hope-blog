const t=JSON.parse('{"key":"v-383906af","path":"/posts/react/jsx.html","title":"jsx","lang":"zh-CN","frontmatter":{"title":"jsx","shortTitle":"react jsx","image":"/assets/images/navicat.png","icon":"pen-to-square","date":"2024-05-25T00:00:00.000Z","order":4,"tag":["react jsx"],"auther":"Tang Yuan","head":[["meta",{"name":"keywords","content":"react jsx"}],["meta",{"property":"og:url","content":"http://luogesidoc.com/posts/react/jsx.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"jsx"}],["meta",{"property":"og:description","content":"jsx 1. jsx jsx 本质是一个对象, 是一个 React.createElement 生成的对象. 表达式 需要加 () 只有一个根节点 &lt;&gt;&lt;/&gt; 语法糖 2. 在 jsx 中写表达式 1. 将表达式作为内容的一部分 普通表达式 const a = 1 const b = 2 const div = ( &lt;div&gt; {a} * {b} = {a * b} &lt;/div&gt; )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T14:20:12.000Z"}],["meta",{"property":"article:author","content":"tangyuan"}],["meta",{"property":"article:tag","content":"react jsx"}],["meta",{"property":"article:published_time","content":"2024-05-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-27T14:20:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jsx\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-27T14:20:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tangyuan\\",\\"url\\":\\"http://luogesidoc.com\\"}]}"]],"description":"jsx 1. jsx jsx 本质是一个对象, 是一个 React.createElement 生成的对象. 表达式 需要加 () 只有一个根节点 &lt;&gt;&lt;/&gt; 语法糖 2. 在 jsx 中写表达式 1. 将表达式作为内容的一部分 普通表达式 const a = 1 const b = 2 const div = ( &lt;div&gt; {a} * {b} = {a * b} &lt;/div&gt; )"},"headers":[{"level":2,"title":"1. jsx","slug":"_1-jsx","link":"#_1-jsx","children":[]},{"level":2,"title":"2. 在 jsx 中写表达式","slug":"_2-在-jsx-中写表达式","link":"#_2-在-jsx-中写表达式","children":[{"level":3,"title":"1. 将表达式作为内容的一部分","slug":"_1-将表达式作为内容的一部分","link":"#_1-将表达式作为内容的一部分","children":[]},{"level":3,"title":"2. 将表达式作为属性","slug":"_2-将表达式作为属性","link":"#_2-将表达式作为属性","children":[]}]},{"level":2,"title":"3. 元素的不可变性","slug":"_3-元素的不可变性","link":"#_3-元素的不可变性","children":[]}],"git":{"createdTime":1716764474000,"updatedTime":1716819612000,"contributors":[{"name":"bx.ma","email":"bx.ma@gmail.com","commits":2}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"posts/react/jsx.md","localizedDate":"2024年5月25日","excerpt":"<h1> jsx</h1>\\n<h2> 1. jsx</h2>\\n<ol>\\n<li>\\n<p>jsx 本质是一个对象, 是一个 React.createElement 生成的对象.</p>\\n</li>\\n<li>\\n<p>表达式 需要加 ()</p>\\n</li>\\n<li>\\n<p>只有一个根节点</p>\\n</li>\\n<li>\\n<p>&lt;&gt;&lt;/&gt; 语法糖</p>\\n</li>\\n</ol>\\n<h2> 2. 在 jsx 中写表达式</h2>\\n<h3> 1. 将表达式作为内容的一部分</h3>\\n<ol>\\n<li>普通表达式</li>\\n</ol>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>\\n<span class=\\"token keyword\\">const</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\n<span class=\\"token keyword\\">const</span> b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span>\\n\\n<span class=\\"token keyword\\">const</span> div <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token operator\\">&lt;</span>div<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token punctuation\\">{</span>a<span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">*</span> <span class=\\"token punctuation\\">{</span>b<span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>a <span class=\\"token operator\\">*</span> b<span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>div<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
