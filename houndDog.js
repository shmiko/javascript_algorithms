hound = require('hound')

// Create a directory tree watcher.
watcher = hound.watch('//sitfshom01/PROD/host_files/IS/WMS/Import')

// Create a file watcher.
watcher = hound.watch('//sitfshom01/PROD/host_files/IS/WMS/Import/soap.xml')

// Add callbacks for file and directory events.  The change event only applies
// to files.
watcher.on('create', function(file, stats) {
  console.log(file + ' was created')
})
watcher.on('change', function(file, stats) {
  console.log(file + ' was changed')
})
watcher.on('delete', function(file) {
  console.log(file + ' was deleted')
})

// Unwatch specific files or directories.
watcher.unwatch('//sitfshom01/PROD/host_files/IS/WMS/Import/another_file')

// Unwatch all watched files and directories.
watcher.clear()
