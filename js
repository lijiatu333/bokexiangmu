<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人博客</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
        }
        header, footer {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 10px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        main {
            padding: 20px;
        }
        article {
            background: #fff;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        h1, h2 {
            color: #333;
        }
    </style>
</head>
<body>
    <header>
        <h1>我的博客</h1>
        <nav>
            <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#about">关于我</a></li>
                <li><a href="#contact">联系我</a></li>
            </ul>
        </nav>
    </header>
    <main id="home">
        <article>
            <h2>欢迎来到我的博客</h2>
            <p>这里是我分享技术见解和生活点滴的地方。</p>
        </article>
    </main>
    <main id="about" style="display:none;">
        <article>
            <h2>关于我</h2>
            <p>我是一名前端开发者，热爱编程和设计。</p>
        </article>
    </main>
    <main id="contact" style="display:none;">
        <article>
            <h2>联系方式</h2>
            <p>邮箱: example@example.com</p>
        </article>
    </main>
    <footer>
        <p>版权所有 &copy; 2024</p>
    </footer>
    <script>
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                document.querySelectorAll('main').forEach(section => {
                    section.style.display = 'none';
                });
                document.getElementById(targetId).style.display = 'block';
            });
        });
    </script>
</body>
</html>
