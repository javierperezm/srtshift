# srtshift

Shift time on subtitles files SRT

## Usage
`$ node index.js {seconds} {inputFile} {outputFile}`

### Example:

`$ node index.js -1:15,123 myfile.srt newfile.srt`

Shift time back 1 minute and 15.123 seconds, reading from the file "myfile.srt" and creating a new file "newfile.srt".
