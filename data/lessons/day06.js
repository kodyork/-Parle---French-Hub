const day06Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 6 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 06: 場所・位置の表現 ＆ 存在を表す il y a の仕組み
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-indigo-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「〜はどこですか？」の尋ね方と、特定物の所在地 (où est) と不特定物の存在 (il y a) を見分けるB2文法をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：場所の尋ね方 ＆ être と il y a の使い分け</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-indigo-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 場所を尋ねる基本フレーズ（A1基礎）</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">Où est les toilettes?</code>（お手洗いはどこですか？）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Il y a une pharmacie près d'ici?</code>（この近くに薬局はありますか？）<br>
                ・位置を表す前置詞：<code class="bg-neutral-100 px-1 rounded">près de</code>（〜の近く）, <code class="bg-neutral-100 px-1 rounded">loin de</code>（〜から遠い）, <code class="bg-neutral-100 px-1 rounded">à côté de</code>（〜の隣）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：決定的な使い分け「où est（位置）」 vs 「il y a（存在）」</h4>
              <p class="text-neutral-600">
                ・<strong>où est / où sont（être動詞）：</strong>「特定されているもの（le, la, mon などが付く）」の所在地を表す。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">L'hôtel est près de la gare.</code>（そのホテルは駅の近くにあります）<br>
                ・<strong>il y a（存在を表す成句）：</strong>「不特定の存在（un, une, des, 数字など）」がそこにある・いることを表す。主語の単数・複数に関わらず常に <code class="bg-neutral-100 px-1 rounded">il y a</code> の形です。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">Il y a beaucoup de cafés ici.</code>（ここにはたくさんのカフェがあります）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-indigo-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：フランスの街並みと「Place（広場）」文化</h4>
              <p class="text-neutral-600">
                フランスの都市設計は、中心にある「Place（広場）」や「Monument（歴史的建造物）」を起点に広がっています。道を尋ねる際も「あの教会の角を曲がって…」というように、街のランドマークを基準に会話が進むのが特徴です。
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
            
            <div onclick="speak('Pardon, où est la station de métro la plus proche?')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Pardon, où est la station de métro la plus proche?</span>
                <p class="text-xs text-neutral-500 mt-1">すみません、一番近い地下鉄の駅はどこですか？</p>
              </div>
            </div>

            <div onclick="speak('Elle est à côté du grand supermarché.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Elle est à côté du grand supermarché.</span>
                <p class="text-xs text-neutral-500 mt-1">大きなスーパーの隣にあります。（à côté de + le = à côté du）</p>
              </div>
            </div>

            <div onclick="speak('Il y a un bon restaurant par ici?')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Il y a un bon restaurant par ici?</span>
                <p class="text-xs text-neutral-500 mt-1">この近くにどこか良いレストランはありますか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 06 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜はどこですか？</span>
            <p class="font-medium text-neutral-900">「〜はどこですか？」と尋ねる正しい疑問詞フレーズは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, 'C’est exact! Où est...? です。', '不正解！ Comment は「どのように」です。', 'Où est')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Où est...?</button>
              <button onclick="checkQuiz(1, 1, 0, 'C’est exact! Où est...? です。', '不正解！ Comment は「どのように」です。', 'Où est')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Comment est...?</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：不特定物の存在</span>
            <p class="font-medium text-neutral-900">「近くに薬局はありますか？（[ ] une pharmacie près d'ici?）」の空欄に入る存在表現は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'Il y a (Il y a)', 'Il y a')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
              <span>une pharmacie près d'ici?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：すみません（呼びかけ）</span>
            <p class="font-medium text-neutral-900">「すみません（Pardon）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 w-64 bg-white">
              <button onclick="checkInput(3, ['Pardon', 'pardon'], 'Pardon')" class="bg-neutral-900 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：where vs there is</span>
            <p class="font-medium text-neutral-900">「私のカバン（特定物）」がどこにあるか言う時に使う動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, 'C’est exact! 特定物の所在地には être (est) を使います。', '不正解！ 不特定物の存在には il y a を使います。', 'est')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. est</button>
              <button onclick="checkQuiz(4, 1, 0, 'C’est exact! 特定物の所在地には être (est) を使います。', '不正解！ 不特定物の存在には il y a を使います。', 'est')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. il y a</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「すみません、一番近い地下鉄の駅はどこですか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Pardon, où est la station de métro la plus proche? (Pardon, où est la station de métro la plus proche?)', 'Pardon, où est la station de métro la plus proche?')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Chanson Special ＆ 歌で学ぶフランス語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 6 Special • City Vibe & Music
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 音楽で描く街の風景と「Il y a」の世界観
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              パリやフランスの街を歌った楽曲から、存在を表す「il y a」や風景の描写を感じ取ろう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Paris, je t'aime d'amour (Maurice Chevalier)</h4>
                <p class="text-xs text-neutral-500">French Classic Anthem</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              パリへのあふれる愛を歌った往年の名曲。街のなかに広がる美しい情景や、人々が集まるスポットへの愛着が詩的に表現されており、フランス語の街歩き表現を学ぶのにぴったりの楽曲です。
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
                  <span class="font-bold text-lg text-indigo-950">Il y a tant de choses à voir dans cette ville</span>
                  <button onclick="speak('Il y a tant de choses à voir dans cette ville')" class="text-indigo-700 hover:text-indigo-800 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">この街には見るべきものがたくさんある（tant de ＝ たくさんの）</p>
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
                  <span class="font-bold text-neutral-900">存在を表す重要成句「il y a (〜がある／いる)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">il y a</code> は英語の "there is / there are" に相当するフランス語の基幹表現。後ろに無冠詞や不定冠詞を伴う名詞を置くことで、街の様子や存在をスムーズに描写できます。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
