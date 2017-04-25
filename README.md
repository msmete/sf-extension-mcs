# MCS Extension from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-spriteview/master/LICENSE)

An extension to Oracle MCS Connection with Smartface Native Framework.


## Installation
MCS Extension can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Open scripts/package.json file inside your workspace.
- Add SpriteView extension dependency as:`"sf-extension-mcs": "^1.0.0"`
- Run command `npm install` under the folder `scripts`
- Finally require the extension as: `require("sf-extension-mcs")`

## How to use

1) Init your MCS config

```javascript
  const MCS_Extension = require('sf-extension-mcs');
  var MCS = new MCS_Extension();
  
  // MCS INIT
  var options = {
      'backendId': '3b07f69f-7650-4c11-89e1-8dc9424c43d9',
      'baseUrl': 'https://smartface-mobilebel.mobileenv.em2.oraclecloud.com:443',
      'androidApplicationKey': '5cbcf2f5-27da-4b8d-9651-d4e6982a3f7e',
      'iOSApplicationKey': '90729131-ad3f-49c2-adae-6e1c5b7b9411'
  };
  MCS.init(options);
```
2) Login to MCS
```javascript
spriteObject.setSprite({
	sheet: Image.createFromFile("images://spritesheet.png"),
	frameX: << #frames in axis-X >>, // Number
	frameY: << #frames in axis-Y >>, // Number
	frameCount: << #frames in the sheet >> // Number
});
```
3) Finally you must make the sprite play by using:
```javascript
spriteObject.play(<< loop duration in ms >>); // Number
```

## Sample
The folder `sample` holds the example codes and the sprite sheet. You can put them into your workspace and start using it. 

## Need Help?

Please [submit an issue](https://github.com/smartface/sf-extension-spriteview/issues) on GitHub and provide information about your problem.

## Support & Documentation & Useful Links
- [Guides](https://developer.smartface.io/)
- [API Docs](http://ref.smartface.io/)
- [Smartface Cloud Dashboard](https://cloud.smartface.io)

## Code of Conduct
We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Please read and follow our [Code of Conduct](https://github.com/smartface/sf-extension-spriteview/blob/master/CODE_OF_CONDUCT.md).

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-spriteview/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.