const day02Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 2 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 02: 数字と年齢の表現 ＆ 動詞 avoir の本質とシャンソンの世界
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-indigo-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                基数詞 (1-10) と動詞 avoir による年齢表現、さらにリエゾンを左右する「有音のh・無音のh」のB2文法をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：数字と動詞 avoir の活用・発音のルール</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-indigo-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① フランス語の基本数字 (1〜10) と発音の注意点</h4>
              <p class="text-neutral-600">
                1: <code class="bg-neutral-100 px-1 rounded">un</code> (アン), 2: <code class="bg-neutral-100 px-1 rounded">deux</code> (ドゥ), 3: <code class="bg-neutral-100 px-1 rounded">trois</code> (トゥロワ), 4: <code class="bg-neutral-100 px-1 rounded">quatre</code> (キャトル), 5: <code class="bg-neutral-100 px-1 rounded">cinq</code> (サンク)<br>
                6: <code class="bg-neutral-100 px-1 rounded">six</code> (シス), 7: <code class="bg-neutral-100 px-1 rounded">sept</code> (セット), 8: <code class="bg-neutral-100 px-1 rounded">huit</code> (ユイット), 9: <code class="bg-neutral-100 px-1 rounded">neuf</code> (ヌフ), 10: <code class="bg-neutral-100 px-1 rounded">dix</code> (ディス)<br>
                ※ <strong>A1のポイント：</strong>フランス語の数字は、後ろに続く単語の頭文字（子音か母音か）によって s や x の発音が変化する特徴があります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 年齢を言うときの動詞 avoir（持つ）と「無音のh」</h4>
              <p class="text-neutral-600">
                フランス語では年齢を「〜年の年齢を持っている」と考え、動詞 avoir を使います。<br>
                ・<code class="bg-neutral-100 px-1 rounded">J'ai 25 ans.</code>（私は25歳です。※Je ai が J'ai に短縮）<br>
                ここで重要になるのが「年齢（âge）」の頭文字である <strong>h</strong> です。フランス語の h には、前の単語とくっつく「無音のh（h muet）」と、くっつかない「有音のh（h aspiré）」があります。âge は無音のhなので、<code class="bg-neutral-100 px-1 rounded">les ans</code> のように滑らかにリエゾンします。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-indigo-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：フランス文化におけるプライバシーと年齢</h4>
              <p class="text-neutral-600">
                フランスでは、初対面やビジネスの場で年齢や収入、プライベートな家庭環境をしつこく尋ねるのはマナー違反（野暮なこと）とされる傾向があります。年齢よりも「どんな本を読むか」「政治や芸術についてどう思うか」という知的な意見交換が重んじられます。
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
            
            <div onclick="speak('Quel âge avez-vous?')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Quel âge avez-vous?</span>
                <p class="text-xs text-neutral-500 mt-1">おいくつですか？（丁寧な表現：avez-vous）</p>
              </div>
            </div>

            <div onclick="speak('J ai trente ans. Et vous?')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">J'ai trente ans. Et vous?</span>
                <p class="text-xs text-neutral-500 mt-1">私は30歳です。あなたは？（trente = 30）</p>
              </div>
            </div>

            <div onclick="speak('Un, deux, trois, quatre, cinq.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Un, deux, trois, quatre, cinq.</span>
                <p class="text-xs text-neutral-500 mt-1">1, 2, 3, 4, 5</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 02 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：数字の「3」</span>
            <p class="font-medium text-neutral-900">フランス語で「3」を表す単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, 'C’est exact! trois が3です。', '不正解！ deux は2です。', 'trois')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. trois</button>
              <button onclick="checkQuiz(1, 1, 0, 'C’est exact! trois が3です。', '不正解！ deux は2です。', 'trois')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. deux</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：年齢の表現</span>
            <p class="font-medium text-neutral-900">「私は20歳です（J'[ ] vingt ans）」の空欄に入る avoir 動詞の1人称形は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>J'</span>
              <span onclick="revealAnswer(2, 'ai (ai)', 'ai')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
              <span>vingt ans.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：おいくつですか？</span>
            <p class="font-medium text-neutral-900">「おいくつですか？（Quel âge avez-vous ※アクント省略可）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 w-64 bg-white">
              <button onclick="checkInput(3, ['Quel âge avez-vous?', 'quel age avez-vous', 'Quel age avez-vous'], 'Quel âge avez-vous?')" class="bg-neutral-900 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 数字の「5」</span>
            <p class="font-medium text-neutral-900">フランス語で「5」を表す単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, 'C’est exact! cinq です。', '不正解！ quatre は4です。', 'cinq')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. cinq</button>
              <button onclick="checkQuiz(4, 1, 0, 'C’est exact! cinq です。', '不正解！ quatre は4です。', 'cinq')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. quatre</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「私は30歳です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'J\'ai trente ans. (J\'ai trente ans.)', 'J\'ai trente ans.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Chanson Special ＆ 歌で学ぶフランス語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 2 Special • Chanson & Numbers
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 名曲『Les Champs-Élysées』で覚える数詞と街のリズム
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              日本でもおなじみの名曲『オー・シャンゼリゼ』から、フランス語の軽やかなリズムと数字の使われ方を学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Les Champs-Élysées (Joe Dassin)</h4>
                <p class="text-xs text-neutral-500">French Pop Classic</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              パリの美しい大通りシャンゼリゼを歩く高揚感を歌った国民的ヒット曲。歌詞にはパリの街の情景や軽快なフレーズが詰まっており、フランス語の音楽的な響きを楽しく体感できます。
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
                  <span class="font-bold text-lg text-indigo-950">Au soleil, sous la pluie, à midi ou à minuit</span>
                  <button onclick="speak('Au soleil, sous la pluie, à midi ou à minuit')" class="text-indigo-600 hover:text-indigo-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">太陽の下でも、雨の中でも、昼の12時でも真夜中でも</p>
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
                  <span class="font-bold text-neutral-900">前置詞 à による時間の表現（à midi / à minuit）</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  時刻や特定のポイントを表すときは前置詞 <code class="bg-neutral-200 px-1 rounded">à</code> を使います（例：<code class="bg-neutral-200 px-1 rounded">midi</code> ＝ 昼の12時、<code class="bg-neutral-200 px-1 rounded">minuit</code> ＝ 真夜中）。フランス語の時間の言い回しもこれでバッチリです。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
