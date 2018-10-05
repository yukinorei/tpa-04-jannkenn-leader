# ジャンケンリーダー

To start:

```
npm i
npm start
# Then visit http://localhost:3000
```

[ゲームの遊び方動画](https://www.youtube.com/watch?v=Q3olAdqEuM0&feature=youtu.be)

クライアントはいじらなくていいので、`public/` フォルダーの中ではなく`server/setup.js` をみてみよう。

## 本日のキーワード：

* [HTTP](http://www.atmarkit.co.jp/ait/articles/1703/29/news045.html)
* [Request / Response](https://itsakura.com/network-http-get-post)
* [GET / POST Request](https://wa3.i-3-i.info/word11405.html)
* [ES6 Classes](http://www.yunabe.jp/docs/javascript_class_es6.html) / [ES6 Classes (MDN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)

## タスク：leaderboard を表示するためのサーバサイドAPIを完成しよう

![Leaderboard](https://i.imgur.com/82U4UkC.png)

初めにサーバー側のファイルを全て見てどう動いているかをある程度理解してから進むのがおすすめ。

### APIを完成するためにはこちらのTODOがあります:

- [ ] まずはざっとサーバー側のファイルをみて、どうデータが動くかを想像するのが大事。

- [ ] クライアントが `/api/play` を叩いたら、サーバー側のリーダー配列を更新しよう。

  - `server/model/Leaderboard.js` の `updateLeaderBoard` 関数を完成する。
  - `server/model/Player.js` もしっかり見ておこう。役に立つはず。
  - **注意**：サーバー側の配列を更新する時に勝率を使って配列の並び替えを行うように！

- [ ] クライアントが `/api/leaders` を叩いたら、下記のドキュメントに従ったリーダー配列を返すようにAPIを実装しよう。

```
Example Request:
================
method:   GET
endpoint: /api/leaders

Example Response Body:
======================
[{
  "name":"kan",
  "wins":1,
  "losses":1,
  "ties":2,
  "winPercentage":"0.2500"
}, {
  "name":"tim",
  "wins":1,
  "losses":1,
  "ties":2,
  "winPercentage":"0.2500"
}]
```

役に立つリンク：

- [Express res.json](http://expressjs.com/en/api.html#res.json)
- [Express GET handler](http://expressjs.com/en/api.html#app.get.method)
- [Array.prototype.sort](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## BONUS タスク：leaderboardの各playerにwinStreak(連勝数)を追加しよう

