# JS Playground for CodeGolf
JavaScriptでコードゴルフが出来るアプリです。

無限ループによるフリーズ防止機能付きのプレイグラウンド


## コミットの設定

git の config には以下を設定します。

```.git/config
[commit]
	template = .gitmessage
```


```.gitmessage



# ==== Emojis ====
# 🐛  :bug: バグ修正
# 👍  :+1: 機能改善
# ✨  :sparkles: 部分的な機能追加
# 🎉  :tada: 盛大に祝うべき大きな機能追加
# 📚  :books: ドキュメント
# ♻️  :recycle: リファクタリング
# 🚿  :shower: 不要な機能・使われなくなった機能の削除
# 💚  :green_heart: テストやCIの修正・改善
# 👕  :shirt: Lintエラーの修正やコードスタイルの修正
# 🚀  :rocket: パフォーマンス改善
# ⚙   :gear: config変更
# 🆙  :up: 依存パッケージなどのアップデート
# 🔒  :lock: 新機能の公開範囲の制限
# 👮  :cop: セキュリティ関連の改善

# ==== Format ====
# :emoji: Subject
#
# Commit body...

# ==== The Seven Rules ====
# 1. Separate subject from body with a blank line
# 2. Limit the subject line to 50 characters
# 3. Capitalize the subject line
# 4. Do not end the subject line with a period
# 5. Use the imperative mood in the subject line
# 6. Wrap the body at 72 characters
# 7. Use the body to explain what and why vs. how
```
