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

    // Amy 的資料
    amy: {
        name: "Amy",
        theme: { primary: "#D37B75" }, // 淡紅色
        personalNote: "Amy, 走在布魯克林大橋上的時候，我想起我們上次聊到的夢想。這封信是特地寄給妳的！",
        chapters: [
             {
                number: "01",
                title: "Departure",
                location: "Taiwan → New York",
                image: "images/amy-01.jpg", 
                caption: "終於出發了",
                text: "這趟旅程開始之前，我其實不知道自己會遇見什麼... (這是一段專屬 Amy 的文字)"
            },
            {
                number: "02",
                title: "A New City",
                location: "New York City",
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
        endingMessage: "等我回去再跟妳分享更多故事！",
        signature: "Jason",
        stats: [
            "✈️ 1 journey",
            "☕ 30 cups of coffee",
            "❤️ Miss you guys"
        ],
        easterEgg: "Amy 專屬彩蛋：下次來吃紐約披薩吧！"
    }
};
