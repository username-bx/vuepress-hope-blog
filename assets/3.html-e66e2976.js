import{_ as e,o as i,c as l,e as s}from"./app-7e903d09.js";const r={},a=s(`<h1 id="vuepress-1-0-踩坑记录" tabindex="-1"><a class="header-anchor" href="#vuepress-1-0-踩坑记录" aria-hidden="true">#</a> vuepress 1.0 踩坑记录</h1><ol><li><p>部署到服务器,样式丢失</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// .vuepress/config.js
// 添加字段 base
// 在本地开发阶段,需要删掉base属性. 只有build时,需要添加
base: &#39;./&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署到服务器上,页面一刷新,样式丢失</p><ol><li>文件路径: node_modules/@vuepress/core/lib/client/app.js</li><li>注释 router 对象 mode</li></ol></li><li><p>使用yarn安装插件后,@vuepress包会重新下载</p></li><li><p>注释 router 对象 mode,不然会出现样式丢失问题.</p></li><li><p>自定义页面,部署后,点击报错</p><ol><li>注释 router 对象 mode,不然会出现样式丢失问题.</li></ol></li></ol>`,2),n=[a];function d(o,t){return i(),l("div",null,n)}const u=e(r,[["render",d],["__file","3.html.vue"]]);export{u as default};