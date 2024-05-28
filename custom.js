window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 2,
    plugins: [
        function(hook, vm) {
            hook.doneEach(function() {
                var lists = document.querySelectorAll('li > ul');

                lists.forEach(function(ul) {
                    ul.style.display = 'none'; // 默认隐藏

                    var parentLi = ul.parentNode;
                    if (parentLi) {
                        var toggle = document.createElement('span');
                        toggle.innerHTML = '▸'; // 初始为向右的箭头
                        toggle.style.cursor = 'pointer';
                        toggle.style.marginRight = '8px'; // 调整箭头和文字间距

                        // 点击切换展开和折叠
                        toggle.onclick = function() {
                            if (ul.style.display === 'none') {
                                ul.style.display = 'block';
                                toggle.innerHTML = '▾'; // 展开时向下箭头
                            } else {
                                ul.style.display = 'none';
                                toggle.innerHTML = '▸';
                            }
                        };

                        parentLi.insertBefore(toggle, parentLi.firstChild);
                    }
                });

                // 展开当前页面所在的菜单
                var active = document.querySelector('li.active');
                if (active) {
                    var current = active;
                    while (current) {
                        if (current.tagName === 'UL') {
                            current.style.display = 'block';
                            if (current.previousSibling) {
                                current.previousSibling.innerHTML = '▾';
                            }
                        }
                        current = current.parentNode;
                    }
                }
            });
        }
    ]
};
