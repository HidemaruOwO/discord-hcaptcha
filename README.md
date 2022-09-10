# ⚠️ これは正常に動きません。使用しないでください

<div align="center">

![Last commit](https://img.shields.io/github/last-commit/HidemaruOwO/discordjs-hcaptcha?style=flat-square)
![Repository Stars](https://img.shields.io/github/stars/HidemaruOwO/discordjs-hcaptcha?style=flat-square)
![Issues](https://img.shields.io/github/issues/HidemaruOwO/discordjs-hcaptcha?style=flat-square)
![Open Issues](https://img.shields.io/github/issues-raw/HidemaruOwO/discordjs-hcaptcha?style=flat-square)
![Bug Issues](https://img.shields.io/github/issues/HidemaruOwO/discordjs-hcaptcha/bug?style=flat-square)

# discordjs-hcaptcha 🔎

![image](https://user-images.githubusercontent.com/82384920/188517904-a34a0b5d-25d6-43a6-9516-2170303263f3.png)

## なんだこれは

サーバーに参加した新規ユーザーを hCaptcha でテストします

</div>

## 🚀 使い方

### 💨 セットアップ

#### リポジトリのクローン

```bash
git clone https://github.com/HidemaruOwO/discordjs-hcaptcha.git
cd discordjs-hcaptcha
```

#### config に認証情報等の入力

```bash
# config/config.jsonとconfig/token.jsonに認証情報等を入力してください
vim config/
```

#### パッケージなどのインストール

```bash
bash setup.sh
```

#### 💡 実行

##### Screen を使う場合

```bash
screen -S dh-frontend
cd frontend
yarn start
# Ctrl + ad <C-ad>

screen -S dh-backend
cd backend
yarn start
# Ctrl + ad <C-ad>
```

## ⛏️ 開発

このリポジトリの開発ブランチは`develop`ブランチです
PR を送る場合は`develop`ブランチに送っていただくと助かります

```bash
git checkout develop
```

## 📜 ライセンス

MIT

## ✨ スペシャルサンクス

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=expressjs&repo=express)](https://github.com/expressjs/express)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=discordjs&repo=discord.js)](https://github.com/discordjs/discord.js)
