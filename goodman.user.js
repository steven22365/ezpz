// ==UserScript==
// @name         goodman
// @version      7
// @description  created after creat ant hack
// @author       goodbadman#9494
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://dev.moomoo.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @grant        none
// @require      https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js

// ==/UserScript==
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.msgpack=t()}}(function(){return function t(r,e,n){function i(f,u){if(!e[f]){if(!r[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(o)return o(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var c=e[f]={exports:{}};r[f][0].call(c.exports,function(t){var e=r[f][1][t];return i(e?e:t)},c,c.exports,t,r,e,n)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<n.length;f++)i(n[f]);return i}({1:[function(t,r,e){e.encode=t("./encode").encode,e.decode=t("./decode").decode,e.Encoder=t("./encoder").Encoder,e.Decoder=t("./decoder").Decoder,e.createCodec=t("./ext").createCodec,e.codec=t("./codec").codec},{"./codec":10,"./decode":12,"./decoder":13,"./encode":15,"./encoder":16,"./ext":20}],2:[function(t,r,e){(function(Buffer){function t(t){return t&&t.isBuffer&&t}r.exports=t("undefined"!=typeof Buffer&&Buffer)||t(this.Buffer)||t("undefined"!=typeof window&&window.Buffer)||this.Buffer}).call(this,t("buffer").Buffer)},{buffer:29}],3:[function(t,r,e){function n(t,r){for(var e=this,n=r||(r|=0),i=t.length,o=0,f=0;f<i;)o=t.charCodeAt(f++),o<128?e[n++]=o:o<2048?(e[n++]=192|o>>>6,e[n++]=128|63&o):o<55296||o>57343?(e[n++]=224|o>>>12,e[n++]=128|o>>>6&63,e[n++]=128|63&o):(o=(o-55296<<10|t.charCodeAt(f++)-56320)+65536,e[n++]=240|o>>>18,e[n++]=128|o>>>12&63,e[n++]=128|o>>>6&63,e[n++]=128|63&o);return n-r}function i(t,r,e){var n=this,i=0|r;e||(e=n.length);for(var o="",f=0;i<e;)f=n[i++],f<128?o+=String.fromCharCode(f):(192===(224&f)?f=(31&f)<<6|63&n[i++]:224===(240&f)?f=(15&f)<<12|(63&n[i++])<<6|63&n[i++]:240===(248&f)&&(f=(7&f)<<18|(63&n[i++])<<12|(63&n[i++])<<6|63&n[i++]),f>=65536?(f-=65536,o+=String.fromCharCode((f>>>10)+55296,(1023&f)+56320)):o+=String.fromCharCode(f));return o}function o(t,r,e,n){var i;e||(e=0),n||0===n||(n=this.length),r||(r=0);var o=n-e;if(t===this&&e<r&&r<n)for(i=o-1;i>=0;i--)t[i+r]=this[i+e];else for(i=0;i<o;i++)t[i+r]=this[i+e];return o}e.copy=o,e.toString=i,e.write=n},{}],4:[function(t,r,e){function n(t){return new Array(t)}function i(t){if(!o.isBuffer(t)&&o.isView(t))t=o.Uint8Array.from(t);else if(o.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}var o=t("./bufferish"),e=r.exports=n(0);e.alloc=n,e.concat=o.concat,e.from=i},{"./bufferish":8}],5:[function(t,r,e){function n(t){return new Buffer(t)}function i(t){if(!o.isBuffer(t)&&o.isView(t))t=o.Uint8Array.from(t);else if(o.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Buffer.from&&1!==Buffer.from.length?Buffer.from(t):new Buffer(t)}var o=t("./bufferish"),Buffer=o.global,e=r.exports=o.hasBuffer?n(0):[];e.alloc=o.hasBuffer&&Buffer.alloc||n,e.concat=o.concat,e.from=i},{"./bufferish":8}],6:[function(t,r,e){function n(t,r,e,n){var o=a.isBuffer(this),f=a.isBuffer(t);if(o&&f)return this.copy(t,r,e,n);if(c||o||f||!a.isView(this)||!a.isView(t))return u.copy.call(this,t,r,e,n);var s=e||null!=n?i.call(this,e,n):this;return t.set(s,r),s.length}function i(t,r){var e=this.slice||!c&&this.subarray;if(e)return e.call(this,t,r);var i=a.alloc.call(this,r-t);return n.call(this,i,0,t,r),i}function o(t,r,e){var n=!s&&a.isBuffer(this)?this.toString:u.toString;return n.apply(this,arguments)}function f(t){function r(){var r=this[t]||u[t];return r.apply(this,arguments)}return r}var u=t("./buffer-lite");e.copy=n,e.slice=i,e.toString=o,e.write=f("write");var a=t("./bufferish"),Buffer=a.global,s=a.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Buffer,c=s&&!Buffer.TYPED_ARRAY_SUPPORT},{"./buffer-lite":3,"./bufferish":8}],7:[function(t,r,e){function n(t){return new Uint8Array(t)}function i(t){if(o.isView(t)){var r=t.byteOffset,n=t.byteLength;t=t.buffer,t.byteLength!==n&&(t.slice?t=t.slice(r,r+n):(t=new Uint8Array(t),t.byteLength!==n&&(t=Array.prototype.slice.call(t,r,r+n))))}else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}var o=t("./bufferish"),e=r.exports=o.hasArrayBuffer?n(0):[];e.alloc=n,e.concat=o.concat,e.from=i},{"./bufferish":8}],8:[function(t,r,e){function n(t){return"string"==typeof t?u.call(this,t):a(this).from(t)}function i(t){return a(this).alloc(t)}function o(t,r){function n(t){r+=t.length}function o(t){a+=w.copy.call(t,u,a)}r||(r=0,Array.prototype.forEach.call(t,n));var f=this!==e&&this||t[0],u=i.call(f,r),a=0;return Array.prototype.forEach.call(t,o),u}function f(t){return t instanceof ArrayBuffer||E(t)}function u(t){var r=3*t.length,e=i.call(this,r),n=w.write.call(e,t);return r!==n&&(e=w.slice.call(e,0,n)),e}function a(t){return d(t)?g:y(t)?b:p(t)?v:h?g:l?b:v}function s(){return!1}function c(t,r){return t="[object "+t+"]",function(e){return null!=e&&{}.toString.call(r?e[r]:e)===t}}var Buffer=e.global=t("./buffer-global"),h=e.hasBuffer=Buffer&&!!Buffer.isBuffer,l=e.hasArrayBuffer="undefined"!=typeof ArrayBuffer,p=e.isArray=t("isarray");e.isArrayBuffer=l?f:s;var d=e.isBuffer=h?Buffer.isBuffer:s,y=e.isView=l?ArrayBuffer.isView||c("ArrayBuffer","buffer"):s;e.alloc=i,e.concat=o,e.from=n;var v=e.Array=t("./bufferish-array"),g=e.Buffer=t("./bufferish-buffer"),b=e.Uint8Array=t("./bufferish-uint8array"),w=e.prototype=t("./bufferish-proto"),E=c("ArrayBuffer")},{"./buffer-global":2,"./bufferish-array":4,"./bufferish-buffer":5,"./bufferish-proto":6,"./bufferish-uint8array":7,isarray:34}],9:[function(t,r,e){function n(t){return this instanceof n?(this.options=t,void this.init()):new n(t)}function i(t){for(var r in t)n.prototype[r]=o(n.prototype[r],t[r])}function o(t,r){function e(){return t.apply(this,arguments),r.apply(this,arguments)}return t&&r?e:t||r}function f(t){function r(t,r){return r(t)}return t=t.slice(),function(e){return t.reduce(r,e)}}function u(t){return s(t)?f(t):t}function a(t){return new n(t)}var s=t("isarray");e.createCodec=a,e.install=i,e.filter=u;var c=t("./bufferish");n.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=c.Uint8Array),this},e.preset=a({preset:!0})},{"./bufferish":8,isarray:34}],10:[function(t,r,e){t("./read-core"),t("./write-core"),e.codec={preset:t("./codec-base").preset}},{"./codec-base":9,"./read-core":22,"./write-core":25}],11:[function(t,r,e){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var r=this.codec=t.codec;r.bufferish&&(this.bufferish=r.bufferish)}}e.DecodeBuffer=n;var i=t("./read-core").preset,o=t("./flex-buffer").FlexDecoder;o.mixin(n.prototype),n.prototype.codec=i,n.prototype.fetch=function(){return this.codec.decode(this)}},{"./flex-buffer":21,"./read-core":22}],12:[function(t,r,e){function n(t,r){var e=new i(r);return e.write(t),e.read()}e.decode=n;var i=t("./decode-buffer").DecodeBuffer},{"./decode-buffer":11}],13:[function(t,r,e){function n(t){return this instanceof n?void o.call(this,t):new n(t)}e.Decoder=n;var i=t("event-lite"),o=t("./decode-buffer").DecodeBuffer;n.prototype=new o,i.mixin(n.prototype),n.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()},n.prototype.push=function(t){this.emit("data",t)},n.prototype.end=function(t){this.decode(t),this.emit("end")}},{"./decode-buffer":11,"event-lite":31}],14:[function(t,r,e){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var r=this.codec=t.codec;r.bufferish&&(this.bufferish=r.bufferish)}}e.EncodeBuffer=n;var i=t("./write-core").preset,o=t("./flex-buffer").FlexEncoder;o.mixin(n.prototype),n.prototype.codec=i,n.prototype.write=function(t){this.codec.encode(this,t)}},{"./flex-buffer":21,"./write-core":25}],15:[function(t,r,e){function n(t,r){var e=new i(r);return e.write(t),e.read()}e.encode=n;var i=t("./encode-buffer").EncodeBuffer},{"./encode-buffer":14}],16:[function(t,r,e){function n(t){return this instanceof n?void o.call(this,t):new n(t)}e.Encoder=n;var i=t("event-lite"),o=t("./encode-buffer").EncodeBuffer;n.prototype=new o,i.mixin(n.prototype),n.prototype.encode=function(t){this.write(t),this.emit("data",this.read())},n.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")}},{"./encode-buffer":14,"event-lite":31}],17:[function(t,r,e){function n(t,r){return this instanceof n?(this.buffer=i.from(t),void(this.type=r)):new n(t,r)}e.ExtBuffer=n;var i=t("./bufferish")},{"./bufferish":8}],18:[function(t,r,e){function n(t){t.addExtPacker(14,Error,[u,i]),t.addExtPacker(1,EvalError,[u,i]),t.addExtPacker(2,RangeError,[u,i]),t.addExtPacker(3,ReferenceError,[u,i]),t.addExtPacker(4,SyntaxError,[u,i]),t.addExtPacker(5,TypeError,[u,i]),t.addExtPacker(6,URIError,[u,i]),t.addExtPacker(10,RegExp,[f,i]),t.addExtPacker(11,Boolean,[o,i]),t.addExtPacker(12,String,[o,i]),t.addExtPacker(13,Date,[Number,i]),t.addExtPacker(15,Number,[o,i]),"undefined"!=typeof Uint8Array&&(t.addExtPacker(17,Int8Array,c),t.addExtPacker(18,Uint8Array,c),t.addExtPacker(19,Int16Array,c),t.addExtPacker(20,Uint16Array,c),t.addExtPacker(21,Int32Array,c),t.addExtPacker(22,Uint32Array,c),t.addExtPacker(23,Float32Array,c),"undefined"!=typeof Float64Array&&t.addExtPacker(24,Float64Array,c),"undefined"!=typeof Uint8ClampedArray&&t.addExtPacker(25,Uint8ClampedArray,c),t.addExtPacker(26,ArrayBuffer,c),t.addExtPacker(29,DataView,c)),s.hasBuffer&&t.addExtPacker(27,Buffer,s.from)}function i(r){return a||(a=t("./encode").encode),a(r)}function o(t){return t.valueOf()}function f(t){t=RegExp.prototype.toString.call(t).split("/"),t.shift();var r=[t.pop()];return r.unshift(t.join("/")),r}function u(t){var r={};for(var e in h)r[e]=t[e];return r}e.setExtPackers=n;var a,s=t("./bufferish"),Buffer=s.global,c=s.Uint8Array.from,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./encode":15}],19:[function(t,r,e){function n(t){t.addExtUnpacker(14,[i,f(Error)]),t.addExtUnpacker(1,[i,f(EvalError)]),t.addExtUnpacker(2,[i,f(RangeError)]),t.addExtUnpacker(3,[i,f(ReferenceError)]),t.addExtUnpacker(4,[i,f(SyntaxError)]),t.addExtUnpacker(5,[i,f(TypeError)]),t.addExtUnpacker(6,[i,f(URIError)]),t.addExtUnpacker(10,[i,o]),t.addExtUnpacker(11,[i,u(Boolean)]),t.addExtUnpacker(12,[i,u(String)]),t.addExtUnpacker(13,[i,u(Date)]),t.addExtUnpacker(15,[i,u(Number)]),"undefined"!=typeof Uint8Array&&(t.addExtUnpacker(17,u(Int8Array)),t.addExtUnpacker(18,u(Uint8Array)),t.addExtUnpacker(19,[a,u(Int16Array)]),t.addExtUnpacker(20,[a,u(Uint16Array)]),t.addExtUnpacker(21,[a,u(Int32Array)]),t.addExtUnpacker(22,[a,u(Uint32Array)]),t.addExtUnpacker(23,[a,u(Float32Array)]),"undefined"!=typeof Float64Array&&t.addExtUnpacker(24,[a,u(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&t.addExtUnpacker(25,u(Uint8ClampedArray)),t.addExtUnpacker(26,a),t.addExtUnpacker(29,[a,u(DataView)])),c.hasBuffer&&t.addExtUnpacker(27,u(Buffer))}function i(r){return s||(s=t("./decode").decode),s(r)}function o(t){return RegExp.apply(null,t)}function f(t){return function(r){var e=new t;for(var n in h)e[n]=r[n];return e}}function u(t){return function(r){return new t(r)}}function a(t){return new Uint8Array(t).buffer}e.setExtUnpackers=n;var s,c=t("./bufferish"),Buffer=c.global,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./decode":12}],20:[function(t,r,e){t("./read-core"),t("./write-core"),e.createCodec=t("./codec-base").createCodec},{"./codec-base":9,"./read-core":22,"./write-core":25}],21:[function(t,r,e){function n(){if(!(this instanceof n))return new n}function i(){if(!(this instanceof i))return new i}function o(){function t(t){var r=this.offset?p.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=r?t?this.bufferish.concat([r,t]):r:t,this.offset=0}function r(){for(;this.offset<this.buffer.length;){var t,r=this.offset;try{t=this.fetch()}catch(t){if(t&&t.message!=v)throw t;this.offset=r;break}this.push(t)}}function e(t){var r=this.offset,e=r+t;if(e>this.buffer.length)throw new Error(v);return this.offset=e,r}return{bufferish:p,write:t,fetch:a,flush:r,push:c,pull:h,read:s,reserve:e,offset:0}}function f(){function t(){var t=this.start;if(t<this.offset){var r=this.start=this.offset;return p.prototype.slice.call(this.buffer,t,r)}}function r(){for(;this.start<this.offset;){var t=this.fetch();t&&this.push(t)}}function e(){var t=this.buffers||(this.buffers=[]),r=t.length>1?this.bufferish.concat(t):t[0];return t.length=0,r}function n(t){var r=0|t;if(this.buffer){var e=this.buffer.length,n=0|this.offset,i=n+r;if(i<e)return this.offset=i,n;this.flush(),t=Math.max(t,Math.min(2*e,this.maxBufferSize))}return t=Math.max(t,this.minBufferSize),this.buffer=this.bufferish.alloc(t),this.start=0,this.offset=r,0}function i(t){var r=t.length;if(r>this.minBufferSize)this.flush(),this.push(t);else{var e=this.reserve(r);p.prototype.copy.call(t,this.buffer,e)}}return{bufferish:p,write:u,fetch:t,flush:r,push:c,pull:e,read:s,reserve:n,send:i,maxBufferSize:y,minBufferSize:d,offset:0,start:0}}function u(){throw new Error("method not implemented: write()")}function a(){throw new Error("method not implemented: fetch()")}function s(){var t=this.buffers&&this.buffers.length;return t?(this.flush(),this.pull()):this.fetch()}function c(t){var r=this.buffers||(this.buffers=[]);r.push(t)}function h(){var t=this.buffers||(this.buffers=[]);return t.shift()}function l(t){function r(r){for(var e in t)r[e]=t[e];return r}return r}e.FlexDecoder=n,e.FlexEncoder=i;var p=t("./bufferish"),d=2048,y=65536,v="BUFFER_SHORTAGE";n.mixin=l(o()),n.mixin(n.prototype),i.mixin=l(f()),i.mixin(i.prototype)},{"./bufferish":8}],22:[function(t,r,e){function n(t){function r(t){var r=s(t),n=e[r];if(!n)throw new Error("Invalid type: "+(r?"0x"+r.toString(16):r));return n(t)}var e=c.getReadToken(t);return r}function i(){var t=this.options;return this.decode=n(t),t&&t.preset&&a.setExtUnpackers(this),this}function o(t,r){var e=this.extUnpackers||(this.extUnpackers=[]);e[t]=h.filter(r)}function f(t){function r(r){return new u(r,t)}var e=this.extUnpackers||(this.extUnpackers=[]);return e[t]||r}var u=t("./ext-buffer").ExtBuffer,a=t("./ext-unpacker"),s=t("./read-format").readUint8,c=t("./read-token"),h=t("./codec-base");h.install({addExtUnpacker:o,getExtUnpacker:f,init:i}),e.preset=i.call(h.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-unpacker":19,"./read-format":23,"./read-token":24}],23:[function(t,r,e){function n(t){var r=k.hasArrayBuffer&&t&&t.binarraybuffer,e=t&&t.int64,n=T&&t&&t.usemap,B={map:n?o:i,array:f,str:u,bin:r?s:a,ext:c,uint8:h,uint16:p,uint32:y,uint64:g(8,e?E:b),int8:l,int16:d,int32:v,int64:g(8,e?A:w),float32:g(4,m),float64:g(8,x)};return B}function i(t,r){var e,n={},i=new Array(r),o=new Array(r),f=t.codec.decode;for(e=0;e<r;e++)i[e]=f(t),o[e]=f(t);for(e=0;e<r;e++)n[i[e]]=o[e];return n}function o(t,r){var e,n=new Map,i=new Array(r),o=new Array(r),f=t.codec.decode;for(e=0;e<r;e++)i[e]=f(t),o[e]=f(t);for(e=0;e<r;e++)n.set(i[e],o[e]);return n}function f(t,r){for(var e=new Array(r),n=t.codec.decode,i=0;i<r;i++)e[i]=n(t);return e}function u(t,r){var e=t.reserve(r),n=e+r;return _.toString.call(t.buffer,"utf-8",e,n)}function a(t,r){var e=t.reserve(r),n=e+r,i=_.slice.call(t.buffer,e,n);return k.from(i)}function s(t,r){var e=t.reserve(r),n=e+r,i=_.slice.call(t.buffer,e,n);return k.Uint8Array.from(i).buffer}function c(t,r){var e=t.reserve(r+1),n=t.buffer[e++],i=e+r,o=t.codec.getExtUnpacker(n);if(!o)throw new Error("Invalid ext type: "+(n?"0x"+n.toString(16):n));var f=_.slice.call(t.buffer,e,i);return o(f)}function h(t){var r=t.reserve(1);return t.buffer[r]}function l(t){var r=t.reserve(1),e=t.buffer[r];return 128&e?e-256:e}function p(t){var r=t.reserve(2),e=t.buffer;return e[r++]<<8|e[r]}function d(t){var r=t.reserve(2),e=t.buffer,n=e[r++]<<8|e[r];return 32768&n?n-65536:n}function y(t){var r=t.reserve(4),e=t.buffer;return 16777216*e[r++]+(e[r++]<<16)+(e[r++]<<8)+e[r]}function v(t){var r=t.reserve(4),e=t.buffer;return e[r++]<<24|e[r++]<<16|e[r++]<<8|e[r]}function g(t,r){return function(e){var n=e.reserve(t);return r.call(e.buffer,n,S)}}function b(t){return new P(this,t).toNumber()}function w(t){return new R(this,t).toNumber()}function E(t){return new P(this,t)}function A(t){return new R(this,t)}function m(t){return B.read(this,t,!1,23,4)}function x(t){return B.read(this,t,!1,52,8)}var B=t("ieee754"),U=t("int64-buffer"),P=U.Uint64BE,R=U.Int64BE;e.getReadFormat=n,e.readUint8=h;var k=t("./bufferish"),_=t("./bufferish-proto"),T="undefined"!=typeof Map,S=!0},{"./bufferish":8,"./bufferish-proto":6,ieee754:32,"int64-buffer":33}],24:[function(t,r,e){function n(t){var r=s.getReadFormat(t);return t&&t.useraw?o(r):i(r)}function i(t){var r,e=new Array(256);for(r=0;r<=127;r++)e[r]=f(r);for(r=128;r<=143;r++)e[r]=a(r-128,t.map);for(r=144;r<=159;r++)e[r]=a(r-144,t.array);for(r=160;r<=191;r++)e[r]=a(r-160,t.str);for(e[192]=f(null),e[193]=null,e[194]=f(!1),e[195]=f(!0),e[196]=u(t.uint8,t.bin),e[197]=u(t.uint16,t.bin),e[198]=u(t.uint32,t.bin),e[199]=u(t.uint8,t.ext),e[200]=u(t.uint16,t.ext),e[201]=u(t.uint32,t.ext),e[202]=t.float32,e[203]=t.float64,e[204]=t.uint8,e[205]=t.uint16,e[206]=t.uint32,e[207]=t.uint64,e[208]=t.int8,e[209]=t.int16,e[210]=t.int32,e[211]=t.int64,e[212]=a(1,t.ext),e[213]=a(2,t.ext),e[214]=a(4,t.ext),e[215]=a(8,t.ext),e[216]=a(16,t.ext),e[217]=u(t.uint8,t.str),e[218]=u(t.uint16,t.str),e[219]=u(t.uint32,t.str),e[220]=u(t.uint16,t.array),e[221]=u(t.uint32,t.array),e[222]=u(t.uint16,t.map),e[223]=u(t.uint32,t.map),r=224;r<=255;r++)e[r]=f(r-256);return e}function o(t){var r,e=i(t).slice();for(e[217]=e[196],e[218]=e[197],e[219]=e[198],r=160;r<=191;r++)e[r]=a(r-160,t.bin);return e}function f(t){return function(){return t}}function u(t,r){return function(e){var n=t(e);return r(e,n)}}function a(t,r){return function(e){return r(e,t)}}var s=t("./read-format");e.getReadToken=n},{"./read-format":23}],25:[function(t,r,e){function n(t){function r(t,r){var n=e[typeof r];if(!n)throw new Error('Unsupported type "'+typeof r+'": '+r);n(t,r)}var e=s.getWriteType(t);return r}function i(){var t=this.options;return this.encode=n(t),t&&t.preset&&a.setExtPackers(this),this}function o(t,r,e){function n(r){return e&&(r=e(r)),new u(r,t)}e=c.filter(e);var i=r.name;if(i&&"Object"!==i){var o=this.extPackers||(this.extPackers={});o[i]=n}else{var f=this.extEncoderList||(this.extEncoderList=[]);f.unshift([r,n])}}function f(t){var r=this.extPackers||(this.extPackers={}),e=t.constructor,n=e&&e.name&&r[e.name];if(n)return n;for(var i=this.extEncoderList||(this.extEncoderList=[]),o=i.length,f=0;f<o;f++){var u=i[f];if(e===u[0])return u[1]}}var u=t("./ext-buffer").ExtBuffer,a=t("./ext-packer"),s=t("./write-type"),c=t("./codec-base");c.install({addExtPacker:o,getExtPacker:f,init:i}),e.preset=i.call(c.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-packer":18,"./write-type":27}],26:[function(t,r,e){function n(t){return t&&t.uint8array?i():m||E.hasBuffer&&t&&t.safe?f():o()}function i(){var t=o();return t[202]=c(202,4,p),t[203]=c(203,8,d),t}function o(){var t=w.slice();return t[196]=u(196),t[197]=a(197),t[198]=s(198),t[199]=u(199),t[200]=a(200),t[201]=s(201),t[202]=c(202,4,x.writeFloatBE||p,!0),t[203]=c(203,8,x.writeDoubleBE||d,!0),t[204]=u(204),t[205]=a(205),t[206]=s(206),t[207]=c(207,8,h),t[208]=u(208),t[209]=a(209),t[210]=s(210),t[211]=c(211,8,l),t[217]=u(217),t[218]=a(218),t[219]=s(219),t[220]=a(220),t[221]=s(221),t[222]=a(222),t[223]=s(223),t}function f(){var t=w.slice();return t[196]=c(196,1,Buffer.prototype.writeUInt8),t[197]=c(197,2,Buffer.prototype.writeUInt16BE),t[198]=c(198,4,Buffer.prototype.writeUInt32BE),t[199]=c(199,1,Buffer.prototype.writeUInt8),t[200]=c(200,2,Buffer.prototype.writeUInt16BE),t[201]=c(201,4,Buffer.prototype.writeUInt32BE),t[202]=c(202,4,Buffer.prototype.writeFloatBE),t[203]=c(203,8,Buffer.prototype.writeDoubleBE),t[204]=c(204,1,Buffer.prototype.writeUInt8),t[205]=c(205,2,Buffer.prototype.writeUInt16BE),t[206]=c(206,4,Buffer.prototype.writeUInt32BE),t[207]=c(207,8,h),t[208]=c(208,1,Buffer.prototype.writeInt8),t[209]=c(209,2,Buffer.prototype.writeInt16BE),t[210]=c(210,4,Buffer.prototype.writeInt32BE),t[211]=c(211,8,l),t[217]=c(217,1,Buffer.prototype.writeUInt8),t[218]=c(218,2,Buffer.prototype.writeUInt16BE),t[219]=c(219,4,Buffer.prototype.writeUInt32BE),t[220]=c(220,2,Buffer.prototype.writeUInt16BE),t[221]=c(221,4,Buffer.prototype.writeUInt32BE),t[222]=c(222,2,Buffer.prototype.writeUInt16BE),t[223]=c(223,4,Buffer.prototype.writeUInt32BE),t}function u(t){return function(r,e){var n=r.reserve(2),i=r.buffer;i[n++]=t,i[n]=e}}function a(t){return function(r,e){var n=r.reserve(3),i=r.buffer;i[n++]=t,i[n++]=e>>>8,i[n]=e}}function s(t){return function(r,e){var n=r.reserve(5),i=r.buffer;i[n++]=t,i[n++]=e>>>24,i[n++]=e>>>16,i[n++]=e>>>8,i[n]=e}}function c(t,r,e,n){return function(i,o){var f=i.reserve(r+1);i.buffer[f++]=t,e.call(i.buffer,o,f,n)}}function h(t,r){new g(this,r,t)}function l(t,r){new b(this,r,t)}function p(t,r){y.write(this,t,r,!1,23,4)}function d(t,r){y.write(this,t,r,!1,52,8)}var y=t("ieee754"),v=t("int64-buffer"),g=v.Uint64BE,b=v.Int64BE,w=t("./write-uint8").uint8,E=t("./bufferish"),Buffer=E.global,A=E.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Buffer,m=A&&!Buffer.TYPED_ARRAY_SUPPORT,x=E.hasBuffer&&Buffer.prototype||{};e.getWriteToken=n},{"./bufferish":8,"./write-uint8":28,ieee754:32,"int64-buffer":33}],27:[function(t,r,e){function n(t){function r(t,r){var e=r?195:194;_[e](t,r)}function e(t,r){var e,n=0|r;return r!==n?(e=203,void _[e](t,r)):(e=-32<=n&&n<=127?255&n:0<=n?n<=255?204:n<=65535?205:206:-128<=n?208:-32768<=n?209:210,void _[e](t,n))}function n(t,r){var e=207;_[e](t,r.toArray())}function o(t,r){var e=211;_[e](t,r.toArray())}function v(t){return t<32?1:t<=255?2:t<=65535?3:5}function g(t){return t<32?1:t<=65535?3:5}function b(t){function r(r,e){var n=e.length,i=5+3*n;r.offset=r.reserve(i);var o=r.buffer,f=t(n),u=r.offset+f;n=s.write.call(o,e,u);var a=t(n);if(f!==a){var c=u+a-f,h=u+n;s.copy.call(o,o,c,u,h)}var l=1===a?160+n:a<=3?215+a:219;_[l](r,n),r.offset+=n}return r}function w(t,r){if(null===r)return A(t,r);if(I(r))return Y(t,r);if(i(r))return m(t,r);if(f.isUint64BE(r))return n(t,r);if(u.isInt64BE(r))return o(t,r);var e=t.codec.getExtPacker(r);return e&&(r=e(r)),r instanceof l?U(t,r):void D(t,r)}function E(t,r){return I(r)?k(t,r):void w(t,r)}function A(t,r){var e=192;_[e](t,r)}function m(t,r){var e=r.length,n=e<16?144+e:e<=65535?220:221;_[n](t,e);for(var i=t.codec.encode,o=0;o<e;o++)i(t,r[o])}function x(t,r){var e=r.length,n=e<255?196:e<=65535?197:198;_[n](t,e),t.send(r)}function B(t,r){x(t,new Uint8Array(r))}function U(t,r){var e=r.buffer,n=e.length,i=y[n]||(n<255?199:n<=65535?200:201);_[i](t,n),h[r.type](t),t.send(e)}function P(t,r){var e=Object.keys(r),n=e.length,i=n<16?128+n:n<=65535?222:223;_[i](t,n);var o=t.codec.encode;e.forEach(function(e){o(t,e),o(t,r[e])})}function R(t,r){if(!(r instanceof Map))return P(t,r);var e=r.size,n=e<16?128+e:e<=65535?222:223;_[n](t,e);var i=t.codec.encode;r.forEach(function(r,e,n){i(t,e),i(t,r)})}function k(t,r){var e=r.length,n=e<32?160+e:e<=65535?218:219;_[n](t,e),t.send(r)}var _=c.getWriteToken(t),T=t&&t.useraw,S=p&&t&&t.binarraybuffer,I=S?a.isArrayBuffer:a.isBuffer,Y=S?B:x,C=d&&t&&t.usemap,D=C?R:P,O={boolean:r,function:A,number:e,object:T?E:w,string:b(T?g:v),symbol:A,undefined:A};return O}var i=t("isarray"),o=t("int64-buffer"),f=o.Uint64BE,u=o.Int64BE,a=t("./bufferish"),s=t("./bufferish-proto"),c=t("./write-token"),h=t("./write-uint8").uint8,l=t("./ext-buffer").ExtBuffer,p="undefined"!=typeof Uint8Array,d="undefined"!=typeof Map,y=[];y[1]=212,y[2]=213,y[4]=214,y[8]=215,y[16]=216,e.getWriteType=n},{"./bufferish":8,"./bufferish-proto":6,"./ext-buffer":17,"./write-token":26,"./write-uint8":28,"int64-buffer":33,isarray:34}],28:[function(t,r,e){function n(t){return function(r){var e=r.reserve(1);r.buffer[e]=t}}for(var i=e.uint8=new Array(256),o=0;o<=255;o++)i[o]=n(o)},{}],29:[function(t,r,e){(function(r){"use strict";function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(i()<r)throw new RangeError("Invalid typed array length");return Buffer.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=Buffer.prototype):(null===t&&(t=new Buffer(r)),t.length=r),t}function Buffer(t,r,e){if(!(Buffer.TYPED_ARRAY_SUPPORT||this instanceof Buffer))return new Buffer(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return s(this,t)}return f(this,t,r,e)}function f(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?c(t,r,e):p(t,r)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return u(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function s(t,r){if(u(r),t=o(t,r<0?0:0|d(r)),!Buffer.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function c(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!Buffer.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e);t=o(t,n);var i=t.write(r,e);return i!==n&&(t=t.slice(0,i)),t}function h(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),Buffer.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=Buffer.prototype):t=h(t,r),t}function p(t,r){if(Buffer.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||H(r.length)?o(t,0):h(t,r);if("Buffer"===r.type&&Q(r.data))return h(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),Buffer.alloc(+t)}function v(t,r){if(Buffer.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return X(t).length;default:if(n)return q(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return k(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return R(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=Buffer.from(r,n)),Buffer.isBuffer(r))return 0===r.length?-1:E(t,r,e,n,i);if("number"==typeof r)return r=255&r,Buffer.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):E(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function E(t,r,e,n,i){function o(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}var f=1,u=t.length,a=r.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,a/=2,e/=2}var s;if(i){var c=-1;for(s=e;s<u;s++)if(o(t,s)===o(r,c===-1?0:s-c)){if(c===-1&&(c=s),s-c+1===a)return c*f}else c!==-1&&(s-=s-c),c=-1}else for(e+a>u&&(e=u-a),s=e;s>=0;s--){for(var h=!0,l=0;l<a;l++)if(o(t,s+l)!==o(r,l)){h=!1;break}if(h)return s}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function m(t,r,e,n){return G(q(r,t.length-e),t,e,n)}function x(t,r,e,n){return G(W(r),t,e,n)}function B(t,r,e,n){return x(t,r,e,n)}function U(t,r,e,n){return G(X(r),t,e,n)}function P(t,r,e,n){return G(J(r,t.length-e),t,e,n)}function R(t,r,e){return 0===r&&e===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(r,e))}function k(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o=t[i],f=null,u=o>239?4:o>223?3:o>191?2:1;if(i+u<=e){var a,s,c,h;switch(u){case 1:o<128&&(f=o);break;case 2:a=t[i+1],128===(192&a)&&(h=(31&o)<<6|63&a,h>127&&(f=h));break;case 3:a=t[i+1],s=t[i+2],128===(192&a)&&128===(192&s)&&(h=(15&o)<<12|(63&a)<<6|63&s,h>2047&&(h<55296||h>57343)&&(f=h));break;case 4:a=t[i+1],s=t[i+2],c=t[i+3],128===(192&a)&&128===(192&s)&&128===(192&c)&&(h=(15&o)<<18|(63&a)<<12|(63&s)<<6|63&c,h>65535&&h<1114112&&(f=h))}}null===f?(f=65533,u=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=u}return _(n)}function _(t){var r=t.length;if(r<=$)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=$));return e}function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function I(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=V(t[o]);return i}function Y(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function D(t,r,e,n,i,o){if(!Buffer.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function M(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,i){return i||M(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,r,e,n,23,4),e+4}function F(t,r,e,n,i){return i||M(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,r,e,n,52,8),e+8}function j(t){
if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return t<16?"0"+t.toString(16):t.toString(16)}function q(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],f=0;f<n;++f){if(e=t.charCodeAt(f),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function W(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function J(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function X(t){return Z.toByteArray(j(t))}function G(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function H(t){return t!==t}var Z=t("base64-js"),K=t("ieee754"),Q=t("isarray");e.Buffer=Buffer,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,Buffer.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=i(),Buffer.poolSize=8192,Buffer._augment=function(t){return t.__proto__=Buffer.prototype,t},Buffer.from=function(t,r,e){return f(null,t,r,e)},Buffer.TYPED_ARRAY_SUPPORT&&(Buffer.prototype.__proto__=Uint8Array.prototype,Buffer.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer&&Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})),Buffer.alloc=function(t,r,e){return a(null,t,r,e)},Buffer.allocUnsafe=function(t){return s(null,t)},Buffer.allocUnsafeSlow=function(t){return s(null,t)},Buffer.isBuffer=function(t){return!(null==t||!t._isBuffer)},Buffer.compare=function(t,r){if(!Buffer.isBuffer(t)||!Buffer.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,r){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=Buffer.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!Buffer.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},Buffer.byteLength=v,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)b(this,r,r+1);return this},Buffer.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)b(this,r,r+3),b(this,r+1,r+2);return this},Buffer.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)b(this,r,r+7),b(this,r+1,r+6),b(this,r+2,r+5),b(this,r+3,r+4);return this},Buffer.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?k(this,0,t):g.apply(this,arguments)},Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},Buffer.prototype.compare=function(t,r,e,n,i){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,f=e-r,u=Math.min(o,f),a=this.slice(n,i),s=t.slice(r,e),c=0;c<u;++c)if(a[c]!==s[c]){o=a[c],f=s[c];break}return o<f?-1:f<o?1:0},Buffer.prototype.includes=function(t,r,e){return this.indexOf(t,r,e)!==-1},Buffer.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},Buffer.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},Buffer.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r=0|r,isFinite(e)?(e=0|e,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return x(this,t,r,e);case"latin1":case"binary":return B(this,t,r,e);case"base64":return U(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;Buffer.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e,t<0&&(t=0)):t>e&&(t=e),r<0?(r+=e,r<0&&(r=0)):r>e&&(r=e),r<t&&(r=t);var n;if(Buffer.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=Buffer.prototype;else{var i=r-t;n=new Buffer(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},Buffer.prototype.readUIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},Buffer.prototype.readUIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},Buffer.prototype.readUInt8=function(t,r){return r||C(t,1,this.length),this[t]},Buffer.prototype.readUInt16LE=function(t,r){return r||C(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUInt16BE=function(t,r){return r||C(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUInt32LE=function(t,r){return r||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUInt32BE=function(t,r){return r||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},Buffer.prototype.readIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},Buffer.prototype.readInt8=function(t,r){return r||C(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},Buffer.prototype.readInt16LE=function(t,r){r||C(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt16BE=function(t,r){r||C(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt32LE=function(t,r){return r||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,r){return r||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readFloatLE=function(t,r){return r||C(t,4,this.length),K.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,r){return r||C(t,4,this.length),K.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,r){return r||C(t,8,this.length),K.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,r){return r||C(t,8,this.length),K.read(this,t,!1,52,8)},Buffer.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;D(this,t,r,e,i,0)}var o=1,f=0;for(this[r]=255&t;++f<e&&(o*=256);)this[r+f]=t/o&255;return r+e},Buffer.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;D(this,t,r,e,i,0)}var o=e-1,f=1;for(this[r+o]=255&t;--o>=0&&(f*=256);)this[r+o]=t/f&255;return r+e},Buffer.prototype.writeUInt8=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,1,255,0),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},Buffer.prototype.writeUInt16LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},Buffer.prototype.writeUInt16BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},Buffer.prototype.writeUInt32LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):L(this,t,r,!0),r+4},Buffer.prototype.writeUInt32BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},Buffer.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);D(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},Buffer.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);D(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},Buffer.prototype.writeInt8=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,1,127,-128),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},Buffer.prototype.writeInt16LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},Buffer.prototype.writeInt16BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},Buffer.prototype.writeInt32LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,2147483647,-2147483648),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):L(this,t,r,!0),r+4},Buffer.prototype.writeInt32BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},Buffer.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},Buffer.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},Buffer.prototype.writeDoubleLE=function(t,r,e){return F(this,t,r,!0,e)},Buffer.prototype.writeDoubleBE=function(t,r,e){return F(this,t,r,!1,e)},Buffer.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!Buffer.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},Buffer.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t=255&t);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var o;if("number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=Buffer.isBuffer(t)?t:q(new Buffer(t,n).toString()),u=f.length;for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":30,ieee754:32,isarray:34}],30:[function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var r,e,i,o,f,u,a=t.length;f=n(t),u=new h(3*a/4-f),i=f>0?a-4:a;var s=0;for(r=0,e=0;r<i;r+=4,e+=3)o=c[t.charCodeAt(r)]<<18|c[t.charCodeAt(r+1)]<<12|c[t.charCodeAt(r+2)]<<6|c[t.charCodeAt(r+3)],u[s++]=o>>16&255,u[s++]=o>>8&255,u[s++]=255&o;return 2===f?(o=c[t.charCodeAt(r)]<<2|c[t.charCodeAt(r+1)]>>4,u[s++]=255&o):1===f&&(o=c[t.charCodeAt(r)]<<10|c[t.charCodeAt(r+1)]<<4|c[t.charCodeAt(r+2)]>>2,u[s++]=o>>8&255,u[s++]=255&o),u}function f(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function u(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(f(n));return i.join("")}function a(t){for(var r,e=t.length,n=e%3,i="",o=[],f=16383,a=0,c=e-n;a<c;a+=f)o.push(u(t,a,a+f>c?c:a+f));return 1===n?(r=t[e-1],i+=s[r>>2],i+=s[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=s[r>>10],i+=s[r>>4&63],i+=s[r<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=i,e.toByteArray=o,e.fromByteArray=a;for(var s=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)s[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},{}],31:[function(t,r,e){function n(){if(!(this instanceof n))return new n}!function(t){function e(t){for(var r in s)t[r]=s[r];return t}function n(t,r){return u(this,t).push(r),this}function i(t,r){function e(){o.call(n,t,e),r.apply(this,arguments)}var n=this;return e.originalListener=r,u(n,t).push(e),n}function o(t,r){function e(t){return t!==r&&t.originalListener!==r}var n,i=this;if(arguments.length){if(r){if(n=u(i,t,!0)){if(n=n.filter(e),!n.length)return o.call(i,t);i[a][t]=n}}else if(n=i[a],n&&(delete n[t],!Object.keys(n).length))return o.call(i)}else delete i[a];return i}function f(t,r){function e(t){t.call(o)}function n(t){t.call(o,r)}function i(t){t.apply(o,s)}var o=this,f=u(o,t,!0);if(!f)return!1;var a=arguments.length;if(1===a)f.forEach(e);else if(2===a)f.forEach(n);else{var s=Array.prototype.slice.call(arguments,1);f.forEach(i)}return!!f.length}function u(t,r,e){if(!e||t[a]){var n=t[a]||(t[a]={});return n[r]||(n[r]=[])}}"undefined"!=typeof r&&(r.exports=t);var a="listeners",s={on:n,once:i,off:o,emit:f};e(t.prototype),t.mixin=e}(n)},{}],32:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,a=(1<<u)-1,s=a>>1,c=-7,h=e?i-1:0,l=e?-1:1,p=t[r+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+t[r+h],h+=l,c-=8);for(f=o&(1<<-c)-1,o>>=-c,c+=n;c>0;f=256*f+t[r+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===a)return f?NaN:(p?-1:1)*(1/0);f+=Math.pow(2,n),o-=s}return(p?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,a,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=c):(f=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-f))<1&&(f--,a*=2),r+=f+h>=1?l/a:l*Math.pow(2,1-h),r*a>=2&&(f++,a/=2),f+h>=c?(u=0,f=c):f+h>=1?(u=(r*a-1)*Math.pow(2,i),f+=h):(u=r*Math.pow(2,h-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&u,p+=d,u/=256,i-=8);for(f=f<<i|u,s+=i;s>0;t[e+p]=255&f,p+=d,f/=256,s-=8);t[e+p-d]|=128*y}},{}],33:[function(t,r,e){(function(Buffer){var t,r,n,i;!function(e){function o(t,r,n){function i(t,r,e,n){return this instanceof i?v(this,t,r,e,n):new i(t,r,e,n)}function o(t){return!(!t||!t[F])}function v(t,r,e,n,i){if(E&&A&&(r instanceof A&&(r=new E(r)),n instanceof A&&(n=new E(n))),!(r||e||n||g))return void(t.buffer=h(m,0));if(!s(r,e)){var o=g||Array;i=e,n=r,e=0,r=new o(8)}t.buffer=r,t.offset=e|=0,b!==typeof n&&("string"==typeof n?x(r,e,n,i||10):s(n,i)?c(r,e,n,i):"number"==typeof i?(k(r,e+T,n),k(r,e+S,i)):n>0?O(r,e,n):n<0?L(r,e,n):c(r,e,m,0))}function x(t,r,e,n){var i=0,o=e.length,f=0,u=0;"-"===e[0]&&i++;for(var a=i;i<o;){var s=parseInt(e[i++],n);if(!(s>=0))break;u=u*n+s,f=f*n+Math.floor(u/B),u%=B}a&&(f=~f,u?u=B-u:f++),k(t,r+T,f),k(t,r+S,u)}function P(){var t=this.buffer,r=this.offset,e=_(t,r+T),i=_(t,r+S);return n||(e|=0),e?e*B+i:i}function R(t){var r=this.buffer,e=this.offset,i=_(r,e+T),o=_(r,e+S),f="",u=!n&&2147483648&i;for(u&&(i=~i,o=B-o),t=t||10;;){var a=i%t*B+o;if(i=Math.floor(i/t),o=Math.floor(a/t),f=(a%t).toString(t)+f,!i&&!o)break}return u&&(f="-"+f),f}function k(t,r,e){t[r+D]=255&e,e>>=8,t[r+C]=255&e,e>>=8,t[r+Y]=255&e,e>>=8,t[r+I]=255&e}function _(t,r){return t[r+I]*U+(t[r+Y]<<16)+(t[r+C]<<8)+t[r+D]}var T=r?0:4,S=r?4:0,I=r?0:3,Y=r?1:2,C=r?2:1,D=r?3:0,O=r?l:d,L=r?p:y,M=i.prototype,N="is"+t,F="_"+N;return M.buffer=void 0,M.offset=0,M[F]=!0,M.toNumber=P,M.toString=R,M.toJSON=P,M.toArray=f,w&&(M.toBuffer=u),E&&(M.toArrayBuffer=a),i[N]=o,e[t]=i,i}function f(t){var r=this.buffer,e=this.offset;return g=null,t!==!1&&0===e&&8===r.length&&x(r)?r:h(r,e)}function u(t){var r=this.buffer,e=this.offset;if(g=w,t!==!1&&0===e&&8===r.length&&Buffer.isBuffer(r))return r;var n=new w(8);return c(n,0,r,e),n}function a(t){var r=this.buffer,e=this.offset,n=r.buffer;if(g=E,t!==!1&&0===e&&n instanceof A&&8===n.byteLength)return n;var i=new E(8);return c(i,0,r,e),i.buffer}function s(t,r){var e=t&&t.length;return r|=0,e&&r+8<=e&&"string"!=typeof t[r]}function c(t,r,e,n){r|=0,n|=0;for(var i=0;i<8;i++)t[r++]=255&e[n++]}function h(t,r){return Array.prototype.slice.call(t,r,r+8)}function l(t,r,e){for(var n=r+8;n>r;)t[--n]=255&e,e/=256}function p(t,r,e){var n=r+8;for(e++;n>r;)t[--n]=255&-e^255,e/=256}function d(t,r,e){for(var n=r+8;r<n;)t[r++]=255&e,e/=256}function y(t,r,e){var n=r+8;for(e++;r<n;)t[r++]=255&-e^255,e/=256}function v(t){return!!t&&"[object Array]"==Object.prototype.toString.call(t)}var g,b="undefined",w=b!==typeof Buffer&&Buffer,E=b!==typeof Uint8Array&&Uint8Array,A=b!==typeof ArrayBuffer&&ArrayBuffer,m=[0,0,0,0,0,0,0,0],x=Array.isArray||v,B=4294967296,U=16777216;t=o("Uint64BE",!0,!0),r=o("Int64BE",!0,!1),n=o("Uint64LE",!1,!0),i=o("Int64LE",!1,!1)}("object"==typeof e&&"string"!=typeof e.nodeName?e:this||{})}).call(this,t("buffer").Buffer)},{buffer:29}],34:[function(t,r,e){var n={}.toString;r.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},{}]},{},[1])(1)});

let lastSend = +new Date;
let lastRequests = [];
window.WebSocket.prototype.send = new Proxy(window.WebSocket.prototype.send, {
  apply: function() {
    let decoded = msgpack.decode(new Uint8Array(arguments[2][0]))

    console.log(+new Date - lastSend, lastRequests.length, decoded)
    if ( +new Date - lastSend > 500 ) (lastRequests = [], lastSend = +new Date);
    if ( lastRequests.length > 45 && decoded[0] != 'pp') return console.log("[Peadox]: Anti kick Stopped client from sending request");
    decoded[0] != 'pp' && lastRequests.push(decoded)

    return Reflect.apply(...arguments)
  }
})
!function (modules) {
    /* (webpack)/bootstrap */
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function (exports) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(exports, '__esModule', { value: !0 });
    }, __webpack_require__.t = function (value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode)
            return value;
        if (4 & mode && 'object' == typeof value && value && value.__esModule)
            return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, 'default', {
                enumerable: !0,
                value: value
            }), 2 & mode && 'string' != typeof value)
            for (var key in value)
                __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function () {
            return module.default;
        } : function () {
            return module;
        };
        return __webpack_require__.d(getter, 'a', getter), getter;
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = '', __webpack_require__(__webpack_require__.s = 2);
}([
    function (module, t, i) {
        /* 0: ./src/js/config.js */
        (function (process) {
            module.exports.maxScreenWidth = 1920, module.exports.maxScreenHeight = 1080, module.exports.serverUpdateRate = 9, module.exports.maxPlayers = process && -1 != process.argv.indexOf('--largeserver') ? 80 : 40, module.exports.maxPlayersHard = module.exports.maxPlayers + 10, module.exports.collisionDepth = 6, module.exports.minimapRate = 3000, module.exports.colGrid = 10, module.exports.clientSendRate = 5, module.exports.healthBarWidth = 50, module.exports.healthBarPad = 4.5, module.exports.iconPadding = 15, module.exports.iconPad = 0.9, module.exports.deathFadeout = 3000, module.exports.crownIconScale = 60, module.exports.crownPad = 35, module.exports.chatCountdown = 3000, module.exports.chatCooldown = 500, module.exports.inSandbox = process && 'mm_exp' === process.env.VULTR_SCHEME, module.exports.maxAge = 100, module.exports.gatherAngle = Math.PI / 2.6, module.exports.gatherWiggle = 10, module.exports.hitReturnRatio = 0.25, module.exports.hitAngle = Math.PI / 2, module.exports.playerScale = 35, module.exports.playerSpeed = 0.0016, module.exports.playerDecel = 0.993, module.exports.nameY = 34, module.exports.skinColors = [
                '#bf8f54',
                '#cbb091',
                '#896c4b',
                '#fadadc',
                '#ececec',
                '#c37373',
                '#4c4c4c',
                '#ecaff7',
                '#738cc3',
                '#8bc373'
            ], module.exports.animalCount = 7, module.exports.aiTurnRandom = 0.06, module.exports.cowNames = [
                'Sid',
                'Steph',
                'Bmoe',
                'Romn',
                'Jononthecool',
                'Fiona',
                'Vince',
                'Nathan',
                'Nick',
                'Flappy',
                'Ronald',
                'Otis',
                'Pepe',
                'Mc Donald',
                'Theo',
                'Fabz',
                'Oliver',
                'Jeff',
                'Jimmy',
                'Helena',
                'Reaper',
                'Ben',
                'Alan',
                'Naomi',
                'XYZ',
                'Clever',
                'Jeremy',
                'Mike',
                'Destined',
                'Stallion',
                'Allison',
                'Meaty',
                'Sophia',
                'Vaja',
                'Joey',
                'Pendy',
                'Murdoch',
                'Theo',
                'Jared',
                'July',
                'Sonia',
                'Mel',
                'Dexter',
                'Quinn',
                'Milky'
            ], module.exports.shieldAngle = Math.PI / 3, module.exports.weaponVariants = [
                {
                    id: 0,
                    src: '',
                    xp: 0,
                    val: 1
                },
                {
                    id: 1,
                    src: '_g',
                    xp: 3000,
                    val: 1.1
                },
                {
                    id: 2,
                    src: '_d',
                    xp: 7000,
                    val: 1.18
                },
                {
                    id: 3,
                    src: '_r',
                    poison: !0,
                    xp: 12000,
                    val: 1.18
                }
            ], module.exports.fetchVariant = function (player) {
                for (var tmpXP = player.weaponXP[player.weaponIndex] || 0, i = module.exports.weaponVariants.length - 1; i >= 0; --i)
                    if (tmpXP >= module.exports.weaponVariants[i].xp)
                        return module.exports.weaponVariants[i];
            }, module.exports.resourceTypes = [
                'wood',
                'food',
                'stone',
                'points'
            ], module.exports.areaCount = 7, module.exports.treesPerArea = 9, module.exports.bushesPerArea = 3, module.exports.totalRocks = 32, module.exports.goldOres = 7, module.exports.riverWidth = 724, module.exports.riverPadding = 114, module.exports.waterCurrent = 0.0011, module.exports.waveSpeed = 0.0001, module.exports.waveMax = 1.3, module.exports.treeScales = [
                150,
                160,
                165,
                175
            ], module.exports.bushScales = [
                80,
                85,
                95
            ], module.exports.rockScales = [
                80,
                85,
                90
            ], module.exports.snowBiomeTop = 2400, module.exports.snowSpeed = 0.75, module.exports.maxNameLength = 15, module.exports.mapScale = 14400, module.exports.mapPingScale = 40, module.exports.mapPingTime = 2200;
        }.call(this, i(5)));
    },
    function (module, t) {
        /* 1: ./node_modules/charenc/charenc.js */
        var charenc = {
            utf8: {
                stringToBytes: function (str) {
                    return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
                },
                bytesToString: function (bytes) {
                    return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
                }
            },
            bin: {
                stringToBytes: function (str) {
                    for (var bytes = [], i = 0; i < str.length; i++)
                        bytes.push(255 & str.charCodeAt(i));
                    return bytes;
                },
                bytesToString: function (bytes) {
                    for (var str = [], i = 0; i < bytes.length; i++)
                        str.push(String.fromCharCode(bytes[i]));
                    return str.join('');
                }
            }
        };
        module.exports = charenc;
    },
    function (e, t, __webpack_require__) {
        /* 2: ./src/js/app.js */
        'use strict';
        window.loadedScript = !0;
        var isProd = '127.0.0.1' !== location.hostname && !location.hostname.startsWith('192.168.');
        __webpack_require__(3);
        var io = __webpack_require__(4), UTILS = __webpack_require__(6), animText = __webpack_require__(7), config = __webpack_require__(0), GameObject = __webpack_require__(8), items = __webpack_require__(9), ObjectManager = (__webpack_require__(10), __webpack_require__(11)), Player = __webpack_require__(12), store = __webpack_require__(19), Projectile = __webpack_require__(20), ProjectileManager = __webpack_require__(21), SoundManager = __webpack_require__(22).obj, textManager = new animText.TextManager(), vultrClient = new (__webpack_require__(23))('moomoo.io', 3000, config.maxPlayers, 5, !1);
        vultrClient.debugLog = !1;
        var startedConnecting = !1;
        function connectSocketIfReady() {
            didLoad && captchaReady && (startedConnecting = !0, isProd ? window.grecaptcha.execute('6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ', { action: 'homepage' }).then(function (token) {
                connectSocket(token);
            }) : connectSocket(null));
        }
        function connectSocket(token) {
            vultrClient.start(function (address, port, gameIndex) {
                var wsAddress = (isProd ? 'wss' : 'ws') + '://' + address + ':8008/?gameIndex=' + gameIndex;
                token && (wsAddress += '&token=' + encodeURIComponent(token)), io.connect(wsAddress, function (error) {
                    pingSocket(), setInterval(() => pingSocket(), 2500), error ? disconnect(error) : (enterGameButton.onclick = UTILS.checkTrusted(function () {
                        !function () {
                            var validGame = ++preAdGameCount > 1, validTime = Date.now() - preAdLastShowTime > preAdInterval;
                            validGame && validTime ? (preAdLastShowTime = Date.now(), showPreAd()) : enterGame();
                        }();
                    }), UTILS.hookTouchEvents(enterGameButton), promoImageButton.onclick = UTILS.checkTrusted(function () {
                        openLink('https://krunker.io/?play=SquidGame_KB');
                    }), UTILS.hookTouchEvents(promoImageButton), joinPartyButton.onclick = UTILS.checkTrusted(function () {
                        setTimeout(function () {
                            !function () {
                                var currentKey = serverBrowser.value, key = prompt('party key', currentKey);
                                key && (window.onbeforeunload = void 0, window.location.href = '/?server=' + key);
                            }();
                        }, 10);
                    }), UTILS.hookTouchEvents(joinPartyButton), settingsButton.onclick = UTILS.checkTrusted(function () {
                        guideCard.classList.contains('showing') ? (guideCard.classList.remove('showing'), settingsButtonTitle.innerText = 'Settings') : (guideCard.classList.add('showing'), settingsButtonTitle.innerText = 'Close');
                    }), UTILS.hookTouchEvents(settingsButton), allianceButton.onclick = UTILS.checkTrusted(function () {
                        resetMoveDir(), 'block' != allianceMenu.style.display ? showAllianceMenu() : allianceMenu.style.display = 'none';
                    }), UTILS.hookTouchEvents(allianceButton), storeButton.onclick = UTILS.checkTrusted(function () {
                        'block' != storeMenu.style.display ? (storeMenu.style.display = 'block', allianceMenu.style.display = 'none', closeChat(), generateStoreList()) : storeMenu.style.display = 'none';
                    }), UTILS.hookTouchEvents(storeButton), chatButton.onclick = UTILS.checkTrusted(function () {
                        toggleChat();
                    }), UTILS.hookTouchEvents(chatButton), mapDisplay.onclick = UTILS.checkTrusted(function () {
                        sendMapPing();
                    }), UTILS.hookTouchEvents(mapDisplay), function () {
                        for (var i = 0; i < icons.length; ++i) {
                            var tmpSprite = new Image();
                            tmpSprite.onload = function () {
                                this.isLoaded = !0;
                            }, tmpSprite.src = '.././img/icons/' + icons[i] + '.png', iconSprites[icons[i]] = tmpSprite;
                        }
                    }(), loadingText.style.display = 'none', menuCardHolder.style.display = 'block', nameInput.value = getSavedVal('moo_name') || '', function () {
                        var savedNativeValue = getSavedVal('native_resolution');
                        setUseNativeResolution(savedNativeValue ? 'true' == savedNativeValue : 'undefined' != typeof cordova), showPing = 'true' == getSavedVal('show_ping'), pingDisplay.hidden = !showPing, getSavedVal('moo_moosic'), setInterval(function () {
                            window.cordova && (document.getElementById('downloadButtonContainer').classList.add('cordova'), document.getElementById('mobileDownloadButtonContainer').classList.add('cordova'));
                        }, 1000), updateSkinColorPicker(), UTILS.removeAllChildren(actionBar);
                        for (var i = 0; i < items.weapons.length + items.list.length; ++i)
                            !function (i) {
                                UTILS.generateElement({
                                    id: 'actionBarItem' + i,
                                    class: 'actionBarItem',
                                    style: 'display:none',
                                    onmouseout: function () {
                                        showItemInfo();
                                    },
                                    parent: actionBar
                                });
                            }(i);
                        for (i = 0; i < items.list.length + items.weapons.length; ++i)
                            !function (i) {
                                var tmpCanvas = document.createElement('canvas');
                                tmpCanvas.width = tmpCanvas.height = 66;
                                var tmpContext = tmpCanvas.getContext('2d');
                                if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.imageSmoothingEnabled = !1, tmpContext.webkitImageSmoothingEnabled = !1, tmpContext.mozImageSmoothingEnabled = !1, items.weapons[i]) {
                                    tmpContext.rotate(Math.PI / 4 + Math.PI);
                                    var tmpSprite = new Image();
                                    toolSprites[items.weapons[i].src] = tmpSprite, tmpSprite.onload = function () {
                                        this.isLoaded = !0;
                                        var tmpPad = 1 / (this.height / this.width), tmpMlt = items.weapons[i].iPad || 1;
                                        tmpContext.drawImage(this, -tmpCanvas.width * tmpMlt * config.iconPad * tmpPad / 2, -tmpCanvas.height * tmpMlt * config.iconPad / 2, tmpCanvas.width * tmpMlt * tmpPad * config.iconPad, tmpCanvas.height * tmpMlt * config.iconPad), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height), document.getElementById('actionBarItem' + i).style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')';
                                    }, tmpSprite.src = '.././img/weapons/' + items.weapons[i].src + '.png', (tmpUnit = document.getElementById('actionBarItem' + i)).onmouseover = UTILS.checkTrusted(function () {
                                        showItemInfo(items.weapons[i], !0);
                                    }), tmpUnit.onclick = UTILS.checkTrusted(function () {
                                        selectToBuild(i, !0);
                                    }), UTILS.hookTouchEvents(tmpUnit);
                                } else {
                                    tmpSprite = getItemSprite(items.list[i - items.weapons.length], !0);
                                    var tmpUnit, tmpScale = Math.min(tmpCanvas.width - config.iconPadding, tmpSprite.width);
                                    tmpContext.globalAlpha = 1, tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), document.getElementById('actionBarItem' + i).style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')', (tmpUnit = document.getElementById('actionBarItem' + i)).onmouseover = UTILS.checkTrusted(function () {
                                        showItemInfo(items.list[i - items.weapons.length]);
                                    }), tmpUnit.onclick = UTILS.checkTrusted(function () {
                                        selectToBuild(i - items.weapons.length);
                                    }), UTILS.hookTouchEvents(tmpUnit);
                                }
                            }(i);
                        nameInput.ontouchstart = UTILS.checkTrusted(function (e) {
                            e.preventDefault();
                            var newValue = prompt('enter name', e.currentTarget.value);
                            newValue && (e.currentTarget.value = newValue.slice(0, 15));
                        }), nativeResolutionCheckbox.checked = useNativeResolution, nativeResolutionCheckbox.onchange = UTILS.checkTrusted(function (e) {
                            setUseNativeResolution(e.target.checked);
                        }), showPingCheckbox.checked = showPing, showPingCheckbox.onchange = UTILS.checkTrusted(function (e) {
                            showPing = showPingCheckbox.checked, pingDisplay.hidden = !showPing, saveVal('show_ping', showPing ? 'true' : 'false');
                        });
                    }());
                }, {
                    id: setInitData,
                    d: disconnect,
                    1: setupGame,
                    2: addPlayer,
                    4: removePlayer,
                    33: updatePlayers,
                    5: updateLeaderboard,
                    6: loadGameObject,
                    a: loadAI,
                    aa: animateAI,
                    7: gatherAnimation,
                    8: wiggleGameObject,
                    sp: shootTurret,
                    9: updatePlayerValue,
                    h: updateHealth,
                    11: killPlayer,
                    12: killObject,
                    13: killObjects,
                    14: updateItemCounts,
                    15: updateAge,
                    16: updateUpgrades,
                    17: updateItems,
                    18: addProjectile,
                    19: remProjectile,
                    20: serverShutdownNotice,
                    ac: addAlliance,
                    ad: deleteAlliance,
                    an: allianceNotification,
                    st: setPlayerTeam,
                    sa: setAlliancePlayers,
                    us: updateStoreItems,
                    ch: receiveChat,
                    mm: updateMinimap,
                    t: showText,
                    p: pingMap,
                    pp: pingSocketResponse
                }), setupServerStatus(), setTimeout(() => updateServerList(), 3000);
            }, function (error) {
                console.error('Vultr error:', error), alert('Error:\n' + error), disconnect('disconnected');
            });
        }
        var canStore, Sound = new SoundManager(config, UTILS), mathPI = Math.PI, mathPI2 = 2 * mathPI;
        function saveVal(name, val) {
            canStore && localStorage.setItem(name, val);
        }
        function getSavedVal(name) {
            return canStore ? localStorage.getItem(name) : null;
        }
        Math.lerpAngle = function (value1, value2, amount) {
            Math.abs(value2 - value1) > mathPI && (value1 > value2 ? value2 += mathPI2 : value1 += mathPI2);
            var value = value2 + (value1 - value2) * amount;
            return value >= 0 && value <= mathPI2 ? value : value % mathPI2;
        }, CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
            return w < 2 * r && (r = w / 2), h < 2 * r && (r = h / 2), r < 0 && (r = 0), this.beginPath(), this.moveTo(x + r, y), this.arcTo(x + w, y, x + w, y + h, r), this.arcTo(x + w, y + h, x, y + h, r), this.arcTo(x, y + h, x, y, r), this.arcTo(x, y, x + w, y, r), this.closePath(), this;
        }, 'undefined' != typeof Storage && (canStore = !0);
        var useNativeResolution, showPing, delta, now, lastSent, attackState, player, playerSID, tmpObj, camX, camY, tmpDir, screenWidth, screenHeight, moofoll = getSavedVal('moofoll'), pixelDensity = 1, lastUpdate = Date.now(), ais = [], players = [], alliances = [], gameObjects = [], projectiles = [], projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS), AiManager = __webpack_require__(35), AI = __webpack_require__(36), aiManager = new AiManager(ais, AI, players, items, null, config, UTILS), waterMult = 1, waterPlus = 0, mouseX = 0, mouseY = 0, controllingTouch = {
                id: -1,
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0
            }, attackingTouch = {
                id: -1,
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0
            }, skinColor = 0, maxScreenWidth = config.maxScreenWidth, maxScreenHeight = config.maxScreenHeight, inGame = !1, mainMenu = (document.getElementById('ad-container'), document.getElementById('mainMenu')), enterGameButton = document.getElementById('enterGame'), promoImageButton = document.getElementById('promoImg'), partyButton = document.getElementById('partyButton'), joinPartyButton = document.getElementById('joinPartyButton'), settingsButton = document.getElementById('settingsButton'), settingsButtonTitle = settingsButton.getElementsByTagName('span')[0], allianceButton = document.getElementById('allianceButton'), storeButton = document.getElementById('storeButton'), chatButton = document.getElementById('chatButton'), gameCanvas = document.getElementById('gameCanvas'), mainContext = gameCanvas.getContext('2d'), serverBrowser = document.getElementById('serverBrowser'), nativeResolutionCheckbox = document.getElementById('nativeResolution'), showPingCheckbox = document.getElementById('showPing'), pingDisplay = (document.getElementById('playMusic'), document.getElementById('pingDisplay')), shutdownDisplay = document.getElementById('shutdownDisplay'), menuCardHolder = document.getElementById('menuCardHolder'), guideCard = document.getElementById('guideCard'), loadingText = document.getElementById('loadingText'), gameUI = document.getElementById('gameUI'), actionBar = document.getElementById('actionBar'), scoreDisplay = document.getElementById('scoreDisplay'), foodDisplay = document.getElementById('foodDisplay'), woodDisplay = document.getElementById('woodDisplay'), stoneDisplay = document.getElementById('stoneDisplay'), killCounter = document.getElementById('killCounter'), leaderboardData = document.getElementById('leaderboardData'), nameInput = document.getElementById('nameInput'), itemInfoHolder = document.getElementById('itemInfoHolder'), ageText = document.getElementById('ageText'), ageBarBody = document.getElementById('ageBarBody'), upgradeHolder = document.getElementById('upgradeHolder'), upgradeCounter = document.getElementById('upgradeCounter'), allianceMenu = document.getElementById('allianceMenu'), allianceHolder = document.getElementById('allianceHolder'), allianceManager = document.getElementById('allianceManager'), mapDisplay = document.getElementById('mapDisplay'), diedText = document.getElementById('diedText'), skinColorHolder = document.getElementById('skinColorHolder'), mapContext = mapDisplay.getContext('2d');
        mapDisplay.width = 300, mapDisplay.height = 300;
        var storeMenu = document.getElementById('storeMenu'), storeHolder = document.getElementById('storeHolder'), noticationDisplay = document.getElementById('noticationDisplay'), hats = store.hats, accessories = store.accessories, objectManager = new ObjectManager(GameObject, gameObjects, UTILS, config), outlineColor = '#525252', darkOutlineColor = '#3d3f42';
        function setInitData(data) {
            alliances = data.teams;
        }
        var featuredYoutuber = document.getElementById('featuredYoutube'), youtuberList = [
                {
                    name: 'Corrupt X',
                    link: 'https://www.youtube.com/channel/UC0UH2LfQvBSeH24bmtbmITw'
                },
                {
                    name: 'Tweak Big',
                    link: 'https://www.youtube.com/channel/UCbwvzJ38AndDTkoX8sD9YOw'
                },
                {
                    name: 'Arena Closer',
                    link: 'https://www.youtube.com/channel/UCazucVSJqW-kiHMIhQhD-QQ'
                },
                {
                    name: 'Godenot',
                    link: 'https://www.youtube.com/user/SirGodenot'
                },
                {
                    name: 'RajNoobTV',
                    link: 'https://www.youtube.com/channel/UCVLo9brXBWrCttMaGzvm0-Q'
                },
                {
                    name: 'TomNotTom',
                    link: 'https://www.youtube.com/channel/UC7z97RgHFJRcv2niXgArBDw'
                },
                {
                    name: 'Nation',
                    link: 'https://www.youtube.com/channel/UCSl-MBn3qzjrIvLNESQRk-g'
                },
                {
                    name: 'Pidyohago',
                    link: 'https://www.youtube.com/channel/UC04p8Mg8nDaDx04A9is2B8Q'
                },
                {
                    name: 'Enigma',
                    link: 'https://www.youtube.com/channel/UC5HhLbs3sReHo8Bb9NDdFrg'
                },
                {
                    name: 'Bauer',
                    link: 'https://www.youtube.com/channel/UCwU2TbJx3xTSlPqg-Ix3R1g'
                },
                {
                    name: 'iStealth',
                    link: 'https://www.youtube.com/channel/UCGrvlEOsQFViZbyFDE6t69A'
                },
                {
                    name: 'SICKmania',
                    link: 'https://www.youtube.com/channel/UCvVI98ezn4TpX5wDMZjMa3g'
                },
                {
                    name: 'LightThief',
                    link: 'https://www.youtube.com/channel/UCj6C_tiDeATiKd3GX127XoQ'
                },
                {
                    name: 'Fortish',
                    link: 'https://www.youtube.com/channel/UCou6CLU-szZA3Tb340TB9_Q'
                },
                {
                    name: '巧克力',
                    link: 'https://www.youtube.com/channel/UCgL6J6oL8F69vm-GcPScmwg'
                },
                {
                    name: 'i Febag',
                    link: 'https://www.youtube.com/channel/UCiU6WZwiKbsnt5xmwr0OFbg'
                },
                {
                    name: 'GoneGaming',
                    link: 'https://www.youtube.com/channel/UCOcQthRanYcwYY0XVyVeK0g'
                }
            ], tmpYoutuber = youtuberList[UTILS.randInt(0, youtuberList.length - 1)];
        featuredYoutuber.innerHTML = '<a target=\'_blank\' class=\'ytLink\' href=\'' + tmpYoutuber.link + '\'><i class=\'material-icons\' style=\'vertical-align: top;\'>&#xE064;</i> ' + tmpYoutuber.name + '</a>';
        var inWindow = !0, didLoad = !1, captchaReady = !1;
        function disconnect(reason) {
            io.close(), showLoadingText(reason);
        }
        function showLoadingText(text) {
            mainMenu.style.display = 'block', gameUI.style.display = 'none', menuCardHolder.style.display = 'none', diedText.style.display = 'none', loadingText.style.display = 'block', loadingText.innerHTML = text + '<a href=\'javascript:window.location.href=window.location.href\' class=\'ytLink\'>reload</a>';
        }
        window.onblur = function () {
            inWindow = !1;
        }, window.onfocus = function () {
            inWindow = !0, player && player.alive && resetMoveDir();
        }, window.onload = function () {
            didLoad = !0, connectSocketIfReady(), setTimeout(function () {
                startedConnecting || (alert('Captcha failed to load'), window.location.reload());
            }, 20000);
        }, window.captchaCallback = function () {
            captchaReady = !0, connectSocketIfReady();
        }, gameCanvas.oncontextmenu = function () {
            return !1;
        };
        function setupServerStatus() {
            var altServerText, altServerURL, tmpHTML = '', overallTotal = 0;
            for (var region in vultrClient.servers) {
                for (var serverList = vultrClient.servers[region], totalPlayers = 0, i = 0; i < serverList.length; i++)
                    for (var j = 0; j < serverList[i].games.length; j++)
                        totalPlayers += serverList[i].games[j].playerCount;
                overallTotal += totalPlayers;
                var regionName = vultrClient.regionInfo[region].name;
                tmpHTML += '<option disabled>' + regionName + ' - ' + totalPlayers + ' players</option>';
                for (var serverIndex = 0; serverIndex < serverList.length; serverIndex++)
                    for (var server = serverList[serverIndex], gameIndex = 0; gameIndex < server.games.length; gameIndex++) {
                        var game = server.games[gameIndex], adjustedIndex = 1 * server.index + gameIndex + 1, isSelected = vultrClient.server && vultrClient.server.region === server.region && vultrClient.server.index === server.index && vultrClient.gameIndex == gameIndex, serverLabel = regionName + ' ' + adjustedIndex + ' [' + Math.min(game.playerCount, config.maxPlayers) + '/' + config.maxPlayers + ']';
                        let altServerText = vultrClient.stripRegion(region) + ':' + serverIndex + ':' + gameIndex;
                        isSelected && (partyButton.getElementsByTagName('span')[0].innerText = altServerText), tmpHTML += '<option value=\'' + altServerText + '\' ' + (isSelected ? 'selected' : '') + '>' + serverLabel + '</option>';
                    }
                tmpHTML += '<option disabled></option>';
            }
            tmpHTML += '<option disabled>All Servers - ' + overallTotal + ' players</option>', serverBrowser.innerHTML = tmpHTML, 'sandbox.moomoo.io' == location.hostname ? (altServerText = 'Back to MooMoo', altServerURL = '//moomoo.io/') : (altServerText = 'Try the sandbox', altServerURL = '//sandbox.moomoo.io/'), document.getElementById('altServer').innerHTML = '<a href=\'' + altServerURL + '\'>' + altServerText + '<i class=\'material-icons\' style=\'font-size:10px;vertical-align:middle\'>arrow_forward_ios</i></a>';
        }
        function updateServerList() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(this.responseText), vultrClient.processServers(vultr.servers), setupServerStatus()) : console.error('Failed to load server data with status code:', this.status));
            }, xmlhttp.open('GET', '/serverData', !0), xmlhttp.send();
        }
        serverBrowser.addEventListener('change', UTILS.checkTrusted(function () {
            let parts = serverBrowser.value.split(':');
            vultrClient.switchServer(parts[0], parts[1], parts[2]);
        }));
        var preAdInterval = 300000, preAdLastShowTime = 0, preAdGameCount = 0;
        function showPreAd() {
            if (!window.adsbygoogle)
                return console.log('Failed to load video ad API'), void enterGame();
            window.adsbygoogle.push({
                type: 'next',
                adBreakDone: () => {
                    enterGame();
                }
            });
        }
        function showItemInfo(item, isWeapon, isStoreItem) {
            if (player && item)
                if (UTILS.removeAllChildren(itemInfoHolder), itemInfoHolder.classList.add('visible'), UTILS.generateElement({
                        id: 'itemInfoName',
                        text: UTILS.capitalizeFirst(item.name),
                        parent: itemInfoHolder
                    }), UTILS.generateElement({
                        id: 'itemInfoDesc',
                        text: item.desc,
                        parent: itemInfoHolder
                    }), isStoreItem);
                else if (isWeapon)
                    UTILS.generateElement({
                        class: 'itemInfoReq',
                        text: item.type ? 'secondary' : 'primary',
                        parent: itemInfoHolder
                    });
                else {
                    for (var i = 0; i < item.req.length; i += 2)
                        UTILS.generateElement({
                            class: 'itemInfoReq',
                            html: item.req[i] + '<span class=\'itemInfoReqVal\'> x' + item.req[i + 1] + '</span>',
                            parent: itemInfoHolder
                        });
                    item.group.limit && UTILS.generateElement({
                        class: 'itemInfoLmt',
                        text: (player.itemCounts[item.group.id] || 0) + '/' + item.group.limit,
                        parent: itemInfoHolder
                    });
                }
            else
                itemInfoHolder.classList.remove('visible');
        }
        window.adsbygoogle && adsbygoogle.push({ preloadAdBreaks: 'on' }), window.showPreAd = showPreAd;
        var lastDeath, minimapData, mapMarker, allianceNotifications = [], alliancePlayers = [];
        window.isAlly = function(id){
            for(let i = 0;i < alliancePlayers.length;i+=2){
                if(id == alliancePlayers[i]){
                    return true;
                }
            }
        }
        function allianceNotification(sid, name) {
            allianceNotifications.push({
                sid: sid,
                name: name
            }), updateNotifications();
        }
        function updateNotifications() {
            if (allianceNotifications[0]) {
                var tmpN = allianceNotifications[0];
                UTILS.removeAllChildren(noticationDisplay), noticationDisplay.style.display = 'block', UTILS.generateElement({
                    class: 'notificationText',
                    text: tmpN.name,
                    parent: noticationDisplay
                }), UTILS.generateElement({
                    class: 'notifButton',
                    html: '<i class=\'material-icons\' style=\'font-size:28px;color:#cc5151;\'>&#xE14C;</i>',
                    parent: noticationDisplay,
                    onclick: function () {
                        aJoinReq(0);
                    },
                    hookTouch: !0
                }), UTILS.generateElement({
                    class: 'notifButton',
                    html: '<i class=\'material-icons\' style=\'font-size:28px;color:#8ecc51;\'>&#xE876;</i>',
                    parent: noticationDisplay,
                    onclick: function () {
                        aJoinReq(1);
                    },
                    hookTouch: !0
                });
            } else
                noticationDisplay.style.display = 'none';
        }
        function addAlliance(data) {
            alliances.push(data), 'block' == allianceMenu.style.display && showAllianceMenu();
        }
        function setPlayerTeam(team, isOwner) {
            player && (player.team = team, player.isOwner = isOwner, 'block' == allianceMenu.style.display && showAllianceMenu());
        }
        function setAlliancePlayers(data) {
            alliancePlayers = data, 'block' == allianceMenu.style.display && showAllianceMenu();
        }
        function deleteAlliance(sid) {
            for (var i = alliances.length - 1; i >= 0; i--)
                alliances[i].sid == sid && alliances.splice(i, 1);
            'block' == allianceMenu.style.display && showAllianceMenu();
        }
        function showAllianceMenu() {
            if (player && player.alive) {
                if (closeChat(), storeMenu.style.display = 'none', allianceMenu.style.display = 'block', UTILS.removeAllChildren(allianceHolder), player.team)
                    for (var i = 0; i < alliancePlayers.length; i += 2)
                        !function (i) {
                            var tmp = UTILS.generateElement({
                                class: 'allianceItem',
                                style: 'color:' + (alliancePlayers[i] == player.sid ? '#fff' : 'rgba(255,255,255,0.6)'),
                                text: alliancePlayers[i + 1],
                                parent: allianceHolder
                            });
                            player.isOwner && alliancePlayers[i] != player.sid && UTILS.generateElement({
                                class: 'joinAlBtn',
                                text: 'Kick',
                                onclick: function () {
                                    kickFromClan(alliancePlayers[i]);
                                },
                                hookTouch: !0,
                                parent: tmp
                            });
                        }(i);
                else if (alliances.length)
                    for (i = 0; i < alliances.length; ++i)
                        !function (i) {
                            var tmp = UTILS.generateElement({
                                class: 'allianceItem',
                                style: 'color:' + (alliances[i].sid == player.team ? '#fff' : 'rgba(255,255,255,0.6)'),
                                text: alliances[i].sid,
                                parent: allianceHolder
                            });
                            UTILS.generateElement({
                                class: 'joinAlBtn',
                                text: 'Join',
                                onclick: function () {
                                    sendJoin(i);
                                },
                                hookTouch: !0,
                                parent: tmp
                            });
                        }(i);
                else
                    UTILS.generateElement({
                        class: 'allianceItem',
                        text: 'No Tribes Yet',
                        parent: allianceHolder
                    });
                UTILS.removeAllChildren(allianceManager), player.team ? UTILS.generateElement({
                    class: 'allianceButtonM',
                    style: 'width: 360px',
                    text: player.isOwner ? 'Delete Tribe' : 'Leave Tribe',
                    onclick: function () {
                        leaveAlliance();
                    },
                    hookTouch: !0,
                    parent: allianceManager
                }) : (UTILS.generateElement({
                    tag: 'input',
                    type: 'text',
                    id: 'allianceInput',
                    maxLength: 7,
                    placeholder: 'unique name',
                    ontouchstart: function (ev) {
                        ev.preventDefault();
                        var newValue = prompt('unique name', ev.currentTarget.value);
                        ev.currentTarget.value = newValue.slice(0, 7);
                    },
                    parent: allianceManager
                }), UTILS.generateElement({
                    tag: 'div',
                    class: 'allianceButtonM',
                    style: 'width: 140px;',
                    text: 'Create',
                    onclick: function () {
                        createAlliance();
                    },
                    hookTouch: !0,
                    parent: allianceManager
                }));
            }
        }
        function aJoinReq(join) {
            io.send('11', allianceNotifications[0].sid, join), allianceNotifications.splice(0, 1), updateNotifications();
        }
        function kickFromClan(sid) {
            io.send('12', sid);
        }
        function sendJoin(index) {
            io.send('10', alliances[index].sid);
        }
        function createAlliance() {
            io.send('8', document.getElementById('allianceInput').value);
        }
        function leaveAlliance() {
            allianceNotifications = [], updateNotifications(), io.send('9');
        }
        var tmpPing, mapPings = [];
        function pingMap(x, y) {
            for (var i = 0; i < mapPings.length; ++i)
                if (!mapPings[i].active) {
                    tmpPing = mapPings[i];
                    break;
                }
            tmpPing || (tmpPing = new function () {
                this.init = function (x, y) {
                    this.scale = 0, this.x = x, this.y = y, this.active = !0;
                }, this.update = function (ctxt, delta) {
                    this.active && (this.scale += 0.05 * delta, this.scale >= config.mapPingScale ? this.active = !1 : (ctxt.globalAlpha = 1 - Math.max(0, this.scale / config.mapPingScale), ctxt.beginPath(), ctxt.arc(this.x / config.mapScale * mapDisplay.width, this.y / config.mapScale * mapDisplay.width, this.scale, 0, 2 * Math.PI), ctxt.stroke()));
                };
            }(), mapPings.push(tmpPing)), tmpPing.init(x, y);
        }
        function updateMinimap(data) {
            minimapData = data;
        }
        var currentStoreIndex = 0;
        function updateStoreItems(type, id, index) {
            index ? type ? player.tailIndex = id : player.tails[id] = 1 : type ? player.skinIndex = id : player.skins[id] = 1, 'block' == storeMenu.style.display && generateStoreList();
        }
        function generateStoreList() {
            if (player) {
                UTILS.removeAllChildren(storeHolder);
                for (var index = currentStoreIndex, tmpArray = index ? accessories : hats, i = 0; i < tmpArray.length; ++i)
                    tmpArray[i].dontSell || function (i) {
                        var tmp = UTILS.generateElement({
                            id: 'storeDisplay' + i,
                            class: 'storeItem',
                            onmouseout: function () {
                                showItemInfo();
                            },
                            onmouseover: function () {
                                showItemInfo(tmpArray[i], !1, !0);
                            },
                            parent: storeHolder
                        });
                        UTILS.hookTouchEvents(tmp, !0), UTILS.generateElement({
                            tag: 'img',
                            class: 'hatPreview',
                            src: '../img/' + (index ? 'accessories/access_' : 'hats/hat_') + tmpArray[i].id + (tmpArray[i].topSprite ? '_p' : '') + '.png',
                            parent: tmp
                        }), UTILS.generateElement({
                            tag: 'span',
                            text: tmpArray[i].name,
                            parent: tmp
                        }), (index ? player.tails[tmpArray[i].id] : player.skins[tmpArray[i].id]) ? (index ? player.tailIndex : player.skinIndex) == tmpArray[i].id ? UTILS.generateElement({
                            class: 'joinAlBtn',
                            style: 'margin-top: 5px',
                            text: 'Unequip',
                            onclick: function () {
                                storeEquip(0, index);
                            },
                            hookTouch: !0,
                            parent: tmp
                        }) : UTILS.generateElement({
                            class: 'joinAlBtn',
                            style: 'margin-top: 5px',
                            text: 'Equip',
                            onclick: function () {
                                storeEquip(tmpArray[i].id, index);
                            },
                            hookTouch: !0,
                            parent: tmp
                        }) : (UTILS.generateElement({
                            class: 'joinAlBtn',
                            style: 'margin-top: 5px',
                            text: 'Buy',
                            onclick: function () {
                                storeBuy(tmpArray[i].id, index);
                            },
                            hookTouch: !0,
                            parent: tmp
                        }), UTILS.generateElement({
                            tag: 'span',
                            class: 'itemPrice',
                            text: tmpArray[i].price,
                            parent: tmp
                        }));
                    }(i);
            }
        }
        function storeEquip(id, index) {
            io.send('13c', 0, id, index);
        }
        function storeBuy(id, index) {
            io.send('13c', 1, id, index);
        }
        function hideAllWindows() {
            storeMenu.style.display = 'none', allianceMenu.style.display = 'none', closeChat();
        }
        function updateItems(data, wpn) {
            data && (wpn ? player.weapons = data : player.items = data);
            for (var i = 0; i < items.list.length; ++i) {
                var tmpI = items.weapons.length + i;
                document.getElementById('actionBarItem' + tmpI).style.display = player.items.indexOf(items.list[i].id) >= 0 ? 'inline-block' : 'none';
            }
            for (i = 0; i < items.weapons.length; ++i)
                document.getElementById('actionBarItem' + i).style.display = player.weapons[items.weapons[i].type] == items.weapons[i].id ? 'inline-block' : 'none';
        }
        function setUseNativeResolution(useNative) {
            useNativeResolution = useNative, pixelDensity = useNative && window.devicePixelRatio || 1, nativeResolutionCheckbox.checked = useNative, saveVal('native_resolution', useNative.toString()), resize();
        }
        function updateSkinColorPicker() {
            for (var tmpHTML = '', i = 0; i < config.skinColors.length; ++i)
                tmpHTML += i == skinColor ? '<div class=\'skinColorItem activeSkin\' style=\'background-color:' + config.skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>' : '<div class=\'skinColorItem\' style=\'background-color:' + config.skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>';
            skinColorHolder.innerHTML = tmpHTML;
        }
        var chatBox = document.getElementById('chatBox'), chatHolder = document.getElementById('chatHolder');
        function toggleChat() {
            usingTouch ? setTimeout(function () {
                var chatMessage = prompt('chat message');
                chatMessage && sendChat(chatMessage);
            }, 1) : 'block' == chatHolder.style.display ? (chatBox.value && sendChat(chatBox.value), closeChat()) : (storeMenu.style.display = 'none', allianceMenu.style.display = 'none', chatHolder.style.display = 'block', chatBox.focus(), resetMoveDir()), chatBox.value = '';
        }
        function sendChat(message) {
            io.send('ch', message.slice(0, 30));
        }
        function closeChat() {
            chatBox.value = '', chatHolder.style.display = 'none';
        }
        var usingTouch, lastDir, profanityList = [
                'cunt',
                'whore',
                'fuck',
                'shit',
                'faggot',
                'nigger',
                'nigga',
                'dick',
                'vagina',
                'minge',
                'cock',
                'rape',
                'cum',
                'sex',
                'tits',
                'penis',
                'clit',
                'pussy',
                'meatcurtain',
                'jizz',
                'prune',
                'douche',
                'wanker',
                'damn',
                'bitch',
                'dick',
                'fag',
                'bastard'
            ];
        function receiveChat(sid, message) {
            var tmpPlayer = findPlayerBySID(sid);
            tmpPlayer && (tmpPlayer.chatMessage = function (text) {
                for (var tmpString, i = 0; i < profanityList.length; ++i)
                    if (text.indexOf(profanityList[i]) > -1) {
                        tmpString = '';
                        for (var y = 0; y < profanityList[i].length; ++y)
                            tmpString += tmpString.length ? 'o' : 'M';
                        var re = new RegExp(profanityList[i], 'g');
                        text = text.replace(re, tmpString);
                    }
                return text;
            }(message), tmpPlayer.chatCountdown = config.chatCountdown);
        }
        function resize() {
            screenWidth = window.innerWidth, screenHeight = window.innerHeight;
            var scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
            gameCanvas.width = screenWidth * pixelDensity, gameCanvas.height = screenHeight * pixelDensity, gameCanvas.style.width = screenWidth + 'px', gameCanvas.style.height = screenHeight + 'px', mainContext.setTransform(scaleFillNative, 0, 0, scaleFillNative, (screenWidth * pixelDensity - maxScreenWidth * scaleFillNative) / 2, (screenHeight * pixelDensity - maxScreenHeight * scaleFillNative) / 2);
        }
        function setUsingTouch(using) {
            (usingTouch = using) ? guideCard.classList.add('touch') : guideCard.classList.remove('touch');
        }
        function touchEnd(ev) {
            ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
            for (var i = 0; i < ev.changedTouches.length; i++) {
                var t = ev.changedTouches[i];
                t.identifier == controllingTouch.id ? (controllingTouch.id = -1, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.id = -1, player.buildIndex >= 0 && (attackState = 1, sendAtckState()), attackState = 0, sendAtckState());
            }
        }
        function getAttackDir() {
            return player ? (-1 != attackingTouch.id ? lastDir = Math.atan2(attackingTouch.currentY - attackingTouch.startY, attackingTouch.currentX - attackingTouch.startX) : player.lockDir || usingTouch || (lastDir = Math.atan2(mouseY - screenHeight / 2, mouseX - screenWidth / 2)), UTILS.fixTo(lastDir || 0, 2)) : 0;
        }
        window.addEventListener('resize', UTILS.checkTrusted(resize)), resize(), setUsingTouch(!1), window.setUsingTouch = setUsingTouch, gameCanvas.addEventListener('touchmove', UTILS.checkTrusted(function (ev) {
            ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
            for (var i = 0; i < ev.changedTouches.length; i++) {
                var t = ev.changedTouches[i];
                t.identifier == controllingTouch.id ? (controllingTouch.currentX = t.pageX, controllingTouch.currentY = t.pageY, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.currentX = t.pageX, attackingTouch.currentY = t.pageY, attackState = 1);
            }
        }), !1), gameCanvas.addEventListener('touchstart', UTILS.checkTrusted(function (ev) {
            if (!inGame)
                return ev.preventDefault(), !1;
            ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
            for (var i = 0; i < ev.changedTouches.length; i++) {
                var t = ev.changedTouches[i];
                t.pageX < document.body.scrollWidth / 2 && -1 == controllingTouch.id ? (controllingTouch.id = t.identifier, controllingTouch.startX = controllingTouch.currentX = t.pageX, controllingTouch.startY = controllingTouch.currentY = t.pageY, sendMoveDir()) : t.pageX > document.body.scrollWidth / 2 && -1 == attackingTouch.id && (attackingTouch.id = t.identifier, attackingTouch.startX = attackingTouch.currentX = t.pageX, attackingTouch.startY = attackingTouch.currentY = t.pageY, player.buildIndex < 0 && (attackState = 1, sendAtckState()));
            }
        }), !1), gameCanvas.addEventListener('touchend', UTILS.checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchcancel', UTILS.checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchleave', UTILS.checkTrusted(touchEnd), !1), gameCanvas.addEventListener('mousemove', function (e) {
            e.preventDefault(), e.stopPropagation(), setUsingTouch(!1), mouseX = e.clientX, mouseY = e.clientY;
        }, !1), gameCanvas.addEventListener('mousedown', function (e) {
            setUsingTouch(!1), 1 != attackState && (attackState = 1, sendAtckState());
        }, !1), gameCanvas.addEventListener('mouseup', function (e) {
            setUsingTouch(!1), 0 != attackState && (attackState = 0, sendAtckState());
        }, !1);
        var keys = {}, moveKeys = {
                87: [
                    0,
                    -1
                ],
                38: [
                    0,
                    -1
                ],
                83: [
                    0,
                    1
                ],
                40: [
                    0,
                    1
                ],
                65: [
                    -1,
                    0
                ],
                37: [
                    -1,
                    0
                ],
                68: [
                    1,
                    0
                ],
                39: [
                    1,
                    0
                ]
            };
        function resetMoveDir() {
            keys = {}, io.send('rmd');
        }
        function keysActive() {
            return 'block' != allianceMenu.style.display && 'block' != chatHolder.style.display;
        }
        function sendAtckState() {
            player && player.alive && io.send('c', attackState, player.buildIndex >= 0 ? getAttackDir() : null);
        }
        window.addEventListener('keydown', UTILS.checkTrusted(function (event) {
            var keyNum = event.which || event.keyCode || 0;
            27 == keyNum ? hideAllWindows() : player && player.alive && keysActive() && (keys[keyNum] || (keys[keyNum] = 1, 69 == keyNum ? io.send('7', 1) : 67 == keyNum ? (mapMarker || (mapMarker = {}), mapMarker.x = player.x, mapMarker.y = player.y) : 88 == keyNum ? (player.lockDir = player.lockDir ? 0 : 1, io.send('7', 0)) : null != player.weapons[keyNum - 49] ? selectToBuild(player.weapons[keyNum - 49], !0) : null != player.items[keyNum - 49 - player.weapons.length] ? selectToBuild(player.items[keyNum - 49 - player.weapons.length]) : 81 == keyNum ? selectToBuild(player.items[0]) : 82 == keyNum ? sendMapPing() : moveKeys[keyNum] ? sendMoveDir() : 32 == keyNum && (attackState = 1, sendAtckState())));
        })), window.addEventListener('keyup', UTILS.checkTrusted(function (event) {
            if (player && player.alive) {
                var keyNum = event.which || event.keyCode || 0;
                13 == keyNum ? toggleChat() : keysActive() && keys[keyNum] && (keys[keyNum] = 0, moveKeys[keyNum] ? sendMoveDir() : 32 == keyNum && (attackState = 0, sendAtckState()));
            }
        }));
        var lastMoveDir = void 0;
        function sendMoveDir() {
            var newMoveDir = function () {
                var dx = 0, dy = 0;
                if (-1 != controllingTouch.id)
                    dx += controllingTouch.currentX - controllingTouch.startX, dy += controllingTouch.currentY - controllingTouch.startY;
                else
                    for (var key in moveKeys) {
                        var tmpDir = moveKeys[key];
                        dx += !!keys[key] * tmpDir[0], dy += !!keys[key] * tmpDir[1];
                    }
                return 0 == dx && 0 == dy ? void 0 : UTILS.fixTo(Math.atan2(dy, dx), 2);
            }();
            (null == lastMoveDir || null == newMoveDir || Math.abs(newMoveDir - lastMoveDir) > 0.3) && (io.send('33', newMoveDir), lastMoveDir = newMoveDir);
        }
        function sendMapPing() {
            io.send('14', 1);
        }
        function selectToBuild(index, wpn) {
            io.send('5', index, wpn);
        }
        function enterGame() {
            window.FRVR && window.FRVR.tracker.levelStart('game_start'), saveVal('moo_name', nameInput.value), !inGame && io.connected && (inGame = !0, Sound.stop('menu'), showLoadingText('Loading...'), io.send('sp', {
                name: nameInput.value,
                moofoll: moofoll,
                skin: skinColor
            })), function () {
                var cookieIcon = document.getElementById('ot-sdk-btn-floating');
                cookieIcon && (cookieIcon.style.display = 'none');
            }();
        }
        var firstSetup = !0;
        function setupGame(yourSID) {
            loadingText.style.display = 'none', menuCardHolder.style.display = 'block', mainMenu.style.display = 'none', keys = {}, playerSID = yourSID, attackState = 0, inGame = !0, firstSetup && (firstSetup = !1, gameObjects.length = 0);
        }
        function showText(x, y, value, type) {
            textManager.showText(x, y, 50, 0.18, 500, Math.abs(value), value >= 0 ? '#fff' : '#8ecc51');
        }
        var deathTextScale = 99999;
        function killPlayer() {
            inGame = !1, function () {
                var cookieIcon = document.getElementById('ot-sdk-btn-floating');
                cookieIcon && (cookieIcon.style.display = 'block');
            }();
            try {
                factorem.refreshAds([2], !0);
            } catch (e) {
            }
            gameUI.style.display = 'none', hideAllWindows(), lastDeath = {
                x: player.x,
                y: player.y
            }, loadingText.style.display = 'none', diedText.style.display = 'block', diedText.style.fontSize = '0px', deathTextScale = 0, setTimeout(function () {
                menuCardHolder.style.display = 'block', mainMenu.style.display = 'block', diedText.style.display = 'none';
                killNum = 0;
            }, config.deathFadeout), updateServerList();
        }
        function killObjects(sid) {
            player && objectManager.removeAllItems(sid);
        }
        function killObject(sid) {
            objectManager.disableBySid(sid);
        }
        let killNum = 0;
        function updateStatusDisplay() {
            scoreDisplay.innerText = player.points,
                foodDisplay.innerText = player.food,
                woodDisplay.innerText = player.wood,
                stoneDisplay.innerText = player.stone
            if(player.kills > killCounter.innerText){
                killNum++;
                io.send("ch",killNum + "$ in my wallet");
            }
            killCounter.innerText = player.kills;
        }
        var iconSprites = {}, icons = [
                'crown',
                'skull'
            ], tmpList = [];
        function updateUpgrades(points, age) {
            if (player.upgradePoints = points, player.upgrAge = age, points > 0) {
                tmpList.length = 0, UTILS.removeAllChildren(upgradeHolder);
                for (var i = 0; i < items.weapons.length; ++i)
                    items.weapons[i].age == age && (null == items.weapons[i].pre || player.weapons.indexOf(items.weapons[i].pre) >= 0) && (UTILS.generateElement({
                        id: 'upgradeItem' + i,
                        class: 'actionBarItem',
                        onmouseout: function () {
                            showItemInfo();
                        },
                        parent: upgradeHolder
                    }).style.backgroundImage = document.getElementById('actionBarItem' + i).style.backgroundImage, tmpList.push(i));
                for (i = 0; i < items.list.length; ++i)
                    if (items.list[i].age == age && (null == items.list[i].pre || player.items.indexOf(items.list[i].pre) >= 0)) {
                        var tmpI = items.weapons.length + i;
                        UTILS.generateElement({
                            id: 'upgradeItem' + tmpI,
                            class: 'actionBarItem',
                            onmouseout: function () {
                                showItemInfo();
                            },
                            parent: upgradeHolder
                        }).style.backgroundImage = document.getElementById('actionBarItem' + tmpI).style.backgroundImage, tmpList.push(tmpI);
                    }
                for (i = 0; i < tmpList.length; i++)
                    !function (i) {
                        var tmpItem = document.getElementById('upgradeItem' + i);
                        tmpItem.onmouseover = function () {
                            items.weapons[i] ? showItemInfo(items.weapons[i], !0) : showItemInfo(items.list[i - items.weapons.length]);
                        }, tmpItem.onclick = UTILS.checkTrusted(function () {
                            io.send('6', i);
                        }), UTILS.hookTouchEvents(tmpItem);
                    }(tmpList[i]);
                tmpList.length ? (upgradeHolder.style.display = 'block', upgradeCounter.style.display = 'block', upgradeCounter.innerHTML = 'SELECT ITEMS (' + points + ')') : (upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo());
            } else
                upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo();
        }
        function updateAge(xp, mxp, age) {
            null != xp && (player.XP = xp), null != mxp && (player.maxXP = mxp), null != age && (player.age = age), age == config.maxAge ? (ageText.innerHTML = 'MAX AGE', ageBarBody.style.width = '100%') : (ageText.innerHTML = 'AGE ' + player.age, ageBarBody.style.width = player.XP / player.maxXP * 100 + '%');
        }
        function updateLeaderboard(data) {
            UTILS.removeAllChildren(leaderboardData);
            for (var tmpC = 1, i = 0; i < data.length; i += 3)
                !function (i) {
                    UTILS.generateElement({
                        class: 'leaderHolder',
                        parent: leaderboardData,
                        children: [
                            UTILS.generateElement({
                                class: 'leaderboardItem',
                                style: 'color:' + (data[i] == playerSID ? '#fff' : 'rgba(255,255,255,0.6)'),
                                text: tmpC + '. ' + ('' != data[i + 1] ? data[i + 1] : 'unknown')
                            }),
                            UTILS.generateElement({
                                class: 'leaderScore',
                                text: UTILS.kFormat(data[i + 2]) || '0'
                            })
                        ]
                    });
                }(i), tmpC++;
        }
        let lastAttackDir = null;
        function renderControl(startX, startY, currentX, currentY) {
            mainContext.save(), mainContext.setTransform(1, 0, 0, 1, 0, 0), mainContext.scale(pixelDensity, pixelDensity);
            var controlRadius = 50;
            mainContext.beginPath(), mainContext.arc(startX, startY, controlRadius, 0, 2 * Math.PI, !1), mainContext.closePath(), mainContext.fillStyle = 'rgba(255, 255, 255, 0.3)', mainContext.fill(), controlRadius = 50;
            var offsetX = currentX - startX, offsetY = currentY - startY, mag = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)), divisor = mag > controlRadius ? mag / controlRadius : 1;
            offsetX /= divisor, offsetY /= divisor, mainContext.beginPath(), mainContext.arc(startX + offsetX, startY + offsetY, 0.5 * controlRadius, 0, 2 * Math.PI, !1), mainContext.closePath(), mainContext.fillStyle = 'white', mainContext.fill(), mainContext.restore();
        }
        function renderProjectiles(layer, xOffset, yOffset) {
            for (var i = 0; i < projectiles.length; ++i)
                (tmpObj = projectiles[i]).active && tmpObj.layer == layer && (tmpObj.update(delta), tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale) && (mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpObj.dir), renderProjectile(0, 0, tmpObj, mainContext, 1), mainContext.restore()));
        }
        var projectileSprites = {};
        function renderProjectile(x, y, obj, ctxt, debug) {
            if (obj.src) {
                var tmpSrc = items.projectiles[obj.indx].src, tmpSprite = projectileSprites[tmpSrc];
                tmpSprite || ((tmpSprite = new Image()).onload = function () {
                    this.isLoaded = !0;
                }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', projectileSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x - obj.scale / 2, y - obj.scale / 2, obj.scale, obj.scale);
            } else
                1 == obj.indx && (ctxt.fillStyle = '#939393', renderCircle(x, y, obj.scale, ctxt));
        }
        function renderWaterBodies(xOffset, yOffset, ctxt, padding) {
            var tmpW = config.riverWidth + padding, tmpY = config.mapScale / 2 - yOffset - tmpW / 2;
            tmpY < maxScreenHeight && tmpY + tmpW > 0 && ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
        }
        function renderGameObjects(layer, xOffset, yOffset) {
            for (var tmpSprite, tmpX, tmpY, i = 0; i < gameObjects.length; ++i)
                (tmpObj = gameObjects[i]).active && (tmpX = tmpObj.x + tmpObj.xWiggle - xOffset, tmpY = tmpObj.y + tmpObj.yWiggle - yOffset, 0 == layer && tmpObj.update(delta), tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0)) && (mainContext.globalAlpha = tmpObj.hideFromEnemy ? 0.6 : 1, tmpObj.isItem ? (tmpSprite = getItemSprite(tmpObj), mainContext.save(), mainContext.translate(tmpX, tmpY), mainContext.rotate(tmpObj.dir), mainContext.drawImage(tmpSprite, -tmpSprite.width / 2, -tmpSprite.height / 2), tmpObj.blocker && (mainContext.strokeStyle = '#db6e6e', mainContext.globalAlpha = 0.3, mainContext.lineWidth = 6, renderCircle(0, 0, tmpObj.blocker, mainContext, !1, !0)), mainContext.restore()) : (tmpSprite = getResSprite(tmpObj), mainContext.drawImage(tmpSprite, tmpX - tmpSprite.width / 2, tmpY - tmpSprite.height / 2))));
        }
        function gatherAnimation(sid, didHit, index) {
            (tmpObj = findPlayerBySID(sid)) && tmpObj.startAnim(didHit, index);
        }
        function renderPlayers(xOffset, yOffset, zIndex) {
            mainContext.globalAlpha = 1;
            for (var i = 0; i < players.length; ++i)
                (tmpObj = players[i]).zIndex == zIndex && (tmpObj.animate(delta), tmpObj.visible && (tmpObj.skinRot += 0.002 * delta, tmpDir = (tmpObj == player ? getAttackDir() : tmpObj.dir) + tmpObj.dirPlus, mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpDir), renderPlayer(tmpObj, mainContext), mainContext.restore()));
        }
        function renderPlayer(e, t) {
            (t = t || mainContext).lineWidth = 5.5, t.lineJoin = 'miter';
            var i = Math.PI / 4 * (items.weapons[e.weaponIndex].armS || 1), n = e.buildIndex < 0 && items.weapons[e.weaponIndex].hndS || 1, s = e.buildIndex < 0 && items.weapons[e.weaponIndex].hndD || 1;
            if (e.tailIndex > 0 && function (index, ctxt, owner) {
                    if (!(tmpSkin = accessSprites[index])) {
                        var tmpImage = new Image();
                        tmpImage.onload = function () {
                            this.isLoaded = !0, this.onload = null;
                        }, tmpImage.src = '.././img/accessories/access_' + index + '.png', accessSprites[index] = tmpImage, tmpSkin = tmpImage;
                    }
                    var tmpObj = accessPointers[index];
                    if (!tmpObj) {
                        for (var i = 0; i < accessories.length; ++i)
                            if (accessories[i].id == index) {
                                tmpObj = accessories[i];
                                break;
                            }
                        accessPointers[index] = tmpObj;
                    }
                    tmpSkin.isLoaded && (ctxt.save(), ctxt.translate(-20 - (tmpObj.xOff || 0), 0), tmpObj.spin && ctxt.rotate(owner.skinRot), ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), ctxt.restore());
                }(e.tailIndex, t, e), e.buildIndex < 0 && !items.weapons[e.weaponIndex].aboveHand && (renderTool(items.weapons[e.weaponIndex], config.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == items.weapons[e.weaponIndex].projectile || items.weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, items.projectiles[items.weapons[e.weaponIndex].projectile], mainContext)), t.fillStyle = config.skinColors[e.skinColor], renderCircle(e.scale * Math.cos(i), e.scale * Math.sin(i), 14), renderCircle(e.scale * s * Math.cos(-i * n), e.scale * s * Math.sin(-i * n), 14), e.buildIndex < 0 && items.weapons[e.weaponIndex].aboveHand && (renderTool(items.weapons[e.weaponIndex], config.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == items.weapons[e.weaponIndex].projectile || items.weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, items.projectiles[items.weapons[e.weaponIndex].projectile], mainContext)), e.buildIndex >= 0) {
                var o = getItemSprite(items.list[e.buildIndex]);
                t.drawImage(o, e.scale - items.list[e.buildIndex].holdOffset, -o.width / 2);
            }
            renderCircle(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function renderSkin(index, ctxt, parentSkin, owner) {
                if (!(tmpSkin = skinSprites[index])) {
                    var tmpImage = new Image();
                    tmpImage.onload = function () {
                        this.isLoaded = !0, this.onload = null;
                    }, tmpImage.src = '.././img/hats/hat_' + index + '.png', skinSprites[index] = tmpImage, tmpSkin = tmpImage;
                }
                var tmpObj = parentSkin || skinPointers[index];
                if (!tmpObj) {
                    for (var i = 0; i < hats.length; ++i)
                        if (hats[i].id == index) {
                            tmpObj = hats[i];
                            break;
                        }
                    skinPointers[index] = tmpObj;
                }
                tmpSkin.isLoaded && ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), !parentSkin && tmpObj.topSprite && (ctxt.save(), ctxt.rotate(owner.skinRot), renderSkin(index + '_top', ctxt, tmpObj, owner), ctxt.restore());
            }(e.skinIndex, t, null, e));
        }
        var tmpSkin, skinSprites = {}, skinPointers = {}, accessSprites = {}, accessPointers = {}, toolSprites = {};
        function renderTool(obj, variant, x, y, ctxt) {
            var tmpSrc = obj.src + (variant || ''), tmpSprite = toolSprites[tmpSrc];
            tmpSprite || ((tmpSprite = new Image()).onload = function () {
                this.isLoaded = !0;
            }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', toolSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x + obj.xOff - obj.length / 2, y + obj.yOff - obj.width / 2, obj.length, obj.width);
        }
        var gameObjectSprites = {};
        function getResSprite(obj) {
            var biomeID = obj.y >= config.mapScale - config.snowBiomeTop ? 2 : obj.y <= config.snowBiomeTop ? 1 : 0, tmpIndex = obj.type + '_' + obj.scale + '_' + biomeID, tmpSprite = gameObjectSprites[tmpIndex];
            if (!tmpSprite) {
                var tmpCanvas = document.createElement('canvas');
                tmpCanvas.width = tmpCanvas.height = 2.1 * obj.scale + 5.5;
                var tmpContext = tmpCanvas.getContext('2d');
                if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(UTILS.randFloat(0, Math.PI)), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5, 0 == obj.type)
                    for (var tmpScale, i = 0; i < 2; ++i)
                        renderStar(tmpContext, 7, tmpScale = tmpObj.scale * (i ? 0.5 : 1), 0.7 * tmpScale), tmpContext.fillStyle = biomeID ? i ? '#fff' : '#e3f1f4' : i ? '#b4db62' : '#9ebf57', tmpContext.fill(), i || tmpContext.stroke();
                else if (1 == obj.type)
                    if (2 == biomeID)
                        tmpContext.fillStyle = '#606060', renderStar(tmpContext, 6, 0.3 * obj.scale, 0.71 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#89a54c', renderCircle(0, 0, 0.55 * obj.scale, tmpContext), tmpContext.fillStyle = '#a5c65b', renderCircle(0, 0, 0.3 * obj.scale, tmpContext, !0);
                    else {
                        var tmpRange;
                        !function (ctxt, spikes, outer, inner) {
                            var tmpOuter, rot = Math.PI / 2 * 3, step = Math.PI / 6;
                            ctxt.beginPath(), ctxt.moveTo(0, -inner);
                            for (var i = 0; i < 6; i++)
                                tmpOuter = UTILS.randInt(outer + 0.9, 1.2 * outer), ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter, Math.cos(rot + 2 * step) * inner, Math.sin(rot + 2 * step) * inner), rot += 2 * step;
                            ctxt.lineTo(0, -inner), ctxt.closePath();
                        }(tmpContext, 0, tmpObj.scale, 0.7 * tmpObj.scale), tmpContext.fillStyle = biomeID ? '#e3f1f4' : '#89a54c', tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = biomeID ? '#6a64af' : '#c15555';
                        var rotVal = mathPI2 / 4;
                        for (i = 0; i < 4; ++i)
                            renderCircle((tmpRange = UTILS.randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(10, 12), tmpContext);
                    }
                else
                    2 != obj.type && 3 != obj.type || (tmpContext.fillStyle = 2 == obj.type ? 2 == biomeID ? '#938d77' : '#939393' : '#e0c655', renderStar(tmpContext, 3, obj.scale, obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = 2 == obj.type ? 2 == biomeID ? '#b2ab90' : '#bcbcbc' : '#ebdca3', renderStar(tmpContext, 3, 0.55 * obj.scale, 0.65 * obj.scale), tmpContext.fill());
                tmpSprite = tmpCanvas, gameObjectSprites[tmpIndex] = tmpSprite;
            }
            return tmpSprite;
        }
        var itemSprites = [];
        function getItemSprite(obj, asIcon) {
            var tmpSprite = itemSprites[obj.id];
            if (!tmpSprite || asIcon) {
                var tmpCanvas = document.createElement('canvas');
                tmpCanvas.width = tmpCanvas.height = 2.5 * obj.scale + 5.5 + (items.list[obj.id].spritePadding || 0);
                var tmpContext = tmpCanvas.getContext('2d');
                if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(asIcon ? 0 : Math.PI / 2), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5 * (asIcon ? tmpCanvas.width / 81 : 1), 'apple' == obj.name) {
                    tmpContext.fillStyle = '#c15555', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#89a54c';
                    var leafDir = -Math.PI / 2;
                    !function (x, y, l, r, ctxt) {
                        var endX = x + 25 * Math.cos(r), endY = y + 25 * Math.sin(r);
                        ctxt.moveTo(x, y), ctxt.beginPath(), ctxt.quadraticCurveTo((x + endX) / 2 + 10 * Math.cos(r + Math.PI / 2), (y + endY) / 2 + 10 * Math.sin(r + Math.PI / 2), endX, endY), ctxt.quadraticCurveTo((x + endX) / 2 - 10 * Math.cos(r + Math.PI / 2), (y + endY) / 2 - 10 * Math.sin(r + Math.PI / 2), x, y), ctxt.closePath(), ctxt.fill(), ctxt.stroke();
                    }(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir), 0, leafDir + Math.PI / 2, tmpContext);
                } else if ('cookie' == obj.name) {
                    tmpContext.fillStyle = '#cca861', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#937c4b';
                    for (var rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
                        renderCircle((tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, !0);
                } else if ('cheese' == obj.name) {
                    var chips, tmpRange;
                    for (tmpContext.fillStyle = '#f4f3ac', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c3c28b', rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
                        renderCircle((tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, !0);
                } else if ('wood wall' == obj.name || 'stone wall' == obj.name || 'castle wall' == obj.name) {
                    tmpContext.fillStyle = 'castle wall' == obj.name ? '#83898e' : 'wood wall' == obj.name ? '#a5974c' : '#939393';
                    var sides = 'castle wall' == obj.name ? 4 : 3;
                    renderStar(tmpContext, sides, 1.1 * obj.scale, 1.1 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = 'castle wall' == obj.name ? '#9da4aa' : 'wood wall' == obj.name ? '#c9b758' : '#bcbcbc', renderStar(tmpContext, sides, 0.65 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
                } else if ('spikes' == obj.name || 'greater spikes' == obj.name || 'poison spikes' == obj.name || 'spinning spikes' == obj.name) {
                    tmpContext.fillStyle = 'poison spikes' == obj.name ? '#7b935d' : '#939393';
                    var tmpScale = 0.6 * obj.scale;
                    renderStar(tmpContext, 'spikes' == obj.name ? 5 : 6, obj.scale, tmpScale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, tmpScale, tmpContext), tmpContext.fillStyle = '#c9b758', renderCircle(0, 0, tmpScale / 2, tmpContext, !0);
                } else if ('windmill' == obj.name || 'faster windmill' == obj.name || 'power mill' == obj.name)
                    tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c9b758', renderRectCircle(0, 0, 1.5 * obj.scale, 29, 4, tmpContext), tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, 0.5 * obj.scale, tmpContext);
                else if ('mine' == obj.name)
                    tmpContext.fillStyle = '#939393', renderStar(tmpContext, 3, obj.scale, obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#bcbcbc', renderStar(tmpContext, 3, 0.55 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
                else if ('sapling' == obj.name)
                    for (i = 0; i < 2; ++i)
                        renderStar(tmpContext, 7, tmpScale = obj.scale * (i ? 0.5 : 1), 0.7 * tmpScale), tmpContext.fillStyle = i ? '#b4db62' : '#9ebf57', tmpContext.fill(), i || tmpContext.stroke();
                else if ('pit trap' == obj.name)
                    tmpContext.fillStyle = '#a5974c', renderStar(tmpContext, 3, 1.1 * obj.scale, 1.1 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = outlineColor, renderStar(tmpContext, 3, 0.65 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
                else if ('boost pad' == obj.name)
                    tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#dbd97d', function (s, ctx) {
                        ctx = ctx || mainContext;
                        var h = s * (Math.sqrt(3) / 2);
                        ctx.beginPath(), ctx.moveTo(0, -h / 2), ctx.lineTo(-s / 2, h / 2), ctx.lineTo(s / 2, h / 2), ctx.lineTo(0, -h / 2), ctx.fill(), ctx.closePath();
                    }(1 * obj.scale, tmpContext);
                else if ('turret' == obj.name)
                    tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#939393', renderRect(0, -25, 0.9 * obj.scale, 50, tmpContext), renderCircle(0, 0, 0.6 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke();
                else if ('platform' == obj.name) {
                    tmpContext.fillStyle = '#cebd5f';
                    var tmpS = 2 * obj.scale, tmpW = tmpS / 4, tmpX = -obj.scale / 2;
                    for (i = 0; i < 4; ++i)
                        renderRect(tmpX - tmpW / 2, 0, tmpW, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpX += tmpS / 4;
                } else
                    'healing pad' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#db6e6e', renderRectCircle(0, 0, 0.65 * obj.scale, 20, 4, tmpContext, !0)) : 'spawn pad' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#71aad6', renderCircle(0, 0, 0.6 * obj.scale, tmpContext)) : 'blocker' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.rotate(Math.PI / 4), tmpContext.fillStyle = '#db6e6e', renderRectCircle(0, 0, 0.65 * obj.scale, 20, 4, tmpContext, !0)) : 'teleporter' == obj.name && (tmpContext.fillStyle = '#7e7f82', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.rotate(Math.PI / 4), tmpContext.fillStyle = '#d76edb', renderCircle(0, 0, 0.5 * obj.scale, tmpContext, !0));
                tmpSprite = tmpCanvas, asIcon || (itemSprites[obj.id] = tmpSprite);
            }
            return tmpSprite;
        }
        function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
            (tmpContext = tmpContext || mainContext).beginPath(), tmpContext.arc(x, y, scale, 0, 2 * Math.PI), dontFill || tmpContext.fill(), dontStroke || tmpContext.stroke();
        }
        function renderStar(ctxt, spikes, outer, inner) {
            var x, y, rot = Math.PI / 2 * 3, step = Math.PI / spikes;
            ctxt.beginPath(), ctxt.moveTo(0, -outer);
            for (var i = 0; i < spikes; i++)
                x = Math.cos(rot) * outer, y = Math.sin(rot) * outer, ctxt.lineTo(x, y), rot += step, x = Math.cos(rot) * inner, y = Math.sin(rot) * inner, ctxt.lineTo(x, y), rot += step;
            ctxt.lineTo(0, -outer), ctxt.closePath();
        }
        function renderRect(x, y, w, h, ctxt, stroke) {
            ctxt.fillRect(x - w / 2, y - h / 2, w, h), stroke || ctxt.strokeRect(x - w / 2, y - h / 2, w, h);
        }
        function renderRectCircle(x, y, s, sw, seg, ctxt, stroke) {
            ctxt.save(), ctxt.translate(x, y), seg = Math.ceil(seg / 2);
            for (var i = 0; i < seg; i++)
                renderRect(0, 0, 2 * s, sw, ctxt, stroke), ctxt.rotate(Math.PI / seg);
            ctxt.restore();
        }
        function loadGameObject(data) {
            for (var i = 0; i < data.length;)
                objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], items.list[data[i + 6]], !0, data[i + 7] >= 0 ? { sid: data[i + 7] } : null), i += 8;
        }
        function wiggleGameObject(dir, sid) {
            (tmpObj = findObjectBySid(sid)) && (tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir), tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir));
        }
        function shootTurret(sid, dir) {
            (tmpObj = findObjectBySid(sid)) && (tmpObj.dir = dir, tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir + Math.PI), tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir + Math.PI));
        }
        function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
            inWindow && (projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer).sid = sid);
        }
        function remProjectile(sid, range) {
            for (var i = 0; i < projectiles.length; ++i)
                projectiles[i].sid == sid && (projectiles[i].range = range);
        }
        function animateAI(sid) {
            (tmpObj = findAIBySID(sid)) && tmpObj.startAnim();
        }
        function loadAI(data) {
            for (var i = 0; i < ais.length; ++i)
                ais[i].forcePos = !ais[i].visible, ais[i].visible = !1;
            if (data) {
                var tmpTime = Date.now();
                for (i = 0; i < data.length;)
                    (tmpObj = findAIBySID(data[i])) ? (tmpObj.index = data[i + 1], tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 2], tmpObj.y2 = data[i + 3], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 4] : tmpObj.d2, tmpObj.d2 = data[i + 4], tmpObj.health = data[i + 5], tmpObj.dt = 0, tmpObj.visible = !0) : ((tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1])).x2 = tmpObj.x, tmpObj.y2 = tmpObj.y, tmpObj.d2 = tmpObj.dir, tmpObj.health = data[i + 5], aiManager.aiTypes[data[i + 1]].name || (tmpObj.name = config.cowNames[data[i + 6]]), tmpObj.forcePos = !0, tmpObj.sid = data[i], tmpObj.visible = !0), i += 7;
            }
        }
        var aiSprites = {};
        function renderAI(obj, ctxt) {
            var tmpIndx = obj.index, tmpSprite = aiSprites[tmpIndx];
            if (!tmpSprite) {
                var tmpImg = new Image();
                tmpImg.onload = function () {
                    this.isLoaded = !0, this.onload = null;
                }, tmpImg.src = '.././img/animals/' + obj.src + '.png', tmpSprite = tmpImg, aiSprites[tmpIndx] = tmpSprite;
            }
            if (tmpSprite.isLoaded) {
                var tmpScale = 1.2 * obj.scale * (obj.spriteMlt || 1);
                ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, 2 * tmpScale, 2 * tmpScale);
            }
        }
        function isOnScreen(x, y, s) {
            return x + s >= 0 && x - s <= maxScreenWidth && y + s >= 0 && y - s <= maxScreenHeight;
        }
        function addPlayer(data, isYou) {
            var tmpPlayer = function (id) {
                for (var i = 0; i < players.length; ++i)
                    if (players[i].id == id)
                        return players[i];
                return null;
            }(data[0]);
            tmpPlayer ||
                (tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories),
                 players.push(tmpPlayer)),
                tmpPlayer.spawn(isYou ? moofoll : null),
                tmpPlayer.visible = !1,
                tmpPlayer.x2 = void 0,
                tmpPlayer.y2 = void 0,
                tmpPlayer.clownCounter = 0,
                tmpPlayer.setData(data),
                isYou && (camX = (player = tmpPlayer).x,
                          camY = player.y,
                          updateItems(),
                          updateStatusDisplay(),
                          updateAge(),
                          updateUpgrades(0),
                          gameUI.style.display = 'block');
        }
        function removePlayer(id) {
            for (var i = 0; i < players.length; i++)
                if (players[i].id == id) {
                    players.splice(i, 1);
                    break;
                }
        }
        function updateItemCounts(index, value) {
            player && (player.itemCounts[index] = value);
        }
        function updatePlayerValue(index, value, updateView) {
            player && (player[index] = value, updateView && updateStatusDisplay());
        }
        function updateHealth(sid, value) {
            (tmpObj = findPlayerBySID(sid)) && (shameCounterF(value, tmpObj), tmpObj.health = value);
        }
        function shameCounterF(value, tmpObj){
            let d = value - tmpObj.health;
            if(d > 0){
                if (tmpObj.gotTime) {
                    if (gameTick - tmpObj.gotTime <= 1) {
                        tmpObj.clownCounter++;
                    } else {
                        tmpObj.clownCounter = Math.max(0, tmpObj.clownCounter - 2);
                    }
                }
                tmpObj.gotTime = 0;
            } else {
                tmpObj.gotTime = gameTick;
            }
        }
        var gameTick = 0;
        var nEy;
        var nEs;
        function updatePlayers(data) {
            gameTick++;
            nEs = [];
            nEy = [];
            for (var tmpTime = Date.now(), i = 0; i < players.length; ++i)
                players[i].forcePos = !players[i].visible, players[i].visible = !1;
            for (i = 0; i < data.length;)
                (tmpObj = findPlayerBySID(data[i]))
            && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2,
                tmpObj.t2 = tmpTime,
                tmpObj.x1 = tmpObj.x,
                tmpObj.y1 = tmpObj.y,
                tmpObj.x2 = data[i + 1],
                tmpObj.y2 = data[i + 2],
                tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2,
                tmpObj.d2 = data[i + 3],
                tmpObj.dt = 0,
                tmpObj.buildIndex = data[i + 4],
                tmpObj.weaponIndex = data[i + 5],
                tmpObj.weaponVariant = data[i + 6],
                tmpObj.team = data[i + 7],
                tmpObj.isLeader = data[i + 8],
                tmpObj.skinIndex = data[i + 9],
                tmpObj.tailIndex = data[i + 10],
                tmpObj.iconIndex = data[i + 11],
                tmpObj.zIndex = data[i + 12],
                tmpObj.visible = !0,
                (tmpObj == player || tmpObj.team && tmpObj.team == player.team) ? doWeaponStuff() : nEs.push(data.slice(i, i + 13))),
                    i += 13;
            nEs.length && (nEs = nEs.sort((a,b) => findDist(a, player) - findDist(b, player)), nEy = nEs[0]);
        }
        function findDist(a, b){
            return Math.sqrt(Math.pow((b.y2-a[2]),2)+Math.pow((b.x2-a[1]),2));
        }
        function doWeaponStuff(){
            if(tmpObj.skinIndex == 45){
                tmpObj.clownCounter = '8';
            }else if(isNaN(tmpObj.clownCounter)){
                tmpObj.clownCounter = 0;
            }
        }
        function findPlayerBySID(sid) {
            for (var i = 0; i < players.length; ++i)
                if (players[i].sid == sid)
                    return players[i];
            return null;
        }
        function findAIBySID(sid) {
            for (var i = 0; i < ais.length; ++i)
                if (ais[i].sid == sid)
                    return ais[i];
            return null;
        }
        function findObjectBySid(sid) {
            for (var i = 0; i < gameObjects.length; ++i)
                if (gameObjects[i].sid == sid)
                    return gameObjects[i];
            return null;
        }
        var lastPing = -1;
        function pingSocketResponse() {
            var pingTime = Date.now() - lastPing;
            window.pingTime = pingTime, pingDisplay.innerText = 'Ping: ' + pingTime + '\xA0ms';
        }
        function pingSocket() {
            lastPing = Date.now(), io.send('pp');
        }
        function serverShutdownNotice(countdown) {
            if (!(countdown < 0)) {
                var minutes = Math.floor(countdown / 60), seconds = countdown % 60;
                seconds = ('0' + seconds).slice(-2), shutdownDisplay.innerText = 'Server restarting in ' + minutes + ':' + seconds, shutdownDisplay.hidden = !1;
            }
        }
        function openLink(link) {
            window.open(link, '_blank');
        }
        window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }, function () {
            var tmpMid = config.mapScale / 2;
            objectManager.add(0, tmpMid, tmpMid + 200, 0, config.treeScales[3], 0), objectManager.add(1, tmpMid, tmpMid - 480, 0, config.treeScales[3], 0), objectManager.add(2, tmpMid + 300, tmpMid + 450, 0, config.treeScales[3], 0), objectManager.add(3, tmpMid - 950, tmpMid - 130, 0, config.treeScales[2], 0), objectManager.add(4, tmpMid - 750, tmpMid - 400, 0, config.treeScales[3], 0), objectManager.add(5, tmpMid - 700, tmpMid + 400, 0, config.treeScales[2], 0), objectManager.add(6, tmpMid + 800, tmpMid - 200, 0, config.treeScales[3], 0), objectManager.add(7, tmpMid - 260, tmpMid + 340, 0, config.bushScales[3], 1), objectManager.add(8, tmpMid + 760, tmpMid + 310, 0, config.bushScales[3], 1), objectManager.add(9, tmpMid - 800, tmpMid + 100, 0, config.bushScales[3], 1), objectManager.add(10, tmpMid - 800, tmpMid + 300, 0, items.list[4].scale, items.list[4].id, items.list[10]), objectManager.add(11, tmpMid + 650, tmpMid - 390, 0, items.list[4].scale, items.list[4].id, items.list[10]), objectManager.add(12, tmpMid - 400, tmpMid - 450, 0, config.rockScales[2], 2);
        }(), function e() {
            now = Date.now(), delta = now - lastUpdate, lastUpdate = now, function () {
                if (player && (!lastSent || now - lastSent >= 1000 / config.clientSendRate)) {
                    lastSent = now;
                    const attackDir = getAttackDir();
                    lastAttackDir !== attackDir && (lastAttackDir = attackDir, io.send('2', attackDir));
                }
                if (deathTextScale < 120 && (deathTextScale += 0.1 * delta, diedText.style.fontSize = Math.min(Math.round(deathTextScale), 120) + 'px'), player) {
                    var attackDir = UTILS.getDistance(camX, camY, player.x, player.y), tmpDir = UTILS.getDirection(player.x, player.y, camX, camY), camSpd = Math.min(0.01 * attackDir * delta, attackDir);
                    attackDir > 0.05 ? (camX += camSpd * Math.cos(tmpDir), camY += camSpd * Math.sin(tmpDir)) : (camX = player.x, camY = player.y);
                } else
                    camX = config.mapScale / 2, camY = config.mapScale / 2;
                for (var lastTime = now - 1000 / config.serverUpdateRate, i = 0; i < players.length + ais.length; ++i)
                    if ((tmpObj = players[i] || ais[i - players.length]) && tmpObj.visible)
                        if (tmpObj.forcePos)
                            tmpObj.x = tmpObj.x2, tmpObj.y = tmpObj.y2, tmpObj.dir = tmpObj.d2;
                        else {
                            var total = tmpObj.t2 - tmpObj.t1, ratio = (lastTime - tmpObj.t1) / total;
                            tmpObj.dt += delta;
                            var tmpRate = Math.min(1.7, tmpObj.dt / 170), tmpDiff = tmpObj.x2 - tmpObj.x1;
                            tmpObj.x = tmpObj.x1 + tmpDiff * tmpRate, tmpDiff = tmpObj.y2 - tmpObj.y1, tmpObj.y = tmpObj.y1 + tmpDiff * tmpRate, tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                        }
                var xOffset = camX - maxScreenWidth / 2, yOffset = camY - maxScreenHeight / 2;
                config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.mapScale - config.snowBiomeTop - yOffset <= 0 ? (mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.snowBiomeTop - yOffset >= 0 ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0, maxScreenWidth, config.snowBiomeTop - yOffset), mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, config.snowBiomeTop - yOffset, maxScreenWidth, maxScreenHeight - (config.snowBiomeTop - yOffset))) : (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth, config.mapScale - config.snowBiomeTop - yOffset), mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, config.mapScale - config.snowBiomeTop - yOffset, maxScreenWidth, maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset))), firstSetup || ((waterMult += waterPlus * config.waveSpeed * delta) >= config.waveMax ? (waterMult = config.waveMax, waterPlus = -1) : waterMult <= 1 && (waterMult = waterPlus = 1), mainContext.globalAlpha = 1, mainContext.fillStyle = '#dbc666', renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding), mainContext.fillStyle = '#91b2db', renderWaterBodies(xOffset, yOffset, mainContext, 250 * (waterMult - 1))), mainContext.lineWidth = 4, mainContext.strokeStyle = '#000', mainContext.globalAlpha = 0, mainContext.beginPath();
                for (var x = -camX; x < maxScreenWidth; x += maxScreenHeight / 18)
                    x > 0 && (mainContext.moveTo(x, 0), mainContext.lineTo(x, maxScreenHeight));
                for (var y = -camY; y < maxScreenHeight; y += maxScreenHeight / 18)
                    x > 0 && (mainContext.moveTo(0, y), mainContext.lineTo(maxScreenWidth, y));
                for (mainContext.stroke(), mainContext.globalAlpha = 1, mainContext.strokeStyle = outlineColor, renderGameObjects(-1, xOffset, yOffset), mainContext.globalAlpha = 1, mainContext.lineWidth = 5.5, renderProjectiles(0, xOffset, yOffset), renderPlayers(xOffset, yOffset, 0), mainContext.globalAlpha = 1, i = 0; i < ais.length; ++i)
                    (tmpObj = ais[i]).active && tmpObj.visible && (tmpObj.animate(delta), mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - Math.PI / 2), renderAI(tmpObj, mainContext), mainContext.restore());
                if (renderGameObjects(0, xOffset, yOffset), renderProjectiles(1, xOffset, yOffset), renderGameObjects(1, xOffset, yOffset), renderPlayers(xOffset, yOffset, 1), renderGameObjects(2, xOffset, yOffset), renderGameObjects(3, xOffset, yOffset), mainContext.fillStyle = '#000', mainContext.globalAlpha = 0.09, xOffset <= 0 && mainContext.fillRect(0, 0, -xOffset, maxScreenHeight), config.mapScale - xOffset <= maxScreenWidth) {
                    var tmpY = Math.max(0, -yOffset);
                    mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
                }
                var abc = true;
                if (yOffset <= 0 && mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset), config.mapScale - yOffset <= maxScreenHeight) {
                    var tmpX = Math.max(0, -xOffset), tmpMin = 0;
                    config.mapScale - xOffset <= maxScreenWidth && (tmpMin = maxScreenWidth - (config.mapScale - xOffset)), mainContext.fillRect(tmpX, config.mapScale - yOffset, maxScreenWidth - tmpX - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
                }
                for (mainContext.globalAlpha = 1, mainContext.fillStyle = 'rgba(0, 0, 70, 0.35)', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight), mainContext.strokeStyle = darkOutlineColor, i = 0; i < players.length + ais.length; ++i)
                    if ((tmpObj = players[i] || ais[i - players.length]).visible && (10 != tmpObj.skinIndex || tmpObj == player || tmpObj.team && tmpObj.team == player.team)) {
                        if(abc){
                            for(let i = 0; i < gameObjects.length; i++){
                                if(Math.hypot(gameObjects[i].y-player.y2, gameObjects[i].x-player.x2) < 350 && gameObjects[i].active && gameObjects[i].cHealth && gameObjects[i].name && gameObjects[i].scale){
                                    gameObjects[i].cHealth > 0 &&
                                        (config.healthBarWidth,
                                         mainContext.fillStyle = darkOutlineColor,
                                         mainContext.roundRect(gameObjects[i].x - xOffset - config.healthBarWidth - config.healthBarPad, gameObjects[i].y - yOffset + gameObjects[i].scale + 5, 2 * config.healthBarWidth + 2 * config.healthBarPad, 17, 8),
                                         mainContext.fill(),
                                         mainContext.fillStyle = gameObjects[i].owner.sid == player.sid ? "rgba(0, 256, 0, .6)" : isAlly(gameObjects[i].owner.sid) ? "rgba(0, 0, 256, .6)" : "rgba(256, 0, 0, .6)",
                                         mainContext.roundRect(gameObjects[i].x - xOffset - config.healthBarWidth, gameObjects[i].y - yOffset + gameObjects[i].scale + 5 + config.healthBarPad, 2 * config.healthBarWidth * (gameObjects[i].cHealth/gameObjects[i].health), 17 - 2 * config.healthBarPad, 7),
                                         mainContext.fill())
                                }
                            }
                        }
                        var tmpText = (tmpObj.team ? '[' + tmpObj.team + '] ' : '') + (tmpObj.name || '') + (tmpObj.id ? ' ' + tmpObj.clownCounter : '');
                        if ('' != tmpText) {
                            if (mainContext.font = (tmpObj.nameScale || 30) + 'px Hammersmith One', mainContext.fillStyle = '#fff', mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', mainContext.lineWidth = tmpObj.nameScale ? 11 : 8, mainContext.lineJoin = 'round', mainContext.strokeText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY), mainContext.fillText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY), tmpObj.isLeader && iconSprites.crown.isLoaded) {
                                var tmpS = config.crownIconScale;
                                tmpX = tmpObj.x - xOffset - tmpS / 2 - mainContext.measureText(tmpText).width / 2 - config.crownPad, mainContext.drawImage(iconSprites.crown, tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS, tmpS);
                            }
                            1 == tmpObj.iconIndex && iconSprites.skull.isLoaded && (tmpS = config.crownIconScale, tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(tmpText).width / 2 + config.crownPad, mainContext.drawImage(iconSprites.skull, tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS, tmpS));
                        }
                        tmpObj.health > 0 && (config.healthBarWidth, mainContext.fillStyle = darkOutlineColor, mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad, tmpObj.y - yOffset + tmpObj.scale + config.nameY, 2 * config.healthBarWidth + 2 * config.healthBarPad, 17, 8), mainContext.fill(), mainContext.fillStyle = tmpObj == player || tmpObj.team && tmpObj.team == player.team ? '#8ecc51' : '#cc5151', mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth, tmpObj.y - yOffset + tmpObj.scale + config.nameY + config.healthBarPad, 2 * config.healthBarWidth * (tmpObj.health / tmpObj.maxHealth), 17 - 2 * config.healthBarPad, 7), mainContext.fill());
                    }
                for (textManager.update(delta, mainContext, xOffset, yOffset), i = 0; i < players.length; ++i)
                    if ((tmpObj = players[i]).visible && tmpObj.chatCountdown > 0) {
                        tmpObj.chatCountdown -= delta, tmpObj.chatCountdown <= 0 && (tmpObj.chatCountdown = 0), mainContext.font = '32px Hammersmith One';
                        var tmpSize = mainContext.measureText(tmpObj.chatMessage);
                        mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', tmpX = tmpObj.x - xOffset, tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
                        var tmpW = tmpSize.width + 17;
                        mainContext.fillStyle = 'rgba(0,0,0,0.2)', mainContext.roundRect(tmpX - tmpW / 2, tmpY - 23.5, tmpW, 47, 6), mainContext.fill(), mainContext.fillStyle = '#fff', mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
                    }
                !function (delta) {
                    if (player && player.alive) {
                        mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height), mapContext.strokeStyle = '#fff', mapContext.lineWidth = 4;
                        for (var i = 0; i < mapPings.length; ++i)
                            (tmpPing = mapPings[i]).update(mapContext, delta);
                        if (mapContext.globalAlpha = 1, mapContext.fillStyle = '#fff', renderCircle(player.x / config.mapScale * mapDisplay.width, player.y / config.mapScale * mapDisplay.height, 7, mapContext, !0), mapContext.fillStyle = 'rgba(255,255,255,0.35)', player.team && minimapData)
                            for (i = 0; i < minimapData.length;)
                                renderCircle(minimapData[i] / config.mapScale * mapDisplay.width, minimapData[i + 1] / config.mapScale * mapDisplay.height, 7, mapContext, !0), i += 2;
                        lastDeath && (mapContext.fillStyle = '#fc5553', mapContext.font = '34px Hammersmith One', mapContext.textBaseline = 'middle', mapContext.textAlign = 'center', mapContext.fillText('x', lastDeath.x / config.mapScale * mapDisplay.width, lastDeath.y / config.mapScale * mapDisplay.height)), mapMarker && (mapContext.fillStyle = '#fff', mapContext.font = '34px Hammersmith One', mapContext.textBaseline = 'middle', mapContext.textAlign = 'center', mapContext.fillText('x', mapMarker.x / config.mapScale * mapDisplay.width, mapMarker.y / config.mapScale * mapDisplay.height));
                    }
                }(delta), -1 !== controllingTouch.id && renderControl(controllingTouch.startX, controllingTouch.startY, controllingTouch.currentX, controllingTouch.currentY), -1 !== attackingTouch.id && renderControl(attackingTouch.startX, attackingTouch.startY, attackingTouch.currentX, attackingTouch.currentY);
            }(), requestAnimFrame(e);
        }(), window.openLink = openLink, window.aJoinReq = aJoinReq, window.follmoo = function () {
            moofoll || (moofoll = !0, saveVal('moofoll', 1));
        }, window.kickFromClan = kickFromClan, window.sendJoin = sendJoin, window.leaveAlliance = leaveAlliance, window.createAlliance = createAlliance, window.storeBuy = storeBuy, window.storeEquip = storeEquip, window.showItemInfo = showItemInfo, window.selectSkinColor = function (index) {
            skinColor = index, updateSkinColorPicker();
        }, window.changeStoreIndex = function (index) {
            currentStoreIndex != index && (currentStoreIndex = index, generateStoreList());
        }, window.config = config, window.FRVR && window.FRVR.bootstrapper.complete();
    },
    function (e, t) {
        /* 3: ./src/js/libs/modernizr.js */
        !function (e, n, s) {
            function o(e, n) {
                return typeof e === n;
            }
            var i = [], r = [], f = {
                    _version: '3.5.0',
                    _config: {
                        classPrefix: '',
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function (e, n) {
                        var s = this;
                        setTimeout(function () {
                            n(s[e]);
                        }, 0);
                    },
                    addTest: function (e, n, s) {
                        r.push({
                            name: e,
                            fn: n,
                            options: s
                        });
                    },
                    addAsyncTest: function (e) {
                        r.push({
                            name: null,
                            fn: e
                        });
                    }
                }, Modernizr = function () {
                };
            Modernizr.prototype = f, Modernizr = new Modernizr();
            var l = n.documentElement, c = 'svg' === l.nodeName.toLowerCase();
            Modernizr.addTest('passiveeventlisteners', function () {
                var n = !1;
                try {
                    var s = Object.defineProperty({}, 'passive', {
                        get: function () {
                            n = !0;
                        }
                    });
                    e.addEventListener('test', null, s);
                } catch (e) {
                }
                return n;
            }), function () {
                var e, n, s, a, t, l;
                for (var c in r)
                    if (r.hasOwnProperty(c)) {
                        if (e = [], (n = r[c]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                            for (s = 0; s < n.options.aliases.length; s++)
                                e.push(n.options.aliases[s].toLowerCase());
                        for (a = o(n.fn, 'function') ? n.fn() : n.fn, t = 0; t < e.length; t++)
                            1 === (l = e[t].split('.')).length ? Modernizr[l[0]] = a : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = a), i.push((a ? '' : 'no-') + l.join('-'));
                    }
            }(), function (e) {
                var n = l.className, s = Modernizr._config.classPrefix || '';
                if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
                    var o = new RegExp('(^|\\s)' + s + 'no-js(\\s|$)');
                    n = n.replace(o, '$1' + s + 'js$2');
                }
                Modernizr._config.enableClasses && (n += ' ' + s + e.join(' ' + s), c ? l.className.baseVal = n : l.className = n);
            }(i), delete f.addTest, delete f.addAsyncTest;
            for (var u = 0; u < Modernizr._q.length; u++)
                Modernizr._q[u]();
            e.Modernizr = Modernizr;
        }(window, document);
    },
    function (module, t, __webpack_require__) {
        /* 4: ./src/js/libs/io-client.js */
        const {
                Encoder: Encoder,
                Decoder: Decoder
            } = __webpack_require__(37), encoder = new Encoder(), decoder = new Decoder();
        __webpack_require__(0), module.exports = {
            socket: null,
            connected: !1,
            socketId: -1,
            connect: function (address, callback, events) {
                if (!this.socket) {
                    var _this = this;
                    try {
                        var socketError = !1, socketAddress = address;
                        this.socket = new WebSocket(socketAddress), this.socket.binaryType = 'arraybuffer', this.socket.onmessage = function (message) {
                            var data = new Uint8Array(message.data), parsed = decoder.decode(data), type = parsed[0];
                            data = parsed[1], 'io-init' == type ? _this.socketId = data[0] : events[type].apply(void 0, data);
                        }, this.socket.onopen = function () {
                            _this.connected = !0, callback();
                        }, this.socket.onclose = function (event) {
                            _this.connected = !1, 4001 == event.code ? callback('Invalid Connection') : socketError || callback('disconnected');
                        }, this.socket.onerror = function (error) {
                            this.socket && this.socket.readyState != WebSocket.OPEN && (socketError = !0, console.error('Socket error', arguments), callback('Socket error'));
                        };
                    } catch (e) {
                        console.warn('Socket connection error:', e), callback(e);
                    }
                }
            },
            send: function (type) {
                var data = Array.prototype.slice.call(arguments, 1), binary = encoder.encode([
                        type,
                        data
                    ]);
                this.socket.send(binary);
            },
            socketReady: function () {
                return this.socket && this.connected;
            },
            close: function () {
                this.socket && this.socket.close();
            }
        };
    },
    function (module, t) {
        /* 5: ./node_modules/process/browser.js */
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout)
                return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
                return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
            try {
                return cachedSetTimeout(fun, 0);
            } catch (t) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (t) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        !function () {
            try {
                cachedSetTimeout = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = 'function' == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len;) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len;)
                        currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, function (marker) {
                    if (cachedClearTimeout === clearTimeout)
                        return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
                        return cachedClearTimeout = clearTimeout, clearTimeout(marker);
                    try {
                        cachedClearTimeout(marker);
                    } catch (t) {
                        try {
                            return cachedClearTimeout.call(null, marker);
                        } catch (t) {
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {
        }
        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function () {
            this.fun.apply(null, this.array);
        }, process.title = 'browser', process.browser = !0, process.env = {}, process.argv = [], process.version = '', process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function (name) {
            return [];
        }, process.binding = function (name) {
            throw new Error('process.binding is not supported');
        }, process.cwd = function () {
            return '/';
        }, process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        }, process.umask = function () {
            return 0;
        };
    },
    function (module, t) {
        /* 6: ./src/js/libs/utils.js */
        var mathABS = Math.abs, mathSQRT = (Math.cos, Math.sin, Math.pow, Math.sqrt), mathATAN2 = (mathABS = Math.abs, Math.atan2), mathPI = Math.PI;
        module.exports.randInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }, module.exports.randFloat = function (min, max) {
            return Math.random() * (max - min + 1) + min;
        }, module.exports.lerp = function (value1, value2, amount) {
            return value1 + (value2 - value1) * amount;
        }, module.exports.decel = function (val, cel) {
            return val > 0 ? val = Math.max(0, val - cel) : val < 0 && (val = Math.min(0, val + cel)), val;
        }, module.exports.getDistance = function (x1, y1, x2, y2) {
            return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
        }, module.exports.getDirection = function (x1, y1, x2, y2) {
            return mathATAN2(y1 - y2, x1 - x2);
        }, module.exports.getAngleDist = function (a, b) {
            var p = mathABS(b - a) % (2 * mathPI);
            return p > mathPI ? 2 * mathPI - p : p;
        }, module.exports.isNumber = function (n) {
            return 'number' == typeof n && !isNaN(n) && isFinite(n);
        }, module.exports.isString = function (s) {
            return s && 'string' == typeof s;
        }, module.exports.kFormat = function (num) {
            return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
        }, module.exports.capitalizeFirst = function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }, module.exports.fixTo = function (n, v) {
            return parseFloat(n.toFixed(v));
        }, module.exports.sortByPoints = function (a, b) {
            return parseFloat(b.points) - parseFloat(a.points);
        }, module.exports.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
            var minX = x1, maxX = x2;
            if (x1 > x2 && (minX = x2, maxX = x1), maxX > recX2 && (maxX = recX2), minX < recX && (minX = recX), minX > maxX)
                return !1;
            var minY = y1, maxY = y2, dx = x2 - x1;
            if (Math.abs(dx) > 1e-7) {
                var a = (y2 - y1) / dx, b = y1 - a * x1;
                minY = a * minX + b, maxY = a * maxX + b;
            }
            if (minY > maxY) {
                var tmp = maxY;
                maxY = minY, minY = tmp;
            }
            return maxY > recY2 && (maxY = recY2), minY < recY && (minY = recY), !(minY > maxY);
        }, module.exports.containsPoint = function (element, x, y) {
            var bounds = element.getBoundingClientRect(), left = bounds.left + window.scrollX, top = bounds.top + window.scrollY, width = bounds.width, height = bounds.height;
            return x > left && x < left + width && y > top && y < top + height;
        }, module.exports.mousifyTouchEvent = function (event) {
            var touch = event.changedTouches[0];
            event.screenX = touch.screenX, event.screenY = touch.screenY, event.clientX = touch.clientX, event.clientY = touch.clientY, event.pageX = touch.pageX, event.pageY = touch.pageY;
        }, module.exports.hookTouchEvents = function (element, skipPrevent) {
            var preventDefault = !skipPrevent, isHovering = !1;
            function touchEnd(e) {
                module.exports.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), isHovering && (element.onclick && element.onclick(e), element.onmouseout && element.onmouseout(e), isHovering = !1);
            }
            element.addEventListener('touchstart', module.exports.checkTrusted(function (e) {
                module.exports.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), element.onmouseover && element.onmouseover(e), isHovering = !0;
            }), !1), element.addEventListener('touchmove', module.exports.checkTrusted(function (e) {
                module.exports.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), module.exports.containsPoint(element, e.pageX, e.pageY) ? isHovering || (element.onmouseover && element.onmouseover(e), isHovering = !0) : isHovering && (element.onmouseout && element.onmouseout(e), isHovering = !1);
            }), !1), element.addEventListener('touchend', module.exports.checkTrusted(touchEnd), !1), element.addEventListener('touchcancel', module.exports.checkTrusted(touchEnd), !1), element.addEventListener('touchleave', module.exports.checkTrusted(touchEnd), !1);
        }, module.exports.removeAllChildren = function (element) {
            for (; element.hasChildNodes();)
                element.removeChild(element.lastChild);
        }, module.exports.generateElement = function (config) {
            var element = document.createElement(config.tag || 'div');
            function bind(configValue, elementValue) {
                config[configValue] && (element[elementValue] = config[configValue]);
            }
            for (var key in (bind('text', 'textContent'), bind('html', 'innerHTML'), bind('class', 'className'), config)) {
                switch (key) {
                case 'tag':
                case 'text':
                case 'html':
                case 'class':
                case 'style':
                case 'hookTouch':
                case 'parent':
                case 'children':
                    continue;
                }
                element[key] = config[key];
            }
            if (element.onclick && (element.onclick = module.exports.checkTrusted(element.onclick)), element.onmouseover && (element.onmouseover = module.exports.checkTrusted(element.onmouseover)), element.onmouseout && (element.onmouseout = module.exports.checkTrusted(element.onmouseout)), config.style && (element.style.cssText = config.style), config.hookTouch && module.exports.hookTouchEvents(element), config.parent && config.parent.appendChild(element), config.children)
                for (var i = 0; i < config.children.length; i++)
                    element.appendChild(config.children[i]);
            return element;
        }, module.exports.eventIsTrusted = function (ev) {
            return !ev || 'boolean' != typeof ev.isTrusted || ev.isTrusted;
        }, module.exports.checkTrusted = function (callback) {
            return function (ev) {
                ev && ev instanceof Event && module.exports.eventIsTrusted(ev) && callback(ev);
            };
        }, module.exports.randomString = function (length) {
            for (var text = '', possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }, module.exports.countInArray = function (array, val) {
            for (var count = 0, i = 0; i < array.length; i++)
                array[i] === val && count++;
            return count;
        };
    },
    function (module, t) {
        /* 7: ./src/js/libs/animText.js */
        module.exports.AnimText = function () {
            this.init = function (x, y, scale, speed, life, text, color) {
                this.x = x, this.y = y, this.color = color, this.scale = scale, this.startScale = this.scale, this.maxScale = 1.5 * scale, this.scaleSpeed = 0.7, this.speed = speed, this.life = life, this.text = text;
            }, this.update = function (delta) {
                this.life && (this.life -= delta, this.y -= this.speed * delta, this.scale += this.scaleSpeed * delta, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0));
            }, this.render = function (ctxt, xOff, yOff) {
                ctxt.fillStyle = this.color, ctxt.font = this.scale + 'px Hammersmith One', ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
            };
        }, module.exports.TextManager = function () {
            this.texts = [], this.update = function (delta, ctxt, xOff, yOff) {
                ctxt.textBaseline = 'middle', ctxt.textAlign = 'center';
                for (var i = 0; i < this.texts.length; ++i)
                    this.texts[i].life && (this.texts[i].update(delta), this.texts[i].render(ctxt, xOff, yOff));
            }, this.showText = function (x, y, scale, speed, life, text, color) {
                for (var tmpText, i = 0; i < this.texts.length; ++i)
                    if (!this.texts[i].life) {
                        tmpText = this.texts[i];
                        break;
                    }
                tmpText || (tmpText = new module.exports.AnimText(), this.texts.push(tmpText)), tmpText.init(x, y, scale, speed, life, text, color);
            };
        };
    },
    function (module, t) {
        /* 8: ./src/js/data/gameObject.js */
        module.exports = function (sid) {
            this.sid = sid, this.init = function (x, y, dir, scale, type, data, owner) {
                data = data || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = data.doUpdate, this.x = x, this.y = y, this.dir = dir, this.xWiggle = 0, this.yWiggle = 0, this.scale = scale, this.type = type, this.id = data.id, this.owner = owner, this.name = data.name, this.isItem = null != this.id, this.group = data.group, this.health = data.health, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = data.colDiv || 1, this.blocker = data.blocker, this.ignoreCollision = data.ignoreCollision, this.dontGather = data.dontGather, this.hideFromEnemy = data.hideFromEnemy, this.friction = data.friction, this.projDmg = data.projDmg, this.dmg = data.dmg, this.pDmg = data.pDmg, this.pps = data.pps, this.zIndex = data.zIndex || 0, this.turnSpeed = data.turnSpeed, this.req = data.req, this.trap = data.trap, this.healCol = data.healCol, this.teleport = data.teleport, this.boostSpeed = data.boostSpeed, this.projectile = data.projectile, this.shootRange = data.shootRange, this.shootRate = data.shootRate, this.shootCount = this.shootRate, this.spawnPoint = data.spawnPoint;
            }, this.changeHealth = function (amount, doer) {
                return this.health += amount, this.health <= 0;
            }, this.getScale = function (sM, ig) {
                return sM = sM || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : 0.6 * sM) * (ig ? 1 : this.colDiv);
            }, this.visibleToPlayer = function (player) {
                return !this.hideFromEnemy || this.owner && (this.owner == player || this.owner.team && player.team == this.owner.team);
            }, this.update = function (delta) {
                this.active && (this.xWiggle && (this.xWiggle *= Math.pow(0.99, delta)), this.yWiggle && (this.yWiggle *= Math.pow(0.99, delta)), this.turnSpeed && (this.dir += this.turnSpeed * delta));
            };
        };
    },
    function (module, exports) {
        /* 9: ./src/js/data/items.js */
        module.exports.groups = [
            {
                id: 0,
                name: 'food',
                layer: 0
            },
            {
                id: 1,
                name: 'walls',
                place: !0,
                limit: 30,
                layer: 0
            },
            {
                id: 2,
                name: 'spikes',
                place: !0,
                limit: 15,
                layer: 0
            },
            {
                id: 3,
                name: 'mill',
                place: !0,
                limit: 7,
                layer: 1
            },
            {
                id: 4,
                name: 'mine',
                place: !0,
                limit: 1,
                layer: 0
            },
            {
                id: 5,
                name: 'trap',
                place: !0,
                limit: 6,
                layer: -1
            },
            {
                id: 6,
                name: 'booster',
                place: !0,
                limit: 12,
                layer: -1
            },
            {
                id: 7,
                name: 'turret',
                place: !0,
                limit: 2,
                layer: 1
            },
            {
                id: 8,
                name: 'watchtower',
                place: !0,
                limit: 12,
                layer: 1
            },
            {
                id: 9,
                name: 'buff',
                place: !0,
                limit: 4,
                layer: -1
            },
            {
                id: 10,
                name: 'spawn',
                place: !0,
                limit: 1,
                layer: -1
            },
            {
                id: 11,
                name: 'sapling',
                place: !0,
                limit: 2,
                layer: 0
            },
            {
                id: 12,
                name: 'blocker',
                place: !0,
                limit: 3,
                layer: -1
            },
            {
                id: 13,
                name: 'teleporter',
                place: !0,
                limit: 2,
                layer: -1
            }
        ], exports.projectiles = [
            {
                indx: 0,
                layer: 0,
                src: 'arrow_1',
                dmg: 25,
                speed: 1.6,
                scale: 103,
                range: 1000
            },
            {
                indx: 1,
                layer: 1,
                dmg: 25,
                scale: 20
            },
            {
                indx: 0,
                layer: 0,
                src: 'arrow_1',
                dmg: 35,
                speed: 2.5,
                scale: 103,
                range: 1200
            },
            {
                indx: 0,
                layer: 0,
                src: 'arrow_1',
                dmg: 30,
                speed: 2,
                scale: 103,
                range: 1200
            },
            {
                indx: 1,
                layer: 1,
                dmg: 16,
                scale: 20
            },
            {
                indx: 0,
                layer: 0,
                src: 'bullet_1',
                dmg: 50,
                speed: 3.6,
                scale: 160,
                range: 1400
            }
        ], exports.weapons = [
            {
                id: 0,
                type: 0,
                name: 'tool hammer',
                desc: 'tool for gathering all resources',
                src: 'hammer_1',
                length: 140,
                width: 140,
                xOff: -3,
                yOff: 18,
                dmg: 25,
                range: 65,
                gather: 1,
                speed: 300
            },
            {
                id: 1,
                type: 0,
                age: 2,
                name: 'hand axe',
                desc: 'gathers resources at a higher rate',
                src: 'axe_1',
                length: 140,
                width: 140,
                xOff: 3,
                yOff: 24,
                dmg: 30,
                spdMult: 1,
                range: 70,
                gather: 2,
                speed: 400
            },
            {
                id: 2,
                type: 0,
                age: 8,
                pre: 1,
                name: 'great axe',
                desc: 'deal more damage and gather more resources',
                src: 'great_axe_1',
                length: 140,
                width: 140,
                xOff: -8,
                yOff: 25,
                dmg: 35,
                spdMult: 1,
                range: 75,
                gather: 4,
                speed: 400
            },
            {
                id: 3,
                type: 0,
                age: 2,
                name: 'short sword',
                desc: 'increased attack power but slower move speed',
                src: 'sword_1',
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 46,
                dmg: 35,
                spdMult: 0.85,
                range: 110,
                gather: 1,
                speed: 300
            },
            {
                id: 4,
                type: 0,
                age: 8,
                pre: 3,
                name: 'katana',
                desc: 'greater range and damage',
                src: 'samurai_1',
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 59,
                dmg: 40,
                spdMult: 0.8,
                range: 118,
                gather: 1,
                speed: 300
            },
            {
                id: 5,
                type: 0,
                age: 2,
                name: 'polearm',
                desc: 'long range melee weapon',
                src: 'spear_1',
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 53,
                dmg: 45,
                knock: 0.2,
                spdMult: 0.82,
                range: 142,
                gather: 1,
                speed: 700
            },
            {
                id: 6,
                type: 0,
                age: 2,
                name: 'bat',
                desc: 'fast long range melee weapon',
                src: 'bat_1',
                iPad: 1.3,
                length: 110,
                width: 180,
                xOff: -8,
                yOff: 53,
                dmg: 20,
                knock: 0.7,
                range: 110,
                gather: 1,
                speed: 300
            },
            {
                id: 7,
                type: 0,
                age: 2,
                name: 'daggers',
                desc: 'really fast short range weapon',
                src: 'dagger_1',
                iPad: 0.8,
                length: 110,
                width: 110,
                xOff: 18,
                yOff: 0,
                dmg: 20,
                knock: 0.1,
                range: 65,
                gather: 1,
                hitSlow: 0.1,
                spdMult: 1.13,
                speed: 100
            },
            {
                id: 8,
                type: 0,
                age: 2,
                name: 'stick',
                desc: 'great for gathering but very weak',
                src: 'stick_1',
                length: 140,
                width: 140,
                xOff: 3,
                yOff: 24,
                dmg: 1,
                spdMult: 1,
                range: 70,
                gather: 7,
                speed: 400
            },
            {
                id: 9,
                type: 1,
                age: 6,
                name: 'hunting bow',
                desc: 'bow used for ranged combat and hunting',
                src: 'bow_1',
                req: [
                    'wood',
                    4
                ],
                length: 120,
                width: 120,
                xOff: -6,
                yOff: 0,
                projectile: 0,
                spdMult: 0.75,
                speed: 600
            },
            {
                id: 10,
                type: 1,
                age: 6,
                name: 'great hammer',
                desc: 'hammer used for destroying structures',
                src: 'great_hammer_1',
                length: 140,
                width: 140,
                xOff: -9,
                yOff: 25,
                dmg: 10,
                spdMult: 0.88,
                range: 75,
                sDmg: 7.5,
                gather: 1,
                speed: 400
            },
            {
                id: 11,
                type: 1,
                age: 6,
                name: 'wooden shield',
                desc: 'blocks projectiles and reduces melee damage',
                src: 'shield_1',
                length: 120,
                width: 120,
                shield: 0.2,
                xOff: 6,
                yOff: 0,
                spdMult: 0.7
            },
            {
                id: 12,
                type: 1,
                age: 8,
                pre: 9,
                name: 'crossbow',
                desc: 'deals more damage and has greater range',
                src: 'crossbow_1',
                req: [
                    'wood',
                    5
                ],
                aboveHand: !0,
                armS: 0.75,
                length: 120,
                width: 120,
                xOff: -4,
                yOff: 0,
                projectile: 2,
                spdMult: 0.7,
                speed: 700
            },
            {
                id: 13,
                type: 1,
                age: 9,
                pre: 12,
                name: 'repeater crossbow',
                desc: 'high firerate crossbow with reduced damage',
                src: 'crossbow_2',
                req: [
                    'wood',
                    10
                ],
                aboveHand: !0,
                armS: 0.75,
                length: 120,
                width: 120,
                xOff: -4,
                yOff: 0,
                projectile: 3,
                spdMult: 0.7,
                speed: 230
            },
            {
                id: 14,
                type: 1,
                age: 6,
                name: 'mc grabby',
                desc: 'steals resources from enemies',
                src: 'grab_1',
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 53,
                dmg: 0,
                steal: 250,
                knock: 0.2,
                spdMult: 1.05,
                range: 125,
                gather: 0,
                speed: 700
            },
            {
                id: 15,
                type: 1,
                age: 9,
                pre: 12,
                name: 'musket',
                desc: 'slow firerate but high damage and range',
                src: 'musket_1',
                req: [
                    'stone',
                    10
                ],
                aboveHand: !0,
                rec: 0.35,
                armS: 0.6,
                hndS: 0.3,
                hndD: 1.6,
                length: 205,
                width: 205,
                xOff: 25,
                yOff: 0,
                projectile: 5,
                hideProjectile: !0,
                spdMult: 0.6,
                speed: 1500
            }
        ], module.exports.list = [
            {
                group: module.exports.groups[0],
                name: 'apple',
                desc: 'restores 20 health when consumed',
                req: [
                    'food',
                    10
                ],
                consume: function (doer) {
                    return doer.changeHealth(20, doer);
                },
                scale: 22,
                holdOffset: 15
            },
            {
                age: 3,
                group: module.exports.groups[0],
                name: 'cookie',
                desc: 'restores 40 health when consumed',
                req: [
                    'food',
                    15
                ],
                consume: function (doer) {
                    return doer.changeHealth(40, doer);
                },
                scale: 27,
                holdOffset: 15
            },
            {
                age: 7,
                group: module.exports.groups[0],
                name: 'cheese',
                desc: 'restores 30 health and another 50 over 5 seconds',
                req: [
                    'food',
                    25
                ],
                consume: function (doer) {
                    return !!(doer.changeHealth(30, doer) || doer.health < 100) && (doer.dmgOverTime.dmg = -10, doer.dmgOverTime.doer = doer, doer.dmgOverTime.time = 5, !0);
                },
                scale: 27,
                holdOffset: 15
            },
            {
                group: module.exports.groups[1],
                name: 'wood wall',
                desc: 'provides protection for your village',
                req: [
                    'wood',
                    10
                ],
                projDmg: !0,
                health: 380,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 3,
                group: module.exports.groups[1],
                name: 'stone wall',
                desc: 'provides improved protection for your village',
                req: [
                    'stone',
                    25
                ],
                health: 900,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 7,
                pre: 1,
                group: module.exports.groups[1],
                name: 'castle wall',
                desc: 'provides powerful protection for your village',
                req: [
                    'stone',
                    35
                ],
                health: 1500,
                scale: 52,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                group: module.exports.groups[2],
                name: 'spikes',
                desc: 'damages enemies when they touch them',
                req: [
                    'wood',
                    20,
                    'stone',
                    5
                ],
                health: 400,
                dmg: 20,
                scale: 49,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            },
            {
                age: 5,
                group: module.exports.groups[2],
                name: 'greater spikes',
                desc: 'damages enemies when they touch them',
                req: [
                    'wood',
                    30,
                    'stone',
                    10
                ],
                health: 500,
                dmg: 35,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            },
            {
                age: 9,
                pre: 1,
                group: module.exports.groups[2],
                name: 'poison spikes',
                desc: 'poisons enemies when they touch them',
                req: [
                    'wood',
                    35,
                    'stone',
                    15
                ],
                health: 600,
                dmg: 30,
                pDmg: 5,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            },
            {
                age: 9,
                pre: 2,
                group: module.exports.groups[2],
                name: 'spinning spikes',
                desc: 'damages enemies when they touch them',
                req: [
                    'wood',
                    30,
                    'stone',
                    20
                ],
                health: 500,
                dmg: 45,
                turnSpeed: 0.003,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5
            },
            {
                group: module.exports.groups[3],
                name: 'windmill',
                desc: 'generates gold over time',
                req: [
                    'wood',
                    50,
                    'stone',
                    10
                ],
                health: 400,
                pps: 1,
                turnSpeed: 0.0016,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 45,
                holdOffset: 20,
                placeOffset: 5
            },
            {
                age: 5,
                pre: 1,
                group: module.exports.groups[3],
                name: 'faster windmill',
                desc: 'generates more gold over time',
                req: [
                    'wood',
                    60,
                    'stone',
                    20
                ],
                health: 500,
                pps: 1.5,
                turnSpeed: 0.0025,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 47,
                holdOffset: 20,
                placeOffset: 5
            },
            {
                age: 8,
                pre: 1,
                group: module.exports.groups[3],
                name: 'power mill',
                desc: 'generates more gold over time',
                req: [
                    'wood',
                    100,
                    'stone',
                    50
                ],
                health: 800,
                pps: 2,
                turnSpeed: 0.005,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 47,
                holdOffset: 20,
                placeOffset: 5
            },
            {
                age: 5,
                group: module.exports.groups[4],
                type: 2,
                name: 'mine',
                desc: 'allows you to mine stone',
                req: [
                    'wood',
                    20,
                    'stone',
                    100
                ],
                iconLineMult: 12,
                scale: 65,
                holdOffset: 20,
                placeOffset: 0
            },
            {
                age: 5,
                group: module.exports.groups[11],
                type: 0,
                name: 'sapling',
                desc: 'allows you to farm wood',
                req: [
                    'wood',
                    150
                ],
                iconLineMult: 12,
                colDiv: 0.5,
                scale: 110,
                holdOffset: 50,
                placeOffset: -15
            },
            {
                age: 4,
                group: module.exports.groups[5],
                name: 'pit trap',
                desc: 'pit that traps enemies if they walk over it',
                req: [
                    'wood',
                    30,
                    'stone',
                    30
                ],
                trap: !0,
                ignoreCollision: !0,
                hideFromEnemy: !0,
                health: 500,
                colDiv: 0.2,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 4,
                group: module.exports.groups[6],
                name: 'boost pad',
                desc: 'provides boost when stepped on',
                req: [
                    'stone',
                    20,
                    'wood',
                    5
                ],
                ignoreCollision: !0,
                boostSpeed: 1.5,
                health: 150,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 7,
                group: module.exports.groups[7],
                doUpdate: !0,
                name: 'turret',
                desc: 'defensive structure that shoots at enemies',
                req: [
                    'wood',
                    200,
                    'stone',
                    150
                ],
                health: 800,
                projectile: 1,
                shootRange: 700,
                shootRate: 2200,
                scale: 43,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 7,
                group: module.exports.groups[8],
                name: 'platform',
                desc: 'platform to shoot over walls and cross over water',
                req: [
                    'wood',
                    20
                ],
                ignoreCollision: !0,
                zIndex: 1,
                health: 300,
                scale: 43,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 7,
                group: module.exports.groups[9],
                name: 'healing pad',
                desc: 'standing on it will slowly heal you',
                req: [
                    'wood',
                    30,
                    'food',
                    10
                ],
                ignoreCollision: !0,
                healCol: 15,
                health: 400,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 9,
                group: module.exports.groups[10],
                name: 'spawn pad',
                desc: 'you will spawn here when you die but it will dissapear',
                req: [
                    'wood',
                    100,
                    'stone',
                    100
                ],
                health: 400,
                ignoreCollision: !0,
                spawnPoint: !0,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 7,
                group: module.exports.groups[12],
                name: 'blocker',
                desc: 'blocks building in radius',
                req: [
                    'wood',
                    30,
                    'stone',
                    25
                ],
                ignoreCollision: !0,
                blocker: 300,
                health: 400,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            },
            {
                age: 7,
                group: module.exports.groups[13],
                name: 'teleporter',
                desc: 'teleports you to a random point on the map',
                req: [
                    'wood',
                    60,
                    'stone',
                    60
                ],
                ignoreCollision: !0,
                teleport: !0,
                health: 200,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5
            }
        ];
        for (var i = 0; i < module.exports.list.length; ++i)
            module.exports.list[i].id = i, module.exports.list[i].pre && (module.exports.list[i].pre = i - module.exports.list[i].pre);
    },
    function (module, t) {
        /* 10: ./src/js/data/mapManager.js */
        module.exports = {};
        /* Please dont remove this line if you use this in your script <3 */
        console.context().log('This script is made using Illya#9999\'s bundle processor');
    },
    function (module, t) {
        /* 11: ./src/js/data/objectManager.js */
        var mathFloor = Math.floor, mathABS = Math.abs, mathCOS = Math.cos, mathSIN = Math.sin, mathSQRT = (Math.pow, Math.sqrt);
        module.exports = function (GameObject, gameObjects, UTILS, config, players, server) {
            var tmpX, tmpY;
            this.objects = gameObjects, this.grids = {}, this.updateObjects = [];
            var tmpS = config.mapScale / config.colGrid;
            this.setObjectGrids = function (obj) {
                for (var objX = Math.min(config.mapScale, Math.max(0, obj.x)), objY = Math.min(config.mapScale, Math.max(0, obj.y)), x = 0; x < config.colGrid; ++x) {
                    tmpX = x * tmpS;
                    for (var y = 0; y < config.colGrid; ++y)
                        tmpY = y * tmpS, objX + obj.scale >= tmpX && objX - obj.scale <= tmpX + tmpS && objY + obj.scale >= tmpY && objY - obj.scale <= tmpY + tmpS && (this.grids[x + '_' + y] || (this.grids[x + '_' + y] = []), this.grids[x + '_' + y].push(obj), obj.gridLocations.push(x + '_' + y));
                }
            }, this.removeObjGrid = function (obj) {
                for (var tmpIndx, i = 0; i < obj.gridLocations.length; ++i)
                    (tmpIndx = this.grids[obj.gridLocations[i]].indexOf(obj)) >= 0 && this.grids[obj.gridLocations[i]].splice(tmpIndx, 1);
            }, this.disableObj = function (obj) {
                if (obj.active = !1, server) {
                    obj.owner && obj.pps && (obj.owner.pps -= obj.pps), this.removeObjGrid(obj);
                    var tmpIndx = this.updateObjects.indexOf(obj);
                    tmpIndx >= 0 && this.updateObjects.splice(tmpIndx, 1);
                }
            }, this.hitObj = function (tmpObj, tmpDir) {
                for (var p = 0; p < players.length; ++p)
                    players[p].active && (tmpObj.sentTo[players[p].id] && (tmpObj.active ? players[p].canSee(tmpObj) && server.send(players[p].id, '8', UTILS.fixTo(tmpDir, 1), tmpObj.sid) : server.send(players[p].id, '12', tmpObj.sid)), tmpObj.active || tmpObj.owner != players[p] || players[p].changeItemCount(tmpObj.group.id, -1));
            };
            var tmpGrid, tmpObj, tmpArray = [];
            this.getGridArrays = function (xPos, yPos, s) {
                tmpX = mathFloor(xPos / tmpS), tmpY = mathFloor(yPos / tmpS), tmpArray.length = 0;
                try {
                    this.grids[tmpX + '_' + tmpY] && tmpArray.push(this.grids[tmpX + '_' + tmpY]), xPos + s >= (tmpX + 1) * tmpS && ((tmpGrid = this.grids[tmpX + 1 + '_' + tmpY]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS ? (tmpGrid = this.grids[tmpX + 1 + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid) : yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX + 1 + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid)), tmpX && xPos - s <= tmpX * tmpS && ((tmpGrid = this.grids[tmpX - 1 + '_' + tmpY]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS ? (tmpGrid = this.grids[tmpX - 1 + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid) : yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX - 1 + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid)), yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS && (tmpGrid = this.grids[tmpX + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid);
                } catch (e) {
                }
                return tmpArray;
            }, this.add = function (sid, x, y, dir, s, type, data, setSID, owner) {
                tmpObj = null;
                for (var i = 0; i < gameObjects.length; ++i)
                    if (gameObjects[i].sid == sid) {
                        tmpObj = gameObjects[i];
                        break;
                    }
                if (!tmpObj)
                    for (i = 0; i < gameObjects.length; ++i)
                        if (!gameObjects[i].active) {
                            tmpObj = gameObjects[i];
                            break;
                        }
                tmpObj || (tmpObj = new GameObject(sid), gameObjects.push(tmpObj)), setSID && (tmpObj.sid = sid), tmpObj.init(x, y, dir, s, type, data, owner), server && (this.setObjectGrids(tmpObj), tmpObj.doUpdate && this.updateObjects.push(tmpObj));
            }, this.disableBySid = function (sid) {
                for (var i = 0; i < gameObjects.length; ++i)
                    if (gameObjects[i].sid == sid) {
                        this.disableObj(gameObjects[i]);
                        break;
                    }
            }, this.removeAllItems = function (sid, server) {
                for (var i = 0; i < gameObjects.length; ++i)
                    gameObjects[i].active && gameObjects[i].owner && gameObjects[i].owner.sid == sid && this.disableObj(gameObjects[i]);
                server && server.broadcast('13', sid);
            }, this.fetchSpawnObj = function (sid) {
                for (var tmpLoc = null, i = 0; i < gameObjects.length; ++i)
                    if ((tmpObj = gameObjects[i]).active && tmpObj.owner && tmpObj.owner.sid == sid && tmpObj.spawnPoint) {
                        tmpLoc = [
                            tmpObj.x,
                            tmpObj.y
                        ], this.disableObj(tmpObj), server.broadcast('12', tmpObj.sid), tmpObj.owner && tmpObj.owner.changeItemCount(tmpObj.group.id, -1);
                        break;
                    }
                return tmpLoc;
            }, this.checkItemLocation = function (x, y, s, sM, indx, ignoreWater, placer) {
                for (var i = 0; i < gameObjects.length; ++i) {
                    var blockS = gameObjects[i].blocker ? gameObjects[i].blocker : gameObjects[i].getScale(sM, gameObjects[i].isItem);
                    if (gameObjects[i].active && UTILS.getDistance(x, y, gameObjects[i].x, gameObjects[i].y) < s + blockS)
                        return !1;
                }
                return !(!ignoreWater && 18 != indx && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2);
            }, this.addProjectile = function (x, y, dir, range, indx) {
                for (var tmpProj, tmpData = items.projectiles[indx], i = 0; i < projectiles.length; ++i)
                    if (!projectiles[i].active) {
                        tmpProj = projectiles[i];
                        break;
                    }
                tmpProj || (tmpProj = new Projectile(players, UTILS), projectiles.push(tmpProj)), tmpProj.init(indx, x, y, dir, tmpData.speed, range, tmpData.scale);
            }, this.checkCollision = function (player, other, delta) {
                delta = delta || 1;
                var dx = player.x - other.x, dy = player.y - other.y, tmpLen = player.scale + other.scale;
                if (mathABS(dx) <= tmpLen || mathABS(dy) <= tmpLen) {
                    tmpLen = player.scale + (other.getScale ? other.getScale() : other.scale);
                    var tmpInt = mathSQRT(dx * dx + dy * dy) - tmpLen;
                    if (tmpInt <= 0) {
                        if (other.ignoreCollision)
                            !other.trap || player.noTrap || other.owner == player || other.owner && other.owner.team && other.owner.team == player.team ? other.boostSpeed ? (player.xVel += delta * other.boostSpeed * (other.weightM || 1) * mathCOS(other.dir), player.yVel += delta * other.boostSpeed * (other.weightM || 1) * mathSIN(other.dir)) : other.healCol ? player.healCol = other.healCol : other.teleport && (player.x = UTILS.randInt(0, config.mapScale), player.y = UTILS.randInt(0, config.mapScale)) : (player.lockMove = !0, other.hideFromEnemy = !1);
                        else {
                            var tmpDir = UTILS.getDirection(player.x, player.y, other.x, other.y);
                            if (UTILS.getDistance(player.x, player.y, other.x, other.y), other.isPlayer ? (tmpInt = -1 * tmpInt / 2, player.x += tmpInt * mathCOS(tmpDir), player.y += tmpInt * mathSIN(tmpDir), other.x -= tmpInt * mathCOS(tmpDir), other.y -= tmpInt * mathSIN(tmpDir)) : (player.x = other.x + tmpLen * mathCOS(tmpDir), player.y = other.y + tmpLen * mathSIN(tmpDir), player.xVel *= 0.75, player.yVel *= 0.75), other.dmg && other.owner != player && (!other.owner || !other.owner.team || other.owner.team != player.team)) {
                                player.changeHealth(-other.dmg, other.owner, other);
                                var tmpSpd = 1.5 * (other.weightM || 1);
                                player.xVel += tmpSpd * mathCOS(tmpDir), player.yVel += tmpSpd * mathSIN(tmpDir), !other.pDmg || player.skin && player.skin.poisonRes || (player.dmgOverTime.dmg = other.pDmg, player.dmgOverTime.time = 5, player.dmgOverTime.doer = other.owner), player.colDmg && other.health && (other.changeHealth(-player.colDmg) && this.disableObj(other), this.hitObj(other, UTILS.getDirection(player.x, player.y, other.x, other.y)));
                            }
                        }
                        return other.zIndex > player.zIndex && (player.zIndex = other.zIndex), !0;
                    }
                }
                return !1;
            };
        };
    },
    function (module, t, __webpack_require__) {
        /* 12: ./src/js/data/player.js */
        var langFilter = new (__webpack_require__(13))();
        langFilter.addWords('jew', 'black', 'baby', 'child', 'white', 'porn', 'pedo', 'trump', 'clinton', 'hitler', 'nazi', 'gay', 'pride', 'sex', 'pleasure', 'touch', 'poo', 'kids', 'rape', 'white power', 'nigga', 'nig nog', 'doggy', 'rapist', 'boner', 'nigger', 'nigg', 'finger', 'nogger', 'nagger', 'nig', 'fag', 'gai', 'pole', 'stripper', 'penis', 'vagina', 'pussy', 'nazi', 'hitler', 'stalin', 'burn', 'chamber', 'cock', 'peen', 'dick', 'spick', 'nieger', 'die', 'satan', 'n|ig', 'nlg', 'cunt', 'c0ck', 'fag', 'lick', 'condom', 'anal', 'shit', 'phile', 'little', 'kids', 'free KR', 'tiny', 'sidney', 'ass', 'kill', '.io', '(dot)', '[dot]', 'mini', 'whiore', 'whore', 'faggot', 'github', '1337', '666', 'satan', 'senpa', 'discord', 'd1scord', 'mistik', '.io', 'senpa.io', 'sidney', 'sid', 'senpaio', 'vries', 'asa');
        var mathABS = Math.abs, mathCOS = Math.cos, mathSIN = Math.sin, mathPOW = Math.pow, mathSQRT = Math.sqrt;
        module.exports = function (id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
            this.id = id, this.sid = sid, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
            for (var i = 0; i < accessories.length; ++i)
                accessories[i].price <= 0 && (this.tails[accessories[i].id] = 1);
            for (this.skins = {}, i = 0; i < hats.length; ++i)
                hats[i].price <= 0 && (this.skins[hats[i].id] = 1);
            this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function (moofoll) {
                this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.cHealth = this.health, this.scale = config.playerScale, this.speed = config.playerSpeed, this.resetMoveDir(), this.resetResources(moofoll), this.items = [
                    0,
                    3,
                    6,
                    10
                ], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {};
            }, this.resetMoveDir = function () {
                this.moveDir = void 0;
            }, this.resetResources = function (moofoll) {
                for (var i = 0; i < config.resourceTypes.length; ++i)
                    this[config.resourceTypes[i]] = moofoll ? 100 : 0;
            }, this.addItem = function (id) {
                var tmpItem = items.list[id];
                if (tmpItem) {
                    for (var i = 0; i < this.items.length; ++i)
                        if (items.list[this.items[i]].group == tmpItem.group)
                            return this.buildIndex == this.items[i] && (this.buildIndex = id), this.items[i] = id, !0;
                    return this.items.push(id), !0;
                }
                return !1;
            }, this.setUserData = function (data) {
                if (data) {
                    this.name = 'unknown';
                    var name = data.name + '', isProfane = !1, convertedName = (name = (name = (name = (name = name.slice(0, config.maxNameLength)).replace(/[^\w:\(\)\/? -]+/gim, ' ')).replace(/[^\x00-\x7F]/g, ' ')).trim()).toLowerCase().replace(/\s/g, '').replace(/1/g, 'i').replace(/0/g, 'o').replace(/5/g, 's');
                    for (var word of langFilter.list)
                        if (-1 != convertedName.indexOf(word)) {
                            isProfane = !0;
                            break;
                        }
                    name.length > 0 && !isProfane && (this.name = name), this.skinColor = 0, config.skinColors[data.skin] && (this.skinColor = data.skin);
                }
            }, this.getData = function () {
                return [
                    this.id,
                    this.sid,
                    this.name,
                    UTILS.fixTo(this.x, 2),
                    UTILS.fixTo(this.y, 2),
                    UTILS.fixTo(this.dir, 3),
                    this.health,
                    this.maxHealth,
                    this.scale,
                    this.skinColor
                ];
            }, this.setData = function (data) {
                this.id = data[0], this.sid = data[1], this.name = data[2], this.x = data[3], this.y = data[4], this.dir = data[5], this.health = data[6], this.maxHealth = data[7], this.scale = data[8], this.skinColor = data[9];
            };
            var timerCount = 0;
            this.update = function (delta) {
                if (this.alive) {
                    if (this.shameTimer > 0 && (this.shameTimer -= delta, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), (timerCount -= delta) <= 0) {
                        var regenAmount = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
                        regenAmount && this.changeHealth(regenAmount, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), timerCount = 1000;
                    }
                    if (this.alive) {
                        if (this.slowMult < 1 && (this.slowMult += 0.0008 * delta, this.slowMult > 1 && (this.slowMult = 1)), this.noMovTimer += delta, (this.xVel || this.yVel) && (this.noMovTimer = 0), this.lockMove)
                            this.xVel = 0, this.yVel = 0;
                        else {
                            var spdMult = (this.buildIndex >= 0 ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= config.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : config.snowSpeed : 1) * this.slowMult;
                            !this.zIndex && this.y >= config.mapScale / 2 - config.riverWidth / 2 && this.y <= config.mapScale / 2 + config.riverWidth / 2 && (this.skin && this.skin.watrImm ? (spdMult *= 0.75, this.xVel += 0.4 * config.waterCurrent * delta) : (spdMult *= 0.33, this.xVel += config.waterCurrent * delta));
                            var xVel = null != this.moveDir ? mathCOS(this.moveDir) : 0, yVel = null != this.moveDir ? mathSIN(this.moveDir) : 0, length = mathSQRT(xVel * xVel + yVel * yVel);
                            0 != length && (xVel /= length, yVel /= length), xVel && (this.xVel += xVel * this.speed * spdMult * delta), yVel && (this.yVel += yVel * this.speed * spdMult * delta);
                        }
                        var tmpList;
                        this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
                        for (var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta), depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40))), tMlt = 1 / depth, alreadyCollided = {}, i = 0; i < depth; ++i) {
                            this.xVel && (this.x += this.xVel * delta * tMlt), this.yVel && (this.y += this.yVel * delta * tMlt), tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
                            for (var x = 0; x < tmpList.length; ++x) {
                                for (var y = 0; y < tmpList[x].length && (!tmpList[x][y].active || alreadyCollided[tmpList[x][y].sid] || !objectManager.checkCollision(this, tmpList[x][y], tMlt) || (alreadyCollided[tmpList[x][y].sid] = !0, this.alive)); ++y);
                                if (!this.alive)
                                    break;
                            }
                            if (!this.alive)
                                break;
                        }
                        for (i = (tmpIndx = players.indexOf(this)) + 1; i < players.length; ++i)
                            players[i] != this && players[i].alive && objectManager.checkCollision(this, players[i]);
                        if (this.xVel && (this.xVel *= mathPOW(config.playerDecel, delta), this.xVel <= 0.01 && this.xVel >= -0.01 && (this.xVel = 0)), this.yVel && (this.yVel *= mathPOW(config.playerDecel, delta), this.yVel <= 0.01 && this.yVel >= -0.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > config.mapScale && (this.x = config.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > config.mapScale && (this.y = config.mapScale - this.scale), this.buildIndex < 0)
                            if (this.reloads[this.weaponIndex] > 0)
                                this.reloads[this.weaponIndex] -= delta, this.gathering = this.mouseState;
                            else if (this.gathering || this.autoGather) {
                                var worked = !0;
                                if (null != items.weapons[this.weaponIndex].gather)
                                    this.gather(players);
                                else if (null != items.weapons[this.weaponIndex].projectile && this.hasRes(items.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
                                    this.useRes(items.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0), this.noMovTimer = 0;
                                    var tmpIndx = items.weapons[this.weaponIndex].projectile, projOffset = 2 * this.scale, aMlt = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
                                    items.weapons[this.weaponIndex].rec && (this.xVel -= items.weapons[this.weaponIndex].rec * mathCOS(this.dir), this.yVel -= items.weapons[this.weaponIndex].rec * mathSIN(this.dir)), projectileManager.addProjectile(this.x + projOffset * mathCOS(this.dir), this.y + projOffset * mathSIN(this.dir), this.dir, items.projectiles[tmpIndx].range * aMlt, items.projectiles[tmpIndx].speed * aMlt, tmpIndx, this, null, this.zIndex);
                                } else
                                    worked = !1;
                                this.gathering = this.mouseState, worked && (this.reloads[this.weaponIndex] = items.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1));
                            }
                    }
                }
            }, this.addWeaponXP = function (amnt) {
                this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += amnt;
            }, this.earnXP = function (amount) {
                this.age < config.maxAge && (this.XP += amount, this.XP >= this.maxXP ? (this.age < config.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, server.send(this.id, '16', this.upgradePoints, this.upgrAge), server.send(this.id, '15', this.XP, UTILS.fixTo(this.maxXP, 1), this.age)) : server.send(this.id, '15', this.XP));
            }, this.changeHealth = function (amount, doer) {
                if (amount > 0 && this.health >= this.maxHealth)
                    return !1;
                amount < 0 && this.skin && (amount *= this.skin.dmgMult || 1), amount < 0 && this.tail && (amount *= this.tail.dmgMult || 1), amount < 0 && (this.hitTime = Date.now()), this.health += amount, this.health > this.maxHealth && (amount -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(doer);
                for (var i = 0; i < players.length; ++i)
                    this.sentTo[players[i].id] && server.send(players[i].id, 'h', this.sid, this.health);
                return !doer || !doer.canSee(this) || doer == this && amount < 0 || server.send(doer.id, 't', Math.round(this.x), Math.round(this.y), Math.round(-amount), 1), !0;
            }, this.kill = function (doer) {
                doer && doer.alive && (doer.kills++, doer.skin && doer.skin.goldSteal ? scoreCallback(doer, Math.round(this.points / 2)) : scoreCallback(doer, Math.round(100 * this.age * (doer.skin && doer.skin.kScrM ? doer.skin.kScrM : 1))), server.send(doer.id, '9', 'kills', doer.kills, 1)), this.alive = !1, server.send(this.id, '11'), iconCallback();
            }, this.addResource = function (type, amount, auto) {
                !auto && amount > 0 && this.addWeaponXP(amount), 3 == type ? scoreCallback(this, amount, !0) : (this[config.resourceTypes[type]] += amount, server.send(this.id, '9', config.resourceTypes[type], this[config.resourceTypes[type]], 1));
            }, this.changeItemCount = function (index, value) {
                this.itemCounts[index] = this.itemCounts[index] || 0, this.itemCounts[index] += value, server.send(this.id, '14', index, this.itemCounts[index]);
            }, this.buildItem = function (item) {
                var tmpS = this.scale + item.scale + (item.placeOffset || 0), tmpX = this.x + tmpS * mathCOS(this.dir), tmpY = this.y + tmpS * mathSIN(this.dir);
                if (this.canBuild(item) && !(item.consume && this.skin && this.skin.noEat) && (item.consume || objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, !1, this))) {
                    var worked = !1;
                    if (item.consume) {
                        if (this.hitTime) {
                            var timeSinceHit = Date.now() - this.hitTime;
                            this.hitTime = 0, timeSinceHit <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 30000, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0));
                        }
                        this.shameTimer <= 0 && (worked = item.consume(this));
                    } else
                        worked = !0, item.group.limit && this.changeItemCount(item.group.id, 1), item.pps && (this.pps += item.pps), objectManager.add(objectManager.objects.length, tmpX, tmpY, this.dir, item.scale, item.type, item, !1, this);
                    worked && (this.useRes(item), this.buildIndex = -1);
                }
            }, this.hasRes = function (item, mult) {
                for (var i = 0; i < item.req.length;) {
                    if (this[item.req[i]] < Math.round(item.req[i + 1] * (mult || 1)))
                        return !1;
                    i += 2;
                }
                return !0;
            }, this.useRes = function (item, mult) {
                if (!config.inSandbox)
                    for (var i = 0; i < item.req.length;)
                        this.addResource(config.resourceTypes.indexOf(item.req[i]), -Math.round(item.req[i + 1] * (mult || 1))), i += 2;
            }, this.canBuild = function (item) {
                var limit = config.inSandbox ? Math.max(3 * item.group.limit, 50) : item.group.limit;
                return !(limit && this.itemCounts[item.group.id] >= limit) && (!!config.inSandbox || this.hasRes(item));
            }, this.gather = function () {
                this.noMovTimer = 0, this.slowMult -= items.weapons[this.weaponIndex].hitSlow || 0.3, this.slowMult < 0 && (this.slowMult = 0);
                for (var tmpDir, tmpObj, hitSomething, tmpVariant = config.fetchVariant(this), applyPoison = tmpVariant.poison, variantDmg = tmpVariant.val, hitObjs = {}, tmpList = objectManager.getGridArrays(this.x, this.y, items.weapons[this.weaponIndex].range), t = 0; t < tmpList.length; ++t)
                    for (var i = 0; i < tmpList[t].length; ++i)
                        if ((tmpObj = tmpList[t][i]).active && !tmpObj.dontGather && !hitObjs[tmpObj.sid] && tmpObj.visibleToPlayer(this) && UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - tmpObj.scale <= items.weapons[this.weaponIndex].range && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle)) {
                            if (hitObjs[tmpObj.sid] = 1, tmpObj.health) {
                                if (tmpObj.changeHealth(-items.weapons[this.weaponIndex].dmg * variantDmg * (items.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
                                    for (var x = 0; x < tmpObj.req.length;)
                                        this.addResource(config.resourceTypes.indexOf(tmpObj.req[x]), tmpObj.req[x + 1]), x += 2;
                                    objectManager.disableObj(tmpObj);
                                }
                            } else {
                                this.earnXP(4 * items.weapons[this.weaponIndex].gather);
                                var count = items.weapons[this.weaponIndex].gather + (3 == tmpObj.type ? 4 : 0);
                                this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(tmpObj.type, count);
                            }
                            hitSomething = !0, objectManager.hitObj(tmpObj, tmpDir);
                        }
                for (i = 0; i < players.length + ais.length; ++i)
                    if ((tmpObj = players[i] || ais[i - players.length]) != this && tmpObj.alive && (!tmpObj.team || tmpObj.team != this.team) && UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - 1.8 * tmpObj.scale <= items.weapons[this.weaponIndex].range && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle)) {
                        var stealCount = items.weapons[this.weaponIndex].steal;
                        stealCount && tmpObj.addResource && (stealCount = Math.min(tmpObj.points || 0, stealCount), this.addResource(3, stealCount), tmpObj.addResource(3, -stealCount));
                        var dmgMlt = variantDmg;
                        null != tmpObj.weaponIndex && items.weapons[tmpObj.weaponIndex].shield && UTILS.getAngleDist(tmpDir + Math.PI, tmpObj.dir) <= config.shieldAngle && (dmgMlt = items.weapons[tmpObj.weaponIndex].shield);
                        var baseDmgVal = items.weapons[this.weaponIndex].dmg, dmgVal = baseDmgVal * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1), tmpSpd = 0.3 * (tmpObj.weightM || 1) + (items.weapons[this.weaponIndex].knock || 0);
                        tmpObj.xVel += tmpSpd * mathCOS(tmpDir), tmpObj.yVel += tmpSpd * mathSIN(tmpDir), this.skin && this.skin.healD && this.changeHealth(dmgVal * dmgMlt * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(dmgVal * dmgMlt * this.tail.healD, this), tmpObj.skin && tmpObj.skin.dmg && this.changeHealth(-baseDmgVal * tmpObj.skin.dmg, tmpObj), tmpObj.tail && tmpObj.tail.dmg && this.changeHealth(-baseDmgVal * tmpObj.tail.dmg, tmpObj), !(tmpObj.dmgOverTime && this.skin && this.skin.poisonDmg) || tmpObj.skin && tmpObj.skin.poisonRes || (tmpObj.dmgOverTime.dmg = this.skin.poisonDmg, tmpObj.dmgOverTime.time = this.skin.poisonTime || 1, tmpObj.dmgOverTime.doer = this), !tmpObj.dmgOverTime || !applyPoison || tmpObj.skin && tmpObj.skin.poisonRes || (tmpObj.dmgOverTime.dmg = 5, tmpObj.dmgOverTime.time = 5, tmpObj.dmgOverTime.doer = this), tmpObj.skin && tmpObj.skin.dmgK && (this.xVel -= tmpObj.skin.dmgK * mathCOS(tmpDir), this.yVel -= tmpObj.skin.dmgK * mathSIN(tmpDir)), tmpObj.changeHealth(-dmgVal * dmgMlt, this, this);
                    }
                this.sendAnimation(hitSomething ? 1 : 0);
            }, this.sendAnimation = function (hit) {
                for (var i = 0; i < players.length; ++i)
                    this.sentTo[players[i].id] && this.canSee(players[i]) && server.send(players[i].id, '7', this.sid, hit ? 1 : 0, this.weaponIndex);
            };
            var tmpRatio = 0, animIndex = 0;
            this.animate = function (delta) {
                this.animTime > 0 && (this.animTime -= delta, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, tmpRatio = 0, animIndex = 0) : 0 == animIndex ? (tmpRatio += delta / (this.animSpeed * config.hitReturnRatio), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio)), tmpRatio >= 1 && (tmpRatio = 1, animIndex = 1)) : (tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio)), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))));
            }, this.startAnim = function (didHit, index) {
                this.animTime = this.animSpeed = items.weapons[index].speed, this.targetAngle = didHit ? -config.hitAngle : -Math.PI, tmpRatio = 0, animIndex = 0;
            }, this.canSee = function (other) {
                if (!other)
                    return !1;
                if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer)
                    return !1;
                var dx = mathABS(other.x - this.x) - other.scale, dy = mathABS(other.y - this.y) - other.scale;
                return dx <= config.maxScreenWidth / 2 * 1.3 && dy <= config.maxScreenHeight / 2 * 1.3;
            };
        };
    },
    function (e, t, i) {
        /* 13: ./node_modules/bad-words/lib/badwords.js */
        const n = i(14).words, s = i(15).array;
        e.exports = class {
            constructor(options = {}) {
                Object.assign(this, {
                    list: options.emptyList && [] || Array.prototype.concat.apply(n, [
                        s,
                        options.list || []
                    ]),
                    exclude: options.exclude || [],
                    placeHolder: options.placeHolder || '*',
                    regex: options.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
                    replaceRegex: options.replaceRegex || /\w/g
                });
            }
            isProfane(string) {
                return this.list.filter(word => {
                    const wordExp = new RegExp(`\\b${ word.replace(/(\W)/g, '\\$1') }\\b`, 'gi');
                    return !this.exclude.includes(word.toLowerCase()) && wordExp.test(string);
                }).length > 0 || !1;
            }
            replaceWord(string) {
                return string.replace(this.regex, '').replace(this.replaceRegex, this.placeHolder);
            }
            clean(string) {
                return string.split(/\b/).map(word => this.isProfane(word) ? this.replaceWord(word) : word).join('');
            }
            addWords() {
                let words = Array.from(arguments);
                this.list.push(...words), words.map(word => word.toLowerCase()).forEach(word => {
                    this.exclude.includes(word) && this.exclude.splice(this.exclude.indexOf(word), 1);
                });
            }
            removeWords() {
                this.exclude.push(...Array.from(arguments).map(word => word.toLowerCase()));
            }
        };
    },
    function (e) {
        /* 14: ./node_modules/badwords-list/lib/index.js */
        e.exports = {
            words: [
                'ahole',
                'anus',
                'ash0le',
                'ash0les',
                'asholes',
                'ass',
                'Ass Monkey',
                'Assface',
                'assh0le',
                'assh0lez',
                'asshole',
                'assholes',
                'assholz',
                'asswipe',
                'azzhole',
                'bassterds',
                'bastard',
                'bastards',
                'bastardz',
                'basterds',
                'basterdz',
                'Biatch',
                'bitch',
                'bitches',
                'Blow Job',
                'boffing',
                'butthole',
                'buttwipe',
                'c0ck',
                'c0cks',
                'c0k',
                'Carpet Muncher',
                'cawk',
                'cawks',
                'Clit',
                'cnts',
                'cntz',
                'cock',
                'cockhead',
                'cock-head',
                'cocks',
                'CockSucker',
                'cock-sucker',
                'crap',
                'cum',
                'cunt',
                'cunts',
                'cuntz',
                'dick',
                'dild0',
                'dild0s',
                'dildo',
                'dildos',
                'dilld0',
                'dilld0s',
                'dominatricks',
                'dominatrics',
                'dominatrix',
                'dyke',
                'enema',
                'f u c k',
                'f u c k e r',
                'fag',
                'fag1t',
                'faget',
                'fagg1t',
                'faggit',
                'faggot',
                'fagg0t',
                'fagit',
                'fags',
                'fagz',
                'faig',
                'faigs',
                'fart',
                'flipping the bird',
                'fuck',
                'fucker',
                'fuckin',
                'fucking',
                'fucks',
                'Fudge Packer',
                'fuk',
                'Fukah',
                'Fuken',
                'fuker',
                'Fukin',
                'Fukk',
                'Fukkah',
                'Fukken',
                'Fukker',
                'Fukkin',
                'g00k',
                'God-damned',
                'h00r',
                'h0ar',
                'h0re',
                'hells',
                'hoar',
                'hoor',
                'hoore',
                'jackoff',
                'jap',
                'japs',
                'jerk-off',
                'jisim',
                'jiss',
                'jizm',
                'jizz',
                'knob',
                'knobs',
                'knobz',
                'kunt',
                'kunts',
                'kuntz',
                'Lezzian',
                'Lipshits',
                'Lipshitz',
                'masochist',
                'masokist',
                'massterbait',
                'masstrbait',
                'masstrbate',
                'masterbaiter',
                'masterbate',
                'masterbates',
                'Motha Fucker',
                'Motha Fuker',
                'Motha Fukkah',
                'Motha Fukker',
                'Mother Fucker',
                'Mother Fukah',
                'Mother Fuker',
                'Mother Fukkah',
                'Mother Fukker',
                'mother-fucker',
                'Mutha Fucker',
                'Mutha Fukah',
                'Mutha Fuker',
                'Mutha Fukkah',
                'Mutha Fukker',
                'n1gr',
                'nastt',
                'nigger;',
                'nigur;',
                'niiger;',
                'niigr;',
                'orafis',
                'orgasim;',
                'orgasm',
                'orgasum',
                'oriface',
                'orifice',
                'orifiss',
                'packi',
                'packie',
                'packy',
                'paki',
                'pakie',
                'paky',
                'pecker',
                'peeenus',
                'peeenusss',
                'peenus',
                'peinus',
                'pen1s',
                'penas',
                'penis',
                'penis-breath',
                'penus',
                'penuus',
                'Phuc',
                'Phuck',
                'Phuk',
                'Phuker',
                'Phukker',
                'polac',
                'polack',
                'polak',
                'Poonani',
                'pr1c',
                'pr1ck',
                'pr1k',
                'pusse',
                'pussee',
                'pussy',
                'puuke',
                'puuker',
                'queer',
                'queers',
                'queerz',
                'qweers',
                'qweerz',
                'qweir',
                'recktum',
                'rectum',
                'retard',
                'sadist',
                'scank',
                'schlong',
                'screwing',
                'semen',
                'sex',
                'sexy',
                'Sh!t',
                'sh1t',
                'sh1ter',
                'sh1ts',
                'sh1tter',
                'sh1tz',
                'shit',
                'shits',
                'shitter',
                'Shitty',
                'Shity',
                'shitz',
                'Shyt',
                'Shyte',
                'Shytty',
                'Shyty',
                'skanck',
                'skank',
                'skankee',
                'skankey',
                'skanks',
                'Skanky',
                'slag',
                'slut',
                'sluts',
                'Slutty',
                'slutz',
                'son-of-a-bitch',
                'tit',
                'turd',
                'va1jina',
                'vag1na',
                'vagiina',
                'vagina',
                'vaj1na',
                'vajina',
                'vullva',
                'vulva',
                'w0p',
                'wh00r',
                'wh0re',
                'whore',
                'xrated',
                'xxx',
                'b!+ch',
                'bitch',
                'blowjob',
                'clit',
                'arschloch',
                'fuck',
                'shit',
                'ass',
                'asshole',
                'b!tch',
                'b17ch',
                'b1tch',
                'bastard',
                'bi+ch',
                'boiolas',
                'buceta',
                'c0ck',
                'cawk',
                'chink',
                'cipa',
                'clits',
                'cock',
                'cum',
                'cunt',
                'dildo',
                'dirsa',
                'ejakulate',
                'fatass',
                'fcuk',
                'fuk',
                'fux0r',
                'hoer',
                'hore',
                'jism',
                'kawk',
                'l3itch',
                'l3i+ch',
                'lesbian',
                'masturbate',
                'masterbat*',
                'masterbat3',
                'motherfucker',
                's.o.b.',
                'mofo',
                'nazi',
                'nigga',
                'nigger',
                'nutsack',
                'phuck',
                'pimpis',
                'pusse',
                'pussy',
                'scrotum',
                'sh!t',
                'shemale',
                'shi+',
                'sh!+',
                'slut',
                'smut',
                'teets',
                'tits',
                'boobs',
                'b00bs',
                'teez',
                'testical',
                'testicle',
                'titt',
                'w00se',
                'jackoff',
                'wank',
                'whoar',
                'whore',
                '*damn',
                '*dyke',
                '*fuck*',
                '*shit*',
                '@$$',
                'amcik',
                'andskota',
                'arse*',
                'assrammer',
                'ayir',
                'bi7ch',
                'bitch*',
                'bollock*',
                'breasts',
                'butt-pirate',
                'cabron',
                'cazzo',
                'chraa',
                'chuj',
                'Cock*',
                'cunt*',
                'd4mn',
                'daygo',
                'dego',
                'dick*',
                'dike*',
                'dupa',
                'dziwka',
                'ejackulate',
                'Ekrem*',
                'Ekto',
                'enculer',
                'faen',
                'fag*',
                'fanculo',
                'fanny',
                'feces',
                'feg',
                'Felcher',
                'ficken',
                'fitt*',
                'Flikker',
                'foreskin',
                'Fotze',
                'Fu(*',
                'fuk*',
                'futkretzn',
                'gook',
                'guiena',
                'h0r',
                'h4x0r',
                'hell',
                'helvete',
                'hoer*',
                'honkey',
                'Huevon',
                'hui',
                'injun',
                'jizz',
                'kanker*',
                'kike',
                'klootzak',
                'kraut',
                'knulle',
                'kuk',
                'kuksuger',
                'Kurac',
                'kurwa',
                'kusi*',
                'kyrpa*',
                'lesbo',
                'mamhoon',
                'masturbat*',
                'merd*',
                'mibun',
                'monkleigh',
                'mouliewop',
                'muie',
                'mulkku',
                'muschi',
                'nazis',
                'nepesaurio',
                'nigger*',
                'orospu',
                'paska*',
                'perse',
                'picka',
                'pierdol*',
                'pillu*',
                'pimmel',
                'piss*',
                'pizda',
                'poontsee',
                'poop',
                'porn',
                'p0rn',
                'pr0n',
                'preteen',
                'pula',
                'pule',
                'puta',
                'puto',
                'qahbeh',
                'queef*',
                'rautenberg',
                'schaffer',
                'scheiss*',
                'schlampe',
                'schmuck',
                'screw',
                'sh!t*',
                'sharmuta',
                'sharmute',
                'shipal',
                'shiz',
                'skribz',
                'skurwysyn',
                'sphencter',
                'spic',
                'spierdalaj',
                'splooge',
                'suka',
                'b00b*',
                'testicle*',
                'titt*',
                'twat',
                'vittu',
                'wank*',
                'wetback*',
                'wichser',
                'wop*',
                'yed',
                'zabourah'
            ]
        };
    },
    function (module, t, __webpack_require__) {
        /* 15: ./node_modules/badwords-list/lib/object.js */
        module.exports = {
            object: __webpack_require__(16),
            array: __webpack_require__(17),
            regex: __webpack_require__(18)
        };
    },
    function (module, t) {
        /* 16: ./node_modules/badwords-list/lib/array.js */
        module.exports = {
            '4r5e': 1,
            '5h1t': 1,
            '5hit': 1,
            a55: 1,
            anal: 1,
            anus: 1,
            ar5e: 1,
            arrse: 1,
            arse: 1,
            ass: 1,
            'ass-fucker': 1,
            asses: 1,
            assfucker: 1,
            assfukka: 1,
            asshole: 1,
            assholes: 1,
            asswhole: 1,
            a_s_s: 1,
            'b!tch': 1,
            b00bs: 1,
            b17ch: 1,
            b1tch: 1,
            ballbag: 1,
            balls: 1,
            ballsack: 1,
            bastard: 1,
            beastial: 1,
            beastiality: 1,
            bellend: 1,
            bestial: 1,
            bestiality: 1,
            'bi+ch': 1,
            biatch: 1,
            bitch: 1,
            bitcher: 1,
            bitchers: 1,
            bitches: 1,
            bitchin: 1,
            bitching: 1,
            bloody: 1,
            'blow job': 1,
            blowjob: 1,
            blowjobs: 1,
            boiolas: 1,
            bollock: 1,
            bollok: 1,
            boner: 1,
            boob: 1,
            boobs: 1,
            booobs: 1,
            boooobs: 1,
            booooobs: 1,
            booooooobs: 1,
            breasts: 1,
            buceta: 1,
            bugger: 1,
            bum: 1,
            'bunny fucker': 1,
            butt: 1,
            butthole: 1,
            buttmuch: 1,
            buttplug: 1,
            c0ck: 1,
            c0cksucker: 1,
            'carpet muncher': 1,
            cawk: 1,
            chink: 1,
            cipa: 1,
            cl1t: 1,
            clit: 1,
            clitoris: 1,
            clits: 1,
            cnut: 1,
            cock: 1,
            'cock-sucker': 1,
            cockface: 1,
            cockhead: 1,
            cockmunch: 1,
            cockmuncher: 1,
            cocks: 1,
            cocksuck: 1,
            cocksucked: 1,
            cocksucker: 1,
            cocksucking: 1,
            cocksucks: 1,
            cocksuka: 1,
            cocksukka: 1,
            cok: 1,
            cokmuncher: 1,
            coksucka: 1,
            coon: 1,
            cox: 1,
            crap: 1,
            cum: 1,
            cummer: 1,
            cumming: 1,
            cums: 1,
            cumshot: 1,
            cunilingus: 1,
            cunillingus: 1,
            cunnilingus: 1,
            cunt: 1,
            cuntlick: 1,
            cuntlicker: 1,
            cuntlicking: 1,
            cunts: 1,
            cyalis: 1,
            cyberfuc: 1,
            cyberfuck: 1,
            cyberfucked: 1,
            cyberfucker: 1,
            cyberfuckers: 1,
            cyberfucking: 1,
            d1ck: 1,
            damn: 1,
            dick: 1,
            dickhead: 1,
            dildo: 1,
            dildos: 1,
            dink: 1,
            dinks: 1,
            dirsa: 1,
            dlck: 1,
            'dog-fucker': 1,
            doggin: 1,
            dogging: 1,
            donkeyribber: 1,
            doosh: 1,
            duche: 1,
            dyke: 1,
            ejaculate: 1,
            ejaculated: 1,
            ejaculates: 1,
            ejaculating: 1,
            ejaculatings: 1,
            ejaculation: 1,
            ejakulate: 1,
            'f u c k': 1,
            'f u c k e r': 1,
            f4nny: 1,
            fag: 1,
            fagging: 1,
            faggitt: 1,
            faggot: 1,
            faggs: 1,
            fagot: 1,
            fagots: 1,
            fags: 1,
            fanny: 1,
            fannyflaps: 1,
            fannyfucker: 1,
            fanyy: 1,
            fatass: 1,
            fcuk: 1,
            fcuker: 1,
            fcuking: 1,
            feck: 1,
            fecker: 1,
            felching: 1,
            fellate: 1,
            fellatio: 1,
            fingerfuck: 1,
            fingerfucked: 1,
            fingerfucker: 1,
            fingerfuckers: 1,
            fingerfucking: 1,
            fingerfucks: 1,
            fistfuck: 1,
            fistfucked: 1,
            fistfucker: 1,
            fistfuckers: 1,
            fistfucking: 1,
            fistfuckings: 1,
            fistfucks: 1,
            flange: 1,
            fook: 1,
            fooker: 1,
            fuck: 1,
            fucka: 1,
            fucked: 1,
            fucker: 1,
            fuckers: 1,
            fuckhead: 1,
            fuckheads: 1,
            fuckin: 1,
            fucking: 1,
            fuckings: 1,
            fuckingshitmotherfucker: 1,
            fuckme: 1,
            fucks: 1,
            fuckwhit: 1,
            fuckwit: 1,
            'fudge packer': 1,
            fudgepacker: 1,
            fuk: 1,
            fuker: 1,
            fukker: 1,
            fukkin: 1,
            fuks: 1,
            fukwhit: 1,
            fukwit: 1,
            fux: 1,
            fux0r: 1,
            f_u_c_k: 1,
            gangbang: 1,
            gangbanged: 1,
            gangbangs: 1,
            gaylord: 1,
            gaysex: 1,
            goatse: 1,
            God: 1,
            'god-dam': 1,
            'god-damned': 1,
            goddamn: 1,
            goddamned: 1,
            hardcoresex: 1,
            hell: 1,
            heshe: 1,
            hoar: 1,
            hoare: 1,
            hoer: 1,
            homo: 1,
            hore: 1,
            horniest: 1,
            horny: 1,
            hotsex: 1,
            'jack-off': 1,
            jackoff: 1,
            jap: 1,
            'jerk-off': 1,
            jism: 1,
            jiz: 1,
            jizm: 1,
            jizz: 1,
            kawk: 1,
            knob: 1,
            knobead: 1,
            knobed: 1,
            knobend: 1,
            knobhead: 1,
            knobjocky: 1,
            knobjokey: 1,
            kock: 1,
            kondum: 1,
            kondums: 1,
            kum: 1,
            kummer: 1,
            kumming: 1,
            kums: 1,
            kunilingus: 1,
            'l3i+ch': 1,
            l3itch: 1,
            labia: 1,
            lust: 1,
            lusting: 1,
            m0f0: 1,
            m0fo: 1,
            m45terbate: 1,
            ma5terb8: 1,
            ma5terbate: 1,
            masochist: 1,
            'master-bate': 1,
            masterb8: 1,
            'masterbat*': 1,
            masterbat3: 1,
            masterbate: 1,
            masterbation: 1,
            masterbations: 1,
            masturbate: 1,
            'mo-fo': 1,
            mof0: 1,
            mofo: 1,
            mothafuck: 1,
            mothafucka: 1,
            mothafuckas: 1,
            mothafuckaz: 1,
            mothafucked: 1,
            mothafucker: 1,
            mothafuckers: 1,
            mothafuckin: 1,
            mothafucking: 1,
            mothafuckings: 1,
            mothafucks: 1,
            'mother fucker': 1,
            motherfuck: 1,
            motherfucked: 1,
            motherfucker: 1,
            motherfuckers: 1,
            motherfuckin: 1,
            motherfucking: 1,
            motherfuckings: 1,
            motherfuckka: 1,
            motherfucks: 1,
            muff: 1,
            mutha: 1,
            muthafecker: 1,
            muthafuckker: 1,
            muther: 1,
            mutherfucker: 1,
            n1gga: 1,
            n1gger: 1,
            nazi: 1,
            nigg3r: 1,
            nigg4h: 1,
            nigga: 1,
            niggah: 1,
            niggas: 1,
            niggaz: 1,
            nigger: 1,
            niggers: 1,
            nob: 1,
            'nob jokey': 1,
            nobhead: 1,
            nobjocky: 1,
            nobjokey: 1,
            numbnuts: 1,
            nutsack: 1,
            orgasim: 1,
            orgasims: 1,
            orgasm: 1,
            orgasms: 1,
            p0rn: 1,
            pawn: 1,
            pecker: 1,
            penis: 1,
            penisfucker: 1,
            phonesex: 1,
            phuck: 1,
            phuk: 1,
            phuked: 1,
            phuking: 1,
            phukked: 1,
            phukking: 1,
            phuks: 1,
            phuq: 1,
            pigfucker: 1,
            pimpis: 1,
            piss: 1,
            pissed: 1,
            pisser: 1,
            pissers: 1,
            pisses: 1,
            pissflaps: 1,
            pissin: 1,
            pissing: 1,
            pissoff: 1,
            poop: 1,
            porn: 1,
            porno: 1,
            pornography: 1,
            pornos: 1,
            prick: 1,
            pricks: 1,
            pron: 1,
            pube: 1,
            pusse: 1,
            pussi: 1,
            pussies: 1,
            pussy: 1,
            pussys: 1,
            rectum: 1,
            retard: 1,
            rimjaw: 1,
            rimming: 1,
            's hit': 1,
            's.o.b.': 1,
            sadist: 1,
            schlong: 1,
            screwing: 1,
            scroat: 1,
            scrote: 1,
            scrotum: 1,
            semen: 1,
            sex: 1,
            'sh!+': 1,
            'sh!t': 1,
            sh1t: 1,
            shag: 1,
            shagger: 1,
            shaggin: 1,
            shagging: 1,
            shemale: 1,
            'shi+': 1,
            shit: 1,
            shitdick: 1,
            shite: 1,
            shited: 1,
            shitey: 1,
            shitfuck: 1,
            shitfull: 1,
            shithead: 1,
            shiting: 1,
            shitings: 1,
            shits: 1,
            shitted: 1,
            shitter: 1,
            shitters: 1,
            shitting: 1,
            shittings: 1,
            shitty: 1,
            skank: 1,
            slut: 1,
            sluts: 1,
            smegma: 1,
            smut: 1,
            snatch: 1,
            'son-of-a-bitch': 1,
            spac: 1,
            spunk: 1,
            s_h_i_t: 1,
            t1tt1e5: 1,
            t1tties: 1,
            teets: 1,
            teez: 1,
            testical: 1,
            testicle: 1,
            tit: 1,
            titfuck: 1,
            tits: 1,
            titt: 1,
            tittie5: 1,
            tittiefucker: 1,
            titties: 1,
            tittyfuck: 1,
            tittywank: 1,
            titwank: 1,
            tosser: 1,
            turd: 1,
            tw4t: 1,
            twat: 1,
            twathead: 1,
            twatty: 1,
            twunt: 1,
            twunter: 1,
            v14gra: 1,
            v1gra: 1,
            vagina: 1,
            viagra: 1,
            vulva: 1,
            w00se: 1,
            wang: 1,
            wank: 1,
            wanker: 1,
            wanky: 1,
            whoar: 1,
            whore: 1,
            willies: 1,
            willy: 1,
            xrated: 1,
            xxx: 1
        };
    },
    function (module, t) {
        /* 17: ./node_modules/badwords-list/lib/regexp.js */
        module.exports = [
            '4r5e',
            '5h1t',
            '5hit',
            'a55',
            'anal',
            'anus',
            'ar5e',
            'arrse',
            'arse',
            'ass',
            'ass-fucker',
            'asses',
            'assfucker',
            'assfukka',
            'asshole',
            'assholes',
            'asswhole',
            'a_s_s',
            'b!tch',
            'b00bs',
            'b17ch',
            'b1tch',
            'ballbag',
            'balls',
            'ballsack',
            'bastard',
            'beastial',
            'beastiality',
            'bellend',
            'bestial',
            'bestiality',
            'bi+ch',
            'biatch',
            'bitch',
            'bitcher',
            'bitchers',
            'bitches',
            'bitchin',
            'bitching',
            'bloody',
            'blow job',
            'blowjob',
            'blowjobs',
            'boiolas',
            'bollock',
            'bollok',
            'boner',
            'boob',
            'boobs',
            'booobs',
            'boooobs',
            'booooobs',
            'booooooobs',
            'breasts',
            'buceta',
            'bugger',
            'bum',
            'bunny fucker',
            'butt',
            'butthole',
            'buttmuch',
            'buttplug',
            'c0ck',
            'c0cksucker',
            'carpet muncher',
            'cawk',
            'chink',
            'cipa',
            'cl1t',
            'clit',
            'clitoris',
            'clits',
            'cnut',
            'cock',
            'cock-sucker',
            'cockface',
            'cockhead',
            'cockmunch',
            'cockmuncher',
            'cocks',
            'cocksuck',
            'cocksucked',
            'cocksucker',
            'cocksucking',
            'cocksucks',
            'cocksuka',
            'cocksukka',
            'cok',
            'cokmuncher',
            'coksucka',
            'coon',
            'cox',
            'crap',
            'cum',
            'cummer',
            'cumming',
            'cums',
            'cumshot',
            'cunilingus',
            'cunillingus',
            'cunnilingus',
            'cunt',
            'cuntlick',
            'cuntlicker',
            'cuntlicking',
            'cunts',
            'cyalis',
            'cyberfuc',
            'cyberfuck',
            'cyberfucked',
            'cyberfucker',
            'cyberfuckers',
            'cyberfucking',
            'd1ck',
            'damn',
            'dick',
            'dickhead',
            'dildo',
            'dildos',
            'dink',
            'dinks',
            'dirsa',
            'dlck',
            'dog-fucker',
            'doggin',
            'dogging',
            'donkeyribber',
            'doosh',
            'duche',
            'dyke',
            'ejaculate',
            'ejaculated',
            'ejaculates',
            'ejaculating',
            'ejaculatings',
            'ejaculation',
            'ejakulate',
            'f u c k',
            'f u c k e r',
            'f4nny',
            'fag',
            'fagging',
            'faggitt',
            'faggot',
            'faggs',
            'fagot',
            'fagots',
            'fags',
            'fanny',
            'fannyflaps',
            'fannyfucker',
            'fanyy',
            'fatass',
            'fcuk',
            'fcuker',
            'fcuking',
            'feck',
            'fecker',
            'felching',
            'fellate',
            'fellatio',
            'fingerfuck',
            'fingerfucked',
            'fingerfucker',
            'fingerfuckers',
            'fingerfucking',
            'fingerfucks',
            'fistfuck',
            'fistfucked',
            'fistfucker',
            'fistfuckers',
            'fistfucking',
            'fistfuckings',
            'fistfucks',
            'flange',
            'fook',
            'fooker',
            'fuck',
            'fucka',
            'fucked',
            'fucker',
            'fuckers',
            'fuckhead',
            'fuckheads',
            'fuckin',
            'fucking',
            'fuckings',
            'fuckingshitmotherfucker',
            'fuckme',
            'fucks',
            'fuckwhit',
            'fuckwit',
            'fudge packer',
            'fudgepacker',
            'fuk',
            'fuker',
            'fukker',
            'fukkin',
            'fuks',
            'fukwhit',
            'fukwit',
            'fux',
            'fux0r',
            'f_u_c_k',
            'gangbang',
            'gangbanged',
            'gangbangs',
            'gaylord',
            'gaysex',
            'goatse',
            'God',
            'god-dam',
            'god-damned',
            'goddamn',
            'goddamned',
            'hardcoresex',
            'hell',
            'heshe',
            'hoar',
            'hoare',
            'hoer',
            'homo',
            'hore',
            'horniest',
            'horny',
            'hotsex',
            'jack-off',
            'jackoff',
            'jap',
            'jerk-off',
            'jism',
            'jiz',
            'jizm',
            'jizz',
            'kawk',
            'knob',
            'knobead',
            'knobed',
            'knobend',
            'knobhead',
            'knobjocky',
            'knobjokey',
            'kock',
            'kondum',
            'kondums',
            'kum',
            'kummer',
            'kumming',
            'kums',
            'kunilingus',
            'l3i+ch',
            'l3itch',
            'labia',
            'lust',
            'lusting',
            'm0f0',
            'm0fo',
            'm45terbate',
            'ma5terb8',
            'ma5terbate',
            'masochist',
            'master-bate',
            'masterb8',
            'masterbat*',
            'masterbat3',
            'masterbate',
            'masterbation',
            'masterbations',
            'masturbate',
            'mo-fo',
            'mof0',
            'mofo',
            'mothafuck',
            'mothafucka',
            'mothafuckas',
            'mothafuckaz',
            'mothafucked',
            'mothafucker',
            'mothafuckers',
            'mothafuckin',
            'mothafucking',
            'mothafuckings',
            'mothafucks',
            'mother fucker',
            'motherfuck',
            'motherfucked',
            'motherfucker',
            'motherfuckers',
            'motherfuckin',
            'motherfucking',
            'motherfuckings',
            'motherfuckka',
            'motherfucks',
            'muff',
            'mutha',
            'muthafecker',
            'muthafuckker',
            'muther',
            'mutherfucker',
            'n1gga',
            'n1gger',
            'nazi',
            'nigg3r',
            'nigg4h',
            'nigga',
            'niggah',
            'niggas',
            'niggaz',
            'nigger',
            'niggers',
            'nob',
            'nob jokey',
            'nobhead',
            'nobjocky',
            'nobjokey',
            'numbnuts',
            'nutsack',
            'orgasim',
            'orgasims',
            'orgasm',
            'orgasms',
            'p0rn',
            'pawn',
            'pecker',
            'penis',
            'penisfucker',
            'phonesex',
            'phuck',
            'phuk',
            'phuked',
            'phuking',
            'phukked',
            'phukking',
            'phuks',
            'phuq',
            'pigfucker',
            'pimpis',
            'piss',
            'pissed',
            'pisser',
            'pissers',
            'pisses',
            'pissflaps',
            'pissin',
            'pissing',
            'pissoff',
            'poop',
            'porn',
            'porno',
            'pornography',
            'pornos',
            'prick',
            'pricks',
            'pron',
            'pube',
            'pusse',
            'pussi',
            'pussies',
            'pussy',
            'pussys',
            'rectum',
            'retard',
            'rimjaw',
            'rimming',
            's hit',
            's.o.b.',
            'sadist',
            'schlong',
            'screwing',
            'scroat',
            'scrote',
            'scrotum',
            'semen',
            'sex',
            'sh!+',
            'sh!t',
            'sh1t',
            'shag',
            'shagger',
            'shaggin',
            'shagging',
            'shemale',
            'shi+',
            'shit',
            'shitdick',
            'shite',
            'shited',
            'shitey',
            'shitfuck',
            'shitfull',
            'shithead',
            'shiting',
            'shitings',
            'shits',
            'shitted',
            'shitter',
            'shitters',
            'shitting',
            'shittings',
            'shitty',
            'skank',
            'slut',
            'sluts',
            'smegma',
            'smut',
            'snatch',
            'son-of-a-bitch',
            'spac',
            'spunk',
            's_h_i_t',
            't1tt1e5',
            't1tties',
            'teets',
            'teez',
            'testical',
            'testicle',
            'tit',
            'titfuck',
            'tits',
            'titt',
            'tittie5',
            'tittiefucker',
            'titties',
            'tittyfuck',
            'tittywank',
            'titwank',
            'tosser',
            'turd',
            'tw4t',
            'twat',
            'twathead',
            'twatty',
            'twunt',
            'twunter',
            'v14gra',
            'v1gra',
            'vagina',
            'viagra',
            'vulva',
            'w00se',
            'wang',
            'wank',
            'wanker',
            'wanky',
            'whoar',
            'whore',
            'willies',
            'willy',
            'xrated',
            'xxx'
        ];
    },
    function (module, t) {
        /* 18: ./src/js/data/store.js */
        module.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi;
    },
    function (module, t) {
        /* 19: ./src/js/data/projectile.js */
        module.exports.hats = [
            {
                id: 45,
                name: 'Shame!',
                dontSell: !0,
                price: 0,
                scale: 120,
                desc: 'hacks are for losers'
            },
            {
                id: 51,
                name: 'Moo Cap',
                price: 0,
                scale: 120,
                desc: 'coolest mooer around'
            },
            {
                id: 50,
                name: 'Apple Cap',
                price: 0,
                scale: 120,
                desc: 'apple farms remembers'
            },
            {
                id: 28,
                name: 'Moo Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 29,
                name: 'Pig Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 30,
                name: 'Fluff Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 36,
                name: 'Pandou Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 37,
                name: 'Bear Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 38,
                name: 'Monkey Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 44,
                name: 'Polar Head',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 35,
                name: 'Fez Hat',
                price: 0,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 42,
                name: 'Enigma Hat',
                price: 0,
                scale: 120,
                desc: 'join the enigma army'
            },
            {
                id: 43,
                name: 'Blitz Hat',
                price: 0,
                scale: 120,
                desc: 'hey everybody i\'m blitz'
            },
            {
                id: 49,
                name: 'Bob XIII Hat',
                price: 0,
                scale: 120,
                desc: 'like and subscribe'
            },
            {
                id: 57,
                name: 'Pumpkin',
                price: 50,
                scale: 120,
                desc: 'Spooooky'
            },
            {
                id: 8,
                name: 'Bummle Hat',
                price: 100,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 2,
                name: 'Straw Hat',
                price: 500,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 15,
                name: 'Winter Cap',
                price: 600,
                scale: 120,
                desc: 'allows you to move at normal speed in snow',
                coldM: 1
            },
            {
                id: 5,
                name: 'Cowboy Hat',
                price: 1000,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 4,
                name: 'Ranger Hat',
                price: 2000,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 18,
                name: 'Explorer Hat',
                price: 2000,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 31,
                name: 'Flipper Hat',
                price: 2500,
                scale: 120,
                desc: 'have more control while in water',
                watrImm: !0
            },
            {
                id: 1,
                name: 'Marksman Cap',
                price: 3000,
                scale: 120,
                desc: 'increases arrow speed and range',
                aMlt: 1.3
            },
            {
                id: 10,
                name: 'Bush Gear',
                price: 3000,
                scale: 160,
                desc: 'allows you to disguise yourself as a bush'
            },
            {
                id: 48,
                name: 'Halo',
                price: 3000,
                scale: 120,
                desc: 'no effect'
            },
            {
                id: 6,
                name: 'Soldier Helmet',
                price: 4000,
                scale: 120,
                desc: 'reduces damage taken but slows movement',
                spdMult: 0.94,
                dmgMult: 0.75
            },
            {
                id: 23,
                name: 'Anti Venom Gear',
                price: 4000,
                scale: 120,
                desc: 'makes you immune to poison',
                poisonRes: 1
            },
            {
                id: 13,
                name: 'Medic Gear',
                price: 5000,
                scale: 110,
                desc: 'slowly regenerates health over time',
                healthRegen: 3
            },
            {
                id: 9,
                name: 'Miners Helmet',
                price: 5000,
                scale: 120,
                desc: 'earn 1 extra gold per resource',
                extraGold: 1
            },
            {
                id: 32,
                name: 'Musketeer Hat',
                price: 5000,
                scale: 120,
                desc: 'reduces cost of projectiles',
                projCost: 0.5
            },
            {
                id: 7,
                name: 'Bull Helmet',
                price: 6000,
                scale: 120,
                desc: 'increases damage done but drains health',
                healthRegen: -5,
                dmgMultO: 1.5,
                spdMult: 0.96
            },
            {
                id: 22,
                name: 'Emp Helmet',
                price: 6000,
                scale: 120,
                desc: 'turrets won\'t attack but you move slower',
                antiTurret: 1,
                spdMult: 0.7
            },
            {
                id: 12,
                name: 'Booster Hat',
                price: 6000,
                scale: 120,
                desc: 'increases your movement speed',
                spdMult: 1.16
            },
            {
                id: 26,
                name: 'Barbarian Armor',
                price: 8000,
                scale: 120,
                desc: 'knocks back enemies that attack you',
                dmgK: 0.6
            },
            {
                id: 21,
                name: 'Plague Mask',
                price: 10000,
                scale: 120,
                desc: 'melee attacks deal poison damage',
                poisonDmg: 5,
                poisonTime: 6
            },
            {
                id: 46,
                name: 'Bull Mask',
                price: 10000,
                scale: 120,
                desc: 'bulls won\'t target you unless you attack them',
                bullRepel: 1
            },
            {
                id: 14,
                name: 'Windmill Hat',
                topSprite: !0,
                price: 10000,
                scale: 120,
                desc: 'generates points while worn',
                pps: 1.5
            },
            {
                id: 11,
                name: 'Spike Gear',
                topSprite: !0,
                price: 10000,
                scale: 120,
                desc: 'deal damage to players that damage you',
                dmg: 0.45
            },
            {
                id: 53,
                name: 'Turret Gear',
                topSprite: !0,
                price: 10000,
                scale: 120,
                desc: 'you become a walking turret',
                turret: {
                    proj: 1,
                    range: 700,
                    rate: 2500
                },
                spdMult: 0.7
            },
            {
                id: 20,
                name: 'Samurai Armor',
                price: 12000,
                scale: 120,
                desc: 'increased attack speed and fire rate',
                atkSpd: 0.78
            },
            {
                id: 58,
                name: 'Dark Knight',
                price: 12000,
                scale: 120,
                desc: 'restores health when you deal damage',
                healD: 0.4
            },
            {
                id: 27,
                name: 'Scavenger Gear',
                price: 15000,
                scale: 120,
                desc: 'earn double points for each kill',
                kScrM: 2
            },
            {
                id: 40,
                name: 'Tank Gear',
                price: 15000,
                scale: 120,
                desc: 'increased damage to buildings but slower movement',
                spdMult: 0.3,
                bDmg: 3.3
            },
            {
                id: 52,
                name: 'Thief Gear',
                price: 15000,
                scale: 120,
                desc: 'steal half of a players gold when you kill them',
                goldSteal: 0.5
            },
            {
                id: 55,
                name: 'Bloodthirster',
                price: 20000,
                scale: 120,
                desc: 'Restore Health when dealing damage. And increased damage',
                healD: 0.25,
                dmgMultO: 1.2
            },
            {
                id: 56,
                name: 'Assassin Gear',
                price: 20000,
                scale: 120,
                desc: 'Go invisible when not moving. Can\'t eat. Increased speed',
                noEat: !0,
                spdMult: 1.1,
                invisTimer: 1000
            }
        ], module.exports.accessories = [
            {
                id: 12,
                name: 'Snowball',
                price: 1000,
                scale: 105,
                xOff: 18,
                desc: 'no effect'
            },
            {
                id: 9,
                name: 'Tree Cape',
                price: 1000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 10,
                name: 'Stone Cape',
                price: 1000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 3,
                name: 'Cookie Cape',
                price: 1500,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 8,
                name: 'Cow Cape',
                price: 2000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 11,
                name: 'Monkey Tail',
                price: 2000,
                scale: 97,
                xOff: 25,
                desc: 'Super speed but reduced damage',
                spdMult: 1.35,
                dmgMultO: 0.2
            },
            {
                id: 17,
                name: 'Apple Basket',
                price: 3000,
                scale: 80,
                xOff: 12,
                desc: 'slowly regenerates health over time',
                healthRegen: 1
            },
            {
                id: 6,
                name: 'Winter Cape',
                price: 3000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 4,
                name: 'Skull Cape',
                price: 4000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 5,
                name: 'Dash Cape',
                price: 5000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 2,
                name: 'Dragon Cape',
                price: 6000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 1,
                name: 'Super Cape',
                price: 8000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 7,
                name: 'Troll Cape',
                price: 8000,
                scale: 90,
                desc: 'no effect'
            },
            {
                id: 14,
                name: 'Thorns',
                price: 10000,
                scale: 115,
                xOff: 20,
                desc: 'no effect'
            },
            {
                id: 15,
                name: 'Blockades',
                price: 10000,
                scale: 95,
                xOff: 15,
                desc: 'no effect'
            },
            {
                id: 20,
                name: 'Devils Tail',
                price: 10000,
                scale: 95,
                xOff: 20,
                desc: 'no effect'
            },
            {
                id: 16,
                name: 'Sawblade',
                price: 12000,
                scale: 90,
                spin: !0,
                xOff: 0,
                desc: 'deal damage to players that damage you',
                dmg: 0.15
            },
            {
                id: 13,
                name: 'Angel Wings',
                price: 15000,
                scale: 138,
                xOff: 22,
                desc: 'slowly regenerates health over time',
                healthRegen: 3
            },
            {
                id: 19,
                name: 'Shadow Wings',
                price: 15000,
                scale: 138,
                xOff: 22,
                desc: 'increased movement speed',
                spdMult: 1.1
            },
            {
                id: 18,
                name: 'Blood Wings',
                price: 20000,
                scale: 178,
                xOff: 26,
                desc: 'restores health when you deal damage',
                healD: 0.2
            },
            {
                id: 21,
                name: 'Corrupt X Wings',
                price: 20000,
                scale: 178,
                xOff: 26,
                desc: 'deal damage to players that damage you',
                dmg: 0.25
            }
        ];
    },
    function (module, t) {
        /* 20: ./src/js/data/projectileManager.js */
        module.exports = function (players, ais, objectManager, items, config, UTILS, server) {
            this.init = function (indx, x, y, dir, spd, dmg, rng, scl, owner) {
                this.active = !0, this.indx = indx, this.x = x, this.y = y, this.dir = dir, this.skipMov = !0, this.speed = spd, this.dmg = dmg, this.scale = scl, this.range = rng, this.owner = owner, server && (this.sentTo = {});
            };
            var tmpObj, objectsHit = [];
            this.update = function (delta) {
                if (this.active) {
                    var tmpScale, tmpSpeed = this.speed * delta;
                    if (this.skipMov ? this.skipMov = !1 : (this.x += tmpSpeed * Math.cos(this.dir), this.y += tmpSpeed * Math.sin(this.dir), this.range -= tmpSpeed, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), tmpSpeed = 1, this.range = 0, this.active = !1)), server) {
                        for (var i = 0; i < players.length; ++i)
                            !this.sentTo[players[i].id] && players[i].canSee(this) && (this.sentTo[players[i].id] = 1, server.send(players[i].id, '18', UTILS.fixTo(this.x, 1), UTILS.fixTo(this.y, 1), UTILS.fixTo(this.dir, 2), UTILS.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
                        for (objectsHit.length = 0, i = 0; i < players.length + ais.length; ++i)
                            !(tmpObj = players[i] || ais[i - players.length]).alive || tmpObj == this.owner || this.owner.team && tmpObj.team == this.owner.team || UTILS.lineInRect(tmpObj.x - tmpObj.scale, tmpObj.y - tmpObj.scale, tmpObj.x + tmpObj.scale, tmpObj.y + tmpObj.scale, this.x, this.y, this.x + tmpSpeed * Math.cos(this.dir), this.y + tmpSpeed * Math.sin(this.dir)) && objectsHit.push(tmpObj);
                        for (var tmpList = objectManager.getGridArrays(this.x, this.y, this.scale), x = 0; x < tmpList.length; ++x)
                            for (var y = 0; y < tmpList[x].length; ++y)
                                tmpScale = (tmpObj = tmpList[x][y]).getScale(), tmpObj.active && this.ignoreObj != tmpObj.sid && this.layer <= tmpObj.layer && objectsHit.indexOf(tmpObj) < 0 && !tmpObj.ignoreCollision && UTILS.lineInRect(tmpObj.x - tmpScale, tmpObj.y - tmpScale, tmpObj.x + tmpScale, tmpObj.y + tmpScale, this.x, this.y, this.x + tmpSpeed * Math.cos(this.dir), this.y + tmpSpeed * Math.sin(this.dir)) && objectsHit.push(tmpObj);
                        if (objectsHit.length > 0) {
                            var hitObj = null, shortDist = null, tmpDist = null;
                            for (i = 0; i < objectsHit.length; ++i)
                                tmpDist = UTILS.getDistance(this.x, this.y, objectsHit[i].x, objectsHit[i].y), (null == shortDist || tmpDist < shortDist) && (shortDist = tmpDist, hitObj = objectsHit[i]);
                            if (hitObj.isPlayer || hitObj.isAI) {
                                var tmpSd = 0.3 * (hitObj.weightM || 1);
                                hitObj.xVel += tmpSd * Math.cos(this.dir), hitObj.yVel += tmpSd * Math.sin(this.dir), null != hitObj.weaponIndex && items.weapons[hitObj.weaponIndex].shield && UTILS.getAngleDist(this.dir + Math.PI, hitObj.dir) <= config.shieldAngle || hitObj.changeHealth(-this.dmg, this.owner, this.owner);
                            } else
                                for (hitObj.projDmg && hitObj.health && hitObj.changeHealth(-this.dmg) && objectManager.disableObj(hitObj), i = 0; i < players.length; ++i)
                                    players[i].active && (hitObj.sentTo[players[i].id] && (hitObj.active ? players[i].canSee(hitObj) && server.send(players[i].id, '8', UTILS.fixTo(this.dir, 2), hitObj.sid) : server.send(players[i].id, '12', hitObj.sid)), hitObj.active || hitObj.owner != players[i] || players[i].changeItemCount(hitObj.group.id, -1));
                            for (this.active = !1, i = 0; i < players.length; ++i)
                                this.sentTo[players[i].id] && server.send(players[i].id, '19', this.sid, UTILS.fixTo(shortDist, 1));
                        }
                    }
                }
            };
        };
    },
    function (module, t) {
        /* 21: ./src/js/libs/soundManager.js */
        module.exports = function (Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
            this.addProjectile = function (x, y, dir, range, speed, indx, owner, ignoreObj, layer) {
                for (var tmpProj, tmpData = items.projectiles[indx], i = 0; i < projectiles.length; ++i)
                    if (!projectiles[i].active) {
                        tmpProj = projectiles[i];
                        break;
                    }
                return tmpProj || ((tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server)).sid = projectiles.length, projectiles.push(tmpProj)), tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner), tmpProj.ignoreObj = ignoreObj, tmpProj.layer = layer || tmpData.layer, tmpProj.src = tmpData.src, tmpProj;
            };
        };
    },
    function (module, t) {
        /* 22: ./vultr/VultrClient.js */
        module.exports.obj = function (config, UTILS) {
            var tmpSound;
            this.sounds = [], this.active = !0, this.play = function (id, volume, loop) {
                volume && this.active && ((tmpSound = this.sounds[id]) || (tmpSound = new Howl({ src: '.././sound/' + id + '.mp3' }), this.sounds[id] = tmpSound), loop && tmpSound.isPlaying || (tmpSound.isPlaying = !0, tmpSound.play(), tmpSound.volume((volume || 1) * config.volumeMult), tmpSound.loop(loop)));
            }, this.toggleMute = function (id, mute) {
                (tmpSound = this.sounds[id]) && tmpSound.mute(mute);
            }, this.stop = function (id) {
                (tmpSound = this.sounds[id]) && (tmpSound.stop(), tmpSound.isPlaying = !1);
            };
        };
    },
    function (module, t, __webpack_require__) {
        /* 23: ./node_modules/url/url.js */
        var url = __webpack_require__(24), md5 = __webpack_require__(32);
        function VultrClient(baseUrl, devPort, lobbySize, lobbySpread, rawIPs) {
            'localhost' == location.hostname && (window.location.hostname = '127.0.0.1'), this.debugLog = !1, this.baseUrl = baseUrl, this.lobbySize = lobbySize, this.devPort = devPort, this.lobbySpread = lobbySpread, this.rawIPs = !!rawIPs, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(vultr.servers);
        }
        VultrClient.prototype.regionInfo = {
            0: {
                name: 'Local',
                latitude: 0,
                longitude: 0
            },
            'vultr:1': {
                name: 'New Jersey',
                latitude: 40.1393329,
                longitude: -75.8521818
            },
            'vultr:2': {
                name: 'Chicago',
                latitude: 41.8339037,
                longitude: -87.872238
            },
            'vultr:3': {
                name: 'Dallas',
                latitude: 32.8208751,
                longitude: -96.8714229
            },
            'vultr:4': {
                name: 'Seattle',
                latitude: 47.6149942,
                longitude: -122.4759879
            },
            'vultr:5': {
                name: 'Los Angeles',
                latitude: 34.0207504,
                longitude: -118.691914
            },
            'vultr:6': {
                name: 'Atlanta',
                latitude: 33.7676334,
                longitude: -84.5610332
            },
            'vultr:7': {
                name: 'Amsterdam',
                latitude: 52.3745287,
                longitude: 4.7581878
            },
            'vultr:8': {
                name: 'London',
                latitude: 51.5283063,
                longitude: -0.382486
            },
            'vultr:9': {
                name: 'Frankfurt',
                latitude: 50.1211273,
                longitude: 8.496137
            },
            'vultr:12': {
                name: 'Silicon Valley',
                latitude: 37.4024714,
                longitude: -122.3219752
            },
            'vultr:19': {
                name: 'Sydney',
                latitude: -33.8479715,
                longitude: 150.651084
            },
            'vultr:24': {
                name: 'Paris',
                latitude: 48.8588376,
                longitude: 2.2773454
            },
            'vultr:25': {
                name: 'Tokyo',
                latitude: 35.6732615,
                longitude: 139.569959
            },
            'vultr:39': {
                name: 'Miami',
                latitude: 25.7823071,
                longitude: -80.3012156
            },
            'vultr:40': {
                name: 'Singapore',
                latitude: 1.3147268,
                longitude: 103.7065876
            }
        }, VultrClient.prototype.start = function (callback, errorCallback) {
            this.callback = callback, this.errorCallback = errorCallback;
            var query = this.parseServerQuery();
            query ? (this.log('Found server in query.'), this.password = query[3], this.connect(query[0], query[1], query[2])) : (this.log('Pinging servers...'), this.pingServers());
        }, VultrClient.prototype.parseServerQuery = function () {
            var parsed = url.parse(location.href, !0), serverRaw = parsed.query.server;
            if ('string' == typeof serverRaw) {
                var split = serverRaw.split(':');
                if (3 == split.length) {
                    var region = split[0], index = parseInt(split[1]), gameIndex = parseInt(split[2]);
                    return '0' == region || region.startsWith('vultr:') || (region = 'vultr:' + region), [
                        region,
                        index,
                        gameIndex,
                        parsed.query.password
                    ];
                }
                this.errorCallback('Invalid number of server parameters in ' + serverRaw);
            }
        }, VultrClient.prototype.findServer = function (region, index) {
            var serverList = this.servers[region];
            if (Array.isArray(serverList)) {
                for (var i = 0; i < serverList.length; i++) {
                    var server = serverList[i];
                    if (server.index == index)
                        return server;
                }
                console.warn('Could not find server in region ' + region + ' with index ' + index + '.');
            } else
                this.errorCallback('No server list for region ' + region);
        }, VultrClient.prototype.pingServers = function () {
            var _this = this, requests = [];
            for (var region in this.servers)
                if (this.servers.hasOwnProperty(region)) {
                    var serverList = this.servers[region], targetServer = serverList[Math.floor(Math.random() * serverList.length)];
                    null != targetServer ? function (serverList, targetServer) {
                        var request = new XMLHttpRequest();
                        request.onreadystatechange = function (requestEvent) {
                            var request = requestEvent.target;
                            if (4 == request.readyState)
                                if (200 == request.status) {
                                    for (var i = 0; i < requests.length; i++)
                                        requests[i].abort();
                                    _this.log('Connecting to region', targetServer.region);
                                    var targetGame = _this.seekServer(targetServer.region);
                                    _this.connect(targetGame[0], targetGame[1], targetGame[2]);
                                } else
                                    console.warn('Error pinging ' + targetServer.ip + ' in region ' + region);
                        };
                        var targetAddress = '//' + _this.serverAddress(targetServer.ip, !0) + ':' + _this.serverPort(targetServer) + '/ping';
                        request.open('GET', targetAddress, !0), request.send(null), _this.log('Pinging', targetAddress), requests.push(request);
                    }(0, targetServer) : console.log('No target server for region ' + region);
                }
        }, VultrClient.prototype.seekServer = function (region, isPrivate, gameMode) {
            null == gameMode && (gameMode = 'random'), null == isPrivate && (isPrivate = !1);
            const gameModeList = ['random'];
            var lobbySize = this.lobbySize, lobbySpread = this.lobbySpread, servers = this.servers[region].flatMap(function (s) {
                    var gameIndex = 0;
                    return s.games.map(function (g) {
                        var currentGameIndex = gameIndex++;
                        return {
                            region: s.region,
                            index: s.index * s.games.length + currentGameIndex,
                            gameIndex: currentGameIndex,
                            gameCount: s.games.length,
                            playerCount: g.playerCount,
                            isPrivate: g.isPrivate
                        };
                    });
                }).filter(function (s) {
                    return !s.isPrivate;
                }).filter(function (s) {
                    return !isPrivate || 0 == s.playerCount && s.gameIndex >= s.gameCount / 2;
                }).filter(function (s) {
                    return 'random' == gameMode || gameModeList[s.index % gameModeList.length].key == gameMode;
                }).sort(function (a, b) {
                    return b.playerCount - a.playerCount;
                }).filter(function (s) {
                    return s.playerCount < lobbySize;
                });
            if (isPrivate && servers.reverse(), 0 != servers.length) {
                var randomSpread = Math.min(lobbySpread, servers.length), serverIndex = Math.floor(Math.random() * randomSpread), rawServer = servers[serverIndex = Math.min(serverIndex, servers.length - 1)], serverRegion = rawServer.region, gameIndex = (serverIndex = Math.floor(rawServer.index / rawServer.gameCount), rawServer.index % rawServer.gameCount);
                return this.log('Found server.'), [
                    serverRegion,
                    serverIndex,
                    gameIndex
                ];
            }
            this.errorCallback('No open servers.');
        }, VultrClient.prototype.connect = function (region, index, game) {
            if (!this.connected) {
                var server = this.findServer(region, index);
                null != server ? (this.log('Connecting to server', server, 'with game index', game), server.games[game].playerCount >= this.lobbySize ? this.errorCallback('Server is already full.') : (window.history.replaceState(document.title, document.title, this.generateHref(region, index, game, this.password)), this.server = server, this.gameIndex = game, this.log('Calling callback with address', this.serverAddress(server.ip), 'on port', this.serverPort(server), 'with game index', game), this.callback(this.serverAddress(server.ip), this.serverPort(server), game))) : this.errorCallback('Failed to find server for region ' + region + ' and index ' + index);
            }
        }, VultrClient.prototype.switchServer = function (region, index, game, password) {
            this.switchingServers = !0, window.location.href = this.generateHref(region, index, game, password);
        }, VultrClient.prototype.generateHref = function (region, index, game, password) {
            var href = '/?server=' + (region = this.stripRegion(region)) + ':' + index + ':' + game;
            return password && (href += '&password=' + encodeURIComponent(password)), href;
        }, VultrClient.prototype.serverAddress = function (ip, forceSecure) {
            return '127.0.0.1' == ip || '7f000001' == ip || '903d62ef5d1c2fecdcaeb5e7dd485eff' == ip ? window.location.hostname : this.rawIPs ? forceSecure ? 'ip_' + this.hashIP(ip) + '.' + this.baseUrl : ip : 'ip_' + ip + '.' + this.baseUrl;
        }, VultrClient.prototype.serverPort = function (server) {
            return 0 == server.region ? this.devPort : location.protocol.startsWith('https') ? 443 : 80;
        }, VultrClient.prototype.processServers = function (serverList) {
            for (var servers = {}, i = 0; i < serverList.length; i++) {
                var server = serverList[i], list = servers[server.region];
                null == list && (list = [], servers[server.region] = list), list.push(server);
            }
            for (var region in servers)
                servers[region] = servers[region].sort(function (a, b) {
                    return a.index - b.index;
                });
            this.servers = servers;
        }, VultrClient.prototype.ipToHex = function (ip) {
            return ip.split('.').map(component => ('00' + parseInt(component).toString(16)).substr(-2)).join('').toLowerCase();
        }, VultrClient.prototype.hashIP = function (ip) {
            return md5(this.ipToHex(ip));
        }, VultrClient.prototype.log = function () {
            return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0;
        }, VultrClient.prototype.stripRegion = function (region) {
            return region.startsWith('vultr:') ? region = region.slice(6) : region.startsWith('do:') && (region = region.slice(3)), region;
        }, window.testVultrClient = function () {
            var assertIndex = 1;
            function assert(actual, expected) {
                (actual = '' + actual) == (expected = '' + expected) ? console.log(`Assert ${ assertIndex } passed.`) : console.warn(`Assert ${ assertIndex } failed. Expected ${ expected }, got ${ actual }.`), assertIndex++;
            }
            var client1 = new VultrClient('test.io', -1, 5, 1, !1);
            client1.errorCallback = function (error) {
            }, client1.processServers(function (regions) {
                var servers = [];
                for (var region in regions)
                    for (var regionServers = regions[region], i = 0; i < regionServers.length; i++)
                        servers.push({
                            ip: region + ':' + i,
                            scheme: 'testing',
                            region: region,
                            index: i,
                            games: regionServers[i].map(p => ({
                                playerCount: p,
                                isPrivate: !1
                            }))
                        });
                return servers;
            }({
                1: [
                    [
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0
                    ]
                ],
                2: [
                    [
                        5,
                        1,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0
                    ]
                ],
                3: [
                    [
                        5,
                        0,
                        1,
                        5
                    ],
                    [
                        0,
                        0,
                        0,
                        0
                    ]
                ],
                4: [
                    [
                        5,
                        1,
                        1,
                        5
                    ],
                    [
                        1,
                        0,
                        0,
                        0
                    ]
                ],
                5: [
                    [
                        5,
                        1,
                        1,
                        5
                    ],
                    [
                        1,
                        0,
                        4,
                        0
                    ]
                ],
                6: [
                    [
                        5,
                        5,
                        5,
                        5
                    ],
                    [
                        2,
                        3,
                        1,
                        4
                    ]
                ],
                7: [
                    [
                        5,
                        5,
                        5,
                        5
                    ],
                    [
                        5,
                        5,
                        5,
                        5
                    ]
                ]
            })), assert(client1.seekServer(1, !1), [
                1,
                0,
                0
            ]), assert(client1.seekServer(1, !0), [
                1,
                1,
                3
            ]), assert(client1.seekServer(2, !1), [
                2,
                0,
                1
            ]), assert(client1.seekServer(2, !0), [
                2,
                1,
                3
            ]), assert(client1.seekServer(3, !1), [
                3,
                0,
                2
            ]), assert(client1.seekServer(3, !0), [
                3,
                1,
                3
            ]), assert(client1.seekServer(4, !1), [
                4,
                0,
                1
            ]), assert(client1.seekServer(4, !0), [
                4,
                1,
                3
            ]), assert(client1.seekServer(5, !1), [
                5,
                1,
                2
            ]), assert(client1.seekServer(5, !0), [
                5,
                1,
                3
            ]), assert(client1.seekServer(6, !1), [
                6,
                1,
                3
            ]), assert(client1.seekServer(6, !0), void 0), assert(client1.seekServer(7, !1), void 0), assert(client1.seekServer(7, !0), void 0), console.log('Tests passed.');
        };
        var concat = function (x, y) {
            return x.concat(y);
        };
        Array.prototype.flatMap = function (f) {
            return function (f, xs) {
                return xs.map(f).reduce(concat, []);
            }(f, this);
        }, module.exports = VultrClient;
    },
    function (e, exports, __webpack_require__) {
        /* 24: ./node_modules/punycode/punycode.js */
        'use strict';
        var punycode = __webpack_require__(25), util = __webpack_require__(28);
        function Url() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
        }
        exports.parse = urlParse, exports.resolve = function (source, relative) {
            return urlParse(source, !1, !0).resolve(relative);
        }, exports.resolveObject = function (source, relative) {
            return source ? urlParse(source, !1, !0).resolveObject(relative) : relative;
        }, exports.format = function (obj) {
            return util.isString(obj) && (obj = urlParse(obj)), obj instanceof Url ? obj.format() : Url.prototype.format.call(obj);
        }, exports.Url = Url;
        var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, unwise = [
                '{',
                '}',
                '|',
                '\\',
                '^',
                '`'
            ].concat([
                '<',
                '>',
                '"',
                '`',
                ' ',
                '\r',
                '\n',
                '\t'
            ]), autoEscape = ['\''].concat(unwise), nonHostChars = [
                '%',
                '/',
                '?',
                ';',
                '#'
            ].concat(autoEscape), hostEndingChars = [
                '/',
                '?',
                '#'
            ], hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
                javascript: !0,
                'javascript:': !0
            }, hostlessProtocol = {
                javascript: !0,
                'javascript:': !0
            }, slashedProtocol = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                'http:': !0,
                'https:': !0,
                'ftp:': !0,
                'gopher:': !0,
                'file:': !0
            }, querystring = __webpack_require__(29);
        function urlParse(url, parseQueryString, slashesDenoteHost) {
            if (url && util.isObject(url) && url instanceof Url)
                return url;
            var u = new Url();
            return u.parse(url, parseQueryString, slashesDenoteHost), u;
        }
        Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
            if (!util.isString(url))
                throw new TypeError('Parameter \'url\' must be a string, not ' + typeof url);
            var queryIndex = url.indexOf('?'), splitter = -1 !== queryIndex && queryIndex < url.indexOf('#') ? '?' : '#', uSplit = url.split(splitter);
            uSplit[0] = uSplit[0].replace(/\\/g, '/');
            var rest = url = uSplit.join(splitter);
            if (rest = rest.trim(), !slashesDenoteHost && 1 === url.split('#').length) {
                var simplePath = simplePathPattern.exec(rest);
                if (simplePath)
                    return this.path = rest, this.href = rest, this.pathname = simplePath[1], simplePath[2] ? (this.search = simplePath[2], this.query = parseQueryString ? querystring.parse(this.search.substr(1)) : this.search.substr(1)) : parseQueryString && (this.search = '', this.query = {}), this;
            }
            var proto = protocolPattern.exec(rest);
            if (proto) {
                var lowerProto = (proto = proto[0]).toLowerCase();
                this.protocol = lowerProto, rest = rest.substr(proto.length);
            }
            if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var slashes = '//' === rest.substr(0, 2);
                !slashes || proto && hostlessProtocol[proto] || (rest = rest.substr(2), this.slashes = !0);
            }
            if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
                for (var auth, atSign, hostEnd = -1, i = 0; i < hostEndingChars.length; i++)
                    -1 !== (hec = rest.indexOf(hostEndingChars[i])) && (-1 === hostEnd || hec < hostEnd) && (hostEnd = hec);
                for (-1 !== (atSign = -1 === hostEnd ? rest.lastIndexOf('@') : rest.lastIndexOf('@', hostEnd)) && (auth = rest.slice(0, atSign), rest = rest.slice(atSign + 1), this.auth = decodeURIComponent(auth)), hostEnd = -1, i = 0; i < nonHostChars.length; i++) {
                    var hec;
                    -1 !== (hec = rest.indexOf(nonHostChars[i])) && (-1 === hostEnd || hec < hostEnd) && (hostEnd = hec);
                }
                -1 === hostEnd && (hostEnd = rest.length), this.host = rest.slice(0, hostEnd), rest = rest.slice(hostEnd), this.parseHost(), this.hostname = this.hostname || '';
                var ipv6Hostname = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
                if (!ipv6Hostname)
                    for (var hostparts = this.hostname.split(/\./), l = (i = 0, hostparts.length); i < l; i++) {
                        var part = hostparts[i];
                        if (part && !part.match(hostnamePartPattern)) {
                            for (var newpart = '', j = 0, k = part.length; j < k; j++)
                                part.charCodeAt(j) > 127 ? newpart += 'x' : newpart += part[j];
                            if (!newpart.match(hostnamePartPattern)) {
                                var validParts = hostparts.slice(0, i), notHost = hostparts.slice(i + 1), bit = part.match(hostnamePartStart);
                                bit && (validParts.push(bit[1]), notHost.unshift(bit[2])), notHost.length && (rest = '/' + notHost.join('.') + rest), this.hostname = validParts.join('.');
                                break;
                            }
                        }
                    }
                this.hostname.length > 255 ? this.hostname = '' : this.hostname = this.hostname.toLowerCase(), ipv6Hostname || (this.hostname = punycode.toASCII(this.hostname));
                var p = this.port ? ':' + this.port : '', h = this.hostname || '';
                this.host = h + p, this.href += this.host, ipv6Hostname && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), '/' !== rest[0] && (rest = '/' + rest));
            }
            if (!unsafeProtocol[lowerProto])
                for (i = 0, l = autoEscape.length; i < l; i++) {
                    var ae = autoEscape[i];
                    if (-1 !== rest.indexOf(ae)) {
                        var esc = encodeURIComponent(ae);
                        esc === ae && (esc = escape(ae)), rest = rest.split(ae).join(esc);
                    }
                }
            var hash = rest.indexOf('#');
            -1 !== hash && (this.hash = rest.substr(hash), rest = rest.slice(0, hash));
            var qm = rest.indexOf('?');
            if (-1 !== qm ? (this.search = rest.substr(qm), this.query = rest.substr(qm + 1), parseQueryString && (this.query = querystring.parse(this.query)), rest = rest.slice(0, qm)) : parseQueryString && (this.search = '', this.query = {}), rest && (this.pathname = rest), slashedProtocol[lowerProto] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search) {
                p = this.pathname || '';
                var s = this.search || '';
                this.path = p + s;
            }
            return this.href = this.format(), this;
        }, Url.prototype.format = function () {
            var auth = this.auth || '';
            auth && (auth = (auth = encodeURIComponent(auth)).replace(/%3A/i, ':'), auth += '@');
            var protocol = this.protocol || '', pathname = this.pathname || '', hash = this.hash || '', host = !1, query = '';
            this.host ? host = auth + this.host : this.hostname && (host = auth + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']'), this.port && (host += ':' + this.port)), this.query && util.isObject(this.query) && Object.keys(this.query).length && (query = querystring.stringify(this.query));
            var search = this.search || query && '?' + query || '';
            return protocol && ':' !== protocol.substr(-1) && (protocol += ':'), this.slashes || (!protocol || slashedProtocol[protocol]) && !1 !== host ? (host = '//' + (host || ''), pathname && '/' !== pathname.charAt(0) && (pathname = '/' + pathname)) : host || (host = ''), hash && '#' !== hash.charAt(0) && (hash = '#' + hash), search && '?' !== search.charAt(0) && (search = '?' + search), protocol + host + (pathname = pathname.replace(/[?#]/g, function (match) {
                return encodeURIComponent(match);
            })) + (search = search.replace('#', '%23')) + hash;
        }, Url.prototype.resolve = function (relative) {
            return this.resolveObject(urlParse(relative, !1, !0)).format();
        }, Url.prototype.resolveObject = function (relative) {
            if (util.isString(relative)) {
                var rel = new Url();
                rel.parse(relative, !1, !0), relative = rel;
            }
            for (var result = new Url(), tkeys = Object.keys(this), tk = 0; tk < tkeys.length; tk++) {
                var tkey = tkeys[tk];
                result[tkey] = this[tkey];
            }
            if (result.hash = relative.hash, '' === relative.href)
                return result.href = result.format(), result;
            if (relative.slashes && !relative.protocol) {
                for (var rkeys = Object.keys(relative), rk = 0; rk < rkeys.length; rk++) {
                    var rkey = rkeys[rk];
                    'protocol' !== rkey && (result[rkey] = relative[rkey]);
                }
                return slashedProtocol[result.protocol] && result.hostname && !result.pathname && (result.path = result.pathname = '/'), result.href = result.format(), result;
            }
            if (relative.protocol && relative.protocol !== result.protocol) {
                if (!slashedProtocol[relative.protocol]) {
                    for (var keys = Object.keys(relative), v = 0; v < keys.length; v++) {
                        var k = keys[v];
                        result[k] = relative[k];
                    }
                    return result.href = result.format(), result;
                }
                if (result.protocol = relative.protocol, relative.host || hostlessProtocol[relative.protocol])
                    result.pathname = relative.pathname;
                else {
                    for (var relPath = (relative.pathname || '').split('/'); relPath.length && !(relative.host = relPath.shift()););
                    relative.host || (relative.host = ''), relative.hostname || (relative.hostname = ''), '' !== relPath[0] && relPath.unshift(''), relPath.length < 2 && relPath.unshift(''), result.pathname = relPath.join('/');
                }
                if (result.search = relative.search, result.query = relative.query, result.host = relative.host || '', result.auth = relative.auth, result.hostname = relative.hostname || relative.host, result.port = relative.port, result.pathname || result.search) {
                    var p = result.pathname || '', s = result.search || '';
                    result.path = p + s;
                }
                return result.slashes = result.slashes || relative.slashes, result.href = result.format(), result;
            }
            var isSourceAbs = result.pathname && '/' === result.pathname.charAt(0), isRelAbs = relative.host || relative.pathname && '/' === relative.pathname.charAt(0), mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split('/') || [], psychotic = (relPath = relative.pathname && relative.pathname.split('/') || [], result.protocol && !slashedProtocol[result.protocol]);
            if (psychotic && (result.hostname = '', result.port = null, result.host && ('' === srcPath[0] ? srcPath[0] = result.host : srcPath.unshift(result.host)), result.host = '', relative.protocol && (relative.hostname = null, relative.port = null, relative.host && ('' === relPath[0] ? relPath[0] = relative.host : relPath.unshift(relative.host)), relative.host = null), mustEndAbs = mustEndAbs && ('' === relPath[0] || '' === srcPath[0])), isRelAbs)
                result.host = relative.host || '' === relative.host ? relative.host : result.host, result.hostname = relative.hostname || '' === relative.hostname ? relative.hostname : result.hostname, result.search = relative.search, result.query = relative.query, srcPath = relPath;
            else if (relPath.length)
                srcPath || (srcPath = []), srcPath.pop(), srcPath = srcPath.concat(relPath), result.search = relative.search, result.query = relative.query;
            else if (!util.isNullOrUndefined(relative.search))
                return psychotic && (result.hostname = result.host = srcPath.shift(), (authInHost = !!(result.host && result.host.indexOf('@') > 0) && result.host.split('@')) && (result.auth = authInHost.shift(), result.host = result.hostname = authInHost.shift())), result.search = relative.search, result.query = relative.query, util.isNull(result.pathname) && util.isNull(result.search) || (result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '')), result.href = result.format(), result;
            if (!srcPath.length)
                return result.pathname = null, result.search ? result.path = '/' + result.search : result.path = null, result.href = result.format(), result;
            for (var last = srcPath.slice(-1)[0], hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && ('.' === last || '..' === last) || '' === last, up = 0, i = srcPath.length; i >= 0; i--)
                '.' === (last = srcPath[i]) ? srcPath.splice(i, 1) : '..' === last ? (srcPath.splice(i, 1), up++) : up && (srcPath.splice(i, 1), up--);
            if (!mustEndAbs && !removeAllDots)
                for (; up--; up)
                    srcPath.unshift('..');
            !mustEndAbs || '' === srcPath[0] || srcPath[0] && '/' === srcPath[0].charAt(0) || srcPath.unshift(''), hasTrailingSlash && '/' !== srcPath.join('/').substr(-1) && srcPath.push('');
            var authInHost, isAbsolute = '' === srcPath[0] || srcPath[0] && '/' === srcPath[0].charAt(0);
            return psychotic && (result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '', (authInHost = !!(result.host && result.host.indexOf('@') > 0) && result.host.split('@')) && (result.auth = authInHost.shift(), result.host = result.hostname = authInHost.shift())), (mustEndAbs = mustEndAbs || result.host && srcPath.length) && !isAbsolute && srcPath.unshift(''), srcPath.length ? result.pathname = srcPath.join('/') : (result.pathname = null, result.path = null), util.isNull(result.pathname) && util.isNull(result.search) || (result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '')), result.auth = relative.auth || result.auth, result.slashes = result.slashes || relative.slashes, result.href = result.format(), result;
        }, Url.prototype.parseHost = function () {
            var host = this.host, port = portPattern.exec(host);
            port && (':' !== (port = port[0]) && (this.port = port.substr(1)), host = host.substr(0, host.length - port.length)), host && (this.hostname = host);
        };
    },
    function (e, exports, __webpack_require__) {
        /* 25: (webpack)/buildin/module.js */
        (function (module, global) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !function (root) {
                exports && exports.nodeType, module && module.nodeType;
                var freeGlobal = 'object' == typeof global && global;
                freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal && freeGlobal.self;
                var punycode, maxInt = 2147483647, base = 36, regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
                        overflow: 'Overflow: input needs wider integers to process',
                        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                        'invalid-input': 'Invalid input'
                    }, floor = Math.floor, stringFromCharCode = String.fromCharCode;
                function error(type) {
                    throw new RangeError(errors[type]);
                }
                function map(array, fn) {
                    for (var length = array.length, result = []; length--;)
                        result[length] = fn(array[length]);
                    return result;
                }
                function mapDomain(string, fn) {
                    var parts = string.split('@'), result = '';
                    return parts.length > 1 && (result = parts[0] + '@', string = parts[1]), result + map((string = string.replace(regexSeparators, '.')).split('.'), fn).join('.');
                }
                function ucs2decode(string) {
                    for (var value, extra, output = [], counter = 0, length = string.length; counter < length;)
                        (value = string.charCodeAt(counter++)) >= 55296 && value <= 56319 && counter < length ? 56320 == (64512 & (extra = string.charCodeAt(counter++))) ? output.push(((1023 & value) << 10) + (1023 & extra) + 65536) : (output.push(value), counter--) : output.push(value);
                    return output;
                }
                function ucs2encode(array) {
                    return map(array, function (value) {
                        var output = '';
                        return value > 65535 && (output += stringFromCharCode((value -= 65536) >>> 10 & 1023 | 55296), value = 56320 | 1023 & value), output + stringFromCharCode(value);
                    }).join('');
                }
                function basicToDigit(codePoint) {
                    return codePoint - 48 < 10 ? codePoint - 22 : codePoint - 65 < 26 ? codePoint - 65 : codePoint - 97 < 26 ? codePoint - 97 : base;
                }
                function digitToBasic(digit, flag) {
                    return digit + 22 + 75 * (digit < 26) - ((0 != flag) << 5);
                }
                function adapt(delta, numPoints, firstTime) {
                    var k = 0;
                    for (delta = firstTime ? floor(delta / 700) : delta >> 1, delta += floor(delta / numPoints); delta > 455; k += base)
                        delta = floor(delta / 35);
                    return floor(k + 36 * delta / (delta + 38));
                }
                function decode(input) {
                    var out, basic, j, index, oldi, w, k, digit, t, baseMinusT, output = [], inputLength = input.length, i = 0, n = 128, bias = 72;
                    for ((basic = input.lastIndexOf('-')) < 0 && (basic = 0), j = 0; j < basic; ++j)
                        input.charCodeAt(j) >= 128 && error('not-basic'), output.push(input.charCodeAt(j));
                    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
                        for (oldi = i, w = 1, k = base; index >= inputLength && error('invalid-input'), ((digit = basicToDigit(input.charCodeAt(index++))) >= base || digit > floor((maxInt - i) / w)) && error('overflow'), i += digit * w, !(digit < (t = k <= bias ? 1 : k >= bias + 26 ? 26 : k - bias)); k += base)
                            w > floor(maxInt / (baseMinusT = base - t)) && error('overflow'), w *= baseMinusT;
                        bias = adapt(i - oldi, out = output.length + 1, 0 == oldi), floor(i / out) > maxInt - n && error('overflow'), n += floor(i / out), i %= out, output.splice(i++, 0, n);
                    }
                    return ucs2encode(output);
                }
                function encode(input) {
                    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, inputLength, handledCPCountPlusOne, baseMinusT, qMinusT, output = [];
                    for (inputLength = (input = ucs2decode(input)).length, n = 128, delta = 0, bias = 72, j = 0; j < inputLength; ++j)
                        (currentValue = input[j]) < 128 && output.push(stringFromCharCode(currentValue));
                    for (handledCPCount = basicLength = output.length, basicLength && output.push('-'); handledCPCount < inputLength;) {
                        for (m = maxInt, j = 0; j < inputLength; ++j)
                            (currentValue = input[j]) >= n && currentValue < m && (m = currentValue);
                        for (m - n > floor((maxInt - delta) / (handledCPCountPlusOne = handledCPCount + 1)) && error('overflow'), delta += (m - n) * handledCPCountPlusOne, n = m, j = 0; j < inputLength; ++j)
                            if ((currentValue = input[j]) < n && ++delta > maxInt && error('overflow'), currentValue == n) {
                                for (q = delta, k = base; !(q < (t = k <= bias ? 1 : k >= bias + 26 ? 26 : k - bias)); k += base)
                                    qMinusT = q - t, baseMinusT = base - t, output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))), q = floor(qMinusT / baseMinusT);
                                output.push(stringFromCharCode(digitToBasic(q, 0))), bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength), delta = 0, ++handledCPCount;
                            }
                        ++delta, ++n;
                    }
                    return output.join('');
                }
                punycode = {
                    version: '1.4.1',
                    ucs2: {
                        decode: ucs2decode,
                        encode: ucs2encode
                    },
                    decode: decode,
                    encode: encode,
                    toASCII: function (input) {
                        return mapDomain(input, function (string) {
                            return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
                        });
                    },
                    toUnicode: function (input) {
                        return mapDomain(input, function (string) {
                            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
                        });
                    }
                }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return punycode;
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            }();
        }.call(this, __webpack_require__(26)(e), __webpack_require__(27)));
    },
    function (module, t) {
        /* 26: (webpack)/buildin/global.js */
        module.exports = function (module) {
            return module.webpackPolyfill || (module.deprecate = function () {
            }, module.paths = [], module.children || (module.children = []), Object.defineProperty(module, 'loaded', {
                enumerable: !0,
                get: function () {
                    return module.l;
                }
            }), Object.defineProperty(module, 'id', {
                enumerable: !0,
                get: function () {
                    return module.i;
                }
            }), module.webpackPolyfill = 1), module;
        };
    },
    function (module, t) {
        /* 27: ./node_modules/url/util.js */
        var g;
        g = function () {
            return this;
        }();
        try {
            g = g || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (g = window);
        }
        module.exports = g;
    },
    function (module, t, i) {
        /* 28: ./node_modules/querystring-es3/index.js */
        'use strict';
        module.exports = {
            isString: function (arg) {
                return 'string' == typeof arg;
            },
            isObject: function (arg) {
                return 'object' == typeof arg && null !== arg;
            },
            isNull: function (arg) {
                return null === arg;
            },
            isNullOrUndefined: function (arg) {
                return null == arg;
            }
        };
    },
    function (e, exports, __webpack_require__) {
        /* 29: ./node_modules/querystring-es3/decode.js */
        'use strict';
        exports.decode = exports.parse = __webpack_require__(30), exports.encode = exports.stringify = __webpack_require__(31);
    },
    function (module, t, i) {
        /* 30: ./node_modules/querystring-es3/encode.js */
        'use strict';
        function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        module.exports = function (qs, sep, eq, options) {
            sep = sep || '&', eq = eq || '=';
            var obj = {};
            if ('string' != typeof qs || 0 === qs.length)
                return obj;
            var regexp = /\+/g;
            qs = qs.split(sep);
            var maxKeys = 1000;
            options && 'number' == typeof options.maxKeys && (maxKeys = options.maxKeys);
            var len = qs.length;
            maxKeys > 0 && len > maxKeys && (len = maxKeys);
            for (var i = 0; i < len; ++i) {
                var kstr, vstr, k, v, x = qs[i].replace(regexp, '%20'), idx = x.indexOf(eq);
                idx >= 0 ? (kstr = x.substr(0, idx), vstr = x.substr(idx + 1)) : (kstr = x, vstr = ''), k = decodeURIComponent(kstr), v = decodeURIComponent(vstr), hasOwnProperty(obj, k) ? isArray(obj[k]) ? obj[k].push(v) : obj[k] = [
                    obj[k],
                    v
                ] : obj[k] = v;
            }
            return obj;
        };
        var isArray = Array.isArray || function (xs) {
            return '[object Array]' === Object.prototype.toString.call(xs);
        };
    },
    function (module, t, i) {
        /* 31: ./node_modules/md5/md5.js */
        'use strict';
        var stringifyPrimitive = function (v) {
            switch (typeof v) {
            case 'string':
                return v;
            case 'boolean':
                return v ? 'true' : 'false';
            case 'number':
                return isFinite(v) ? v : '';
            default:
                return '';
            }
        };
        module.exports = function (obj, sep, eq, name) {
            return sep = sep || '&', eq = eq || '=', null === obj && (obj = void 0), 'object' == typeof obj ? map(objectKeys(obj), function (k) {
                var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                return isArray(obj[k]) ? map(obj[k], function (v) {
                    return ks + encodeURIComponent(stringifyPrimitive(v));
                }).join(sep) : ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }).join(sep) : name ? encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj)) : '';
        };
        var isArray = Array.isArray || function (xs) {
            return '[object Array]' === Object.prototype.toString.call(xs);
        };
        function map(xs, f) {
            if (xs.map)
                return xs.map(f);
            for (var res = [], i = 0; i < xs.length; i++)
                res.push(f(xs[i], i));
            return res;
        }
        var objectKeys = Object.keys || function (obj) {
            var res = [];
            for (var key in obj)
                Object.prototype.hasOwnProperty.call(obj, key) && res.push(key);
            return res;
        };
    },
    function (module, t, __webpack_require__) {
        /* 32: ./node_modules/crypt/crypt.js */
        !function () {
            var crypt = __webpack_require__(33), utf8 = __webpack_require__(1).utf8, isBuffer = __webpack_require__(34), bin = __webpack_require__(1).bin, md5 = function (message, options) {
                    message.constructor == String ? message = options && 'binary' === options.encoding ? bin.stringToBytes(message) : utf8.stringToBytes(message) : isBuffer(message) ? message = Array.prototype.slice.call(message, 0) : Array.isArray(message) || (message = message.toString());
                    for (var m = crypt.bytesToWords(message), l = 8 * message.length, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < m.length; i++)
                        m[i] = 16711935 & (m[i] << 8 | m[i] >>> 24) | 4278255360 & (m[i] << 24 | m[i] >>> 8);
                    m[l >>> 5] |= 128 << l % 32, m[14 + (l + 64 >>> 9 << 4)] = l;
                    var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
                    for (i = 0; i < m.length; i += 16) {
                        var aa = a, bb = b, cc = c, dd = d;
                        b = II(b = II(b = II(b = II(b = HH(b = HH(b = HH(b = HH(b = GG(b = GG(b = GG(b = GG(b = FF(b = FF(b = FF(b = FF(b, c = FF(c, d = FF(d, a = FF(a, b, c, d, m[i + 0], 7, -680876936), b, c, m[i + 1], 12, -389564586), a, b, m[i + 2], 17, 606105819), d, a, m[i + 3], 22, -1044525330), c = FF(c, d = FF(d, a = FF(a, b, c, d, m[i + 4], 7, -176418897), b, c, m[i + 5], 12, 1200080426), a, b, m[i + 6], 17, -1473231341), d, a, m[i + 7], 22, -45705983), c = FF(c, d = FF(d, a = FF(a, b, c, d, m[i + 8], 7, 1770035416), b, c, m[i + 9], 12, -1958414417), a, b, m[i + 10], 17, -42063), d, a, m[i + 11], 22, -1990404162), c = FF(c, d = FF(d, a = FF(a, b, c, d, m[i + 12], 7, 1804603682), b, c, m[i + 13], 12, -40341101), a, b, m[i + 14], 17, -1502002290), d, a, m[i + 15], 22, 1236535329), c = GG(c, d = GG(d, a = GG(a, b, c, d, m[i + 1], 5, -165796510), b, c, m[i + 6], 9, -1069501632), a, b, m[i + 11], 14, 643717713), d, a, m[i + 0], 20, -373897302), c = GG(c, d = GG(d, a = GG(a, b, c, d, m[i + 5], 5, -701558691), b, c, m[i + 10], 9, 38016083), a, b, m[i + 15], 14, -660478335), d, a, m[i + 4], 20, -405537848), c = GG(c, d = GG(d, a = GG(a, b, c, d, m[i + 9], 5, 568446438), b, c, m[i + 14], 9, -1019803690), a, b, m[i + 3], 14, -187363961), d, a, m[i + 8], 20, 1163531501), c = GG(c, d = GG(d, a = GG(a, b, c, d, m[i + 13], 5, -1444681467), b, c, m[i + 2], 9, -51403784), a, b, m[i + 7], 14, 1735328473), d, a, m[i + 12], 20, -1926607734), c = HH(c, d = HH(d, a = HH(a, b, c, d, m[i + 5], 4, -378558), b, c, m[i + 8], 11, -2022574463), a, b, m[i + 11], 16, 1839030562), d, a, m[i + 14], 23, -35309556), c = HH(c, d = HH(d, a = HH(a, b, c, d, m[i + 1], 4, -1530992060), b, c, m[i + 4], 11, 1272893353), a, b, m[i + 7], 16, -155497632), d, a, m[i + 10], 23, -1094730640), c = HH(c, d = HH(d, a = HH(a, b, c, d, m[i + 13], 4, 681279174), b, c, m[i + 0], 11, -358537222), a, b, m[i + 3], 16, -722521979), d, a, m[i + 6], 23, 76029189), c = HH(c, d = HH(d, a = HH(a, b, c, d, m[i + 9], 4, -640364487), b, c, m[i + 12], 11, -421815835), a, b, m[i + 15], 16, 530742520), d, a, m[i + 2], 23, -995338651), c = II(c, d = II(d, a = II(a, b, c, d, m[i + 0], 6, -198630844), b, c, m[i + 7], 10, 1126891415), a, b, m[i + 14], 15, -1416354905), d, a, m[i + 5], 21, -57434055), c = II(c, d = II(d, a = II(a, b, c, d, m[i + 12], 6, 1700485571), b, c, m[i + 3], 10, -1894986606), a, b, m[i + 10], 15, -1051523), d, a, m[i + 1], 21, -2054922799), c = II(c, d = II(d, a = II(a, b, c, d, m[i + 8], 6, 1873313359), b, c, m[i + 15], 10, -30611744), a, b, m[i + 6], 15, -1560198380), d, a, m[i + 13], 21, 1309151649), c = II(c, d = II(d, a = II(a, b, c, d, m[i + 4], 6, -145523070), b, c, m[i + 11], 10, -1120210379), a, b, m[i + 2], 15, 718787259), d, a, m[i + 9], 21, -343485551), a = a + aa >>> 0, b = b + bb >>> 0, c = c + cc >>> 0, d = d + dd >>> 0;
                    }
                    return crypt.endian([
                        a,
                        b,
                        c,
                        d
                    ]);
                };
            md5._ff = function (a, b, c, d, x, s, t) {
                var n = a + (b & c | ~b & d) + (x >>> 0) + t;
                return (n << s | n >>> 32 - s) + b;
            }, md5._gg = function (a, b, c, d, x, s, t) {
                var n = a + (b & d | c & ~d) + (x >>> 0) + t;
                return (n << s | n >>> 32 - s) + b;
            }, md5._hh = function (a, b, c, d, x, s, t) {
                var n = a + (b ^ c ^ d) + (x >>> 0) + t;
                return (n << s | n >>> 32 - s) + b;
            }, md5._ii = function (a, b, c, d, x, s, t) {
                var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
                return (n << s | n >>> 32 - s) + b;
            }, md5._blocksize = 16, md5._digestsize = 16, module.exports = function (message, options) {
                if (null == message)
                    throw new Error('Illegal argument ' + message);
                var digestbytes = crypt.wordsToBytes(md5(message, options));
                return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
            };
        }();
    },
    function (module, t) {
        /* 33: ./node_modules/is-buffer/index.js */
        !function () {
            var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', crypt = {
                    rotl: function (n, b) {
                        return n << b | n >>> 32 - b;
                    },
                    rotr: function (n, b) {
                        return n << 32 - b | n >>> b;
                    },
                    endian: function (n) {
                        if (n.constructor == Number)
                            return 16711935 & crypt.rotl(n, 8) | 4278255360 & crypt.rotl(n, 24);
                        for (var i = 0; i < n.length; i++)
                            n[i] = crypt.endian(n[i]);
                        return n;
                    },
                    randomBytes: function (n) {
                        for (var bytes = []; n > 0; n--)
                            bytes.push(Math.floor(256 * Math.random()));
                        return bytes;
                    },
                    bytesToWords: function (bytes) {
                        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
                            words[b >>> 5] |= bytes[i] << 24 - b % 32;
                        return words;
                    },
                    wordsToBytes: function (words) {
                        for (var bytes = [], b = 0; b < 32 * words.length; b += 8)
                            bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
                        return bytes;
                    },
                    bytesToHex: function (bytes) {
                        for (var hex = [], i = 0; i < bytes.length; i++)
                            hex.push((bytes[i] >>> 4).toString(16)), hex.push((15 & bytes[i]).toString(16));
                        return hex.join('');
                    },
                    hexToBytes: function (hex) {
                        for (var bytes = [], c = 0; c < hex.length; c += 2)
                            bytes.push(parseInt(hex.substr(c, 2), 16));
                        return bytes;
                    },
                    bytesToBase64: function (bytes) {
                        for (var base64 = [], i = 0; i < bytes.length; i += 3)
                            for (var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2], j = 0; j < 4; j++)
                                8 * i + 6 * j <= 8 * bytes.length ? base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63)) : base64.push('=');
                        return base64.join('');
                    },
                    base64ToBytes: function (base64) {
                        base64 = base64.replace(/[^A-Z0-9+\/]/gi, '');
                        for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4)
                            0 != imod4 && bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << 2 * imod4 | base64map.indexOf(base64.charAt(i)) >>> 6 - 2 * imod4);
                        return bytes;
                    }
                };
            module.exports = crypt;
        }();
    },
    function (module, t) {
        /* 34: ./src/js/data/aiManager.js */
        function isBuffer(obj) {
            return !!obj.constructor && 'function' == typeof obj.constructor.isBuffer && obj.constructor.isBuffer(obj);
        }
        module.exports = function (obj) {
            return null != obj && (isBuffer(obj) || function (obj) {
                return 'function' == typeof obj.readFloatLE && 'function' == typeof obj.slice && isBuffer(obj.slice(0, 0));
            }(obj) || !!obj._isBuffer);
        };
    },
    function (module, t) {
        /* 35: ./src/js/data/ai.js */
        module.exports = function (ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {
            this.aiTypes = [
                {
                    id: 0,
                    src: 'cow_1',
                    killScore: 150,
                    health: 500,
                    weightM: 0.8,
                    speed: 0.00095,
                    turnSpeed: 0.001,
                    scale: 72,
                    drop: [
                        'food',
                        50
                    ]
                },
                {
                    id: 1,
                    src: 'pig_1',
                    killScore: 200,
                    health: 800,
                    weightM: 0.6,
                    speed: 0.00085,
                    turnSpeed: 0.001,
                    scale: 72,
                    drop: [
                        'food',
                        80
                    ]
                },
                {
                    id: 2,
                    name: 'Bull',
                    src: 'bull_2',
                    hostile: !0,
                    dmg: 20,
                    killScore: 1000,
                    health: 1800,
                    weightM: 0.5,
                    speed: 0.00094,
                    turnSpeed: 0.00074,
                    scale: 78,
                    viewRange: 800,
                    chargePlayer: !0,
                    drop: [
                        'food',
                        100
                    ]
                },
                {
                    id: 3,
                    name: 'Bully',
                    src: 'bull_1',
                    hostile: !0,
                    dmg: 20,
                    killScore: 2000,
                    health: 2800,
                    weightM: 0.45,
                    speed: 0.001,
                    turnSpeed: 0.0008,
                    scale: 90,
                    viewRange: 900,
                    chargePlayer: !0,
                    drop: [
                        'food',
                        400
                    ]
                },
                {
                    id: 4,
                    name: 'Wolf',
                    src: 'wolf_1',
                    hostile: !0,
                    dmg: 8,
                    killScore: 500,
                    health: 300,
                    weightM: 0.45,
                    speed: 0.001,
                    turnSpeed: 0.002,
                    scale: 84,
                    viewRange: 800,
                    chargePlayer: !0,
                    drop: [
                        'food',
                        200
                    ]
                },
                {
                    id: 5,
                    name: 'Quack',
                    src: 'chicken_1',
                    dmg: 8,
                    killScore: 2000,
                    noTrap: !0,
                    health: 300,
                    weightM: 0.2,
                    speed: 0.0018,
                    turnSpeed: 0.006,
                    scale: 70,
                    drop: [
                        'food',
                        100
                    ]
                },
                {
                    id: 6,
                    name: 'MOOSTAFA',
                    nameScale: 50,
                    src: 'enemy',
                    hostile: !0,
                    dontRun: !0,
                    fixedSpawn: !0,
                    spawnDelay: 60000,
                    noTrap: !0,
                    colDmg: 100,
                    dmg: 40,
                    killScore: 8000,
                    health: 18000,
                    weightM: 0.4,
                    speed: 0.0007,
                    turnSpeed: 0.01,
                    scale: 80,
                    spriteMlt: 1.8,
                    leapForce: 0.9,
                    viewRange: 1000,
                    hitRange: 210,
                    hitDelay: 1000,
                    chargePlayer: !0,
                    drop: [
                        'food',
                        100
                    ]
                },
                {
                    id: 7,
                    name: 'Treasure',
                    hostile: !0,
                    nameScale: 35,
                    src: 'crate_1',
                    fixedSpawn: !0,
                    spawnDelay: 120000,
                    colDmg: 200,
                    killScore: 5000,
                    health: 20000,
                    weightM: 0.1,
                    speed: 0,
                    turnSpeed: 0,
                    scale: 70,
                    spriteMlt: 1
                },
                {
                    id: 8,
                    name: 'MOOFIE',
                    src: 'wolf_2',
                    hostile: !0,
                    fixedSpawn: !0,
                    dontRun: !0,
                    hitScare: 4,
                    spawnDelay: 30000,
                    noTrap: !0,
                    nameScale: 35,
                    dmg: 10,
                    colDmg: 100,
                    killScore: 3000,
                    health: 7000,
                    weightM: 0.45,
                    speed: 0.0015,
                    turnSpeed: 0.002,
                    scale: 90,
                    viewRange: 800,
                    chargePlayer: !0,
                    drop: [
                        'food',
                        1000
                    ]
                }
            ], this.spawn = function (x, y, dir, index) {
                for (var tmpObj, i = 0; i < ais.length; ++i)
                    if (!ais[i].active) {
                        tmpObj = ais[i];
                        break;
                    }
                return tmpObj || (tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server), ais.push(tmpObj)), tmpObj.init(x, y, dir, index, this.aiTypes[index]), tmpObj;
            };
        };
    },
    function (module, t) {
        /* 36: ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs */
        var PI2 = 2 * Math.PI;
        module.exports = function (sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
            this.sid = sid, this.isAI = !0, this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1), this.init = function (x, y, dir, index, data) {
                this.x = x, this.y = y, this.startX = data.fixedSpawn ? x : null, this.startY = data.fixedSpawn ? y : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = dir, this.dirPlus = 0, this.index = index, this.src = data.src, data.name && (this.name = data.name), this.weightM = data.weightM, this.speed = data.speed, this.killScore = data.killScore, this.turnSpeed = data.turnSpeed, this.scale = data.scale, this.maxHealth = data.health, this.leapForce = data.leapForce, this.health = this.maxHealth, this.chargePlayer = data.chargePlayer, this.viewRange = data.viewRange, this.drop = data.drop, this.dmg = data.dmg, this.hostile = data.hostile, this.dontRun = data.dontRun, this.hitRange = data.hitRange, this.hitDelay = data.hitDelay, this.hitScare = data.hitScare, this.spriteMlt = data.spriteMlt, this.nameScale = data.nameScale, this.colDmg = data.colDmg, this.noTrap = data.noTrap, this.spawnDelay = data.spawnDelay, this.hitWait = 0, this.waitCount = 1000, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {};
            };
            var timerCount = 0;
            this.update = function (delta) {
                if (this.active) {
                    if (this.spawnCounter)
                        return this.spawnCounter -= delta, void (this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || UTILS.randInt(0, config.mapScale), this.y = this.startY || UTILS.randInt(0, config.mapScale)));
                    (timerCount -= delta) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), timerCount = 1000);
                    var charging = !1, slowMlt = 1;
                    if (!this.zIndex && !this.lockMove && this.y >= config.mapScale / 2 - config.riverWidth / 2 && this.y <= config.mapScale / 2 + config.riverWidth / 2 && (slowMlt = 0.33, this.xVel += config.waterCurrent * delta), this.lockMove)
                        this.xVel = 0, this.yVel = 0;
                    else if (this.waitCount > 0) {
                        if (this.waitCount -= delta, this.waitCount <= 0)
                            if (this.chargePlayer) {
                                for (var tmpPlayer, bestDst, tmpDist, i = 0; i < players.length; ++i)
                                    !players[i].alive || players[i].skin && players[i].skin.bullRepel || (tmpDist = UTILS.getDistance(this.x, this.y, players[i].x, players[i].y)) <= this.viewRange && (!tmpPlayer || tmpDist < bestDst) && (bestDst = tmpDist, tmpPlayer = players[i]);
                                tmpPlayer ? (this.chargeTarget = tmpPlayer, this.moveCount = UTILS.randInt(8000, 12000)) : (this.moveCount = UTILS.randInt(1000, 2000), this.targetDir = UTILS.randFloat(-Math.PI, Math.PI));
                            } else
                                this.moveCount = UTILS.randInt(4000, 10000), this.targetDir = UTILS.randFloat(-Math.PI, Math.PI);
                    } else if (this.moveCount > 0) {
                        var tmpSpd = this.speed * slowMlt;
                        if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = UTILS.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), tmpSpd *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = UTILS.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), tmpSpd *= 1.75, charging = !0), this.hitWait && (tmpSpd *= 0.3), this.dir != this.targetDir) {
                            this.dir %= PI2;
                            var netAngle = (this.dir - this.targetDir + PI2) % PI2, amnt = Math.min(Math.abs(netAngle - PI2), netAngle, this.turnSpeed * delta), sign = netAngle - Math.PI >= 0 ? 1 : -1;
                            this.dir += sign * amnt + PI2;
                        }
                        this.dir %= PI2, this.xVel += tmpSpd * delta * Math.cos(this.dir), this.yVel += tmpSpd * delta * Math.sin(this.dir), this.moveCount -= delta, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : UTILS.randInt(1500, 6000));
                    }
                    this.zIndex = 0, this.lockMove = !1;
                    var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta), depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40))), tMlt = 1 / depth;
                    for (i = 0; i < depth; ++i) {
                        this.xVel && (this.x += this.xVel * delta * tMlt), this.yVel && (this.y += this.yVel * delta * tMlt), tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
                        for (var x = 0; x < tmpList.length; ++x)
                            for (var y = 0; y < tmpList[x].length; ++y)
                                tmpList[x][y].active && objectManager.checkCollision(this, tmpList[x][y], tMlt);
                    }
                    var tmpObj, tmpDst, tmpDir, hitting = !1;
                    if (this.hitWait > 0 && (this.hitWait -= delta, this.hitWait <= 0)) {
                        hitting = !0, this.hitWait = 0, this.leapForce && !UTILS.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
                        for (var tmpList = objectManager.getGridArrays(this.x, this.y, this.hitRange), t = 0; t < tmpList.length; ++t)
                            for (x = 0; x < tmpList[t].length; ++x)
                                (tmpObj = tmpList[t][x]).health && (tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y)) < tmpObj.scale + this.hitRange && (tmpObj.changeHealth(5 * -this.dmg) && objectManager.disableObj(tmpObj), objectManager.hitObj(tmpObj, UTILS.getDirection(this.x, this.y, tmpObj.x, tmpObj.y)));
                        for (x = 0; x < players.length; ++x)
                            players[x].canSee(this) && server.send(players[x].id, 'aa', this.sid);
                    }
                    if (charging || hitting)
                        for (i = 0; i < players.length; ++i)
                            (tmpObj = players[i]) && tmpObj.alive && (tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y), this.hitRange ? !this.hitWait && tmpDst <= this.hitRange + tmpObj.scale && (hitting ? (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), tmpObj.changeHealth(-this.dmg), tmpObj.xVel += 0.6 * Math.cos(tmpDir), tmpObj.yVel += 0.6 * Math.sin(tmpDir), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3000, this.hitWait = UTILS.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : tmpDst <= this.scale + tmpObj.scale && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), tmpObj.changeHealth(-this.dmg), tmpObj.xVel += 0.55 * Math.cos(tmpDir), tmpObj.yVel += 0.55 * Math.sin(tmpDir)));
                    this.xVel && (this.xVel *= Math.pow(config.playerDecel, delta)), this.yVel && (this.yVel *= Math.pow(config.playerDecel, delta));
                    var tmpScale = this.scale;
                    this.x - tmpScale < 0 ? (this.x = tmpScale, this.xVel = 0) : this.x + tmpScale > config.mapScale && (this.x = config.mapScale - tmpScale, this.xVel = 0), this.y - tmpScale < 0 ? (this.y = tmpScale, this.yVel = 0) : this.y + tmpScale > config.mapScale && (this.y = config.mapScale - tmpScale, this.yVel = 0);
                }
            }, this.canSee = function (other) {
                if (!other)
                    return !1;
                if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer)
                    return !1;
                var dx = Math.abs(other.x - this.x) - other.scale, dy = Math.abs(other.y - this.y) - other.scale;
                return dx <= config.maxScreenWidth / 2 * 1.3 && dy <= config.maxScreenHeight / 2 * 1.3;
            };
            var tmpRatio = 0, animIndex = 0;
            this.animate = function (delta) {
                this.animTime > 0 && (this.animTime -= delta, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, tmpRatio = 0, animIndex = 0) : 0 == animIndex ? (tmpRatio += delta / (this.animSpeed * config.hitReturnRatio), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio)), tmpRatio >= 1 && (tmpRatio = 1, animIndex = 1)) : (tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio)), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))));
            }, this.startAnim = function () {
                this.animTime = this.animSpeed = 600, this.targetAngle = 0.8 * Math.PI, tmpRatio = 0, animIndex = 0;
            }, this.changeHealth = function (val, doer, runFrom) {
                if (this.active && (this.health += val, runFrom && (this.hitScare && !UTILS.randInt(0, this.hitScare) ? (this.runFrom = runFrom, this.waitCount = 0, this.moveCount = 2000) : this.hostile && this.chargePlayer && runFrom.isPlayer ? (this.chargeTarget = runFrom, this.waitCount = 0, this.moveCount = 8000) : this.dontRun || (this.runFrom = runFrom, this.waitCount = 0, this.moveCount = 2000)), val < 0 && this.hitRange && UTILS.randInt(0, 1) && (this.hitWait = 500), doer && doer.canSee(this) && val < 0 && server.send(doer.id, 't', Math.round(this.x), Math.round(this.y), Math.round(-val), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1000000, this.y = -1000000) : (this.x = this.startX || UTILS.randInt(0, config.mapScale), this.y = this.startY || UTILS.randInt(0, config.mapScale)), this.health = this.maxHealth, this.runFrom = null, doer && (scoreCallback(doer, this.killScore), this.drop))))
                    for (var i = 0; i < this.drop.length;)
                        doer.addResource(config.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]), i += 2;
            };
        };
    },
    function (e, __webpack_exports__, __webpack_require__) {
        /* 37: ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs */
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var utf8_a, utf8_b, utf8_c, UINT32_MAX = 4294967295;
        function setInt64(view, offset, value) {
            var high = Math.floor(value / 4294967296), low = value;
            view.setUint32(offset, high), view.setUint32(offset + 4, low);
        }
        function getInt64(view, offset) {
            return 4294967296 * view.getInt32(offset) + view.getUint32(offset + 4);
        }
        var TEXT_ENCODING_AVAILABLE = ('undefined' == typeof process || 'never' !== (null === (utf8_a = null === process || void 0 === process ? void 0 : process.env) || void 0 === utf8_a ? void 0 : utf8_a.TEXT_ENCODING)) && 'undefined' != typeof TextEncoder && 'undefined' != typeof TextDecoder;
        function utf8Count(str) {
            for (var strLength = str.length, byteLength = 0, pos = 0; pos < strLength;) {
                var value = str.charCodeAt(pos++);
                if (0 != (4294967168 & value))
                    if (0 == (4294965248 & value))
                        byteLength += 2;
                    else {
                        if (value >= 55296 && value <= 56319 && pos < strLength) {
                            var extra = str.charCodeAt(pos);
                            56320 == (64512 & extra) && (++pos, value = ((1023 & value) << 10) + (1023 & extra) + 65536);
                        }
                        byteLength += 0 == (4294901760 & value) ? 3 : 4;
                    }
                else
                    byteLength++;
            }
            return byteLength;
        }
        var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : void 0, TEXT_ENCODER_THRESHOLD = TEXT_ENCODING_AVAILABLE ? 'undefined' != typeof process && 'force' !== (null === (utf8_b = null === process || void 0 === process ? void 0 : process.env) || void 0 === utf8_b ? void 0 : utf8_b.TEXT_ENCODING) ? 200 : 0 : UINT32_MAX, utf8EncodeTE = (null == sharedTextEncoder ? void 0 : sharedTextEncoder.encodeInto) ? function (str, output, outputOffset) {
                sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
            } : function (str, output, outputOffset) {
                output.set(sharedTextEncoder.encode(str), outputOffset);
            };
        function utf8DecodeJs(bytes, inputOffset, byteLength) {
            for (var offset = inputOffset, end = offset + byteLength, units = [], result = ''; offset < end;) {
                var byte1 = bytes[offset++];
                if (0 == (128 & byte1))
                    units.push(byte1);
                else if (192 == (224 & byte1)) {
                    var byte2 = 63 & bytes[offset++];
                    units.push((31 & byte1) << 6 | byte2);
                } else if (224 == (240 & byte1)) {
                    byte2 = 63 & bytes[offset++];
                    var byte3 = 63 & bytes[offset++];
                    units.push((31 & byte1) << 12 | byte2 << 6 | byte3);
                } else if (240 == (248 & byte1)) {
                    var unit = (7 & byte1) << 18 | (byte2 = 63 & bytes[offset++]) << 12 | (byte3 = 63 & bytes[offset++]) << 6 | 63 & bytes[offset++];
                    unit > 65535 && (unit -= 65536, units.push(unit >>> 10 & 1023 | 55296), unit = 56320 | 1023 & unit), units.push(unit);
                } else
                    units.push(byte1);
                units.length >= 4096 && (result += String.fromCharCode.apply(String, units), units.length = 0);
            }
            return units.length > 0 && (result += String.fromCharCode.apply(String, units)), result;
        }
        var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null, TEXT_DECODER_THRESHOLD = TEXT_ENCODING_AVAILABLE ? 'undefined' != typeof process && 'force' !== (null === (utf8_c = null === process || void 0 === process ? void 0 : process.env) || void 0 === utf8_c ? void 0 : utf8_c.TEXT_DECODER) ? 200 : 0 : UINT32_MAX, ExtData = function (type, data) {
                this.type = type, this.data = data;
            }, __extends = function () {
                var extendStatics = function (d, b) {
                    return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    } || function (d, b) {
                        for (var p in b)
                            Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                    })(d, b);
                };
                return function (d, b) {
                    if ('function' != typeof b && null !== b)
                        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
                    function __() {
                        this.constructor = d;
                    }
                    extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }(), DecodeError = function (_super) {
                function DecodeError(message) {
                    var _this = _super.call(this, message) || this, proto = Object.create(DecodeError.prototype);
                    return Object.setPrototypeOf(_this, proto), Object.defineProperty(_this, 'name', {
                        configurable: !0,
                        enumerable: !1,
                        value: DecodeError.name
                    }), _this;
                }
                return __extends(DecodeError, _super), DecodeError;
            }(Error);
        function encodeTimeSpecToTimestamp(_a) {
            var view, sec = _a.sec, nsec = _a.nsec;
            if (sec >= 0 && nsec >= 0 && sec <= 17179869183) {
                if (0 === nsec && sec <= 4294967295) {
                    var rv = new Uint8Array(4);
                    return (view = new DataView(rv.buffer)).setUint32(0, sec), rv;
                }
                var secHigh = sec / 4294967296, secLow = 4294967295 & sec;
                return rv = new Uint8Array(8), (view = new DataView(rv.buffer)).setUint32(0, nsec << 2 | 3 & secHigh), view.setUint32(4, secLow), rv;
            }
            return rv = new Uint8Array(12), (view = new DataView(rv.buffer)).setUint32(0, nsec), setInt64(view, 4, sec), rv;
        }
        function encodeDateToTimeSpec(date) {
            var msec = date.getTime(), sec = Math.floor(msec / 1000), nsec = 1000000 * (msec - 1000 * sec), nsecInSec = Math.floor(nsec / 1000000000);
            return {
                sec: sec + nsecInSec,
                nsec: nsec - 1000000000 * nsecInSec
            };
        }
        function encodeTimestampExtension(object) {
            return object instanceof Date ? encodeTimeSpecToTimestamp(encodeDateToTimeSpec(object)) : null;
        }
        function decodeTimestampToTimeSpec(data) {
            var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
            switch (data.byteLength) {
            case 4:
                return {
                    sec: view.getUint32(0),
                    nsec: 0
                };
            case 8:
                var nsec30AndSecHigh2 = view.getUint32(0);
                return {
                    sec: 4294967296 * (3 & nsec30AndSecHigh2) + view.getUint32(4),
                    nsec: nsec30AndSecHigh2 >>> 2
                };
            case 12:
                return {
                    sec: getInt64(view, 4),
                    nsec: view.getUint32(0)
                };
            default:
                throw new DecodeError('Unrecognized data size for timestamp (expected 4, 8, or 12): '.concat(data.length));
            }
        }
        function decodeTimestampExtension(data) {
            var timeSpec = decodeTimestampToTimeSpec(data);
            return new Date(1000 * timeSpec.sec + timeSpec.nsec / 1000000);
        }
        var timestampExtension = {
                type: -1,
                encode: encodeTimestampExtension,
                decode: decodeTimestampExtension
            }, ExtensionCodec_ExtensionCodec = function () {
                function ExtensionCodec() {
                    this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(timestampExtension);
                }
                return ExtensionCodec.prototype.register = function (_a) {
                    var type = _a.type, encode = _a.encode, decode = _a.decode;
                    if (type >= 0)
                        this.encoders[type] = encode, this.decoders[type] = decode;
                    else {
                        var index = 1 + type;
                        this.builtInEncoders[index] = encode, this.builtInDecoders[index] = decode;
                    }
                }, ExtensionCodec.prototype.tryToEncode = function (object, context) {
                    for (var i = 0; i < this.builtInEncoders.length; i++)
                        if (null != (encodeExt = this.builtInEncoders[i]) && null != (data = encodeExt(object, context)))
                            return new ExtData(-1 - i, data);
                    for (i = 0; i < this.encoders.length; i++) {
                        var encodeExt, data;
                        if (null != (encodeExt = this.encoders[i]) && null != (data = encodeExt(object, context)))
                            return new ExtData(i, data);
                    }
                    return object instanceof ExtData ? object : null;
                }, ExtensionCodec.prototype.decode = function (data, type, context) {
                    var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
                    return decodeExt ? decodeExt(data, type, context) : new ExtData(type, data);
                }, ExtensionCodec.defaultCodec = new ExtensionCodec(), ExtensionCodec;
            }();
        function ensureUint8Array(buffer) {
            return buffer instanceof Uint8Array ? buffer : ArrayBuffer.isView(buffer) ? new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) : buffer instanceof ArrayBuffer ? new Uint8Array(buffer) : Uint8Array.from(buffer);
        }
        var Encoder_Encoder = function () {
                function Encoder(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined, forceIntegerToFloat) {
                    void 0 === extensionCodec && (extensionCodec = ExtensionCodec_ExtensionCodec.defaultCodec), void 0 === context && (context = void 0), void 0 === maxDepth && (maxDepth = 100), void 0 === initialBufferSize && (initialBufferSize = 2048), void 0 === sortKeys && (sortKeys = !1), void 0 === forceFloat32 && (forceFloat32 = !1), void 0 === ignoreUndefined && (ignoreUndefined = !1), void 0 === forceIntegerToFloat && (forceIntegerToFloat = !1), this.extensionCodec = extensionCodec, this.context = context, this.maxDepth = maxDepth, this.initialBufferSize = initialBufferSize, this.sortKeys = sortKeys, this.forceFloat32 = forceFloat32, this.ignoreUndefined = ignoreUndefined, this.forceIntegerToFloat = forceIntegerToFloat, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
                }
                return Encoder.prototype.reinitializeState = function () {
                    this.pos = 0;
                }, Encoder.prototype.encodeSharedRef = function (object) {
                    return this.reinitializeState(), this.doEncode(object, 1), this.bytes.subarray(0, this.pos);
                }, Encoder.prototype.encode = function (object) {
                    return this.reinitializeState(), this.doEncode(object, 1), this.bytes.slice(0, this.pos);
                }, Encoder.prototype.doEncode = function (object, depth) {
                    if (depth > this.maxDepth)
                        throw new Error('Too deep objects in depth '.concat(depth));
                    null == object ? this.encodeNil() : 'boolean' == typeof object ? this.encodeBoolean(object) : 'number' == typeof object ? this.encodeNumber(object) : 'string' == typeof object ? this.encodeString(object) : this.encodeObject(object, depth);
                }, Encoder.prototype.ensureBufferSizeToWrite = function (sizeToWrite) {
                    var requiredSize = this.pos + sizeToWrite;
                    this.view.byteLength < requiredSize && this.resizeBuffer(2 * requiredSize);
                }, Encoder.prototype.resizeBuffer = function (newSize) {
                    var newBuffer = new ArrayBuffer(newSize), newBytes = new Uint8Array(newBuffer), newView = new DataView(newBuffer);
                    newBytes.set(this.bytes), this.view = newView, this.bytes = newBytes;
                }, Encoder.prototype.encodeNil = function () {
                    this.writeU8(192);
                }, Encoder.prototype.encodeBoolean = function (object) {
                    !1 === object ? this.writeU8(194) : this.writeU8(195);
                }, Encoder.prototype.encodeNumber = function (object) {
                    Number.isSafeInteger(object) && !this.forceIntegerToFloat ? object >= 0 ? object < 128 ? this.writeU8(object) : object < 256 ? (this.writeU8(204), this.writeU8(object)) : object < 65536 ? (this.writeU8(205), this.writeU16(object)) : object < 4294967296 ? (this.writeU8(206), this.writeU32(object)) : (this.writeU8(207), this.writeU64(object)) : object >= -32 ? this.writeU8(224 | object + 32) : object >= -128 ? (this.writeU8(208), this.writeI8(object)) : object >= -32768 ? (this.writeU8(209), this.writeI16(object)) : object >= -2147483648 ? (this.writeU8(210), this.writeI32(object)) : (this.writeU8(211), this.writeI64(object)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(object)) : (this.writeU8(203), this.writeF64(object));
                }, Encoder.prototype.writeStringHeader = function (byteLength) {
                    if (byteLength < 32)
                        this.writeU8(160 + byteLength);
                    else if (byteLength < 256)
                        this.writeU8(217), this.writeU8(byteLength);
                    else if (byteLength < 65536)
                        this.writeU8(218), this.writeU16(byteLength);
                    else {
                        if (!(byteLength < 4294967296))
                            throw new Error('Too long string: '.concat(byteLength, ' bytes in UTF-8'));
                        this.writeU8(219), this.writeU32(byteLength);
                    }
                }, Encoder.prototype.encodeString = function (object) {
                    if (object.length > TEXT_ENCODER_THRESHOLD) {
                        var byteLength = utf8Count(object);
                        this.ensureBufferSizeToWrite(5 + byteLength), this.writeStringHeader(byteLength), utf8EncodeTE(object, this.bytes, this.pos), this.pos += byteLength;
                    } else
                        byteLength = utf8Count(object), this.ensureBufferSizeToWrite(5 + byteLength), this.writeStringHeader(byteLength), function (str, output, outputOffset) {
                            for (var strLength = str.length, offset = outputOffset, pos = 0; pos < strLength;) {
                                var value = str.charCodeAt(pos++);
                                if (0 != (4294967168 & value)) {
                                    if (0 == (4294965248 & value))
                                        output[offset++] = value >> 6 & 31 | 192;
                                    else {
                                        if (value >= 55296 && value <= 56319 && pos < strLength) {
                                            var extra = str.charCodeAt(pos);
                                            56320 == (64512 & extra) && (++pos, value = ((1023 & value) << 10) + (1023 & extra) + 65536);
                                        }
                                        0 == (4294901760 & value) ? (output[offset++] = value >> 12 & 15 | 224, output[offset++] = value >> 6 & 63 | 128) : (output[offset++] = value >> 18 & 7 | 240, output[offset++] = value >> 12 & 63 | 128, output[offset++] = value >> 6 & 63 | 128);
                                    }
                                    output[offset++] = 63 & value | 128;
                                } else
                                    output[offset++] = value;
                            }
                        }(object, this.bytes, this.pos), this.pos += byteLength;
                }, Encoder.prototype.encodeObject = function (object, depth) {
                    var ext = this.extensionCodec.tryToEncode(object, this.context);
                    if (null != ext)
                        this.encodeExtension(ext);
                    else if (Array.isArray(object))
                        this.encodeArray(object, depth);
                    else if (ArrayBuffer.isView(object))
                        this.encodeBinary(object);
                    else {
                        if ('object' != typeof object)
                            throw new Error('Unrecognized object: '.concat(Object.prototype.toString.apply(object)));
                        this.encodeMap(object, depth);
                    }
                }, Encoder.prototype.encodeBinary = function (object) {
                    var size = object.byteLength;
                    if (size < 256)
                        this.writeU8(196), this.writeU8(size);
                    else if (size < 65536)
                        this.writeU8(197), this.writeU16(size);
                    else {
                        if (!(size < 4294967296))
                            throw new Error('Too large binary: '.concat(size));
                        this.writeU8(198), this.writeU32(size);
                    }
                    var bytes = ensureUint8Array(object);
                    this.writeU8a(bytes);
                }, Encoder.prototype.encodeArray = function (object, depth) {
                    var size = object.length;
                    if (size < 16)
                        this.writeU8(144 + size);
                    else if (size < 65536)
                        this.writeU8(220), this.writeU16(size);
                    else {
                        if (!(size < 4294967296))
                            throw new Error('Too large array: '.concat(size));
                        this.writeU8(221), this.writeU32(size);
                    }
                    for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
                        var item = object_1[_i];
                        this.doEncode(item, depth + 1);
                    }
                }, Encoder.prototype.countWithoutUndefined = function (object, keys) {
                    for (var count = 0, _i = 0, keys_1 = keys; _i < keys_1.length; _i++)
                        void 0 !== object[keys_1[_i]] && count++;
                    return count;
                }, Encoder.prototype.encodeMap = function (object, depth) {
                    var keys = Object.keys(object);
                    this.sortKeys && keys.sort();
                    var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
                    if (size < 16)
                        this.writeU8(128 + size);
                    else if (size < 65536)
                        this.writeU8(222), this.writeU16(size);
                    else {
                        if (!(size < 4294967296))
                            throw new Error('Too large map object: '.concat(size));
                        this.writeU8(223), this.writeU32(size);
                    }
                    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                        var key = keys_2[_i], value = object[key];
                        this.ignoreUndefined && void 0 === value || (this.encodeString(key), this.doEncode(value, depth + 1));
                    }
                }, Encoder.prototype.encodeExtension = function (ext) {
                    var size = ext.data.length;
                    if (1 === size)
                        this.writeU8(212);
                    else if (2 === size)
                        this.writeU8(213);
                    else if (4 === size)
                        this.writeU8(214);
                    else if (8 === size)
                        this.writeU8(215);
                    else if (16 === size)
                        this.writeU8(216);
                    else if (size < 256)
                        this.writeU8(199), this.writeU8(size);
                    else if (size < 65536)
                        this.writeU8(200), this.writeU16(size);
                    else {
                        if (!(size < 4294967296))
                            throw new Error('Too large extension object: '.concat(size));
                        this.writeU8(201), this.writeU32(size);
                    }
                    this.writeI8(ext.type), this.writeU8a(ext.data);
                }, Encoder.prototype.writeU8 = function (value) {
                    this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, value), this.pos++;
                }, Encoder.prototype.writeU8a = function (values) {
                    var size = values.length;
                    this.ensureBufferSizeToWrite(size), this.bytes.set(values, this.pos), this.pos += size;
                }, Encoder.prototype.writeI8 = function (value) {
                    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, value), this.pos++;
                }, Encoder.prototype.writeU16 = function (value) {
                    this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, value), this.pos += 2;
                }, Encoder.prototype.writeI16 = function (value) {
                    this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, value), this.pos += 2;
                }, Encoder.prototype.writeU32 = function (value) {
                    this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, value), this.pos += 4;
                }, Encoder.prototype.writeI32 = function (value) {
                    this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, value), this.pos += 4;
                }, Encoder.prototype.writeF32 = function (value) {
                    this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, value), this.pos += 4;
                }, Encoder.prototype.writeF64 = function (value) {
                    this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, value), this.pos += 8;
                }, Encoder.prototype.writeU64 = function (value) {
                    this.ensureBufferSizeToWrite(8), function (view, offset, value) {
                        var high = value / 4294967296, low = value;
                        view.setUint32(offset, high), view.setUint32(offset + 4, low);
                    }(this.view, this.pos, value), this.pos += 8;
                }, Encoder.prototype.writeI64 = function (value) {
                    this.ensureBufferSizeToWrite(8), setInt64(this.view, this.pos, value), this.pos += 8;
                }, Encoder;
            }(), defaultEncodeOptions = {};
        function encode(value, options) {
            return void 0 === options && (options = defaultEncodeOptions), new Encoder_Encoder(options.extensionCodec, options.context, options.maxDepth, options.initialBufferSize, options.sortKeys, options.forceFloat32, options.ignoreUndefined, options.forceIntegerToFloat).encodeSharedRef(value);
        }
        function prettyByte(byte) {
            return ''.concat(byte < 0 ? '-' : '', '0x').concat(Math.abs(byte).toString(16).padStart(2, '0'));
        }
        var CachedKeyDecoder_CachedKeyDecoder = function () {
                function CachedKeyDecoder(maxKeyLength, maxLengthPerKey) {
                    void 0 === maxKeyLength && (maxKeyLength = 16), void 0 === maxLengthPerKey && (maxLengthPerKey = 16), this.maxKeyLength = maxKeyLength, this.maxLengthPerKey = maxLengthPerKey, this.hit = 0, this.miss = 0, this.caches = [];
                    for (var i = 0; i < this.maxKeyLength; i++)
                        this.caches.push([]);
                }
                return CachedKeyDecoder.prototype.canBeCached = function (byteLength) {
                    return byteLength > 0 && byteLength <= this.maxKeyLength;
                }, CachedKeyDecoder.prototype.find = function (bytes, inputOffset, byteLength) {
                    e:
                        for (var _i = 0, records_1 = this.caches[byteLength - 1]; _i < records_1.length; _i++) {
                            for (var record = records_1[_i], recordBytes = record.bytes, j = 0; j < byteLength; j++)
                                if (recordBytes[j] !== bytes[inputOffset + j])
                                    continue e;
                            return record.str;
                        }
                    return null;
                }, CachedKeyDecoder.prototype.store = function (bytes, value) {
                    var records = this.caches[bytes.length - 1], record = {
                            bytes: bytes,
                            str: value
                        };
                    records.length >= this.maxLengthPerKey ? records[Math.random() * records.length | 0] = record : records.push(record);
                }, CachedKeyDecoder.prototype.decode = function (bytes, inputOffset, byteLength) {
                    var cachedValue = this.find(bytes, inputOffset, byteLength);
                    if (null != cachedValue)
                        return this.hit++, cachedValue;
                    this.miss++;
                    var str = utf8DecodeJs(bytes, inputOffset, byteLength), slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
                    return this.store(slicedCopyOfBytes, str), str;
                }, CachedKeyDecoder;
            }(), __generator = function (thisArg, body) {
                var f, y, t, g, _ = {
                        label: 0,
                        sent: function () {
                            if (1 & t[0])
                                throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, 'function' == typeof Symbol && (g[Symbol.iterator] = function () {
                    return this;
                }), g;
                function verb(n) {
                    return function (v) {
                        return function (op) {
                            if (f)
                                throw new TypeError('Generator is already executing.');
                            for (; _;)
                                try {
                                    if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                        return t;
                                    switch (y = 0, t && (op = [
                                            2 & op[0],
                                            t.value
                                        ]), op[0]) {
                                    case 0:
                                    case 1:
                                        t = op;
                                        break;
                                    case 4:
                                        return _.label++, {
                                            value: op[1],
                                            done: !1
                                        };
                                    case 5:
                                        _.label++, y = op[1], op = [0];
                                        continue;
                                    case 7:
                                        op = _.ops.pop(), _.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                            _ = 0;
                                            continue;
                                        }
                                        if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                            _.label = op[1];
                                            break;
                                        }
                                        if (6 === op[0] && _.label < t[1]) {
                                            _.label = t[1], t = op;
                                            break;
                                        }
                                        if (t && _.label < t[2]) {
                                            _.label = t[2], _.ops.push(op);
                                            break;
                                        }
                                        t[2] && _.ops.pop(), _.trys.pop();
                                        continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [
                                        6,
                                        e
                                    ], y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (5 & op[0])
                                throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([
                            n,
                            v
                        ]);
                    };
                }
            }, __asyncValues = function (o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError('Symbol.asyncIterator is not defined.');
                var i, m = o[Symbol.asyncIterator];
                return m ? m.call(o) : (o = 'function' == typeof __values ? __values(o) : o[Symbol.iterator](), i = {}, verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = function () {
                    return this;
                }, i);
                function verb(n) {
                    i[n] = o[n] && function (v) {
                        return new Promise(function (resolve, reject) {
                            !function (resolve, reject, d, v) {
                                Promise.resolve(v).then(function (v) {
                                    resolve({
                                        value: v,
                                        done: d
                                    });
                                }, reject);
                            }(resolve, reject, (v = o[n](v)).done, v.value);
                        });
                    };
                }
            }, __await = function (v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }, __asyncGenerator = function (thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError('Symbol.asyncIterator is not defined.');
                var i, g = generator.apply(thisArg, _arguments || []), q = [];
                return i = {}, verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = function () {
                    return this;
                }, i;
                function verb(n) {
                    g[n] && (i[n] = function (v) {
                        return new Promise(function (a, b) {
                            q.push([
                                n,
                                v,
                                a,
                                b
                            ]) > 1 || resume(n, v);
                        });
                    });
                }
                function resume(n, v) {
                    try {
                        !function (r) {
                            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                        }(g[n](v));
                    } catch (e) {
                        settle(q[0][3], e);
                    }
                }
                function fulfill(value) {
                    resume('next', value);
                }
                function reject(value) {
                    resume('throw', value);
                }
                function settle(f, v) {
                    f(v), q.shift(), q.length && resume(q[0][0], q[0][1]);
                }
            }, isValidMapKeyType = function (key) {
                var keyType = typeof key;
                return 'string' === keyType || 'number' === keyType;
            }, EMPTY_VIEW = new DataView(new ArrayBuffer(0)), EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer), DataViewIndexOutOfBoundsError = function () {
                try {
                    EMPTY_VIEW.getInt8(0);
                } catch (e) {
                    return e.constructor;
                }
                throw new Error('never reached');
            }(), MORE_DATA = new DataViewIndexOutOfBoundsError('Insufficient data'), sharedCachedKeyDecoder = new CachedKeyDecoder_CachedKeyDecoder(), Decoder_Decoder = function () {
                function Decoder(extensionCodec, context, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, keyDecoder) {
                    void 0 === extensionCodec && (extensionCodec = ExtensionCodec_ExtensionCodec.defaultCodec), void 0 === context && (context = void 0), void 0 === maxStrLength && (maxStrLength = UINT32_MAX), void 0 === maxBinLength && (maxBinLength = UINT32_MAX), void 0 === maxArrayLength && (maxArrayLength = UINT32_MAX), void 0 === maxMapLength && (maxMapLength = UINT32_MAX), void 0 === maxExtLength && (maxExtLength = UINT32_MAX), void 0 === keyDecoder && (keyDecoder = sharedCachedKeyDecoder), this.extensionCodec = extensionCodec, this.context = context, this.maxStrLength = maxStrLength, this.maxBinLength = maxBinLength, this.maxArrayLength = maxArrayLength, this.maxMapLength = maxMapLength, this.maxExtLength = maxExtLength, this.keyDecoder = keyDecoder, this.totalPos = 0, this.pos = 0, this.view = EMPTY_VIEW, this.bytes = EMPTY_BYTES, this.headByte = -1, this.stack = [];
                }
                return Decoder.prototype.reinitializeState = function () {
                    this.totalPos = 0, this.headByte = -1, this.stack.length = 0;
                }, Decoder.prototype.setBuffer = function (buffer) {
                    this.bytes = ensureUint8Array(buffer), this.view = function (buffer) {
                        if (buffer instanceof ArrayBuffer)
                            return new DataView(buffer);
                        var bufferView = ensureUint8Array(buffer);
                        return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
                    }(this.bytes), this.pos = 0;
                }, Decoder.prototype.appendBuffer = function (buffer) {
                    if (-1 !== this.headByte || this.hasRemaining(1)) {
                        var remainingData = this.bytes.subarray(this.pos), newData = ensureUint8Array(buffer), newBuffer = new Uint8Array(remainingData.length + newData.length);
                        newBuffer.set(remainingData), newBuffer.set(newData, remainingData.length), this.setBuffer(newBuffer);
                    } else
                        this.setBuffer(buffer);
                }, Decoder.prototype.hasRemaining = function (size) {
                    return this.view.byteLength - this.pos >= size;
                }, Decoder.prototype.createExtraByteError = function (posToShow) {
                    var view = this.view, pos = this.pos;
                    return new RangeError('Extra '.concat(view.byteLength - pos, ' of ').concat(view.byteLength, ' byte(s) found at buffer[').concat(posToShow, ']'));
                }, Decoder.prototype.decode = function (buffer) {
                    this.reinitializeState(), this.setBuffer(buffer);
                    var object = this.doDecodeSync();
                    if (this.hasRemaining(1))
                        throw this.createExtraByteError(this.pos);
                    return object;
                }, Decoder.prototype.decodeMulti = function (buffer) {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                        case 0:
                            this.reinitializeState(), this.setBuffer(buffer), _a.label = 1;
                        case 1:
                            return this.hasRemaining(1) ? [
                                4,
                                this.doDecodeSync()
                            ] : [
                                3,
                                3
                            ];
                        case 2:
                            return _a.sent(), [
                                3,
                                1
                            ];
                        case 3:
                            return [2];
                        }
                    });
                }, Decoder.prototype.decodeAsync = function (stream) {
                    var stream_1, stream_1_1, e_1, _a;
                    return function (thisArg, _arguments, P, generator) {
                        return new (P || (P = Promise))(function (resolve, reject) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator.throw(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done ? resolve(result.value) : function (value) {
                                    return value instanceof P ? value : new P(function (resolve) {
                                        resolve(value);
                                    });
                                }(result.value).then(fulfilled, rejected);
                            }
                            step((generator = generator.apply(thisArg, _arguments || [])).next());
                        });
                    }(this, void 0, void 0, function () {
                        var decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                            case 0:
                                decoded = !1, _c.label = 1;
                            case 1:
                                _c.trys.push([
                                    1,
                                    6,
                                    7,
                                    12
                                ]), stream_1 = __asyncValues(stream), _c.label = 2;
                            case 2:
                                return [
                                    4,
                                    stream_1.next()
                                ];
                            case 3:
                                if ((stream_1_1 = _c.sent()).done)
                                    return [
                                        3,
                                        5
                                    ];
                                if (buffer = stream_1_1.value, decoded)
                                    throw this.createExtraByteError(this.totalPos);
                                this.appendBuffer(buffer);
                                try {
                                    object = this.doDecodeSync(), decoded = !0;
                                } catch (e) {
                                    if (!(e instanceof DataViewIndexOutOfBoundsError))
                                        throw e;
                                }
                                this.totalPos += this.pos, _c.label = 4;
                            case 4:
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    12
                                ];
                            case 6:
                                return e_1_1 = _c.sent(), e_1 = { error: e_1_1 }, [
                                    3,
                                    12
                                ];
                            case 7:
                                return _c.trys.push([
                                    7,
                                    ,
                                    10,
                                    11
                                ]), stream_1_1 && !stream_1_1.done && (_a = stream_1.return) ? [
                                    4,
                                    _a.call(stream_1)
                                ] : [
                                    3,
                                    9
                                ];
                            case 8:
                                _c.sent(), _c.label = 9;
                            case 9:
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                if (e_1)
                                    throw e_1.error;
                                return [7];
                            case 11:
                                return [7];
                            case 12:
                                if (decoded) {
                                    if (this.hasRemaining(1))
                                        throw this.createExtraByteError(this.totalPos);
                                    return [
                                        2,
                                        object
                                    ];
                                }
                                throw headByte = (_b = this).headByte, pos = _b.pos, totalPos = _b.totalPos, new RangeError('Insufficient data in parsing '.concat(prettyByte(headByte), ' at ').concat(totalPos, ' (').concat(pos, ' in the current buffer)'));
                            }
                        });
                    });
                }, Decoder.prototype.decodeArrayStream = function (stream) {
                    return this.decodeMultiAsync(stream, !0);
                }, Decoder.prototype.decodeStream = function (stream) {
                    return this.decodeMultiAsync(stream, !1);
                }, Decoder.prototype.decodeMultiAsync = function (stream, isArray) {
                    return __asyncGenerator(this, arguments, function () {
                        var isArrayHeaderRequired, arrayItemsLeft, stream_2, stream_2_1, buffer, e_2, e_3_1, e_3, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                            case 0:
                                isArrayHeaderRequired = isArray, arrayItemsLeft = -1, _b.label = 1;
                            case 1:
                                _b.trys.push([
                                    1,
                                    13,
                                    14,
                                    19
                                ]), stream_2 = __asyncValues(stream), _b.label = 2;
                            case 2:
                                return [
                                    4,
                                    __await(stream_2.next())
                                ];
                            case 3:
                                if ((stream_2_1 = _b.sent()).done)
                                    return [
                                        3,
                                        12
                                    ];
                                if (buffer = stream_2_1.value, isArray && 0 === arrayItemsLeft)
                                    throw this.createExtraByteError(this.totalPos);
                                this.appendBuffer(buffer), isArrayHeaderRequired && (arrayItemsLeft = this.readArraySize(), isArrayHeaderRequired = !1, this.complete()), _b.label = 4;
                            case 4:
                                _b.trys.push([
                                    4,
                                    9,
                                    ,
                                    10
                                ]), _b.label = 5;
                            case 5:
                                return [
                                    4,
                                    __await(this.doDecodeSync())
                                ];
                            case 6:
                                return [
                                    4,
                                    _b.sent()
                                ];
                            case 7:
                                return _b.sent(), 0 == --arrayItemsLeft ? [
                                    3,
                                    8
                                ] : [
                                    3,
                                    5
                                ];
                            case 8:
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                if (!((e_2 = _b.sent()) instanceof DataViewIndexOutOfBoundsError))
                                    throw e_2;
                                return [
                                    3,
                                    10
                                ];
                            case 10:
                                this.totalPos += this.pos, _b.label = 11;
                            case 11:
                                return [
                                    3,
                                    2
                                ];
                            case 12:
                                return [
                                    3,
                                    19
                                ];
                            case 13:
                                return e_3_1 = _b.sent(), e_3 = { error: e_3_1 }, [
                                    3,
                                    19
                                ];
                            case 14:
                                return _b.trys.push([
                                    14,
                                    ,
                                    17,
                                    18
                                ]), stream_2_1 && !stream_2_1.done && (_a = stream_2.return) ? [
                                    4,
                                    __await(_a.call(stream_2))
                                ] : [
                                    3,
                                    16
                                ];
                            case 15:
                                _b.sent(), _b.label = 16;
                            case 16:
                                return [
                                    3,
                                    18
                                ];
                            case 17:
                                if (e_3)
                                    throw e_3.error;
                                return [7];
                            case 18:
                                return [7];
                            case 19:
                                return [2];
                            }
                        });
                    });
                }, Decoder.prototype.doDecodeSync = function () {
                    e:
                        for (;;) {
                            var headByte = this.readHeadByte(), object = void 0;
                            if (headByte >= 224)
                                object = headByte - 256;
                            else if (headByte < 192)
                                if (headByte < 128)
                                    object = headByte;
                                else if (headByte < 144) {
                                    if (0 != (size = headByte - 128)) {
                                        this.pushMapState(size), this.complete();
                                        continue e;
                                    }
                                    object = {};
                                } else if (headByte < 160) {
                                    if (0 != (size = headByte - 144)) {
                                        this.pushArrayState(size), this.complete();
                                        continue e;
                                    }
                                    object = [];
                                } else {
                                    var byteLength = headByte - 160;
                                    object = this.decodeUtf8String(byteLength, 0);
                                }
                            else if (192 === headByte)
                                object = null;
                            else if (194 === headByte)
                                object = !1;
                            else if (195 === headByte)
                                object = !0;
                            else if (202 === headByte)
                                object = this.readF32();
                            else if (203 === headByte)
                                object = this.readF64();
                            else if (204 === headByte)
                                object = this.readU8();
                            else if (205 === headByte)
                                object = this.readU16();
                            else if (206 === headByte)
                                object = this.readU32();
                            else if (207 === headByte)
                                object = this.readU64();
                            else if (208 === headByte)
                                object = this.readI8();
                            else if (209 === headByte)
                                object = this.readI16();
                            else if (210 === headByte)
                                object = this.readI32();
                            else if (211 === headByte)
                                object = this.readI64();
                            else if (217 === headByte)
                                byteLength = this.lookU8(), object = this.decodeUtf8String(byteLength, 1);
                            else if (218 === headByte)
                                byteLength = this.lookU16(), object = this.decodeUtf8String(byteLength, 2);
                            else if (219 === headByte)
                                byteLength = this.lookU32(), object = this.decodeUtf8String(byteLength, 4);
                            else if (220 === headByte) {
                                if (0 !== (size = this.readU16())) {
                                    this.pushArrayState(size), this.complete();
                                    continue e;
                                }
                                object = [];
                            } else if (221 === headByte) {
                                if (0 !== (size = this.readU32())) {
                                    this.pushArrayState(size), this.complete();
                                    continue e;
                                }
                                object = [];
                            } else if (222 === headByte) {
                                if (0 !== (size = this.readU16())) {
                                    this.pushMapState(size), this.complete();
                                    continue e;
                                }
                                object = {};
                            } else if (223 === headByte) {
                                if (0 !== (size = this.readU32())) {
                                    this.pushMapState(size), this.complete();
                                    continue e;
                                }
                                object = {};
                            } else if (196 === headByte) {
                                var size = this.lookU8();
                                object = this.decodeBinary(size, 1);
                            } else if (197 === headByte)
                                size = this.lookU16(), object = this.decodeBinary(size, 2);
                            else if (198 === headByte)
                                size = this.lookU32(), object = this.decodeBinary(size, 4);
                            else if (212 === headByte)
                                object = this.decodeExtension(1, 0);
                            else if (213 === headByte)
                                object = this.decodeExtension(2, 0);
                            else if (214 === headByte)
                                object = this.decodeExtension(4, 0);
                            else if (215 === headByte)
                                object = this.decodeExtension(8, 0);
                            else if (216 === headByte)
                                object = this.decodeExtension(16, 0);
                            else if (199 === headByte)
                                size = this.lookU8(), object = this.decodeExtension(size, 1);
                            else if (200 === headByte)
                                size = this.lookU16(), object = this.decodeExtension(size, 2);
                            else {
                                if (201 !== headByte)
                                    throw new DecodeError('Unrecognized type byte: '.concat(prettyByte(headByte)));
                                size = this.lookU32(), object = this.decodeExtension(size, 4);
                            }
                            this.complete();
                            for (var stack = this.stack; stack.length > 0;) {
                                var state = stack[stack.length - 1];
                                if (0 === state.type) {
                                    if (state.array[state.position] = object, state.position++, state.position !== state.size)
                                        continue e;
                                    stack.pop(), object = state.array;
                                } else {
                                    if (1 === state.type) {
                                        if (!isValidMapKeyType(object))
                                            throw new DecodeError('The type of key must be string or number but ' + typeof object);
                                        if ('__proto__' === object)
                                            throw new DecodeError('The key __proto__ is not allowed');
                                        state.key = object, state.type = 2;
                                        continue e;
                                    }
                                    if (state.map[state.key] = object, state.readCount++, state.readCount !== state.size) {
                                        state.key = null, state.type = 1;
                                        continue e;
                                    }
                                    stack.pop(), object = state.map;
                                }
                            }
                            return object;
                        }
                }, Decoder.prototype.readHeadByte = function () {
                    return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte;
                }, Decoder.prototype.complete = function () {
                    this.headByte = -1;
                }, Decoder.prototype.readArraySize = function () {
                    var headByte = this.readHeadByte();
                    switch (headByte) {
                    case 220:
                        return this.readU16();
                    case 221:
                        return this.readU32();
                    default:
                        if (headByte < 160)
                            return headByte - 144;
                        throw new DecodeError('Unrecognized array type byte: '.concat(prettyByte(headByte)));
                    }
                }, Decoder.prototype.pushMapState = function (size) {
                    if (size > this.maxMapLength)
                        throw new DecodeError('Max length exceeded: map length ('.concat(size, ') > maxMapLengthLength (').concat(this.maxMapLength, ')'));
                    this.stack.push({
                        type: 1,
                        size: size,
                        key: null,
                        readCount: 0,
                        map: {}
                    });
                }, Decoder.prototype.pushArrayState = function (size) {
                    if (size > this.maxArrayLength)
                        throw new DecodeError('Max length exceeded: array length ('.concat(size, ') > maxArrayLength (').concat(this.maxArrayLength, ')'));
                    this.stack.push({
                        type: 0,
                        size: size,
                        array: new Array(size),
                        position: 0
                    });
                }, Decoder.prototype.decodeUtf8String = function (byteLength, headerOffset) {
                    var _a;
                    if (byteLength > this.maxStrLength)
                        throw new DecodeError('Max length exceeded: UTF-8 byte length ('.concat(byteLength, ') > maxStrLength (').concat(this.maxStrLength, ')'));
                    if (this.bytes.byteLength < this.pos + headerOffset + byteLength)
                        throw MORE_DATA;
                    var object, offset = this.pos + headerOffset;
                    return object = this.stateIsMapKey() && (null === (_a = this.keyDecoder) || void 0 === _a ? void 0 : _a.canBeCached(byteLength)) ? this.keyDecoder.decode(this.bytes, offset, byteLength) : byteLength > TEXT_DECODER_THRESHOLD ? function (bytes, inputOffset, byteLength) {
                        var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
                        return sharedTextDecoder.decode(stringBytes);
                    }(this.bytes, offset, byteLength) : utf8DecodeJs(this.bytes, offset, byteLength), this.pos += headerOffset + byteLength, object;
                }, Decoder.prototype.stateIsMapKey = function () {
                    return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type;
                }, Decoder.prototype.decodeBinary = function (byteLength, headOffset) {
                    if (byteLength > this.maxBinLength)
                        throw new DecodeError('Max length exceeded: bin length ('.concat(byteLength, ') > maxBinLength (').concat(this.maxBinLength, ')'));
                    if (!this.hasRemaining(byteLength + headOffset))
                        throw MORE_DATA;
                    var offset = this.pos + headOffset, object = this.bytes.subarray(offset, offset + byteLength);
                    return this.pos += headOffset + byteLength, object;
                }, Decoder.prototype.decodeExtension = function (size, headOffset) {
                    if (size > this.maxExtLength)
                        throw new DecodeError('Max length exceeded: ext length ('.concat(size, ') > maxExtLength (').concat(this.maxExtLength, ')'));
                    var extType = this.view.getInt8(this.pos + headOffset), data = this.decodeBinary(size, headOffset + 1);
                    return this.extensionCodec.decode(data, extType, this.context);
                }, Decoder.prototype.lookU8 = function () {
                    return this.view.getUint8(this.pos);
                }, Decoder.prototype.lookU16 = function () {
                    return this.view.getUint16(this.pos);
                }, Decoder.prototype.lookU32 = function () {
                    return this.view.getUint32(this.pos);
                }, Decoder.prototype.readU8 = function () {
                    var value = this.view.getUint8(this.pos);
                    return this.pos++, value;
                }, Decoder.prototype.readI8 = function () {
                    var value = this.view.getInt8(this.pos);
                    return this.pos++, value;
                }, Decoder.prototype.readU16 = function () {
                    var value = this.view.getUint16(this.pos);
                    return this.pos += 2, value;
                }, Decoder.prototype.readI16 = function () {
                    var value = this.view.getInt16(this.pos);
                    return this.pos += 2, value;
                }, Decoder.prototype.readU32 = function () {
                    var value = this.view.getUint32(this.pos);
                    return this.pos += 4, value;
                }, Decoder.prototype.readI32 = function () {
                    var value = this.view.getInt32(this.pos);
                    return this.pos += 4, value;
                }, Decoder.prototype.readU64 = function () {
                    var value = function (view, offset) {
                        return 4294967296 * view.getUint32(offset) + view.getUint32(offset + 4);
                    }(this.view, this.pos);
                    return this.pos += 8, value;
                }, Decoder.prototype.readI64 = function () {
                    var value = getInt64(this.view, this.pos);
                    return this.pos += 8, value;
                }, Decoder.prototype.readF32 = function () {
                    var value = this.view.getFloat32(this.pos);
                    return this.pos += 4, value;
                }, Decoder.prototype.readF64 = function () {
                    var value = this.view.getFloat64(this.pos);
                    return this.pos += 8, value;
                }, Decoder;
            }(), defaultDecodeOptions = {};
        function decode(buffer, options) {
            return void 0 === options && (options = defaultDecodeOptions), new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength).decode(buffer);
        }
        function decodeMulti(buffer, options) {
            return void 0 === options && (options = defaultDecodeOptions), new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength).decodeMulti(buffer);
        }
        var stream_generator = function (thisArg, body) {
                var f, y, t, g, _ = {
                        label: 0,
                        sent: function () {
                            if (1 & t[0])
                                throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, 'function' == typeof Symbol && (g[Symbol.iterator] = function () {
                    return this;
                }), g;
                function verb(n) {
                    return function (v) {
                        return function (op) {
                            if (f)
                                throw new TypeError('Generator is already executing.');
                            for (; _;)
                                try {
                                    if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                        return t;
                                    switch (y = 0, t && (op = [
                                            2 & op[0],
                                            t.value
                                        ]), op[0]) {
                                    case 0:
                                    case 1:
                                        t = op;
                                        break;
                                    case 4:
                                        return _.label++, {
                                            value: op[1],
                                            done: !1
                                        };
                                    case 5:
                                        _.label++, y = op[1], op = [0];
                                        continue;
                                    case 7:
                                        op = _.ops.pop(), _.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                            _ = 0;
                                            continue;
                                        }
                                        if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                            _.label = op[1];
                                            break;
                                        }
                                        if (6 === op[0] && _.label < t[1]) {
                                            _.label = t[1], t = op;
                                            break;
                                        }
                                        if (t && _.label < t[2]) {
                                            _.label = t[2], _.ops.push(op);
                                            break;
                                        }
                                        t[2] && _.ops.pop(), _.trys.pop();
                                        continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [
                                        6,
                                        e
                                    ], y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (5 & op[0])
                                throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([
                            n,
                            v
                        ]);
                    };
                }
            }, stream_await = function (v) {
                return this instanceof stream_await ? (this.v = v, this) : new stream_await(v);
            }, stream_asyncGenerator = function (thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError('Symbol.asyncIterator is not defined.');
                var i, g = generator.apply(thisArg, _arguments || []), q = [];
                return i = {}, verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = function () {
                    return this;
                }, i;
                function verb(n) {
                    g[n] && (i[n] = function (v) {
                        return new Promise(function (a, b) {
                            q.push([
                                n,
                                v,
                                a,
                                b
                            ]) > 1 || resume(n, v);
                        });
                    });
                }
                function resume(n, v) {
                    try {
                        !function (r) {
                            r.value instanceof stream_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                        }(g[n](v));
                    } catch (e) {
                        settle(q[0][3], e);
                    }
                }
                function fulfill(value) {
                    resume('next', value);
                }
                function reject(value) {
                    resume('throw', value);
                }
                function settle(f, v) {
                    f(v), q.shift(), q.length && resume(q[0][0], q[0][1]);
                }
            };
        function ensureAsyncIterable(streamLike) {
            return function (object) {
                return null != object[Symbol.asyncIterator];
            }(streamLike) ? streamLike : function (stream) {
                return stream_asyncGenerator(this, arguments, function () {
                    var reader, _a, done, value;
                    return stream_generator(this, function (_b) {
                        switch (_b.label) {
                        case 0:
                            reader = stream.getReader(), _b.label = 1;
                        case 1:
                            _b.trys.push([
                                1,
                                ,
                                9,
                                10
                            ]), _b.label = 2;
                        case 2:
                            return [
                                4,
                                stream_await(reader.read())
                            ];
                        case 3:
                            return _a = _b.sent(), done = _a.done, value = _a.value, done ? [
                                4,
                                stream_await(void 0)
                            ] : [
                                3,
                                5
                            ];
                        case 4:
                            return [
                                2,
                                _b.sent()
                            ];
                        case 5:
                            return function (value) {
                                if (null == value)
                                    throw new Error('Assertion Failure: value must not be null nor undefined');
                            }(value), [
                                4,
                                stream_await(value)
                            ];
                        case 6:
                            return [
                                4,
                                _b.sent()
                            ];
                        case 7:
                            return _b.sent(), [
                                3,
                                2
                            ];
                        case 8:
                            return [
                                3,
                                10
                            ];
                        case 9:
                            return reader.releaseLock(), [7];
                        case 10:
                            return [2];
                        }
                    });
                });
            }(streamLike);
        }
        function decodeAsync(streamLike, options) {
            return void 0 === options && (options = defaultDecodeOptions), function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : function (value) {
                            return value instanceof P ? value : new P(function (resolve) {
                                resolve(value);
                            });
                        }(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }(this, void 0, void 0, function () {
                var stream;
                return function (thisArg, body) {
                    var f, y, t, g, _ = {
                            label: 0,
                            sent: function () {
                                if (1 & t[0])
                                    throw t[1];
                                return t[1];
                            },
                            trys: [],
                            ops: []
                        };
                    return g = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, 'function' == typeof Symbol && (g[Symbol.iterator] = function () {
                        return this;
                    }), g;
                    function verb(n) {
                        return function (v) {
                            return function (op) {
                                if (f)
                                    throw new TypeError('Generator is already executing.');
                                for (; _;)
                                    try {
                                        if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                            return t;
                                        switch (y = 0, t && (op = [
                                                2 & op[0],
                                                t.value
                                            ]), op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            return _.label++, {
                                                value: op[1],
                                                done: !1
                                            };
                                        case 5:
                                            _.label++, y = op[1], op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop(), _.trys.pop();
                                            continue;
                                        default:
                                            if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (6 === op[0] && _.label < t[1]) {
                                                _.label = t[1], t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2], _.ops.push(op);
                                                break;
                                            }
                                            t[2] && _.ops.pop(), _.trys.pop();
                                            continue;
                                        }
                                        op = body.call(thisArg, _);
                                    } catch (e) {
                                        op = [
                                            6,
                                            e
                                        ], y = 0;
                                    } finally {
                                        f = t = 0;
                                    }
                                if (5 & op[0])
                                    throw op[1];
                                return {
                                    value: op[0] ? op[1] : void 0,
                                    done: !0
                                };
                            }([
                                n,
                                v
                            ]);
                        };
                    }
                }(this, function (_a) {
                    return stream = ensureAsyncIterable(streamLike), [
                        2,
                        new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength).decodeAsync(stream)
                    ];
                });
            });
        }
        function decodeArrayStream(streamLike, options) {
            void 0 === options && (options = defaultDecodeOptions);
            var stream = ensureAsyncIterable(streamLike);
            return new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength).decodeArrayStream(stream);
        }
        function decodeMultiStream(streamLike, options) {
            void 0 === options && (options = defaultDecodeOptions);
            var stream = ensureAsyncIterable(streamLike);
            return new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength).decodeStream(stream);
        }
        function decodeStream(streamLike, options) {
            return void 0 === options && (options = defaultDecodeOptions), decodeMultiStream(streamLike, options);
        }
        __webpack_require__.d(__webpack_exports__, 'encode', function () {
            return encode;
        }), __webpack_require__.d(__webpack_exports__, 'decode', function () {
            return decode;
        }), __webpack_require__.d(__webpack_exports__, 'decodeMulti', function () {
            return decodeMulti;
        }), __webpack_require__.d(__webpack_exports__, 'decodeAsync', function () {
            return decodeAsync;
        }), __webpack_require__.d(__webpack_exports__, 'decodeArrayStream', function () {
            return decodeArrayStream;
        }), __webpack_require__.d(__webpack_exports__, 'decodeMultiStream', function () {
            return decodeMultiStream;
        }), __webpack_require__.d(__webpack_exports__, 'decodeStream', function () {
            return decodeStream;
        }), __webpack_require__.d(__webpack_exports__, 'Decoder', function () {
            return Decoder_Decoder;
        }), __webpack_require__.d(__webpack_exports__, 'DecodeError', function () {
            return DecodeError;
        }), __webpack_require__.d(__webpack_exports__, 'DataViewIndexOutOfBoundsError', function () {
            return DataViewIndexOutOfBoundsError;
        }), __webpack_require__.d(__webpack_exports__, 'Encoder', function () {
            return Encoder_Encoder;
        }), __webpack_require__.d(__webpack_exports__, 'ExtensionCodec', function () {
            return ExtensionCodec_ExtensionCodec;
        }), __webpack_require__.d(__webpack_exports__, 'ExtData', function () {
            return ExtData;
        }), __webpack_require__.d(__webpack_exports__, 'EXT_TIMESTAMP', function () {
            return -1;
        }), __webpack_require__.d(__webpack_exports__, 'encodeDateToTimeSpec', function () {
            return encodeDateToTimeSpec;
        }), __webpack_require__.d(__webpack_exports__, 'encodeTimeSpecToTimestamp', function () {
            return encodeTimeSpecToTimestamp;
        }), __webpack_require__.d(__webpack_exports__, 'decodeTimestampToTimeSpec', function () {
            return decodeTimestampToTimeSpec;
        }), __webpack_require__.d(__webpack_exports__, 'encodeTimestampExtension', function () {
            return encodeTimestampExtension;
        }), __webpack_require__.d(__webpack_exports__, 'decodeTimestampExtension', function () {
            return decodeTimestampExtension;
        });
    }
]);

document.getElementById('gameName').style.color = "#ffffff";
document.getElementById('gameName').style = "text-shadow: #ffffff 1px 1px 40px;";
document.getElementById("gameName").innerHTML = "goodman"
        var mapDisplay = document.getElementById("mapDisplay");
        var diedText = document.getElementById("diedText");
        var skinColorHolder = document.getElementById("skinColorHolder");
        var mapContext = mapDisplay.getContext("2d");
        mapDisplay.width = 300;
        mapDisplay.height = 300;
 window.openLink = openLink;
        window.aJoinReq = aJoinReq;
        window.follmoo = follmoo;
        window.kickFromClan = kickFromClan;
        window.sendJoin = sendJoin;
        window.leaveAlliance = leaveAlliance;
        window.createAlliance = createAlliance;
        window.storeBuy = storeBuy;
        window.storeEquip = storeEquip;
        window.showItemInfo = showItemInfo;
        window.selectSkinColor = selectSkinColor;
        window.changeStoreIndex = changeStoreIndex;
        window.config = config;
 var config,changeStoreIndex,selectSkinColor,showItemInfo,storeEquip,storeBuy,createAlliance,leaveAlliance,sendJoin,kickFromClan,follmoo,aJoinReq,openLink;
var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "#fffdfd";
myElement.style.color = "#000000";
        var tmpPing;
        function MapPing() {
            this.init = function(x, y) {
                this.scale = 0;
                this.x = x;
                this.y = y;
                this.active = true;
            };
            this.update = function(ctxt, delta) {
                if (this.active) {
                    this.scale += 0.05 * delta;
                    if (this.scale >= config.mapPingScale) {
                        this.active = false;
                    } else {
                        ctxt.globalAlpha = (1-Math.max(0, this.scale/config.mapPingScale));
                        ctxt.beginPath();
                        ctxt.arc((this.x / config.mapScale) * mapDisplay.width, (this.y / config.mapScale)
                                 * mapDisplay.width, this.scale, 0, 2 * Math.PI);
                        ctxt.stroke();
                    }
                }
            };
        }
var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#d61818";
getElement.style.color = "#050709";
document.getElementById('gameName').style.color = "#ffffff";
document.getElementById('gameName').style = "text-shadow: #ffffff 1px 1px 40px;";
document.getElementById("gameName").innerHTML = "goodman"
document.getElementById('enterGame').innerHTML = '💀 PLAY 💀';
document.getElementById('loadingText').innerHTML = 'v7 . . . . . downloding goodman . . . . . v7';
document.getElementById('nameInput').placeholder = "goodman";
document.getElementById('chatBox').placeholder = "😃HI😃";
document.getElementById('diedText').innerHTML = '. . . . gg . . . .';
document.getElementById('diedText').style.color = "Red";
$('#leaderboard').append('🔔goodman🔔');

var tick = 0;
let fzStatusMenu = document.createElement("div");
fzStatusMenu.id = "fz's op status menu", fzStatusMenu.style.position = "absolute", fzStatusMenu.style.color = "pink",
fzStatusMenu.textAlign = "left", fzStatusMenu.borderRadius = "4px", fzStatusMenu.style.width = "240px", fzStatusMenu.style.height = "326px",
fzStatusMenu.style.display = "none", fzStatusMenu.innerHTML = "block", fzStatusMenu.style.top = "20px", fzStatusMenu.style.right = "20px";
document.getElementById("gameUI").appendChild(fzStatusMenu);
const pee = $("#pingDisplay");pee.css("top", "20px"), pee.css("font-size", "15px"), pee.css("display", "block"), $("body").append(pee);
let modMenu = document.createElement("div");
let er_ = document.getElementById("storeButton");
let ER = document.getElementById("allianceButton");
let modMenu1 = document.createElement("div");
let modMenu2 = document.createElement("div");
let modMenu35 = document.createElement("div");
document.body.prepend(modMenu2),modMenu2.style.position = "absolute",modMenu2.style.textAlign = "left",
    modMenu2.style.display = "none",modMenu2.style.width = "175px",modMenu2.style.height = "210px", modMenu2.style.top = "2%",modMenu2.style.left = "1%",
    modMenu2.style.backgroundColor = "rgb(0, 0, 0, 0.3)",modMenu2.style.color = "black",modMenu2.style.border ="7px solid black",//, modMenu2.style.overflowY = "scroll",
    modMenu2.style.borderRadius="1px";
modMenu2.innerHTML = `
    <style>
input[type=checkbox] {
  accent-color: rgb(0, 0, 255);
}
.indent {
margin-left: 10px;
font-size: 13px;
text-shadow: 0 0 5px #2EFF;
}
.indent2 {
margin-left: 10px;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
#hr {
display:block;
height:3px;
width:300px;
background:black;
position:absolute;
}
</style>
<br>
</div>
<label class="indent">auto mills
<button id="atm">Enable</button><br>
<label class="indent">auto 1 frame
<button id="at1f">Enable</button><br>
<label class="indent">auto protect
<button id="attn">Enable</button><br>
<label class="indent">soldier
<button id="sld">Enable</button><br>
<p></p>
`;
document.body.prepend(modMenu35),modMenu35.style.position = "absolute",modMenu35.style.textAlign = "left",
    modMenu35.style.display = "none",modMenu35.style.width = "175px",modMenu35.style.height = "210px", modMenu35.style.top = "2%",modMenu35.style.left = "1%",
    modMenu35.style.backgroundColor = "rgb(0, 0, 0, 0.3)",modMenu35.style.color = "black",modMenu35.style.border ="7px solid black",//, modMenu35.style.overflowY = "scroll",
    modMenu35.style.borderRadius="1px";
modMenu35.innerHTML = `
<style>
input[type=checkbox] {
  accent-color: rgb(0, 0, 255);
}
.indent {
margin-left: 10px;
font-size: 13px;
text-shadow: 0 0 5px #2EFF;
}
.indent2 {
margin-left: 10px;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
#hr {
display:block;
height:3px;
width:300px;
background:black;
position:absolute;
}
</style>
<br>
this is my second script.and if you have problems tell me goodbadman#9494 i can help.
<label class="indent">AutoPlacer
<button id="atp">Enable</button><br>
<label class="indent">song
<button id="sng">Enable</button><br>
<label class="indent">x4 spike
<button id="sp4">Enable</button><br>
<label class="indent">biome
<button id="bm">Enable</button><br>
just turn it on when you get all hats
(soldier/booster/flipper/snow hat)
</div>
<p></p>
`;


document.addEventListener("keydown", function (e) {
    8 == e.keyCode && ("block" == modMenu35.style.display ? modMenu35.style.display = "none" : modMenu35.style.display = "block")
});
var unheal = false;
document.body.prepend(modMenu1),modMenu1.style.position = "absolute",modMenu1.style.textAlign = "left",
    modMenu1.style.display = "none",modMenu1.style.width = "300px",modMenu1.style.height = "260px", modMenu1.style.top = "4%",modMenu1.style.left = "1%",
    modMenu1.style.backgroundColor = "rgb(0, 0, 0, 0.3)",modMenu1.style.color = "black",modMenu1.style.border ="100px solid black",modMenu35.style.overflowY = "scroll",
    modMenu1.style.borderRadius="5px", modMenu1.style.borderWidth = "10px";

document.getElementById('atp').style.color = "blue";
document.getElementById('atp').onclick = ()=>{
    if (atp == false) {
        document.getElementById('atp').style.color = "red";
        document.getElementById('atp').innerText = "Disable";
        doNewSend(["ch", ["auto placer : on"]]);
        atp = true;
    }
    else {
        document.getElementById('atp').style.color = "blue";
        document.getElementById('atp').innerText = "Enable";
        doNewSend(["ch", ["auto placer : off"]]);
        atp = false;
    }
}
document.getElementById('bm').style.color = "blue";
document.getElementById('bm').onclick = ()=>{
    if (bm == false) {
        document.getElementById('bm').style.color = "red";
        document.getElementById('bm').innerText = "Disable";
        doNewSend(["ch", ["turned on"]]);
        bm = true;
    }
    else {
        document.getElementById('bm').style.color = "blue";
        document.getElementById('bm').innerText = "Enable";
        doNewSend(["ch", ["turned off"]]);
        bm = false;
    }
}

            setInterval(function() {
                        if(atp == true){
                           if (Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 150){
                       place(spikeType,nearestEnemyAngle);
                        }
                        }
                    else if(atp == false){
                        //no thing :c
                    }}, 400)


var at1f = false;



setInterval(function() {
                        if(atm == true)
                        {
        if (direct.Up == true && direct.Down == false && direct.Left == false && direct.Right == false) {//up
            place(millType, + toRad(90));
            place(millType, + toRad(180));
            place(millType, - toRad(0));
        }
        if (direct.Up == true && direct.Down == false && direct.Left == true && direct.Right == false) {//up left
            place(millType, + toRad(45) + (Math.PI*900000000))
            place(millType, + toRad(305) + (Math.PI*900000000))
            place(millType, + toRad(145) + (Math.PI*900000000))
            place(millType, + toRad(0) + (Math.PI*900000000))
            place(millType, + toRad(90) + (Math.PI*900000000))
        }
        if (direct.Up == true && direct.Down == false && direct.Left == false && direct.Right == true) {//up right
            place(millType, + toRad(135) + (Math.PI*900000000))
            place(millType, + toRad(35) + (Math.PI*900000000))
            place(millType, + toRad(235) + (Math.PI*900000000))
            place(millType, + toRad(90) + (Math.PI*900000000))
            place(millType, + toRad(180) + (Math.PI*900000000))
        }
        if (direct.Up == false && direct.Down == true && direct.Left == false && direct.Right == false) {//down
            place(millType, - toRad(90));
            place(millType, - toRad(180));
            place(millType, + toRad(0));
        }
        if (direct.Up == false && direct.Down == true && direct.Left == true && direct.Right == false) {//down left
            place(millType, + toRad(315) + (Math.PI*900000000))
            place(millType, + toRad(215) + (Math.PI*900000000))
            place(millType, + toRad(55) + (Math.PI*900000000))
            place(millType, + toRad(0) + (Math.PI*900000000))
            place(millType, + toRad(270) + (Math.PI*900000000))
        }
        if (direct.Up == false && direct.Down == true && direct.Left == false && direct.Right == true) {//down right
            place(millType, + toRad(225) + (Math.PI*900000000))
            place(millType, + toRad(125) + (Math.PI*900000000))
            place(millType, + toRad(325) + (Math.PI*900000000))
            place(millType, + toRad(180) + (Math.PI*900000000))
            place(millType, + toRad(270) + (Math.PI*900000000))
        }
        if (direct.Up == false && direct.Down == false && direct.Left == true && direct.Right == false) {//left
            place(millType, + toRad(0));
            place(millType, + toRad(90));
            place(millType, - toRad(90));
        }
        if (direct.Up == false && direct.Down == false && direct.Left == false && direct.Right == true) {//right
            place(millType, + toRad(180));
            place(millType, - toRad(270));
            place(millType, + toRad(270));
        }
                        }
 },450)

var attn = false;

var bm = false;
let TrapCoord = {
    x: null,
    y: null
};

;
function aim(x, y) {
    var cvs = document.getElementById("gameCanvas");
    cvs.dispatchEvent(new MouseEvent("mousemove", {
        clientX: x,
        clientY: y

    }));
}

setInterval (() => {// auto q
    if (autobreak == true && intrap == true && myPlayer.hat == 40 && Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 280) {
        place(foodType, null)
    }
},100)

setInterval (() => {//auti break
    if (autobreak == true && intrap == true) {
        sld = false;
        if (secondary == 10) {
            doNewSend(["5", [secondary, true]]);
        } else {
            doNewSend(["5", [primary, true]]);
        }
        doNewSend(["2", [trap_a]]);
        doNewSend(["13c", [0, 40, 0]]);
        doNewSend(["c", [1, trap_a]]);
    }
}, 150);
var sld = false;
setInterval( () => {
    if(sld == true){
    if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 400 && myPlayer.hat != 6){
        bm = false;
    hat(6)
    }}},150)
setInterval( () => {
     if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) > 400 && bm == false){
         bm = true;
     }})
setInterval( () => {
    if(bm == true){
            if (myPlayer.y < 2400 && myPlayer.hat != 15){// snow
                    hat(15);
                    acc(11);
    } if (myPlayer.y < 7550 && myPlayer.y > 6850 && myPlayer.hat != 31){// flipper
        hat(31);
            acc(11);
    } if (myPlayer.y > 2400 && myPlayer.hat != 12){// booster
      hat(12);
    acc(11);
    }
        if(myPlayer.y > 7550 && myPlayer.hat != 12){// booster
      hat(12);
    acc(11);
    }
}},150)


document.getElementById('bm').style.color = "blue";
document.getElementById('bm').onclick = ()=>{
    if (bm == false) {
        document.getElementById('bm').style.color = "red";
        document.getElementById('bm').innerText = "Disable";
        bm = true;
    }
    else {
        document.getElementById('bm').style.color = "blue";
        document.getElementById('bm').innerText = "Enable";
        bm = false;
    }
}






var em = false;



var atm = false;


var direct = {
    Left: false,
    Right: false,
    Up: false,
    Down: false
}





var abh = false;

var doinsta = false;





var antb = false;



document.getElementById('sp4').style.color = "blue";
document.getElementById('sp4').onclick = ()=>{
    if (sp4 == false) {
        document.getElementById('sp4').style.color = "red";
        document.getElementById('sp4').innerText = "Disable";
        doNewSend(["ch", ["x4 spikes : on"]]);
        sp4 = true;
    }
    else {
        document.getElementById('sp4').style.color = "blue";
        document.getElementById('sp4').innerText = "Enable";
        doNewSend(["ch", ["x4 spikes  : off"]]);
        sp4 = false;
    }
}
var sng = false;
var sp4 = false;
                setInterval(() => {
        setTimeout( () => {if(sng == true) {
        doNewSend(["ch", ["hi"]]);
        }}, 500)
    setTimeout( () => {if(sng == true) {
            doNewSend(["ch", ["go_d-anmo_"]]);
    }}, 1500)
    setTimeout( () => {if(sng == true) {
            doNewSend(["ch", ["_oo-ma_-od"]]);
    } }, 2500)
    setTimeout( () => {if(sng == true) {
            doNewSend(["ch", ["good man mod"]]);
    } }, 3500)
    setTimeout( () => {if(sng == true) {
            doNewSend(["ch", ["is bad !!"]]);
    }}, 4500)
    setTimeout( () => {if(sng == true) {
            doNewSend(["ch", [":("]]);
    } }, 5500)
    setTimeout( () => {if(sng == true) {
            doNewSend(["ch", ["bad ! bad ! bad !"]]);
    }}, 6500)
                },7500)

document.getElementById('sng').style.color = "blue";
document.getElementById('sng').onclick = ()=>{
    if (sng == false) {
        document.getElementById('sng').style.color = "red";
        document.getElementById('sng').innerText = "Disable";
         doNewSend(["ch", ["good man song : on"]]);
        sng = true;
}

    else {
        document.getElementById('sng').style.color = "blue";
        document.getElementById('sng').innerText = "Enable";
        doNewSend(["ch", ["good man song : off"]]);
        sng = false;
    }
}
var atp = false;
var bow = false;
let trapid = null;
let mouseX;
let mouseY;

let width;
let height;
var lastPrimaryUse = (new Date).getTime();
var lastSecondaryUse = (new Date).getTime();
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");
var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var CPS = 0x3;
var autoprimary = false;
var autosecondary = false;
var myPlayeroldx;
var myPlayeroldy;
var boostDir;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
var autobreak = false;
let intrap = false;
let trap_a = null;
var msgpack5 = msgpack; //undefined as always xD
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};



document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
}

function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}


function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if(!data) {return};

    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }

   if (item == "33") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }
        if (autobreak == true){
    if(item == "6"){
        for(let i = 0; i < data[1].length / 8; i++){
            let objectInfo = data[1].slice(8*i, 8*i+8);
            if(objectInfo[6] == 15 && objectInfo[7] != myPlayer.id){
                trap_a = Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x);
                if(Math.sqrt(Math.pow((myPlayer.y-objectInfo[2]), 2) + Math.pow((myPlayer.x-objectInfo[1]), 2)) < 90){
                    //nearestTrap = traps.sort((a, b) => distance_1(a, myPlayer) - distance_1(b, myPlayer))[0];
                    TrapCoord.x = objectInfo[1];
                    TrapCoord.y = objectInfo[2];
                    intrap = true;
                    intrap = true;
                             place(spikeType, + toRad(180));
            place(spikeType, - toRad(270));
            place(spikeType, + toRad(270));
                      place(spikeType, toRad(0));
                    trapid = objectInfo[0];
                        }
            }
            }
            }
            }

    if (item == "12") {
        if(intrap == true) {
            if(trapid == data[1]) {
                intrap = false;
                hat(6)
                let angle = nearestEnemyAngle
                place(boostType, angle)
                for (let i=0;i<4;i++){
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(boostType, angle)
                    sld = true
            }
        }
}
}
     isEnemyNear = ![];
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }

    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
    }
if(item == "h" && data[1] == myPlayer.id) {
    if(data[2] > 89 && data[2] < 100){//90 - 100
                 setTimeout(() => {
                place(foodType, null);
             },150)}
 if(data[2] < 90){//89-1 // soldier
     sld = false;
         if(data[2] > 57 && data[2] < 90){// 58-89
             setTimeout(() => {
                               place(foodType, null);
             },150)
         }
      if(data[2] < 58 && data[2] > 55){//57 golden sword
          hat(22);
          setTimeout(() => {
              place(foodType, null);
              place(foodType, null);},110)
                    setTimeout(() => {
                        hat(6);
                    },200)
          }
     if(data[2] < 55 && data[2] > 53){// daimond + ruby sword 54
          hat(22);
              place(foodType, null);
              place(foodType, null);
         setTimeout(() => {
             hat(6);
                    },200)
     }
                   if(data[2] < 54){//  53-1
                       setTimeout(() => {
              place(foodType, null);
              place(foodType, null);
                       },5)
         }
 sld = true;
 }
}
   update();

}






function invisible (id) {
place(millType, Number.Max_Value);
}

function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}

function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}

function healer() {
    place(foodType, null);
    place(foodType, null);
    place(foodType, null);
    place(foodType, null);
    place(foodType, null);
    place(foodType, null);
    place(foodType, null);
}
function SpawnPadder() {
    place(spawnpadType, null + toRad (90));
    place(spawnpadType, null - toRad (90));
    place(spawnpadType, null + toRad (0));
    place(spawnpadType, null + toRad (180));
    place(spawnpadType, null + toRad (90));
    place(spawnpadType, null - toRad (90));
    place(spawnpadType, null + toRad (0));
    place(spawnpadType, null + toRad (180));
}

 setInterval(function() {
         if(at1f == true){
if(nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) == 239){
                     at1f = false
 sld = false;
        doNewSend(['2', [nearestEnemyAngle]]);
        doNewSend(["13c", [0, 53, 0]]);;//turet gear
      doNewSend(['2', [nearestEnemyAngle]]);
        setTimeout( () => {
                                    doNewSend(["13c", [0, 7, 0]]);// bull
                   doNewSend(["13c", [0, 0, 1]])// no acc
                   doNewSend(["13c", [0, 21, 1]]);
                        doNewSend(["13c", [0, 7, 0]]);// bull
                       doNewSend(["7", [1]]);
doNewSend(['2', [nearestEnemyAngle]]);
doNewSend(["5", [primary, true]]);
                  doNewSend(['2', [nearestEnemyAngle]]);
                  doNewSend(['2', [nearestEnemyAngle]]);
        }, 85);
              setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["c", [0, null]]);
doNewSend(["7", [1, null]]);

        }, 250);
            setTimeout( () => {
                          sld = true;
             },280)
}}
     if(attn == true){
    if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 190 && nearestEnemy[9] != 7){
        attn = false;
      sld = false;
                   doNewSend(["13c", [0, 0, 1]]);
                        doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["5", [primary, true]]);
                    doNewSend(["7", [1]]);
                       doNewSend(["13c", [0, 53, 0]]);;
                        doNewSend(['2', [nearestEnemyAngle]]);
        setTimeout( () => {
                              doNewSend(['2', [nearestEnemyAngle]]);
            if (myPlayer.hat != 53)
{
hat(53);
}
                        doNewSend(["5", [secondary, true]]);
                              doNewSend(['2', [nearestEnemyAngle]]);
        }, 95);
                setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["7", [1, null]]);

        }, 210);
            setTimeout( () => {
                          sld = true;
             },300)}}
 })



function mills(){
    place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + toRad (90));
    place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) - toRad (90));
}
function send(sender) {
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}
function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}
var clanToggle = 0;
function placeQ(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, null]]);
    doNewSend(["c", [0, null]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}
var kill = false;
var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };
}
var insta = false;
var autoinsta
var autoaim = false
const healer1 = repeater(51, () => {placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir)}, 120);
const healer2 = repeater(81, () => {placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir)}, 120);
const boostPlacer = repeater(70, () => {place(boostType)}, 100);
const fourSpawnpader = repeater(187, fourSpawnpad, 0);
const spikePlacer = repeater(66, () => {place(spikeType)}, 100);


const turretPlacer = repeater(72, () => {
    place(turretType, Math['atan2'](mouseY - height / 2, mouseX - width / 2) - toRad(90));
    place(turretType, Math['atan2'](mouseY - height / 2, mouseX - width / 2) + toRad(90))
}, 70);

document.addEventListener('mousedown', (e)=>{
    doinsta == true
if (event.button == 2 && document.activeElement.id.toLowerCase() !== 'chatbox') {//tank hit
    sld = false;
            if(secondary == 10){
                doNewSend(["5", [secondary, true]]);
                 acc(0)
                 doNewSend(["13c", [0, 40, 0]]);
            doNewSend(["7", [1]])
            setTimeout( () => {
                       doNewSend(["c", [0, null]]);
doNewSend(["7", [1, null]]);
            }, 70);
             setTimeout( () => {
sld = true
             },100)
            }}else{var angle = nearestEnemyAngle;
    if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 190){//bull hit

        sld = false;
                   doNewSend(["13c", [0, 0, 1]]);//no acc
                  doNewSend(["13c", [0, 7, 0]]);//bull
           doNewSend(["5", [primary, true]]);// 1
      doNewSend(['2', [angle]]);
           doNewSend(["7", [1]]);// e
            setTimeout( () => {
                doNewSend(["7", [1, null]]);// e
            }, 40);

             setTimeout( () => {
sld = true;
             },100)
}}})
document.addEventListener('mousedown', (e)=>{
    if (event.button == 2 && document.activeElement.id.toLowerCase() !== 'chatbox') {//tank hit
        sld = false;
                     if(secondary !==10 && primary == 7) {
                    doNewSend(["5", [primary, true]]);
                                      acc(0)
                 doNewSend(["13c", [0, 40, 0]]);
            doNewSend(["7", [1]])
            setTimeout( () => {
                doNewSend(["7", [1, null]]);
            }, 40);

             setTimeout( () => {
sld = true;
             },100)
                     }}
else{var angle = nearestEnemyAngle;
    if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 190){//bull hit
        sld = false;
                   doNewSend(["13c", [0, 0, 1]]);//no acc
                  doNewSend(["13c", [0, 7, 0]]);//bull
           doNewSend(["5", [primary, true]]);// 1
      doNewSend(['2', [angle]]);
           doNewSend(["7", [1]]);// e
            setTimeout( () => {
                doNewSend(["7", [1, null]]);// e
            }, 40);

             setTimeout( () => {
sld = true;
             },100)
}}})
document.addEventListener('mousedown', (e)=>{
    if (event.button == 2 && document.activeElement.id.toLowerCase() !== 'chatbox') {//tank hit
        sld = false
if(secondary !==10 && primary !== 7) {
                    doNewSend(["5", [primary, true]]);
                                      acc(0);
                 doNewSend(["13c", [0, 40, 0]]);
            doNewSend(["7", [1]])
            setTimeout( () => {
                       doNewSend(["c", [0, null]]);
doNewSend(["7", [1, null]]);
            }, 70);

             setTimeout( () => {
sld = true;
             },110)

}}
else{var angle = nearestEnemyAngle;
    if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 190){//bull hit
        sld = false;
                   doNewSend(["13c", [0, 0, 1]]);//no acc
                  doNewSend(["13c", [0, 7, 0]]);//bull
           doNewSend(["5", [primary, true]]);// 1
      doNewSend(['2', [angle]]);
           doNewSend(["7", [1]]);// e
            setTimeout( () => {
                doNewSend(["7", [1, null]]);// e
            }, 40);

             setTimeout( () => {
sld = true
             },100)
}}})
setInterval(function() {
    if (autoaim == true) {
        doNewSend(['2', [nearestEnemyAngle]]);
    }
}, 10);
setInterval(function() {
    if (autosecondary == true) {
       doNewSend(["5", [secondary, true]]);
    }
}, 10);
setInterval(function() {
    if (autoprimary == true) {
        doNewSend(["5", [primary, true]]);
    }
}, 10);
setInterval(function() {
    if (clanToggle == 1) {
        doNewSend(['9', [null]]);
        doNewSend(['8', [animate(false, 5)]]);
    }
}, 200);
function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = 'good man is good';
    } else {
        characters = 'goodman'
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
        if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
            result += "-";
            count++
        } else {
            result += characters.charAt(i);
        }
    }
    return result;
}
document.addEventListener('keydown', (e)=>{
        if (e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }
    if (e.keyCode == 65 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Left = true;
    }
    if (e.keyCode == 68 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Right = true;
    }
    if (e.keyCode == 87 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Up = true;
    }
    if (e.keyCode == 83 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Down = true;
    }
               if(e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') { //Auto mills
                    if(atm == true){
        doNewSend(["ch", ["auto mills : off"]]);
                        atm = false;}
                   else if(atm == false){
               doNewSend(["ch", ["auto mills : on"]]);
                   atm = true;
                   }
               }
           if(e.keyCode == 119 && document.activeElement.id.toLowerCase() !== 'chatbox') { //AutoBreak
        if(autobreak==true){
            autobreak=false
       sld = true
            doNewSend(["ch", ["AutoBreaker: OFF"]]);
        }else{
            autobreak=true
            sld = true
            doNewSend(["ch", ["AutoBreaker: ON"]]);
        }
    }



    spikePlacer.start(e.keyCode);
    fourSpawnpader.start(e.keyCode);
    healer1.start(e.keyCode);
    healer2.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    if (e.keyCode == 191 && document.activeElement.id.toLowerCase() !== 'chatbox') {// / to active auto one frame
              document.getElementById('at1f').style.color = "blue";
    if (at1f == false) {
        at1f = true;
                         doNewSend(["ch", ["auto tick : on"]]);
    }
    else {
        at1f = false;
                 doNewSend(["ch", ["auto tick: off"]]);
    }
    }
     if(e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {//z for tank
         hat(40)
         acc(11)
     }
     if(e.keyCode == 48 && document.activeElement.id.toLowerCase() !== 'chatbox') {//  @
 bm = true;
         sld = true;
     }
    if(e.keyCode == 86 && document.activeElement.id.toLowerCase() !== 'chatbox') {
         if (sp4 == true) {
         place(spikeType, + toRad(180));
            place(spikeType, - toRad(270));
            place(spikeType, + toRad(270));
                      place(spikeType, toRad(0));
    }
    else if (sp4 == false) {
        place(spikeType)
    }}
    if(e.keyCode == 219 && document.activeElement.id.toLowerCase() !== 'chatbox') {// ) for turet
                doNewSend(["13c", [0, 0, 1]]);//no acc
        doNewSend(["13c", [0, 53, 0]]);
    }
    if(e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') {// j for empgear
         doNewSend(["13c", [0, 0, 1]]);//no acc
        doNewSend(["13c", [0, 22, 0]]);//emp
    }
    if(e.keyCode == 78 && document.activeElement.id.toLowerCase() !== 'chatbox') {// n for place wind
place(millType);
   }
    if(e.keyCode == 187 && document.activeElement.id.toLowerCase() !=='chatbox') {// = for bull
        sld = false
         doNewSend(["13c", [0, 0, 1]]);// no acc
          doNewSend(["13c", [0, 7, 0]]);//bull
    }

    if(e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {// c for soldier
              doNewSend(["13c", [0, 0, 1]]);//no acc
             doNewSend(["13c", [0, 6, 0]]);//soldier
    }

 if(e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {// h for tlp ^^
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
       place(foodType, myPlayer.dir+ toRad (0));
 }
    if(e.keyCode == 190 && document.activeElement.id.toLowerCase() !== 'chatbox') {// . for poisin hit
          sld = false;
                doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 21, 0]]);
           doNewSend(["ch", [":o poisin hit ?"]]);
            doNewSend(["13c", [0, 0, 1]]);
          doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["c", [1]]);
          doNewSend(['2', [nearestEnemyAngle]]);
            setTimeout(() => {
        doNewSend(["c", [1]]);
                hat(6)
                sld = true
            }, 100);
    }
    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {//sync !
        sld = false;
               doNewSend(["13c", [0, 0, 1]])// no acc
                            doNewSend(["5", [secondary, true]]);
          doNewSend(['2', [nearestEnemyAngle]]);
        doNewSend(["c", [1]]);
        doNewSend(["ch", ["sync !"]]);
        doNewSend(["13c", [0, 53, 0]]);//turet
                 setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
                       doNewSend(["c", [0, null]]);

        }, 300);
            setTimeout( () => {
                          sld = true;
             },1000)
    }
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {// g for boost spikes
 boostDir = nearestEnemyAngle;
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
        setTimeout(() => {
                place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
        }, 500)
    }
      if(e.keyCode == 80 && document.activeElement.id.toLowerCase() !=='chatbox') {// p for lag insta
          sld = false;
                doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
          doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["c", [1]]);
          doNewSend(['2', [nearestEnemyAngle]]);
            setTimeout(() => {
                doNewSend(['2', [nearestEnemyAngle]]);
                doNewSend(["13c", [0, 53, 0]]);
                       doNewSend(["13c", [0, 11, 1]])// no acc
                      doNewSend(['2', [nearestEnemyAngle]]);
                doNewSend(["5", [secondary, true]]);
                 var sck = "";
                for (let i = 0; i < 500; i++) {
                    let caas = new Uint8Array(700);
                    for (let i = 0; i < caas.length; i++) {
                        caas[i] = Math.floor(Math.random() * 5);
                        sck += caas[i]
                    }
                }
                ws.send(caas);
            }, 100);
                    setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["c", [1, null]]);

        }, 300);
            setTimeout( () => {
                          sld = true;
             },1000)
      }


    if(e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {// o for revsre
sld = false;
    doNewSend(["5", [secondary, true]]);
        doNewSend(['2', [nearestEnemyAngle]]);
       doNewSend(["13c", [0, 11, 1]])// no acc
        doNewSend(["13c", [0, 53, 0]]);;//turet gear
      doNewSend(['2', [nearestEnemyAngle]]);
           doNewSend(["7", [1]]);
        setTimeout( () => {
       doNewSend(["13c", [0, 0, 1]])// no acc
                   doNewSend(["13c", [0, 21, 1]])// no acc
doNewSend(['2', [nearestEnemyAngle]]);
doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);// bull
            doNewSend(['2', [nearestEnemyAngle]]);
        }, 70);
              setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["c", [0, null]]);
doNewSend(["7", [1, null]]);

        }, 300);
            setTimeout( () => {
                          sld = true;
             },1000)
    }
              if(e.keyCode == 222 && document.activeElement.id.toLowerCase() !== 'chatbox') {// ² for normal insta
      sld = false;
                   doNewSend(["13c", [0, 0, 1]]);
                        doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["5", [primary, true]]);
                       doNewSend(["13c", [0, 53, 0]]);;
                        doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["7", [1]]);
if (nearestEnemy[9] == 6 && myPlayer.hat != 7)
{
hat(7);

}
        setTimeout( () => {
                              doNewSend(['2', [nearestEnemyAngle]]);
            if (myPlayer.hat != 53)
{
hat(53);
}
                        doNewSend(["5", [secondary, true]]);
                              doNewSend(['2', [nearestEnemyAngle]]);
        }, 95);
                setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["7", [1, null]]);

        }, 210);
            setTimeout( () => {
                          sld = true;
             },300)}
    if (e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox'){// space spike insta
        sld = false;
                   doNewSend(["13c", [0, 0, 1]]);//no acc
           doNewSend(["5", [primary, true]]);// 1
      doNewSend(['2', [nearestEnemyAngle]]);
        place(spikeType, myPlayer.dir + toRad(45));
        place(spikeType, myPlayer.dir - toRad(45));
      doNewSend(['2', [nearestEnemyAngle]]);
           doNewSend(["13c", [0, 7, 0]]);//bull
           doNewSend(["7", [1]]);// e
         setTimeout( () => {
           doNewSend(["13c", [0, 53, 0]]);//turet
         }, 90)
            doNewSend(["33", [null]]);
         setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["c", [0, null]]);
doNewSend(["7", [1, null]]);

        }, 300);
            setTimeout( () => {
                          sld = true;
             },1000)
    }


    if(e.keyCode == 75 && document.activeElement.id.toLowerCase() !== 'chatbox') {// k for one tick
        sld = false;
                place(boostType, nearestEnemyAngle);// put boost aim nearest enemy
        doNewSend(["33", [nearestEnemyAngle]]);//move to nearest enemy
   doNewSend(["5", [secondary, true]]);
                doNewSend(["13c", [0, 11, 1]]);
        doNewSend(['2', [nearestEnemyAngle]]);
        doNewSend(["c", [1]]);// e
         doNewSend(["ch", ["boost revsre .ikr it is bad"]]);
        doNewSend(['2', [nearestEnemyAngle]]);
            doNewSend(["13c", [0, 0, 1]]);//no acc
        doNewSend(["13c", [0, 53, 0]]);//turet gear
                    setTimeout( () => {
                        doNewSend(["13c", [0, 21, 1]]);
         doNewSend(['2', [nearestEnemyAngle]]);
           doNewSend(["5", [primary, true]]);
           doNewSend(["13c", [0, 7, 0]]);// bull
        }, 130);
                 setTimeout(() => {
                         doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
                       doNewSend(["c", [1, null]]);

        }, 300);
            setTimeout( () => {
                          sld = true;
             },1000)

    }
              if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {// t for auto protect
              document.getElementById('attn').style.color = "blue";
    if (attn == false) {
        document.getElementById('attn').style.color = "red";
        document.getElementById('attn').innerText = "Disable";
        attn = true;
                         doNewSend(["ch", ["auto protect : on"]]);
    }
    else {
        document.getElementById('attn').style.color = "blue";
        document.getElementById('attn').innerText = "Enable";
        attn = false;
                 doNewSend(["ch", ["auto protect : off"]]);
    }
              }
    if(e.keyCode == 27 && document.activeElement.id.toLowerCase() !== 'chatbox') {// esc for !buy!
         doNewSend(["ch", ["!buy!"]]);
        doNewSend(["13c", [1, 7, 0]]);
             doNewSend(["13c", [1, 53, 0]]);
              doNewSend(["13c", [1, 6, 0]]);
           doNewSend(["13c", [1, 40, 0]]);
      doNewSend(["13c", [1, 11, 0]]);
                   doNewSend(["13c", [1, 12, 0]]);
        doNewSend(["13c", [1, 13, 0]]);
           doNewSend(["13c", [1, 22, 0]]);
              doNewSend(["13c", [1, 31, 0]]);
               doNewSend(["13c", [1, 15, 0]]);
                 doNewSend(["13c", [1, 21, 0]]);
             doNewSend(["13c", [1, 21, 1]]);
      doNewSend(["13c", [1, 11, 1]]);
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    fourSpawnpader.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    healer1.stop(e.keyCode);
    healer2.stop(e.keyCode);
        if (e.keyCode == 65 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Left = false;
    }
    if (e.keyCode == 68 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Right = false;
    }
    if (e.keyCode == 87 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Up = false;
    }
    if (e.keyCode == 83 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        direct.Down = false;
    }
})


function isElementVisible(e) {
    return (e.offsetParent !== null);
}

function fourSpawnpad() {
    invisplace(spawnpadType, myPlayer.dir + toRad(135));
    invisplace(spawnpadType, myPlayer.dir + toRad(150));
    invisplace(spawnpadType, myPlayer.dir + toRad(165));
    invisplace(spawnpadType, myPlayer.dir + toRad(180));
    invisplace(spawnpadType, myPlayer.dir + toRad(270))
    invisplace(spawnpadType, myPlayer.dir + toRad(360));
}

function toRad(angle) {
    return angle * 0.01745329251;
}
function fastgear(){
    if (myPlayer.y < 2400){
        hat(15)
    } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
        hat(31)
    } else {
        hat(12);
    }
    acc(11);
}
function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}
function getDistance(x, y) { return Math.sqrt(x * x + y / y); }
function getDirection(x, y) {return Math.atan2(x, y); }


(function() {
    var k = function(action){
        var eventObj = document.createEvent("Events");


        eventObj.initEvent("keydown", true, true);
        eventObj.keyCode = 75;
        eventObj.which = 75;


        document.body.dispatchEvent(eventObj);
    };


    var killSpaceBar = function(evt) {


        var target = evt.target || {},
            isInput = ("INPUT" == target.tagName || "TEXTAREA" == target.tagName || "SELECT" == target.tagName || "EMBED" == target.tagName);



        if(isInput || !target.tagName) return;



        if(target && target.getAttribute && target.getAttribute('role') === 'textbox') return;



        if (evt.keyCode === 5) {
            evt.preventDefault();
            k();
        }
    };
})

function update() {
    for (let i=0;i<9;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            primary = i;
        }
    }

    for (let i=9;i<16;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            secondary = i;
        }
    }

    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }

    for (let i=19;i<22;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            wallType = i - 16;
        }
    }

    for (let i=22;i<26;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spikeType = i - 16;
        }
    }

    for (let i=26;i<29;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            millType = i - 16;
        }
    }

    for (let i=29;i<31;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            mineType = i - 16;
        }
    }

    for (let i=31;i<33;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            boostType = i - 16;
        }
    }

    for (let i=33;i<36;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            turretType = i - 16;
        }
    }

    for (let i=36;i<37;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spawnpadType = i - 16;
        }
    }

    for (let i=37;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            turretType = i - 16;
        }
    }
}
