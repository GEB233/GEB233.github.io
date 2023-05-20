!function (a) { var f = !1; if ("function" == typeof define && define.amd && (define(a), f = !0), "object" == typeof exports && (module.exports = a(), f = !0), !f) { var e = window.Cookies, c = window.Cookies = a(); c.noConflict = function () { return window.Cookies = e, c } } }(function () {
    function a() { for (var a = 0, c = {}; a < arguments.length; a++) { var d = arguments[a], g; for (g in d) c[g] = d[g] } return c } function f(e) {
        function c(d, g, b) {
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if ("number" == typeof (b = a({ path: "/" }, c.defaults, b)).expires) {
                        var l =
                            new Date; l.setMilliseconds(l.getMilliseconds() + 864E5 * b.expires); b.expires = l
                    } b.expires = b.expires ? b.expires.toUTCString() : ""; try { var h = JSON.stringify(g); /^[\{\[]/.test(h) && (g = h) } catch (p) { } g = e.write ? e.write(g, d) : encodeURIComponent(g + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent); d = (d = (d = encodeURIComponent(d + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape); h = ""; for (var m in b) b[m] && (h += "; " + m, !0 !== b[m] && (h += "=" + b[m]));
                    return document.cookie = d + "=" + g + h
                } d || (h = {}); m = document.cookie ? document.cookie.split("; ") : []; for (var f = /(%[0-9A-Z]{2})+/g, n = 0; n < m.length; n++) { var q = m[n].split("="), k = q.slice(1).join("="); this.json || '"' !== k.charAt(0) || (k = k.slice(1, -1)); try { l = q[0].replace(f, decodeURIComponent); if (k = e.read ? e.read(k, l) : e(k, l) || k.replace(f, decodeURIComponent), this.json) try { k = JSON.parse(k) } catch (p) { } if (d === l) { h = k; break } d || (h[l] = k) } catch (p) { } } return h
            }
        } return c.set = c, c.get = function (a) { return c.call(c, a) }, c.getJSON = function () {
            return c.apply({ json: !0 },
                [].slice.call(arguments))
        }, c.defaults = {}, c.remove = function (d, e) { c(d, "", a(e, { expires: -1 })) }, c.withConverter = f, c
    } return f(function () { })
});
var comm_list = [
    {
        slug: "common",
        list: [
            { tag: "\u70ed\u95e8", link: [{ name: "\u767e\u5ea6", url: "https://www.baidu.com/" }, { name: "\u8c37\u6b4c", url: "https://www.google.com/" }, { name: "\u5fc5\u5e94", url: "https://cn.bing.com/" }, { name: "\u641c\u72d7", url: "https://www.sogou.com/" }, { name: "\u4eca\u65e5\u5934\u6761", url: "https://www.toutiao.com/" }, { name: "\u714e\u86cb", url: "https://jandan.net/" }, { name: "\u6570\u5b57\u5c3e\u5df4", url: "http://www.dgtle.com/" }] },
            { tag: "\u793e\u4ea4", link: [{ name: "\u5fae\u535a", url: "https://www.weibo.com/" }, { name: "石油", url: "https://tieba.baidu.com/" }, { name: "\u77e5\u4e4e", url: "https://www.zhihu.com/" }, { name: "\u8c46\u74e3", url: "https://www.douban.com/" }, { name: "V2EX", url: "https://www.v2ex.com/" }, { name: "\u7b80\u4e66", url: "https://www.jianshu.com/" }, { name: "Twitter", url: "https://twitter.com/" }] },
            { tag: "\u8d44\u8baf", link: [{ name: "\u7f51\u6613", url: "https://www.163.com/" }, { name: "\u817e\u8baf", url: "http://www.qq.com/" }, { name: "\u65b0\u6d6a", url: "http://www.sina.com.cn/" }, { name: "\u641c\u72d0", url: "http://www.sohu.com/" }, { name: "\u51e4\u51f0\u7f51", url: "http://www.ifeng.com/" }, { name: "\u4eba\u6c11\u7f51", url: "http://www.people.com.cn/" }, { name: "\u65b0\u534e\u7f51", url: "http://xinhuanet.com/" }] },
            { tag: "\u8d2d\u7269", link: [{ name: "\u6dd8\u5b9d", url: "https://www.taobao.com/" }, { name: "\u4eac\u4e1c", url: "https://www.jd.com/" }, { name: "\u4e9a\u9a6c\u900a", url: "https://www.amazon.cn/" }, { name: "\u82cf\u5b81\u6613\u8d2d", url: "https://www.suning.com/" }, { name: "\u7f51\u6613\u4e25\u9009", url: "https://you.163.com/" }, { name: "\u5c0f\u7c73\u5546\u57ce", url: "https://www.mi.com/" }, { name: "\u4ec0\u4e48\u503c\u5f97\u4e70", url: "https://www.smzdm.com/" }] },
            { tag: "\u89c6\u9891", link: [{ name: "\u4f18\u9177", url: "https://www.youku.com/" }, { name: "\u7231\u5947\u827a", url: "https://www.iqiyi.com/" }, { name: "\u817e\u8baf\u89c6\u9891", url: "https://v.qq.com/" }, { name: "\u54d4\u54e9\u54d4\u54e9", url: "https://www.bilibili.com/" }, { name: "YouTube", url: "https://www.youtube.com/" }, { name: "\u6597\u9c7c\u76f4\u64ad", url: "https://www.douyu.com/" }, { name: "\u864e\u7259\u76f4\u64ad", url: "https://www.huya.com/" }] },
            { tag: "\u5de5\u4f5c", link: [{ name: "\u9886\u82f1", url: "https://cn.linkedin.com/" }, { name: "\u62c9\u52fe\u7f51", url: "https://www.lagou.com/" }, { name: "\u667a\u8054\u62db\u8058", url: "https://www.zhaopin.com/" }, { name: "\u524d\u7a0b\u65e0\u5fe7", url: "https://www.51job.com/" }, { name: "\u5e94\u5c4a\u751f", url: "http://www.yingjiesheng.com/" }, { name: "\u8109\u8109", url: "https://maimai.cn/" }, { name: "\u9177\u5de5\u4f5c", url: "https://www.v2ex.com/?tab=jobs" }] },
            { tag: "\u751f\u6d3b", link: [{ name: "\u7f8e\u56e2", url: "https://www.meituan.com/" }, { name: "\u5927\u4f17\u70b9\u8bc4", url: "https://www.dianping.com/" }, { name: "\u643a\u7a0b", url: "https://www.ctrip.com/" }, { name: "\u53bb\u54ea\u513f", url: "https://www.qunar.com/" }, { name: "\u98de\u732a", url: "https://www.alitrip.com/" }, { name: "12306", url: "https://kyfw.12306.cn/otn/index/init" }, { name: "\u9a6c\u8702\u7a9d", url: "https://www.mafengwo.cn/" }] },
            { tag: "\u4fbf\u6377", link: [{ name: "\u8bcd\u5178\u7ffb\u8bd1", url: "https://fanyi.baidu.com/" }, { name: "\u5929\u6c14\u9884\u62a5", url: "http://www.weather.com.cn/live/" }, { name: "\u5feb\u9012\u67e5\u8be2", url: "https://www.kuaidi100.com/" }, { name: "\u5728\u7ebf\u8f6c\u6362", url: "https://cn.office-converter.com/" }, { name: "\u4e34\u65f6\u7f51\u76d8", url: "https://send.firefox.com/" }, { name: "\u7f51\u9875\u5fae\u4fe1", url: "https://wx.qq.com/" }, { name: "QQ\u90ae\u7bb1", url: "https://mail.qq.com/" }] }
        ]
    },
    {
        slug: "amuse", 
        list: [
            {tag:"\u53d1\u73b0",link:[{name:"\u714e\u86cb",url:"https://jandan.net/"},{name:"\u679c\u58f3\u7f51",url:"https://www.guokr.com/"},{name:"\u5806\u7cd6",url:"https://www.duitang.com/"},{name:"\u7cd7\u4e8b\u767e\u79d1",url:"https://www.qiushibaike.com/"},{name:"\u66b4\u8d70\u6f2b\u753b",url:"http://baozou.com/"},{name:"\u767e\u601d\u4e0d\u5f97\u59d0",url:"http://www.budejie.com/"},{name:"\u597d\u5947\u5fc3\u65e5\u62a5",url:"http://www.qdaily.com/"}]},
            {tag:"\u5f71\u89c6",link:[{name:"\u4f18\u9177",url:"https://www.youku.com/"},{name:"\u7231\u5947\u827a",url:"https://www.iqiyi.com/"},{name:"\u817e\u8baf\u89c6\u9891",url:"https://v.qq.com/"},{name:"\u4e50\u89c6\u89c6\u9891",url:"http://www.le.com/"},{name:"\u8292\u679cTV",url:"https://www.mgtv.com/"},{name:"\u592e\u89c6\u7f51",url:"http://tv.cctv.com/"},{name:"YouTube",url:"https://www.youtube.com/"}]},
            {tag:"\u76f4\u64ad",link:[{name:"\u6597\u9c7c\u76f4\u64ad",url:"https://www.douyu.com/"},{name:"YY\u76f4\u64ad",url:"https://www.yy.com/"},{name:"\u864e\u7259\u76f4\u64ad",url:"https://www.huya.com/"},{name:"\u82b1\u6912\u76f4\u64ad",url:"http://www.huajiao.com/"},{name:"\u4f01\u9e45\u7535\u7ade",url:"https://egame.qq.com/"},{name:"\u4e00\u76f4\u64ad",url:"https://www.yizhibo.com/"},{name:"Twitch",url:"https://www.twitch.tv/"}]},
            {tag:"\u52a8\u6f2b",link:[{name:"\u54d4\u54e9\u54d4\u54e9",url:"https://www.bilibili.com/"},{name:"AcFun",url:"http://www.acfun.cn/"},{name:"\u5600\u54e9\u5600\u54e9",url:"http://www.dilidili.name/"},{name:"\u534a\u6b21\u5143",url:"https://bcy.net/"},{name:"\u7f51\u6613\u6f2b\u753b",url:"https://manhua.163.com/"},{name:"\u6709\u5996\u6c14",url:"http://u17.com/"},{name:"\u840c\u5a18\u767e\u79d1",url:"https://zh.moegirl.org/"}]},
            {tag:"\u6e38\u620f",link:[{name:"Steam",url:"https://store.steampowered.com/"},{name:"\u6e38\u6c11\u661f\u7a7a",url:"http://www.gamersky.com/"},{name:"\u53e3\u888b\u5df4\u58eb",url:"http://www.tgbus.com/"},{name:"17173",url:"https://www.17173.com/"},{name:"\u591a\u73a9\u6e38\u620f",url:"http://www.duowan.com/"},{name:"3DMGAME",url:"https://www.3dmgame.com/"},{name:"\u6a59\u5149\u6e38\u620f",url:"http://www.66rpg.com/"}]},
            {tag:"\u97f3\u4e50",link:[{name:"\u7f51\u6613\u4e91\u97f3\u4e50",url:"https://music.163.com/"},{name:"\u867e\u7c73\u97f3\u4e50",url:"https://www.xiami.com/"},{name:"QQ\u97f3\u4e50",url:"https://y.qq.com/"},{name:"\u8c46\u74e3FM",url:"https://douban.fm/"},{name:"\u559c\u9a6c\u62c9\u96c5FM",url:"https://www.ximalaya.com/"},{name:"\u97f3\u60a6Tai",url:"http://www.yinyuetai.com/"},{name:"5sing\u539f\u521b",url:"http://5sing.kugou.com/"}]},
            {tag:"\u4f53\u80b2",link:[{name:"\u817e\u8baf\u4f53\u80b2",url:"http://sports.qq.com/"},{name:"\u7f51\u6613\u4f53\u80b2",url:"http://sports.163.com/"},{name:"\u65b0\u6d6a\u4f53\u80b2",url:"http://sports.sina.com.cn/"},{name:"\u592e\u89c6\u4f53\u80b2",url:"http://sports.cctv.com/"},{name:"\u4e50\u89c6\u4f53\u80b2",url:"http://www.lesports.com/"},{name:"\u76f4\u64ad\u5427",url:"https://www.zhibo8.cc/"},{name:"\u864e\u6251",url:"https://www.hupu.com/"}]},
            {tag:"\u5c0f\u8bf4",link:[{name:"\u8d77\u70b9\u4e2d\u6587\u7f51",url:"https://www.qidian.com/"},{name:"\u7eb5\u6a2a\u4e2d\u6587\u7f51",url:"http://www.zongheng.com/"},{name:"\u7ea2\u8896\u6dfb\u9999",url:"https://www.hongxiu.com/"},{name:"\u8c46\u74e3\u9605\u8bfb",url:"https://read.douban.com/"},{name:"\u7f51\u6613\u4e91\u9605\u8bfb",url:"http://yuedu.163.com/"},{name:"\u9cb8\u9c7c\u9605\u8bfb",url:"http://www.jingyu.com/"},{name:"\u7247\u523b",url:"http://pianke.me/"}]}
        ]
    },
    {
        slug: "study", 
        list: [
            { tag: "\u8bfe\u7a0b", link: [{ name: "\u7f51\u6613\u516c\u5f00\u8bfe", url: "https://open.163.com/" }, { name: "\u7f51\u6613\u4e91\u8bfe\u5802", url: "https://study.163.com/" }, { name: "\u817e\u8baf\u8bfe\u5802", url: "https://ke.qq.com/" }, { name: "\u4e2d\u56fd\u5927\u5b66MOOC", url: "https://www.icourse163.org/" }, { name: "\u6155\u8bfe\u7f51", url: "https://www.imooc.com/" }, { name: "\u6781\u5ba2\u5b66\u9662", url: "http://www.jikexueyuan.com/" }, { name: "\u7231\u8bfe\u7a0b", url: "http://www.icourses.cn/" }] },
            { tag: "\u6587\u5e93", link: [{ name: "\u767e\u5ea6\u6587\u5e93", url: "https://wenku.baidu.com/" }, { name: "\u9053\u5ba2\u5df4\u5df4", url: "http://www.doc88.com/" }, { name: "\u8c46\u4e01\u7f51", url: "http://www.docin.com/" }, { name: "\u7231\u95ee\u5171\u4eab\u8d44\u6599", url: "http://ishare.iask.sina.com.cn/" }, { name: "360doc", url: "http://www.360doc.com/" }, { name: "\u51cc\u98ce\u4e91\u6587\u5e93", url: "https://wenku.lingfengyun.com/" }, { name: "MBA\u667a\u5e93", url: "http://www.mbalib.com/" }] },
            { tag: "\u5b66\u672f", link: [{ name: "\u8c37\u6b4c\u5b66\u672f", url: "https://scholar.google.com/" }, { name: "\u767e\u5ea6\u5b66\u672f", url: "http://xueshu.baidu.com/" }, { name: "\u5fc5\u5e94\u5b66\u672f", url: "https://cn.bing.com/academic" }, { name: "\u4e2d\u56fd\u77e5\u7f51", url: "http://www.cnki.net/" }, { name: "\u4e07\u65b9\u6570\u636e", url: "http://www.wanfangdata.com.cn/" }, { name: "\u7ef4\u666e\u7f51", url: "http://www.cqvip.com/" }, { name: "OALib", url: "http://www.oalib.com/" }] },
            { tag: "\u8bcd\u5178", link: [{ name: "\u6c49\u8bed\u8bcd\u5178", url: "http://hd.cnki.net/kxhd" }, { name: "\u5251\u6865\u8bcd\u5178", url: "https://dictionary.cambridge.org/zhs/" }, { name: "\u67ef\u6797\u65af\u8bcd\u5178", url: "https://www.collinsdictionary.com/zh/" }, { name: "\u6709\u9053\u8bcd\u5178", url: "https://www.youdao.com/" }, { name: "\u6c49\u5178", url: "http://www.zdic.net/" }, { name: "\u65e5\u4e2d\u8f9e\u5178", url: "https://cjjc.weblio.jp/" }, { name: "\u97e9\u4e2d\u8bcd\u5178", url: "https://zh.dict.naver.com/" }] },
            { tag: "\u8d44\u8baf", link: [{ name: "\u817e\u8baf\u6559\u80b2", url: "http://edu.qq.com/" }, { name: "\u641c\u72d0\u6559\u80b2", url: "http://learning.sohu.com/" }, { name: "\u65b0\u6d6a\u6559\u80b2", url: "http://www.163.com/" }, { name: "\u4e2d\u56fd\u6559\u80b2\u5728\u7ebf", url: "http://www.eol.cn/" }, { name: "\u65b0\u4e1c\u65b9", url: "http://www.xdf.cn/" }, { name: "\u6caa\u6c5f\u82f1\u8bed", url: "http://www.hjenglish.com/" }, { name: "\u65e0\u5fe7\u8003\u7f51", url: "https://www.51test.net/" }] },
            { tag: "\u6a21\u8003", link: [{ name: "\u6211\u8981\u6a21\u8003", url: "http://www.51mokao.com/" }, { name: "\u8003\u6ee1\u5206\u7559\u5b66", url: "http://www.kmf.com/" }, { name: "LeetCode", url: "https://leetcode-cn.com/" }, { name: "\u4e2d\u534e\u4f1a\u8ba1\u7f51\u6821", url: "http://www.chinaacc.com/tiku/" }, { name: "\u6253\u5b57\u7ec3\u4e60", url: "https://www.typing.com/student" }, { name: "\u9a7e\u6821\u4e00\u70b9\u901a", url: "http://www.jxedt.com/" }, { name: "\u9a7e\u8003\u5b9d\u5178", url: "http://www.jiakaobaodian.com/" }] },
            { tag: "\u4fbf\u6377", link: [{ name: "\u591a\u90bb\u56fd", url: "http://www.duolingo.cn/" }, { name: "\u6247\u8d1d", url: "https://www.shanbay.com/" }, { name: "\u767e\u8bcd\u65a9", url: "http://www.baicizhan.com/" }, { name: "51VOA", url: "http://www.51voa.com/" }, { name: "\u5728\u7ebfPDF", url: "https://smallpdf.com/cn" }, { name: "\u516c\u5f0f\u5b57\u7b26", url: "http://webdemo.myscript.com/" }, { name: "WolframAlpha", url: "https://www.wolframalpha.com/" }] },
            { tag: "\u6210\u7ee9", link: [{ name: "\u82f1\u8bed\u56db\u516d\u7ea7", url: "https://www.chsi.com.cn/cet/" }, { name: "\u666e\u901a\u8bdd\u6c34\u5e73", url: "http://hainan.cltt.org/web/login/pscp01001.aspx" }, { name: "\u4f1a\u8ba1\u4ece\u4e1a\u8d44\u683c", url: "http://60.208.116.167:81/pas/querycert.jsp" }, { name: "\u6559\u5e08\u8d44\u683c", url: "http://ntce.neea.edu.cn/html1/folder/1508/211-1.htm?sid=660" }, { name: "\u8ba1\u7b97\u673a\u7b49\u7ea7", url: "http://zscx.neea.edu.cn/html1/folder/1508/211-1.htm?sid=300" }, { name: "\u96c5\u601d", url: "http://ielts.etest.edu.cn/" }, { name: "\u6258\u798f", url: "https://toefl.neea.cn/" }] }
        ]
    },
    {
        slug: "life", 
        list: [
            { tag: "\u51fa\u884c", link: [{ name: "\u7f8e\u56e2", url: "https://www.meituan.com/" }, { name: "\u643a\u7a0b", url: "https://www.ctrip.com/" }, { name: "\u53bb\u54ea\u513f", url: "https://www.qunar.com/" }, { name: "\u98de\u732a", url: "https://www.alitrip.com/" }, { name: "\u9014\u725b", url: "http://www.tuniu.com/" }, { name: "12306", url: "https://kyfw.12306.cn/otn/index/init" }, { name: "\u9a6c\u8702\u7a9d", url: "https://www.mafengwo.cn/" }] },
            { tag: "\u7f8e\u98df", link: [{ name: "\u4e0b\u53a8\u623f", url: "http://www.xiachufang.com/" }, { name: "\u7f8e\u98df\u5929\u4e0b", url: "https://www.meishichina.com/" }, { name: "\u8c46\u679c\u7f8e\u98df", url: "https://www.douguo.com/" }, { name: "\u641c\u72d0\u7f8e\u98df", url: "http://chihe.sohu.com/" }, { name: "\u5fc3\u98df\u8c31", url: "https://www.xinshipu.com/" }, { name: "\u4e2d\u534e\u83dc\u8c31\u7f51", url: "http://www.chinacaipu.com/" }, { name: "\u7f8e\u98df\u6770", url: "http://www.meishij.net/" }] },
            { tag: "\u623f\u4ea7", link: [{ name: "\u623f\u5929\u4e0b", url: "http://www.fang.com/" }, { name: "\u94fe\u5bb6", url: "http://www.lianjia.com/" }, { name: "\u623f\u591a\u591a", url: "http://www.fangdd.com/" }, { name: "\u5b89\u5c45\u5ba2", url: "http://www.anjuke.com/" }, { name: "\u817e\u8baf\u623f\u4ea7", url: "http://house.qq.com/" }, { name: "\u641c\u72d0\u7126\u70b9", url: "https://house.focus.cn/" }, { name: "\u4e50\u5c45", url: "http://www.leju.com/" }] },
            { tag: "\u6c7d\u8f66", link: [{ name: "\u6c7d\u8f66\u4e4b\u5bb6", url: "http://www.autohome.com.cn/" }, { name: "\u592a\u5e73\u6d0b\u6c7d\u8f66", url: "http://www.pcauto.com.cn/" }, { name: "\u6613\u8f66\u7f51", url: "http://www.bitauto.com/" }, { name: "\u7231\u5361\u6c7d\u8f66", url: "http://www.xcar.com.cn/" }, { name: "\u7f51\u6613\u6c7d\u8f66", url: "http://auto.163.com/" }, { name: "\u65b0\u6d6a\u6c7d\u8f66", url: "http://auto.sina.com.cn/" }, { name: "\u641c\u72d0\u6c7d\u8f66", url: "http://auto.sohu.com/" }] },
            { tag: "\u8d22\u7ecf", link: [{ name: "\u4e1c\u65b9\u8d22\u5bcc", url: "http://www.eastmoney.com/" }, { name: "\u7b2c\u4e00\u8d22\u7ecf", url: "http://www.yicai.com/" }, { name: "\u51e4\u51f0\u8d22\u7ecf", url: "http://finance.ifeng.com/" }, { name: "\u7f51\u6613\u8d22\u7ecf", url: "http://money.163.com/" }, { name: "\u548c\u8baf\u8d22\u7ecf", url: "http://www.hexun.com/" }, { name: "\u96ea\u7403", url: "https://xueqiu.com/" }, { name: "\u80a1\u5427", url: "http://guba.eastmoney.com/" }] },
            { tag: "\u65f6\u5c1a", link: [{ name: "\u592a\u5e73\u6d0b\u65f6\u5c1a", url: "https://www.pclady.com.cn/" }, { name: "\u745e\u4e3d\u7f51", url: "http://www.rayli.com.cn/" }, { name: "\u7f8e\u4e3d\u8bf4", url: "http://www.meilishuo.com/" }, { name: "\u8611\u83c7\u8857", url: "http://www.mogujie.com/" }, { name: "YOKA", url: "http://www.yoka.com/" }, { name: "OnlyLady", url: "http://www.onlylady.com/" }, { name: "VOGUE", url: "http://www.vogue.com.cn/" }] },
            { tag: "\u5065\u5eb7", link: [{ name: "\u641c\u72d0\u5065\u5eb7", url: "http://health.sohu.com/" }, { name: "\u65b0\u6d6a\u5065\u5eb7", url: "http://health.sina.com.cn/" }, { name: "\u51e4\u51f0\u5065\u5eb7", url: "http://fashion.ifeng.com/health/" }, { name: "\u5bfb\u533b\u95ee\u836f", url: "http://www.xywy.com/" }, { name: "\u4e01\u9999\u56ed", url: "http://www.dxy.cn/" }, { name: "39\u5065\u5eb7\u7f51", url: "http://www.39.net/" }, { name: "\u6709\u95ee\u5fc5\u7b54", url: "http://www.120ask.com/" }] },
            { tag: "\u67e5\u8be2", link: [{ name: "\u7f51\u901f\u6d4b\u8bd5", url: "http://www.speedtest.net/" }, { name: "\u7535\u8bdd\u5f52\u5c5e\u5730", url: "http://www.114best.com/dh/" }, { name: "\u5217\u8f66\u65f6\u523b", url: "http://qq.ip138.com/train/" }, { name: "\u5b9e\u65f6\u822a\u73ed", url: "http://map.variflight.com/" }, { name: "\u53f0\u98ce\u8def\u5f84", url: "http://typhoon.zjwater.gov.cn/" }, { name: "\u4ea4\u901a\u8fdd\u7ae0\u67e5\u8be2", url: "http://www.ip138.com/weizhang.htm" }, { name: "\u6bd4\u4e00\u6bd4\u4ef7", url: "http://www.b1bj.com/" }] }
        ]
    },
    {
        slug: "tech",
        list: [
            { tag: "\u53d1\u73b0", link: [{ name: "V2EX", url: "https://www.v2ex.com/" }, { name: "\u6398\u91d1", url: "https://juejin.im/" }, { name: "\u5f00\u6e90\u4e2d\u56fd", url: "https://www.oschina.net/" }, { name: "CSDN", url: "https://www.csdn.net/" }, { name: "InfoQ", url: "http://www.infoq.com/cn/" }, { name: "NEXT", url: "http://next.36kr.com/" }, { name: "HackerNews", url: "https://news.ycombinator.com/" }] },
            { tag: "\u6570\u7801", link: [{ name: "\u6570\u5b57\u5c3e\u5df4", url: "http://www.dgtle.com/" }, { name: "\u7231\u8303\u513f", url: "https://www.ifanr.com/" }, { name: "\u96f7\u950b\u7f51", url: "https://www.leiphone.com/" }, { name: "\u6781\u5ba2\u516c\u56ed", url: "http://www.geekpark.net/" }, { name: "\u6bd4\u7279\u7f51", url: "http://www.chinabyte.com/" }, { name: "ZEALER", url: "http://www.zealer.com/" }, { name: "Engadget", url: "https://chinese.engadget.com/" }] }, { tag: "\u5e73\u53f0", link: [{ name: "GitHub", url: "https://github.com/" }, { name: "Coding", url: "https://coding.net/" }, { name: "\u77f3\u58a8", url: "https://shimo.im/" }, { name: "\u767e\u5ea6\u8111\u56fe", url: "http://naotu.baidu.com/" }, { name: "CmdMarkdown", url: "https://www.zybuluo.com/mdeditor" }, { name: "TinyPNG", url: "https://tinypng.com/" }, { name: "SM.MS\u56fe\u5e8a", url: "https://sm.ms/" }] },
            { tag: "\u5de5\u5177", link: [{ name: "IP\u67e5\u8be2", url: "https://www.ipip.net/ip.html" }, { name: "Speedtest", url: "http://www.speedtest.net/" }, { name: "17CE", url: "https://www.17ce.com/" }, { name: "\u5728\u7ebf\u5de5\u5177", url: "https://tool.lu/" }, { name: "\u4ee3\u7801\u683c\u5f0f\u5316", url: "https://www.freeformatter.com/" }, { name: "\u4e34\u65f6\u90ae\u7bb1", url: "https://www.moakt.com/" }, { name: "\u57df\u540d\u6bd4\u4ef7", url: "https://www.domcomp.com/" }] },
            { tag: "\u6587\u6863", link: [{ name: "Microsoft\u6587\u6863", url: "https://docs.microsoft.com/zh-cn/" }, { name: "Google\u5f00\u53d1\u8005", url: "https://developers.google.com/china/" }, { name: "MDN\u6587\u6863", url: "https://developer.mozilla.org/zh-CN/" }, { name: "W3school", url: "http://www.w3school.com.cn/" }, { name: "\u83dc\u9e1f\u6559\u7a0b", url: "http://www.runoob.com/" }, { name: "Linux\u547d\u4ee4", url: "http://man.linuxde.net/" }, { name: "\u5fae\u4fe1\u5c0f\u7a0b\u5e8f", url: "https://mp.weixin.qq.com/debug/wxadoc/dev/index.html" }] },
            { tag: "\u535a\u5ba2", link: [{ name: "\u963f\u91ccUED", url: "http://www.aliued.cn/" }, { name: "\u6709\u8d5e\u6280\u672f", url: "https://tech.youzan.com/" }, { name: "\u4eac\u4e1cJDC", url: "http://jdc.jd.com/" }, { name: "\u817e\u8baf\u5168\u7aef", url: "http://www.alloyteam.com/" }, { name: "\u767e\u5ea6UED", url: "http://ued.baidu.com/" }, { name: "\u4eba\u4eba\u7f51FED", url: "https://fed.renren.com/" }, { name: "\u962e\u4e00\u5cf0\u535a\u5ba2", url: "http://www.ruanyifeng.com/" }] },
            { tag: "\u8d44\u6e90", link: [{ name: "\u5c11\u6570\u6d3e", url: "https://sspai.com/" }, { name: "\u5f02\u6b21\u5143", url: "https://www.iplaysoft.com/" }, { name: "Softonic", url: "https://en.softonic.com/" }, { name: "MacInformer", url: "http://macdownload.informer.com/" }, { name: "\u7ad9\u957f\u4e0b\u8f7d", url: "http://down.chinaz.com/" }, { name: "\u4e2d\u79d1\u5927\u955c\u50cf", url: "http://mirrors.ustc.edu.cn/" }, { name: "BootCDN", url: "https://www.bootcdn.cn/" }] },
            { tag: "\u4e91\u7aef", link: [{ name: "\u963f\u91cc\u4e91", url: "https://www.aliyun.com/" }, { name: "\u817e\u8baf\u4e91", url: "https://cloud.tencent.com/" }, { name: "AWS", url: "https://aws.amazon.com/cn/" }, { name: "GoogleCloud", url: "https://cloud.google.com/" }, { name: "Linode", url: "https://www.linode.com/" }, { name: "DigitalOcean", url: "https://www.digitalocean.com/" }, { name: "Bandwagon", url: "https://bandwagonhost.com/" }] }
        ]
    },
    {
        slug: "design", 
        list: [
            { tag: "\u7075\u611f", link: [{ name: "Behance", url: "https://www.behance.net/" }, { name: "Dribbble", url: "https://dribbble.com/" }, { name: "Muzli", url: "https://muz.li/" }, { name: "MyDesy", url: "https://www.mydesy.com/" }, { name: "ZCOOL", url: "http://www.zcool.com.cn/" }, { name: "FWA", url: "https://thefwa.com/" }, { name: "LandBook", url: "https://land-book.com/" }] },
            { tag: "\u56fe\u5e93", link: [{ name: "Huaban", url: "http://huabanpro.com/" }, { name: "Unsplash", url: "https://unsplash.com/" }, { name: "Pixabay", url: "https://pixabay.com/" }, { name: "500px", url: "https://500px.com/" }, { name: "Pinterest", url: "https://www.pinterest.com/" }, { name: "PEXELS", url: "https://www.pexels.com/" }, { name: "SplitShire", url: "https://www.splitshire.com/" }] },
            { tag: "\u7d20\u6750", link: [{ name: "NiPic", url: "http://www.nipic.com/" }, { name: "58Pic", url: "http://www.58pic.com/" }, { name: "freepik", url: "https://www.freepik.com/" }, { name: "UIKit", url: "http://www.uikit.me/" }, { name: "Pixeden", url: "https://www.pixeden.com/" }, { name: "Subtlepatterns", url: "http://subtlepatterns.com/" }, { name: "Fribbble", url: "http://www.fribbble.com/" }] }, { tag: "\u5b57\u4f53", link: [{ name: "Fontsup", url: "https://fontsup.com/" }, { name: "dafont", url: "https://www.dafont.com/" }, { name: "Qiuziti", url: "http://www.qiuziti.com/" }, { name: "MyFonts", url: "https://www.myfonts.com/" }, { name: "Fonts2u", url: "https://zh.fonts2u.com/" }, { name: "Fontfabric", url: "http://www.fontfabric.com/" }, { name: "UrbanFonts", url: "https://www.urbanfonts.com/" }] },
            { tag: "\u4ea4\u4e92", link: [{ name: "UICN", url: "http://www.ui.cn/" }, { name: "SiteSee", url: "https://sitesee.co/" }, { name: "UIGarage", url: "https://uigarage.net/" }, { name: "BestWebsite", url: "https://bestwebsite.gallery/" }, { name: "CollectUI", url: "http://collectui.com/" }, { name: "UIMovement", url: "https://uimovement.com/" }, { name: "Reeoo", url: "https://reeoo.com/" }] },
            { tag: "\u989c\u8272", link: [{ name: "ColorHunt", url: "https://colorhunt.co/" }, { name: "Coolors", url: "https://coolors.co/" }, { name: "AdobeColor", url: "https://color.adobe.com/zh/" }, { name: "WebGradients", url: "https://webgradients.com/" }, { name: "Trianglify", url: "https://trianglify.io/" }, { name: "ColorFavs", url: "http://www.colorfavs.com/" }, { name: "Colllor", url: "http://colllor.com/" }] },
            { tag: "\u5de5\u5177", link: [{ name: "Fotor", url: "https://www.fotor.com.cn/" }, { name: "Photopea", url: "https://www.photopea.com/" }, { name: "AutoDraw", url: "https://www.autodraw.com/" }, { name: "Figma", url: "https://www.figma.com/" }, { name: "SVGDraw", url: "http://editor.method.ac/" }, { name: "CloudConvert", url: "https://cloudconvert.com/" }, { name: "TinyPNG", url: "https://tinypng.com/" }] },
            { tag: "\u89c4\u8303", link: [{ name: "Apple", url: "https://developer.apple.com/design/" }, { name: "Google", url: "https://design.google/" }, { name: "Microsoft", url: "https://www.microsoft.com/design/" }, { name: "Material", url: "https://material.io/" }, { name: "Android", url: "https://developer.android.google.cn/design/" }, { name: "ScreenSize", url: "http://screensiz.es/phone" }, { name: "WeUI", url: "https://weui.io/" }] }
    ]
    }
];
!function (a) {
    function f(b) {
        a(".work-link").find(".tab span.active").removeClass("active"); var c, h, d = "", f = a(b).attr("class"); (a(b).addClass("active"), a.each(comm_list, function (b, e) { f == e.slug && (c = e.list, a.each(c, function (b, c) { d += "<ul><li>" + c.tag + "</li>"; h = c.link; a.each(h, function (a, b) { d += '<li><a href="' + b.url + '" target="_blank">' + b.name + "</a></li>" }); d += "</ul>" })) }), a(".work-link").find(".tab span:first").hasClass("active") && "1" == e("schl")) ? (b = "assets/data/univ/" + e("univ") + ".js", a.getScript(b, function () {
            var b =
                "<ul><li>\u6821\u56ed</li>"; a.each(univ_list.link, function (a, c) { b += '<li><a href="' + c.url + '" target="_blank">' + c.name + "</a></li>" }); b += "</ul>"; a(".work-link").css("opacity", "1").find(".info").hide().html(d).fadeIn(200).find("ul:nth-child(6)").html(b)
        }).fail(function () { a(".work-link").css("opacity", "1").find(".info").hide().html(d).fadeIn(200).find("ul:nth-child(6)").html("<ul><li>\u6821\u56ed</li><li>\u6682\u672a\u6536\u5f55</li></ul>") })) : a(".work-link").css("opacity", "1").find(".info").hide().html(d).fadeIn(200)
    }
    function e(a) { var b = { bkgd: "#ededed", srch: "baidu", schl: "0", prov: "1", univ: "1001" }; return Cookies.get(a) || b[a] } function c(a, c, d) { Cookies.set(a, c, { expires: d || 3650 }) } function d(b) { a("body").css("background", b) } function g(b) {
        (a(b).addClass("active").siblings(".active").removeClass("active"), a(".search-hidden").remove(), a(b).hasClass("baidu")) ? (a(".search-form").attr("action", "https://www.baidu.com/s"), a(".search-keyword").attr({ name: "word", placeholder: "\u767e\u5ea6\u4e00\u4e0b\uff0c\u4f60\u5c31\u77e5\u9053" })) :
            a(b).hasClass("google") ? (a(".search-form").attr("action", "https://www.google.com/search"), a(".search-keyword").attr({ name: "q", placeholder: "Google \u641c\u7d22" })) : a(b).hasClass("bing") ? (a(".search-form").attr("action", "https://cn.bing.com/search"), a(".search-keyword").attr({ name: "q", placeholder: "\u5fae\u8f6f Bing \u641c\u7d22" })) : a(b).hasClass("image") ? (a(".search-form").attr("action", "https://cn.bing.com/images/search"), a(".search-keyword").attr({ name: "q", placeholder: "\u6d77\u91cf\u56fe\u7247\u641c\u7d22" }),
                b = new Image, b.src = "https://images.google.com/favicon.ico?" + Date.now(), b.onload = function () { a(".search-form").attr("action", "https://www.google.com/search"); a(".search-form").prepend('<input class="search-hidden" type="hidden" name="tbm" value="isch">') }) : a(b).hasClass("torrent") ? (a(".search-form").attr("action", "https://torrentz2.eu/search"), a(".search-keyword").attr({ name: "f", placeholder: "\u78c1\u529b\u94fe\uff0c\u79cd\u5b50\u641c\u7d22" })) : a(b).hasClass("scholar") && (a(".search-form").attr("action",
                    "https://xueshu.baidu.com/s"), a(".search-keyword").attr({ name: "wd", placeholder: "\u4e2d\u82f1\u6587\u6587\u732e\u68c0\u7d22" }), b = new Image, b.src = "https://scholar.google.com/favicon.ico?" + Date.now(), b.onload = function () { a(".search-form").attr("action", "https://scholar.google.com/scholar"); a(".search-keyword").attr({ name: "q" }); a(".search-form").prepend('<input class="search-hidden" type="hidden" name="hl" value="zh-CN">') }); a(".search-keyword").focus()
    } a.ajaxSetup({ cache: !0 }); d(e("bkgd")); f(a(".work-link").find(".tab span:first"));
    g(a(".search-tab").find("span." + e("srch"))); a(".work-link .tab").on("click", "span", function () { f(a(this)) }); a(".search-tab").on("click", "span", function () { g(a(this)); c("srch", this.className.split(" ")[0]) }); a("#setting-icon").on("click", function () {
        a(".work-link .info").hide().html('<div style="padding: 30px 30px 0;min-height: 400px;"><div class="row"><div id="setting-bkgd"class="column col-4"><label>\u7ad9\u70b9\u80cc\u666f</label><select><option value="#ededed">\u5c71\u96fe</option><option value="#ffffff">\u7d20\u767d</option><option value="#f5d9d9">\u6843\u592d</option><option value="#8d6262">\u8354\u679d</option><option value="#b9d7ea">\u5929\u8272</option><option value="#aacfd0">\u9752\u5ddd</option><option value="#283c63">\u6df1\u6d77</option><option value="#928a97">\u9646\u79bb</option><option value="#444f5a">\u9752\u7eaf</option><option value="#373c38">\u77f3\u58a8</option><option value="#40514e">\u6708\u591c</option><option value="#4d4545">\u6d88\u70ad</option></select></div><div class="column col-4"></div></div><div class="row"><input id="setting-save"type="button"value="\u4fdd\u5b58"style="padding: 0 40px;"></div></div>').fadeIn(200);
        a("#setting-bkgd select").val(e("bkgd")); a("#setting-schl select").val(e("schl")); a("#setting-prov select").val(e("prov")); a("#setting-bkgd select").change(function () { d(a(this).val()) }); a.getScript("assets/data/univ.li.js", function () {
            function b(b, c) { var d, e; a.each(univ_list, function (f, g) { b == g.id && (d = g.univs, e = "", a.each(d, function (a, b) { e += "<option value=" + b.id + ">" + b.name + "</option>" }), a("#setting-univ select").html(e), c && a("#setting-univ select").val(c)) }) } b(a("#setting-prov select").val(), e("univ"));
            a("#setting-prov select").change(function () { b(a("#setting-prov select").val()) })
        }); a("#setting-save").off("click").on("click", function () { c("bkgd", a("#setting-bkgd select").val()); c("schl", a("#setting-schl select").val()); a("#setting-univ select").val() && (c("prov", a("#setting-prov select").val()), c("univ", a("#setting-univ select").val())); f(a(".work-link").find(".tab span:first")) })
    })
}(jQuery);