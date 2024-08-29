import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>令和の軍師｜企業の長期利益を最大化するマーケティング会社</title>
          <meta
            name="description"
            content="事業開発→ブランディング→プロモーションまで、独自の戦略を提案＆実施／競合他社と圧倒的に差別化し、顧客から選ばれる状態へ／顧客の長期利益を最大化する／２０歳で学生起業／創業６年で実績１８０社。"
            key="description"
          />
          <meta
            property="og:title"
            content="令和の軍師｜企業の長期利益を最大化するマーケティング会社"
            key="og_title"
          />
          <meta
            property="og:description"
            content="事業開発→ブランディング→プロモーションまで、独自の戦略を提案＆実施／競合他社と圧倒的に差別化し、顧客から選ばれる状態へ／顧客の長期利益を最大化する／２０歳で学生起業／創業６年で実績１８０社。"
            key="og_description"
          />
          <meta
            property="og:image"
            content="https://reiwa-gunshi.co.jp/img/recruit.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(d) {
              var config = {
                kitId: 'spm5mak',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
            
            (function(d) {
              var config = {
                kitId: 'fgh1hsk',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);

        `,
            }}
          />

          <script
            id="_bownow_ts"
            dangerouslySetInnerHTML={{
              __html: `
            var _bownow_ts = document.createElement('script');
            _bownow_ts.charset = 'utf-8';
            _bownow_ts.src = 'https://contents.bownow.jp/js/UTC_cba3489d8ea3e5b5572d/trace.js';
            document.getElementsByTagName('head')[0].appendChild(_bownow_ts);
        `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MSJ9S5R');
        `,
            }}
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-167264993-3"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-167264993-3');
        `,
            }}
          />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
