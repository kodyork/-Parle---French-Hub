const day07Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-900/50">
            <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
            <span>Day 7 Masterclass: Semaine 1 Review</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 07: 第1週 総復習 ＆ フランス語コア動詞のマトリックス
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-indigo-300 font-semibold">Semaine 1 Complete Integration:</strong>
              <span class="ml-1 text-neutral-300">
                1週間の重要フレーズと、être / avoir / il y a / vouloir / aimer の動詞の使い分けを完全に整理し、マスターします。
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

        <!-- Section 1: Detailed Explanations & Verb Matrix -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-indigo-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：Semaine 1 核心動詞のマトリックス比較</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <p class="text-neutral-700">
              第1週で学んだ最も重要で、フランス語の骨組みとなる5大動詞の役割をすっきり整理しましょう！
            </p>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-neutral-200 text-xs sm:text-sm">
                <thead>
                  <tr class="bg-neutral-900 text-indigo-400">
                    <th class="p-3 border border-neutral-700">動詞</th>
                    <th class="p-3 border border-neutral-700">コア概念</th>
                    <th class="p-3 border border-neutral-700">代表的な用例</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200">
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">être</td>
                    <td class="p-3 border border-neutral-200">本質・属性・アイデンティティ・所在地</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Je suis japonais. / L'hôtel est ici.</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">avoir</td>
                    <td class="p-3 border border-neutral-200">所有・年齢表現</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">J'ai 25 ans. / J'ai un frère.</code></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">il y a</td>
                    <td class="p-3 border border-neutral-200">不特定物の存在（〜がある・いる）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Il y a un café près d'ici.</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">vouloir (voudrais)</td>
                    <td class="p-3 border border-neutral-200">欲求・丁寧な依頼（条件法）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Je voudrais un café.</code></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">aimer</td>
                    <td class="p-3 border border-neutral-200">好み・愛好</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">J'aime Paris.</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="space-y-2 border-l-2 border-indigo-600 pl-4 mt-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 Semaine 1 達成のポイント</h4>
              <p class="text-neutral-600">
                この5つの動詞の使い分けと、リエゾンや名詞の性数一致の基本感覚が身につけば、フランス語での自己紹介や簡単な街歩きは完全にクリアです！
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Comprehensive Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-indigo-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践統合会話（1週間の学びを凝縮）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('Bonjour! Je m appelle Taro, je suis japonais et j ai 25 ans.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Bonjour! Je m'appelle Taro, je suis japonais et j'ai 25 ans.</span>
                <p class="text-xs text-neutral-500 mt-1">こんにちは！私の名前はタロウです。日本人で25歳です。</p>
              </div>
            </div>

            <div onclick="speak('Voici mon amie Sophie. Elle est française et habite près de la gare.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Voici mon amie Sophie. Elle est française et habite près de la gare.</span>
                <p class="text-xs text-neutral-500 mt-1">こちらは私の女友達のソフィーです。フランス人で、駅の近くに住んでいます。</p>
              </div>
            </div>

            <div onclick="speak('Je voudrais un café au lait, s il vous plaît.')" class="p-5 hover:bg-indigo-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Je voudrais un café au lait, s'il vous plaît.</span>
                <p class="text-xs text-neutral-500 mt-1">カフェオレを1つお願いします。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Semaine 1 総復習クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 年齢の表現</span>
            <p class="font-medium text-neutral-900">「私は30歳です」を表す正しい動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, 'C’est exact! 年齢には avoir (j’ai) を使います。', '不正解！ suis (être) は年齢には使いません。', 'J\'ai trente ans')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. J'ai trente ans</button>
              <button onclick="checkQuiz(1, 1, 0, 'C’est exact! 年齢には avoir (j’ai) を使います。', '不正解！ suis (être) は年齢には使いません。', 'J\'ai trente ans')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Je suis trente ans</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 不特定物の存在</span>
            <p class="font-medium text-neutral-900">「近くにカフェはありますか？（[ ] un café près d'ici?）」に入る存在表現は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'Il y a (Il y a)', 'Il y a')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
              <span>un café près d'ici?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：女性の女友達</span>
            <p class="font-medium text-neutral-900">「私の女友達（mon amie）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 w-64 bg-white">
              <button onclick="checkInput(3, ['mon amie', 'Mon amie'], 'mon amie')" class="bg-neutral-900 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 丁寧な注文表現</span>
            <p class="font-medium text-neutral-900">カフェでより丁寧に「〜をいただきたいのですが」と言うときの動詞の形は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, 'C’est exact! 条件法の Je voudrais... を使います。', '不正解！ Je veux... は直接的すぎます。', 'Je voudrais')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Je voudrais...</button>
              <button onclick="checkQuiz(4, 1, 0, 'C’est exact! 条件法の Je voudrais... を使います。', '不正解！ Je veux... は直接的すぎます。', 'Je voudrais')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Je veux...</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合自己紹介</span>
            <p class="font-medium text-neutral-900">「私の名前はタロウです。日本人で25歳です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Je m\'appelle Taro, je suis japonais et j\'ai 25 ans. (Je m\'appelle Taro, je suis japonais et j\'ai 25 ans.)', 'Je m\'appelle Taro, je suis japonais et j\'ai 25 ans.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-indigo-500 px-3 py-0.5 text-indigo-600 font-bold hover:bg-indigo-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Chanson Special ＆ 歌で学ぶフランス語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 7 Special • Week 1 Grand Finale Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. シャンソンの金字塔で振り返るフランス語の魂
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              エディット・ピアフの名曲を通して、第1週で培った表現力と美しい響きを確認しましょう！
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
              第1週の総仕上げとして、フランス語の否定構文や動詞 être、自己主張のニュアンスがすべて詰まったエディット・ピアフの不朽の名曲。フル歌詞や詳細な楽曲の背景は、検索サイト等でもぜひチェックしてみてください。
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
                <p class="text-neutral-700 font-medium">いいえ、何もかも全然、いいえ、私は何も後悔しない</p>
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
                  <span class="font-bold text-neutral-900">第1週の総括：自分の言葉で生き様を語る</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  挨拶、年齢、家族、職業、カフェ注文、場所の案内。これらすべてが組み合わさることで、フランス語での豊かなコミュニケーションの土台が完成します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
