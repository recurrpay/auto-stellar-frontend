import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "RecurrPay",
  description: "Automated and Recurring Payments with Stellar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <head>
          <meta name="apple-mobile-web-app-title" content="RecurrPay" />

          <title>RecurrPay - Automated Payments on Stellar</title>
          <meta
            name="description"
            content="Automated & Recurring Payments, Subscriptions and Payrolls on Stellar"
          />

          <meta property="og:url" content="https://recurrpay.xyz/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="RecurrPay - Automated Payments on Stellar"
          />
          <meta
            property="og:description"
            content="Automated & Recurring Payments, Subscriptions and Payrolls on Stellar"
          />
          <meta
            property="og:image"
            content="https://opengraph.b-cdn.net/production/images/0bd28adc-f095-4f37-8f21-3fe24e211167.png?token=gEXY1bH8xi4gBc2Ey9LRcB7qB-8FAa3XtjYrbZxAl9Q&height=598&width=1200&expires=33275384476"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="recurrpay.xyz" />
          <meta property="twitter:url" content="https://recurrpay.xyz/" />
          <meta
            name="twitter:title"
            content="RecurrPay - Automated Payments on Stellar"
          />
          <meta
            name="twitter:description"
            content="Automated & Recurring Payments, Subscriptions and Payrolls on Stellar"
          />
          <meta
            name="twitter:image"
            content="https://opengraph.b-cdn.net/production/images/0bd28adc-f095-4f37-8f21-3fe24e211167.png?token=gEXY1bH8xi4gBc2Ey9LRcB7qB-8FAa3XtjYrbZxAl9Q&height=598&width=1200&expires=33275384476"
          />
        </head>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
