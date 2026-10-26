var e,LTT=((e={A:function(){this.C=0}}).A.prototype.LY=function(t){this.F&&this.C===t||(this.F=new Uint8Array(t)),this.C=t,this.ba=this.s=0},e.A.prototype.ly=function(){var t=this.s-this.ba;if(0!==t){if(this.u.qa)this.u.qa(this.F,t);else for(var i=0;i<t;i++)this.u.Na(this.F[i]);this.s>=this.C&&(this.s=0),this.ba=this.s}},e.A.prototype.R=function(){this.ly(),this.u=null},e.A.prototype.ca=function(t){this.R(),this.u=t},e.A.prototype.g=function(t){t||(this.s=this.ba=0)},e.A.prototype.ua=function(t,i){var e=this.s-t-1;for(0>e&&(e+=this.C);i--;)e>=this.C&&(e=0),this.F[this.s++]=this.F[e++],this.s>=this.C&&this.ly()},e.A.prototype.Ga=function(t){this.F[this.s++]=t,this.s>=this.C&&this.ly()},e.A.prototype.na=function(t){return 0>(t=this.s-t-1)&&(t+=this.C),this.F[t]},e.G=function(){},e.G.prototype.ca=function(t){this.u=t},e.G.prototype.R=function(){this.u=null},e.G.prototype.g=function(){var t=5;for(this.l=0,this.h=-1;t--;)this.l=this.l<<8|this.u.j()},e.G.prototype.wa=function(t){for(var i,e=0;t--;)this.h>>>=1,i=this.l-this.h>>>31,this.l-=this.h&i-1,e=e<<1|1-i,0==(4278190080&this.h)&&(this.l=this.l<<8|this.u.j(),this.h<<=8);return e},e.G.prototype.m=function(t,i){var e=t[i],n=(this.h>>>11)*e;return(2147483648^this.l)<(2147483648^n)?(this.h=n,t[i]+=2048-e>>>5,0==(4278190080&this.h)&&(this.l=this.l<<8|this.u.j(),this.h<<=8),0):(this.h-=n,this.l-=n,t[i]-=e>>>5,0==(4278190080&this.h)&&(this.l=this.l<<8|this.u.j(),this.h<<=8),1)},e.v=function(t,i){for(;i--;)t[i]=1024},e.o=function(t){this.Z=[],this.P=t},e.o.prototype.g=function(){e.v(this.Z,1<<this.P)},e.o.prototype.decode=function(t){for(var i=1,e=this.P;e--;)i=i<<1|t.m(this.Z,i);return i-(1<<this.P)},e.o.prototype.Ha=function(t){for(var i,e=1,n=0,r=0;r<this.P;++r)e=e<<1|(i=t.m(this.Z,e)),n|=i<<r;return n},e.Ia=function(t,i,e,n){for(var r,o=1,s=0,h=0;h<n;++h)o=o<<1|(r=e.m(t,i+o)),s|=r<<h;return s},e.I=function(){this.S=[],this.X=[],this.Y=[],this.da=new e.o(8),this.J=0},e.I.prototype.LY=function(t){for(;this.J<t;++this.J)this.X[this.J]=new e.o(3),this.Y[this.J]=new e.o(3)},e.I.prototype.g=function(){var t=this.J;for(e.v(this.S,2);t--;)this.X[t].g(),this.Y[t].g();this.da.g()},e.I.prototype.decode=function(t,i){return 0===t.m(this.S,0)?this.X[i].decode(t):0===t.m(this.S,1)?8+this.Y[i].decode(t):16+this.da.decode(t)},e.L=function(){this.O=[]},e.L.prototype.g=function(){e.v(this.O,768)},e.L.prototype.ya=function(t){var i=1;do{i=i<<1|t.m(this.O,i)}while(256>i);return 255&i},e.L.prototype.za=function(t,i){var e=1;do{var n=i>>7&1;i<<=1;var r=t.m(this.O,(1+n<<8)+e);if(e=e<<1|r,n!==r){for(;256>e;)e=e<<1|t.m(this.O,e);break}}while(256>e);return 255&e},e.M=function(){},e.M.prototype.LY=function(t,i){var n;if(!this.N||this.K!==i||this.$!==t)for(this.$=t,this.ra=(1<<t)-1,this.K=i,this.N=[],n=1<<this.K+this.$;n--;)this.N[n]=new e.L},e.M.prototype.g=function(){for(var t=1<<this.K+this.$;t--;)this.N[t].g()},e.M.prototype.Ca=function(t,i){return this.N[((t&this.ra)<<this.K)+((255&i)>>>8-this.K)]},e.D=function(){this.B=new e.A,this.i=new e.G,this.ea=[],this.ga=[],this.ha=[],this.ia=[],this.ja=[],this.fa=[],this.H=[],this.la=[],this.ka=new e.o(4),this.V=new e.I,this.aa=new e.I,this.W=new e.M,this.U=this.T=-1,this.H[0]=new e.o(6),this.H[1]=new e.o(6),this.H[2]=new e.o(6),this.H[3]=new e.o(6)},e.D.prototype.Ja=function(t){return!(0>t||(this.T!==t&&(this.T=t,this.U=Math.max(this.T,1),this.B.LY(Math.max(this.U,4096))),0))},e.D.prototype.Ka=function(t,i,e){var n=1<<e;return!(8<t||4<i||4<e||(this.W.LY(i,t),this.V.LY(n),this.aa.LY(n),this.sa=n-1,0))},e.D.prototype.La=function(t){if(!this.Ka(t.Da,t.Ea,t.Fa))throw Error;if(!this.Ja(t.Ba))throw Error},e.D.prototype.xa=function(t){if(13>t.size)return!1;var i=t.j(),e=i%9,n=(i=~~(i/9))%5;i=~~(i/5);var r=t.j();r|=t.j()<<8,r|=t.j()<<16,r+=16777216*t.j();var o=t.j();return o|=t.j()<<8,o|=t.j()<<16,o+=16777216*t.j(),t.j(),t.j(),t.j(),t.j(),{Da:e,Ea:n,Fa:i,Ba:r,Ma:o}},e.D.prototype.g=function(){var t=4;for(this.B.g(!1),e.v(this.ea,192),e.v(this.fa,192),e.v(this.ga,12),e.v(this.ha,12),e.v(this.ia,12),e.v(this.ja,12),e.v(this.la,114),this.W.g();t--;)this.H[t].g();this.V.g(),this.aa.g(),this.ka.g(),this.i.g()},e.D.prototype.va=function(t,i,n){var r=0,o=0,s=0,h=0,a=0,u=0,p=0;for(this.i.ca(t),this.B.ca(i),this.g();0>n||u<n;)if(t=u&this.sa,0===this.i.m(this.ea,(r<<4)+t))p=this.W.Ca(u++,p),p=7<=r?p.za(this.i,this.B.na(o)):p.ya(this.i),this.B.Ga(p),r=4>r?0:r-(10>r?3:6);else{if(1===this.i.m(this.ga,r))p=0,0===this.i.m(this.ha,r)?0===this.i.m(this.fa,(r<<4)+t)&&(r=7>r?9:11,p=1):(0===this.i.m(this.ia,r)?i=s:(0===this.i.m(this.ja,r)?i=h:(i=a,a=h),h=s),s=o,o=i),0===p&&(p=2+this.aa.decode(this.i,t),r=7>r?8:11);else if(a=h,h=s,s=o,p=2+this.V.decode(this.i,t),r=7>r?7:10,4<=(t=this.H[5>=p?p-2:3].decode(this.i))){if(o=(2|1&t)<<(i=(t>>1)-1),14>t)o+=e.Ia(this.la,o-t-1,this.i,i);else if(o+=this.i.wa(i-4)<<4,0>(o+=this.ka.Ha(this.i))){if(-1===o)break;return!1}}else o=t;if(o>=u||o>=this.U)return!1;this.B.ua(o,p),u+=p,p=this.B.na(0)}return this.B.ly(),this.B.R(),this.i.R(),!0},e.oa=function(t){this.ta=new Uint8Array(t),this.size=t.byteLength,this.offset=0},e.oa.prototype.j=function(){return this.ta[this.offset++]},e.pa=function(){this.size=0,this.ma=[]},e.pa.prototype.qa=function(t,i){this.ma.push(new Uint8Array(t.subarray(0,i))),this.size+=i},e.Aa=function(t){var i=new e.oa(t);t=new e.pa;var n=new e.D,r=n.xa(i),o=r.Ma;if(n.La(r),!n.va(i,t,o))throw Error;for(i=t.ma,t=new Uint8Array(t.size),r=n=0;n<i.length;n++)t.set(i[n],r),r+=i[n].length;return i.length=0,t},e.Aa);/* ==== 隐藏页增强补丁 ====
 * 一、金手指自动填充：公共事件 id=100（'bbb'）里
 *      103 输入数字(变量1480)  →  111 条件分支: 变量1480 == 828266
 *    把「输入数字」换成「设置变量=828266」，密码由游戏自动填入，键盘框不再出现。
 * 二、金手指扩展：
 *    · 顶级菜单加「★逐项拉满」——循环菜单，可逐项勾选（金钱/技能Pt/信赖/性兴趣/
 *      心情/性欲/战斗属性），也可以一键全满，选完「返回」才退出。
 *    · 「妹妹状态」加「★跳时段」——+1/+3 小时，或直接跳到 17:00 / 20:00 / 23:00 / 06:00。
 *    · 顶级菜单「★跳日期」——「过 1 夜（完整结算）」直接调用游戏自带的 CE329「上床」
 *      过夜流程（含每日结算 / 夜间事件 / 清晨处理）；「快速 +1/+7/+30 天」只推进
 *      日数与星期、把时间拨回早上 7 点、补满行动力与精力，瞬间完成不过场。
 * 三、卡死修复：见下方 installEngineFix 的详细说明。
 */
(function () {
  var TARGET_JSON = /data\/CommonEvents\.json/i;
  var TARGET_ENGINE = /js\/rpg_objects\.js/i;

  /* ---------- 工具：定位 CommonEvents.json 里 id=100 的事件 ---------- */
  function findEventArray(text, id) {
    var key = '"id":' + id + ',"list":[';
    var p = text.indexOf(key);
    if (p < 0) return null;
    var start = p + key.length - 1; // '[' 的位置
    var depth = 0, inStr = false, esc = false, i = start;
    for (; i < text.length; i++) {
      var ch = text.charAt(i);
      if (inStr) {
        if (esc) esc = false;
        else if (ch === '\\') esc = true;
        else if (ch === '"') inStr = false;
        continue;
      }
      if (ch === '"') { inStr = true; continue; }
      if (ch === '[' || ch === '{') depth++;
      else if (ch === ']' || ch === '}') { depth--; if (depth === 0) { i++; break; } }
    }
    return { start: start, end: i, json: text.slice(start, i) };
  }

  /* ---------- 指令构造小工具 ---------- */
  function C(code, indent, params) { return { code: code, indent: indent, parameters: params || [] }; }
  function V(indent, varId, value) { return C(122, indent, [varId, varId, 0, 0, value]); }
  function Vadd(indent, varId, delta) { return C(122, indent, [varId, varId, 1, 0, delta]); }
  function Vsub(indent, varId, delta) { return C(122, indent, [varId, varId, 2, 0, delta]); }
  function msg(indent, text) { return [C(101, indent, ['', 0, 0, 2]), C(401, indent, [text])]; }

  /* 时间 +N 小时：自己做进位。
     不能靠 CE217 处理，它的 var5 进位只有一层 if（满 60 减一次），
     一次加 180 分钟只会计 1 小时、留下 var5=120。 */
  function addHours(indent, delta) {
    return [
      Vadd(indent, 4, delta),
      C(111, indent, [1, 4, 0, 24, 1]),        // if 时 >= 24
      Vsub(indent + 1, 4, 24),
      Vadd(indent + 1, 6, 1),                  //   星期 +1
      C(111, indent + 1, [1, 6, 0, 7, 1]),     //   if 星期 >= 7
      V(indent + 2, 6, 0),
      C(412, indent + 1),
      C(412, indent)
    ];
  }

  /* 快速跳 N 天：只推进日数 / 星期，把时间拨回早上 7 点，补满行动力与精力。
     不走 CE329 的过夜演出，所以不黑屏、不播 BGM、不触发夜间 H 事件，胜在瞬间完成。
     星期用 eval 取模一次算完，+30 天也不会算错。 */
  function fastDays(indent, n) {
    return [
      Vadd(indent, 160, n),                                            // 经过日数 += n
      C(122, indent, [6, 6, 0, 4, '($gameVariables.value(6) + ' + n + ') % 7']),  // 星期取模
      V(indent, 4, 7),                                                 // 时 = 7
      V(indent, 5, 0),                                                 // 分 = 0
      C(122, indent, [14, 14, 0, 4, '$gameVariables.value(13)']),       // 行动力 = 最大行动力
      C(122, indent, [16, 16, 0, 4, '$gameVariables.value(15)']),       // 精力 = 最大精力
      C(117, indent, [217])                                            // 刷新右上角时钟
    ];
  }

  /* 完整过 N 夜：直接调用游戏自己的 CE329「上床」。
     它会做全套换日结算（调子 / 机嫌 / 信赖 / 性兴味 / 发情度递减、每日重置二十多个
     变量、夜间事件 117[222]、清晨处理 CE317），最后把时间设成次日 7:45、日数 +1。
     CE317 开头有 `for(i=1;i<=93;i++) $gameScreen.erasePicture(i)`，黑屏会自动清掉；
     它也正是游戏自己「深夜结束命令」调用它的方式，所以手动调用是安全的。
     代价是约 2~4 秒的过场，以及可能弹出的夜间事件对话。 */
  function sleepNights(indent, n) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(C(117, indent, [329]));
    return a;
  }

  /* ---------- 构建金手指菜单 ----------
   * 引擎约束（本移植版实测，直接决定这里的缩进怎么写）：
   *   · 102 选项的 _branch 键 = 触发 setupChoices 的那条指令的 indent，
   *     而 402 读的是自己的 indent —— 所以 102 与它的 402 必须同一缩进。
   *   · 113 = 跳出循环（向后扫到配对的 413）；115 = 结束整个事件，不能用来退出循环。
   *   · 112 = Loop 起点，413 = 回到 Loop 起点。
   *   · 412 在引擎里不存在，只作结构占位，会被静默跳过。
   *
   * 时间跳转改完 var4 后调用 CE217「时间显示」刷新右上角时钟；
   * 跨凌晨的星期进位由 addHours 自己算（CE217 的进位只支持 +1 小时）。
   */
  function buildCheatBody() {
    var b = [];

    /* 结构：外层循环包住顶层菜单 → 一次触发可以连续改多项，选「退出」才结束。
       全程没有任何提示文本、确认框、密码输入。 */
    b.push(C(112, 0));                                                   // 外层 Loop
    b.push(C(102, 1, [['妹妹状态', '状态+金钱', '★逐项拉满', '★跳日期', '退出'], 4, 0, 2, 0]));

    /* ===== 1. 妹妹状态 ===== */
    b.push(C(402, 1, [0, '妹妹状态']));
    b.push(C(102, 2, [['+信赖10', '-信赖10', '+性兴趣10', '妹好心情',
                       '+妹性欲20', '+妹性欲60', '★跳时段', '返回'], 7, 0, 2, 0]));
    b.push(C(402, 2, [0, '+信赖10']));   b.push(Vadd(3, 21, 10));
    b.push(C(402, 2, [1, '-信赖10']));   b.push(Vsub(3, 21, 10));
    b.push(C(402, 2, [2, '+性兴趣10'])); b.push(Vadd(3, 22, 10));
    b.push(C(402, 2, [3, '妹好心情']));  b.push(V(3, 23, 8));
    b.push(C(402, 2, [4, '+妹性欲20'])); b.push(Vadd(3, 102, 20));
    b.push(C(402, 2, [5, '+妹性欲60'])); b.push(Vadd(3, 102, 60));

    /* --- ★跳时段 --- */
    b.push(C(402, 2, [6, '★跳时段']));
    b.push(C(102, 3, [['+1 小时', '+3 小时', '→ 17:00 傍晚', '→ 20:00 夜里',
                       '→ 23:00 深夜', '→ 06:00 清晨', '返回'], 6, 0, 2, 0]));
    b.push(C(402, 3, [0, '+1 小时'])); b.push.apply(b, addHours(4, 1));
    b.push(C(402, 3, [1, '+3 小时'])); b.push.apply(b, addHours(4, 3));
    b.push(C(402, 3, [2, '→ 17:00 傍晚'])); b.push(V(4, 4, 17)); b.push(V(4, 5, 0));
    b.push(C(402, 3, [3, '→ 20:00 夜里'])); b.push(V(4, 4, 20)); b.push(V(4, 5, 0));
    b.push(C(402, 3, [4, '→ 23:00 深夜'])); b.push(V(4, 4, 23)); b.push(V(4, 5, 0));
    b.push(C(402, 3, [5, '→ 06:00 清晨'])); b.push(V(4, 4, 6));  b.push(V(4, 5, 0));
    b.push(C(402, 3, [6, '返回']));         b.push(C(0, 4));
    b.push(C(403, 3, [6, null]));           b.push(C(0, 4));
    b.push(C(404, 3));
    b.push(C(117, 4, [217]));                   // 刷新右上角时钟
    b.push(C(404, 2));                          // 子菜单结束 → 回到顶层

    /* ===== 2. 状态+金钱 ===== */
    b.push(C(402, 1, [1, '状态+金钱']));
    b.push(Vadd(2, 7, 82828));
    b.push(Vadd(2, 10, 100));
    b.push(Vadd(2, 170, 100)); b.push(Vadd(2, 171, 100)); b.push(Vadd(2, 172, 100));
    b.push(Vadd(2, 173, 100)); b.push(Vadd(2, 174, 100));

    /* ===== 3. ★逐项拉满（内层循环，勾完自动回到本菜单） ===== */
    b.push(C(402, 1, [2, '★逐项拉满']));
    b.push(C(112, 2));                                                  // 内层 Loop
    b.push(C(102, 3, [['金钱 999999', '技能Pt 999', '信赖 9999', '性兴趣 9999',
                       '心情 10', '性欲 120', '战斗属性 999', '★全部拉满', '返回'], 8, 0, 2, 0]));
    b.push(C(402, 3, [0, '金钱 999999'])); b.push(V(4, 7, 999999));
    b.push(C(402, 3, [1, '技能Pt 999']));  b.push(V(4, 10, 999));
    b.push(C(402, 3, [2, '信赖 9999']));   b.push(V(4, 21, 9999));
    b.push(C(402, 3, [3, '性兴趣 9999'])); b.push(V(4, 22, 9999));
    b.push(C(402, 3, [4, '心情 10']));     b.push(V(4, 23, 10));
    b.push(C(402, 3, [5, '性欲 120']));    b.push(V(4, 102, 120));
    b.push(C(402, 3, [6, '战斗属性 999']));
    b.push(V(4, 170, 999)); b.push(V(4, 171, 999)); b.push(V(4, 172, 999));
    b.push(V(4, 173, 999)); b.push(V(4, 174, 999));
    b.push(C(402, 3, [7, '★全部拉满']));
    b.push(V(4, 7, 999999)); b.push(V(4, 10, 999));
    b.push(V(4, 21, 9999));  b.push(V(4, 22, 9999));
    b.push(V(4, 23, 10));    b.push(V(4, 102, 120));
    b.push(V(4, 170, 999)); b.push(V(4, 171, 999)); b.push(V(4, 172, 999));
    b.push(V(4, 173, 999)); b.push(V(4, 174, 999));
    b.push(C(402, 3, [8, '返回'])); b.push(C(113, 4));                  // 跳出内层 Loop
    b.push(C(403, 3, [8, null]));   b.push(C(113, 4));
    b.push(C(404, 3));
    b.push(C(413, 2));                                                  // 内层 Repeat

    /* ===== 4. ★跳日期 ===== */
    b.push(C(402, 1, [3, '★跳日期']));
    b.push(C(102, 2, [['过 1 夜（完整结算）', '快速 +1 天', '快速 +7 天',
                       '快速 +30 天', '返回'], 4, 0, 2, 0]));
    b.push(C(402, 2, [0, '过 1 夜（完整结算）'])); b.push.apply(b, sleepNights(3, 1));
    b.push(C(402, 2, [1, '快速 +1 天']));  b.push.apply(b, fastDays(3, 1));
    b.push(C(402, 2, [2, '快速 +7 天']));  b.push.apply(b, fastDays(3, 7));
    b.push(C(402, 2, [3, '快速 +30 天'])); b.push.apply(b, fastDays(3, 30));
    b.push(C(402, 2, [4, '返回']));        b.push(C(0, 3));
    b.push(C(403, 2, [4, null]));          b.push(C(0, 3));
    b.push(C(404, 2));

    /* ===== 5. 退出 ===== */
    b.push(C(402, 1, [4, '退出']));  b.push(C(113, 2));                 // 跳出外层 Loop
    b.push(C(403, 1, [4, null]));    b.push(C(113, 2));                 // 取消键 = 退出
    b.push(C(404, 1));
    b.push(C(413, 0));                                                  // 外层 Repeat
    b.push(C(0, 0));
    return b;
  }

  /* ---------- 金手指扩展：整段替换 CE100（去掉全部前置） ---------- */
  function patchCheat(list) {
    var body = buildCheatBody();
    list.length = 0;
    Array.prototype.push.apply(list, body);
    return ['金手指已改为纯菜单：去掉署名提示 / 确定取消 / 回想码输入，直接进选项，可连续操作'];
  }

  function patchCommonEvents(txt) {
    var found = findEventArray(txt, 100);
    if (!found) return null;
    var list;
    try { list = JSON.parse(found.json); } catch (e) { return null; }
    var notes = patchCheat(list);
    if (!notes.length) return null;
    return { text: txt.slice(0, found.start) + JSON.stringify(list) + txt.slice(found.end), notes: notes };
  }

  /* ---------- 卡死修复：输入等待循环让出帧 + skipBranch 越界保护 ----------
   * 根因（引擎源码 + 全量事件数据双向核实）：
   *   游戏里大量使用「Loop { If (TouchInput.isTriggered()) Break }」这种
   *   "显示一张 CG / 一段演出，然后等玩家点一下"的写法，共 74 处输入条件
   *   （isTriggered 42 / isCancelled 32），其中 22 处构成循环。
   *
   *   这些循环体内（或在"玩家什么都没做"的那条路径上）没有 Wait 指令。玩家没点的
   *   帧里，解释器会一直跑到 checkFreeze 的上限（每帧 10 万条命令，约 2.5 万轮），
   *   每一轮都要走一遍 executeCommand -> skipBranch -> eval 条件表达式。
   *   实测：单帧光这个空转就 8~13ms（桌面机），已经吃掉 60fps 的大半预算；
   *   手机上还要慢好几倍，帧率直接崩掉、点击延迟到几秒 —— 看起来就是"卡住"
   *   （其实点一下还能走）。H 事件 CG 多、等待点击多，所以最容易撞上。
   *   另外 CE263「战斗点击处理」这类循环只有"点了/取消了"两条路径里有 Wait，
   *   玩家什么都不做时同样空转，所以这里按 111 本身判定、不依赖循环体有没有 Wait。
   *
   * 修复：
   *   1) 同一个输入条件在循环里第二次求值时直接让出本帧（_index 不推进，
   *      下一帧重新判断）。每帧只 eval 一次，开销降到可忽略，点击响应不受影响。
   *   2) 兜底护栏：同一指令在一帧内被重复执行超过 2000 次，说明还有别的空转
   *      写法，同样让出本帧（正常的有界循环最多几百轮，不会被误伤）。
   *   3) skipBranch 走到事件末尾会抛 TypeError（Cannot read properties of
   *      undefined (reading 'indent')），加上越界保护。
   */
  function installEngineFix() {
    if (typeof Game_Interpreter === 'undefined' || !Game_Interpreter.prototype) return false;
    var P = Game_Interpreter.prototype;
    if (P.__wbFixed) return true;
    P.__wbFixed = true;

    /* 计数器变量白名单（离线精确匹配得出，20 个 / 879 处）。
       判据：出现在 112/413 循环体内、有 `变量 += 1`、且 `if 变量 == 目标`
       的成立分支里紧接 `变量 = 0` 与 113 跳出。全部是复制粘贴出来的计时循环，
       名字也都是「XX计数器 / 循环计数器」。不含任何枚举值（服装 ID / 好感度 /
       星期 / 行动类型），因此放宽比较不会影响判定语义。 */
    var WB_COUNTERS = {362:1,509:1,598:1,663:1,825:1,827:1,837:1,903:1,919:1,
                       946:1,968:1,973:1,975:1,984:1,1029:1,1046:1,1048:1,
                       1067:1,1090:1,1230:1};

    // 3) skipBranch 越界保护
    P.skipBranch = function () {
      var L = this._list;
      if (!L) return;
      while (this._index + 1 < L.length && L[this._index + 1].indent > this._indent) this._index++;
    };

    /* 数值锁定：只增不减。
       window.__wbLock 由右侧浮层面板控制（{14:1} 行动力 / {16:1} 精力 / {7:1} 金钱）。
       做成「只增不减」而不是「固定值」，是为了不打断游戏自己的初始化与跨日重置：
       消耗（写入更小的值）被拦掉，重置为更大的值仍然生效。 */
    var origSetVal = Game_Variables.prototype.setValue;
    Game_Variables.prototype.setValue = function (varId, value) {
      var L = window.__wbLock;
      if (L && L[varId] && typeof value === 'number') {
        var cur = (this._data && this._data[varId]) || 0;
        if (value < cur) value = cur;
      }
      return origSetVal.call(this, varId, value);
    };

    // 1) 输入等待循环让出帧
    var orig111 = P.command111;
    P.command111 = function () {
      var p = this._params || [];

      /* 0) 计数器死循环修复（第 2 天 19:30 卡死的根因）
       *
       * 游戏把「计时 N 次」写成：Loop { 计数 += 1; If (计数 == 目标) { 计数 = 0; 跳出 } }
       * 计数变量是**全局共享**的，而只加不减：一旦被留在大于目标的位置，
       * `==` 永远不成立 → 死循环（循环里的 wait 有一半概率是 0，等于满速空转）。
       *
       * 两条实际的污染路径：
       *   a) 并行事件 CE422/507~510（立绘眨眼）把 var509 推到 50~400，
       *      而 CE278「访问者」要求它等于 random/4 = 0~14；
       *   b) 任一处循环被 115「结束事件」中途打断，残值就留在变量里，
       *      下一个目标值更小的循环永远追不上。
       *
       * 计数器单调递增，所以「== 目标」与「>= 目标」在从下方起算时完全等价；
       * 越过目标时前者死循环、后者立即通过 —— 后者才是正确语义。 */
      if (p.length >= 5 && p[0] === 1 && p[4] === 0 && WB_COUNTERS[p[1]]) {
        p[4] = 1;                       // == 放宽为 >=
        try {
          return orig111.apply(this, arguments);
        } finally {
          p[4] = 0;                     // _params 是原数据的引用，必须还原
        }
      }

      var isInput = (p[0] === 12 || p[0] === 11);
      if (isInput) {
        var idx = this._index;
        var fr = (typeof Graphics !== 'undefined' && Graphics.frameCount) || 0;
        if (this.__wbInIdx === idx && this.__wbInFrame === fr) {
          this.__wbInIdx = -1;
          return false;            // 让出本帧，下一帧再判
        }
        this.__wbInIdx = idx;
        this.__wbInFrame = fr;
      } else {
        this.__wbInIdx = -1;
      }
      return orig111.apply(this, arguments);
    };

    // 2) 兜底护栏：同一条指令一帧内重复过多 → 让出本帧
    var origExec = P.executeCommand;
    P.executeCommand = function () {
      var fr = (typeof Graphics !== 'undefined' && Graphics.frameCount) || 0;
      var idx = this._index;
      if (this.__wbF !== fr) { this.__wbF = fr; this.__wbLoopIdx = -1; this.__wbLoopN = 0; }
      if (this.__wbLoopIdx === idx) {
        if (++this.__wbLoopN > 2000) {
          this.__wbLoopN = 0;
          this.__wbLoopIdx = -1;
          return false;            // 让出本帧
        }
      } else {
        this.__wbLoopIdx = idx;
        this.__wbLoopN = 1;
      }
      return origExec.apply(this, arguments);
    };

    console.log('[fix] 卡死修复已装载：计数器死循环放宽 + 输入等待循环每帧只判一次 + 同帧重复护栏 + skipBranch 越界保护 + 数值锁定');
    return true;
  }

  function injectWatchdog() {
    try {
      if (document.getElementById('wb-watchdog')) return;
      var s = document.createElement('script');
      s.id = 'wb-watchdog';
      s.textContent = '(' + installEngineFix.toString() + ')();';
      (document.head || document.documentElement).appendChild(s);
    } catch (e) { console.warn('[fix] 看门狗注入失败', e); }
  }

  /* ---------- 右下角浮层：存档导出/导入 + 数值锁定开关 ---------- */
  function installPanel() {
    try {
      if (document.getElementById('wb-fab')) return;
      if (!document.body) return;

      var css = document.createElement('style');
      css.textContent = [
        '#wb-fab{position:fixed;right:10px;bottom:12px;width:44px;height:44px;border-radius:50%;',
        'background:rgba(126,87,194,.55);color:#fff;font-size:20px;line-height:44px;text-align:center;',
        'z-index:99998;cursor:pointer;user-select:none;-webkit-user-select:none;',
        'box-shadow:0 2px 10px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.35);',
        'font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}',
        '#wb-fab:active{background:rgba(126,87,194,.85)}',
        '#wb-pop{position:fixed;right:10px;bottom:64px;width:min(320px,calc(100vw - 20px));',
        'background:rgba(28,24,38,.97);color:#eee;border-radius:14px;padding:12px 12px 10px;',
        'z-index:99999;display:none;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;',
        'box-shadow:0 8px 28px rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.14);font-size:13px}',
        '#wb-pop.on{display:block}',
        '#wb-pop .h{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}',
        '#wb-pop .h b{font-size:14px;font-weight:600}',
        '#wb-pop .x{width:26px;height:26px;line-height:24px;text-align:center;border-radius:50%;',
        'background:rgba(255,255,255,.12);cursor:pointer;font-size:14px}',
        '#wb-pop .row{display:flex;gap:8px;margin-bottom:9px}',
        '#wb-pop button{flex:1;padding:9px 6px;border-radius:9px;border:0;font-size:13px;',
        'background:#7e57c2;color:#fff;cursor:pointer;font-family:inherit}',
        '#wb-pop button:active{background:#9575cd}',
        '#wb-pop button.ghost{background:rgba(255,255,255,.14)}',
        '#wb-pop label{display:flex;align-items:center;gap:9px;padding:8px 4px;cursor:pointer;',
        'border-bottom:1px solid rgba(255,255,255,.07)}',
        '#wb-pop label:last-of-type{border-bottom:0}',
        '#wb-pop input[type=checkbox]{width:19px;height:19px;accent-color:#7e57c2;flex:0 0 auto}',
        '#wb-pop textarea{width:100%;box-sizing:border-box;margin-top:9px;padding:8px;border-radius:9px;',
        'border:1px solid rgba(255,255,255,.18);background:rgba(0,0,0,.35);color:#ddd;',
        'font-size:11px;font-family:ui-monospace,Menlo,monospace;resize:vertical;word-break:break-all}',
        '#wb-pop .tip{margin-top:7px;font-size:11px;color:#9e9e9e;min-height:15px;line-height:1.4}'
      ].join('');
      (document.head || document.documentElement).appendChild(css);

      var fab = document.createElement('div');
      fab.id = 'wb-fab';
      fab.textContent = '\u2699';
      document.body.appendChild(fab);

      var pop = document.createElement('div');
      pop.id = 'wb-pop';
      pop.innerHTML =
        '<div class="h"><b>\u5b58\u6863 / \u4f5c\u5f0a</b><span class="x" id="wb-x">\u2715</span></div>' +
        '<div class="row"><button id="wb-exp">\u5bfc\u51fa\u5b58\u6863</button>' +
        '<button id="wb-imp" class="ghost">\u5bfc\u5165\u5b58\u6863</button></div>' +
        '<label><input type="checkbox" data-v="14">\u884c\u52a8\u529b\u4e0d\u51cf</label>' +
        '<label><input type="checkbox" data-v="16">\u7cbe\u529b\u4e0d\u51cf</label>' +
        '<label><input type="checkbox" data-v="7">\u91d1\u94b1\u4e0d\u51cf</label>' +
        '<textarea id="wb-txt" rows="4" placeholder="\u5bfc\u51fa\u540e\u8fd9\u91cc\u4f1a\u51fa\u73b0\u4e00\u4e32\u4ee3\u7801\uff0c\u590d\u5236\u4fdd\u5b58\uff1b\u8981\u6062\u590d\u65f6\u7c98\u8d34\u56de\u6765\u518d\u70b9\u5bfc\u5165"></textarea>' +
        '<div class="tip" id="wb-tip"></div>';
      document.body.appendChild(pop);

      var tip = pop.querySelector('#wb-tip');
      var txt = pop.querySelector('#wb-txt');

      function say(m) { tip.textContent = m; }

      fab.addEventListener('click', function (e) {
        e.stopPropagation();
        pop.classList.toggle('on');
      });
      pop.addEventListener('click', function (e) { e.stopPropagation(); });
      pop.querySelector('#wb-x').addEventListener('click', function () { pop.classList.remove('on'); });

      // 导出：把所有 "RPG " 开头的键（存档槽 / Global / Config）拼成 JSON
      pop.querySelector('#wb-exp').addEventListener('click', function () {
        var data = {}, n = 0;
        try {
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf('RPG ') === 0) { data[k] = localStorage.getItem(k); n++; }
          }
        } catch (err) { say('\u8bfb\u53d6\u5931\u8d25\uff1a' + err); return; }
        if (!n) { say('\u8fd8\u6ca1\u6709\u5b58\u6863\uff08\u5148\u5728\u6e38\u620f\u91cc\u5b58\u4e00\u6b21\uff09'); return; }
        var out = JSON.stringify({ __wbSave: 1, items: data });
        txt.value = out;
        say('\u5df2\u751f\u6210\uff0c\u5171 ' + n + ' \u9879\uff0c' + (out.length / 1024).toFixed(1) + ' KB');
        try {
          navigator.clipboard.writeText(out).then(function () {
            say('\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f\uff08' + n + ' \u9879\uff09');
          }, function () {});
        } catch (e2) {}
        txt.select();
      });

      // 导入：粘贴 JSON，写回 localStorage
      pop.querySelector('#wb-imp').addEventListener('click', function () {
        var raw = (txt.value || '').trim();
        if (!raw) { say('\u5148\u628a\u5bfc\u51fa\u7684\u4ee3\u7801\u7c98\u8d34\u5230\u4e0b\u9762\u7684\u6846\u91cc'); return; }
        var obj;
        try { obj = JSON.parse(raw); } catch (e) { say('\u683c\u5f0f\u4e0d\u5bf9\uff0c\u4e0d\u662f\u5bfc\u51fa\u7684\u4ee3\u7801'); return; }
        var items = obj && obj.items ? obj.items : obj;
        var n = 0;
        try {
          for (var k in items) {
            if (k.indexOf('RPG ') === 0 && typeof items[k] === 'string') {
              localStorage.setItem(k, items[k]); n++;
            }
          }
        } catch (e) { say('\u5199\u5165\u5931\u8d25\uff1a' + e); return; }
        say(n ? ('\u5df2\u5199\u5165 ' + n + ' \u9879\uff0c\u5237\u65b0\u9875\u9762\u751f\u6548') : '\u6ca1\u627e\u5230\u53ef\u7528\u7684\u5b58\u6863\u9879');
      });

      // 锁定开关
      var boxes = pop.querySelectorAll('input[type=checkbox]');
      window.__wbLock = window.__wbLock || {};
      for (var bi = 0; bi < boxes.length; bi++) {
        (function (bx) {
          var vid = +bx.getAttribute('data-v');
          bx.checked = !!window.__wbLock[vid];
          bx.addEventListener('change', function () {
            if (bx.checked) window.__wbLock[vid] = 1; else delete window.__wbLock[vid];
            say(bx.checked ? '\u5df2\u9501\u5b9a\uff08\u53ea\u589e\u4e0d\u51cf\uff09' : '\u5df2\u89e3\u9664');
          });
        })(boxes[bi]);
      }
    } catch (e) { console.warn('[panel] 挂载失败', e); }
  }

  /* ---------- 响应拦截 ---------- */
  function installed() { return window.__wbInstalled; }
  function install() {
    if (installed()) return;
    var proto = XMLHttpRequest.prototype;
    /* 加载器会覆写 XMLHttpRequest.prototype.open/send（内部用 _param 标记），
       必须等它装好之后再包装，否则补丁会被覆盖。 */
    if (String(proto.open).indexOf('_param') < 0) return;

    var _open = proto.open, _send = proto.send;
    proto.open = function (method, url) {
      this.__wbUrl = String(url == null ? '' : url);
      return _open.apply(this, arguments);
    };
    proto.send = function (body) {
      var xhr = this;
      var url = xhr.__wbUrl || '';
      if (!xhr.__wbPatched && (TARGET_JSON.test(url) || TARGET_ENGINE.test(url))) {
        xhr.__wbPatched = true;
        var orig = xhr.onload;
        xhr.onload = function () {
          try {
            var txt = xhr.responseText;
            if (typeof txt === 'string' && txt.length) {
              if (TARGET_JSON.test(url)) {
                var r = patchCommonEvents(txt);
                if (r) {
                  Object.defineProperty(xhr, 'responseText', { value: r.text, configurable: true });
                  Object.defineProperty(xhr, 'response', { value: r.text, configurable: true });
                  console.log('[cheat] 金手指已增强：' + r.notes.join('、') + '；回想码 828266 已自动填充');
                }
              }
            }
          } catch (e) { console.warn('[cheat] 补丁失败', e); }
          return orig && orig.apply(xhr, arguments);
        };
      }
      return _send.apply(this, arguments);
    };
    window.__wbInstalled = true;
    console.log('[cheat] 增强补丁已装载');
  }

  /* 加载器在所有分片就绪后会 document.write 整个页面，借这个时机安装最稳妥 */
  var _write = document.write;
  document.write = function () {
    var r = _write.apply(document, arguments);
    try { install(); } catch (e) {}
    try { injectWatchdog(); } catch (e) {}
    try { installPanel(); } catch (e) {}
    return r;
  };

  /* 兜底轮询 + 看门狗轮询（等引擎 JS 加载完） */
  var timer = setInterval(function () {
    try { install(); } catch (e) { clearInterval(timer); }
    if (installed()) { clearInterval(timer); }
  }, 80);

  var wt = setInterval(function () {
    try { if (installEngineFix()) clearInterval(wt); } catch (e) { clearInterval(wt); }
  }, 150);

  /* 面板兜底：游戏用 document.write 重写整页，DOM 就绪后再挂一次 */
  var pt = setInterval(function () {
    try {
      if (document.getElementById('wb-fab')) clearInterval(pt);
      else installPanel();
    } catch (e) {}
  }, 400);
})();

if(~location.href.indexOf("?xiaomao"))!function(){var t=window.reinex64||"",i=window.lyreine||function(i){return t+i};XMLHttpRequest.prototype.L=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.Y=XMLHttpRequest.prototype.send;var e=function(){var t={L:function(t){return new Blob([t])}};if(t.Ly=window.LTT,"undefined"==typeof TextDecoder)t.ly=function(t){var i,e=new Array(t.length);for(i=0;i<t.length;i++)e[i]=String.fromCharCode(t[i]);return decodeURIComponent(escape(e.join("")))},t.LY=function(t){var i,e=unescape(encodeURIComponent(t)),n=new Uint8Array(e.length);for(i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n};else{var i=new TextDecoder;t.ly=function(t){return i.decode(t)};var e=new TextEncoder;t.LY=function(t){return e.encode(t)}}function n(t){this.Ly=function(t){return null==t},this.ly=t}n.prototype.Y=[function(t){return t},t.Ly,0,0],n.prototype.md=[t.ly,t.L],n.prototype.L=function(t){this.Iy=function(t,i){return this.ly.subarray(t,i)},this.length=this.ly.byteLength,this.YI=function(t,i,e){return e(this.Iy(t,i))},r.LY(this),function(){this.yl=function(t,i,e){if(this.Ly(e))return this.md[t](this.LY(i));"function"==typeof e&&this.LY(i,function(i){e(this.md[t](i))}.bind(this))},this.yL=function(t){var i;return(i="number"==typeof t?this.arr[t]:this.obj[t]).refer&&(i=this.arr[i.refer-1]),i},this.LY=function(t,i){var e=this.yL(t);if(this.Ly(i))return this.Y[e.Y](this.Iy(e.l,e.u));"function"==typeof i&&this.YI(e.l,e.u,function(t){i(this.Y[e.Y](t))}.bind(this))},this.b=this.yl.bind(this,0),this.t=this.yl.bind(this,1)}.call(this),t()};var r={L:function(t,i){var e=new DataView(t.buffer);e.getInt32(0),i.h=1,i.len=e.getUint32(4),i.start=i.len+8},Y:function(i,e,n){e.h&&(i=t.Ly(i));var r=0,o=e.start;function s(){var t,e=0;do{e=e<<7|127&(t=i[r++])}while(128&t);return e}function h(){return String.fromCharCode.apply(null,i.subarray(r,r+=4))}for(var a=s(),u=[],p={},c=0;c<a;c++){var f=s(),l=h(),y=i[r++];u.push(p[l]={l:o,u:o+=f,size:f,filename:l,Y:y})}for(a=s(),c=0;c<a;c++){var d=s();l=h(),u.push(p[l]={refer:d,filename:l})}n.arr=u,n.obj=p,n._data=i},LY:function(t){var i,e={};this.L(t.Iy(0,8),e),i=t.Iy(8,8+e.len),this.Y(i,e,t)}};return n}();!function(){var t=[["1.zip",704535,4295421],["2.zip",7405,4992551],["3.zip",7405,4992551],["4.zip",7405,4992551],["5.zip",7405,4992551],["6.zip",7405,4992551],["7.zip",7405,4992551],["8.zip",7405,4992551],["9.zip",7405,4992551],["10.zip",7405,4992551],["11.zip",7405,4992551],["12.zip",7405,4992551],["13.zip",7405,4992551],["14.zip",7405,4992551],["15.zip",7405,4992551],["16.zip",7405,4992551],["17.zip",7405,4992551],["18.zip",7405,4992551],["19.zip",7405,4992551],["20.zip",7405,4992551],["21.zip",7405,4992551],["22.zip",7405,4992551],["23.zip",7405,4992551],["24.zip",7405,4992551],["25.zip",7405,4992551],["26.zip",7405,4992551],["27.zip",7405,4992551],["28.zip",7405,4992551],["29.zip",7405,4992551],["30.zip",7405,4992551],["31.zip",7405,4992551],["32.zip",7405,4992551],["33.zip",7405,4992551],["34.zip",7405,4992551],["35.zip",7405,4992551],["36.zip",7405,4992551],["37.zip",7405,4992551],["38.zip",7405,4992551],["39.zip",7405,4992551],["40.zip",7405,4992551],["41.zip",7405,4992551],["42.zip",7405,4992551],["43.zip",7405,4992551],["44.zip",7405,4992551],["45.zip",7405,4992551],["46.zip",7405,4992551],["47.zip",7405,4992551],["48.zip",7405,4992551],["49.zip",7405,4992551],["50.zip",7405,4992551],["51.zip",7405,4992551],["52.zip",7405,4992551],["53.zip",7405,4992551],["54.zip",7405,4992551],["55.zip",7405,4992551],["56.zip",7405,4992551],["57.zip",7405,4992551],["58.zip",7405,4992551],["59.zip",7405,4992551],["60.zip",7405,4992551],["61.zip",7405,4992551],["62.zip",7405,4992551],["63.zip",7405,4992551],["64.zip",7405,4992551],["65.zip",7405,4992551],["66.zip",7405,4992551],["67.zip",7405,4992551],["68.zip",7405,4992551],["69.zip",7405,4992551],["70.zip",7405,4992551],["71.zip",7405,4992551],["72.zip",7405,4992551],["73.zip",7405,4992551],["74.zip",7405,4992551],["75.zip",7405,4992551],["76.zip",7405,4992551],["77.zip",7405,4992551],["78.zip",7405,4992551],["79.zip",7405,4992551],["80.zip",7405,4992551],["81.zip",7405,4992551],["82.zip",7405,4992551],["83.zip",7405,4992551],["84.zip",7405,4992551],["85.zip",7405,4992551],["86.zip",7405,4992551],["87.zip",7405,4992551],["88.zip",7405,4992551],["89.zip",7405,4992551],["90.zip",7405,4992551],["91.zip",7405,4992551],["92.zip",7405,4992551],["93.zip",7405,4992551],["94.zip",7405,4992551],["95.zip",7405,4992551],["96.zip",7405,4992551],["97.zip",7405,4992551],["98.zip",7405,4992551],["99.zip",7405,4992551],["100.zip",7405,4992551],["101.zip",7405,4992551],["102.zip",7405,4992551],["103.zip",7405,4992551],["104.zip",7405,4992551],["105.zip",7405,4992551],["106.zip",7405,4992551],["107.zip",7405,4992551],["108.zip",7405,4992551],["109.zip",7405,4992551],["110.zip",7405,4992551],["111.zip",7405,4992551],["112.zip",7405,4516166]];function n(){for(var t=new Uint8Array(this.size),i=0,e=this.start,n=this.size,o=0;o<this.bin.length;o++){var s=r[this.bin[o]];if(0==o){var h=s.subarray(e,e+this.size);t.set(h),n-=h.length,i+=h.length}else o==this.bin.length-1?t.set(s.subarray(0,n),i):(t.set(s,i),n-=s.length,i+=s.length)}return t}function __wbBase(){try{var m=/[?&]cdn=([^&]*)/.exec(location.search);if(m){var v=decodeURIComponent(m[1]);if(!v){try{localStorage.removeItem("wb_data_base")}catch(e){}return "data/"}if(v.charAt(v.length-1)!=="/")v+="/";try{localStorage.setItem("wb_data_base",v)}catch(e){}return v}var q=localStorage.getItem("wb_data_base");if(q)return q}catch(e){}return "data/"}t.forEach((function(t){t[0]=__wbBase()+t[0]}));var r={},o={338:188,339:189,352:166,353:168,376:190,381:180,382:184,8364:164},s={R:function(t){var e=new XMLHttpRequest;return e.L("GET",i(t),!1),e.overrideMimeType("text/plain; charset=ISO-8859-15"),e.Y(),function(i){if(e.status<400){for(var n=new Uint8Array(i.length),r=0,h=i.length;r<h;r++){var a=i.charCodeAt(r);if(o.hasOwnProperty(a)&&(a=o[a]),n[r]=a,a<0||255<a)return s.LY(i)}return n}return s.R(t)}(e.response)},L:function(t,e,n){var r=new XMLHttpRequest;r.L("GET",i(t),!0),r.responseType="arraybuffer",r.onload=function(){r.status<400?e(new Uint8Array(r.response)):setTimeout((function(){s.L(t,e,2*n)}),n)},r.Y(),r.onerror=r.onabort=r.ontimeout=function(){setTimeout((function(){s.L(t,e,2*n)}),n)}}},h=[],a=0,WB_ACT=0,WB_MAX=6;function u(){while(h.length){var i=h[0];if("function"==typeof i){if(0<WB_ACT)return;h.shift(),i();continue}if(r[i]){h.shift();continue}if(WB_ACT>=WB_MAX)return;h.shift(),WB_ACT++,s.L(t[i][0],(function(x){return function(e){r[x]=new Uint8Array(e.subarray(t[x][1],-22)),WB_ACT--,u()}})(i),1)}}function p(t,i){for(var e=0;e<t.bin.length;e++)h.push(t.bin[e]);h.push((function(){i(t.L())})),u()}var c=new XMLHttpRequest;c.L("GET",i(t[0][0]),!0),c.responseType="arraybuffer",c.onload=function(){r[0]=new Uint8Array(c.response.slice(t[0][1],-22));var i=new e(r[0]);i.L((function(){for(var e=t[0][2],o=i.arr,h=o[0].l,a=0,u=0;o[a].l;a++){for(o[a].L=n,o[a].bin=[u],o[a].start=h,h+=o[a].size;o[a].u>e;)h-=t[u][2],e+=t[++u][2],o[a].bin.push(u);o[a].u==e&&(u++,h=0)}function c(t){return t&&!/^(data|blob|ws|wss):/.test(t)&&L(t).indexOf("http")}i.LY=function(i,e){var n=this.yL(i);return this.Ly(e)?this.Y[n.Y](function(i){for(var e=0;e<i.bin.length;e++){var n=i.bin[e];if(!r[n]){var o=s.R(t[n][0]);r[n]=new Uint8Array(o.subarray(t[n][1],-22))}}return i.L()}(n)):"function"==typeof e&&p(n,function(t){e(this.Y[n.Y](t))}.bind(this))};var f=document.createElement("a"),l={},y={};function d(t){return f.href=t,f.href}var z=d(".");function L(t){var i=d(t).replace(z,"").toLowerCase().replace(/[#|?][^]*$/,"").replace(/%(?![a-z0-9]{2})/g,"%25");return decodeURIComponent(i)}var v=function(t){for(var i=L(t),e=5381,n=0;n<i.length;n++)e=33*e^i.charCodeAt(n);return String.fromCharCode.apply(null,[255&e,e>>8&255,e>>16&255,e>>24&255])},m={};for(a=0;a<i.arr.length;a++)m[i.arr[a].filename]=a;function b(t){var e=v(t);return l[e]?l[e]:null==m[e]?"":(l[e]=URL.createObjectURL(i.t(m[e])),y[l[e]]=t,l[e])}function g(t,e,n){var r=v(t);return l[r]?(y[l[r]]||(y[l[r]]=t),e(l[r])):null==m[r]?n&&n():void i.t(m[r],(function(i){l[r]=URL.createObjectURL(i),y[l[r]]=t,e(l[r])}))}if(XMLHttpRequest.prototype.open=function(t,i,e){""!=i&&""!=L(i)||(i="index.html"),c(i)&&"POST"!=t?this._param=[t,i,0==e]:this.L.apply(this,arguments)},XMLHttpRequest.prototype.send=function(t){var i=this;if(!this._param)return this.Y(t);var e=this._param[0],n=this._param[1];this._param[2]?(this.L(e,b(n),!1),this.Y(t)):g(n,(function(n){i.L(e,n),i.Y(t)}),(function(n,r){0==n&&i.ontimeout&&i.ontimeout(r),1==n&&i.onabort&&i.onabort(r),2==n&&i.onerror&&i.onerror(r),3==n&&(i.L(e,":*|?"),i.Y(t))}))},"function"==typeof fetch){var w=fetch;fetch=function(t,i){return"object"==typeof t?w(t):(""!=t&&""!=L(t)||(t="index.html"),c(t)?new Promise((function(i,e){g(t,(function(t){return i(w(t))}),(function(){return e(new Error)}))})):w(t,i))}}function Y(t,i){var e=this;if(c(t)){var n=v(t);if(l[n])return e.setAttribute("src",l[n]),i&&i();if(this.LY==n)return;this.LY=n,g(t,(function(t){e.setAttribute("src",t),i&&i()}))}else e.setAttribute("src",t)}function A(t,i){return i&&!i.indexOf("/")?d(i):t.replace(/[^/]*$/,"")+i}function R(t,e){if(e=e||"",!c(t))return t;var n=v(t);if(l[n])return l[n];if(!m[n])return"data:,";if("css"!=t.slice(-3))return URL.createObjectURL(i.t(m[n]));var r=i.b(m[n]).replace(/@import\s*(["'])([^'"]+)\1/g,(function(i,i,e){return"@import '"+R(A(t,e),t)+"'"})).replace(/url\(\s*(["']?)([^'"()]+)\1\s*\)/g,(function(i,i,e){return'url("'+R(A(t,e),t)+'")'}));return URL.createObjectURL(new Blob([r]))}function T(t){return t.replace(/@import\s*(["'])([^'"]+)\1/g,(function(t,t,e){var n=v(e);return"@import '"+((n=m[n]?URL.createObjectURL(i.t(n)):"")||"data:,")+"'"})).replace(/url\(\s*(["']?)([^'"()]+)\1\s*\)/g,(function(t,t,e){var n=v(e);return'url("'+((n=m[n]?URL.createObjectURL(i.t(n)):"")||"data:,")+'")'}))}Audio.prototype.L=Audio.prototype.pause,Audio.prototype.Y=Audio.prototype.play,Audio.prototype.pause=function(){this.src&&this.L(),this.reine=""},Audio.prototype.play=function(){this.R&&(this.reine=this.R,Y.call(this,this.R,function(){this.reine==this.R&&this.Y()}.bind(this)))},Object.defineProperties(Image.prototype,{src:{get:function(){return this.getAttribute("src")||""},set:Y}}),Object.defineProperties(Audio.prototype,{src:{get:function(){return this.getAttribute("src")||""},set:function(t){this.R=t}}}),Object.defineProperties(HTMLScriptElement.prototype,{src:{get:function(){var t=this.getAttribute("src");return y[t]?y[t]:t||""}},LY:{get:function(){return this.getAttribute("src")||""},set:function(t){this.setAttribute("src",t)}}}),CSSStyleSheet.prototype.L=CSSStyleSheet.prototype.insertRule,CSSStyleSheet.prototype.insertRule=function(t,i){return this.L(T(t),i)},i.b("üb",(function(t){var i=document.createElement("html");i.innerHTML=t;for(var e=i.querySelectorAll("script"),n=0;n<e.length;n++)c(e[n].LY)&&(e[n].LY=b(e[n].LY));var r=i.querySelectorAll("img");for(n=0;n<r.length;n++)c(r[n].src)&&r[n].setAttribute("src",b(r[n].src));var o=i.querySelectorAll("audio");for(n=0;n<o.length;n++)c(o[n].src)&&o[n].setAttribute("src",b(o[n].src));var s=i.querySelectorAll("link");for(n=0;n<s.length;n++)"text/css"==s[n].type?s[n].href=R(s[n].href):s[n].href&&(s[n].href=b(s[n].href));var h=i.querySelectorAll("style");for(n=0;n<h.length;n++)h[n].innerHTML=T(h[n].innerHTML);var a=Node.prototype.appendChild;Node.prototype.appendChild=function(t){return"LINK"==t.nodeName&&"text/css"==t.type?(t.href=R(t.href),a.call(document.documentElement,t)):"STYLE"==t.nodeName?(t.innerHTML=T(t.innerHTML),a.call(document.documentElement,t)):this===document.body&&t&&"SCRIPT"==t.nodeName&&c(t.LY)?(!1===t.async?(t.LY=b(t.LY),a.call(this,t)):g(t.LY,(function(i){t.LY=i,a.call(document.body,t)}),(function(){a.call(document.body,t)})),t):a.call(this,t)},document.open(),document.write("<!DOCTYPE html>"+i.outerHTML),document.close()}))}))},c.Y()}()}();else{var enterBtn=document.getElementById("enter");enterBtn&&enterBtn.addEventListener("click",function(){location.href="?xiaomao"})}
