# [JS Playground for CodeGolf](https://michiharu.github.io/js-playground-for-codegolf/)

[JS Playground for CodeGolf](https://michiharu.github.io/js-playground-for-codegolf/)はJavaScriptでコードゴルフが出来るプレイグラウンドです。
無限ループによるフリーズ防止機能を持っていることが特徴です。(今のところベースックなfor文のみ対応)

## 開発経緯
現場のチームにコードゴルフを知ってもらうために作りました。

チームとしての活動に「切磋琢磨するためにメンバー同士で課題を出し合う」というものがあり、
私は[プログラマのためのコードパズル ~JavaScriptで挑むコードゴルフとアルゴリズム](https://amzn.to/3uhyfqC)という本で知っていたコードゴルフを知ってもらいたいと考えました。

最初の円の問題についてはチームメンバー全員に考えてもらう機会を作ることが出来ました。

## フリーズ防止機能とは？

コードはFunction関数に渡されてリアルタイムで評価されます。

コードを編集していて意図せず無限ループになってしまうケースはよくあると思います。
フリーズ防止機能は指定されたミリ秒を経過しても計算が終わらない場合にはエラーとして処理を中断してくれます。

仕組みとしてはAST（抽象構文木）を扱うための各種ライブラリーを利用して、for文に経過時間をチェックさせる処理を挿入します。

ASTを初めて扱ったのでライブラリーの使い方を学ぶのは楽しかったです。

## 今後
ログイン機能を持たせて問題文や初期コードを入力できるようにすれば、コードゴルフのためのプラットフォームになります。
しかし人が集まるイメージが持てないので、何かアイディアの掛け合わせが必要だろうと思います。

フリーズ防止機能を持っているプレイグラウンドは、調べていませんが私は出会ったことがないのでコードゴルフに限定しないほうが需要があるかもしれませんね。
