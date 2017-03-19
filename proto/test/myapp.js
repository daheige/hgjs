//自定义封装常见的js小型化库
var myapp                         = {
    getElem                       : function(_id) {
        //根据ID获取元素
        return document.getElementById(_id);
    },
    stripslashes                  : function(_str) {
        //转义
        return _str.replace(/\\/g, '');
    },
    removeAngletag                :function(_str) {
        //将html标签的<>替换为&lt,&gt
        return _str.replace(/</, '&lt;').replace(/>/, '&gt;');

    },
    delTrim                       : function(_str) {
        //去掉左右两边的空格
        return _str.replace(/(^\s *)|(\s*$)/g, '');
    },
    getStyle                      : function(_obj, _styleName) { //得到元素的css属性值
        if (_obj.currentStyle || document.all) { //IE
            return _obj.currentStyle[_styleName];
        } else if (document.defaultView && document.defaultView.getComputedStyle) { //FF
            return document.defaultView.getComputedStyle(_obj, null).getPropertyValue(_styleName); //得到属性值
        }
        return undefined;
    }
};
var str                           = " fefefefe     ";
str                               = myapp.delTrim(str);
console.log(str + "length         :" + str.length); //