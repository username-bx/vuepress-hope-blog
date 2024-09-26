const t=JSON.parse('{"key":"v-64c8be1e","path":"/posts/software/table.html","title":"table scroll","lang":"zh-CN","frontmatter":{"title":"table scroll","shortTitle":"table scroll","icon":"pen-to-square","date":"2024-09-19T00:00:00.000Z","order":26,"tag":["table scroll"],"auther":"Tang Yuan","head":[["meta",{"name":"keywords","content":"table scroll"}],["meta",{"property":"og:url","content":"http://luogesidoc.com/posts/software/table.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"table scroll"}],["meta",{"property":"og:description","content":"table 滚动, 固定表头，tbody 滚动 在实际开发中，我们经常需要处理大量数据的表格，而且通常需要固定表头，只让表格内容部分滚动。以下是一个实现这种效果的 HTML 和 CSS 示例： &lt;table class=\\"w-full\\"&gt; &lt;thead&gt; &lt;tr&gt; &lt;th class=\\"w-24 min-w-24\\"&gt;Name&lt;/th&gt; &lt;th class=\\"w-auto\\"&gt;Age&lt;/th&gt; &lt;th class=\\"w-auto\\"&gt;Gender&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody class=\\"w-full block lg:h-[50dvh] overflow-y-auto h-[300px]\\"&gt; &lt;tr class=\\"w-full table\\"&gt; &lt;td class=\\"w-24 min-w-24\\"&gt;John Doe&lt;/td&gt; &lt;td class=\\"w-auto\\"&gt;30&lt;/td&gt; &lt;td class=\\"w-auto\\"&gt;Male&lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-26T08:29:48.000Z"}],["meta",{"property":"article:author","content":"tangyuan"}],["meta",{"property":"article:tag","content":"table scroll"}],["meta",{"property":"article:published_time","content":"2024-09-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-26T08:29:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"table scroll\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-26T08:29:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tangyuan\\",\\"url\\":\\"http://luogesidoc.com\\"}]}"]],"description":"table 滚动, 固定表头，tbody 滚动 在实际开发中，我们经常需要处理大量数据的表格，而且通常需要固定表头，只让表格内容部分滚动。以下是一个实现这种效果的 HTML 和 CSS 示例： &lt;table class=\\"w-full\\"&gt; &lt;thead&gt; &lt;tr&gt; &lt;th class=\\"w-24 min-w-24\\"&gt;Name&lt;/th&gt; &lt;th class=\\"w-auto\\"&gt;Age&lt;/th&gt; &lt;th class=\\"w-auto\\"&gt;Gender&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody class=\\"w-full block lg:h-[50dvh] overflow-y-auto h-[300px]\\"&gt; &lt;tr class=\\"w-full table\\"&gt; &lt;td class=\\"w-24 min-w-24\\"&gt;John Doe&lt;/td&gt; &lt;td class=\\"w-auto\\"&gt;30&lt;/td&gt; &lt;td class=\\"w-auto\\"&gt;Male&lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt;"},"headers":[{"level":2,"title":"1.","slug":"_1","link":"#_1","children":[]},{"level":2,"title":"2.","slug":"_2","link":"#_2","children":[]},{"level":2,"title":"3.","slug":"_3","link":"#_3","children":[]}],"git":{"createdTime":1727339388000,"updatedTime":1727339388000,"contributors":[{"name":"benjaminAltman","email":"benjamin@altman.com","commits":1}]},"readingTime":{"minutes":1,"words":299},"filePathRelative":"posts/software/table.md","localizedDate":"2024年9月19日","excerpt":"<h1> table 滚动, 固定表头，tbody 滚动</h1>\\n<p>在实际开发中，我们经常需要处理大量数据的表格，而且通常需要固定表头，只让表格内容部分滚动。以下是一个实现这种效果的 HTML 和 CSS 示例：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>table</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-full<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>thead</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>tr</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>th</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-24 min-w-24<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>Name<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>th</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>th</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-auto<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>Age<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>th</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>th</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-auto<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>Gender<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>th</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>tr</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>thead</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>tbody</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-full block lg:h-[50dvh] overflow-y-auto h-[300px]<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>tr</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-full table<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>td</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-24 min-w-24<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>John Doe<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>td</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>td</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-auto<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>30<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>td</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>td</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>w-auto<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>Male<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>td</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>tr</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>tbody</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>table</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
