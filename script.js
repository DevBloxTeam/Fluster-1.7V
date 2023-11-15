// server.js
const express = require('express');
const app = express();
const port = 3000;

const latestAppVersion = 'AppUWPV2.592.587';

app.get('/checkUpdate', (req, res) => {
    const currentAppVersion = req.query.currentVersion;

    if (!currentAppVersion) {
        return res.status(400).json({ error: 'Current app version is not provided.' });
    }

    if (currentAppVersion === latestAppVersion) {
        return res.json({ updateAvailable: false, message: 'App is up to date.' });
    } else {
        return res.json({ updateAvailable: true, latestVersion: latestAppVersion, message: 'An update is available.' });
    }
});

app.listen(port, () => {
    console.log(`LocalHost: http://localhost:${port}`);
    console.log('Blacklisted Module: Synapse X - Roblox')
    console.log('Whitelisted Module: ScriptWare')
});