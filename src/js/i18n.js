// 多语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取语言切换按钮
    const langButtons = document.querySelectorAll('.language-switch button');
    
    // 获取所有需要切换语言的内容
    const contents = document.querySelectorAll('[data-i18n]');
    
    // 设置默认语言
    let currentLang = 'zh';
    
    // 语言切换函数
    function switchLanguage(lang) {
        currentLang = lang;
        
        // 更新按钮状态
        langButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // 更新内容显示
        contents.forEach(content => {
            content.dataset.lang = lang;
        });
        
        // 保存语言偏好
        localStorage.setItem('preferred_language', lang);
    }
    
    // 为语言切换按钮添加点击事件
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.dataset.lang);
        });
    });
    
    // 初始化语言
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang) {
        switchLanguage(savedLang);
    }
}); 