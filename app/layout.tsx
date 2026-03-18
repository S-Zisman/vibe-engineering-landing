import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vibecodingcourse.sergeyzisman.tech"),
  title: "VIBE ENGINEERING 2026 — Курс по агентной разработке ИИ",
  description:
    "Курс Сергея Зисмана по агентной инженерии. Строй ИИ-агентов для трейдинга, SaaS и DeFi.",
  openGraph: {
    title: "VIBE ENGINEERING 2026 — Курс по агентной разработке ИИ",
    description:
      "Курс Сергея Зисмана по агентной инженерии. Строй ИИ-агентов для трейдинга, SaaS и DeFi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=107713070','ym');
              ym(107713070,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/107713070"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
