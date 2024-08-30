import{_ as e,o as a,c as n,b as s}from"./app-7acabcd2.js";const i={},r=s(`<h1 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> homebrew</h1><p>Homebrew 主要由四个部分组成: brew、homebrew-core 、homebrew-cask、homebrew-bottles。</p><p>brew：Homebrew 的源代码仓库<br> homebrew-core：Homebrew 的核心源<br> homebrew-cask：提供 macOS 应用和大型二进制文件的安装<br> homebrew-bottles：预编译二进制软件包</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">ls</span> 查看本地命令；
brew search mongodb 查找软件；
brew <span class="token parameter variable">-v</span> 查看版本；
brew update 更新版本；
brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> firefox 安装图形化界面软件
brew config 查看配置。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它命令" tabindex="-1"><a class="header-anchor" href="#其它命令" aria-hidden="true">#</a> 其它命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew update	更新 Homebrew
brew search package	搜索软件包
brew <span class="token function">install</span> package	安装软件包
brew uninstall package	卸载软件包
brew upgrade	升级所有软件包
brew upgrade package	升级指定软件包
brew list	列出已安装的软件包列表
brew services <span class="token builtin class-name">command</span> package	管理 brew 安装软件包
brew services list	列出 brew 管理运行的服务
brew info package	查看软件包信息
brew deps package	列出软件包的依赖关系
brew <span class="token builtin class-name">help</span>	查看帮助
brew cleanup	清除过时软件包
brew <span class="token function">link</span> package	创建软件包符号链接
brew unlink package	取消软件包符号链接
brew doctor	检查系统是否存在问题
brew tap <span class="token punctuation">[</span>user/repo<span class="token punctuation">]</span>	将开源仓库添加到源


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[r];function c(d,t){return a(),n("div",null,l)}const o=e(i,[["render",c],["__file","homebrew.html.vue"]]);export{o as default};
