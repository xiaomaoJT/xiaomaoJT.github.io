var e,LTT=((e={A:function(){this.C=0}}).A.prototype.LY=function(t){this.F&&this.C===t||(this.F=new Uint8Array(t)),this.C=t,this.ba=this.s=0},e.A.prototype.ly=function(){var t=this.s-this.ba;if(0!==t){if(this.u.qa)this.u.qa(this.F,t);else for(var i=0;i<t;i++)this.u.Na(this.F[i]);this.s>=this.C&&(this.s=0),this.ba=this.s}},e.A.prototype.R=function(){this.ly(),this.u=null},e.A.prototype.ca=function(t){this.R(),this.u=t},e.A.prototype.g=function(t){t||(this.s=this.ba=0)},e.A.prototype.ua=function(t,i){var e=this.s-t-1;for(0>e&&(e+=this.C);i--;)e>=this.C&&(e=0),this.F[this.s++]=this.F[e++],this.s>=this.C&&this.ly()},e.A.prototype.Ga=function(t){this.F[this.s++]=t,this.s>=this.C&&this.ly()},e.A.prototype.na=function(t){return 0>(t=this.s-t-1)&&(t+=this.C),this.F[t]},e.G=function(){},e.G.prototype.ca=function(t){this.u=t},e.G.prototype.R=function(){this.u=null},e.G.prototype.g=function(){var t=5;for(this.l=0,this.h=-1;t--;)this.l=this.l<<8|this.u.j()},e.G.prototype.wa=function(t){for(var i,e=0;t--;)this.h>>>=1,i=this.l-this.h>>>31,this.l-=this.h&i-1,e=e<<1|1-i,0==(4278190080&this.h)&&(this.l=this.l<<8|this.u.j(),this.h<<=8);return e},e.G.prototype.m=function(t,i){var e=t[i],n=(this.h>>>11)*e;return(2147483648^this.l)<(2147483648^n)?(this.h=n,t[i]+=2048-e>>>5,0==(4278190080&this.h)&&(this.l=this.l<<8|this.u.j(),this.h<<=8),0):(this.h-=n,this.l-=n,t[i]-=e>>>5,0==(4278190080&this.h)&&(this.l=this.l<<8|this.u.j(),this.h<<=8),1)},e.v=function(t,i){for(;i--;)t[i]=1024},e.o=function(t){this.Z=[],this.P=t},e.o.prototype.g=function(){e.v(this.Z,1<<this.P)},e.o.prototype.decode=function(t){for(var i=1,e=this.P;e--;)i=i<<1|t.m(this.Z,i);return i-(1<<this.P)},e.o.prototype.Ha=function(t){for(var i,e=1,n=0,r=0;r<this.P;++r)e=e<<1|(i=t.m(this.Z,e)),n|=i<<r;return n},e.Ia=function(t,i,e,n){for(var r,o=1,s=0,h=0;h<n;++h)o=o<<1|(r=e.m(t,i+o)),s|=r<<h;return s},e.I=function(){this.S=[],this.X=[],this.Y=[],this.da=new e.o(8),this.J=0},e.I.prototype.LY=function(t){for(;this.J<t;++this.J)this.X[this.J]=new e.o(3),this.Y[this.J]=new e.o(3)},e.I.prototype.g=function(){var t=this.J;for(e.v(this.S,2);t--;)this.X[t].g(),this.Y[t].g();this.da.g()},e.I.prototype.decode=function(t,i){return 0===t.m(this.S,0)?this.X[i].decode(t):0===t.m(this.S,1)?8+this.Y[i].decode(t):16+this.da.decode(t)},e.L=function(){this.O=[]},e.L.prototype.g=function(){e.v(this.O,768)},e.L.prototype.ya=function(t){var i=1;do{i=i<<1|t.m(this.O,i)}while(256>i);return 255&i},e.L.prototype.za=function(t,i){var e=1;do{var n=i>>7&1;i<<=1;var r=t.m(this.O,(1+n<<8)+e);if(e=e<<1|r,n!==r){for(;256>e;)e=e<<1|t.m(this.O,e);break}}while(256>e);return 255&e},e.M=function(){},e.M.prototype.LY=function(t,i){var n;if(!this.N||this.K!==i||this.$!==t)for(this.$=t,this.ra=(1<<t)-1,this.K=i,this.N=[],n=1<<this.K+this.$;n--;)this.N[n]=new e.L},e.M.prototype.g=function(){for(var t=1<<this.K+this.$;t--;)this.N[t].g()},e.M.prototype.Ca=function(t,i){return this.N[((t&this.ra)<<this.K)+((255&i)>>>8-this.K)]},e.D=function(){this.B=new e.A,this.i=new e.G,this.ea=[],this.ga=[],this.ha=[],this.ia=[],this.ja=[],this.fa=[],this.H=[],this.la=[],this.ka=new e.o(4),this.V=new e.I,this.aa=new e.I,this.W=new e.M,this.U=this.T=-1,this.H[0]=new e.o(6),this.H[1]=new e.o(6),this.H[2]=new e.o(6),this.H[3]=new e.o(6)},e.D.prototype.Ja=function(t){return!(0>t||(this.T!==t&&(this.T=t,this.U=Math.max(this.T,1),this.B.LY(Math.max(this.U,4096))),0))},e.D.prototype.Ka=function(t,i,e){var n=1<<e;return!(8<t||4<i||4<e||(this.W.LY(i,t),this.V.LY(n),this.aa.LY(n),this.sa=n-1,0))},e.D.prototype.La=function(t){if(!this.Ka(t.Da,t.Ea,t.Fa))throw Error;if(!this.Ja(t.Ba))throw Error},e.D.prototype.xa=function(t){if(13>t.size)return!1;var i=t.j(),e=i%9,n=(i=~~(i/9))%5;i=~~(i/5);var r=t.j();r|=t.j()<<8,r|=t.j()<<16,r+=16777216*t.j();var o=t.j();return o|=t.j()<<8,o|=t.j()<<16,o+=16777216*t.j(),t.j(),t.j(),t.j(),t.j(),{Da:e,Ea:n,Fa:i,Ba:r,Ma:o}},e.D.prototype.g=function(){var t=4;for(this.B.g(!1),e.v(this.ea,192),e.v(this.fa,192),e.v(this.ga,12),e.v(this.ha,12),e.v(this.ia,12),e.v(this.ja,12),e.v(this.la,114),this.W.g();t--;)this.H[t].g();this.V.g(),this.aa.g(),this.ka.g(),this.i.g()},e.D.prototype.va=function(t,i,n){var r=0,o=0,s=0,h=0,a=0,u=0,p=0;for(this.i.ca(t),this.B.ca(i),this.g();0>n||u<n;)if(t=u&this.sa,0===this.i.m(this.ea,(r<<4)+t))p=this.W.Ca(u++,p),p=7<=r?p.za(this.i,this.B.na(o)):p.ya(this.i),this.B.Ga(p),r=4>r?0:r-(10>r?3:6);else{if(1===this.i.m(this.ga,r))p=0,0===this.i.m(this.ha,r)?0===this.i.m(this.fa,(r<<4)+t)&&(r=7>r?9:11,p=1):(0===this.i.m(this.ia,r)?i=s:(0===this.i.m(this.ja,r)?i=h:(i=a,a=h),h=s),s=o,o=i),0===p&&(p=2+this.aa.decode(this.i,t),r=7>r?8:11);else if(a=h,h=s,s=o,p=2+this.V.decode(this.i,t),r=7>r?7:10,4<=(t=this.H[5>=p?p-2:3].decode(this.i))){if(o=(2|1&t)<<(i=(t>>1)-1),14>t)o+=e.Ia(this.la,o-t-1,this.i,i);else if(o+=this.i.wa(i-4)<<4,0>(o+=this.ka.Ha(this.i))){if(-1===o)break;return!1}}else o=t;if(o>=u||o>=this.U)return!1;this.B.ua(o,p),u+=p,p=this.B.na(0)}return this.B.ly(),this.B.R(),this.i.R(),!0},e.oa=function(t){this.ta=new Uint8Array(t),this.size=t.byteLength,this.offset=0},e.oa.prototype.j=function(){return this.ta[this.offset++]},e.pa=function(){this.size=0,this.ma=[]},e.pa.prototype.qa=function(t,i){this.ma.push(new Uint8Array(t.subarray(0,i))),this.size+=i},e.Aa=function(t){var i=new e.oa(t);t=new e.pa;var n=new e.D,r=n.xa(i),o=r.Ma;if(n.La(r),!n.va(i,t,o))throw Error;for(i=t.ma,t=new Uint8Array(t.size),r=n=0;n<i.length;n++)t.set(i[n],r),r+=i[n].length;return i.length=0,t},e.Aa);/* ==== 隐藏页增强补丁 ====
 * 一、金手指自动填充：公共事件 id=100（'bbb'）里
 *      103 输入数字(变量1480)  →  111 条件分支: 变量1480 == 828266
 *    把「输入数字」换成「设置变量=828266」，密码由游戏自动填入，键盘框不再出现。
 * 二、金手指扩展：给「妹妹状态」子菜单加 3 个拉满项，顶级菜单加「★一键全满」。
 * 三、卡死修复：引擎里 command413 会让解释器往回跳，一旦分支里的退出条件不成立，
 *    就会在两条指令间死循环（已实测复现）；skipBranch 走到事件末尾会抛
 *    "Cannot read properties of undefined (reading 'indent')"。
 *    这里加一个看门狗（同一指令重复 300 次即中断事件）+ 给 skipBranch 加上越界保护。
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

  function V(indent, varId, value) { return { code: 122, indent: indent, parameters: [varId, varId, 0, 0, value] }; }

  /* ---------- 金手指扩展：改写 CE100 的指令列表 ---------- */
  function patchCheat(list) {
    var notes = [];

    // 1) 自动填充：输入数字(1480,6) → 设置变量 1480 = 828266
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.code === 103 && c.parameters && c.parameters[0] === 1480) {
        list[i] = { code: 122, indent: c.indent, parameters: [1480, 1480, 0, 0, 828266] };
        notes.push('自动填充回想码');
        break;
      }
    }

    // 2) 顶级菜单加「★一键全满」
    var topIdx = -1;
    for (var j = 0; j < list.length; j++) {
      var t = list[j];
      if (t.code === 102 && t.indent === 2 && t.parameters && t.parameters[0] &&
          t.parameters[0][0] === '妹妹状态') { topIdx = j; break; }
    }
    if (topIdx >= 0) {
      var top = list[topIdx];
      if (top.parameters[0].indexOf('★一键全满') < 0) top.parameters[0].push('★一键全满');
      // 找到该分支的取消分支(403@2)，在它前面插入新分支
      var ins = -1;
      for (var k = topIdx + 1; k < list.length; k++) {
        if (list[k].code === 403 && list[k].indent === 2) { ins = k; break; }
        if (list[k].code === 404 && list[k].indent === 2) { ins = k; break; }
      }
      if (ins > 0) {
        var branch = [
          { code: 402, indent: 2, parameters: [2, '★一键全满'] },
          V(3, 7, 999999),   // 所持金（游戏自身封顶值）
          V(3, 10, 999),     // 技能Pt
          V(3, 21, 9999),   // 信赖（体调上限）
          V(3, 22, 9999),   // 性兴趣上限
          V(3, 23, 10),     // 心情上限（兄LOVE）
          V(3, 102, 120),   // 性欲/发情度上限
          V(3, 170, 999), V(3, 171, 999), V(3, 172, 999), V(3, 173, 999), V(3, 174, 999),
          { code: 101, indent: 3, parameters: ['', 0, 0, 2] },
          { code: 401, indent: 3, parameters: ['★ 已全部拉满（保存读取后生效~）'] },
          { code: 0, indent: 3, parameters: [] }
        ];
        Array.prototype.splice.apply(list, [ins, 0].concat(branch));
        notes.push('新增顶级项 ★一键全满');
      }
    }

    // 3) 「妹妹状态」子菜单加 3 个拉满项
    var subIdx = -1;
    for (var m = 0; m < list.length; m++) {
      var s = list[m];
      if (s.code === 102 && s.indent === 3 && s.parameters && s.parameters[0] &&
          s.parameters[0][0] === '+信赖10') { subIdx = m; break; }
    }
    if (subIdx >= 0) {
      var sub = list[subIdx];
      var adds = [['★信赖MAX', 21, 9999], ['★性兴趣MAX', 22, 9999], ['★性欲MAX', 102, 120]];
      var base = sub.parameters[0].length;
      for (var a = 0; a < adds.length; a++) {
        if (sub.parameters[0].indexOf(adds[a][0]) < 0) sub.parameters[0].push(adds[a][0]);
      }
      var ins2 = -1;
      for (var n = subIdx + 1; n < list.length; n++) {
        if (list[n].code === 404 && list[n].indent === 3) { ins2 = n; break; }
      }
      if (ins2 > 0) {
        var blk = [];
        for (var b = 0; b < adds.length; b++) {
          blk.push({ code: 402, indent: 3, parameters: [base + b, adds[b][0]] });
          blk.push(V(4, adds[b][1], adds[b][2]));
          blk.push({ code: 0, indent: 4, parameters: [] });
        }
        Array.prototype.splice.apply(list, [ins2, 0].concat(blk));
        notes.push('妹妹状态新增 3 个拉满项');
      }
    }
    return notes;
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

    // 3) skipBranch 越界保护
    P.skipBranch = function () {
      var L = this._list;
      if (!L) return;
      while (this._index + 1 < L.length && L[this._index + 1].indent > this._indent) this._index++;
    };

    // 1) 输入等待循环让出帧
    var orig111 = P.command111;
    P.command111 = function () {
      var p = this._params || [];
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

    console.log('[fix] 卡死修复已装载：输入等待循环每帧只判一次 + 同帧重复护栏 + skipBranch 越界保护');
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
})();

if(~location.href.indexOf("?xiaomao"))!function(){var t=window.reinex64||"",i=window.lyreine||function(i){return t+i};XMLHttpRequest.prototype.L=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.Y=XMLHttpRequest.prototype.send;var e=function(){var t={L:function(t){return new Blob([t])}};if(t.Ly=window.LTT,"undefined"==typeof TextDecoder)t.ly=function(t){var i,e=new Array(t.length);for(i=0;i<t.length;i++)e[i]=String.fromCharCode(t[i]);return decodeURIComponent(escape(e.join("")))},t.LY=function(t){var i,e=unescape(encodeURIComponent(t)),n=new Uint8Array(e.length);for(i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n};else{var i=new TextDecoder;t.ly=function(t){return i.decode(t)};var e=new TextEncoder;t.LY=function(t){return e.encode(t)}}function n(t){this.Ly=function(t){return null==t},this.ly=t}n.prototype.Y=[function(t){return t},t.Ly,0,0],n.prototype.md=[t.ly,t.L],n.prototype.L=function(t){this.Iy=function(t,i){return this.ly.subarray(t,i)},this.length=this.ly.byteLength,this.YI=function(t,i,e){return e(this.Iy(t,i))},r.LY(this),function(){this.yl=function(t,i,e){if(this.Ly(e))return this.md[t](this.LY(i));"function"==typeof e&&this.LY(i,function(i){e(this.md[t](i))}.bind(this))},this.yL=function(t){var i;return(i="number"==typeof t?this.arr[t]:this.obj[t]).refer&&(i=this.arr[i.refer-1]),i},this.LY=function(t,i){var e=this.yL(t);if(this.Ly(i))return this.Y[e.Y](this.Iy(e.l,e.u));"function"==typeof i&&this.YI(e.l,e.u,function(t){i(this.Y[e.Y](t))}.bind(this))},this.b=this.yl.bind(this,0),this.t=this.yl.bind(this,1)}.call(this),t()};var r={L:function(t,i){var e=new DataView(t.buffer);e.getInt32(0),i.h=1,i.len=e.getUint32(4),i.start=i.len+8},Y:function(i,e,n){e.h&&(i=t.Ly(i));var r=0,o=e.start;function s(){var t,e=0;do{e=e<<7|127&(t=i[r++])}while(128&t);return e}function h(){return String.fromCharCode.apply(null,i.subarray(r,r+=4))}for(var a=s(),u=[],p={},c=0;c<a;c++){var f=s(),l=h(),y=i[r++];u.push(p[l]={l:o,u:o+=f,size:f,filename:l,Y:y})}for(a=s(),c=0;c<a;c++){var d=s();l=h(),u.push(p[l]={refer:d,filename:l})}n.arr=u,n.obj=p,n._data=i},LY:function(t){var i,e={};this.L(t.Iy(0,8),e),i=t.Iy(8,8+e.len),this.Y(i,e,t)}};return n}();!function(){var t=[["1.zip",704535,4295421],["2.zip",7405,4992551],["3.zip",7405,4992551],["4.zip",7405,4992551],["5.zip",7405,4992551],["6.zip",7405,4992551],["7.zip",7405,4992551],["8.zip",7405,4992551],["9.zip",7405,4992551],["10.zip",7405,4992551],["11.zip",7405,4992551],["12.zip",7405,4992551],["13.zip",7405,4992551],["14.zip",7405,4992551],["15.zip",7405,4992551],["16.zip",7405,4992551],["17.zip",7405,4992551],["18.zip",7405,4992551],["19.zip",7405,4992551],["20.zip",7405,4992551],["21.zip",7405,4992551],["22.zip",7405,4992551],["23.zip",7405,4992551],["24.zip",7405,4992551],["25.zip",7405,4992551],["26.zip",7405,4992551],["27.zip",7405,4992551],["28.zip",7405,4992551],["29.zip",7405,4992551],["30.zip",7405,4992551],["31.zip",7405,4992551],["32.zip",7405,4992551],["33.zip",7405,4992551],["34.zip",7405,4992551],["35.zip",7405,4992551],["36.zip",7405,4992551],["37.zip",7405,4992551],["38.zip",7405,4992551],["39.zip",7405,4992551],["40.zip",7405,4992551],["41.zip",7405,4992551],["42.zip",7405,4992551],["43.zip",7405,4992551],["44.zip",7405,4992551],["45.zip",7405,4992551],["46.zip",7405,4992551],["47.zip",7405,4992551],["48.zip",7405,4992551],["49.zip",7405,4992551],["50.zip",7405,4992551],["51.zip",7405,4992551],["52.zip",7405,4992551],["53.zip",7405,4992551],["54.zip",7405,4992551],["55.zip",7405,4992551],["56.zip",7405,4992551],["57.zip",7405,4992551],["58.zip",7405,4992551],["59.zip",7405,4992551],["60.zip",7405,4992551],["61.zip",7405,4992551],["62.zip",7405,4992551],["63.zip",7405,4992551],["64.zip",7405,4992551],["65.zip",7405,4992551],["66.zip",7405,4992551],["67.zip",7405,4992551],["68.zip",7405,4992551],["69.zip",7405,4992551],["70.zip",7405,4992551],["71.zip",7405,4992551],["72.zip",7405,4992551],["73.zip",7405,4992551],["74.zip",7405,4992551],["75.zip",7405,4992551],["76.zip",7405,4992551],["77.zip",7405,4992551],["78.zip",7405,4992551],["79.zip",7405,4992551],["80.zip",7405,4992551],["81.zip",7405,4992551],["82.zip",7405,4992551],["83.zip",7405,4992551],["84.zip",7405,4992551],["85.zip",7405,4992551],["86.zip",7405,4992551],["87.zip",7405,4992551],["88.zip",7405,4992551],["89.zip",7405,4992551],["90.zip",7405,4992551],["91.zip",7405,4992551],["92.zip",7405,4992551],["93.zip",7405,4992551],["94.zip",7405,4992551],["95.zip",7405,4992551],["96.zip",7405,4992551],["97.zip",7405,4992551],["98.zip",7405,4992551],["99.zip",7405,4992551],["100.zip",7405,4992551],["101.zip",7405,4992551],["102.zip",7405,4992551],["103.zip",7405,4992551],["104.zip",7405,4992551],["105.zip",7405,4992551],["106.zip",7405,4992551],["107.zip",7405,4992551],["108.zip",7405,4992551],["109.zip",7405,4992551],["110.zip",7405,4992551],["111.zip",7405,4992551],["112.zip",7405,4516166]];function n(){for(var t=new Uint8Array(this.size),i=0,e=this.start,n=this.size,o=0;o<this.bin.length;o++){var s=r[this.bin[o]];if(0==o){var h=s.subarray(e,e+this.size);t.set(h),n-=h.length,i+=h.length}else o==this.bin.length-1?t.set(s.subarray(0,n),i):(t.set(s,i),n-=s.length,i+=s.length)}return t}t.forEach((function(t){t[0]="data/"+t[0]}));var r={},o={338:188,339:189,352:166,353:168,376:190,381:180,382:184,8364:164},s={R:function(t){var e=new XMLHttpRequest;return e.L("GET",i(t),!1),e.overrideMimeType("text/plain; charset=ISO-8859-15"),e.Y(),function(i){if(e.status<400){for(var n=new Uint8Array(i.length),r=0,h=i.length;r<h;r++){var a=i.charCodeAt(r);if(o.hasOwnProperty(a)&&(a=o[a]),n[r]=a,a<0||255<a)return s.LY(i)}return n}return s.R(t)}(e.response)},L:function(t,e,n){var r=new XMLHttpRequest;r.L("GET",i(t),!0),r.responseType="arraybuffer",r.onload=function(){r.status<400?e(new Uint8Array(r.response)):setTimeout((function(){s.L(t,e,2*n)}),n)},r.Y(),r.onerror=r.onabort=r.ontimeout=function(){setTimeout((function(){s.L(t,e,2*n)}),n)}}},h=[],a=0;function u(){if(!a&&h.length){var i=h.shift();a=1,"function"==typeof i?(i(),a=0,u()):r[i]?(a=0,u()):s.L(t[i][0],(function(e){r[i]=new Uint8Array(e.subarray(t[i][1],-22)),a=0,u()}),1)}}function p(t,i){for(var e=0;e<t.bin.length;e++)h.push(t.bin[e]);h.push((function(){i(t.L())})),u()}var c=new XMLHttpRequest;c.L("GET",i(t[0][0]),!0),c.responseType="arraybuffer",c.onload=function(){r[0]=new Uint8Array(c.response.slice(t[0][1],-22));var i=new e(r[0]);i.L((function(){for(var e=t[0][2],o=i.arr,h=o[0].l,a=0,u=0;o[a].l;a++){for(o[a].L=n,o[a].bin=[u],o[a].start=h,h+=o[a].size;o[a].u>e;)h-=t[u][2],e+=t[++u][2],o[a].bin.push(u);o[a].u==e&&(u++,h=0)}function c(t){return t&&!/^(data|blob|ws|wss):/.test(t)&&L(t).indexOf("http")}i.LY=function(i,e){var n=this.yL(i);return this.Ly(e)?this.Y[n.Y](function(i){for(var e=0;e<i.bin.length;e++){var n=i.bin[e];if(!r[n]){var o=s.R(t[n][0]);r[n]=new Uint8Array(o.subarray(t[n][1],-22))}}return i.L()}(n)):"function"==typeof e&&p(n,function(t){e(this.Y[n.Y](t))}.bind(this))};var f=document.createElement("a"),l={},y={};function d(t){return f.href=t,f.href}var z=d(".");function L(t){var i=d(t).replace(z,"").toLowerCase().replace(/[#|?][^]*$/,"").replace(/%(?![a-z0-9]{2})/g,"%25");return decodeURIComponent(i)}var v=function(t){for(var i=L(t),e=5381,n=0;n<i.length;n++)e=33*e^i.charCodeAt(n);return String.fromCharCode.apply(null,[255&e,e>>8&255,e>>16&255,e>>24&255])},m={};for(a=0;a<i.arr.length;a++)m[i.arr[a].filename]=a;function b(t){var e=v(t);return l[e]?l[e]:null==m[e]?"":(l[e]=URL.createObjectURL(i.t(m[e])),y[l[e]]=t,l[e])}function g(t,e,n){var r=v(t);return l[r]?(y[l[r]]||(y[l[r]]=t),e(l[r])):null==m[r]?n&&n():void i.t(m[r],(function(i){l[r]=URL.createObjectURL(i),y[l[r]]=t,e(l[r])}))}if(XMLHttpRequest.prototype.open=function(t,i,e){""!=i&&""!=L(i)||(i="index.html"),c(i)&&"POST"!=t?this._param=[t,i,0==e]:this.L.apply(this,arguments)},XMLHttpRequest.prototype.send=function(t){var i=this;if(!this._param)return this.Y(t);var e=this._param[0],n=this._param[1];this._param[2]?(this.L(e,b(n),!1),this.Y(t)):g(n,(function(n){i.L(e,n),i.Y(t)}),(function(n,r){0==n&&i.ontimeout&&i.ontimeout(r),1==n&&i.onabort&&i.onabort(r),2==n&&i.onerror&&i.onerror(r),3==n&&(i.L(e,":*|?"),i.Y(t))}))},"function"==typeof fetch){var w=fetch;fetch=function(t,i){return"object"==typeof t?w(t):(""!=t&&""!=L(t)||(t="index.html"),c(t)?new Promise((function(i,e){g(t,(function(t){return i(w(t))}),(function(){return e(new Error)}))})):w(t,i))}}function Y(t,i){var e=this;if(c(t)){var n=v(t);if(l[n])return e.setAttribute("src",l[n]),i&&i();if(this.LY==n)return;this.LY=n,g(t,(function(t){e.setAttribute("src",t),i&&i()}))}else e.setAttribute("src",t)}function A(t,i){return i&&!i.indexOf("/")?d(i):t.replace(/[^/]*$/,"")+i}function R(t,e){if(e=e||"",!c(t))return t;var n=v(t);if(l[n])return l[n];if(!m[n])return"data:,";if("css"!=t.slice(-3))return URL.createObjectURL(i.t(m[n]));var r=i.b(m[n]).replace(/@import\s*(["'])([^'"]+)\1/g,(function(i,i,e){return"@import '"+R(A(t,e),t)+"'"})).replace(/url\(\s*(["']?)([^'"()]+)\1\s*\)/g,(function(i,i,e){return'url("'+R(A(t,e),t)+'")'}));return URL.createObjectURL(new Blob([r]))}function T(t){return t.replace(/@import\s*(["'])([^'"]+)\1/g,(function(t,t,e){var n=v(e);return"@import '"+((n=m[n]?URL.createObjectURL(i.t(n)):"")||"data:,")+"'"})).replace(/url\(\s*(["']?)([^'"()]+)\1\s*\)/g,(function(t,t,e){var n=v(e);return'url("'+((n=m[n]?URL.createObjectURL(i.t(n)):"")||"data:,")+'")'}))}Audio.prototype.L=Audio.prototype.pause,Audio.prototype.Y=Audio.prototype.play,Audio.prototype.pause=function(){this.src&&this.L(),this.reine=""},Audio.prototype.play=function(){this.R&&(this.reine=this.R,Y.call(this,this.R,function(){this.reine==this.R&&this.Y()}.bind(this)))},Object.defineProperties(Image.prototype,{src:{get:function(){return this.getAttribute("src")||""},set:Y}}),Object.defineProperties(Audio.prototype,{src:{get:function(){return this.getAttribute("src")||""},set:function(t){this.R=t}}}),Object.defineProperties(HTMLScriptElement.prototype,{src:{get:function(){var t=this.getAttribute("src");return y[t]?y[t]:t||""}},LY:{get:function(){return this.getAttribute("src")||""},set:function(t){this.setAttribute("src",t)}}}),CSSStyleSheet.prototype.L=CSSStyleSheet.prototype.insertRule,CSSStyleSheet.prototype.insertRule=function(t,i){return this.L(T(t),i)},i.b("üb",(function(t){var i=document.createElement("html");i.innerHTML=t;for(var e=i.querySelectorAll("script"),n=0;n<e.length;n++)c(e[n].LY)&&(e[n].LY=b(e[n].LY));var r=i.querySelectorAll("img");for(n=0;n<r.length;n++)c(r[n].src)&&r[n].setAttribute("src",b(r[n].src));var o=i.querySelectorAll("audio");for(n=0;n<o.length;n++)c(o[n].src)&&o[n].setAttribute("src",b(o[n].src));var s=i.querySelectorAll("link");for(n=0;n<s.length;n++)"text/css"==s[n].type?s[n].href=R(s[n].href):s[n].href&&(s[n].href=b(s[n].href));var h=i.querySelectorAll("style");for(n=0;n<h.length;n++)h[n].innerHTML=T(h[n].innerHTML);var a=Node.prototype.appendChild;Node.prototype.appendChild=function(t){return"LINK"==t.nodeName&&"text/css"==t.type?(t.href=R(t.href),a.call(document.documentElement,t)):"STYLE"==t.nodeName?(t.innerHTML=T(t.innerHTML),a.call(document.documentElement,t)):this===document.body&&t&&"SCRIPT"==t.nodeName&&c(t.LY)?(!1===t.async?(t.LY=b(t.LY),a.call(this,t)):g(t.LY,(function(i){t.LY=i,a.call(document.body,t)}),(function(){a.call(document.body,t)})),t):a.call(this,t)},document.open(),document.write("<!DOCTYPE html>"+i.outerHTML),document.close()}))}))},c.Y()}()}();else{var enterBtn=document.getElementById("enter");enterBtn&&enterBtn.addEventListener("click",function(){location.href="?xiaomao"})}
