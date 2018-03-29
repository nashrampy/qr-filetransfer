# qr-filetransfer
Transfer files over wifi from your computer to your mobile device by scanning a QR code without leaving the terminal using node.js
[![Build Status](https://travis-ci.org/svenkatreddy/qr-filetransfer.svg?branch=master)](https://travis-ci.org/svenkatreddy/qr-filetransfer)

Assuming you have node 6 or above installed on your machine

## Install

```
npm install -g qr-filetransfer
```

## Usage
---


Transfer a single file

```
qr-filetransfer /path/to/file.txt
```

Transfer multiple files

```
qr-filetransfer /path/to/file.txt /path/to/Anotherfile.txt
```


Transfer a full directory. Note: the **directory gets zipped** before being transferred

```
qr-filetransfer /path/to/directory
```

Transfer files and directories Note: **gets zipped** before being transferred

```
qr-filetransfer /path/to/directory /path/to/file.txt /path/to/Anotherfile.txt
```

(or)
 
you can use shortcut `qrf`

```
qrf /path/to/file.txt
```

Instead of installing, you can also use `npx`

```
npx qr-filetransfer /path/to/file.txt
```

## Contribution
* Please open an issue for features or bugs
* Please Fork and open Pull Requests

### Credits
Inspired from https://github.com/claudiodangelis/qr-filetransfer
