const n=JSON.parse('{"key":"v-04aa7088","path":"/posts/software/UtilMethods.html","title":"工具方法","lang":"zh-CN","frontmatter":{"title":"工具方法","shortTitle":"util method","image":"/assets/images/navicat.png","icon":"folder-open","date":"2024-06-14T00:00:00.000Z","order":1,"tag":["util method"],"auther":"Tang Yuan","head":[["meta",{"name":"keywords","content":"util method"}],["meta",{"property":"og:url","content":"http://luogesidoc.com/posts/software/UtilMethods.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"工具方法"}],["meta",{"property":"og:description","content":"工具方法 const requsetData = [ { type: \\"1\\", min: 1, max: 10 }, { type: \\"2\\", min: 1, max: 10 }, { type: \\"3\\", min: 1, max: 10 }, { type: \\"14\\", min: 1, max: 10 }, { type: \\"15\\", min: 1, max: 10 }, { type: \\"16\\", min: 1, max: 10 }, { type: \\"77\\", min: 1, max: 10 }, { type: \\"88\\", min: 1, max: 10 }, { type: \\"99\\", min: 1, max: 10 }, ]; const dic = [ { value: 1, text: \\"AAAAA\\", remarks: \\"group1\\", sortOrder: 1 }, { value: 2, text: \\"BBBBB\\", remarks: \\"group1\\", sortOrder: 2 }, { value: 3, text: \\"BBBBB\\", remarks: \\"group1\\", sortOrder: 3 }, { value: 14, text: \\"aaaa\\", remarks: \\"group2\\", sortOrder: 4 }, { value: 15, text: \\"bbbb\\", remarks: \\"group2\\", sortOrder: 5 }, { value: 16, text: \\"cccc\\", remarks: \\"group2\\", sortOrder: 6 }, { value: 77, text: \\"1111\\", remarks: \\"group3\\", sortOrder: 7 }, { value: 88, text: \\"2222\\", remarks: \\"group3\\", sortOrder: 8 }, { value: 99, text: \\"3333\\", remarks: \\"group3\\", sortOrder: 9 }, ]; /** * 1. 映射 添加名字 * 2. 根据sortOrder 排序 * 3. group1 group2 group3 分组 * 4. 分组添加 colSpan 自定义的数据 * @param data 数据数组 * @param orderArr 排序数组 映射名字关系 * @returns */ function format(data, orderArr) { let result = []; if (data?.length === 0 || orderArr?.length === 0) { return result; } return result = data .map((eachData) =&gt; { const temp = orderArr.find((i) =&gt; Number(i.value) === Number(eachData.type)); return { ...eachData, text: temp?.text, remarks: temp?.remarks, sortOrder: temp?.sortOrder, }; }) .sort((a, b) =&gt; a.sortOrder - b.sortOrder) .reduce((pre, cur) =&gt; { const length = pre.length; if (length === 0) { return pre.concat( { text: cur.remarks, remarks: cur.remarks, isColSpan: true }, cur ); } else { const last = pre[length - 1]; if (last.remarks === cur.remarks) { return pre.concat(cur); } else { return pre.concat( { text: cur.remarks, remarks: cur.remarks, isColSpan: true }, cur ); } } }, []); } const finalData = format(requsetData, dic); console.log(\\"finalData\\", finalData);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-14T03:55:37.000Z"}],["meta",{"property":"article:author","content":"tangyuan"}],["meta",{"property":"article:tag","content":"util method"}],["meta",{"property":"article:published_time","content":"2024-06-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-14T03:55:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工具方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-14T03:55:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tangyuan\\",\\"url\\":\\"http://luogesidoc.com\\"}]}"]],"description":"工具方法 const requsetData = [ { type: \\"1\\", min: 1, max: 10 }, { type: \\"2\\", min: 1, max: 10 }, { type: \\"3\\", min: 1, max: 10 }, { type: \\"14\\", min: 1, max: 10 }, { type: \\"15\\", min: 1, max: 10 }, { type: \\"16\\", min: 1, max: 10 }, { type: \\"77\\", min: 1, max: 10 }, { type: \\"88\\", min: 1, max: 10 }, { type: \\"99\\", min: 1, max: 10 }, ]; const dic = [ { value: 1, text: \\"AAAAA\\", remarks: \\"group1\\", sortOrder: 1 }, { value: 2, text: \\"BBBBB\\", remarks: \\"group1\\", sortOrder: 2 }, { value: 3, text: \\"BBBBB\\", remarks: \\"group1\\", sortOrder: 3 }, { value: 14, text: \\"aaaa\\", remarks: \\"group2\\", sortOrder: 4 }, { value: 15, text: \\"bbbb\\", remarks: \\"group2\\", sortOrder: 5 }, { value: 16, text: \\"cccc\\", remarks: \\"group2\\", sortOrder: 6 }, { value: 77, text: \\"1111\\", remarks: \\"group3\\", sortOrder: 7 }, { value: 88, text: \\"2222\\", remarks: \\"group3\\", sortOrder: 8 }, { value: 99, text: \\"3333\\", remarks: \\"group3\\", sortOrder: 9 }, ]; /** * 1. 映射 添加名字 * 2. 根据sortOrder 排序 * 3. group1 group2 group3 分组 * 4. 分组添加 colSpan 自定义的数据 * @param data 数据数组 * @param orderArr 排序数组 映射名字关系 * @returns */ function format(data, orderArr) { let result = []; if (data?.length === 0 || orderArr?.length === 0) { return result; } return result = data .map((eachData) =&gt; { const temp = orderArr.find((i) =&gt; Number(i.value) === Number(eachData.type)); return { ...eachData, text: temp?.text, remarks: temp?.remarks, sortOrder: temp?.sortOrder, }; }) .sort((a, b) =&gt; a.sortOrder - b.sortOrder) .reduce((pre, cur) =&gt; { const length = pre.length; if (length === 0) { return pre.concat( { text: cur.remarks, remarks: cur.remarks, isColSpan: true }, cur ); } else { const last = pre[length - 1]; if (last.remarks === cur.remarks) { return pre.concat(cur); } else { return pre.concat( { text: cur.remarks, remarks: cur.remarks, isColSpan: true }, cur ); } } }, []); } const finalData = format(requsetData, dic); console.log(\\"finalData\\", finalData);"},"headers":[],"git":{"createdTime":1718337337000,"updatedTime":1718337337000,"contributors":[{"name":"Benjamin Ma","email":"benjamin_ma@manka.co.jp","commits":1}]},"readingTime":{"minutes":1.04,"words":311},"filePathRelative":"posts/software/UtilMethods.md","localizedDate":"2024年6月14日","excerpt":"<h1> 工具方法</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> requsetData <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"14\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"15\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"16\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"77\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"88\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"99\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">min</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">max</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> dic <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"AAAAA\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"BBBBB\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"BBBBB\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">3</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">14</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"aaaa\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">4</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">15</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"bbbb\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">5</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">16</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"cccc\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">6</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">77</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"1111\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">7</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">88</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2222\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">8</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">99</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"3333\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"group3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">9</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * 1. 映射 添加名字\\n * 2. 根据sortOrder 排序\\n * 3. group1 group2 group3 分组\\n * 4. 分组添加 colSpan 自定义的数据\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">data</span> 数据数组\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">orderArr</span> 排序数组 映射名字关系\\n * <span class=\\"token keyword\\">@returns</span> \\n */</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">data<span class=\\"token punctuation\\">,</span> orderArr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> result <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>data<span class=\\"token operator\\">?.</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">||</span> orderArr<span class=\\"token operator\\">?.</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> result<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> result <span class=\\"token operator\\">=</span> data\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">eachData</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">const</span> temp <span class=\\"token operator\\">=</span> orderArr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">i</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">Number</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">===</span> <span class=\\"token function\\">Number</span><span class=\\"token punctuation\\">(</span>eachData<span class=\\"token punctuation\\">.</span>type<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token operator\\">...</span>eachData<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> temp<span class=\\"token operator\\">?.</span>text<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> temp<span class=\\"token operator\\">?.</span>remarks<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">sortOrder</span><span class=\\"token operator\\">:</span> temp<span class=\\"token operator\\">?.</span>sortOrder<span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a<span class=\\"token punctuation\\">,</span> b</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> a<span class=\\"token punctuation\\">.</span>sortOrder <span class=\\"token operator\\">-</span> b<span class=\\"token punctuation\\">.</span>sortOrder<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reduce</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">pre<span class=\\"token punctuation\\">,</span> cur</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">const</span> length <span class=\\"token operator\\">=</span> pre<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> pre<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">concat</span><span class=\\"token punctuation\\">(</span>\\n          <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> cur<span class=\\"token punctuation\\">.</span>remarks<span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> cur<span class=\\"token punctuation\\">.</span>remarks<span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">isColSpan</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n          cur\\n        <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> last <span class=\\"token operator\\">=</span> pre<span class=\\"token punctuation\\">[</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>last<span class=\\"token punctuation\\">.</span>remarks <span class=\\"token operator\\">===</span> cur<span class=\\"token punctuation\\">.</span>remarks<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token keyword\\">return</span> pre<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">concat</span><span class=\\"token punctuation\\">(</span>cur<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token keyword\\">return</span> pre<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">concat</span><span class=\\"token punctuation\\">(</span>\\n            <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> cur<span class=\\"token punctuation\\">.</span>remarks<span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">remarks</span><span class=\\"token operator\\">:</span> cur<span class=\\"token punctuation\\">.</span>remarks<span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">isColSpan</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n            cur\\n          <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> finalData <span class=\\"token operator\\">=</span> <span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span>requsetData<span class=\\"token punctuation\\">,</span> dic<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"finalData\\"</span><span class=\\"token punctuation\\">,</span> finalData<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};