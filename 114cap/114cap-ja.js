const express = require('express');
const app = express();

app.use(express.json());

const accounts = {
    admins01: { name: '莊雋逸', role: '監試委員', redirect: 'https://drive.google.com/drive/folders/1W7cMivvSz6UQwBa_OqDcGznD0sApFWul?usp=drive_link' },
    admins02: { name: 'Irene Chen', role: '監試委員', redirect: 'https://drive.google.com/drive/folders/1W7cMivvSz6UQwBa_OqDcGznD0sApFWul?usp=drive_link' },
    admins03: { name: '張竣淵', role: '監試委員', redirect: 'https://drive.google.com/drive/folders/1W7cMivvSz6UQwBa_OqDcGznD0sApFWul?usp=drive_link' },
    adminc01: { name: '莊雋逸', role: '批閱人員', redirect: 'https://drive.google.com/drive/folders/1D-dQr4Xev-73xjdk9_Cnlna478fkspOK?usp=drive_link' },
    adminc02: { name: '王紀凱', role: '批閱人員', redirect: 'https://drive.google.com/drive/folders/1yYxu5JmZYzMnpoaXheboL71Z869mfMjk?usp=sharing' },
    adminc03: { name: '林秀玲', role: '批閱人員', redirect: 'https://drive.google.com/drive/folders/1wXIqo39geICuwgrQwzmr9SlGJtoQfaCt?usp=sharing' }
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
