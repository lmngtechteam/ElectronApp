if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,n,t)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(n.map((a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}}))).then((e=>{const a=t(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-665b6cc9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aj5ON1BOz5DXoKSRnPq0Y/_buildManifest.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/aj5ON1BOz5DXoKSRnPq0Y/_ssgManifest.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/0696650bd667c541a163f2beb6f2c2bd0b9b80cf.7d7d89c1a27c9f8a43bd.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/0dea25b08f68e1622272efb065a66ff124fb6b2f.239bb7a355702b76676b.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/13cb6ca70577bc6ead3e03f767fa38c7ab22a282.448a7fad04565f1c205d.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/25f2b7ce.607f581206a7d4d902fc.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/371ec45db198043b8a59240448af2d7d3c1b1353.0212ba856e6ba875a0ee.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/3a373b990dd9382fb83bf29e6e9c74853e3f95ac.97f49641d648c8019362.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/4426fef38621a051b14101c969227db3e9ae574a.fad04bb0bbd5032c3a2f.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/540a09897e37bb17b0e6934c32e07e4f163047c9.89bf73f2a0ed63413ba8.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/5624c4502b9ff0188953913f2855ad9aec404167.f351415fec18bbf0bbf6.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/5fcbc7ed7a1d84223618143871d2ab0df5f0d789.2f91ad88e0eaf87588e4.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/615ede1b.ee17212073ffc002002d.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/6d08269ed79b120f39d20ef6558e38a425215bb8.eb04e61103d8fe0ac7de.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/7778f597871cf88decf1f52a7dca20daa3957e7d.0264d051363385c54344.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/7d9262e1c77ef8b9871057770187e94dc8717a63.b06c3685c15be98e9843.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/8b9f47e95ae5f382b6a5d86f7ebcf49f60ad25ee.a674f9327279fb1a0e25.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/8f1ab5ac052a3aae4c32eeb80993477c76822d84.bc21160da5e73aa58551.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/941c0beac20f1e609f8f28e0863aff4397788fc8.ad335b2afa853e863afb.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/96526910a3873200ab4070050b0939e673619c80.b29cf1de1b6c05c91572.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/9a889195c6d4e0049d1969fd325038db840d4c0f.70b97d105e395ad38e89.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/9cb7a7c1.7c01b55b040f3c8851b2.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/c0cc6192b30c8f7d953281687e1bfd17631e35ef.aeb05a9a10df60afd6f9.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/d7662f626c809dc252a520df5904a10f29613963.4a9c7f1c9c8ba7095c9b.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/dbdff8a878ca51e297b87796fde8a0ea83009481.c3662c2b4e01adabc202.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/e05c224cbdd4b5e2eb0a13ae6fb18fc9e2e9bd1d.1aa37effc56e8174f34f.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/ebec3a01.8d36ffdb5556329eccea.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/ecb26a676598f26ba1d365983e42a5ee64f032db.aba579c947ab8f783f3e.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/fd12b5766ff1d286ed3be3cb31577ae3884fa3dc.89653f50cd708fda0e71.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/framework.520f00e920a85781fb55.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/main-6ec30280bd99b69a4d68.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/404-a78727cdba86045feefa.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/_app-ffcee6a84ebe111a26bb.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/_error-9423111c0f860f4b19b6.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/about-us-03e249fd2732da571a83.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/auditTrail-563101892f81b0f807af.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/b2b-22a17aeb078d7c8f6304.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/company-registration/%5B[...slug%5D%5D-29a46596d731097fd992.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/consultation-online/%5B[...slug%5D%5D-b2306238eaab95d4381e.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/consultation-online/q/%5Bid%5D-3806b7d6c9ccaddc1dd3.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/consultation/%5B[...slug%5D%5D-f7801ce26b2fcfea8e9d.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/consultation/invoice/%5Bid%5D-35eb944f37c87a324a65.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/contact-us-8762faa00ca69b2c52ec.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/contract-detail-043ca6b29d4f7a0486f3.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/contracts-84c6e60c3b2c6912c3b3.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/counsellors/%5B[...slug%5D%5D-723f3c417d301b19ce14.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/counsellors/p/%5Bname%5D-be8e26a6e3cfeec13700.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/document-a09bd94b447623e3ea2f.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/evaluation/%5B[...slug%5D%5D-6967679b6b21ecec2933.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/home-11b156dce33733c5233d.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/otp-088647eb56a4df58bab9.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/payment/factor-c7d4205c4cfd8a37cded.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/payment/factor/%5BorderId%5D-177e7fd61b74188aceb2.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/payment/response/%5Btype%5D-4b0f40872a9031c7580a.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/payment/verify/%5Bid%5D-708d911f5abc54312fd9.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile-78351fa2f60a95baeb04.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/consultation-c50046f2615130c90d64.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/document-01ce9679d7eac4177629.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/document/new/editor-42297407b14a2092dea0.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/document/new/parties-49635ee1b3f2d4a557ca.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/document/new/signature-6572dd083f4254006d1c.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/setting-3ef2fc675e5ed79e3df8.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/profile/signature-f00b99dda8f84570a099.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/signature-3525bf1a00cbee60bdee.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/signature/otherparties-9ea9bbab12005a4c39ff.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/signature/panel-cd2d6614eea8d05385db.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/signin-e403ead3f94bc881a23c.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/signup-fedecaf2560bac019856.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/subscription-2eaaf81c5322ba5b04ef.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/test-02aaa90abba6676dc276.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/pages/workeron-60aac411283ab38de4e8.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/polyfills-cc2862678487dbbdd3d5.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/2dd5383e3ea670d48794.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/54b241d26666d6911bb9.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/92f0443a622523a2fcf6.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/a4a1ef203cfe255b5fa5.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/d6dbe67bc2beaf49ebb1.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/dde5ecb508cb05526b32.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/css/f1d8c1fe5bb8d89cedf6.css",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Bold.129cd4a6d46d4371de2e6c51c2ea1e17.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Bold.6dcbe3535167ae27d4f999e19bf848e5.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Bold.7ad7995a149144eb4f5880cf2baf578b.woff2",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Bold.8a6538859ac709ea69b26f7247a2aeb2.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Light.0dca866ad7c058dfadfb469c29d37ad7.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Light.7631302d35d569230de941fa12e452af.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Light.b6cd523f60b79c0671d1dd4cef68b6f6.woff2",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Light.eada8223e92fac994b468b29601dc825.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Medium.1cb36c4ec64cb501e285e34e1a06e796.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Medium.5846e466819c745a0d83f1f887208f95.woff2",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Medium.8948bc20a2af7431a1ac9ee0dcb8b920.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Medium.919d0807fe375342b619b99bf05f05fe.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular-FD.32e20c1979389b4288420817b91b892b.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular-FD.8d857a31e8e9318e37beff83234dadda.woff2",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular-FD.eb4e6a9f39bf1514fe1987d864fe38a4.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular.517ac79317ad6c7ed650a391a71e8521.woff2",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular.a58772806a0e3475c6f6ee6dbb26ae65.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular.cec0fcf17a02f6bf0f7e4bb9829c1c95.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/Vazir-Regular.f413b786be3bb85ed05911957fc7a959.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/fontawesome-webfont.1e59d2330b4c6deb84b340635ed36249.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/fontawesome-webfont.20fd1704ea223900efa9fd4e869efb08.woff2",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/fontawesome-webfont.8b43027f47b20503057dfbbaa9401fef.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/fontawesome-webfont.c1e38fd9e0e74ba58f7a2b77ef29fdd3.svg",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/fontawesome-webfont.f691f37e57f04c152e2315ab7dbad881.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/password.16706ddf25bedd45cecc50901a9c7675.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"aj5ON1BOz5DXoKSRnPq0Y"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"aj5ON1BOz5DXoKSRnPq0Y"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.NetworkFirst({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.NetworkFirst({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:js)$/i,new e.NetworkFirst({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:css|less)$/i,new e.NetworkFirst({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));