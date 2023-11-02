const s=JSON.parse('{"key":"v-0ce29f80","path":"/software/ssh2.html","title":"使用ssh同时连接gitlab github","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-10-21T00:00:00.000Z","tag":["SSH"],"description":"使用ssh同时连接gitlab github 打开文件夹 c:/user/xxx/.ssh 右键 git bash here 生成ssh $ ssh-keygen -t ed25519 -C \\"bx.ma@gmail.com\\" // 输入名称 id_ssh_gitlab $ ssh-keygen -t ed25519 -C \\"bx.ma@gmail.com\\" // 输入名称 id_ssh_github 启动ssh-agent $ ssh-agent bash 添加ssh到ssh-agent $ ssh-add c:/user/xxx/.ssh/id_ssh_gitlab $ ssh-add c:/user/xxx/.ssh/id_ssh_github 添加config文件","head":[["meta",{"property":"og:url","content":"http://luogesidoc.com/software/ssh2.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"使用ssh同时连接gitlab github"}],["meta",{"property":"og:description","content":"使用ssh同时连接gitlab github 打开文件夹 c:/user/xxx/.ssh 右键 git bash here 生成ssh $ ssh-keygen -t ed25519 -C \\"bx.ma@gmail.com\\" // 输入名称 id_ssh_gitlab $ ssh-keygen -t ed25519 -C \\"bx.ma@gmail.com\\" // 输入名称 id_ssh_github 启动ssh-agent $ ssh-agent bash 添加ssh到ssh-agent $ ssh-add c:/user/xxx/.ssh/id_ssh_gitlab $ ssh-add c:/user/xxx/.ssh/id_ssh_github 添加config文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-02T10:35:08.000Z"}],["meta",{"property":"article:author","content":"tangyuan"}],["meta",{"property":"article:tag","content":"SSH"}],["meta",{"property":"article:published_time","content":"2023-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-02T10:35:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用ssh同时连接gitlab github\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-02T10:35:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tangyuan\\",\\"url\\":\\"http://luogesidoc.com\\"}]}"]]},"headers":[],"git":{"createdTime":1698921308000,"updatedTime":1698921308000,"contributors":[{"name":"bx","email":"bx@gmail.com","commits":1}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"software/ssh2.md","localizedDate":"2023年10月21日","excerpt":"<h1> 使用ssh同时连接gitlab github</h1>\\n<ol>\\n<li>\\n<p>打开文件夹 c:/user/xxx/.ssh</p>\\n</li>\\n<li>\\n<p>右键 git bash here</p>\\n</li>\\n<li>\\n<p>生成ssh</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ ssh-keygen <span class=\\"token parameter variable\\">-t</span> ed25519 <span class=\\"token parameter variable\\">-C</span> <span class=\\"token string\\">\\"bx.ma@gmail.com\\"</span>\\n// 输入名称 id_ssh_gitlab\\n$ ssh-keygen <span class=\\"token parameter variable\\">-t</span> ed25519 <span class=\\"token parameter variable\\">-C</span> <span class=\\"token string\\">\\"bx.ma@gmail.com\\"</span>\\n// 输入名称 id_ssh_github\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>启动ssh-agent</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ ssh-agent <span class=\\"token function\\">bash</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>添加ssh到ssh-agent</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ ssh-add c:/user/xxx/.ssh/id_ssh_gitlab\\n$ ssh-add c:/user/xxx/.ssh/id_ssh_github\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>添加config文件</p>\\n</li>\\n</ol>","autoDesc":true}');export{s as data};
