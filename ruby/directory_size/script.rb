def size_directory(path)
  files_size = 0
  Dir.children(path).each { |f|
    if File.directory?("#{path}/#{f}")
      files_size += size_directory("#{path}/#{f}")
    else
      files_size += File.size("#{path}/#{f}")
    end
   }
   return files_size
end

puts size_directory("size")
