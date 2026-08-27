import { createFileRoute } from "@tanstack/react-router";
import {
  SiBitcoin,
  SiEthereum,
  SiGithub,
  SiLitecoin,
  SiPatreon,
  SiSolana,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Heart, Triangle, Wallet } from "lucide-react";

const sponsorMethods = [
  {
    name: "GitHub Sponsors",
    value: "github.com/sponsors/raicdev",
    href: "https://github.com/sponsors/raicdev",
    icon: SiGithub,
    note: "Monthly support for ongoing development",
  },
  {
    name: "Patreon",
    value: "patreon.com/raicdev",
    href: "https://www.patreon.com/raicdev",
    icon: SiPatreon,
    note: "Support through tiers and rewards",
  },
];

const cryptoMethods = [
  {
    network: "Ethereum (ETH)",
    address: "0xFdc4A7219D8DC47630E56519E33071d8c54e5eD9",
    icon: SiEthereum,
  },
  {
    network: "Bitcoin (BTC)",
    address: "bc1qhslqe7032tu6jx7az584dkjf8l3gh9ypnqym8n",
    icon: SiBitcoin,
  },
  {
    network: "Litecoin (LTC)",
    address: "LeWS46wgMqoqsNUByRLpUPza2dMWq2yAuW",
    icon: SiLitecoin,
  },
  {
    network: "Solana (SOL)",
    address: "EsbYaxcENDnynYW67E3fC98xXijLxrS65hbWknwpNL53",
    icon: SiSolana,
  },
];

export const Route = createFileRoute("/sponsor")({
  head: () => ({
    meta: [{ title: "Sponsor | raic.dev" }],
  }),
  component: Sponsor,
});

function Sponsor() {
  return (
    <div className="space-y-16">
      <header className="space-y-4 animate-in fade-in duration-700">
        <h1 className="text-5xl font-bold bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
          Sponsor
        </h1>
        <p className="text-muted-foreground text-base animate-in fade-in slide-in-from-left-3 duration-700 delay-100">
          If you’d like to support my work, I appreciate any sponsorship.
        </p>
      </header>

      <section className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <h2 className="text-sm font-medium text-foreground flex items-center gap-2">
          <Heart className="w-4 h-4 text-pink-500" />
          <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Sponsor Methods
          </span>
        </h2>

        <div className="space-y-2">
          {sponsorMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className="group block space-y-1 p-3 -mx-3 rounded-lg hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-border hover:shadow-sm animate-in fade-in slide-in-from-left-2"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <method.icon className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-base font-medium text-foreground group-hover:text-foreground/90 transition-colors">
                      {method.name}
                    </div>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>

              <p className="text-xs text-muted-foreground pl-7">{method.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        <h2 className="text-sm font-medium text-foreground flex items-center gap-2">
          <Wallet className="w-4 h-4" />
          <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Crypto
          </span>
        </h2>

        <div className="space-y-2">
          {cryptoMethods.map((crypto, index) => (
            <div
              key={crypto.network}
              className="p-3 -mx-3 rounded-lg hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-border"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-2">
                <crypto.icon className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-base font-medium text-foreground">{crypto.network}</p>
                  <code className="text-sm text-muted-foreground break-all">{crypto.address}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
        <h2 className="text-sm font-medium text-foreground flex items-center gap-2">
          <Triangle className="w-4 h-4" />
          <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Note
          </span>
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Thank you for your support! Please copy the address exactly as shown and send the
          corresponding token only.
        </p>
      </section>
    </div>
  );
}
