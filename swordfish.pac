dnsDomainIs=function(h,d){
	return h.indexOf(d,h.length-d.length)!==-1&&(d.length===h.length||h.indexOf("."+d,h.length-("."+d).length)!==-1)
}
function FindProxyForURL(u,h){
	if(h.indexOf(".blogspot.")!==-1)
	return "PROXY 119.29.99.164:12150";

a=[
"3wk.cc",
"64memo.com",
"aboluowang.com",
"ablwang.com",
"abc.xyz",
"accounts.google.com",
"akamaihd.net",
"angularjs.org",
"android.com",
"appledaily.com.tw",
"appspot.com",
"ajax.googleapis.com",
"autoproxy-gfwlist.googlecode.com",
"bannedbook.org",
"bbc.com",
"bit.ly",
"bitly.com",
"bloomberg.com",
"blogspot.com",
"blogger.com",
"bloomfortune.com",
"bloomingdales.com",
"bnrmetal.com",
"boardreader.com",
"bobulate.com",
"bodhilinux.com",
"bolin.netfirms.com",
"boltbrowser.com",
"bonjourlesgeeks.com",
"books.com.tw",
"bookshelfporn.com",
"bot.nu",
"bowenpress.com",
"boxun.com",
"boxun.tv",
"br.st",
"bralio.com",
"brandonhutchinson.com",
"break.com",
"breakingtweets.com",
"brightkite.com",
"brizzly.com",
"browserscope.org",
"brucewang.net",
"bt95.com",
"budaedu.org",
"bugbeep.com",
"bugclub.org",
"bullog.org",
"bullogger.com",
"businesstimes.com.cn",
"buugaa.com",
"buy.yahoo.com.tw",
"buzzurl.jp",
"c-est-simple.com",
"c-spanvideo.org",
"c1521.biz.tm",
"c1522.mooo.com",
"cafepress.com",
"calameo.com",
"calebelston.com",
"camera.chinatimes.com",
"canadameet.com",
"canyu.org",
"cao.im",
"caobian.info",
"caochangqing.com",
"contacts.google.com",
"catholic.org.hk",
"cbs.ntu.edu.tw",
"cc9007.spaces.live.com",
"ccc.de",
"ccdtr.org",
"cclife.org",
"ccthere.com",
"cctongbao.com",
"cdjp.org",
"cdn.staticstuff.net",
"cdnews.com.tw",
"cdp.sinica.edu.tw",
"cdp1998.org",
"cdpweb.org",
"cdpwu.org",
"cecc.gov",
"cellulo.info",
"cenci.tk",
"cenews.eu",
"centurys.net",
"ch.shvoong.com",
"chandoo.org",
"change.org",
"changp.com",
"chaos.e-spacy.com",
"chengmingmag.com",
"chenyehao.spaces.live.com",
"cherrysave.com",
"chevronwp7.com",
"china-green-party.spaces.live.com",
"china-week.com",
"china101.com",
"china21.org",
"chinaaffairs.org",
"chinaaid.net",
"chinachannel.hk",
"chinacomments.org",
"chinadigitaltimes.net",
"chinaeweekly.com",
"chinafreepress.org",
"chinagfw.org",
"chinagreenparty.org",
"chinainperspective.com",
"chinainperspective.net",
"chinainperspective.org",
"chinainterimgov.org",
"chinamule.com",
"chinasocialdemocraticparty.com",
"chinasoul.org",
"chinatweeps.com",
"chinaway.org",
"chinaworker.info",
"chinaxchina.com",
"chinayuanmin.org",
"chinese-hermit.net",
"chinese.engadget.com",
"chinese.soifind.com",
"chinese.wsj.com",
"chinesen.de",
"chinesenewsnet.com",
"chinesepen.org",
"chinesetalks.net",
"chingcheong.com",
"chn.chosun.com",
"chrispederick.com",
"chrispederick.net",
"christianstudy.com",
"christusrex.org",
"chrlcg-hk.org",
"chromium.org",
"chuizi.net",
"citizenlab.org",
"city9x.com",
"civicparty.hk",
"civilhrfront.org",
"ck101.com",
"ckf580.com",
"cl.d0z.net",
"cl.ly",
"cl.ufree.org",
"classicalguitarblog.net",
"clientsfromhell.net",
"cloudflare.com",
"cloudfront.net",
"cmule.com",
"cn.calameo.com",
"cn.dayabook.com",
"cn.news.cnyes.com",
"cn.streetvoice.com",
"cn.wsj.com",
"cn.voa.mobi",
"cn2.streetvoice.com",
"cna.com.tw",
"cnavista.com.tw",
"cnd.org",
"cnn.com",
"cochina.org",
"cocoa.zonble.net",
"code.google.com",
"code1984.com",
"codeboxapp.com",
"collateralmurder.com",
"collateralmurder.org",
"comefromchina.com",
"connect.facebook.net",
"conoyo.com",
"contests.twilio.com",
"cookingtothegoodlife.com",
"coolaler.com",
"coolder.com",
"coolloud.org.tw",
"corumcollege.com",
"cotweet.com",
"couchdbwiki.com",
"coveringweb.com",
"cpj.org",
"crackle.com",
"crd-net.org",
"creaders.net",
"crossthewall.net",
"css.pixnet.in",
"csuchen.de",
"cubicle17.com",
"cuhkacs.org",
"cuihua.org",
"cuiweiping.net",
"curvefish.com",
"cyberghost.natado.com",
"cydia.ifuckgfw.com",
"cynscribe.com",
"cytode.us",
"dabr.co.uk",
"dabr.mobi",
"dadazim.com",
"dadi360.com",
"dailidaili.com",
"dailymotion.com",
"dailynews.sina.com",
"dajiyuan.com",
"dajusha.baywords.com",
"dalailama.com",
"dalailamaworld.com",
"dalianmeng.org",
"danke4china.net",
"danwei.org",
"daolan.net",
"davidslog.com",
"daxa.cn",
"dayaarmongol.ning.com",
"daylife.com",
"de-sci.org",
"default.secureserver.net",
"delcamp.net",
"delicious.com",
"demo.opera-mini.net",
"democrats.org",
"derekhsu.homeip.net",
"desc.se",
"designerol.com",
"destiny.xfiles.to",
"deutsche-welle.de",
"dev102.com",
"developers.box.net",
"devio.us",
"diaoyuislands.org",
"digitalnomadsproject.org",
"digicert.com",
"diigo.com",
"dimitrik.free.fr",
"discuss.com.hk",
"discoverdvc.org",
"disp.cc",
"dit-inc.us",
"dizhidizhi.com",
"dl-laby.jp",
"dl.box.net",
"dlsite.com",
"dnscrypt.org",
"docs.google.com",
"docstoc.com",
"dojin.com",
"dolc.de",
"domain.club.tw",
"domainhelp.search.com",
"dongde.com",
"dongtaiwang.com",
"dongtaiwang.net",
"dongyangjing.com",
"dontfilter.us",
"dontmovetochina.com",
"dotheyfolloweachother.com",
"dotplane.com",
"doubleaf.com",
"dougscripts.com",
"dowei.org",
"doxygen.org",
"dphk.org",
"dpp.org.tw",
"drewolanoff.com",
"dropbox.com",
"dropboxstatic.com",
"dtiblog.com",
"dtiserv2.com",
"duckload.com",
"duckduckgo.com",
"duckmylife.com",
"duihua.org",
"duoweitimes.com",
"duping.net",
"dupola.com",
"dupola.net",
"dvorak.org",
"dw-world.com",
"dw-world.de",
"dw.de",
"dwnews.com",
"dy24k.info",
"dynawebinc.com",
"dzze.com",
"e-gold.com",
"e-info.org.tw",
"e-traderland.net",
"ea.com.cn",
"eamonnbrennan.com",
"earthquake.usgs.gov",
"easy-share.com",
"ebookee.com",
"echofon.com",
"edoors.com",
"edubridge.com",
"eevpn.com",
"efksoft.com",
"eic-av.com",
"elementaryos.org",
"eltondisney.com",
"emacsblog.org",
"embedly.com",
"embr.in",
"emory.edu",
"emscripten.org",
"emule-ed2k.com",
"en.favotter.net",
"en.wikipedia.org",
"encrypted.google.com",
"englishfromengland.co.uk",
"entermap.com",
"epochtimes.com",
"epochtimes.ie",
"erights.net",
"eriversoft.com",
"ernestmandel.org",
"eslite.com",
"etaiwannews.com",
"etizer.org",
"etools.ncol.com",
"eventful.com",
"everyday-carry.com",
"exblog.jp",
"exploader.net",
"eyespirit.info",
"eyny.com",
"ezpc.tk",
"ezpeer.com",
"facebook.com",
"fail.hk",
"fakku.net",
"falsefire.com",
"famunion.com",
"fan-qiang.com",
"fanfou.de",
"fanfou.im",
"fanfou.la",
"fangbinxing.com",
"fangeming.com",
"fanqiangyakexi.net",
"farwestchina.com",
"farxian.com",
"fastly.net",
"faststone.org",
"favorious.com",
"favstar.fm",
"faydao.com",
"fb.me",
"fbcdn.net",
"fc2.com",
"fc2china.com",
"feedblitz.com",
"feedbooks.mobi",
"feedly.com",
"feedproxy.google.com",
"feeds.feedburner.com",
"feeds2.feedburner.com",
"feedzshare.com",
"feer.com",
"felixcat.net",
"feministteacher.com",
"fengzhenghu.com",
"fflick.com",
"fgmtv.org",
"filefactory.com",
"files2me.com",
"fileserve.com",
"filesonic.com",
"fillthesquare.org",
"findbook.tw",
"finler.net",
"fireofliberty.org",
"firstfivefollowers.com",
"flagfox.net",
"flecheinthepeche.fr",
"fleshbot.com",
"flickr.com",
"flickrhivemind.net",
"flipboard.com",
"flowerofhappiness.spaces.live.com",
"fofg.org",
"fooooo.com",
"footwiball.com",
"forum.baby-kingdom.com",
"forum.chinatimes.com",
"forum.cyberctm.com",
"forum.idsam.com",
"forum.iset.com.tw",
"forum.my903.com",
"forum.mymaji.com",
"forum.newsgroup.la",
"forum.nownews.com",
"forum.palmislife.com",
"forum.pchome.com.tw",
"forum.setty.com.tw",
"forum.sina.com.hk",
"forum.slime.com.tw",
"forum.tvb.com",
"forum.yorkbbs.ca",
"fotop.net",
"fourface.nodesnoop.com",
"foursquare.com",
"fourthinternational.org",
"foxdie.us",
"foxsub.com",
"foxtang.com",
"franklc.com",
"freakshare.com",
"fredwilson.vc",
"free-ssh.com",
"free-vpn.info",
"free.fr",
"freeciv.org",
"freedomhouse.org",
"freegao.com",
"freegateget.googlepages.com",
"freelotto.com",
"freeman2.com",
"freemoren.com",
"freemorenews.com",
"freeoz.org",
"freessh.us",
"freewallpaper4.me",
"freewebs.com",
"freeweibo.com",
"freexinwen.com",
"friendfeed-media.com",
"friendfeed.com",
"fring.com",
"fringenetwork.com",
"frommel.net",
"fscked.org",
"fsurf.com",
"ftchinese.com",
"fuckcnnic.net",
"fuckgfw.com",
"fuckgfw.org",
"fulue.com",
"funp.com",
"furinkan.com",
"furl.net",
"futurechinaforum.org",
"futureme.org",
"futuremessage.org",
"fzh999.com",
"fzh999.net",
"gabocorp.com",
"galenwu.com",
"gamebase.com.tw",
"gaoming.net",
"gaopi.net",
"gappp.org",
"gartlive.com",
"gather.com",
"gaymap.cc",
"gazotube.com",
"gb.chinatimes.com",
"gclooney.com",
"gdbt.net",
"gdzf.org",
"geek-art.net",
"geekerhome.com",
"geekmade.co.uk",
"geekmanuals.com",
"generesis.com",
"geohot.com",
"geometrictools.com",
"get-digital-help.com",
"getcloudapp.com",
"getfreedur.com",
"getiton.com",
"getjetso.com",
"getlantern.org",
"getsmartlinks.com",
"getsocialscope.com",
"gfw.org.ua",
"gfwinterceptor.googlecode.com",
"ggpht.com",
"ggssl.com",
"ghost.org",
"gigporno.ru",
"gimpshop.com",
"ginx.com",
"git-scm.com",
"givemesomethingtoread.com",
"glennhilton.com",
"global.hkepc.com",
"globaldelight.com",
"globalmuseumoncommunism.org",
"globalvoicesonline.org",
"gmail.com",
"gmbd.cn",
"gmhz.org",
"gmozomg.izihost.org",
"godadday.com",
"golang.org",
"goldwave.com",
"gongmeng.info",
"gongminliliang.com",
"gongwt.com",
"goo.gl",
"goodreaders.com",
"goodreads.com",
"goofind.com",
"google.com",
"google.com.hk",
"google.co.jp",
"googleapis.com",
"googlecode.com",
"google-analytics.com",
"googlepages.com",
"googlesource.com",
"googleusercontent.com",
"googlevideo.com",
"gopetition.com",
"gpass1.com",
"grandtrial.org",
"graphis.ne.jp",
"great-firewall.com",
"greatfirewall.biz",
"greatfirewallofchina.net",
"greatfirewallofchina.org",
"greatroc.org",
"greenparty.org.tw",
"greenvpn.net",
"gs-discuss.com",
"gseeker.com",
"gstatic.com",
"gtap.googlecode.com",
"gtkforums.com",
"gtricks.com",
"guancha.org",
"gufeng521.spaces.live.com",
"gun-world.net",
"guomin.us",
"gutteruncensored.com",
"gzm.tv",
"gzone-anime.info",
"h-china.org",
"h1n1china.org",
"hacken.cc",
"hackthatphone.net",
"hahlo.com",
"hakkatv.org.tw",
"hanunyi.com",
"hasaowall.com",
"hdtvb.net",
"heartyit.com",
"heix.pp.ru",
"heiyo.info",
"hellonewyork.us",
"helloqueer.com",
"hellotxt.com",
"hellouk.org",
"help.linksalpha.com",
"helpeachpeople.com",
"hen.bao.li",
"heqinglian.net",
"heroku.com",
"heungkongdiscuss.com",
"hidecloud.com",
"hidemyass.com",
"higfw.com",
"highcharts.com",
"highrockmedia.com",
"hihiforum.com",
"hiitch.com",
"hjclub.info",
"hk-pub.com",
"hk.geocities.com",
"hk.jiepang.com",
"hk.knowledge.yahoo.com",
"hk.myblog.yahoo.com",
"hk.news.yahoo.com",
"hk.rd.yahoo.com",
"hk.search.yahoo.com",
"hk.video.news.yahoo.com",
"hk.yahoo.com",
"hk32168.com",
"hkbf.org",
"hkdailynews.com.hk",
"hkday.net",
"hkej.com",
"hkepc.com",
"hkg.westkit.net",
"hkgolden.com",
"hkgreenradio.org",
"hkheadline.com",
"hkjc.com",
"hkjp.easyweb.hk",
"hkjp.org",
"hkreporter.com",
"hkzone.org",
"hnjhj.com",
"holz.byethost8.com",
"home.so-net.net.tw",
"honeonet.spaces.live.com",
"hongmeimei.com",
"hootsuite.com",
"hotfile.com",
"hotpot.hk",
"hotspotshield.com",
"hougaige.com",
"hqcdp.org",
"hrichina.org",
"hrw.org",
"hsjp.net",
"htmldog.com",
"html5rocks.com",
"htxt.it",
"huajiadi.spaces.live.com",
"huanghuagang.org",
"hudatoriq.web.id",
"hugoroy.eu",
"hujiachina.spaces.live.com",
"hulu.com",
"humanities.uchicago.edu",
"hunch.net",
"hungerstrikeforaids.org",
"huping.net",
"hutianyi.net",
"hwinfo.com",
"i2p2.de",
"i2runner.com",
"ialmostlaugh.com",
"iask.ca",
"ibiblio.org",
"iblogserv-f.net",
"ibros.org",
"icl-fi.org",
"icloud.com",
"iconpaper.org",
"identi.ca",
"idouga.com",
"idv.tw",
"ied2k.net",
"ieemdai.spaces.live.com",
"ifan.cz.cc",
"ifanr.com",
"ifcss.org",
"ift.tt",
"igfw.net",
"igfw.tk",
"ignitedetroit.net",
"illusionfactory.com",
"ilove80.be",
"im.tv",
"imageflea.com",
"imageshack.us",
"imagetwist.com",
"imagevenue.com",
"imagexyz.com",
"imdb.com",
"img.ly",
"imgchili.net",
"imgs.co",
"imgur.com",
"imkev.com",
"imlive.com",
"incredibox.fr",
"infinitylist.com",
"info.51.ca",
"inmediahk.net",
"instagram.com",
"intellectuapp.com",
"interestinglaugh.com",
"interfaceaddiction.com",
"internationalrivers.org",
"internetfreedom.org",
"internetpopculture.com",
"iphonehacks.com",
"iphonix.fr",
"ipicture.ru",
"ipobar.com",
"ippotv.com",
"ironicsoftware.com",
"ironpython.net",
"isaacmao.com",
"isgreat.org",
"islam.org.hk",
"ismprofessional.net",
"isohunt.com",
"istockphoto.com",
"itaboo.info",
"ithelp.ithome.com.tw",
"itweet.net",
"iu45.com",
"iyouport.com",
"izaobao.us",
"izles.net",
"j.mp",
"jayparkinsonmd.com",
"jeanyim.com",
"jgoodies.com",
"jiaoyou8.com",
"jiehua.cz",
"jieshibaobao.com",
"jimoparty.com",
"jingpin.org",
"jitouch.com",
"jkforum.net",
"joachims.org",
"jobso.tv",
"joeedelman.com",
"journalofdemocracy.org",
"jpopforum.net",
"juliereyc.com",
"junauza.com",
"junefourth-20.net",
"justin.tv",
"justtristan.com",
"jwmusic.org",
"jyxf.net",
"jyzj.waqn.com",
"k2.xrea.com",
"ka-wai.com",
"kagyuoffice.org.tw",
"kaiyuan.de",
"kanzhongguo.com",
"karayou.com",
"kcsoftwares.com",
"kechara.com",
"keepandshare.com",
"kendincos.net",
"kenengba.com",
"khmusic.com.tw",
"kineox.free.fr",
"kinghost.com",
"kingstone.com.tw",
"knol.google.com",
"knowledge.yahoo.com",
"knowledgerush.com",
"kodingen.com",
"kompozer.net",
"koolsolutions.com",
"koornk.com",
"kt.kcome.org",
"kui.name",
"kun.im",
"kurtmunger.com",
"kusocity.com",
"kwongwah.com.my",
"kzeng.info",
"ladbrokes.com",
"lalulalu.com",
"lancome.com",
"laogai.org",
"laomiu.com",
"laoyang.info",
"laptoplockdown.com",
"latelinenews.com",
"latimesblogs.latimes.com",
"leecheukyan.org",
"legaltech.law.com",
"lenwhite.com",
"lesscss.org",
"letscorp.net",
"liansi.org",
"lianyue.net",
"liaowangxizang.net",
"liberal.org.hk",
"libertytimes.com.tw",
"licdn.com",
"lidecheng.com",
"life.fly4ever.me",
"lifemiles.com",
"limera1n.com",
"limesn0w.com",
"linglingfa.com",
"linux-engineer.net",
"linuxconfig.org",
"linuxreviews.org",
"linuxtoy.org",
"lipuman.com",
"list.ly",
"lists.debian.org",
"lists.w3.org",
"littlebigdetails.com",
"liu.lu",
"lithium.com",
"liudejun.com",
"liuhanyu.com",
"liujianshu.com",
"liuxiaotong.com",
"livestation.com",
"livevideo.com",
"livingonline.us",
"lizhizhuangbi.com",
"llnwd.net",
"lockdown.com",
"log.riku.me",
"logbot.net",
"logmike.com",
"london.neighborhoodr.com",
"longhair.hk",
"longtermly.net",
"lookatgame.com",
"lookingglasstheatre.org",
"lookpic.com",
"lovequicksilver.com",
"lrfz.com",
"lsd.org.hk",
"lsforum.net",
"lupm.org",
"lvhai.org",
"lyricsquote.com",
"m-team.cc",
"m.oulove.org",
"m.plixi.com",
"m.slandr.net",
"m.tweete.net",
"mac.com",
"macys.com",
"mad-ar.ch",
"madmenunbuttoned.com",
"magazines.sina.com.tw",
"maiio.net",
"mail-archive.com",
"makemymood.com",
"makzhou.warehouse333.com",
"malaysiakini.com",
"marco.org",
"marines.mil",
"markmail.org",
"markmilian.com",
"martau.com",
"maruta.be",
"marxist.com",
"marxist.net",
"marxists.org",
"mashable.com",
"matainja.com",
"mathiew-badimon.com",
"mayimayi.com",
"md-t.org",
"mediafire.com",
"medium.com",
"meetup.com",
"megaporn.com",
"megarotic.com",
"megaupload.com",
"megavideo.com",
"megurineluka.com",
"meirixiaochao.com",
"melon-peach.com",
"meme.yahoo.com",
"memedia.cn",
"memehk.com",
"mesotw.com",
"metacafe.com",
"meteorshowersonline.com",
"mhradio.org",
"michaelmarketl.com",
"middle-way.net",
"mihk.hk",
"mihua.org",
"mike.cz.cc",
"mimivip.com",
"minghui.org",
"mingjingnews.com",
"mingpao.com",
"mingpaomonthly.com",
"mingpaonews.com",
"mingpaony.com",
"mingpaosf.com",
"mingpaotor.com",
"mingpaovan.com",
"minimalmac.com",
"mininova.org",
"minus.com",
"minzhuhua.net",
"minzhuzhongguo.org",
"miroguide.com",
"mirrorbooks.com",
"mitbbs.com",
"mixedmedialabs.com",
"mixero.com",
"mixx.com",
"mizzmona.com",
"mk5000.com",
"mlcool.com",
"mmaaxx.com",
"mmmca.com",
"mobatek.net",
"mobile01.com",
"mobileways.de",
"mobypicture.com",
"modfetish.com",
"mog.com",
"www.molihua.org",
"mondex.org",
"morningsun.org",
"movabletype.com",
"moviefap.com",
"mp",
"mpettis.com",
"mpinews.com",
"mrtweet.com",
"msguancha.com",
"mthruf.com",
"mtw.tl",
"multiply.com",
"multiupload.com",
"muouju.com",
"muzi.com",
"muzi.net",
"mx981.com",
"my.keso.cn",
"my.opera.com",
"myaudiocast.com",
"myav.com.tw",
"myboooks.googlepages.com",
"mychinamyhome.com",
"myeclipseide.com",
"myforum.com.hk",
"myforum.com.uk",
"myfreshnet.com",
"mymedia.yam.com",
"mypaper.pchome.com.tw",
"myparagliding.com",
"mypopescu.com",
"myshare.url.com.tw",
"mysinablog.com",
"mysqlperformanceblog.com",
"n.yam.com",
"naitik.net",
"nakido.com",
"namsisi.com",
"nanyangpost.com",
"nanzao.com",
"naol.ca",
"naveensrinivasan.com",
"navicat.com",
"navigeaters.com",
"nccwatch.org.tw",
"nch.com.tw",
"ncn.org",
"nekoslovakia.net",
"nemesis2.qx.net",
"netcolony.com",
"netflix.com",
"netme.cc",
"networkedblogs.com",
"neverforget8964.org",
"new-3lunch.net",
"new-akiba.com",
"newcenturymc.com",
"newcenturynews.com",
"newchen.com",
"newgrounds.com",
"news.atebits.com",
"news.chinatimes.com",
"news.ghostery.com",
"news.google.com.hk",
"news.msn.com.tw",
"news.omy.sg",
"news.pchome.com.tw",
"news.pts.org.tw",
"news.sina.com.hk",
"news.sina.com.tw",
"news.singtao.ca",
"news.yam.com",
"newscn.org",
"newsforums.bbc.co.uk",
"newsminer.com",
"newspeak.cc",
"newspp.org",
"newstin.com",
"newtalk.tw",
"nextmedia.com",
"nexton-net.jp",
"nexttv.com.tw",
"nf.id.au",
"ngensis.com",
"ngs2.info",
"nic.cz.cc",
"nicovideo.jp",
"nicovideo.tw",
"nighost.org",
"nintendium.com",
"njuice.com",
"no-ip.com",
"nobelprize.org",
"nobodycanstop.us",
"nokola.com",
"noobbox.com",
"nooidea.com",
"nordstrom.com",
"nordstromimage.com",
"notes.alexdong.com",
"novelasia.com",
"nownews.com",
"nowtorrents.com",
"noypf.com",
"nps.gov",
"nrk.no",
"ntdtv.com",
"nuexpo.com",
"nurgo-software.com",
"nysingtao.com",
"nytimes.com",
"nytimg.com",
"nzchinese.net.nz",
"obmem.com",
"observechina.net",
"october-review.org",
"ogaoga.org",
"ohloh.net",
"oikos.com.tw",
"oiktv.com",
"oizoblog.com",
"old-cat.net",
"old.nabble.com",
"olumpo.com",
"omgili.com",
"omnitalk.",
"on.cc",
"one.xthost.info",
"onlylady.cn",
"oopsforum.com",
"open.com.hk",
"openid.com",
"openleaks.org",
"openvpn.net",
"openwebster.com",
"opera.com",
"opnir.com",
"orn.jp",
"osfoora.com",
"otofotki.pl",
"ourdearamy.com",
"oursogo.com",
"overlapr.com",
"ow.ly",
"ozchinese.com",
"p-cdn.com",
"pacificpoker.com",
"packages.debian.org",
"paddle.com",
"page.bid.yahoo.com",
"page2rss.com",
"paint.net",
"palacemoon.com",
"pandora.com",
"pandora.tv",
"panluan.net",
"panoramio.com",
"paper-replika.com",
"paper.li",
"paperb.us",
"parade.com",
"parislemon.com",
"pastebin.ca",
"pastie.org",
"pbs.org",
"pbwiki.com",
"pbworks.com",
"pbxes.com",
"pbxes.org",
"pcdiscuss.com",
"pchome.com.tw",
"pcworld.com",
"pdetails.com",
"peacefire.org",
"peacehall.com",
"peeasian.com",
"peerpong.com",
"pekingduck.org",
"penchinese.com",
"penchinese.net",
"pengyulong.com",
"penthouse.com",
"peopo.org",
"petardas.com",
"philly.com",
"photo.utom.us",
"photofocus.com",
"photos.dailyme.com",
"picasaweb.google.com",
"picidae.net",
"picturedip.com",
"picturesocial.com",
"pidown.com",
"pign.net",
"pin6.com",
"ping.fm",
"pinoy-n.com",
"pinporn.com",
"pioneer-worker.forums-free.com",
"piring.com",
"pixelqi.com",
"pixnet.net",
"pk.com",
"placemix.com",
"planetsuzy.org",
"plays.com.tw",
"plupload.com",
"plurk.com",
"plurktop.mmdays.com",
"plus.google.com",
"plus28.com",
"plusbb.com",
"pmates.com",
"po2b.com",
"pocoo.org",
"podictionary.com",
"pokerstars.com",
"popularpages.net",
"popyard.com",
"popyard.org",
"porn.com",
"porn2.com",
"pornbase.org",
"pornhub.com",
"pornrapidshare.com",
"pornstarclub.com",
"porntube.com",
"pornvisit.com",
"portis21.spaces.live.com",
"pose.com",
"post.anyu.org",
"postadult.com",
"posterous.com",
"power.com",
"powerapple.com",
"powercx.com",
"prayforchina.net",
"premeforwindows7.com",
"presentationzen.com",
"president.gov.tw",
"privacybox.de",
"privatepaste.com",
"program-think.spaces.live.com",
"prosiben.de",
"proxomitron.info",
"proxy.org",
"proxypy.net",
"proxyroad.com",
"prozz.net",
"ps.w.org",
"psblog.name",
"psiphon.ca",
"psiphon.civisec.org",
"ptt.cc",
"public-api.wordpress.com",
"pubu.com.tw",
"puffstore.com",
"pullfolio.com",
"pulse.yahoo.com",
"pureconcepts.net",
"purepdf.com",
"purplera1n.com",
"putlocker.com",
"puttycm.free.fr",
"pwned.com",
"pypi.python.org",
"python.com.tw",
"pythonhackers.com",
"qanote.com",
"qienkuen.org",
"qixianglu.cn",
"qkshare.com",
"qoos.com",
"qstatus.com",
"qtrac.eu",
"qtweeter.com",
"quadedge.com",
"qusi8.net",
"qvodzy.org",
"qxbbs.org",
"radiovaticana.org",
"railswizard.org",
"rangzen.org",
"ranyunfei.com",
"rapidscan.me",
"rapidshare.com",
"rapidshare1.com",
"rapidshare8.com",
"rapidsharedata.com",
"rayfme.com",
"rcinet.ca",
"rconversation.blogs.com",
"rd.io",
"rdio.com",
"read100.com",
"readingtimes.com.tw",
"realraptalk.com",
"recordhistory.org",
"redtube.com",
"referer.us",
"reflectivecode.com",
"renminbao.com",
"renyurenquan.org",
"ressim.net",
"retweeteffect.com",
"retweetist.com",
"retweetrank.com",
"revleft.com",
"revver.com",
"rfa.org",
"rfachina.com",
"rfamobile.org",
"rfi.fr",
"riku.me",
"rileyguide.com",
"rlwlw.com",
"robtex.com",
"robustnessiskey.com",
"rocmp.org",
"ronjoneswriter.com",
"roodo.com",
"roosong.cn",
"rsf-chinese.org",
"rsf.org",
"rssmeme.com",
"rthk.hk",
"rthk.org.hk",
"rti.org.tw",
"rubyinstaller.org",
"rushbee.com",
"rutube.ru",
"ruyiseek.com",
"rxhj.net",
"s.xiaod.in",
"s1heng.com",
"s3.amazonaws.com",
"sacom.hk",
"saiq.me",
"salvation.org.hk",
"samair.ru",
"samsoff.es",
"sandnoble.com",
"sankaizok.com",
"sanmin.com.tw",
"sapikachu.net",
"savetibet.org",
"say2.info",
"sbnation.com",
"scribd.com",
"seapuff.com",
"seanlook.com",
"secretchina.com",
"secretgarden.no",
"secure.wikimedia.org",
"seesmic.com",
"seezone.net",
"sejie.com",
"sendoid.com",
"sendspace.com",
"sephora.com",
"sesawe.net",
"sesawe.org",
"sethwklein.net",
"sevenload.com",
"sex-11.com",
"sex.com",
"sex8.cc",
"sexandsubmission.com",
"sexhu.com",
"sexhuang.com",
"sexinsex.net",
"sfileydy.com",
"sha7.info",
"shangfang.org",
"shapeservices.com",
"share.ovi.com",
"share.skype.com",
"share.youthwant.com.tw",
"sharebee.com",
"sharecool.org",
"sharkdolphin.com",
"sharpdaily.com.hk",
"shaunthesheep.com",
"shell.cjb.net",
"shenshou.org",
"shenyunperformingarts.org",
"shifeike.blog125.fc2blog.net",
"shinychan.com",
"shixiao.org",
"shizhao.org",
"shkspr.mobi",
"shwchurch3.com",
"simpleproductivityblog.com",
"sin1.g.adnxs.com",
"singularitys.spaces.live.com",
"sinoants.com",
"sinonet.ca",
"sinopitt.info",
"sis001.com",
"site90.net",
"sitebro.tw",
"siteks.uk.to",
"sitemaps.org",
"sites.google.com",
"sitetag.us",
"siyi123123123.spaces.live.com",
"sjum.cn",
"skimtube.com",
"skype.com",
"slavasoft.com",
"slheng.com",
"slideshare.net",
"slinkset.com",
"slutload.com",
"snaptu.com",
"sneakme.net",
"so-ga.net",
"so-news.com",
"sobees.com",
"soc.mil",
"socialwhale.com",
"sod.co.jp",
"softwarebychuck.com",
"sogclub.com",
"sogrady.me",
"sokamonline.com",
"solozorro.tk",
"songjianjun.com",
"sopcast.com",
"sorting-algorithms.com",
"soumo.info",
"soundcloud.com",
"soundofhope.org",
"soup.io",
"soupofmedia.com",
"sourceforge.net",
"sowers.org.hk",
"space-scape.com",
"spankwire.com",
"spapps.co",
"spb.com",
"speckleapp.com",
"speedpluss.org",
"spencertipping.com",
"sproutcore.com",
"squarespace.com",
"srcf.ucam.org",
"sstatic.net",
"starp2p.com",
"state168.com",
"status.twhirl.org",
"steel-storm.com",
"sthoo.com",
"stickam.com",
"stickeraction.com",
"stonegames.net",
"stoneip.info",
"stoptibetcrisis.net",
"storagenewsletter.com",
"stoweboyd.com",
"streamingthe.net",
"strongvpn.com",
"student.tw",
"stuffimreading.com",
"stuffimreading.net",
"subacme.rerouted.org",
"sublexical.spaces.live.com",
"sugarsync.com",
"support",
"sweux.com",
"swift-tools.net",
"syncback.com",
"sysadmin1138.net",
"sysresccd.org",
"sytes.net",
"szbbs.net",
"talk.google.com",
"t.16class.cn",
"t.co",
"t.fishnote.net",
"t.huhaitai.com",
"t.jteet.com",
"t.kun.im",
"t.neolee.cn",
"t.orzdream.com",
"t.sunxun.info",
"t35.com",
"t66y.com",
"taa-usa.org",
"tabtter.jp",
"tacem.org",
"tagwalk.com",
"taiwan-sex.com",
"taiwandaily.net",
"taiwankiss.com",
"taiwannation.50webs.com",
"taiwantt.org.tw",
"taiwanyes.ning.com",
"tamiaode.tk",
"tangben.com",
"taolun.info",
"tap11.com",
"tapbots.com",
"taweet.com",
"tbpic.info",
"tchrd.org",
"tcno.net",
"teamseesmic.com",
"teashark.com",
"techlifeweb.com",
"technorati.com",
"techparaiso.com",
"teck.in",
"telecomspace.com",
"tetronics.com",
"the-sun.on.cc",
"theappleblog.com",
"theatrum-belli.com",
"thebcomplex.com",
"theblemish.com",
"thechangelog.com",
"thechinabeat.org",
"thedailywh.at",
"thedieline.com",
"thediplomat.com",
"thedw.us",
"thegatesnotes.com",
"theguardian.com",
"thehousenews.com",
"thehungrydudes.com",
"theinternetwishlist.com",
"thelifeyoucansave.com",
"thelius.org",
"thepiratebay.org",
"thepiratebay.se",
"theqii.info",
"thesartorialist.com",
"thespeeder.com",
"thetibetpost.com",
"thetrotskymovie.com",
"thevivekspot.com",
"thisav.com",
"thisiswhyyouarefat.com",
"thkphoto.com",
"thomasbernhard.org",
"threatchaos.com",
"throughnightsfire.com",
"thumbzilla.com",
"tiananmenmother.org",
"tiandixing.org",
"tianhuayuan.com",
"tiantibooks.org",
"tianzhu.org",
"tibet.com",
"tibet.net",
"tibet.org.tw",
"tibetalk.com",
"tibetanyouthcongress.org",
"tibetfund.org",
"tibetonline.tv",
"tibetwrites.org",
"tidyread.com",
"time.com",
"times.hinet.net",
"tinypaste.com",
"tistory.com",
"tjholowaychuk.com",
"tkcs-collins.com",
"tkforum.tk",
"tldp.org",
"tmagazine.com",
"tnaflix.com",
"togetter.com",
"tokyo-247.com",
"tokyo-hot.com",
"tomayko.com",
"tomsc.com",
"tonyyan.net",
"toodoc.com",
"toonel.net",
"topic.youthwant.com.tw",
"topnews.in",
"topshare.us",
"topshareware.com",
"topstyle4.com",
"topsy.com",
"tor.blingblingsquad.net",
"tor.updatestar.com",
"tora.to",
"torproject.org",
"touch99.com",
"toutfr.com",
"tpi.org.tw",
"transgressionism.org",
"travelinlocal.com",
"trendsmap.com",
"trialofccp.org",
"tripod.com",
"trustedbi.com",
"truth101.co.tv",
"truthcn.com",
"truveo.com",
"tsctv.net",
"tsemtulku.com",
"tsquare.tv",
"tt1069.net",
"tttan.com",
"tuanzt.com",
"tube.com",
"tui.orzdream.com",
"tuidang.net",
"tuite.googlecode.com",
"tuite.im",
"tuite.in",
"tumblr.awflasher.com",
"tumblr.com",
"tumblweed.org",
"tunein.com",
"turbobit.net",
"turbotwitter.com",
"turningtorso.com",
"tuxtraining.com",
"tv-intros.com",
"tv.com",
"tvb.com",
"tvboxnow.com",
"tvider.com",
"tvunetworks.com",
"tw.jiepang.com",
"tw.myblog.yahoo.com",
"tw.news.yahoo.com",
"tw.streetvoice.com",
"tw.voa.mobi",
"tw.yahoo.com",
"twa.sh",
"twapperkeeper.com",
"twaud.io",
"twbbs.net.tw",
"twbbs.org",
"twblogger.com",
"tweepguide.com",
"tweeplike.me",
"tweepmag.com",
"tweepml.org",
"tweetbackup.com",
"tweetboard.com",
"tweetboner.biz",
"tweetdeck.com",
"tweete.net",
"tweetedtimes.com",
"tweetmeme.com",
"tweetmylast.fm",
"tweetphoto.com",
"tweetrans.com",
"tweetree.com",
"tweets.seraph.me",
"tweetwally.com",
"tweetymail.com",
"twftp.org",
"twibase.com",
"twibble.de",
"twibbon.com",
"twibs.com",
"twifan.com",
"twiffo.com",
"twiggit.org",
"twilog.org",
"twimbow.com",
"twimg.com",
"twimg.edgesuite.net",
"twindexx.com",
"twip.me",
"twipple.jp",
"twistar.cc",
"twisternow.com",
"twistory.net",
"twit2d.com",
"twitbrowser.net",
"twitcause.com",
"twitese.spaces.live.com",
"twitgether.com",
"twitgoo.com",
"twitiq.com",
"twitlonger.com",
"twitoaster.com",
"twitonmsn.com",
"twitpic.com",
"twitreferral.com",
"twitstat.com",
"twitter.com",
"twitter.fishnote.net",
"twitter.jp",
"twittercounter.com",
"twitterfeed.com",
"twittergadget.com",
"twitterkr.com",
"twittermail.com",
"twittertim.es",
"twitthat.com",
"twitturly.com",
"twitvid.com",
"twitzap.com",
"twiyia.com",
"twreg.info",
"twstar.net",
"twt.fm",
"twtkr.com",
"twtr2src.ogaoga.org",
"twttr.com",
"twurl.nl",
"twyac.org",
"tycool.com",
"tynsoe.org",
"typekit.net",
"typepad.com",
"tzangms.com",
"udn.com",
"ueuo.com",
"uighurbiz.net",
"ulike.net",
"ultravpn.fr",
"ultraxs.com",
"ultrevpn.fr",
"uncyclomedia.org",
"uncyclopedia.info",
"unholyknight.com",
"uni.cc",
"uniteddaily.com.my",
"unknownspace.org",
"uocn.org",
"upcoming.yahoo.com",
"upload4u.info",
"uploaded.net",
"uploaded.to",
"uploadstation.com",
"urlborg.com",
"urlparser.com",
"urlpic.com",
"us.to",
"usacn.com",
"usinfo.state.gov",
"usmc.mil",
"ustream.tv",
"uushare.com",
"uwants.com",
"uwants.net",
"uyghurcongress.org",
"v-state.org",
"v2ex.com",
"v70.us",
"vaayoo.com",
"value-domain.com",
"van698.com",
"vanemu.cn",
"vanilla-jp.com",
"vapurl.com",
"vatn.org",
"vcf-online.org",
"vcfbuilder.org",
"veempiire.com",
"ventureswell.com",
"veoh.com",
"verizon.net",
"verybs.com",
"vft.com.tw",
"video.aol.ca",
"video.aol.co.uk",
"video.aol.com",
"video.fdbox.com",
"video.foxbusiness.com",
"video.google.com",
"video.tiscali.it",
"video.yahoo.com",
"videomo.com",
"vids.myspace.com",
"viewmorepics.myspace.com",
"views.fm",
"viki.com",
"vimeo.com",
"vimeocdn.com",
"vincnd.com",
"vine.co",
"vineapp.com",
"vinniev.com",
"vlog.xuite.net",
"vmixcore.com",
"voachinese.com",
"voachineseblog.com",
"voanews.com",
"vot.org",
"vox-cdn.com",
"w.idaiwan.com",
"waffle1999.com",
"wahas.com",
"waigaobu.com",
"waikeung.org",
"waiwaier.com",
"wallornot.org",
"wallpapercasa.com",
"wanderinghorse.net",
"wangafu.net",
"wangjinbo.org",
"wanglixiong.com",
"wangruoshui.net",
"wangyi64.spaces.live.com",
"wapedia.mobi",
"washeng.net",
"watch8x.com",
"wattpad.com",
"wearn.com",
"web.pts.org.tw",
"web2project.net",
"webbang.net",
"webcache.googleusercontent.com",
"webfee.tk",
"webs-tv.net",
"webshots.com",
"websitepulse.com",
"webworkerdaily.com",
"weeewooo.net",
"weekmag.info",
"wefong.com",
"weigegebyc.dreamhosters.com",
"weijingsheng.org",
"wellplacedpixels.com",
"wengewang.com",
"wengewang.org",
"wenhui.ch",
"wenku.com",
"wenxuecity.com",
"wenyunchao.com",
"wenyunchao.spaces.live.com",
"westca.com",
"wetpussygames.com",
"wexiaobo.org",
"wezhiyong.org",
"wezone.net",
"wforum.com",
"wg1966.com",
"whatblocked.com",
"whereiswerner.com",
"whippedass.com",
"whitebear.freebearblog.org",
"whydidyoubuymethat.com",
"whyx.org",
"wikileaks.ch",
"wikileaks.org",
"wikimapia.org",
"wikipedia.org",
"wikiwiki.jp",
"wordpress.com",
"wp.com",
"wsjhk.com",
"wsjemail.com",
"www.bbc.co.uk",
"www.beyondfirewall.com",
"www.myfreecams.com",
"www.vpngate.net",
"www.google.com.hk",
"www.google.com",
"www.unofficialgoogledatascience.com",
"www.penchinese.org",
"xbookcn.com",
"xbookcn.net",
"yeeyan.org",
"yegle.net",
"yezimary.spaces.live.com",
"yfrog.com",
"yi.org",
"yipub.com",
"youmaker.com",
"youpai.org",
"youporn.com",
"your-freedom.net",
"yousendit.com",
"youthbao.com",
"youthnetradio.org",
"youtu.be",
"youtube-nocookie.com",
"youtube.com",
"youtubecn.com",
"ytimg.com",
"zh.wikipedia.org",
"zh.wikisource.org",
"|http:",
"|https:"];
for(i=0;i<a.length;i++){
	if(dnsDomainIs(h,a[i])){
		return "PROXY 119.29.99.164:12150"
	}
}
	return "DIRECT"
}
