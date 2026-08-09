# sortディレクトリの中にあるファイル群を拡張子を参照してsortedフォルダにそれぞれ作成し、ファイルを移動する

require 'fileutils'

files = Dir.children('sort')

files_ext_uniq = files.map { |f| File.extname(f).delete_prefix('.') }.uniq

files_ext_uniq.each { |feu| FileUtils.mkdir_p("sorted/#{feu}") }
files.each { |f| FileUtils.mv("sort/#{f}", "sorted/#{File.extname(f).delete_prefix('.')}/#{f}") }
