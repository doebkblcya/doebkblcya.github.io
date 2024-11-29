// 简单的动画效果：当页面加载时，逐步显示内容
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.5}s`;
    });
});
