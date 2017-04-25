/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Font = require('sf-core/ui/font');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Button = require('sf-core/ui/button');



const Page1_ = extend(Page)(
	//constructor
	function(_super){
		// initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this)
		});

		var lbl = new Label({
			height: 90.45000000000002,
			visible: true,
			textAlignment: TextAlignment.MIDCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20
		});
		lbl.font = Font.create("Arial", 16, Font.NORMAL);
		
		var img = new ImageView({
			height: 60.3,
			image: Image.createFromFile("images://smartface.png"),
			imageFillType: ImageFillType.ASPECTFIT,
			visible: true,
			borderColor: Color.create(255, 255, 255, 255),
			borderWidth: 0,
			borderRadius: 0,
			alpha: 1,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20
		});
		
		
		var flexlayout = new FlexLayout({
			height: 130,
			visible: true,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0,
			alignContent: FlexLayout.AlignContent.STRETCH,
			alignItems: FlexLayout.AlignItems.STRETCH,
			justifyContent: FlexLayout.JustifyContent.FLEX_START,
			flexWrap: FlexLayout.FlexWrap.NOWRAP,
			flexDirection: FlexLayout.FlexDirection.COLUMN,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20
		});
		
		
		var btn = new Button({
			height: 60,
			text: "Click me!",
			visible: true,
			backgroundColor: Color.create(255, 0, 161, 241),
			textColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		btn.font = Font.create("Arial", 16, Font.NORMAL);
		
		var btnNext = new Button({
			height: 60,
			text: "Next Page",
			visible: true,
			backgroundColor: Color.create(255, 0, 161, 241),
			textColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderWidth: 0,
			borderRadius: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginTop: 10
		});
		btnNext.font = Font.create("Arial", 16, Font.NORMAL);
		
		
		//assign the children to page 
		this.children = Object.assign({}, {
			img: img,
			lbl: lbl,
			flexlayout: flexlayout
		});
		
		//assign the children of flexlayout
		flexlayout.children =  Object.assign({}, {
			btn: btn,
			btnNext: btnNext
		});

});

function onLoad() { 

  this.headerBar.title = "page1";
  this.headerBar.visible = true;

  this.statusBar.visible = true;
  this.layout.backgroundColor = Color.create("#EEEEEE");
  this.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
  this.layout.alignItems = FlexLayout.AlignItems.CENTER;
  this.layout.direction = FlexLayout.Direction.INHERIT;
  this.layout.flexWrap = FlexLayout.FlexWrap.NOWRAP;
  this.layout.justifyContent = FlexLayout.JustifyContent.SPACE_AROUND;

    
  //add components to page.
	const childrenOfPage = this.children || {},
		pageLayout = this.layout;
		
	Object
		.keys(childrenOfPage)
		.forEach(function(childName) {
			var component = childrenOfPage[childName];
			if (component.children) {
				addChild(component);
			}
			pageLayout.addChild(component);
		});
		
}

//add child components to parent component.
function addChild(component) {

	Object
		.keys(component.children)
		.forEach(function(childName) {
			var child = component.children[childName];
			if (child.children) {
				addChild(child);
			}
			component.addChild(child);
		});
		
}

//remove undefined or null properties.
function removeUndefinedOrNullProps(_obj) {
  var obj = {};
  var type;
  for (var i in _obj) {
    type = typeof _obj[i];
    if (!((!_obj[i] && type === "object") || ( type === "undefined"))) {
      obj[i] = _obj[i];
    }
  }
  return obj;
}

module && (module.exports = Page1_);