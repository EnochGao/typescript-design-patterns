(()=>{var n=function(){function n(n){this.name=n}return n.getInstance=function(){return void 0===n.instance&&(n.instance=new n("懒汉式")),n.instance},n}(),t=function(){function n(n){this.name=n}return n.getInstance=function(){return n.instance},n.instance=new n("饿汉式"),n}();console.log("懒汉式：：",n.getInstance()==n.getInstance()),console.log("饿汉式：：",t.getInstance()==t.getInstance())})();