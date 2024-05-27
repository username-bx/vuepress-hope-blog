import{_ as n,o as s,c as a,e as p}from"./app-46a07672.js";const t={},e=p(`<h1 id="_5-实战案例" tabindex="-1"><a class="header-anchor" href="#_5-实战案例" aria-hidden="true">#</a> 5. 实战案例</h1><p>经过前面小节的学习，我们已经掌握了 <em>RN</em> 中最基本的知识，也算是快速入门了。接下来，为了增加一点小小的成就感，我们来做一个简单的实战案例——照片分享应用。</p><p>配套代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Image<span class="token punctuation">,</span>
  StyleSheet<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  TouchableOpacity<span class="token punctuation">,</span>
  Platform<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-native&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">&quot;./assets/logo.png&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ImagePicker <span class="token keyword">from</span> <span class="token string">&quot;expo-image-picker&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Sharing <span class="token keyword">from</span> <span class="token string">&quot;expo-sharing&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>localUri<span class="token punctuation">,</span> setLocalUri<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 异步获取图片</span>
  <span class="token keyword">let</span> <span class="token function-variable function">openImagePickerAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 首先获取权限</span>
    <span class="token keyword">let</span> permissionResult <span class="token operator">=</span>
      <span class="token keyword">await</span> ImagePicker<span class="token punctuation">.</span><span class="token function">requestMediaLibraryPermissionsAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果权限获取失败</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>permissionResult<span class="token punctuation">.</span>granted <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;需要访问相机胶卷的权限！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 没有进入上面的 if，说明权限获取成功</span>
    <span class="token comment">// 异步打开图片选择器，并且返回用户的图片选择结果</span>
    <span class="token keyword">let</span> pickerResult <span class="token operator">=</span> <span class="token keyword">await</span> ImagePicker<span class="token punctuation">.</span><span class="token function">launchImageLibraryAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果用户没有选择图片</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pickerResult<span class="token punctuation">.</span>cancelled <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 进入此 if，说明用户没有选择图片</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 没有进入上面的 if，说明用户选择了图片</span>
    <span class="token function">setLocalUri</span><span class="token punctuation">(</span>pickerResult<span class="token punctuation">.</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 分享图片</span>
  <span class="token keyword">let</span> <span class="token function-variable function">openShareDialogAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Platform<span class="token punctuation">.</span><span class="token constant">OS</span> <span class="token operator">===</span> <span class="token string">&quot;web&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Uh oh, sharing isn&#39;t available on your platform</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">await</span> Sharing<span class="token punctuation">.</span><span class="token function">shareAsync</span><span class="token punctuation">(</span>localUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回首页</span>
  <span class="token keyword">let</span> <span class="token function-variable function">goBack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setLocalUri</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 如果 selectedImage 里面有内容，就显示图片</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>localUri<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Image source<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">uri</span><span class="token operator">:</span> localUri <span class="token punctuation">}</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>thumbnail<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        
        <span class="token operator">&lt;</span>TouchableOpacity onPress<span class="token operator">=</span><span class="token punctuation">{</span>openShareDialogAsync<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>buttonText<span class="token punctuation">}</span><span class="token operator">&gt;</span>分享照片<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>
        
        <span class="token operator">&lt;</span>TouchableOpacity onPress<span class="token operator">=</span><span class="token punctuation">{</span>goBack<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>buttonText<span class="token punctuation">}</span><span class="token operator">&gt;</span>重新选择<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Image source<span class="token operator">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>logo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>instructions<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        按下按钮，与朋友分享手机中的照片！
      <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>TouchableOpacity onPress<span class="token operator">=</span><span class="token punctuation">{</span>openImagePickerAsync<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>buttonText<span class="token punctuation">}</span><span class="token operator">&gt;</span>选择照片<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">305</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">159</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">instructions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#888&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginHorizontal</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingLeft</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingRight</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingBottom</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">thumbnail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resizeMode</span><span class="token operator">:</span> <span class="token string">&quot;contain&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-<em>EOF</em>-</p>`,5),o=[e];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","5.html.vue"]]);export{u as default};
