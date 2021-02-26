/*処理を学ぶ
■文と式

(以下、コンソール上での実行とする)
> let pi = 3.14
undefined
> pi = 3.14
3.14

式は値を返すが、文は必ずしも値を返さない。
式は文として使用できるが、文は式として使用できない。

> pi = (let PI = 3.14)
Uncaught SyntaxError: Unexpected identifier
> pi = (PI = 3.14)
3.14

つまり、代入式の右辺は値が必要なので式である必要がある。

・文をまとめる

> {
    const pi = 3.14
console.log(`ブロックの内側: ${pi}`)
}
console.log(`ブロックの外側: ${pi}`)
ブロックの内側: 3.14
Uncaught ReferenceError: pi is not defined
    at <anonymous>:5:25

    ２つ目のconsole.log()はブロック外で実行している為、
    piが存在しないとエラーになる。*/
