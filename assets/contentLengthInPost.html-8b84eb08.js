const n=JSON.parse(`{"key":"v-308f7d30","path":"/posts/software/contentLengthInPost.html","title":"debugger时,get post请求的content-length","lang":"zh-CN","frontmatter":{"title":"debugger时,get post请求的content-length","shortTitle":"get post","icon":"pen-to-square","date":"2024-05-23T00:00:00.000Z","order":10,"tag":["get post"],"auther":"Tang Yuan","head":[["meta",{"name":"keywords","content":"get post"}],["meta",{"property":"og:url","content":"http://luogesidoc.com/posts/software/contentLengthInPost.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"debugger时,get post请求的content-length"}],["meta",{"property":"og:description","content":"debugger时,get post请求的content-length 1. F12 2. Network 3. 找到一个 post 请求 4. Headers 5. Request Headers 6. Content-Length 7. 如果 content-length 为 0, post 请求失败, 代表传递数据是通过 param, 不是在 body 里传的。 export function getList(data) { return request({ url: '/getlist', method: 'get', // ！！！！！！！ params: data }) } export function saveList(data) { return request({ url: '/saveList', method: 'post', // ！！！！！！！ data }) }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://luogesidoc.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-13T00:52:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"debugger时,get post请求的content-length"}],["meta",{"property":"article:author","content":"tangyuan"}],["meta",{"property":"article:tag","content":"get post"}],["meta",{"property":"article:published_time","content":"2024-05-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-13T00:52:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"debugger时,get post请求的content-length\\",\\"image\\":[\\"http://luogesidoc.com/\\"],\\"datePublished\\":\\"2024-05-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-13T00:52:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tangyuan\\",\\"url\\":\\"http://luogesidoc.com\\"}]}"]],"description":"debugger时,get post请求的content-length 1. F12 2. Network 3. 找到一个 post 请求 4. Headers 5. Request Headers 6. Content-Length 7. 如果 content-length 为 0, post 请求失败, 代表传递数据是通过 param, 不是在 body 里传的。 export function getList(data) { return request({ url: '/getlist', method: 'get', // ！！！！！！！ params: data }) } export function saveList(data) { return request({ url: '/saveList', method: 'post', // ！！！！！！！ data }) }"},"headers":[],"git":{"createdTime":1716417938000,"updatedTime":1726188761000,"contributors":[{"name":"Benjamin Ma","email":"benjamin_ma@manka.co.jp","commits":3},{"name":"benjaminAltman","email":"benjamin@altman.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"posts/software/contentLengthInPost.md","localizedDate":"2024年5月23日","excerpt":"<h1> debugger时,get post请求的content-length</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token number\\">1.</span> <span class=\\"token constant\\">F12</span>\\n<span class=\\"token number\\">2.</span> Network\\n<span class=\\"token number\\">3.</span> 找到一个 post 请求\\n<span class=\\"token number\\">4.</span> Headers\\n<span class=\\"token number\\">5.</span> Request Headers\\n<span class=\\"token number\\">6.</span> Content<span class=\\"token operator\\">-</span>Length\\n<span class=\\"token number\\">7.</span> 如果 content<span class=\\"token operator\\">-</span>length 为 <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> post 请求失败<span class=\\"token punctuation\\">,</span> 代表传递数据是通过 param<span class=\\"token punctuation\\">,</span> 不是在 body 里传的。\\n\\n\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">getList</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">data</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">request</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">url</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'/getlist'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">method</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'get'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// ！！！！！！！</span>\\n    <span class=\\"token literal-property property\\">params</span><span class=\\"token operator\\">:</span> data\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">saveList</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">data</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">request</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">url</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'/saveList'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">method</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'post'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// ！！！！！！！</span>\\n    data\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};