// 歌曲数据
const songData = [
    { category: "甜蜜爱恋", songs: ["有点甜", "勾指起誓", "小城夏天", "告白气球", "我要你", "致你", "雀跃", "可乐", "遇见", "爱你", "宝贝", "晴天", "花海", "勇气", "相思", "遇到", "小情歌", "喜欢你", "舒伯特玫瑰", "爱的城堡", "恋人", "你是对的人", "爱就一个字", "爱笑的眼睛", "掉进爱情海里", "99 次我爱他", "好想好想", "大手拉小手", "心有独钟", "半情歌", "伯虎说", "不得不爱", "同手同脚", "昨夜风今宵月", "月下舞会", "我们的歌", "QQ 爱"] },
    { category: "伤感抒情", songs: ["体面", "慢冷", "人质", "说散就散", "离岸", "冬眠", "搁浅", "虚拟", "停格", "说谎", "情歌", "背叛", "约定", "眉间雪", "难生恨", "无情画", "天黑黑", "醒着醉", "我怀念的", "最后一页", "如果爱忘了", "十年人间", "会呼吸的痛", "爱不单行", "流着泪说分手", "那就这样吧", "被驯服的象", "一滴泪的时间", "化身孤岛的鲸", "永不失联的爱", "幸福了然后呢", "阿拉斯加海湾", "到此为止", "痴心无名氏", "刚刚好", "其实", "爱久见人心", "听说你", "爱河", "词不达意", "可惜不是你", "魔鬼中的天使", "手心的蔷薇", "我们的纪念", "背对背拥抱", "想你时风起", "好久不见", "执迷不悟", "纸短情长", "千千万万", "如果可以", "天外来物", "彩虹天堂", "三拜红尘凉", "姬和不如", "岁月神偷", "下一个天亮", "烟花易冷", "红尘客栈", "路过人间", "一路向北", "忽然之间", "第三人称", "无名的人", "那么骄傲", "忽然之间", "从开始到现在", "有一种悲伤", "七月七日晴", "再见吧喵小姐", "别找我麻烦"] },
    { category: "国风古韵", songs: ["青花瓷", "牵丝戏", "半壶纱", "虞兮叹", "若把你", "广寒宫", "敕勒歌", "孽海记", "盗将行", "千年泪", "人世间", "桃花诺", "扇子舞", "水中花", "女儿情", "踏山河", "声声慢", "九张机", "心之火", "青玉恋", "七月上", "壁上观", "大天蓬", "同花顺", "燕无歇", "王招君", "苏州河", "知否知否", "烟雨行舟", "梦里水乡", "不谓侠", "苏公堤", "昨夜风今宵月", "入画江南", "缘分一道桥", "吹梦到西洲", "空山新雨后"] },
    { category: "治愈暖心", songs: ["世间美好与你环环相扣", "只要平凡", "张三的歌", "我曾遇到一束光", "光", "晚风", "人间", "微微", "安静", "记得", "晚安", "白鸽", "过活", "成全", "舍得", "不枉", "流年", "风景", "等待", "人啊", "温柔", "海底", "我曾", "红豆", "唯一", "问风", "陪伴", "小美满", "致青春", "外婆桥", "霞光", "雨天", "凝眸", "男孩", "他不懂", "爱存在", "追光者", "我很好", "第一天", "会不会", "我想要", "那又如何", "开始懂了", "迷途之中", "我们啊", "飞云之下", "春风十里", "闹哄哄", "天若有情", "在水一方", "需要人陪", "我的美丽", "回到夏天", "有何不可", "夏天的风", "你的微笑", "修炼爱情", "那些花儿", "好久不见", "如果有来生", "一样的月光", "爱要坦荡荡", "山楂树之恋", "你知道我在等你吗", "我不愿让你一个人", "我还年轻我还年轻", "希望你被这个世界爱着", "和宇宙的温柔关联", "这条小鱼在乎", "刻在我心底的名字", "永不失联的爱", "多远都要在一起", "栅栏间隙偷窥你", "推开世界的门"] },
    { category: "英文歌曲", songs: ["Fly me to the moon", "speak softly love", "If", "Love is gone", "New boy", "Kiss me Kiss me"] },
    { category: "小众清新", songs: ["奇妙能力歌", "感官先生", "一程山路", "艾蜜莉", "海盐与鼠尾草", "蘑菇浓汤", "不醉不会", "荒漠上行走", "踮起脚尖爱", "把耳朵叫醒", "会开花的云", "人间梦游", "蘑菇浓汤", "关于你", "天空之外", "春雪", "深蓝", "词不达意", "我在人民广场吃炸鸡", "我在纽约打电话给你", "在加纳共和国离婚", "少女作妖日记", "相爱后动物感伤"] },
    { category: "热血燃情", songs: ["踏山河", "剑魂", "下山", "骑士", "天下", "谪仙", "命运", "无名的人", "野子", "着魔", "达尔文", "天生反骨的鸵鸟"] }
];

// DOM元素
const playlistContainer = document.getElementById('playlistContainer');
const categorySelect = document.getElementById('categorySelect');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const randomSongButton = document.getElementById('randomSongButton');
const copySuccessModal = document.getElementById('copySuccessModal');
const copiedSongName = document.getElementById('copiedSongName');
const closeCopyModal = document.getElementById('closeCopyModal');
const modalOverlay = document.getElementById('modalOverlay');
const randomSongModal = document.getElementById('randomSongModal');
const randomSongName = document.getElementById('randomSongName');
const closeRandomModal = document.getElementById('closeRandomModal');
const randomModalOverlay = document.getElementById('randomModalOverlay');
const backToTopButton = document.getElementById('backToTopButton');
const surpriseSound = document.getElementById('surpriseSound');
const starsContainer = document.getElementById('starsContainer');

// 当前显示的歌曲数据
let currentSongs = [...songData];
let filteredSongs = [];

// 初始化页面
function initPage() {
    renderPlaylist(currentSongs);
    createStars();
    setupEventListeners();
}

// 创建星星背景
function createStars() {
    const starsCount = 100;
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // 随机大小
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // 随机位置
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // 随机动画延迟
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
}

// 渲染歌单
function renderPlaylist(songs) {
    playlistContainer.innerHTML = '';
    
    songs.forEach(category => {
        if (category.songs.length === 0) return;
        
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('glass', 'rounded-xl', 'p-6', 'shadow-lg');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.classList.add('text-2xl', 'font-bold', 'mb-2', 'text-blue-500');
        categoryTitle.textContent = category.category;
        
        const songsGrid = document.createElement('div');
        songsGrid.classList.add('grid', 'grid-cols-2', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-3');
        
        category.songs.forEach(song => {
            const songCard = document.createElement('div');
            songCard.classList.add('song-card', 'glass', 'rounded-lg', 'p-3', 'text-center', 'cursor-pointer', 'transition-all', 'duration-300', 'text-black');
            songCard.textContent = song;
            
            // 添加点击事件复制歌名
            songCard.addEventListener('click', () => copySongName(song));
            
            songsGrid.appendChild(songCard);
        });
        
        categoryElement.appendChild(categoryTitle);
        
        // 添加蓝色分割线
        const divider = document.createElement('div');
        divider.classList.add('w-full', 'h-1', 'bg-blue-500', 'mb-4', 'rounded-full');
        categoryElement.appendChild(divider);
        
        categoryElement.appendChild(songsGrid);
        playlistContainer.appendChild(categoryElement);
    });
    
    // 如果没有歌曲，显示提示信息
    if (playlistContainer.children.length === 0) {
        const noResultsElement = document.createElement('div');
        noResultsElement.classList.add('glass', 'rounded-xl', 'p-8', 'shadow-lg', 'text-center');
        noResultsElement.innerHTML = `
            <div class="text-4xl mb-4"><i class="fa fa-search"></i></div>
            <h3 class="text-xl font-bold mb-2">未找到匹配的歌曲</h3>
            <p>请尝试其他关键词或分类</p>
        `;
        playlistContainer.appendChild(noResultsElement);
    }
}

// 复制歌名
function copySongName(songName) {
    const textToCopy = `点歌 ${songName}`;
    
    // 尝试使用现代API复制
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showCopySuccess(songName);
        }).catch(err => {
            console.error('复制失败:', err);
            fallbackCopyTextToClipboard(textToCopy, songName);
        });
    } else {
        // 降级方案
        fallbackCopyTextToClipboard(textToCopy, songName);
    }
}

// 显示复制成功弹窗
function showCopySuccess(songName) {
    // 显示复制成功弹窗
    copiedSongName.textContent = songName;
    copySuccessModal.classList.remove('hidden');
    
    // 添加动画效果
    const modalContent = copySuccessModal.querySelector('.glass-dark');
    modalContent.style.animation = 'copySuccess 0.3s ease-out forwards';
}

// 降级复制方案
function fallbackCopyTextToClipboard(text, songName) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // 避免滚动到元素
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(songName);
        } else {
            alert('复制失败，请手动复制歌名');
        }
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制歌名');
    }
    
    document.body.removeChild(textArea);
}

// 随机选择歌曲
function selectRandomSong() {
    let songsToChooseFrom = [];
    const selectedCategory = categorySelect.value;
    
    if (selectedCategory === 'all') {
        // 从所有歌曲中随机选择
        songData.forEach(category => {
            category.songs.forEach(song => {
                songsToChooseFrom.push({ name: song, category: category.category });
            });
        });
    } else {
        // 从选定分类中随机选择
        const category = songData.find(cat => cat.category === selectedCategory);
        if (category) {
            category.songs.forEach(song => {
                songsToChooseFrom.push({ name: song, category: category.category });
            });
        }
    }
    
    if (songsToChooseFrom.length > 0) {
        const randomIndex = Math.floor(Math.random() * songsToChooseFrom.length);
        const randomSong = songsToChooseFrom[randomIndex];
        
        // 播放惊喜音效
        surpriseSound.play();
        
        // 显示随机点歌弹窗
        randomSongName.textContent = randomSong.name;
        randomSongModal.classList.remove('hidden');
        
        // 添加动画效果
        const modalContent = randomSongModal.querySelector('.glass-dark');
        modalContent.style.animation = 'surprise 0.6s ease-out forwards';
        
        // 复制歌名
        const textToCopy = `点歌 ${randomSong.name}`;
        navigator.clipboard.writeText(textToCopy).catch(err => {
            console.error('复制失败:', err);
        });
    }
}

// 筛选歌曲
function filterSongs() {
    const selectedCategory = categorySelect.value;
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (selectedCategory === 'all' && searchTerm === '') {
        // 显示所有歌曲
        renderPlaylist(songData);
        return;
    }
    
    let filteredData = [];
    
    if (selectedCategory === 'all') {
        // 仅按搜索词筛选
        filteredData = songData.map(category => {
            const filteredSongs = category.songs.filter(song => 
                song.toLowerCase().includes(searchTerm)
            );
            return {
                category: category.category,
                songs: filteredSongs
            };
        }).filter(category => category.songs.length > 0);
    } else {
        // 按分类和搜索词筛选
        const category = songData.find(cat => cat.category === selectedCategory);
        if (category) {
            const filteredSongs = category.songs.filter(song => 
                song.toLowerCase().includes(searchTerm)
            );
            filteredData.push({
                category: category.category,
                songs: filteredSongs
            });
        }
    }
    
    renderPlaylist(filteredData);
}

// 设置事件监听器
function setupEventListeners() {
    // 分类选择事件
    categorySelect.addEventListener('change', filterSongs);
    
    // 搜索按钮点击事件
    searchButton.addEventListener('click', filterSongs);
    
    // 搜索框回车事件
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterSongs();
        }
    });
    
    // 搜索框实时输入事件
    searchInput.addEventListener('input', () => {
        filterSongs();
    });
    
    // 随机点歌按钮点击事件
    randomSongButton.addEventListener('click', selectRandomSong);
    
    // 关闭复制成功弹窗
    closeCopyModal.addEventListener('click', () => {
        copySuccessModal.classList.add('hidden');
    });
    
    modalOverlay.addEventListener('click', () => {
        copySuccessModal.classList.add('hidden');
    });
    
    // 关闭随机点歌弹窗
    closeRandomModal.addEventListener('click', () => {
        randomSongModal.classList.add('hidden');
        surpriseSound.pause();
        surpriseSound.currentTime = 0;
    });
    
    randomModalOverlay.addEventListener('click', () => {
        randomSongModal.classList.add('hidden');
        surpriseSound.pause();
        surpriseSound.currentTime = 0;
    });
    
    // 返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);