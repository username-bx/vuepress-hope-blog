import{_ as n,o as s,c as a,e}from"./app-d4c3ff46.js";const i={},t=e(`<h1 id="navicat-重置试用期-图形化数据库管理及发展软件" tabindex="-1"><a class="header-anchor" href="#navicat-重置试用期-图形化数据库管理及发展软件" aria-hidden="true">#</a> Navicat 重置试用期 图形化数据库管理及发展软件</h1><p>记录下来,自用.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

@echo off

<span class="token builtin class-name">echo</span> Delete HKEY_CURRENT_USER<span class="token punctuation">\\</span>Software<span class="token punctuation">\\</span>PremiumSoft<span class="token punctuation">\\</span>NavicatPremium<span class="token punctuation">\\</span>Registration<span class="token punctuation">[</span>version and language<span class="token punctuation">]</span>
<span class="token keyword">for</span> /f %%i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&quot;REG QUERY &quot;HKEY_CURRENT_USER\\Software\\PremiumSoft\\NavicatPremium&quot; /s | findstr /L Registration&quot;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>
    reg delete %%i /va /f
<span class="token punctuation">)</span>
echo.

<span class="token builtin class-name">echo</span> Delete Info folder under HKEY_CURRENT_USER<span class="token punctuation">\\</span>Software<span class="token punctuation">\\</span>Classes<span class="token punctuation">\\</span>CLSID
<span class="token keyword">for</span> /f %%i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&quot;REG QUERY &quot;HKEY_CURRENT_USER\\Software\\Classes\\CLSID&quot; /s | findstr /E Info&quot;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>
    reg delete %%i /va /f
<span class="token punctuation">)</span>
echo.

<span class="token builtin class-name">echo</span> Finish

pause


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function o(l,u){return s(),a("div",null,c)}const d=n(i,[["render",o],["__file","navicat.html.vue"]]);export{d as default};
