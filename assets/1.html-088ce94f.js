import{_ as a,r as i,o as l,c as d,a as e,b as n,f as r,e as t}from"./app-c26bd9fc.js";const o={},c=e("h1",{id:"从头开始-搭建vuepress-1-0-blog详细步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从头开始-搭建vuepress-1-0-blog详细步骤","aria-hidden":"true"},"#"),n(" 从头开始,搭建vuepress 1.0 blog详细步骤")],-1),u=e("p",null,"根据步骤一步一步搭建,一定没问题的.",-1),v={href:"https://vuepress-theme-blog.billyyyyy3320.com/#intro",target:"_blank",rel:"noopener noreferrer"},p=t(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建文件夹  进入文件夹路径
mkdir blog &amp;&amp; cd blog

// 安装 vuepress 框架
yarn add vuepress -D 

// 安装主题
yarn add vuepress-theme-meteorlxy -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="此时得到的文件路径" tabindex="-1"><a class="header-anchor" href="#此时得到的文件路径" aria-hidden="true">#</a> 此时得到的文件路径</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
blog
    node-modeules
    package.json
    yarn.lock

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
blog
    _posts                              <span class="token comment">// 博客文章存储的地址</span>
        <span class="token number">2023</span><span class="token number">-10</span><span class="token number">-19</span>-第一章博客.md
    .vuepress                           <span class="token comment">// 对vuepress的一些配置</span>
        config.js

    node-modeules
    package.json
    yarn.lock

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-vuepress-文件夹下的-config-js" tabindex="-1"><a class="header-anchor" href="#配置-vuepress-文件夹下的-config-js" aria-hidden="true">#</a> 配置 .vuepress 文件夹下的 config.js</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
module.exports = <span class="token punctuation">{</span>
    title<span class="token operator">:</span> &#39;VuePress Blog Example&#39;<span class="token punctuation">,</span> <span class="token comment">// Title for the site. This will be displayed in the navbar.</span>
    theme<span class="token operator">:</span> &#39;vuepress-theme-meteorlxy&#39;<span class="token punctuation">,</span>
    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Please keep looking down to see the available options.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-package-json" tabindex="-1"><a class="header-anchor" href="#配置-package-json" aria-hidden="true">#</a> 配置 package.json</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
yarn dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(b,h){const s=i("ExternalLinkIcon");return l(),d("div",null,[c,u,e("blockquote",null,[e("p",null,[n("参考文档: "),e("a",v,[n("https://vuepress-theme-blog.billyyyyy3320.com/#intro"),r(s)])])]),p])}const k=a(o,[["render",m],["__file","1.html.vue"]]);export{k as default};
