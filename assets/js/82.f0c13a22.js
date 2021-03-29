(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{457:function(t,e,r){"use strict";r.r(e);var s=r(46),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"网络安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络安全"}},[t._v("#")]),t._v(" 网络安全")]),t._v(" "),r("h3",{attrs:{id:"sql-注入攻击-sql-injection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入攻击-sql-injection"}},[t._v("#")]),t._v(" SQL 注入攻击(SQL Injection)")]),t._v(" "),r("h3",{attrs:{id:"命令行注入-command-execution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令行注入-command-execution"}},[t._v("#")]),t._v(" 命令行注入 Command Execution")]),t._v(" "),r("p",[t._v("原理和 SQL 注入攻击类似")]),t._v(" "),r("h3",{attrs:{id:"file-upload-vulnerabilities"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-upload-vulnerabilities"}},[t._v("#")]),t._v(" File Upload Vulnerabilities")]),t._v(" "),r("h3",{attrs:{id:"开放重定向-open-redirects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开放重定向-open-redirects"}},[t._v("#")]),t._v(" 开放重定向 Open Redirects")]),t._v(" "),r("h3",{attrs:{id:"xss-跨站脚本攻击-cross-site-scripting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站脚本攻击-cross-site-scripting"}},[t._v("#")]),t._v(" XSS 跨站脚本攻击 (Cross-site Scripting)")]),t._v(" "),r("p",[t._v("XSS 的攻击方式就是想办法“教唆”用户的浏览器去执行一些这个网页中原本不存在的前端代码。\nXSS 有哪些注入的方法：")]),t._v(" "),r("ul",[r("li",[t._v("在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入。")]),t._v(" "),r("li",[t._v("在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）。")]),t._v(" "),r("li",[t._v("在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签。")]),t._v(" "),r("li",[t._v("在标签的 href、src 等属性中，包含 javascript: 等可执行代码。")]),t._v(" "),r("li",[t._v("在 onload、onerror、onclick 等事件中，注入不受控制代码。")]),t._v(" "),r("li",[t._v('在 style 属性和标签中，包含类似 background-image:url("javascript:..."); 的代码（新版本浏览器已经可以防范）。')]),t._v(" "),r("li",[t._v("在 style 属性和标签中，包含类似 expression(...) 的 CSS 表达式代码（新版本浏览器已经可以防范）。")])]),t._v(" "),r("p",[t._v("总之，如果开发者没有将用户输入的文本进行合适的过滤，就贸然插入到 HTML 中，这很容易造成注入漏洞。\n攻击者可以利用漏洞，构造出恶意的代码指令，进而利用恶意代码危害数据安全。")]),t._v(" "),r("p",[r("code",[t._v('<img src="notValidUrl" onerror=alert(document.cookie)>')]),t._v(" "),r("code",[t._v("javascript:alert('XSS')")])]),t._v(" "),r("p",[t._v("根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。")]),t._v(" "),r("p",[t._v("使用 Content Security Policy csp")]),t._v(" "),r("h3",{attrs:{id:"跨站请求伪造-csrf-cross-site-request-forgery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨站请求伪造-csrf-cross-site-request-forgery"}},[t._v("#")]),t._v(" 跨站请求伪造 CSRF（Cross-site request forgery)")]),t._v(" "),r("p",[t._v("攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),t._v(" "),r("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#%E5%B8%B8%E8%A7%81%E7%9A%84%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98")]),t._v(" "),r("h3",{attrs:{id:"点击劫持-click-jacking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持-click-jacking"}},[t._v("#")]),t._v(" 点击劫持 Click Jacking")]),t._v(" "),r("p",[t._v("也叫 UI 覆盖攻击，攻击者会利用一个或多个透明或不透明的层来诱骗用户支持点击按钮的操作，而实际的点击确实用户看不到的一个按钮，从而达到在用户不知情的情况下实施攻击。")]),t._v(" "),r("p",[t._v("可以设置"),r("code",[t._v("X-Frame-Options")]),t._v("进行防御或者设置"),r("code",[t._v("content-security-policy")])]),t._v(" "),r("h3",{attrs:{id:"broken-access-control-越权风险"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#broken-access-control-越权风险"}},[t._v("#")]),t._v(" broken-access-control 越权风险")]),t._v(" "),r("p",[t._v("比如用户 A id 是 11111，它有些请求就根据 id 去拿数据，如果这时候 A 知道 B 的 id 是 22222，他就可以通过合格 id 拿到 B 的数据。\nhttps://cloud.tencent.com/developer/article/1367399")]),t._v(" "),r("h3",{attrs:{id:"一些建议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一些建议"}},[t._v("#")]),t._v(" 一些建议")]),t._v(" "),r("p",[t._v("使用 https，任何东西不要使用明文传输。")]),t._v(" "),r("p",[t._v("在登录或者忘记密码的地方，不要提示是邮箱不正确还是密码不正确。这样会大大减少黑客的破解难度。\n如 twitter，登录时只提示邮箱和密码不匹配，并不会告诉你到底是哪一个不对。")]),t._v(" "),r("p",[t._v("尽量不要自建登录系统，可以多依托于一些第三方的登录，如微博、QQ 等。")]),t._v(" "),r("p",[t._v("使用 a 标签跳槽的时候加上 "),r("code",[t._v('rel="noopener noreferrer"')])]),t._v(" "),r("p",[t._v("详细介绍：https://www.hacksplaining.com/lessons")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://tech.meituan.com/2018/09/27/fe-security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（一）：如何防止 XSS 攻击？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（二）：如何防止 CSRF 攻击？"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);