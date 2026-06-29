// Pasiya Max AI OS v2.0
let currentPage = 'home';

function navigate(page) {
    currentPage = page;
    const content = document.getElementById('content-area');
    
    if (page === 'home') {
        content.innerHTML = `
            <h1>🏠 සාදරයෙන් පිළිගනිමු!</h1>
            <p>Pasiya Max AI OS v2.0 - ඔබේ සම්පූර්ණ AI Automation Platform</p>
            <div style="margin-top:30px; display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:20px;">
                <div style="background:#1a1a1a; padding:25px; border-radius:12px;">
                    <h3>🤖 AI Assistant</h3>
                    <p>ChatGPT-like සහ ඔබේම AI භාවිතා කරන්න</p>
                </div>
            </div>
        `;
    } else if (page === 'ai') {
        content.innerHTML = `<h1>🤖 AI උපකරණ පුවරුව</h1><p>AI Tools coming soon...</p>`;
    } else if (page === 'blog') {
        content.innerHTML = `<h1>📝 බ්ලොග් කළමනාකරු</h1><p>Blog management interface</p>`;
    } else if (page === 'social') {
        content.innerHTML = `<h1>📱 සමාජ මාධ්‍ය කළමනාකරු</h1><p>Social media tools</p>`;
    } else {
        content.innerHTML = `<h1>${page.toUpperCase()} Page</h1>`;
    }
}

function logout() {
    if (confirm('ඔබට logout වන්න ඕනේද?')) {
        alert('Logged out successfully!');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
});