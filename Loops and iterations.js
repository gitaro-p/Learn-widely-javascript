/*処理を繰り返す
■ループと反復処理

・while構文
while文は条件式がtrueであるならば反復処理を行う。

while (<条件式>)
<条件が満たされている間繰り返される文>

(以下、コンソール上での実行とする)
> count = 2
2
> while (0 < count) {
  console.log(count)
  count--
}
3
2
1

・do-while文
do {
    実行する文;
} while (条件式);

do-while文の実行フロー
1.実行する文を実行
2.条件式の評価結果がtrueなら次へ、falseなら終了
3.1へ戻る

> const x = 1000;
do {
    console.log(x); // => 1000
} while (x < 10);
1000
*/

・for文
for (初期化式; 条件式; 増分式) {
  実行する文;
}

> for(let i = 0; i < 3; i++) console.log(i)
0
1
2

