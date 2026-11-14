// Single source of truth for the site and the three résumé PDFs.
export type Lang = 'en' | 'ja' | 'zh';
export const langs: Lang[] = ['en', 'ja', 'zh'];
export const langLabel: Record<Lang, string> = { en: 'EN', ja: '日本語', zh: '中文' };
export const htmlLang: Record<Lang, string> = { en: 'en', ja: 'ja', zh: 'zh-CN' };

export const contact = {
  email: 'clinfeng.jlu@gmail.com',
  github: 'https://github.com/find1dream',
  linkedin: 'https://www.linkedin.com/in/linfeng-chen' as string | null,
  site: 'https://find1dream.github.io',
};

export const cvFile = (l: Lang) => `/cv/Linfeng_Chen_CV_${l.toUpperCase()}.pdf`;

type Phase = { when: string; title: string; items: string[] };
type Job = { when: string; title: string; org: string; place: string; items?: string[]; phases?: Phase[]; metric?: string };
type Project = { id: 'system' | 'control' | 'docking' | 'bev' | 'edge' | 'sensor'; when: string; title: string; desc: string; tags: string[]; nums?: { v: string; l: string }[] };

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; how: string; howShort: string; work: string; projects: string; skills: string; edu: string; contact: string };
  name: string;
  role: string;
  location: string;
  tagline: string;
  themeLabel: string;
  statsTitle: string;
  teamTitle: string;
  teamStats: { value: string; label: string }[];
  selfTitle: string;
  selfStats: { value: string; label: string }[];
  cvButton: string;
  stats: { value: string; label: string }[];
  about: string[];
  activity: { title: string; caption: (commits: number, days: number) => string; less: string; more: string };
  principles: { t: string; d: string }[];
  present: string;
  jobs: Job[];
  projects: Project[];
  skills: { title: string; items: string[] }[];
  edu: { when: string; school: string; degree: string }[];
  certs: { k: string; v: string }[];
  contactText: string;
  copy: string;
  copied: string;
  cv: {
    summaryTitle: string;
    summary: string;
    workTitle: string;
    teamTitle: string;
    team: string[];
    skillsTitle: string;
    eduTitle: string;
    langTitle: string;
  };
}

const tags = {
  system: ['Rust', 'Zenoh', 'Podman', 'CI/CD'],
  control: ['MPC', 'SLP', 'DWA', 'Hybrid A*'],
  docking: ['ArUco', 'OAK', 'Rust'],
  bev: ['BEVFusion', 'LiDAR', 'ONNX', 'NPU'],
  edge: ['C++', 'Edge AI', 'MCU', 'Benchmark'],
  sensor: ['Python', 'C', 'DSP', 'ML'],
};

const skillItems = {
  control: ['MPC · LQR · PID', 'SLP · DWA · Hybrid A*'],
  perception: ['BEVFusion · LiDAR', 'ArUco · OpenCV', 'ONNX Runtime · NPU'],
  systems: ['Rust · C++ · Python · TypeScript', 'ROS 2 · Zenoh', 'Gazebo · Isaac Sim · Foxglove', 'Podman · GitHub Actions · AWS'],
};

export const t: Record<Lang, Content> = {
  en: {
    meta: {
      title: 'Linfeng Chen · Robotics Engineer',
      description: 'Chief Engineer, Robotics at MUSE Inc. in Tokyo. Robot system architecture, motion control, embedded AI and AI-first engineering.',
    },
    nav: { about: 'About', how: 'Strengths & how I work', howShort: 'Strengths', work: 'Experience', projects: 'Projects', skills: 'Skills', edu: 'Education', contact: 'Contact' },
    name: 'Linfeng Chen',
    role: 'Chief Engineer, Robotics · MUSE Inc.',
    location: 'Tokyo, Japan',
    tagline: 'I am giving a soul to robots that work in real stores, and making them a little more reliable every week.',
    themeLabel: 'Toggle dark mode',
    statsTitle: 'At MUSE Inc.',
    teamTitle: 'My contribution to the team',
    teamStats: [
      { value: '0 → 350k', label: 'lines of Rust in the new system, written entirely by our 5-person robot software team in 9 months' },
      { value: '8,000+', label: 'automated tests every release must pass' },
      { value: '−83%', label: 'customer release cycle, each after several betas' },
    ],
    selfTitle: 'My personal contribution',
    selfStats: [
      { value: '44%', label: 'of the new system’s code written by me' },
      { value: '58%', label: 'of the new system’s code written or reviewed by me' },
      { value: '1,247', label: 'commits in 2026' },
      { value: '23', label: 'repositories contributed to' },
    ],
    cvButton: 'Download résumé',
    stats: [
      { value: '−90%', label: 'store-robot intervention rate' },
      { value: '−89%', label: 'setup time for a new store' },
      { value: '−92%', label: 'time to update the robot system' },
    ],
    about: [
      'As Chief Engineer, Robotics at MUSE Inc., I lead the architecture of a new generation of store robots: a multi-purpose, modular AMR that takes on different jobs by switching units. It was built from the ground up and runs daily in live operations. Before that, I spent years bringing AI onto small, low-power devices.',
      'As a student I took part in many robot competitions and won quite a few awards, yet every one of those robots stayed in the lab. I wanted to build robots that leave it and get used every day, and that is what I work on now.',
      'That path taught me to think across the whole stack, from algorithms and hardware to the teams and systems that hold them together. I care about engineering that is simple, reliable and measurable, because a robot only matters when people can trust it. I work AI-first: coding agents are part of my daily team, and I set up the specs and checks that keep their output trustworthy.',
      'I am happiest where robotics, embedded systems and AI meet, in a team that ships to real users and hears back from them quickly. If you are working on robot software, motion control, or on how engineers and AI agents can build things together, I would be glad to talk.',
    ],
    activity: {
      title: 'Activity in 2026',
      caption: (n, d) => `${n.toLocaleString('en')} commits on ${d} days, across private work repositories.`,
      less: 'Less', more: 'More',
    },
    principles: [
      { t: 'Ownership', d: 'I took on motion control and obstacle avoidance as an approved side job. The results led to being asked to lead the whole new system, and I moved over full-time.' },
      { t: 'Let the data speak', d: 'Find the root cause, model it, replay real-robot data in simulation, and only then change the code. Give the team one number to move; for our store robot, the intervention rate. I hold Japan’s Statistics Certificate, Grade Pre-1.' },
      { t: 'One thread, end to end', d: 'From signal processing and embedded AI to robot control and system architecture, one thread runs through my work: making algorithms run on real hardware. Each step built on the last, and each shipped a product.' },
      { t: 'Work with AI', d: 'Coding agents are part of my daily team. I write the specs, tests and conventions that make their work reliable, and review what they ship.' },
      { t: 'Make the team fast', d: 'Shared contracts, one-command environments, CI, and specs and decision records that keep the reasoning when people change, so everyone can build in parallel.' },
      { t: 'Go to the floor', d: 'Every week I visit a store with the engineers. Time beside the robots shows problems no dashboard does.' },
    ],
    present: 'present',
    jobs: [
      {
        when: '2023.05', title: 'Chief Engineer, Robotics', org: 'MUSE Inc.', place: 'Tokyo',
        metric: 'Intervention rate −90% · new-store setup time −89%',
        phases: [
          {
            when: '2026 —', title: 'Technical lead, next-generation robot system',
            items: [
              'Lead 15+ software engineers. The 5-person robot software team I lead directly built the entire robot system.',
              'Designed and built a new robot system from scratch: hardware abstraction, control, perception, decision-making and cloud operations.',
              'Designed a platform architecture built for modular units, so the same AMR can keep growing into new modules and capabilities.',
              'Built end-to-end simulation in Gazebo and Isaac Sim, automatic cart attach and detach, and route planning.',
            ],
          },
          {
            when: '2023 — 2025', title: 'Motion control and obstacle avoidance (approved side job while at Renesas)',
            items: [
              'Motion planning (SLP, DWA, Hybrid A*) and control (MPC, cascaded PID, motor torque control), tuned on real robots.',
              'Obstacle avoidance, soft stop and robot REST/gRPC services.',
            ],
          },
        ],
      },
      {
        when: '2022.09 — 2026.03', title: 'Staff Application Engineer', org: 'Renesas Electronics', place: 'Tokyo',
        items: [
          'Built test and profiling frameworks for AI inference engines and benchmarked models across microcontrollers.',
          'Developed the RAI framework, optimized edge-AI acceleration code and built AI applications for Renesas MCUs.',
        ],
      },
      {
        when: '2020.04 — 2022.08', title: 'Embedded AI Software Engineer', org: 'QuantumCore Inc.', place: 'Tokyo',
        items: [
          'Designed fast, lightweight algorithms for low-spec embedded devices.',
          'Researched algorithms for radar, IR-LED and microphone sensors, and built prototypes and tools.',
        ],
      },
    ],
    projects: [
      { id: 'system', when: 'MUSE · 2026', title: 'Software for a modular AMR, from zero to the store floor', desc: 'Built end to end by our 5-person robot software team for a multi-purpose modular AMR: a layered Rust and Zenoh architecture where new units plug in through configuration, with one-step updates and automatic rollback.', tags: tags.system, nums: [{ v: '5', l: 'engineers built it all' }] },
      { id: 'control', when: 'MUSE · 2023—', title: 'Motion control for a robot towing carts', desc: 'MPC path tracking that keeps a round robot and its cart steady on straights and through corners, tuned on real-robot logs replayed in simulation.', tags: tags.control, nums: [{ v: '−54%', l: 'lateral tracking error (RMS)' }, { v: '−63%', l: 'overshoot in corners' }] },
      { id: 'docking', when: 'MUSE · 2026', title: 'Automatic cart attach and detach', desc: 'Guided by a rear camera reading marker boards, the robot backs up to a cart, docks, and tows it away. It releases the cart on its own too.', tags: tags.docking },
      { id: 'bev', when: 'MUSE · 2026', title: 'AI-predicted safe paths', desc: 'An AI model predicts a safe, drivable path from fused LiDAR and camera data, running on an on-board NPU.', tags: tags.bev },
      { id: 'edge', when: 'Renesas · 2022—2026', title: 'Edge AI on microcontrollers', desc: 'Test, profiling and benchmark tooling that shows how AI models run on resource-limited MCUs.', tags: tags.edge },
      { id: 'sensor', when: 'QuantumCore · 2020—2022', title: 'Sensor algorithms for tiny devices', desc: 'Lightweight signal processing and ML for radar, IR and audio on low-spec hardware.', tags: tags.sensor },
    ],
    skills: [
      { title: 'Control & planning', items: [...skillItems.control, 'Motor torque control'] },
      { title: 'Perception', items: skillItems.perception },
      { title: 'Systems', items: skillItems.systems },
      { title: 'AI-assisted engineering', items: ['Claude Code · coding agents', 'Spec- and test-driven work with AI', 'AI-assisted review and docs'] },
    ],
    edu: [
      { when: '2018 — 2020', school: 'Tohoku University', degree: "Master's · Human–Computer Interaction" },
      { when: '2013 — 2017', school: 'Jilin University', degree: 'Bachelor of Engineering · Computer Engineering' },
    ],
    certs: [{ k: 'Chinese', v: 'Native' }, { k: 'Japanese', v: 'JLPT N1' }, { k: 'English', v: 'TOEIC 805' }, { k: 'Statistics', v: 'Statistics Certificate Grade Pre-1 (Japan)' }],
    contactText: 'Always happy to connect with people working on robotics, autonomy and embedded AI.',
    copy: 'Copy email',
    copied: 'Copied',
    cv: {
      summaryTitle: 'Summary',
      summary: 'Robotics engineer with six years in embedded AI and robotics in Tokyo. I lead the architecture of a next-generation store robot built from scratch, and lead 15+ software engineers; my 5-person robot software team built the whole system. Results: intervention rate down 90%, new-store setup time down 89%. I work AI-first, with coding agents as part of the daily workflow, and still go hands-on for field debugging and tuning.',
      workTitle: 'Experience',
      teamTitle: 'Leadership & collaboration',
      team: [
        'Lead the 5-person robot software team: set priorities, review designs and code, and grow engineers.',
        'Defined module interfaces and event-code conventions so engineers on control, perception, decision and cloud could build in parallel.',
        'Built a shared dev image, CI and simulation so new members can build, test and simulate with one command.',
        'Introduced spec- and ADR-driven development to record design trade-offs and cut hand-over by word of mouth.',
        'Visit a store every week with the engineers, and work with store operations, hardware and cloud teams to turn field feedback into verifiable improvements.',
      ],
      skillsTitle: 'Skills',
      eduTitle: 'Education',
      langTitle: 'Languages & certificates',
    },
  },

  ja: {
    meta: {
      title: '陳 林峰 · ロボティクスエンジニア',
      description: 'MUSE株式会社 Chief Engineer, Robotics（東京）。ロボットシステム設計、運動制御、組込み AI。',
    },
    nav: { about: '自己紹介', how: '強みと仕事の進め方', howShort: '強み', work: '職歴', projects: 'プロジェクト', skills: 'スキル', edu: '学歴', contact: '連絡先' },
    name: '陳 林峰',
    role: 'Chief Engineer, Robotics · MUSE株式会社',
    location: '東京',
    tagline: '実店舗で働くロボットに魂を吹き込み、毎週少しずつ信頼性を高めています。',
    themeLabel: 'ダークモード切替',
    statsTitle: 'MUSE での実績',
    teamTitle: 'チームへの貢献',
    teamStats: [
      { value: '0 → 35 万行', label: '新システムの Rust コード。5 名のロボットソフトウェアチームが 9 か月でゼロから開発' },
      { value: '8,000+', label: 'リリースごとに通過必須の自動テスト' },
      { value: '−83%', label: '顧客へのリリース周期（複数のベータを経て）' },
    ],
    selfTitle: '個人としての貢献',
    selfStats: [
      { value: '44%', label: '新システムのコードのうち自ら執筆した割合' },
      { value: '58%', label: '新システムのコードのうち執筆またはレビューした割合' },
      { value: '1,247', label: '2026 年のコミット数' },
      { value: '23', label: '関わったリポジトリ' },
    ],
    cvButton: '履歴書をダウンロード',
    stats: [
      { value: '−90%', label: '店舗ロボットの介入率' },
      { value: '−89%', label: '新店舗のセットアップ時間' },
      { value: '−92%', label: 'ロボットシステムの更新時間' },
    ],
    about: [
      'MUSE株式会社の Chief Engineer, Robotics として、ゼロから開発した次世代店舗ロボットのアーキテクチャを統括しています。ユニットを付け替えることでさまざまな業務をこなす、多機能なモジュール型 AMR です。システムは現在、実店舗で毎日稼働しています。それ以前は、小型・低消費電力デバイスへの AI 実装に取り組んできました。',
      '学生時代は多くのロボットコンテストに参加し、賞もいくつも受賞しました。しかし、そのロボットたちはどれも研究室から出ることはありませんでした。研究室の外で毎日使われるロボットをつくりたい。それが今の仕事につながっています。',
      'この経験から、アルゴリズムやハードウェアだけでなく、それを支えるチームと仕組みまで含めて全体を考えるようになりました。シンプルで、信頼でき、測定できるエンジニアリングを大切にしています。ロボットは、人が信頼できて初めて価値を持つからです。また、AI ファーストで仕事をしています。コーディングエージェントを日々のチームの一員とし、その成果を信頼できるものにする仕様とチェックを整えています。',
      'ロボティクス、組込みシステム、AI が交わる領域で、実際のユーザーに届け、すぐにフィードバックをもらえるチームで働くのが好きです。ロボットのソフトウェア、運動制御、そしてエンジニアと AI エージェントが一緒にものをつくる方法に関心のある方と、ぜひお話ししたいです。',
    ],
    activity: {
      title: '2026 年の開発活動',
      caption: (n, d) => `業務リポジトリ全体で ${d} 日間に ${n.toLocaleString('ja')} コミット。`,
      less: '少', more: '多',
    },
    principles: [
      { t: '当事者意識', d: '会社の承認を得た副業として運動制御と障害物回避を担当。その成果から次世代システム全体を任され、専任になりました。' },
      { t: 'データで語る', d: 'まず根本原因を探してモデル化し、実機データをシミュレーションで再現してから修正します。チームで動かす指標はひとつに絞る。店舗ロボットでは介入率でした。統計検定準1級。' },
      { t: '一貫した軸', d: '信号処理、組込み AI から、ロボット制御、システムアーキテクチャまで。軸はずっと「アルゴリズムを実機で動かすこと」です。各段階が次の土台となり、それぞれで製品を出してきました。' },
      { t: 'AI と働く', d: 'コーディングエージェントは日々のチームの一員です。仕様・テスト・規約を整えて成果を信頼できるものにし、出てきたものは自分でレビューします。' },
      { t: 'チームを速くする', d: '共通の規約、コマンド一つで立ち上がる開発環境、CI、そして仕様書と ADR で判断の理由を残し、全員が並行して開発できるようにします。' },
      { t: '現場に行く', d: '毎週エンジニアと一緒に店舗へ足を運びます。ロボットのそばにいると、ダッシュボードでは見えない問題が見えてきます。' },
    ],
    present: '現在',
    jobs: [
      {
        when: '2023.05', title: 'Chief Engineer, Robotics', org: 'MUSE株式会社', place: '東京',
        metric: '介入率 −90% · 新店舗セットアップ時間 −89%',
        phases: [
          {
            when: '2026 —', title: '次世代ロボットシステムの技術リード',
            items: [
              '15 名以上のソフトウェアエンジニアを統括。直属の 5 名のロボットソフトウェアチームでロボットシステム全体を構築。',
              'ハードウェア抽象化、制御、認識、意思決定、クラウド運用まで、新しいロボットシステムをゼロから設計・実装。',
              'モジュール型ユニットを前提としたプラットフォームとして設計し、同じ AMR に新しいモジュールや機能を継続的に拡張できるようにした。',
              'Gazebo と Isaac Sim によるエンドツーエンドシミュレーション、台車の自動着脱、ルート計画を開発。',
            ],
          },
          {
            when: '2023 — 2025', title: '運動制御・障害物回避（ルネサス在籍中、会社承認の副業）',
            items: [
              '経路計画（SLP、DWA、Hybrid A*）と制御（MPC、カスケード PID、モータトルク制御）を開発し、実機で調整。',
              '障害物回避、ソフトストップ、ロボット向け REST/gRPC サービスを開発。',
            ],
          },
        ],
      },
      {
        when: '2022.09 — 2026.03', title: 'Staff Application Engineer', org: 'ルネサス エレクトロニクス', place: '東京',
        items: [
          'AI 推論エンジン向けのテスト・プロファイリング基盤を開発し、各種マイコンでモデルをベンチマーク。',
          'RAI フレームワークの開発、エッジ AI 高速化コードの最適化、ルネサス製マイコン向け AI アプリケーションの開発。',
        ],
      },
      {
        when: '2020.04 — 2022.08', title: '組込み AI ソフトウェアエンジニア', org: '株式会社QuantumCore', place: '東京',
        items: [
          '低スペック組込み機器向けの高速・軽量アルゴリズムを開発。',
          'レーダー、赤外線 LED、マイクなどのセンサ向けアルゴリズムを研究し、試作機やツールを製作。',
        ],
      },
    ],
    projects: [
      { id: 'system', when: 'MUSE · 2026', title: 'モジュール型 AMR のソフトウェアをゼロから店舗へ', desc: '多機能なモジュール型 AMR 向けに、5 名のロボットソフトウェアチームですべてを構築。新しいユニットを設定だけで追加できる、Rust と Zenoh の階層型アーキテクチャ。ワンステップ更新と自動ロールバックに対応。', tags: tags.system, nums: [{ v: '5 名', l: 'で全て構築' }] },
      { id: 'control', when: 'MUSE · 2023—', title: '台車を牽引するロボットの運動制御', desc: '円形ロボットが台車を牽引しても、直線でもコーナーでも安定して走れる MPC 経路追従。実機ログをシミュレーションで再生して調整。', tags: tags.control, nums: [{ v: '−54%', l: '横方向の追従誤差（RMS）' }, { v: '−63%', l: 'コーナーでのオーバーシュート' }] },
      { id: 'docking', when: 'MUSE · 2026', title: '台車の自動着脱', desc: '後方カメラでマーカーボードを読み取りながら後退して台車にドッキングし、そのまま牽引。切り離しも自動で行います。', tags: tags.docking },
      { id: 'bev', when: 'MUSE · 2026', title: 'AI による安全な走行経路の予測', desc: 'LiDAR とカメラを融合したデータから、AI が安全に走行できる経路を予測。ロボット搭載の NPU で推論。', tags: tags.bev },
      { id: 'edge', when: 'Renesas · 2022—2026', title: 'マイコン上のエッジ AI', desc: 'リソースの限られたマイコンで AI モデルがどう動くかを可視化するテスト・プロファイリング・ベンチマーク基盤。', tags: tags.edge },
      { id: 'sensor', when: 'QuantumCore · 2020—2022', title: '小型デバイス向けセンサアルゴリズム', desc: '低スペックハードウェアで動く、レーダー・赤外線・音声向けの軽量な信号処理と機械学習。', tags: tags.sensor },
    ],
    skills: [
      { title: '制御・計画', items: [...skillItems.control, 'モータトルク制御'] },
      { title: '認識', items: skillItems.perception },
      { title: 'システム', items: skillItems.systems },
      { title: 'AI 活用開発', items: ['Claude Code · コーディングエージェント', 'AI と進める仕様・テスト駆動開発', 'AI によるレビュー・ドキュメント作成'] },
    ],
    edu: [
      { when: '2018 — 2020', school: '東北大学', degree: '修士 · ヒューマンコンピュータインタラクション' },
      { when: '2013 — 2017', school: '吉林大学', degree: '工学学士 · コンピュータ工学' },
    ],
    certs: [{ k: '中国語', v: 'ネイティブ' }, { k: '日本語', v: '日本語能力試験 N1' }, { k: '英語', v: 'TOEIC 805' }, { k: '統計', v: '統計検定準1級' }],
    contactText: 'ロボティクス、自律移動、組込み AI に関わる方とのつながりを歓迎しています。',
    copy: 'メールをコピー',
    copied: 'コピーしました',
    cv: {
      summaryTitle: '概要',
      summary: '東京で 6 年間、組込み AI とロボティクスに従事。ゼロから開発した次世代店舗ロボットのアーキテクチャを統括し、15 名以上のソフトウェアエンジニアを率い、5 名のロボットソフトウェアチームでシステム全体を構築。介入率を 90% 削減し、新店舗のセットアップ時間を 89% 短縮。AI コーディングエージェントを日常的に活用する AI ファーストの開発スタイルで、現場での問題解析と調整も自ら行います。',
      workTitle: '職歴',
      teamTitle: 'リーダーシップ・チーム連携',
      team: [
        '5 名のロボットソフトウェアチームを率い、優先度設定、設計・コードレビュー、メンバーの育成を担当。',
        'モジュール間のインターフェースとイベントコード規約を定め、制御・認識・意思決定・クラウドの各担当が並行開発できるようにした。',
        '共通開発イメージ、CI、シミュレーション環境を整備し、新メンバーがコマンド一つでビルド・テスト・シミュレーションできるようにした。',
        '仕様書と ADR（アーキテクチャ決定記録）による開発を導入し、設計判断を記録して口頭での引き継ぎを減らした。',
        '毎週エンジニアと店舗を訪問し、店舗運用・ハードウェア・クラウドのメンバーと連携して、現場のフィードバックを検証可能な改善につなげている。',
      ],
      skillsTitle: 'スキル',
      eduTitle: '学歴',
      langTitle: '語学・資格',
    },
  },

  zh: {
    meta: {
      title: '陈林峰 · 机器人工程师',
      description: 'MUSE Inc. Chief Engineer, Robotics（东京）。机器人系统架构、运动控制与嵌入式 AI。',
    },
    nav: { about: '关于', how: '工作方式与特质', howShort: '特质', work: '经历', projects: '项目', skills: '技能', edu: '教育', contact: '联系' },
    name: '陈林峰',
    role: 'Chief Engineer, Robotics · MUSE Inc.',
    location: '日本东京',
    tagline: '我正在为真实门店里工作的机器人赋予灵魂，每周让它们更可靠一点。',
    themeLabel: '切换深色模式',
    statsTitle: '在 MUSE 的成果',
    teamTitle: '我对团队的贡献',
    teamStats: [
      { value: '0 → 35 万行', label: '新系统 Rust 代码，5 人机器人软件团队 9 个月从零写成' },
      { value: '8,000+', label: '每次发布必须通过的自动化测试' },
      { value: '−83%', label: '向客户正式发布的周期（经过数个 Beta）' },
    ],
    selfTitle: '我的个人贡献',
    selfStats: [
      { value: '44%', label: '新系统代码由我亲自编写' },
      { value: '58%', label: '新系统代码由我编写或 review' },
      { value: '1,247', label: '2026 年提交次数' },
      { value: '23', label: '参与的代码仓库' },
    ],
    cvButton: '下载简历',
    stats: [
      { value: '−90%', label: '门店机器人人工干预率' },
      { value: '−89%', label: '新店铺部署时间' },
      { value: '−92%', label: '机器人系统更新时间' },
    ],
    about: [
      '我在 MUSE Inc. 担任 Chief Engineer, Robotics，负责从零打造的新一代门店机器人的整体架构。这是一款多功能模块化 AMR，通过更换不同的 Unit 承担不同的工作，系统已在门店日常运行。此前，我多年致力于把 AI 落到小型、低功耗设备上。',
      '学生时代我参加过很多机器人比赛，也拿过不少奖，但那些机器人最终都只能停在实验室里。我想做能走出实验室、每天真正被用起来的机器人，这也是我现在在做的事。',
      '这段经历让我习惯从全局思考：从算法和硬件，到支撑它们的团队与体系。我看重简单、可靠、可度量的工程，因为只有让人信得过，机器人才有价值。我也是 AI 优先的工程师：编码 Agent 是我日常团队的一员，我负责搭好让它们产出可靠的规格与检查。',
      '我最喜欢待在机器人、嵌入式系统和 AI 的交汇处，在能直接面对真实用户、快速得到反馈的团队里做事。如果你也在做机器人软件、运动控制，或者在探索工程师和 AI Agent 如何一起做产品，很乐意和你聊聊。',
    ],
    activity: {
      title: '2026 年提交记录',
      caption: (n, d) => `在公司私有仓库中，${d} 天里共提交 ${n.toLocaleString('zh')} 次。`,
      less: '少', more: '多',
    },
    principles: [
      { t: '主人翁意识', d: '经公司同意以副业身份负责运动控制与避障，凭成果被委以新一代系统的整体负责，并转为全职。' },
      { t: '用数据说话', d: '先找根因、建模，用实机数据在仿真中复现，再动代码。给团队定一个共同推动的数字，门店机器人上就是人工干预率。持有日本统计检定准 1 级。' },
      { t: '一条主线，全栈深入', d: '从信号处理、嵌入式 AI，到机器人控制与系统架构，始终围绕一条主线：让算法在真实硬件上跑起来。每一步都建立在上一步之上，并且都做出了产品。' },
      { t: '与 AI 协作', d: '编码 Agent 是我日常团队的一员。我负责写好规格、测试和规范，让它们的产出可靠，并亲自审查交付的代码。' },
      { t: '让团队更快', d: '统一的接口规范、一条命令的开发环境和 CI，再用规格书和架构决策记录留住设计理由，让每个人都能并行开发。' },
      { t: '下到现场', d: '每周和工程师一起去一次门店现场。陪在机器人身边，能看到仪表盘上看不到的问题。' },
    ],
    present: '至今',
    jobs: [
      {
        when: '2023.05', title: 'Chief Engineer, Robotics', org: 'MUSE Inc.', place: '东京',
        metric: '人工干预率 −90% · 新店部署时间 −89%',
        phases: [
          {
            when: '2026 —', title: '新一代机器人系统技术负责人',
            items: [
              '带领 15+ 名软件工程师；其中直接带领的 5 人机器人软件团队完成了整个机器人系统。',
              '从 0 设计并实现全新机器人系统：硬件抽象、控制、感知、决策到云端运维。',
              '以平台化思路设计系统架构，原生支持模块化 Unit，让同一台 AMR 能持续拓展新的模块与功能。',
              '搭建 Gazebo 与 Isaac Sim 端到端仿真，实现货车自动挂接与脱离、路由规划。',
            ],
          },
          {
            when: '2023 — 2025', title: '运动控制与避障（瑞萨在职期间，经公司同意的副业）',
            items: [
              '运动规划（SLP、DWA、Hybrid A*）与控制（MPC、级联 PID、电机力矩控制），实机调参。',
              '障碍物避让、软急停与机器人 REST/gRPC 服务。',
            ],
          },
        ],
      },
      {
        when: '2022.09 — 2026.03', title: 'Staff Application Engineer', org: '瑞萨电子（Renesas Electronics）', place: '东京',
        items: [
          '开发 AI 推理引擎的测试与性能分析框架，在多款微控制器上做模型基准测试。',
          '参与 RAI 框架开发，优化端侧 AI 加速代码，为瑞萨 MCU 开发 AI 应用。',
        ],
      },
      {
        when: '2020.04 — 2022.08', title: '嵌入式 AI 软件工程师', org: '株式会社 QuantumCore', place: '东京',
        items: [
          '为低配嵌入式设备开发高速、轻量的算法。',
          '研究雷达、红外 LED、麦克风等传感器算法，制作原型与工具。',
        ],
      },
    ],
    projects: [
      { id: 'system', when: 'MUSE · 2026', title: '模块化 AMR 的软件系统：从 0 到门店运行', desc: '为多功能模块化 AMR，由 5 人机器人软件团队从头到尾全部完成：基于 Rust 与 Zenoh 的分层架构，新 Unit 通过配置即可接入，支持一键升级与自动回滚。', tags: tags.system, nums: [{ v: '5 人', l: '完成全部开发' }] },
      { id: 'control', when: 'MUSE · 2023—', title: '牵引货车的机器人运动控制', desc: '让牵引货车的圆形机器人在直道和弯道都跑得稳的 MPC 路径跟踪，用实机日志在仿真中回放调参。', tags: tags.control, nums: [{ v: '−54%', l: '横向跟踪误差（RMS）' }, { v: '−63%', l: '过弯超调' }] },
      { id: 'docking', when: 'MUSE · 2026', title: '货车自动挂接与脱离', desc: '后置相机识别标记板，机器人自主倒车对接货车并拉走；到达后也能自动脱离。', tags: tags.docking },
      { id: 'bev', when: 'MUSE · 2026', title: 'AI 预测安全可通行路径', desc: '融合激光雷达与相机数据，由 AI 预测安全可通行路径，在机器人搭载的 NPU 上推理。', tags: tags.bev },
      { id: 'edge', when: 'Renesas · 2022—2026', title: '微控制器上的端侧 AI', desc: '测试、性能分析与基准工具，揭示 AI 模型在资源受限 MCU 上的实际表现。', tags: tags.edge },
      { id: 'sensor', when: 'QuantumCore · 2020—2022', title: '小型设备的传感器算法', desc: '面向低配硬件的雷达、红外、音频轻量信号处理与机器学习算法。', tags: tags.sensor },
    ],
    skills: [
      { title: '控制与规划', items: [...skillItems.control, '电机力矩控制'] },
      { title: '感知', items: skillItems.perception },
      { title: '系统', items: skillItems.systems },
      { title: 'AI 协作开发', items: ['Claude Code · 编码 Agent', '与 AI 协作的规格与测试驱动开发', 'AI 辅助代码审查与文档'] },
    ],
    edu: [
      { when: '2018 — 2020', school: '东北大学（日本）', degree: '硕士 · 人机交互' },
      { when: '2013 — 2017', school: '吉林大学', degree: '工学学士 · 计算机工程' },
    ],
    certs: [{ k: '中文', v: '母语' }, { k: '日语', v: 'JLPT N1' }, { k: '英语', v: 'TOEIC 805' }, { k: '统计', v: '日本统计检定准 1 级' }],
    contactText: '欢迎从事机器人、自主导航与嵌入式 AI 的朋友联系交流。',
    copy: '复制邮箱',
    copied: '已复制',
    cv: {
      summaryTitle: '个人概述',
      summary: '在东京从事嵌入式 AI 与机器人 6 年。主导从零打造的新一代门店机器人架构，带领 15+ 名软件工程师，其中 5 人机器人软件团队完成了整个系统；人工干预率降低 90%，新店铺部署时间缩短 89%。擅长与 AI 协作，把编码 Agent 纳入日常开发流程，也能亲自下到现场定位问题、调参落地。',
      workTitle: '工作经历',
      teamTitle: '团队与协作',
      team: [
        '带领 5 人机器人软件团队，负责优先级、设计与代码评审，以及成员培养。',
        '制定模块间接口契约与事件码规范，让控制、感知、决策、云端等方向的同事可以并行开发。',
        '搭建统一开发镜像、CI 和仿真环境，新成员一条命令即可构建、测试、跑仿真。',
        '推行规格书 + 架构决策记录（ADR）的开发方式，记录设计取舍，减少口头交接。',
        '每周和工程师一起去一次门店现场，与门店运营、硬件、云端同事协作，把现场反馈转化为可验证的改进。',
      ],
      skillsTitle: '技能',
      eduTitle: '教育背景',
      langTitle: '语言与证书',
    },
  },
};
