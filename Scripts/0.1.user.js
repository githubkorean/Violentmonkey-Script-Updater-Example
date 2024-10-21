// ==UserScript==
// @name          업데이트 테스트 0.1
// @namespace     https://github.com/githubkorean/Violentmonkey-Script-Updater-Example
// @supportURL    https://github.com/githubkorean/Violentmonkey-Script-Updater-Example
// @homepageURL   https://github.com/githubkorean/Violentmonkey-Script-Updater-Example
// @match         *://*/*
// @version       0.1
// @description   테스트용 0.1버전 스크립트
// @icon          https://www.google.com/s2/favicons?sz=256&domain_url=github.com
// @author        mickey90427 <mickey90427@naver.com>
// @require       https://github.com/githubkorean/Violentmonkey-Script-Updater-Example/raw/refs/heads/main/Updater.js
// @grant         GM.setValue
// @grant         GM.getValue
// @grant         GM.xmlHttpRequest
// @grant         GM_openInTab
// @license       MIT
// ==/UserScript==

(function() {
    'use strict';
    checkForUpdates('githubkorean/Violentmonkey-Script-Updater-Example', GM_info.script.version);
})();
