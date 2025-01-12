const express = require('express');
const app = express();

app.use(express.json());

const accounts = {
    admins01: { name: '莊雋逸', role: '監試委員', redirect: 'https://example.com/1' },
    admins02: { name: 'Irene Chen', role: '監試委員', redirect: 'https://example.com/2' },
    admins03: { name: '張竣淵', role: '監試委員', redirect: 'https://example.com/3' },
    adminc01: { name: '莊雋逸', role: '批閱人員', redirect: 'https://example.com/4' },
    adminc02: { name: '王紀凱', role: '批閱人員', redirect: 'https://example.com/5' },
    adminc03: { name: '林秀玲', role: '批閱人員', redirect: 'https://example.com/6' }
};

app.post('/api/login', (req, res) => {
    const { schoolCode, username, password } = req.body;

    if (schoolCode === '56401029' && password === '56401029') {
        const account = accounts[username];
        if (account) {
            return res.json({
                success: true,
                message: `新竹市立培英國民中學 ${account.name} ${account.role} 您好`,
                redirect: account.redirect
            });
        }
    }
    res.json({ success: false, error: '帳號或密碼錯誤' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
