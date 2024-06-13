import{_ as e,o as i,c as n,e as s}from"./app-3524151c.js";const a={},d=s(`<h1 id="部署到服务器后-vuepress出现的一些问题记录" tabindex="-1"><a class="header-anchor" href="#部署到服务器后-vuepress出现的一些问题记录" aria-hidden="true">#</a> 部署到服务器后,vuepress出现的一些问题记录</h1><h2 id="_1-build后-样式没有" tabindex="-1"><a class="header-anchor" href="#_1-build后-样式没有" aria-hidden="true">#</a> 1. build后,样式没有</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token comment">// .vuepress/config.js</span>
base<span class="token operator">:</span> &#39;./&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-头像显示" tabindex="-1"><a class="header-anchor" href="#_2-头像显示" aria-hidden="true">#</a> 2. 头像显示</h2><p>修改路径从 &#39;/img/avatar.jpg&#39; 为 &#39;./img/avatar.jpg&#39;</p><h2 id="_3-自定义页面-一直报错" tabindex="-1"><a class="header-anchor" href="#_3-自定义页面-一直报错" aria-hidden="true">#</a> 3. 自定义页面,一直报错</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
尝试的思路: 
1. 添加 readme 
2. 重新加载依赖
3. 改变文件路径
4. configjs 添加page 字段

最后解决方案:

vuepress 版本号 1.9.10
vuepress-theme-meteorlxy 版本号 ^1.9.0

修改文件中 router的mode.  从history改为默认的hash
&quot;\\node_modules\\@vuepress\\core\\lib\\client\\app.js&quot; 

// mode: &#39;history&#39;,


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-刷新后-丢失样式" tabindex="-1"><a class="header-anchor" href="#_4-刷新后-丢失样式" aria-hidden="true">#</a> 4. 刷新后,丢失样式</h2><p>原因: router的方式 model 不对</p><p>解决方式:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
修改文件中 router的mode.  从history改为默认的hash
&quot;\\node_modules\\@vuepress\\core\\lib\\client\\app.js&quot; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[d];function l(c,v){return i(),n("div",null,r)}const u=e(a,[["render",l],["__file","2.html.vue"]]);export{u as default};
