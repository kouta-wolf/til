def sizes_subfiles(path)
  files_size = 0
  Dir.children(path).each { |f|
    if File.directory?("#{path}/#{f}")
      files_size += sizes_subfiles("#{path}/#{f}")
    else
      files_size += File.size("#{path}/#{f}")
    end
  }
  return files_size
end

puts sizes_subfiles("size")
