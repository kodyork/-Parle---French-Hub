const day04Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 4 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 04: 職業と国籍の表現 ＆ 動詞 être の本質と不屈の精神
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-indigo-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                国籍・職業の性数一致と無冠詞の原則、さらに存在と本質を表す être の高度な使い分けをマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：国籍・職業のルールと動詞 être の本質</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-indigo-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 国籍・職業の性数変化と「無冠詞」の原則（A1基礎）</h4>
              <p class="text-neutral-600">
                ・国籍：<code class="bg-neutral-100 px-1 rounded">japonais / japonaise</code>（日本人）, <code class="bg-neutral-100 px-1 rounded">français / française</code>（フランス人）<br>
                ・職業：<code class="bg-neutral-100 px-1 rounded">étudiant / étudiante</code>（学生）, <code class="bg-neutral-100 px-1 rounded">professeur</code>（教師・男女同形が多い）<br>
                ※ <strong>A1の重要ルール：</strong>英語と異なり、フランス語で職業を言うときは <code class="bg-neutral-100 px-1 rounded">Je suis professeur.</code> のように冠詞（un/une）をつけずに直接つなげます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：動詞 être がもつ「存在の定義」</h4>
              <p class="text-neutral-600">
                英語の "be" にあたる <code class="bg-neutral-100 px-1 rounded">être</code> は、単に「〜です」と訳すだけでなく、「その人の本質、身分、不変のアイデンティティ」を定義する強烈なニュアンスを持ちます。<br>
                例：<code class="bg-neutral-100 px-1 rounded">C'est moi.</code>（それは私です）や、後述するシャンソンのように <code class="bg-neutral-100 px-1 rounded">Je ne regrette rien.</code>（私は何も後悔しない＝それが私の生き様だ）という絶対的な自己肯定感の土台となります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-indigo-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：フランスにおける「職業と人格」の意識</h4>
              <p class="text-neutral-600">
                フランス社会では、どのような職業についているか以上に、「自分が何を考え、どう生きているか」という個人の哲学が重んじられます。また、女性の社会進出が歴史的に進んでいるため、職業名（プロフェッサーやエンジニアなど）の女性形が厳密に使い分けられるのもフランス語の特徴です。
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
            
            <div onclick="speak('D où venez-vous? — Je suis de Tokyo, je suis japonais.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">D'où venez-vous? — Je suis de Tokyo, je suis japonais.</span>
                <p class="text-xs text-neutral-500 mt-1">ご出身はどちらですか？ — 東京出身です、日本人です。（男性が話す場合）</p>
              </div>
            </div>

            <div onclick="speak('Quelle est votre profession? — Je suis étudiante.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Quelle est votre profession? — Je suis étudiante.</span>
                <p class="text-xs text-neutral-500 mt-1">ご職業は何ですか？ — 私は学生です。（女性が話す場合）</p>
              </div>
            </div>

            <div onclick="speak('Mon frère est ingénieur et il habite à Lyon.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Mon frère est ingénieur et il habite à Lyon.</span>
                <p class="text-xs text-neutral-500 mt-1">私の兄弟はエンジニアで、リヨンに住んでいます。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 04 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：女性の日本人</span>
            <p class="font-medium text-neutral-900">女性が「私は日本人です」と言う場合の正しい表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, 'C’est exact! Je suis japonaise です。', '不正解！ japonais は男性形です。', 'Je suis japonaise')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Je suis japonaise</button>
              <button onclick="checkQuiz(1, 1, 0, 'C’est exact! Je suis japonaise です。', '不正解！ japonais は男性形です。', 'Je suis japonaise')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Je suis japonais</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：出身の表現</span>
            <p class="font-medium text-neutral-900">「私は東京出身です（Je suis [ ] Tokyo）」の空欄に入る前置詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Je suis</span>
              <span onclick="revealAnswer(2, 'de (de)', 'de')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
              <span>Tokyo.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：学生（女性形）</span>
            <p class="font-medium text-neutral-900">「女子学生（étudiante ※アクント省略可）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 w-64 bg-white">
              <button onclick="checkInput(3, ['étudiante', 'etudiante', 'Étudiante'], 'étudiante')" class="bg-neutral-900 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 職業の無冠詞ルール</span>
            <p class="font-medium text-neutral-900">「私は教師です」と言うとき、professeur の前に冠詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, 'C’est exact! 職業の前には冠詞をつけません。', '不正解！ フランス語では無冠詞が原則です。', 'Je suis professeur')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. つけない（無冠詞）</button>
              <button onclick="checkQuiz(4, 1, 0, 'C’est exact! 職業の前には冠詞をつけません。', '不正解！ フランス語では無冠詞が原則です。', 'Je suis professeur')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. un をつける</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「ご出身はどちらですか？ — 東京出身です、日本人です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'D\'où venez-vous? — Je suis de Tokyo, je suis japonais. (D\'où venez-vous? — Je suis de Tokyo, je suis japonais.)', 'D\'où venez-vous? — Je suis de Tokyo, je suis japonais.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Chanson Special ＆ 歌で学ぶフランス語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 4 Special • Chanson & Identity
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 名曲『Non, je ne regrette rien』で学ぶ être と不屈の魂
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              エディット・ピアフの魂の歌声から、動詞と否定形の力強い表現をマスターしよう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Non, je ne regrette rien (Édith Piaf)</h4>
                <p class="text-xs text-neutral-500">French Chanson Masterpiece</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              「いいえ、私は何も後悔しない」というタイトルがあまりにも有名な、人生の讃歌。過去のすべてを受け入れ、自分の足で力強く生きるというフランス人の独立心が込められた歴史的名曲です。
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
                  <span class="font-bold text-lg text-indigo-950">Non, rien de rien, non, je ne regrette rien</span>
                  <button onclick="speak('Non, rien de rien, non, je ne regrette rien')" class="text-indigo-700 hover:text-indigo-800 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">いいえ、何もかも全然、いいえ、私は何も後悔しない（ne〜rien ＝ 何も〜ない）</p>
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
                  <span class="font-bold text-neutral-900">フランス語の否定構文「ne 〜 rien (何も〜ない)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  動詞を挟むように <code class="bg-neutral-200 px-1 rounded">ne 〜 pas</code>（〜ではない）や <code class="bg-neutral-200 px-1 rounded">ne 〜 rien</code>（何も〜ない）を置くことで、強い否定を表現できます。感情をクリアに伝えるための必須文法です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
