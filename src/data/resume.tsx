import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "雷",
  initials: "DV",
  url: "https://raic.dev/",
  location: "Japan",
  locationLink: "",
  description:
    "UpLauncher のオーナー・Deni AI, VistaUpdater (Win7Updater) の開発者",
  summary:
    "2022年にUpLauncher を打ち上げ、その後、2023年5月にVistaUpdater、2023年10月にWin7Updater をリリース。2025年3月には、Deni AI をリリース。VistaUpdater と Win7Updater は YouTube で5万再生以上を獲得。",
  avatarUrl: "/profile.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Kotlin",
    "vb.net",
    "C#",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "ホーム" },
    { href: "/blog", icon: NotebookIcon, label: "ブログ" },
  ],
  contact: {
    email: "rai@raic.dev",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://raic.jp/github",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://raic.jp/twitter",
        icon: Icons.x,

        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://raic.jp/youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "メール",
        url: "mailto:rai@raic.dev",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "UpLauncher",
      href: "https://upl.raic.dev/",
      badges: [],
      location: "UpLauncher",
      title: "オーナー",
      logoUrl: "/profile.png",
      start: "2022/07",
      end: "現在",
      description:
        "UpLauncher のオーナー兼開発者として、UpLauncher の開発と運営を担当しています。具体的には、ユーザーからのフィードバックを基に機能改善や新機能の追加を行い、ユーザーエクスペリエンスの向上に努めています。また、サポートチームと連携し、ユーザーからの問い合わせや問題解決にも対応しています。",
    },
    {
      company: "雷のサーバー",
      href: "#",
      badges: [],
      location: "Discord",
      title: "オーナー",
      logoUrl: "/profile.png",
      start: "2023/03",
      end: "2024/07",
      description:
        "雷のサーバーのオーナーとして、サーバーの設計・運営を担当しました。具体的には、チャンネル設計、ロール管理、Bot設定などの技術的な管理業務を遂行し、コミュニティの円滑な運営に貢献しました。また、ユーザーからのフィードバックを基に機能改善や新機能の追加を行い、ユーザーエクスペリエンスの向上にも努めました。",
    },
    {
      company: "もち米のDiscord部屋",
      href: "#",
      badges: [],
      location: "Discord",
      title: "副管理者",
      logoUrl: "/mochigome.jpg",
      start: "2023/11",
      end: "2024/02",
      description:
        "もち米のDiscord部屋の副管理者として活動し、サーバーの運営サポートや管理業務を担当しました。具体的には、コミュニケーションチャンネルの整備、ユーザー権限の管理、運営効率化のためのBot導入・設定などを行い、コミュニティの円滑な運営に貢献しました。",
    },
    {
      company: "SceneryFN (第二次)",
      badges: [],
      href: "#",
      location: "リモート",
      title: "デベロッパー",
      logoUrl: "",
      start: "2023/11",
      end: "2024/01",
      description:
        "SceneryFN プロジェクトでは、ランチャーの開発とシステムテストを担当しました。C#とC++をメイン言語とし、WinUI3やWinFormsを活用してユーザーインターフェースを構築。開発からテストまで一貫して関わり、使いやすく安定したアプリケーション提供に貢献しました。",
    },
    {
      company: "ずんだMC Network",
      href: "#",
      badges: [],
      location: "Discord, Minecraft",
      title: "マネージャー",
      logoUrl: "/zundamc.jpg",
      start: "2023/08",
      end: "2023/09",
      description:
        "ずんだMCのマネージャーとして、サーバー運営全般に携わりました。Discordサーバーではチャンネル設計、ロール管理、Bot設定などの技術的な管理業務を遂行し、併せてコミュニティ用ウェブサイトの開発も担当しました。マインクラフトサーバーにおいては、プレイヤー間のトラブル対応やルール違反者への適切な対処を行い、健全なゲーム環境の維持に貢献しました。",
    },
    {
      company: "SceneryFN (第一次)",
      href: "#",
      badges: [],
      location: "リモート",
      title: "管理者",
      logoUrl: "",
      start: "2023/06",
      end: "2023/08",
      description:
        "SceneryFN プロジェクトでは、C#、C++、WinUI3、WinFormsを活用したランチャー開発とシステムテストを担当しました。技術面での貢献に加え、管理者としてコミュニティルールの策定・告知やお知らせの発信も行い、Discordサーバーの運営全般を管理。開発から運営まで幅広く携わることで、プロジェクト全体の円滑な進行と安定したユーザー環境の構築に貢献しました。",
    },
  ],
  projects: [
    {
      title: "Deni AI",
      href: "https://ai.raic.dev",
      dates: "2025/03 - 現在",
      active: true,
      description:
        "Deni AI は完全無料で無制限に利用できるチャットアプリです。OpenAI の ChatGPT のようなインターフェースを持ち、同じように使用できます。また、自分で Deni AI をホストすることも可能です。Deni AI は、AI を利用したアプリケーションの開発を簡単にし、誰でも利用できるようにすることを目的としています。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "shadcn/ui",
        "Firebase",
        "AI SDK",
      ],
      links: [
        {
          type: "ウェブサイト",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/deni-ai.png",
      video: "",
    },
    {
      title: "VistaUpdater",
      href: "http://vistaupdater.net",
      dates: "2023/05 - 現在",
      active: true,
      description:
        "VistaUpdater は、Windows Vista のアップデートを再び利用可能にするツールです。この製品は、YouTube で約1万回以上の視聴回数を記録し、ユーザーからの高い評価を得ています。このプロジェクトについての詳しい情報は、公式ウェブサイトをご覧ください。",
      technologies: ["C#", "Batch", "HTML", "CSS"],
      links: [
        {
          type: "ウェブサイト",
          href: "http://vistaupdater.net",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "ソースコード",
          href: "https://github.com/raicdev/VistaUpdater",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vistaupdater.png",
      video: "",
    },
    {
      title: "Win7Updater",
      href: "http://vistaupdater.net",
      dates: "2023/05 - 現在",
      active: true,
      description:
        "Win7Updater は、Windows 7 のアップデートを再び利用可能にするツールです。この製品は、YouTube で約4万回以上の視聴回数を記録し、ユーザーからの高い評価を得ています。このプロジェクトは、VistaUpdater 製品として分類されています。",
      technologies: ["C#", "Batch", "HTML", "CSS"],
      links: [
        {
          type: "ウェブサイト",
          href: "http://vistaupdater.net",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "ソースコード",
          href: "https://github.com/raicdev/VistaUpdater",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/win7updater.png",
      video: "",
    },
    {
      title: "VS Code RPC",
      href: "https://marketplace.visualstudio.com/items?itemName=theuplauncher.vscoderpc",
      dates: "2023/05 - 現在",
      active: false,
      description:
        "VS Code RPC は、Visual Studio Code のステータスを Discord に表示することができる拡張機能です。この製品は、約2000人のユーザーに利用されています。",
      technologies: ["VS Code", "TypeScript"],
      links: [
        {
          type: "ダウンロード",
          href: "https://marketplace.visualstudio.com/items?itemName=theuplauncher.vscoderpc",
          icon: <Icons.download className="size-3" />,
        },
        {
          type: "ソースコード",
          href: "https://github.com/UpLauncher/VSCodeRPC",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vscoderpc.png",
      video: "",
    },
  ],
} as const;
