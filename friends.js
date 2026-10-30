const friends = {
    // 預設的 Demo 版面 (測試用)
    demo: {
        name: "Demo",
        theme: { primary: "#8CB8C9" },
        personalNote: "123",
        chapters: [
            {
                number: "01",
                title: "Departure",
                location: "Taiwan → New York",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
                caption: "The beginning",
                text: "1"
            },
            {
                number: "02",
                title: "A New City",
                location: "New York City",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
                caption: "Yellow cabs everywhere",
                text: "1"
            },
            {
                number: "03",
                title: "The Lab",
                location: "Staten Island",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
                caption: "Experiment No. 001",
                text: "。"
            },
            {
                number: "04",
                title: "My New York",
                location: "Brooklyn",
                image: "https://images.unsplash.com/photo-1522083165195-3444eb81149f?auto=format&fit=crop&w=600&q=80",
                caption: "Lost in the streets",
                text: "1"
            },
            {
                number: "05",
                title: "Until Next Time",
                location: "Manhattan",
                image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=600&q=80",
                caption: "Sunset memory",
                text: "1"
            }
        ],
        endingMessage: "1",
        signature: "Jason",
        stats: [
            "✈️ 1 overseas journey",
            "🧪 1 laboratory",
            "🏙️ 5 weeks",
            "🚇 Countless subway rides",
            "📸 Too many photos",
            "❤️ unforgettable summer"
        ],
        easterEgg: "123"
    },

    // Sophia 的資料
    Sophia: {
        name: "Sophia",
        theme: { primary: "#D37B75" },
        personalNote: "吳悅彣！我們的緣分其實從去紐約前就開始了，飛機坐在我的正後方、過海關在我後面過，根本是跟屁蟲🐛，這是一封專屬於我和你的紐約回憶錄，希望你會把它看完！",
        chapters: [
             {
                number: "20260803",
                title: "Host family",
                location: "Taiwan → New York → CSI",
                image: "images/Sofia-01.jpg", 
                caption: "第一張家庭照🥰",
                text: "我一開始完全沒有想到會兩個女生一起生活在同一個屋簷下，希望相處起來我沒有讓妳覺得我很怪哈哈哈哈<br>但回過頭來看，能和你和Zoey能在同一個轟家也是一場奇妙的緣分，而且如果不是住在一起，我應該不會跟你說到這麼多話吧！<br>雖說有很多變熟的契機但好像還是有人快結束還覺得跟我很尷尬ㄛ👀"
            },
            {
                number: "202060811",
                title: "Broadway Shows!",
                location: "The Gershwin Theatre",
                image: "images/Sofia-02.jpg",
                caption: "Wicked真的超級好看！",
                text: "我來紐約的時候其實沒有特別研究要去哪裡（只有想到要吃龍蝦)很謝謝你總是有這麼多的點子，把每天的行程排好排滿，如果沒有你揪，我也不會特別去看百老匯！<br>（然後你還把別劇的演員認成是女主角😮)"
            },
            {
                number: "20260816",
                title: "Everyday Manhattan",
                location: "Central Park",
                image: "images/Sofia-03.JPG",
                caption: "Taiwanese Waves!<br>(結果根本沒有落日飛車)",
                text: "這趟旅程真的累積了好多好多回憶，在中央公園野餐、吃沒吃過的東西(金果龍果、南瓜派、黃色櫛瓜...還有一堆有的沒的)，去到了我心心念念的Dumbo、看了人生第一場棒球賽、一起在曼哈頓街頭亂晃，每天都有新的事情可以體驗、有趣的故事可以講。"
            },
            {
                number: "20260815",
                title: "Homestay in NYC",
                location: "37 Dorothy St, Staten Island",
                image: "images/Sofia-04.jpg",
                caption: "把陳柔伊變成壞女孩",
                text: "對我來說最難忘的時光還是一起在家的日子<br>每天都超級累的幾個人回家不睡覺還在染頭髮、玩UNO、撲克牌、疊疊樂、還有真心話大走心、甚至直到最後幾天還在做白日夢，真的是很奢侈的回憶呢!<br>(所以到底為什麼要偷用我的沐浴乳洗衣服🤷‍♀️)"
            },
            {
                number: "20260906",
                title: "抓不住的夏天尾巴",
                location: "JFK → TPE",
                image: "images/Sofia-05.JPG",
                caption: "大家為了坐一起放棄可以獨佔一整排的機會🥹",
                text: "旅程總有結束的一天，真正留下來的回憶，往往不是一定要打卡的景點，而是某個下午一起吃的冰淇淋。在紐約每天都過的特別特別充實，有一堆爛瓜可以吃(還有自己的瓜)<br>希望這張遲來的明信片能留住一小段夏天的尾巴(畢竟你知道我記憶力不是很好)<br>很高興這趟旅程裡有你，期待下一次見面能夠變的更不尷尬ㄛ!"
            }
        ],
        endingMessage: "想吃沒吃到的貝果和沒有去到的景點，到時候再和大家一起去吧！",
        signature: "Jason Yang",
        stats: [
            "✈️ 手寫明信片等我下次出國再寄給你，也期待你去法國的明信片哦!",
            "🤳 要記得把動漫看完，不要再只看一點點就棄坑了",
            "🥯 在台灣看到想去的地方可以揪大家一起去！",
            "🇯🇵 妳的伴手禮我收到拉，希望下次就是妳自己拿給我了哦!",
            "❤️ 我很期待吃屋馬哦！ 請好好加油 不然我跟品媗真的要請客了",
            "💣 有好看的動漫請推薦給我! (還在等妳買給我蕾潔衣",
            "6️⃣7️⃣",
        ],
        easterEgg: "恭喜妳發現了這個小小的角落！這裡有一些想對妳說的真真真心話。吳ㄚ彣妳笑點真的超低，每次都可以跟657在那邊一直笑不停，害我心情都會跟著很開心，你真的是這趟紐約行的開心果兼八卦起源者。但不用去擔心自己會不會被別人討厭啦！我絕對不會偷生妳的氣的🙂‍↕️希望妳可以再多照顧自己一點，不用為了讓每個人都喜歡妳而勉強自己，妳本來的樣子就很好了！"
    },
// Ruby 的資料
    Ruby: {
        name: "Ruby",
        theme: { primary: "#91989F" },
        personalNote: "品媗！！！你心心念念的明信片我終於寫完啦!，雖然妳是我在我們這群中認識最晚的人，但剛好因為我們都是北部人，回來台灣之後反而有更多的時間能夠一起出門探險吃吃吃!這是專們記錄這三個月來我們的點點滴滴的走心之作，希望你看完也會小走心一下!",
        chapters: [
            {
                number: "20260808",
                title: "First Hangout!",
                location: "MUJI at NYC",
                image: "images/Ruby-01.jpg", 
                caption: "還沒看到品媗背過紐約限定刺繡袋👀，期待哪天能看到!",
                text: "第一次出去玩是去無印找你要的紐約限定！(不要聽吳悅彣在那邊造謠，我才沒有說無印怎樣😑)，在這之前我們都還沒有說過話，對妳的第一印象的是個話不多酷酷的人，感覺不太好開口跟你聊天。但那次發現妳也會關注這種可愛小物，就覺得妳應該是很好相處的人，之後也知道很多瓜其實都是妳傳來的(果然不說話的人最深藏不漏了)。不過前幾次行動妳都很少講話，感覺得出來跟是個慢熟的人，我也開始想辦法讓你跟大家都熟一點，也開始會主動cue妳一下(雖然不知道有沒有用啦，但是是我問他們怎麼不加品媗進群組的，吳悅彣不知道在幹嘛🫥)，之後妳也就變成NYC Dump的一員拉!!真是可喜可賀呢🐎"
            },
            {
                number: "20260816-17",
                title: "Stick together",
                location: "Manhattan",
                image: "images/Ruby-02.jpg", 
                caption: "從曼哈頓回來的路上第一次跟妳聊了很久的天(本來以為當時聊天是很開心的，結果妳反而覺得我很兇嗎🫨)",
                text: "這周末幾乎都是一起行動！我們一起跑去看怪怪的影展還不知道要不要付錢，到中國城結果跑去看不知道是哪位的祭典，還拿了別人的小卡、去中央公園野餐聽台灣日結果放包包的地方變成垃圾集中場。但也因此留下了許多珍貴的回憶!而且在vessel時妳居然主動說要我幫你拍照!(其實我本來也想問妳要不要拍，但不好意思開口><)有了這次經驗之後我就會問妳要不要當model了！(這裡也讓妳小走心一下好了，那時候我一直覺得品媗是不是有潔癖(應該不是只有我這樣想?)，像是我們買冰的時候就都說不吃，或是能一起吃或喝的東西都說不用，而且還隨身準備抗菌濕巾😶)"
            },
            {
                number: "20260819",
                title: "Best Taco in NYC",
                location: "Los tacos no.1",
                image: "images/Ruby-03.jpg", 
                caption: "第一次兩個人離開大部隊，跑去吃了NYC最好吃的Taco!",
                text: "其實在紐約我很少單獨兩個人一起行動，但兩次跟你單獨相處起來不會尷尬(雖然不知道妳是怎麼想的哈哈哈)，也是因為有這樣的機會讓我能跑去吃自己想吃的東西，而且我們都是搶先吳悅彣他們一步吃到！想到都覺得很好笑，之後也要跟我一起去吃吃吃哦!妳已經是我的吃貨小夥伴了😎"
            },
            {
                number: "20260822",
                title: "NYC Dump真的是要Dump掉...",
                location: "AutoPhoto",
                image: "images/Ruby-04.jpg",
                caption: "這張照片裡只有品媗是正常的哈哈哈 這張就屬於妳拉",
                text: "這一天也是很好笑，除了五個人擠拍貼機以外在那之前還經歷了義式料理事件，整個氣氛非常尷尬，那時候剛好你跟我聊到你昨天吃的餐廳有提拉米蘇，那時候服務員送上來我還以為那整份都是我們的，結果只有一個小杯子🫥，。"
            },
            {
                number: "20260826",
                title: "let's Go Yankees!!",
                location: "Yankees stadium",
                image: "images/Ruby-05.jpg",
                caption: "第一次看棒球比賽居然就是大聯盟!",
                text: "其實一開始我們對看球這件事都還好，覺得洋基球場太遠了。但之後妳揪我們就覺得一定要去！那時候吳悅彣一直說品媗會看棒球而且還會跳應援舞，當時的我真的超級難想像平常看起來超級安靜內向的妳居然有這種愛好(沒想到你是這種人🫨)。那天真的很好玩又好笑、解鎖了沈博的豪車、幫球員亂取名子、看吳悅彣犯花癡、也拍到了洋基球場的照片！。現在回頭看才發現，紐約的好多事都是因為有你的發起才有了後來的故事。無論是清晨一起走布魯克林大橋、在 DUMBO 野餐，還是到品媗家一起吃晚餐看尼古貓貓（還在公車上被搶走一顆蛋），都是這趟紐約行中珍貴的回憶。"
            },
            {
                number: "20260916",
                title: "回臺第一約獻給品媗",
                location: "Taipei Fine Arts Museum",
                image: "images/Ruby-06.jpg",
                caption: "未完成的藝術品，有妳才完整。",
                text: "這天真的是非常非常充實的一天，一早逛完北美之後到中山買心心念念的彎刀褲、吃麻糬和免費的好吃餅乾，雖然沒有吃到冰但也意外解鎖到要絕版的中藥可樂！去拍貼還意外的拍到紐約地鐵照，傍晚去看了A-We展、坐在戶外的躺椅上聊天真的很舒服!(晚餐還有台北人本來要帶我吃飯還不熟路)，對於隔天就要開始工作的我真的有放鬆到！"
            },
            {
                number: "20260927",
                title: "一日爪迷終生爪迷？",
                location: "新莊棒球場",
                image: "images/Ruby-07.jpg",
                caption: "終於看到品媗跳應援了",
                text: "很榮幸能以姿均的名義和妳一起去看球賽，那天人超級多而且還滿場！光是排隊就排了有半小時吧，結果我還以為進場時間就是要準備開球，不過還好有很多活動可以玩!相比MLB我更喜歡中職的棒球氣氛，外野爪迷的應援真的很熱血(雖然有人到一半還在跳別人的應援曲)，雖然當初那場兄弟沒有贏下來，但也不知不覺的開始follow兄弟的季後賽，一路走來也成功打到決賽了！我可以算是爪迷了吧！"
            }
        ],
        endingMessage: "品媗請好好讀書考上藥師賺大錢，我會一直監督妳的哦!",
        signature: "Jason",
        stats: [
            "🧺 什麼時後要去品媗家的公園野餐?",
            "⚾ 以後一定要進大巨蛋看台灣大賽、拋黃彩帶！",
            "🏕️ 找時間大家一起去外縣市露營/民宿玩！"
            "🏎️ 等我考到駕照要再跟品媗PK一次賽車"
            "🩶 是時候要把品媗風變成Jason風格的穿搭了",
        ],
        easterEgg: "恭喜你發現了吳恱彣一定沒有點進來看的走心區，"
    },

    // Zoey 的資料
    Zoey: {
        name: "Zoey",
        theme: { primary: "#78C2C4" },
        personalNote: "",
        chapters: [
            {
                number: "01",
                title: "Homestay",
                location: "Taiwan → New York → CSI",
                image: "images/Sofia-01.jpg", 
                caption: "第一張家庭照🥰<br>那時候完全沒有想到是跟兩個女生住一起???<br>而且後來才發現你們早就認識，我居然是第三者😮",
                text: "現在回想起來，能和你和Zoey能在同一個轟家也是一場奇妙的緣分，而且如果不是住在一起，我應該不會跟你說到這麼多話吧！"
            },
            {
                number: "02",
                title: "Broadway Shows!",
                location: "Wicked",
                image: "images/amy-02.jpg",
                caption: "人真的超多",
                text: "紐約的第一個印象，大概就是——每個人走路都比我快..."
            },
            {
                number: "03",
                title: "The Lab",
                location: "Staten Island",
                image: "images/amy-03.jpg",
                caption: "TLC plate 日常",
                text: "從熟悉的生物實驗，到第一次真正接觸有機合成..."
            },
            {
                number: "04",
                title: "My New York",
                location: "Brooklyn",
                image: "images/amy-04.jpg",
                caption: "這裡風景很好",
                text: "剛開始，我一直在找『紐約最值得看的地方』..."
            },
            {
                number: "05",
                title: "Until Next Time",
                location: "Manhattan",
                image: "images/amy-05.jpg",
                caption: "捨不得",
                text: "所以這次，我想把紐約的一小部分寄回來給妳。"
            }
        ],
        endingMessage: "你想吃沒吃到的貝果和沒有去到的景點，到時候再和大家一起去吧！",
        signature: "Jason Yang",
        stats: [
            "✈️ 手寫明信片等我下次出國再寄給你，我也期待法國的明信片哦!",
            "🧼 還欠我一罐All in One",
            "🥯 你有想去的地方或想吃的店，回台灣也可以揪大家一起去！",
            "❤️ 我很期待吃屋馬哦！ 請加油"
        ],
        easterEgg: "你想要的手寫明信片等我下一次出國再寄給你，我也期待法國的明信哦!"
    }
};
