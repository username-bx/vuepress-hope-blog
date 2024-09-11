import{_ as n,o as a,c as s,b as e}from"./app-3acb1bab.js";const i={},t=e(`<h1 id="navicat-重置试用期-图形化数据库管理及发展软件" tabindex="-1"><a class="header-anchor" href="#navicat-重置试用期-图形化数据库管理及发展软件" aria-hidden="true">#</a> Navicat 重置试用期 图形化数据库管理及发展软件</h1><p>记录下来,自用.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mac-navicat" tabindex="-1"><a class="header-anchor" href="#mac-navicat" aria-hidden="true">#</a> Mac Navicat</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/libexec/PlistBuddy <span class="token parameter variable">-c</span> <span class="token string">&quot;Delete :014BF4EC24C114BEF46E1587042B3619&quot;</span> ~/Library/Preferences/com.navicat.NavicatPremium.plist
/usr/libexec/PlistBuddy <span class="token parameter variable">-c</span> <span class="token string">&quot;Delete :91F6C435D172C8163E0689D3DAD3F3E9&quot;</span> ~/Library/Preferences/com.navicat.NavicatPremium.plist
/usr/libexec/PlistBuddy <span class="token parameter variable">-c</span> <span class="token string">&quot;Delete :B966DBD409B87EF577C9BBF3363E9614&quot;</span> ~/Library/Preferences/com.navicat.NavicatPremium.plist

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/Library/Application<span class="token punctuation">\\</span> Support/PremiumSoft<span class="token punctuation">\\</span> CyberTech/Navicat<span class="token punctuation">\\</span> CC/Navicat<span class="token punctuation">\\</span> Premium/.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(o,r){return a(),s("div",null,c)}const u=n(i,[["render",l],["__file","navicat.html.vue"]]);export{u as default};
