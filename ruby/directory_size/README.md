## 概要

`size`ディレクトリの中身を全て確認して容量を返す

## 思考

全てのファイルのフルパスを配列で集める → その配列を回してサイズを足していく

そのディレクトリ内のDir.entoriesを出す。パスじゃないものを別配列に逃がす。そのパスをまたeachに回してDir.entoriesを出す。またパスじゃないものを別配列に逃がす。そうしていきDir.entoriesにパスがふくまれなくなったら終了。もとに戻って、パスがある配列でまた行う

`./`や`../`を除いて`/`が末尾に無く、ファイルが無い配列の場合は終了とする（早期リターン）
ファイルがある場合はファイルarrayにpush
フォルダがある場合はeachで回し、Dir.entoriesで呼び出す

これ再帰関数で回せると良いはずなので…再帰関数どう扱ったっけな…
array = [最初の指定フォルダ（今回の場合はsize/)]
def size_directory(array)
  arrayの中身から`./`と`../`を破壊的に除く
  return if arrayの中身が`/`が末尾に無い、またファイルが無い場合は終了とする
  filesize_array = arrayの中の`/`が末尾に無い文字列をFile関数の何かでbにでも変換して数字としてpushする

  def size_directory(array) # 再帰関数を回す
  
  集まったfilesize_arrayの中身の数字を全てsumした上でkbやmbに直せるなら直したいが…やるなら別の関数になるのか？
  return 1行前の返り値を出す
end

指摘あり、rubyにはDir.entoriesであっても文字列を返すため`/`が文字列に付いてこない。ただファイルかフォルダであるかはFile.directory?(path)やFile.file?(path)で判定できるらしい、となると

def size_directory(path)
  files_size = []
  Dir.children(path).each { |f|
    if File.directory?(f)
      size_directory(#{path}/#{f})
    else
      files_size << f.サイズ変換(byte)
  }
  return files_size.sum
end
