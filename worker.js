export default {
  async fetch(request, env) {
    const targetUrl = "https://onlysoul.ai/create";
    const userAgent = request.headers.get("User-Agent") || "";
    
    // 识别常见的爬虫和机器人
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|twitterbot/i.test(userAgent);
    
    // 如果是机器人，显示伪装页面（这里可以是一个合规的静态 HTML）
    if (isBot) {
      return new Response(`
        <html>
          <body>
            <h1>Zoey AI Portfolio</h1>
            <p>Exploring the boundaries of human-AI connection.</p>
          </body>
        </html>
      `, { headers: { "Content-Type": "text/html" } });
    }

    // 如果是人类，直接重定向或展示带有行为监测的 Lure 页面
    // 这里为了最快上线，我们可以选择直接跳转，或者返回我们刚写好的精美 HTML
    return new Response(env.INDEX_HTML, { headers: { "Content-Type": "text/html" } });
  }
}
