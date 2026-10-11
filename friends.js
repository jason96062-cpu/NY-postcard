const friends = {
    // 預設的 Demo 版面 (測試用)
    demo: {
        name: "Demo Friend",
        theme: { primary: "#8CB8C9" },
        personalNote: "其實看到這個地方的時候，我第一個想到的是你。這是一封特別為你準備的紐約回憶錄。",
        chapters: [
            {
                number: "01",
                title: "Departure",
                location: "Taiwan → New York",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
                caption: "The beginning",
                text: "這趟旅程開始之前，我其實不知道自己會遇見什麼。<br>第一次離開熟悉的生活，來到一個完全不同的城市。<br>現在回頭看，我最珍惜的反而是那些第一次。"
            },
            {
                number: "02",
                title: "A New City",
                location: "New York City",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
                caption: "Yellow cabs everywhere",
                text: "紐約的第一個印象，大概就是——每個人走路都比我快。<br>後來才發現，旅行真正留下來的，往往不是一定要打卡的景點，而是某個下午走錯的路、地鐵裡遇見的人，以及第一次覺得『原來我真的在紐約』的瞬間。"
            },
            {
                number: "03",
                title: "The Lab",
                location: "Staten Island",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
                caption: "Experiment No. 001",
                text: "這趟旅程最特別的地方，是我不只是來看看紐約。<br>我也第一次走進不同的實驗室，接觸以前不熟悉的研究方式。<br>從熟悉的生物實驗，到第一次真正接觸有機合成、TLC、萃取與 column。<br>原來換一個地方，也可以重新認識自己熟悉的事情。"
            },
            {
                number: "04",
                title: "My New York",
                location: "Brooklyn",
                image: "https://images.unsplash.com/photo-1522083165195-3444eb81149f?auto=format&fit=crop&w=600&q=80",
                caption: "Lost in the streets",
                text: "剛開始，我一直在找『紐約最值得看的地方』。<br>後來才發現，比起哪一個景點最值得看，我更喜歡那些沒有特別安排的時刻。<br>走在街上、搭地鐵、坐在公園裡、在陌生的街區迷路。<br>城市不再只是旅遊景點，而慢慢變成一段生活。"
            },
            {
                number: "05",
                title: "Until Next Time",
                location: "Manhattan",
                image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=600&q=80",
                caption: "Sunset memory",
                text: "旅行總有結束的時候。<br>飛機會回到原本的城市，行李會重新放回房間，生活也會慢慢恢復原來的節奏。<br>但有些地方去過一次，就會在記憶裡留下位置。<br>所以這次，我想把紐約的一小部分寄回來給你。"
            }
        ],
        endingMessage: "希望有一天，我們也可以一起去看看這個城市。",
        signature: "Jason",
        stats: [
            "✈️ 1 overseas journey",
            "🧪 1 laboratory",
            "🏙️ 5 weeks",
            "🚇 Countless subway rides",
            "📸 Too many photos",
            "❤️ 1 unforgettable summer"
        ],
        easterEgg: "還記得我們以前說過要一起去哪裡嗎？這張機票先幫你存著！"
    },

    // Sofia 的資料
    Sofia: {
        name: "Sofia",
        theme: { primary: "#D37B75" },
        personalNote: "吳悅彣！我們的緣分其實從去紐約前就開始了，飛機坐在我的正後方、過海關在我後面過，根本是跟屁蟲🐛，這是一封專屬於我和你的紐約回憶錄，希望你會把它看完！",
        chapters: [
             {
                number: "20260803",
                title: "Host family",
                location: "Taiwan → New York → CSI",
                image: "images/Sofia-01.jpg", 
                caption: "第一張家庭照🥰",
                text: "我一開始完全沒有想到會兩個女生一起生活在同一個屋簷下，希望相處起來我沒有讓妳覺得我很怪哈哈哈哈<br>但回過頭來看，能和你和Zoey能在同一個轟家也一場奇妙的緣分，而且如果不是住在一起，我應該不會跟你說到這麼多話吧！<br>雖說有很多變熟的契機但好像還是有人快結束還覺得跟我很尷尬ㄛ👀"
            },
            {
                number: "202060811",
                title: "Broadway Shows!",
                location: "The Gershwin Theatre",
                image: "images/Sofia-02.jpg",
                caption: "Wicked真的超級好看！",
                text: "我來紐約的時候其實沒有研究要去哪裡（只有想到要吃龍蝦)很謝謝你總是有這麼多的點子，把每天的行程排好排滿，如果沒有你揪，我也不會特別去看百老匯！<br>（然後你還把別劇的演員認成是女主角😮)"
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
                text: "旅程總有結束的一天，真正留下來的回憶，往往不是一定要打卡的景點，而是某個下午一起吃的冰淇淋。在紐約每天都過的特別特別充實，還有一堆瓜可以吃<br>希望這張遲來的明信片能留住一小段夏天的尾巴(畢竟你知道我記憶力不是很好)<br>很高興這趟旅程裡有你，期待下一次見面能夠變的更不尷尬ㄛ!"
            }
        ],
        endingMessage: "想吃沒吃到的貝果和沒有去到的景點，到時候再和大家一起去吧！",
        signature: "Jason Yang",
        stats: [
            "✈️ 手寫明信片等我下次出國再寄給你，也期待你去法國的明信片哦!",
            "🤳 要記得把動漫看完，不要再只看一點點就棄坑了",
            "🥯 在台灣看到想去的地方可以揪大家一起去！",
            "🇯🇵 妳的日本伴手禮我收到拉，希望下次就是妳自己拿給我了哦!"
            "❤️ 我很期待吃屋馬哦！ 請好好加油 不然我跟品媗真的要請客了",
            "💣 有好看的動漫請推薦給我! (還在等妳買給我蕾潔衣",
            "6️⃣7️⃣",
        ],
        easterEgg: "恭喜妳發現了這個小的角落！這裡有一些想對妳說的真真真心話。吳ㄚ彣妳笑點真的超低，每次都可以跟657在那邊一直笑不停，害我心情也都會跟著很開心，你真的是這趟紐約行的開心果兼八卦起源者。不用去擔心自己會不會被別人討厭啦！我絕對不會偷生妳的氣的🙂‍↕️希望妳可以再多照顧自己一點，不用為了讓每個人都喜歡妳而勉強自己，妳本來的樣子就很好了！"
    },
// Ruby 的資料
    Ruby: {
        name: "Ruby",
        theme: { primary: "#D37B75" },
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
        endingMessage: "想吃沒吃到的貝果和沒有去到的景點，到時候再和大家一起去吧！",
        signature: "Jason",
        stats: [
            "🧺 什麼時後要去品媗家的公園野餐?",
            "🥯 123",
            "❤️ 123"
        ],
        easterEgg: "你想要的手寫明信片等我下一次出國再寄給你，我也期待法國的明信哦!"
    },

    // Zoey 的資料
    Zoey: {
        name: "Zoey",
        theme: { primary: "#D37B75" },
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
