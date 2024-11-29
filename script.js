// 简单的交互效果，鼠标悬停在技能条上时增加动画效果
document.querySelectorAll('.skill-bar').forEach(function(skill) {
    skill.addEventListener('mouseover', function() {
        skill.style.transition = "width 0.5s ease-in-out";
        skill.style.width = "100%";
    });

    skill.addEventListener('mouseout', function() {
        // 当鼠标移出时，恢复原始宽度
        skill.style.transition = "width 0.5s ease-in-out";
        if (skill.classList.contains('html')) {
            skill.style.width = "90%";
        } else if (skill.classList.contains('css')) {
            skill.style.width = "80%";
        } else if (skill.classList.contains('javascript')) {
            skill.style.width = "85%";
        } else if (skill.classList.contains('react')) {
            skill.style.width = "70%";
        }
    });
});
