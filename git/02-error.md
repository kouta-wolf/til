## Githubにpushする際にcui上でパスワードを要求する（解決済み）
- git cloneする際にHTTPSのURLをコピーしているのが原因
- 自分のリポジトリならSSHからで良いみたい
- もしSSHじゃない方から取ったなら`git remote set-url origin git@github.com:"ユーザー名"/"リポジトリ名.git"`でセットし直しが出来る
- ちなみにチェック方法は`git remote -v`でhttps://から始まってるなら失敗S