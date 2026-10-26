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

  /* 关快进 + 把可能残留的消息窗口收干净（355 脚本指令里用） */
  var WB_FF_OFF = 'window.__wbFF = 0;' +
    ' try { window.__wbPurgeMessage && window.__wbPurgeMessage(true); } catch (e) {}' +
    ' try { window.__wbFFBadge && window.__wbFFBadge(); } catch (e) {}';

  /* 快速跳 N 天：只推进日数 / 星期，把时间拨回早上 7 点，补满行动力与精力。
     不跑 CE329，所以**没有每日结算**——不黑屏、不播夜间事件，胜在瞬间完成，
     但任务 / 剧情标记不会跟着更新。要「完整跳过一天」请用上面的快进过夜。 */
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
    b.push(C(102, 1, [['妹妹状态', '状态+金钱', '★逐项拉满', '★跳日期', '★快进', '退出'], 5, 0, 2, 0]));

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
    b.push(C(102, 2, [['★快进过 1 夜（带结算）', '看过场过 1 夜',
                       '快速 +1 天', '快速 +7 天', '快速 +30 天',
                       '★快进跳过 7 天（带结算）', '返回'], 6, 0, 2, 0]));

    /* 快进过 1 夜：开快进 → 117[329] 真的把每日结算跑完 → 关快进 + 清残留。
       「天数变了但任务还在」就是只改日数、没跑结算造成的；这条路径是真跑。 */
    b.push(C(402, 2, [0, '★快进过 1 夜（带结算）']));
    b.push(C(355, 3, ['window.__wbFF = 1']));
    b.push(C(117, 3, [329]));
    b.push(C(355, 3, [WB_FF_OFF]));
    b.push(C(117, 3, [217]));

    b.push(C(402, 2, [1, '看过场过 1 夜'])); b.push.apply(b, sleepNights(3, 1));
    b.push(C(402, 2, [2, '快速 +1 天']));  b.push.apply(b, fastDays(3, 1));
    b.push(C(402, 2, [3, '快速 +7 天']));  b.push.apply(b, fastDays(3, 7));
    b.push(C(402, 2, [4, '快速 +30 天'])); b.push.apply(b, fastDays(3, 30));

    b.push(C(402, 2, [5, '★快进跳过 7 天（带结算）']));
    b.push(C(355, 3, ['window.__wbFF = 1']));
    for (var kk = 0; kk < 7; kk++) b.push(C(117, 3, [329]));
    b.push(C(355, 3, [WB_FF_OFF]));
    b.push(C(117, 3, [217]));

    b.push(C(402, 2, [6, '返回']));  b.push(C(0, 3));
    b.push(C(403, 2, [6, null]));    b.push(C(0, 3));
    b.push(C(404, 2));

    /* ===== 5. ★快进 ===== */
    b.push(C(402, 1, [4, '★快进']));
    b.push(C(102, 2, [['快进：开（自动点完）', '快进：关',
                       '选项自动选第 1 项', '选项自动选最后 1 项',
                       '清理残留文字', '清掉屏幕立绘', '返回'], 6, 0, 2, 0]));
    b.push(C(402, 2, [0, '快进：开（自动点完）']));
    b.push(C(355, 3, ['try { window.__wbFFSet(1); } catch (e) { window.__wbFF = 1; }']));
    b.push(C(402, 2, [1, '快进：关']));
    b.push(C(355, 3, ['try { window.__wbFFSet(0); } catch (e) { window.__wbFF = 0; }']));
    b.push(C(402, 2, [2, '选项自动选第 1 项']));   b.push(C(355, 3, ['window.__wbFFChoice = 0']));
    b.push(C(402, 2, [3, '选项自动选最后 1 项'])); b.push(C(355, 3, ['window.__wbFFChoice = 1']));
    b.push(C(402, 2, [4, '清理残留文字']));
    b.push(C(355, 3, ['try { window.__wbCleanup(); } catch (e) {}']));
    b.push(C(402, 2, [5, '清掉屏幕立绘']));
    b.push(C(355, 3, ['try { window.__wbClearPics(); } catch (e) {}']));
    b.push(C(402, 2, [6, '返回']));  b.push(C(0, 3));
    b.push(C(403, 2, [6, null]));    b.push(C(0, 3));
    b.push(C(404, 2));

    /* ===== 6. 退出 ===== */
    b.push(C(402, 1, [5, '退出']));  b.push(C(113, 2));                 // 跳出外层 Loop
    b.push(C(403, 1, [5, null]));    b.push(C(113, 2));                 // 取消键 = 退出
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

    /* 兜底：setupChoices 第一行就是 `t[0].clone()`。这游戏的 Array.prototype.clone
       是运行时某个插件挂上去的，顺序一旦变化，所有选项都会直接抛错（菜单点不开）。 */
    if (!Array.prototype.clone) {
      Array.prototype.clone = function () { return this.slice(0); };
    }

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

    /* ---------- 共享计数器死循环修复（19:30 点妹妹没反应 / 文字残留的根因） ----------
     *
     * 游戏把「计时」写成：
     *     Loop { 等若干帧; If (计数器 == 目标) { 计数器 = 0; 跳出 }; 计数器 += 1 }
     * 而「计数器」用的是**全事件共享**的通用变量（509 / 598 / 825 / 1067 …），
     * 并没有每个循环各用一份。典型冲突：
     *   · CE422「追加妹妹眨眼」（并行事件，立绘在场就一直跑）把 V509 当成自己的
     *     帧计数：每帧 V509 += 1、数到随机值就清零重来 —— 它一直在**改写 V509**；
     *   · 同一时刻 CE245「夜间命令菜单」（点妹妹后调用）也拿 V509 当计时循环的计数器。
     * 两者抢同一个变量，CE245 这一侧的循环就可能被 CE422 清零/越过，永远等不到出循环，
     * 于是 CE245 永久空转。而 CE245 在进入这段等待前**先把开关 10「点击妹妹」关掉**，
     * 循环不结束就永远走不到末尾把它打开 →
     *     · 点妹妹完全没反应（点击判定事件被这个开关关死了）
     *     · 菜单文字/图片走不到 PSM_ERASE_POPUP → 画面留下别的场景的文字
     *     · 进度卡住，怎么点都没用
     * 之前那版把 `==` 放宽成 `>=`，只救得了「计数器被抬高/跳过目标」的情况，
     * 救不了「被别人中途清零」——被清零后 `>=` 也永远成立不了。
     *
     * 修复：不再依赖那个共享变量。给每个「会结束的计时循环」记一份**自己的**迭代次数
     * （进 Loop 时清零，每执行一次 REPEAT 加一），在 If 判定前把共享变量纠正回
     * 「进入循环时的值 + 迭代次数」。这样别的并行事件怎么清零/改写都影响不到本次判定，
     * 循环一定会在「真实迭代了 N 次」时正常走出。
     */
    var WB_META_MAX = 40000;      // 指令数超过这个的事件不分析（避免卡加载）

    function wbBuildLoopMeta(list) {
      var stack = [], loops = [], i, c, p;
      for (i = 0; i < list.length; i++) {
        c = list[i];
        if (!c) continue;
        if (c.code === 112) stack.push(i);
        else if (c.code === 413 && stack.length) loops.push([stack.pop(), i]);
      }
      var meta = { rep: {}, inc: {}, cmp: {}, base: {} };
      var hits = 0;
      for (var li = 0; li < loops.length; li++) {
        var s = loops[li][0], e = loops[li][1];
        var lv = list[s].indent;
        var cands = {}, k;
        for (i = s + 1; i < e; i++) {
          c = list[i]; p = c.parameters || [];
          if (c.code === 122 && p[0] === p[1] && p[3] === 0 &&
              (p[2] === 0 || p[2] === 1 || p[2] === 2)) cands[p[0]] = 1;
        }
        for (k in cands) {
          if (!Object.prototype.hasOwnProperty.call(cands, k)) continue;
          var C = +k, pure = true, incs = [], cmps = [], ifDepth = 0;
          for (i = s + 1; i < e; i++) {
            c = list[i]; p = c.parameters || [];
            var code = c.code;
            /* 只认「纯计时」写法：循环体内对该变量只有 初始化 / 自增 / 与常量比较，
               任何别的读写（拿它当操作数、写进脚本）都说明它可能另有含义 → 不动它 */
            if (code === 111) {
              if (p[0] === 1 && p[1] === C) {
                if (p[4] === 0 && typeof p[3] === 'number' && p[3] > 0) cmps.push(i);
                else pure = false;
              } else if (p[0] === 12 && String(p[1]).indexOf('value(' + C + ')') >= 0) {
                pure = false;
              }
              if (c.indent === lv + 1) ifDepth++;
            } else if (code === 412) {
              if (c.indent === lv + 1 && ifDepth > 0) ifDepth--;
            } else if (code === 122) {
              if (p[0] === C && p[1] === C) {
                if (p[3] !== 0 || (p[2] !== 0 && p[2] !== 1 && p[2] !== 2)) pure = false;
                else if (p[2] === 1 && p[4] === 1 && c.indent === lv + 1 && ifDepth === 0) incs.push(i);
              } else if (p[3] === 1 && p[4] === C) {
                pure = false;
              }
            } else if (code === 355 || code === 655) {
              if (String(p[0]).indexOf('value(' + C + ')') >= 0) pure = false;
            }
          }
          /* 只认「会结束」的计时循环：循环体里必须有 113(跳出循环) 或 115(结束事件)。
             纯动画用的「自循环计数器」没有 113/115（永远重置重数），那种不能动，
             否则会把眨眼/呼吸这类循环的节奏也一起改掉。 */
          var hasExit = false;
          for (i = s + 1; i < e; i++) {
            if (list[i] && (list[i].code === 113 || list[i].code === 115)) { hasExit = true; break; }
          }
          if (!pure || !incs.length || !cmps.length || !hasExit) continue;
          meta.base[s] = C;
          meta.rep[e] = s;
          for (i = 0; i < incs.length; i++) meta.inc[incs[i]] = s;
          for (i = 0; i < cmps.length; i++) meta.cmp[cmps[i]] = { s: s, v: C, t: list[cmps[i]].parameters[3] };
          hits++;
        }
      }
      return hits ? meta : null;
    }

    function wbLoopMeta(list) {
      if (!list || !list.length) return null;
      if (list.__wbLM !== undefined) return list.__wbLM;
      var meta = null;
      if (list.length < WB_META_MAX) {
        try { meta = wbBuildLoopMeta(list); } catch (e) { meta = null; }
      }
      try { list.__wbLM = meta; } catch (e) {}
      return meta;
    }

    // Loop 入口：记下本轮的起始值与迭代数
    var orig112 = P.command112;
    P.command112 = function () {
      try {
        var M = wbLoopMeta(this._list);
        if (M && M.base[this._index] !== undefined) {
          this.__wbIter = this.__wbIter || {};
          this.__wbBase = this.__wbBase || {};
          this.__wbIter[this._index] = 0;
          this.__wbBase[this._index] = (typeof $gameVariables !== 'undefined' && $gameVariables)
            ? ($gameVariables.value(M.base[this._index]) || 0) : 0;
        }
      } catch (e) {}
      return orig112.apply(this, arguments);
    };

    // Repeat：迭代次数 +1（用真实迭代数，不信任被共享的计数器变量）
    var orig413base = P.command413;
    P.command413 = function () {
      try {
        var M = this._list && this._list.__wbLM;
        if (M && M.rep[this._index] !== undefined) {
          var s = M.rep[this._index];
          this.__wbIter = this.__wbIter || {};
          this.__wbIter[s] = (this.__wbIter[s] || 0) + 1;
        }
      } catch (e) {}
      var r = orig413base.apply(this, arguments);
      if (this._index < 0) this._index = 0;      // 缩进损坏时不至于把游标减成负数
      return r;
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

      /* 0.5) 共享计数器「纠正」—— 19:30 卡死真正的修复点
       * 配合上面的 command112 / command413：每个计时循环都记了自己的迭代次数
       * __wbIter[s]（进 Loop 时清零，每跑一次 REPEAT 加一，完全不依赖那个被共享的变量）。
       * 这里在「If (计数 == 目标)」判定之前，把共享变量强制改回
       * 「进入循环时的值(__wbBase[s]) + 迭代次数(__wbIter[s])」。
       * 于是并行事件（CE422 眨眼）每次把 V509 清零、或别处留下残值，都影响不到本次判定：
       * 循环一定会在「真实迭代了 N 次」时通过，绝不会因被清零而饿死。
       * 下面的 `==`→`>=` 放宽仍作兜底：万一残值偏高（从上方越过目标），也能立刻通过。 */
      try {
        var _M = this._list && this._list.__wbLM;
        if (_M && _M.cmp[this._index] !== undefined) {
          var _ci = _M.cmp[this._index];
          var _cs = _ci.s;
          var _base = (this.__wbBase && this.__wbBase[_cs]) || 0;
          var _iter = (this.__wbIter && this.__wbIter[_cs]) || 0;
          if (typeof $gameVariables !== 'undefined' && $gameVariables) {
            $gameVariables.setValue(_ci.v, _base + _iter);
          }
        }
      } catch (e) {}

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

    // 2) 兜底护栏（19:30 卡死真正根因）：单帧内执行指令数超限即让出本帧，
    //    连续空转超过约 2 秒则强制结束该解释器。
    //
    //    旧版只统计「同一指令索引」的重复次数，遇到含 2 条以上指令的循环
    //    （Loop + 等待 + 计数 +=1 + If 计数==N 跳出）会彻底失效——
    //    每轮循环 _index 在多条指令间来回切，单项计数永远到不了阈值，
    //    于是 update() 的 while 在本帧内空转到死，主线程硬冻结、全局点不动。
    //    改成统计「单帧总指令数」后，无论循环体有几条指令都能拦住。
    //
    //    另：旧版把空转计时 __wbSpinF 放在「每帧重置」里，导致跨帧累加永远到不了
    //    阈值、强制结束形同虚设。这里改用「连续空转帧数」累加，跨帧正确累计。
    var origExec = P.executeCommand;
    var WB_EXEC_BUDGET = 8000;    // 单帧最多执行的指令数（正常剧情节奏远小于此；死循环会瞬间打满）
    var WB_SPIN_FRAMES = 120;     // 连续空转这么多帧（约 2 秒 @60fps）后强制结束该解释器
    P.__wbTerminate = function () {
      try {
        if (typeof this.clear === 'function') this.clear();
        this._list = null;
        this._index = 0;
        this._waitMode = '';
        this._waitCount = 0;
        this._childInterpreter = null;
        /* 关键：夜间命令菜单(CE245)开头会把开关 10「点击妹妹」关掉，正常结束时才打开；
           事件被强杀/卡死时这段「打开」永远走不到 → 强杀后妹妹永久点不动、
           而且菜单留下的文字/立绘不会走到擦除逻辑 → 画面残留。
           强杀本来就意味着有死循环在拖，这里兜底把门重新打开并清掉卡住的内容。 */
        try { if (typeof $gameSwitches !== 'undefined' && $gameSwitches) $gameSwitches.setValue(10, 1); } catch (e) {}
        try { if (typeof $gameMessage !== 'undefined' && $gameMessage && $gameMessage.clear) $gameMessage.clear(); } catch (e) {}
        if (typeof window !== 'undefined' && window.__wbNotify) {
          window.__wbNotify('检测到卡死循环，已自动恢复（点击已恢复、残留已清理，无需刷新）');
        }
      } catch (e) {}
    };
    P.executeCommand = function () {
      // 快进（__wbFF）模式引擎本就全速跑剧情：用更高的预算以免误伤长剧情，
      // 但真·死循环仍会在约 2 秒后被强制结束。
      var ff = (typeof window !== 'undefined' && window.__wbFF);
      var fr = (typeof Graphics !== 'undefined' && Graphics.frameCount) || 0;
      if (this.__wbF !== fr) {
        // 新的一帧：根据上一帧是否撞预算来累加「连续空转帧数」，并复位本帧计数
        this.__wbF = fr;
        this.__wbSpinFrames = this.__wbBudgetHit ? (this.__wbSpinFrames || 0) + 1 : 0;
        this.__wbBudgetHit = false;
        this.__wbExecN = 0;
      }
      if (!ff && this.__wbExecN >= WB_EXEC_BUDGET) {
        this.__wbBudgetHit = true;            // 本帧撞预算，记一笔
        if (this.__wbSpinFrames > WB_SPIN_FRAMES) {
          this.__wbSpinFrames = 0;
          this.__wbTerminate();              // 连续空转约 2 秒 → 强制结束，恢复点击
          return false;
        }
        return false;                        // 让出本帧，下一帧继续（主线程不再硬冻结）
      }
      this.__wbExecN = (this.__wbExecN || 0) + 1;
      return origExec.apply(this, arguments);
    };

    // 3) 「Now Loading」遮罩卡死看门狗：遮罩持续显示超过阈值就强制关闭，恢复输入
    //    （资源解码卡住时 _loadingCount 一直 >0、遮罩 opacity=1，会挡住全部点击）
    try {
      if (typeof Graphics !== 'undefined' && Graphics._upperCanvas && !window.__wbLoadWatch) {
        window.__wbLoadWatch = true;
        setInterval(function () {
          try {
            if (!Graphics._upperCanvas) return;
            var op = Graphics._upperCanvas.style.opacity;
            var showing = (op === '1' || op === 1);
            if (showing && Graphics._loadingCount > 0) {
              if (!window.__wbLoadStuck) window.__wbLoadStuck = Date.now();
              else if (Date.now() - window.__wbLoadStuck > 20000) {
                Graphics.endLoading();
                window.__wbLoadStuck = 0;
                if (window.__wbNotify) window.__wbNotify('「Now Loading」遮罩超时，已强制关闭，可继续操作');
              }
            } else {
              window.__wbLoadStuck = 0;
            }
          } catch (e) {}
        }, 1000);
      }
    } catch (e) {}

    // 4) 手动强制恢复：结束所有卡住的解释器 + 关闭遮罩 + 清残留（面板「强制恢复」按钮用）
    window.__wbRecover = function () {
      var freed = 0;
      try {
        if (typeof $gameMap !== 'undefined' && $gameMap) {
          function kill(ip) {
            if (ip && ip.isRunning && ip.isRunning()) {
              if (typeof ip.clear === 'function') ip.clear();
              ip._list = null; ip._waitMode = ''; ip._waitCount = 0; ip._childInterpreter = null;
              freed++;
            }
          }
          kill($gameMap._interpreter);
          if ($gameMap._interpreters) $gameMap._interpreters.forEach(kill);
          if ($gameMap._commonEvents) $gameMap._commonEvents.forEach(kill);
        }
      } catch (e) {}
      try { if (typeof Graphics !== 'undefined' && Graphics.endLoading) Graphics.endLoading(); } catch (e) {}
      try { if (typeof $gameMessage !== 'undefined' && $gameMessage && $gameMessage.clear) $gameMessage.clear(); } catch (e) {}
      /* 把「点击妹妹」的门重新打开：夜间命令菜单卡死时它停在 0，强杀后必须还原，
         否则清完残留、妹妹依然点不动（这正是「还是不行」的关键之一）。 */
      try { if (typeof $gameSwitches !== 'undefined' && $gameSwitches) $gameSwitches.setValue(10, 1); } catch (e) {}
      try { window.__wbCleanup && window.__wbCleanup(); } catch (e) {}
      try { window.__wbClearPics && window.__wbClearPics(); } catch (e) {}
      return freed;
    };

    console.log('[fix] 卡死修复已装载：共享计数器按「每次循环自己的迭代数」纠正(并行事件清零不再饿死定时循环) + 计数器死循环放宽(==→>=) + 输入等待循环每帧只判一次 + 单帧总指令预算护栏(覆盖多指令死循环) + 持续空转强制结束 + 遮罩卡死看门狗 + skipBranch 越界保护 + 数值锁定 + 手动强制恢复');
    return true;
  }

  /* ---------- 快进：跳过剧情演出，同时如实跑完事件逻辑 ----------
   *
   * 为什么不能「直接中断事件」：
   *   剧情事件把「已完成」写在自己的末尾（开开关、改变量、加任务）。
   *   中途 terminate 等于这一整段剧情白跑 —— 任务永远不消失、日期跳了任务还挂着。
   *   所以这里不掐断，而是把「等玩家点」的时间压到 0：事件照跑、标志照设、只是看不见过程。
   *
   * 三个等待来源，逐个压掉：
   *   1) `Game_Interpreter.updateWait()` —— 消息(message) / 计时(_waitCount) / 移动 / 转移 等
   *   2) `$gameMessage` 的选项与数字输入 —— 自动选一项（先 onChoice 设 _branch，再 terminateMessage）
   *   3) `Window_Message` 的逐字渲染与开合动画 —— 快进时直接不渲染，杜绝文字残留
   *
   * 金手指菜单自身豁免：`window.__wbCheatList` 指向 CE100 的 list，
   * 否则开快进后自己的菜单会被自动连点，无法操作。
   */
  function installFastForward() {
    if (typeof Game_Interpreter === 'undefined' ||
        typeof Window_Message === 'undefined' ||
        typeof Game_Message === 'undefined') return false;
    var W = window;
    if (W.__wbFFReady) return true;
    W.__wbFFReady = true;

    W.__wbFF       = W.__wbFF || 0;    // 0 关 / 1 开
    W.__wbFFChoice = W.__wbFFChoice || 0;  // 0 = 自动选第 1 项 / 1 = 自动选最后一项
    W.__wbFFMsg    = 0;        // 累计跳过的对话条数
    W.__wbFFAuto   = 0;        // 1 = 跑完一段后自动关
    W.__wbCheatList = W.__wbCheatList || null;

    /* 绑定金手指事件（CE100）的 list 引用：快进时豁免它，否则自己的菜单会被自动连点。
       注意不能用 patchCheat 里那份 list —— 那是拦截 CommonEvents.json 文本时 parse 出来的
       临时对象，引擎真正用的是后来重新解析的数组，两者不是同一个引用。 */
    function bindCheatList() {
      try {
        var e = W.$dataCommonEvents && W.$dataCommonEvents[100];
        if (e && e.list && e.list.length) { W.__wbCheatList = e.list; return true; }
      } catch (err) {}
      return false;
    }
    (function retryBind(n) {
      if (bindCheatList()) return;
      if (n > 300) return;
      setTimeout(function () { retryBind(n + 1); }, 100);
    })(0);

    /* ---------- 找消息窗口：Scene_Map / Scene_Battle / 任何带 _windowLayer 的场景 ---------- */
    function msgWin() {
      try {
        var sc = SceneManager._scene;
        if (!sc) return null;
        if (sc._messageWindow) return sc._messageWindow;
        var wl = sc._windowLayer;
        if (wl && wl.children) {
          for (var i = 0; i < wl.children.length; i++) {
            var c = wl.children[i];
            if (c && typeof Window_Message !== 'undefined' && c instanceof Window_Message) return c;
          }
        }
      } catch (e) {}
      return null;
    }
    W.__wbMsgWin = msgWin;

    function shutSub(w, key) {
      try {
        var s = w[key];
        if (!s) return;
        if (s.deactivate) s.deactivate();
        if (s.close) s.close();
        s.openness = 0;
        s._opening = false;
        s._closing = false;
      } catch (e) {}
    }

    /* ---------- 清空消息层（这是「文字一直留在页面上」的正解） ----------
     * 只 `$gameMessage.clear()` 不够：字已经画进 Window_Message 的 contents 位图里了，
     * 窗口又停在半开状态，于是黑底上留着一行行文字。
     * 必须同时：断掉 _textState（停止逐字渲染）→ 擦 contents → 关三条子窗口 → 关主窗 → 清数据。
     */
    function purgeMessage(auto) {
      /* 正在等的是金手指自己的选项 —— 一个字节都不许动。
         这条分支是被 Window_Message.update 的兜底撞上的：那里只知道「快进开着」，
         并不知道屏幕上等的是谁的选项。标记由 setupChoices 每次重算，不会残留。 */
      if (W.__wbChoiceIsCheat) return false;
      var g = W.$gameMessage;
      if (g && auto !== false) {
        try {
          if (g.isChoice && g.isChoice()) {
            var n = g.choices().length;
            var pick = W.__wbFFChoice ? n - 1 : 0;
            if (pick < 0) pick = 0;
            if (pick >= n) pick = n - 1;
            g.onChoice(pick);            // 先设 _branch，再清 —— 顺序反了剧情会走错分支
          } else if (g.isNumberInput && g.isNumberInput()) {
            try { W.$gameVariables.setValue(g._numInputVariableId, 0); } catch (e2) {}
          } else if (g.isItemChoice && g.isItemChoice()) {
            try { g.onChoice(0); } catch (e2) {}
          }
        } catch (e) {}
      }
      var w = msgWin();
      if (w) {
        try { w._textState = null; } catch (e) {}
        try { w.pause = false; } catch (e) {}
        try { w._waitCount = 0; } catch (e) {}
        try { w._showFast = false; w._lineShowFast = false; w._pauseSkip = false; } catch (e) {}
        shutSub(w, '_choiceWindow');
        shutSub(w, '_numberWindow');
        shutSub(w, '_itemWindow');
        try { if (w.contents) w.contents.clear(); } catch (e) {}
        try { w.terminateMessage(); } catch (e) {}     // close() + $gameMessage.clear()
        try { w.openness = 0; w._opening = false; w._closing = false; } catch (e) {}
        try {
          var gw = w._goldWindow;
          if (gw) { gw.openness = 0; gw._opening = false; gw._closing = false; }
        } catch (e) {}
      }
      if (g) { try { g.clear(); } catch (e) {} }
      W.__wbFFMsg++;
      return true;
    }
    W.__wbPurgeMessage = purgeMessage;

    /* ---------- 这条解释器该不该被快进 ---------- */
    function skipMe(it) {
      if (!W.__wbFF) return false;
      if (!it || it.__wbNoFF) return false;
      if (W.__wbCheatList && it._list === W.__wbCheatList) return false;   // 金手指菜单豁免
      return true;
    }

    var P = Game_Interpreter.prototype;

    /* 标记「当前等的这一屏选项是不是金手指自己的」。
       每次 setup 都重算，所以不会残留到下一条剧情。 */
    W.__wbChoiceIsCheat = 0;
    function markChoice(it) {
      W.__wbChoiceIsCheat = (W.__wbCheatList && it._list === W.__wbCheatList) ? 1 : 0;
    }
    ['setupChoices', 'setupNumInput', 'setupItemChoice'].forEach(function (k) {
      var o = P[k];
      if (typeof o !== 'function') return;
      P[k] = function () {
        markChoice(this);
        return o.apply(this, arguments);
      };
    });

    /* 剧情文本一出现就解除豁免 —— 金手指菜单里一条 101 都没有，
       所以任何 101 都只可能是剧情，不能因为上一次是菜单就漏清。 */
    var orig101 = P.command101;
    P.command101 = function () {
      W.__wbChoiceIsCheat = 0;
      return orig101.apply(this, arguments);
    };

    /* 1) 等待全部短路：计时归零、消息清掉、其余等待直接放行 */
    var origWait = P.updateWait;
    P.updateWait = function () {
      if (!skipMe(this)) return origWait.apply(this, arguments);
      /* 地图传送必须等完：这一步不结束就继续跑，后面的事件会在错误的地图上执行 */
      if (this._waitMode === 'transfer') return origWait.apply(this, arguments);
      if (this._waitCount > 0) this._waitCount = 0;
      /* 不能只看 _waitMode === 'message'：被中途掐断的剧情会留下「没人认领」的
         文本（_waitMode 已经空了），那正是页面上擦不掉的那几行字。 */
      var gm = W.$gameMessage;
      if (this._waitMode === 'message' || (gm && gm.isBusy && gm.isBusy())) purgeMessage(true);
      this._waitMode = '';
      return false;
    };

    /* 2) 消息窗口在快进期间根本不渲染：断掉逐字状态 + 保持全关
     *    但金手指菜单的选项要正常显示，否则快进一开就看不见菜单了。 */
    var origWMUpdate = Window_Message.prototype.update;
    Window_Message.prototype.update = function () {
      if (W.__wbFF && !W.__wbChoiceIsCheat) {
        this._textState = null;
        this.pause = false;
        this._waitCount = 0;
        if (this.openness > 0) {
          try { if (this.contents) this.contents.clear(); } catch (e) {}
          this.openness = 0;
          this._opening = false;
          this._closing = false;
        }
        try {
          var gw = this._goldWindow;
          if (gw && gw.openness > 0) { gw.openness = 0; gw._opening = false; gw._closing = false; }
        } catch (e) {}
        var g = W.$gameMessage;
        if (g && g.isBusy && g.isBusy()) purgeMessage(true);
        return;
      }
      return origWMUpdate.apply(this, arguments);
    };

    /* ---------- 是否还有剧情在跑 ----------
     * 只看主解释器和消息层。并行事件（眨眼之类）永远在跑，不能算进来。
     * 不在大地图（战斗 / 菜单 / 载入）时一律视为「还没结束」。
     */
    function busy() {
      try {
        var g = W.$gameMessage;
        if (g && g.isBusy && g.isBusy()) return true;
        var sc = SceneManager._scene;
        var isMap = !!(sc && typeof Scene_Map !== 'undefined' && sc instanceof Scene_Map);
        if (!isMap) return true;
        var it = W.$gameMap && W.$gameMap._interpreter;
        if (it && it.isRunning()) return true;
        if (W.$gameTemp && W.$gameTemp.isCommonEventReserved && W.$gameTemp.isCommonEventReserved()) return true;
      } catch (e) {}
      return false;
    }
    W.__wbBusy = busy;

    /* ---------- 战斗里自动「攻击」：不这么做快进会卡在指令选择 ----------
     * 只按第一项（Attack）→ 第一个敌人，够用来过掉剧情战。
     */
    function autoBattle() {
      try {
        var sc = SceneManager._scene;
        if (!sc || typeof Scene_Battle === 'undefined' || !(sc instanceof Scene_Battle)) return false;
        if (!W.BattleManager || !W.BattleManager.isInputting || !W.BattleManager.isInputting()) return false;
        if (W.BattleManager.isBusy && W.BattleManager.isBusy()) return false;
        var w = sc._actorCommandWindow;
        if (w && w.active && w.maxItems && w.maxItems() > 0) { w.select(0); w.processOk(); return true; }
        var e = sc._enemyWindow;
        if (e && e.active && e.maxItems && e.maxItems() > 0) { e.select(0); e.processOk(); return true; }
        var a = sc._actorWindow;
        if (a && a.active && a.maxItems && a.maxItems() > 0) { a.select(0); a.processOk(); return true; }
      } catch (err) {}
      return false;
    }

    /* ---------- 开关 ---------- */
    W.__wbFFSet = function (on) {
      W.__wbFF = on ? 1 : 0;
      if (!on) { try { if (W.__wbCleanup) W.__wbCleanup(); } catch (e) {} }
      try { if (W.__wbFFBadge) W.__wbFFBadge(); } catch (e) {}
      return W.__wbFF;
    };

    /* ---------- 「跳过本段」：开快进 → 一直跑到没有剧情 → 自动关 + 清理 ---------- */
    W.__wbFFRun = function (maxMs) {
      W.__wbFF = 1;
      W.__wbFFMsg = 0;
      W.__wbFFAuto = 1;
      var t0 = Date.now();
      function stop(msg) {
        W.__wbFF = 0;
        W.__wbFFAuto = 0;
        try { if (W.__wbCleanup) W.__wbCleanup(); } catch (e) {}
        try { if (W.__wbFFBadge) W.__wbFFBadge(); } catch (e) {}
        try { if (W.__wbNotify) W.__wbNotify(msg); } catch (e) {}
      }
      var iv = setInterval(function () {
        if (!W.__wbFF) { clearInterval(iv); return; }
        try { autoBattle(); } catch (e) {}
        if (!busy()) { clearInterval(iv); stop('已跳过本段剧情'); return; }
        if (maxMs && Date.now() - t0 > maxMs) {
          clearInterval(iv);
          stop('超过时限，已停止快进');
        }
      }, 80);
      return true;
    };

    /* ---------- 清理残留：不动剧情，只把画面上的字与图片收干净 ---------- */
    W.__wbRefreshScene = function () {
      /* 让当前地图/场景立刻重绘：清掉卡住的图片后调用，合法的背景与立绘会被恢复 */
      try { if (W.$gameMap && W.$gameMap.requestRefresh) W.$gameMap.requestRefresh(); } catch (e) {}
      try {
        var sc = SceneManager._scene;
        if (sc) {
          if (sc.refresh) sc.refresh();
          if (sc._spriteset && sc._spriteset.refresh) sc._spriteset.refresh();
        }
      } catch (e) {}
    };
    W.__wbCleanup = function () {
      var g = W.$gameMessage;
      try { if (g) g.clear(); } catch (e) {}
      var w = msgWin();
      if (w) {
        try { w._textState = null; } catch (e) {}
        try { w.pause = false; } catch (e) {}
        try { w._waitCount = 0; } catch (e) {}
        try { if (w.contents) w.contents.clear(); } catch (e) {}
        shutSub(w, '_choiceWindow');
        shutSub(w, '_numberWindow');
        shutSub(w, '_itemWindow');
        try { w.openness = 0; w._opening = false; w._closing = false; } catch (e) {}
        try { if (w._goldWindow) w._goldWindow.openness = 0; } catch (e) {}
      }
      try {
        var it = W.$gameMap && W.$gameMap._interpreter;
        if (it && it._waitMode === 'message') it._waitMode = '';
        var ch = it && it._childInterpreter;
        if (ch && ch._waitMode === 'message') ch._waitMode = '';
      } catch (e) {}
      /* 残留的“剧情文字/立绘”多半是用 Show Picture 画出来的：清掉图片并立即重绘，
         合法的背景与立绘会被恢复，只留下真正卡住的那张被清掉 */
      try { if (W.$gameScreen) W.$gameScreen.clearPictures(); } catch (e) {}
      try { W.__wbRefreshScene(); } catch (e) {}
      return true;
    };

    /* ---------- 清掉屏幕上多余的立绘 / 图片（残留头像是这个原因） ---------- */
    W.__wbClearPics = function () {
      /* 清掉所有图片（含卡住的立绘/文字图），再让当前地图立即重绘，
         背景与合法立绘会被恢复，避免清成黑屏 */
      try { if (W.$gameScreen) W.$gameScreen.clearPictures(); } catch (e) {}
      try { W.__wbRefreshScene(); } catch (e) {}
      return true;
    };

    console.log('[ff] 快进已就绪（对话 / 选项 / 计时 / 战斗指令）');
    return true;
  }

  function injectWatchdog() {
    try {
      if (document.getElementById('wb-watchdog')) return;
      var s = document.createElement('script');
      s.id = 'wb-watchdog';
      s.textContent = '(' + installEngineFix.toString() + ')();(' + installFastForward.toString() + ')();';
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
        '#wb-pop .tip{margin-top:7px;font-size:11px;color:#9e9e9e;min-height:15px;line-height:1.4}',
        '#wb-pop{max-height:78vh;overflow-y:auto;-webkit-overflow-scrolling:touch}',
        '#wb-pop .sec{margin:10px 0 7px;font-size:11px;color:#9e9e9e;letter-spacing:.5px}',
        '#wb-pop .sec:first-of-type{margin-top:2px}',
        '#wb-pop button.on{background:#d32f2f}',
        '#wb-pop button.on:active{background:#e53935}'
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
        '<div class="sec">\u5267\u60c5</div>' +
        '<div class="row"><button id="wb-skip">\u8df3\u8fc7\u672c\u6bb5\u5267\u60c5</button>' +
        '<button id="wb-ff" class="ghost">\u5feb\u8fdb\uff1a\u5173</button></div>' +
        '<div class="row"><button id="wb-clr" class="ghost">\u6e05\u7406\u6b8b\u7559</button>' +
        '<button id="wb-pic" class="ghost">\u6e05\u7acb\u7ed8</button></div>' +
        '<div class="row"><button id="wb-opt" class="ghost">\u9009\u9879\uff1a\u7b2c 1 \u9879</button></div>' +
        '<div class="row"><button id="wb-rec" class="ghost">\u5f3a\u5236\u6062\u590d\uff08\u5361\u6b7b\u65f6\u7528\uff09</button></div>' +
        '<div class="sec">\u6570\u503c\u9501\u5b9a</div>' +
        '<label><input type="checkbox" data-v="14">\u884c\u52a8\u529b\u4e0d\u51cf</label>' +
        '<label><input type="checkbox" data-v="16">\u7cbe\u529b\u4e0d\u51cf</label>' +
        '<label><input type="checkbox" data-v="7">\u91d1\u94b1\u4e0d\u51cf</label>' +
        '<div class="sec">\u5b58\u6863</div>' +
        '<div class="row"><button id="wb-exp">\u5bfc\u51fa\u5b58\u6863</button>' +
        '<button id="wb-imp" class="ghost">\u5bfc\u5165\u5b58\u6863</button></div>' +
        '<textarea id="wb-txt" rows="3" placeholder="\u5bfc\u51fa\u540e\u8fd9\u91cc\u4f1a\u51fa\u73b0\u4e00\u4e32\u4ee3\u7801\uff0c\u590d\u5236\u4fdd\u5b58\uff1b\u8981\u6062\u590d\u65f6\u7c98\u8d34\u56de\u6765\u518d\u70b9\u5bfc\u5165"></textarea>' +
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

      /* ---------- 剧情：快进 / 跳过本段 / 清理残留 ---------- */
      var ffBtn = pop.querySelector('#wb-ff');
      var optBtn = pop.querySelector('#wb-opt');
      window.__wbLock = window.__wbLock || {};
      window.__wbFFChoice = window.__wbFFChoice || 0;

      // 让引擎那边能把状态同步到面板（快进自动停止时也会走到这里）
      window.__wbFFBadge = function () {
        var on = !!window.__wbFF;
        try {
          fab.style.background = on ? 'rgba(211,47,47,.92)' : 'rgba(126,87,194,.55)';
          fab.style.borderColor = on ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.35)';
          fab.textContent = on ? '\u23e9' : '\u2699';
          ffBtn.textContent = on ? '\u5feb\u8fdb\uff1a\u5f00' : '\u5feb\u8fdb\uff1a\u5173';
          if (on) ffBtn.classList.add('on'); else ffBtn.classList.remove('on');
        } catch (e) {}
      };
      window.__wbNotify = function (m) { try { say(m); } catch (e) {} };

      function needFF() {
        if (typeof window.__wbFFRun === 'function') return true;
        say('\u5f15\u64ce\u8fd8\u6ca1\u5c31\u7eea\uff0c\u7b49\u6e38\u620f\u8fdb\u5230\u5927\u5730\u56fe\u518d\u8bd5');
        return false;
      }

      ffBtn.addEventListener('click', function () {
        if (!needFF()) return;
        window.__wbFFSet(!window.__wbFF);
        say(window.__wbFF
          ? '\u5feb\u8fdb\u4e2d\u2014\u2014\u5bf9\u8bdd\u3001\u9009\u9879\u3001\u7b49\u5f85\u5168\u90e8\u81ea\u52a8\u8df3\u8fc7\uff0c\u5267\u60c5\u5185\u5bb9\u7167\u6837\u6267\u884c'
          : '\u5df2\u5173\u95ed\u5feb\u8fdb');
      });

      pop.querySelector('#wb-skip').addEventListener('click', function () {
        if (!needFF()) return;
        window.__wbFFRun(180000);
        say('\u6b63\u5728\u8df3\u8fc7\u672c\u6bb5\u5267\u60c5\u2026\u8dd1\u5b8c\u4f1a\u81ea\u52a8\u505c');
      });

      pop.querySelector('#wb-clr').addEventListener('click', function () {
        if (typeof window.__wbCleanup !== 'function') { say('\u5f15\u64ce\u8fd8\u6ca1\u5c31\u7eea'); return; }
        window.__wbCleanup();
        say('\u5df2\u6e05\u7406\u6b8b\u7559\u6587\u5b57\u4e0e\u7acb\u7ed8\uff0c\u5e76\u5237\u65b0\u753b\u9762');
      });

      pop.querySelector('#wb-pic').addEventListener('click', function () {
        if (typeof window.__wbClearPics !== 'function') { say('\u5f15\u64ce\u8fd8\u6ca1\u5c31\u7eea'); return; }
        window.__wbClearPics();
        say('\u5df2\u6e05\u6389\u5c4f\u5e55\u4e0a\u7684\u7acb\u7ed8/\u56fe\u7247\uff0c\u5e76\u5237\u65b0\u753b\u9762\uff08\u80cc\u666f\u4f1a\u6062\u590d\uff09\u5982\u679c\u628a UI \u56fe\u4e5f\u6e05\u4e86\uff0c\u5207\u6362\u4e00\u6b21\u5730\u56fe\u5c31\u6062\u590d');
      });

      optBtn.addEventListener('click', function () {
        window.__wbFFChoice = window.__wbFFChoice ? 0 : 1;
        optBtn.textContent = window.__wbFFChoice
          ? '\u9009\u9879\uff1a\u6700\u540e 1 \u9879'
          : '\u9009\u9879\uff1a\u7b2c 1 \u9879';
        say(window.__wbFFChoice
          ? '\u5267\u60c5\u9009\u9879\u5c06\u81ea\u52a8\u9009\u6700\u540e\u4e00\u9879\uff08\u901a\u5e38\u662f\u300c\u79bb\u5f00 / \u53d6\u6d88\u300d\uff09'
          : '\u5267\u60c5\u9009\u9879\u5c06\u81ea\u52a8\u9009\u7b2c\u4e00\u9879\uff08\u901a\u5e38\u662f\u300c\u7ee7\u7eed\u300d\uff09');
      });

      if (window.__wbFFChoice) optBtn.textContent = '\u9009\u9879\uff1a\u6700\u540e 1 \u9879';
      window.__wbFFBadge();

      // 强制恢复：结束所有卡住的事件解释器 + 关闭遮罩 + 清残留，无需刷新页面
      pop.querySelector('#wb-rec').addEventListener('click', function () {
        if (typeof window.__wbRecover !== 'function') { say('\u5f15\u64ce\u8fd8\u6ca1\u5c31\u7eea'); return; }
        var n = window.__wbRecover();
        say('\u5df2\u5f3a\u5236\u6062\u590d ' + n + ' \u4e2a\u5361\u4f4f\u7684\u4e8b\u4ef6\uff0c\u53ef\u7ee7\u7eed\u64cd\u4f5c\uff08\u65e0\u9700\u5237\u65b0\uff09');
      });

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
    try {
      var a = installEngineFix();
      var b = installFastForward();
      if (a && b) clearInterval(wt);
    } catch (e) { clearInterval(wt); }
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
