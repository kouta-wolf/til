## ここについて
- 基本的なコマンドじゃなくて知見まとめるよ


## WSL再インストール時にユーザー名が違う時に起こる所有者調整
- `sudo chown -R hoge:hoge /home/hoge`
- mvとかtouchとかがpermission deniedする時にやるやつ。hogeはuser名

## WSLインストール時、指定しないubuntuとubuntu24.04だと微妙に違う？
- なんかRuby LSPがどうしてもエラー吐いてた。なぜぇ？一旦再インストールで大丈夫になったけど…