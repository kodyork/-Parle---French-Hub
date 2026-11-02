const day05Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 5 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 05: カフェでの注文・好みの表現 ＆ 条件法による丁寧な依頼
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-indigo-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                注文の必須フレーズ (s'il vous plaît / vouloir) から、条件法（Je voudrais...）を用いた洗練されたB2依頼表現まで徹底解説します。
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">

        <!-- Speed Controller -->
        <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-neutral-800">
            <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-indigo-600"></i>
            <span class="text-sm font-semibold">発音スピード調整（Audio Speed Controller）:</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="setSpeed(0.85)" id="speed-085" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.85x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-indigo-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：カフェでの注文フレーズと条件法のニュアンス</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-indigo-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① カフェでの注文フレーズ（A1基礎）</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">Un café, s'il vous plaît.</code>（コーヒーを1つお願いします）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Je voudrais un croissant.</code>（クロワッサンをいただきたいのですが）<br>
                ・<code class="bg-neutral-100 px-1 rounded">L'addition, s'il vous plaît.</code>（お会計をお願いします）<br>
                ※ <code class="bg-neutral-100 px-1 rounded">s'il vous plaît</code>（スィル・ヴ・プレ）は英語の "please" にあたる必須の魔法の言葉です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：動詞 vouloir の条件法（Je voudrais...）による丁寧さ</h4>
              <p class="text-neutral-600">
                直截的に「〜が欲しい（Je veux...）」と言うと少し子供っぽく聞こえたり、きつい印象を与えたりすることがあります。そこでB2レベルでは、動詞の活用を条件法（〜したいのですが）に変えた <code class="bg-neutral-100 px-1 rounded">Je voudrais...</code> を使います。相手への配慮を含んだ、大人の洗練されたフランス語表現になります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-indigo-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：フランスのカフェ（Café / Bistro）のテラス文化</h4>
              <p class="text-neutral-600">
                フランスのカフェのテラス席は、通りに向かって椅子が配置されているのが特徴です。これは「街の景色や人間模様を眺めること自体を楽しむ」というフランス人のライフスタイルに由来しています。<br>
                ・<code class="bg-neutral-100 px-1 rounded">Café noir / Un expresso</code>（エスプレッソ）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Café au lait</code>（カフェオレ：朝食によく飲まれます）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Un demi</code>（生ビールの一種・グラスビール）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-indigo-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('Bonjour! Je voudrais un café au lait et un croissant, s il vous plaît.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Bonjour! Je voudrais un café au lait et un croissant, s'il vous plaît.</span>
                <p class="text-xs text-neutral-500 mt-1">こんにちは！カフェオレとクロワッサンを1つずつお願いします。</p>
              </div>
            </div>

            <div onclick="speak('C est tout? — Oui, c est tout. L addition, s il vous plaît.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">C'est tout? — Oui, c'est tout. L'addition, s'il vous plaît.</span>
                <p class="text-xs text-neutral-500 mt-1">ご注文は以上ですか？ — はい、以上です。お会計をお願いします。</p>
              </div>
            </div>

            <div onclick="speak('J aime beaucoup m assoir en terrasse à Paris.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">J'aime beaucoup m'asseoir en terrasse à Paris.</span>
                <p class="text-xs text-neutral-500 mt-1">私はパリでテラス席に座るのがとても好きです。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 05 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：お願いします</span>
            <p class="font-medium text-neutral-900">「〜をお願いします」を意味する定番の表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, 'C’est exact! s’il vous plaît です。', '不正解！ de rien は「どういたしまして」です。', 's\'il vous plaît')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. s'il vous plaît</button>
              <button onclick="checkQuiz(1, 1, 0, 'C’est exact! s’il vous plaît です。', '不正解！ de rien は「どういたしまして」です。', 's\'il vous plaît')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. de rien</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：お会計</span>
            <p class="font-medium text-neutral-900">「お会計をお願いします（L'[ ] , s'il vous plaît）」の空欄に入る単語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>L'</span>
              <span onclick="revealAnswer(2, 'addition (addition)', 'addition')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
              <span>, s'il vous plaît.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：カフェオレ</span>
            <p class="font-medium text-neutral-900">「カフェオレ（café au lait ※アクント省略可）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 w-64 bg-white">
              <button onclick="checkInput(3, ['café au lait', 'cafe au lait', 'Café au lait'], 'café au lait')" class="bg-neutral-900 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：丁寧な依頼</span>
            <p class="font-medium text-neutral-900">レストランやカフェで「〜をいただきたいのですが」と丁寧に注文するときに使う動詞の形は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, 'C’est exact! Je voudrais... が最も丁寧でエレガントです。', '不正解！ Je veux... は少し直接的すぎて子供っぽく聞こえます。', 'Je voudrais')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Je voudrais...</button>
              <button onclick="checkQuiz(4, 1, 0, 'C’est exact! Je voudrais... が最も丁寧でエレガントです。', '不正解！ Je veux... は少し直接的すぎて子供っぽく聞こえます。', 'Je voudrais')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Je veux...</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「カフェオレとクロワッサンを1つずつお願いします」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Je voudrais un café au lait et un croissant, s\'il vous plaît. (Je voudrais un café au lait et un croissant, s\'il vous plaît.)', 'Je voudrais un café au lait et un croissant, s\'il vous plaît.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Chanson Special ＆ 歌で学ぶフランス語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 5 Special • Paris Skyline & Chanson
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 名曲『Sous le ciel de Paris』で感じるパリの街並みと情緒
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              パリの空の下に広がる人々の営みと、カフェのある日常をシャンソンの名曲から味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Sous le ciel de Paris (Édith Piaf / Yves Montand)</h4>
                <p class="text-xs text-neutral-500">French Chanson Classic</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              「パリの空の下」は、セーヌ川の流れや街角のカフェ、そこで暮らす人々の恋や日常を温かく描き出した永遠の名曲です。街のざわめきと音楽が溶け合うパリの雰囲気を象徴しています。
            </p>
          </div>

          <!-- 歌詞フレーズセクション -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-6">
            <div class="flex justify-between items-center border-b border-neutral-200 pb-3">
              <h4 class="text-md font-bold text-neutral-900 flex items-center space-x-2">
                <i data-lucide="mic" class="w-4 h-4 text-indigo-600"></i>
                <span>名フレーズを聴いてみよう</span>
              </h4>
            </div>

            <div class="space-y-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-indigo-950">Sous le ciel de Paris coule un fleuve d honneur</span>
                  <button onclick="speak('Sous le ciel de Paris coule un fleuve d honneur')" class="text-indigo-700 hover:text-indigo-800 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">パリの空の下、誇り高き川（セーヌ川）が流れる</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-indigo-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌から学べる！重要表現解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">位置を表す前置詞「sous (〜の下に)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  物理的・空間的な「〜の下」を表す <code class="bg-neutral-200 px-1 rounded">sous</code>（例：<code class="bg-neutral-200 px-1 rounded">sous le ciel</code> ＝ 空の下で）は、詩的な情景描写や場所を説明する際に非常によく使われる重要前置詞です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
