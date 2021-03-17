const qrcode = require('qrcode-terminal');

const url = 'https://www.baidu.com';

qrcode.generate(url, {
	small: true
});