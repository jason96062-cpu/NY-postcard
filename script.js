document.addEventListener('DOMContentLoaded', () => {
    // 1. 取得 URL 參數並載入朋友資料
    const urlParams = new URLSearchParams(window.location.search);
    const friendId = urlParams.get('friend') || 'demo';
    
    // 如果找不到朋友資料，就用 demo
    const friendData = friends[friendId] || friends['demo'];

    // 2. 應用朋友的主題色 (Optional)
    if(friendData.theme && friendData.theme.primary) {
        document.documentElement.style.setProperty('--accent-blue', friendData.theme.primary);
    }

    // 3. 填入資料：首頁信封
    document.getElementById('env-friend-name').textContent = friendData.name;
    document.getElementById('final-friend-name').textContent = friendData.name;

    // 4. 填入資料：專屬留言
    const noteSection = document.getElementById('personal-note-section');
    if (friendData.personalNote) {
        document.getElementById('personal-note-text').textContent = friendData.personalNote;
        noteSection.classList.remove('hidden');
    } else {
        noteSection.remove(); // 沒有就不顯示
    }

    // 5. 產生 Chapters
    const chaptersContainer = document.getElementById('chapters-container');
    friendData.chapters.forEach((chapter, index) => {
        
        // 圖片如果是真的本地照片，萬一沒放會破圖，這裡我們做個簡單容錯
        // (在 demo 模式下它會載入 unsplash 網址)
        let imgSrc = chapter.image;
        if(imgSrc.includes('images/') && friendId !== 'demo') {
            // 如果朋友真的沒有放圖，就先用 placeholder
            // 實作上使用者會自己放圖到 images/ 資料夾
        }

        const chapterHTML = `
            <div class="section chapter animate-on-scroll">
                <div class="polaroid">
                    <img src="${imgSrc}" alt="${chapter.title}">
                    <div class="polaroid-caption">${chapter.caption || ''}</div>
                    <div class="tape tape-top-center"></div>
                </div>
                <div class="chapter-content">
                    <div class="chapter-header">
                        <span class="chapter-number">${chapter.number}</span>
                        <h2 class="chapter-title handwriting">${chapter.title}</h2>
                        <div class="chapter-location">${chapter.location}</div>
                    </div>
                    <p class="chapter-text">${chapter.text}</p>
                </div>
            </div>
        `;
        chaptersContainer.innerHTML += chapterHTML;
    });

    // 6. 填入資料：最終明信片
    document.getElementById('ending-message').textContent = friendData.endingMessage;
    document.getElementById('signature-text').textContent = friendData.signature;

    // 7. 填入資料：旅行統計
    const statsSection = document.getElementById('stats-section');
    if (friendData.stats && friendData.stats.length > 0) {
        const statsList = document.getElementById('stats-list');
        friendData.stats.forEach(stat => {
            const li = document.createElement('li');
            li.textContent = stat;
            statsList.appendChild(li);
        });
    } else {
        statsSection.remove();
    }

    // 8. 彩蛋
    const easterEggBtn = document.getElementById('easter-egg');
    const easterEggModal = document.getElementById('easter-egg-modal');
    if (friendData.easterEgg) {
        easterEggBtn.classList.remove('hidden');
        document.getElementById('easter-egg-text').textContent = friendData.easterEgg;
        
        easterEggBtn.addEventListener('click', () => {
            easterEggModal.classList.remove('hidden');
        });
        document.getElementById('close-modal').addEventListener('click', () => {
            easterEggModal.classList.add('hidden');
        });
    }

    // 9. 滾動動畫邏輯：首頁信封打開
    const envelopeSection = document.getElementById('envelope-section');
    const mainContent = document.getElementById('main-content');
    
    let hasOpened = false;
    window.addEventListener('scroll', () => {
        if (!hasOpened && window.scrollY > 50) {
            hasOpened = true;
            // 讓信封淡出並往上移
            envelopeSection.style.opacity = '0';
            envelopeSection.style.transform = 'translateY(-50px)';
            
            // 顯示主要內容
            mainContent.classList.remove('hidden');
            
            // 1秒後將信封隱藏(移除DOM佔位)，讓使用者順暢往下滾
            setTimeout(() => {
                envelopeSection.style.display = 'none';
                window.scrollTo({ top: 0, behavior: 'instant' }); 
            }, 800);
        }
    });

    // 10. 滾動動畫邏輯：元素進入視窗時淡入
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
