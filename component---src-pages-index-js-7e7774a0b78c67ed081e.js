(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{231:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=(a(236),a(234),a(77),a(16)),i=a.n(o),s=a(72),l=a.n(s),c=a(12),p=a.n(c),m=(a(119),[{name:"blue",firstTime:!0,colorPrimary:"#4ea9da",colorAlternate:"#FAFAFA",colorHighlight:"#daedf7",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"cyan",firstTime:!0,colorPrimary:"#3dc0b0",colorAlternate:"#FAFAFA",colorHighlight:"#d7f2ef",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"blue-alt",colorPrimary:"#FAFAFA",colorAlternate:"#4ea9da",colorHighlight:"#2a93cb",textPrimary:"#FAFAFA",navAlpha:"rgba(78, 169, 218, 0.75)"},{name:"cyan-alt",colorPrimary:"#FAFAFA",colorAlternate:"#3dc0b0",colorHighlight:"#35a698",textPrimary:"#FAFAFA",navAlpha:"rgba(61, 192, 176, 0.75)"},{name:"green",colorPrimary:"#5BA150",colorAlternate:"#FAFAFA",colorHighlight:"#e1efdf",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"brown",colorPrimary:"#A26836",colorAlternate:"#FAFAFA",colorHighlight:"#f5ebe2",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"orange",colorPrimary:"#e17421",colorAlternate:"#FAFAFA",colorHighlight:"#f9e4d5",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"crimson-red",colorPrimary:"#e64f52",colorAlternate:"#FAFAFA",colorHighlight:"#fbe4e4",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"red",colorPrimary:"#af3d4e",colorAlternate:"#FAFAFA",colorHighlight:"#f6e4e7",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"red-alt",colorPrimary:"#FFFFFF",colorAlternate:"#89303d",colorHighlight:"#63232c",textPrimary:"#FFFFFF",navAlpha:"rgba(137, 48, 61, 0.75)"},{name:"indigo-alt",colorPrimary:"#FAFAFA",colorAlternate:"#303F9F",colorHighlight:"#242f78",textPrimary:"#FAFAFA",navAlpha:"rgba(48, 63, 159, 0.75)"},{name:"grey-alt",colorPrimary:"#FFFFFF",colorAlternate:"#485564",colorHighlight:"#333c46",textPrimary:"#FFFFFF",navAlpha:"rgba(72, 85, 100, 0.75)"},{name:"material-cyan",colorPrimary:"#00BCD4",colorAlternate:"#FFFFFF",colorHighlight:"#d4faff",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-brown",colorPrimary:"#845c4e",colorAlternate:"#FFFFFF",colorHighlight:"#eee6e3",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-grey",firstTime:!0,colorPrimary:"#607D8B",colorAlternate:"#FFFFFF",colorHighlight:"#dfe6e9",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-grey-alt",colorPrimary:"#FFFFFF",colorAlternate:"#455A64",colorHighlight:"#374850",textPrimary:"#FAFAFA",navAlpha:"rgba(69, 90, 100, 0.75)"}]),d=function(){return m.map(function(e){return{name:e.name,firstTime:e.firstTime,colorPrimary:e.colorPrimary,colorAlternate:e.colorAlternate,colorHighlight:e.colorHighlight,bgPrimary:e.colorAlternate,bgAlternate:e.colorPrimary,bgLanding:e.colorPrimary,textPrimary:e.textPrimary,textAlternate:e.colorAlternate,textLanding:e.colorPrimary,parallaxStars:e.colorPrimary,navAlpha:e.navAlpha}})},h=function(e){function t(t){var a;(a=e.call(this,t)||this).getRandomTheme=function(){var e=a.state.theme,t=d().filter(function(t){return t.name!==e.name});return t[Math.floor(Math.random()*t.length)]},a.switchTheme=function(){var e=a.getRandomTheme();a.setState({theme:e})};var r=d().filter(function(e){return!0===e.firstTime});return a.state={theme:r[Math.floor(Math.random()*r.length)]},a.switchTheme=a.switchTheme.bind(l()(l()(a))),a}i()(t,e);var a=t.prototype;return a.getChildContext=function(){return{theme:this.state.theme,switchTheme:this.switchTheme}},a.render=function(){var e=this.props.children,t=this.state.theme;return n.a.createElement("div",{className:"theme-switcher"},n.a.createElement("style",{jsx:"true"},"\n          body {\n            background-color: "+t.bgPrimary+";\n            body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n              color: "+t.textPrimary+"\n            }\n          }\n        "),e)},t}(r.Component);h.propTypes={children:p.a.node},h.childContextTypes={theme:p.a.any,switchTheme:p.a.func};var g=h,u=a(280),b=!!((u.document||{}).documentElement||{}).style&&"scrollBehavior"in u.document.documentElement.style,f=function(e){e&&(b?e.scrollIntoView({behavior:"smooth",block:"start"}):e.scrollIntoView())},v=(a(282),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.scrollToNext=function(){var e=this.props.pageSelector,t=document.querySelector(e);f(t)},a.render=function(){var e=this,t=this.context.theme.colorPrimary;return n.a.createElement("div",{className:"scroll-to-next",onClick:function(t){return e.scrollToNext()}},n.a.createElement("div",{className:"arrow bounce",style:{color:t}},n.a.createElement("div",{className:"scroll-text"},"Click Me"),n.a.createElement("div",{className:"fa fa-chevron-down fa-2x",href:"#"})))},t}(r.Component));v.propTypes={pageSelector:p.a.string},v.contextTypes={theme:p.a.any};var w=v,y=(a(284),function(e,t){var a=t.theme.colorPrimary;return n.a.createElement("div",{className:"social-icons animate-icons"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nabil6391",style:{color:a}},n.a.createElement("i",{className:"fab fa fa-github"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/nabil-mosharraf-96560333",style:{color:a}},n.a.createElement("i",{className:"fab fa fa-linkedin"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@nabil6391",style:{color:a}},n.a.createElement("i",{className:"fab fa fa-medium"})))});y.contextTypes={theme:p.a.any};var A=y,P=(a(286),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=a.handleScroll.bind(l()(l()(a))),a.state={isSticky:!1},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.handleScroll=function(){window.pageYOffset>this.nav.offsetTop?this.setState({isSticky:!0}):this.setState({isSticky:!1})},a.scrollToPage=function(e){var t=document.querySelector(e);f(t)},a.render=function(){var e=this,t=this.context,a=t.theme,r=a.colorPrimary,o=a.bgPrimary,i=a.navAlpha,s=t.switchTheme,l=this.state.isSticky?"sticky":"",c=this.state.isSticky?{backgroundColor:i,color:r}:{backgroundColor:o,color:r};return n.a.createElement("div",null,n.a.createElement(Helmet,{title:data.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"pwa, portfolio"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement("nav",{className:l,ref:function(t){e.nav=t},style:c},n.a.createElement("div",{className:"magic-wand bounce-xy",onClick:function(e){return s()}},n.a.createElement("div",{className:"fa fa-magic fa-lg",href:"#"}),n.a.createElement("div",{className:"magic-text"},"Color Me")),n.a.createElement("style",{jsx:"true"},"\n            .menu__item:hover {\n              border-bottom: 2px solid "+r+";\n            }\n          "),n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"menu__item active",onClick:function(t){return e.scrollToPage(".about-page")}},"About"),n.a.createElement("div",{className:"menu__item active",onClick:function(t){return e.scrollToPage(".contact-page")}},"Contact"),n.a.createElement("div",{className:"menu__item",onClick:function(t){return e.scrollToPage(".portfolio-page")}},"Portfolio"))))},t}(r.Component));P.contextTypes={theme:p.a.any,switchTheme:p.a.func};var E=P,x=function(e,t){var a=t.theme,r=a.bgPrimary,o=a.colorPrimary;return n.a.createElement("div",{style:{backgroundColor:r},className:"landing-page"},n.a.createElement(E,null),n.a.createElement("main",{style:{color:o}},n.a.createElement("div",{className:"intro-wrapper"},n.a.createElement("div",{className:"intro-name"},"Nabil Mosharraf"),n.a.createElement("div",{className:"tagline"},"Full stack Web Dev | Android Developer | UX Architect"),n.a.createElement(A,null))),n.a.createElement(w,{pageSelector:".about-page"}))};x.contextTypes={theme:p.a.any};var F=x,k=function(e,t){var a=t.theme,r=a.colorPrimary,o=a.colorHighlight,i=a.bgPrimary,s=a.textPrimary;return n.a.createElement("div",{className:"about-page",style:{backgroundColor:i}},n.a.createElement("style",{jsx:"true"},"\n          .highlight {\n            background-color: "+o+";\n          }\n          ::selection {\n            background-color: "+o+";\n          }\n        "),n.a.createElement("div",{className:"content-grid"},n.a.createElement("h1",{style:{color:r}},"About"),n.a.createElement("div",{className:"about-wrapper"},n.a.createElement("div",{className:"about-content",style:{color:s}},n.a.createElement("p",null,"I started my career as an ",n.a.createElement("span",{className:"highlight"},"Android developer"),", responsible for the complete development lifecycle of the mobile applications including designing user interface, preparing content, programming and debugging. I've been part of small and large (distributed) teams, I understood how crucial documentation, version control, and effective team communication are in terms of having a sane workflow."),n.a.createElement("p",null,"Today I'm working as a ",n.a.createElement("span",{className:"highlight"},"front-end web developer")," and reaching a personal milestone, which is feeling confident in both sides of the spectrum to develop Web Apps from back to front alogn with their mobile counterparts."),n.a.createElement("p",null,"I'm working in this area using HTML5, CSS3 and Javascript and ",n.a.createElement("span",{className:"highlight"},"ReactJS")," has become one of my favorite tools in web development. React-Redux, Node.js, Django, Java, Android, AWS are the main tricks up my sleeve."),n.a.createElement("p",null,"In the near future, I'd like to take my JS and CSS3 skills to the next level while learning more about UI/UX and ",n.a.createElement("span",{className:"highlight"},"Progressive Web Apps(PWA)"),"."),n.a.createElement("p",{className:"text-emoji",style:{color:r}},"\\ (•◡•) /")))),n.a.createElement(w,{pageSelector:".contact-page"}))};k.contextTypes={theme:p.a.any};var S=k,N=(a(78),a(136),a(288),a(290),a(121),[{id:"quran",name:"Al Quran (Tafsir & by Word)",desc:["Al Quran (Tafsir & by Word) is a Quran study tool for all.Distributed on Play Store with 4.9+ rating and 700000+ downloads "],date:"2015-",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.green"],tags:["android"],role:"Lead Developer"},{id:"quranios",name:"Al Quran (Tafsir & by Word) iOS",desc:["Al Quran (Tafsir & by Word) is a Quran study tool for all.Distributed on Play Store with 4.9+ rating and 700000+ downloads "],date:"2015-",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.green"],tags:["android"],role:"Team Member"},{id:"hadith",name:"Hadith Collection (All in one)",desc:["Hadith Collection (All in one) is an ultimate collection of Hadith of Prophet Muhammad (ﷺ). The app contains 41000+ hadith from most accepted and authentic Hadith books. Distributed on Play Store with 4.9+ rating"],date:"2016",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.hadith"],tags:["android"],role:"Lead Developer"},{id:"hisnulmuslim",name:"Dua & Zikr (Hisnul Muslim)",desc:["An easy to use app which contains authentic Du'a and Zikr for a muslim's daily supplication and for special occasions. It contains islamic duas for daily day to day activities, from day to night. Distributed on Play Store with 4.9+ rating"],date:"2015-",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.hisnulmuslim"],tags:["android"],role:"Lead Developer"},{id:"hisnulmuslimios",name:"Dua & Zikr (Hisnul Muslim) iOS",desc:["An easy to use app which contains authentic Du'a and Zikr for a muslim's daily supplication and for special occasions. It contains islamic duas for daily day to day activities, from day to night. Distributed on Play Store with 4.9+ rating"],date:"2015-",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.hisnulmuslim"],tags:["android"],role:"Manager"},{id:"salatbn",name:"অর্থপূর্ণ নামায (সালাত) শব্দসহ",desc:["অর্থপূর্ণ নামায (সলাত) এমন একটি অ্যাাপ যার দ্বারা আপনি নামাযের পঠিত সূরা, তসবিহ, দোআ ইত্যাদির অর্থ (প্রতিটি শব্দের অর্থ সহ) শিখতে পারবেন"],date:"2016",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.salatbn"],tags:["android"],role:"Lead Developer"},{id:"islamicquiz",name:"ইসলামিক কুইজ (Islamic Quiz)",desc:["ইসলামিক কুইজ একটি অতি সাধারণ এবং নিত্যদিনের ব্যবহার্য একটি অ্যাপ যা আপনাকে একঘেয়ামি দূর করিয়ে খেলতে খেলতে কিছু ইসলামি জ্ঞানার্জনের সু্যোগ করে দিবে ইনশাআল্লাহ।"],date:"2016",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.islamicquiz"],tags:["android"],role:"Lead Developer"},{id:"muslimscholars",name:"Muslim Scholars & Companions",desc:["Muslim Scholars & Companions is the most extensive, interactive and up-to-date Muslim Scholar Database."],date:"2017",weight:9,websites:["https://play.google.com/store/apps/details?id=com.greentech.muslimscholars"],tags:["android"],role:"Lead Developer"},{id:"revvey",name:"REVVEY for HigherStudyAbroad ",desc:["App for students facilitating the process of searching, choosing and applying for universities abroad. Uses parse server for online data"],date:"2017",weight:4,tags:["android"],role:"Lead Developer"},{id:"sccapp",name:"SYLHET CITY CORPORATION APP",desc:["Official Government Approved App. Uses google maps Api, retrofit for rest services with caching, login system, ability to take picture and upload to server, Uses glide for image loading."],date:"2017",weight:4,websites:["https://goo.gl/ecjmzo "],tags:["android"],role:"Lead Developer"},{id:"applocker",name:"App Locker",desc:["App Locker"],date:"2018",weight:4,tags:["android"],role:"Lead Developer"},{id:"openshop",name:"Open Shop Android Ecommerce App",desc:["Android E Commerce App"],date:"2018",weight:4,tags:["android"],role:"Lead Developer"},{id:"hinix",name:"Hinix",desc:["Android game based on the popular classic Boggle. Distributed on Play Store with 4.5+ rating.","Champion Hackathon project."],date:"2016",github:"https://github.com/aviaryan/Hinix",tags:["android","java","game"],weight:1,websites:["https://play.google.com/store/apps/details?id=in.aviaryan.hinix"]},{id:"higherstudyabroad",name:"Higher Study Abroad Website",desc:["Website for students facilitating the process of searching, choosing and applying for universities abroad"],date:"2016-present",tags:["web","react","python"],websites:["http://www.higherstudyabroad.com"]},{id:"puzzle8",name:"Puzzle-8",date:"2016",desc:["8-Puzzle game in Android. Includes automatic puzzle solver."],tags:["android","java","game"],github:"https://github.com/aviaryan/CSwA_puzzle8"},{id:"portfolio",name:"Portfolio",date:"2018-present",desc:["My open source projects portfolio. Built using React, React Router and Redux."],tags:["web","react","javascript"],github:"https://github.com/nabil6391/nabil6391.github.io",websites:["https://nabil6391.github.io/"]},{id:"findingnora",name:"Finding Nora",date:"2018-present",desc:["A proggesive web app Find your name in a field of letters (kids game) https://nora.now.sh"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/finding-nora"},{id:"samplepieshop",name:"Online store PWA sample",date:"2018-present",desc:["Example e-commerce site to explore PWA (Progressive Web App) use cases. https://pie-shop-app.appspot.com/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/sample-pie-shop"},{id:"pwagithub",name:"PWAGithub",date:"2018-present",desc:["The GitHub client implemented as a Progressive Web App https://pwa-github-client.firebaseapp…"],tags:["web","vue","javascript","pwa"],github:"https://github.com/nabil6391/PWAGithub"},{id:"so-pwa",name:"SO PWA",date:"2018-present",desc:["A progressive web app to read Stack Overflow content. https://so-pwa.firebaseapp.com/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/so-pwa"},{id:"PWAPodcast",name:"PWAPodcast",date:"2018-present",desc:["A demo podcast progressive web application."],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/PWAPodcast"},{id:"instragram-clone",name:"React-Instagram-Clone",date:"2018-present",desc:["A reactive Single-Page Instagram-Clone with some new features!! "],tags:["web","react","javascript"],github:"https://github.com/nabil6391/React-Instagram-Clone-2.0"},{id:"sample-currency-converter",name:"Material Money",date:"2018-present",desc:["A sample currency conversion Progressive Web App"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/sample-currency-converter"},{id:"pwa-theme-woocommerce",name:"PWA E-commerce Theme",date:"2018-present",desc:["E-commerce Progressive Web App Theme (React & Redux) http://pwacommerce.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/pwa-theme-woocommerce"},{id:"profile",name:"Personal Profile Progressive Web App Card",date:"2018-present",desc:["Personal Profile Progressive Web App Card - Web Page https://pwafire-codelab.firebaseapp.com/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/profile"},{id:"2048",name:"2048 Pwa",date:"2018-present",desc:["A Progressive Web App Version of 2048 https://2048.love2dev.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/2048"},{id:"React-Calculator-App",name:"React Calculator App",date:"2018-present",desc:["The Apple MacOs/iOS calculator app rebuild with React as PWA (Progressive Web App) https://kaihotz.github.io/React-Calculator-App/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/React-Calculator-App"},{id:"ProgressiveWordPress",name:"Progressive WordPress",date:"2018-present",desc:["A Sample WordPress-based Progressive Web App https://pwp.dassur.ma"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/ProgressiveWordPress"},{id:"expense-tracker",name:"Personal Profile Progressive Web App Card",date:"2018-present",desc:["An open source PWA for expense/income tracking https://expense-tracker-demo-1.firebaseapp.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/expense-tracker"},{id:"ephemeral",name:"Ephemeral",date:"2018-present",desc:["A progressive web app for writing down words and translations as you encounter them. https://ephemeral.now.sh"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/ephemeral"},{id:"fastfurniture",name:"Fast Furniture",date:"2018-present",desc:["A Progressive Web Application Demonstration Site https://fastfurniture.love2dev.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/fastfurniture"},{id:"pwa-qr-code-scanner",name:"QR Code Scanner",date:"2018-present",desc:["Lightweight progressive web app for scanning QR codes offline https://minishlink.github.io/pwa-qr-code-scanner/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/pwa-qr-code-scanner"},{id:"preact-gallery",name:"Preact Gallery",date:"2018-present",desc:["A modern gallery experience disguised as a tiny (8kb) Preact based PWA. https://preact.gallery/"],tags:["web","preact","javascript","pwa"],github:"https://github.com/nabil6391/preact-gallery"},{id:"flappybird",name:"Flappy Bird PWa",date:"2018-present",desc:["Progressive Web App (PWA) implementation of Flappy Bird game. https://flappybird.love2dev.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/flappybird"},{id:"hextris",name:"Hextris",date:"2018-present",desc:["\nFast paced HTML5 puzzle game inspired by Tetris! Made into a PWA so you can play on any device, anywhere. Even without the network! https://hextris.love2dev.com/"],tags:["web","javascript","pwa"],github:"https://github.com/nabil6391/hextris"},{id:"react-shrine",name:"Shrine",date:"2018-present",desc:['"Shrine" Progressive Web App sample built with React https://react-shrine.firebaseapp.com'],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/react-shrine"},{id:"sCalc",name:"sCalc",date:"2018-present",desc:["A simple JavaScript Calculator Progressive Web Application (PWA) https://calc.love2dev.com"],tags:["web","javascript","pwa"],github:"https://github.com/nabil6391/sCalc"},{id:"english-accents-map",name:"English Accents Map",date:"2018-present",desc:["English Accents Map - A progressive web app (PWA) buit on React, Redux and Firebase https://www.englishaccentsmap.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/english-accents-map"},{id:"simple-trello",name:"Trello clone",date:"2018-present",desc:["Trello clone"],tags:["web","react","javascript"],github:"https://github.com/nabil6391/simple-trello"},{id:"building-a-small-pwa-with-preact-and-firebase",name:"Exercise PWA",date:"2018-present",desc:["You can see it in action at https://pwa-preact-firebase.firebaseapp.com,"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/building-a-small-pwa-with-preact-and-firebase"},{id:"whatspp-PWA",name:"Whatsapp clone",date:"2018-present",desc:["Progressive Web app of Whatsapp web clone"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/whatspp-PWA"},{id:"preact-hn",name:"Personal Profile Progressive Web App Card",date:"2018-present",desc:["A hacker news clone built with preact. https://preact-hn.now.sh."],tags:["web","preact","javascript","pwa"],github:"https://github.com/nabil6391/preact-hn"},{id:"smaller-pictures-app",name:"Smaller Pics",date:"2018-present",desc:["Smaller Pics Progressive Web App https://smaller-pictures.appspot.com"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/smaller-pictures-app"},{id:"snapwat",name:"Snapwat",date:"2018-present",desc:["Photo/video doodling app for the web - a progressive web app demo https://snapw.at"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/snapwat"},{id:"periodic-weather-analytics",name:"Periodic Weather Analytics",date:"2018-present",desc:["A high performance Preact based PWA providing an overview of information from Periodic Weather.  https://use-the-platform.com/periodic-weather-analytics/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/periodic-weather-analytics"},{id:"uber-mobile-web",name:"Uber clone for mobile web",date:"2018-present",desc:["Uber clone for mobile web Live Demo: https://uberweb.herokuapp.com"],tags:["web","react","javascript"],github:"https://github.com/nabil6391/uber-mobile-web"},{id:"snapdrop",name:"Snapdrop",date:"2018-present",desc:["A Progressive Web App for local file sharing http://snapdrop.net"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/snapdrop"},{id:"rainbow-explorer",name:"Rainbow Exlorer",date:"2018-present",desc:["A 20kb Preact & Redux based Progressive Web App that translates real life color to digital color. https://use-the-platform.com/rainbow-explorer/"],tags:["web","preact","javascript","pwa"],github:"https://github.com/nabil6391/rainbow-explorer"},{id:"bookmarkd",name:"Bookmarkd",date:"2018-present",desc:["A React PWA for reading ebooks https://bookmarkd-app.surge.sh"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/bookmarkd"},{id:"react-simple-pwa",name:"React Simple PWA",date:"2018-present",desc:["Simple Progressive Web App Built with React Js. https://bosnaufal.github.io/react-simple-pwa"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/react-simple-pwa"},{id:"voice-memos",name:"Voice Memos",date:"2018-present",desc:["A Progressive Web App for recording and playing back voice memos. https://voice-memos.appspot.com/"],tags:["web","react","javascript","pwa"],github:"https://github.com/nabil6391/voice-memos"}]);N.sort(function(e,t){var a=(new Date).getFullYear(),r=function(e){if(e.indexOf("present")>-1)return a-2012+1;for(var t=a;t>2012;t--)if(e.indexOf(t.toString().substring(3))>-1)return t-2012};return r(e.date)+(e.weight||0)<r(t.date)+(t.weight||0)?1:-1});var C=N,T=(a(291),a(292),a(135),a(297),a(88),a(87),a(127),function(e,t){console.log("I was triggered during render");var a=t.toLowerCase().split(" ");return e.filter(function(e){return a.some(function(t){return e.name.toLowerCase().search(t)>-1||JSON.stringify(e.tags).toLowerCase().search(t)>-1||e.date.toLowerCase().search(t)>-1})})}),j=(a(298),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.tagClick=function(e){var t=e.target.textContent,a=document.getElementById("search").value.split(" "),r=a.indexOf(t);r>-1?a.splice(r,1):a=[t],function(e){var t=document.getElementById("search");Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(t,e);var a=new Event("input",{bubbles:!0});t.dispatchEvent(a)}(a.join(" "))},a.render=function(){return n.a.createElement("span",{className:"tag",onClick:this.props.clickListener||this.tagClick,style:{color:this.props.textColor,backgroundColor:this.props.backgroundColor}},this.props.name)},t}(r.Component)),W=(a(300),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return n.a.createElement("input",{type:"search",id:"search",placeholder:"Filter (e.g. 'backend python')",autoComplete:"off",spellCheck:"false",className:"search",onChange:this.props.changeHandler})},t}(r.Component)),H=(a(302),a(137),a(138),a(304),function(e,t){var a,r=t.theme,o=(r.colorPrimary,r.textAlternate);return e.websites&&(a=e.websites.map(function(e){var t;return t=e.includes("play")?"fab fa fa-google-play":e.includes("medium")?"fab fa fa-medium":e.includes("apple")?"fab fa fa-ios":e.includes("github")?"fab fa fa-github":"fab fa fa-staylinked",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",key:e,href:e,className:"logoContainer",title:function(e){return(e.indexOf("://")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0]}(e),style:{color:o}},n.a.createElement("i",{className:t}))})),n.a.createElement("span",{className:"projectLinks"},e.websites&&a,e.github&&n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.github,className:"logoContainer",title:"GitHub",style:{color:o}},n.a.createElement("i",{className:"fab fa-github"})))});H.contextTypes={theme:c.PropTypes.any};var R=H,D=function(e,t){var a=t.theme,r=a.colorPrimary,o=a.textAlternate,i=e.tags.map(function(e){return n.a.createElement(j,{key:e,name:e,textColor:r,backgroundColor:o})});return n.a.createElement("div",{className:"projectOuter"},n.a.createElement("div",{className:["project",e.id].join(" "),style:{backgroundColor:r,color:o}},n.a.createElement("div",{className:e.name.length>15?"projectTitleSmall":"projectTitle"},n.a.createElement("span",{className:"projectName",style:{color:o}},e.name),n.a.createElement("span",{style:{flexGrow:100}}),n.a.createElement(R,e)),e.date&&n.a.createElement("div",{className:"projectDate"},e.date),n.a.createElement("div",{className:"projectDesc"},e.desc[0]),n.a.createElement("div",{className:"projectTags"},i)))};D.contextTypes={theme:c.PropTypes.any};var M=D,L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={searchText:"",projects:C},a.inputChange=a.inputChange.bind(l()(l()(a))),a}i()(t,e);var a=t.prototype;return a.inputChange=function(e){this.setState({searchText:e.target.value,projects:T(C,e.target.value)},function(){})},a.render=function(){var e=this.context.theme,t=e.colorPrimary,a=(e.colorAlternate,e.textAlternate,e.bgPrimary),r=this.state.projects.map(function(e){return n.a.createElement(M,Object.assign({key:e.id},e))});return 0===r.length&&(r=n.a.createElement("div",{className:"noResults"},"No results found")),n.a.createElement("div",{className:"portfolio-page"},n.a.createElement("div",{className:"content-grid"},n.a.createElement("h1",{style:{color:t}},"Portfolio"),n.a.createElement("div",{className:"portfolio-wrapper"},["android","web","react","ios","pwa"].map(function(e){return n.a.createElement(j,{key:e,name:e,textColor:a,backgroundColor:t})})),n.a.createElement("div",{className:"center-div"},n.a.createElement(W,{changeHandler:this.inputChange})),r.length>0&&n.a.createElement("p",{className:"center-div"},r.length," Projects"),n.a.createElement("div",{className:"portfolio-wrapper"},r)))},t}(n.a.Component);L.contextTypes={theme:p.a.any};var I=L,O=function(e){function t(){var t;return(t=e.call(this)||this).contactRef=n.a.createRef(),t.state={name:"",subject:"",email:"",message:"",errors:{}},t}return i()(t,e),t.prototype.render=function(){var e=this.context.theme,t=e.colorPrimary,a=e.colorHighlight,r=e.bgPrimary;return e.textPrimary,n.a.createElement("div",{className:"contact-page",style:{backgroundColor:r}},n.a.createElement("style",{jsx:"true"},"\n          .highlight {  background-color: "+a+";  }\n          ::selection {\n            background-color: "+a+";\n          }\n\n          button {\n  background-color: "+t+";\n}\n\nbutton:hover {\n  background: "+a+";\n}\n\n        "),n.a.createElement("div",{className:"content-grid",style:{button:t}},n.a.createElement("h1",{style:{color:t}},"Contact"),n.a.createElement("p",null,"Do you have a project you'd want me to jump in or want to get in touch? Just leave me a message and I'll get back to you as soon as I can."),n.a.createElement("form",{name:"sentMessage",className:"center-div",action:"https://formspree.io/nabil6391@gmail.com",method:"POST"},n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"email",name:"_replyto",className:"form-control",placeholder:"Your Email *",id:"email",required:!0,"data-validation-required-message":"Please enter your email address."}),n.a.createElement("p",{className:"help-block text-danger"})),n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"text",name:"_subject",className:"form-control",placeholder:"Subject *",id:"subject",required:!0,"data-validation-required-message":"Please enter the topic you want to discuss"}),n.a.createElement("p",{className:"help-block text-danger"})),n.a.createElement("div",{className:"row"},n.a.createElement("textarea",{name:"name",className:"form-control",placeholder:"Your Message *",id:"message",required:!0,"data-validation-required-message":"Please enter a message."}),n.a.createElement("p",{className:"help-block text-danger"})),n.a.createElement("button",{type:"submit",className:"btn btn-xl"},n.a.createElement("i",{className:"fa fa-paper-plane"})," Send"))),n.a.createElement(w,{pageSelector:".portfolio-page"}))},t}(r.Component);O.contextTypes={theme:p.a.any};var z=O,_=(a(306),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=a.handleScroll.bind(l()(l()(a))),a.state={shouldShowScrollTopArrow:!1},a}i()(t,e);var a=t.prototype;return a.handleScroll=function(){((document||{}).documentElement||{}).getBoundingClientRect&&(-1*document.documentElement.getBoundingClientRect().top>100?this.setState({shouldShowScrollTopArrow:!0}):this.setState({shouldShowScrollTopArrow:!1}))},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e=this.context.theme.colorPrimary,t=this.state.shouldShowScrollTopArrow?"":"hide";return n.a.createElement("div",{className:"scroll-top",onClick:function(e){b?u.window.scrollTo({top:0,left:0,behavior:"smooth"}):u.window.scrollTo(0,0)}},n.a.createElement("div",{className:"arrow "+t,style:{color:e}},n.a.createElement("div",{className:"fa fa-angle-double-up fa-2x",href:"#"}),n.a.createElement("div",{className:"to-top"},"To Top")))},t}(r.Component));_.contextTypes={theme:p.a.any};var q=_,B=(a(308),function(e,t){var a=t.theme,r=a.colorPrimary,o=a.textPrimary;return n.a.createElement("footer",null,n.a.createElement("div",{className:"content-grid"},n.a.createElement("div",{style:{color:o}},"Made by ",n.a.createElement("a",{href:"https://github.com/nabil6391",target:"_blank",rel:"noopener noreferrer",style:{color:r}},"Nabil")," ",n.a.createElement("span",{role:"img","aria-label":"heart"},"❤️"))))});B.contextTypes={theme:p.a.any,switchTheme:p.a.func};var J=B,U=(a(310),a(312),a(314),function(e,t){var a=t.theme.colorPrimary;return n.a.createElement("div",{className:"parallax",style:{color:a}},n.a.createElement("div",{id:"stars1"}),n.a.createElement("div",{id:"stars2"}),n.a.createElement("div",{id:"stars3"}))});U.contextTypes={theme:p.a.any};var Q=U;t.default=function(){return n.a.createElement("div",{className:"dev-landing-page"},n.a.createElement(g,null,n.a.createElement(Q,null),n.a.createElement(F,null),n.a.createElement(S,null),n.a.createElement(z,null),n.a.createElement(I,null),n.a.createElement(q,null),n.a.createElement(J,null)))}},282:function(e,t,a){},284:function(e,t,a){},286:function(e,t,a){},298:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){},304:function(e,t,a){},306:function(e,t,a){},308:function(e,t,a){},310:function(e,t,a){},314:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-7e7774a0b78c67ed081e.js.map