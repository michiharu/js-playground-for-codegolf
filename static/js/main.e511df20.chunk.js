(this["webpackJsonpjs-playground-for-codegolf"]=this["webpackJsonpjs-playground-for-codegolf"]||[]).push([[0],{49:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n.n(o),i=n(106),c=n(105),u=n(40),p=n(100),s=n(101),f=n(102),m=n(103),d=n(108),g=n(104),h=n(99),v=n(107),y=n(97);var E=n(95),b=n(109),x=n(4),j=Object(E.a)((function(e){return Object(b.a)({inputRoot:{},correct:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:y.a.A400}}}})})),w=Object(x.a)({root:{"& .MuiOutlinedInput-multiline":{paddingBottom:48.5}}})(v.a);function C(){var e=j(),t=Object(h.a)(),n=Object(a.useState)('function initialCode() {\n  var res = "";\n  var w = 60;\n  var h = 30;\n  for (var y = 0; y < h; y++) {\n    for (var x = 0; x < w; x++) {\n      res += "-";\n    }\n    res += "\\n";\n  }\n  return res;\n}'.split("\n").filter((function(e,t,n){return 0!==t&&t!==n.length-1})).map((function(e){return e.slice(2)})).join("\n")),o=Object(u.a)(n,2),l=o[0],i=o[1],c=function(e){try{return Function(e)(),!0}catch(t){return!1}}(l),v=c?function(e){return Function(e)()}(l):"",y=v===function(){for(var e="",t=0;t<30;t++){for(var n=0;n<60;n++){e+=Math.sqrt(Math.pow(30-n,2)+Math.pow(2*(15-t),2))<24?"*":"-"}e+="\n"}return e}(),E=function(e){e=e.replace(/\r/g,"").replace(/^.+?{|}\n*?$/g,"").replace(/^\n+|\n+$/g,"");for(var t=0,n=0;n<e.length;n++)t+=e.charCodeAt(n)>255?2:1;return t}(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{appear:!1,direction:"down",in:!t},r.a.createElement(s.a,{position:"relative"},r.a.createElement(f.a,null,r.a.createElement(m.a,{variant:"h6",color:"inherit",noWrap:!0},"JS Playground for CodeGolf")))),r.a.createElement("main",null,r.a.createElement(d.a,{p:2},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12,lg:6},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(w,{value:l,onChange:function(e){i(e.target.value)},rows:32,multiline:!0,fullWidth:!0,error:!c}),r.a.createElement(d.a,{position:"absolute",width:"100%",height:30,bottom:0,left:0,px:1,pt:.5,bgcolor:"lightGray",borderRadius:"0 0 4px 4px",display:"flex",justifyContent:"flex-end"},r.a.createElement(m.a,{align:"right"},"line: ",E)))),r.a.createElement(g.a,{item:!0,xs:12,lg:6},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(w,{className:y?e.correct:void 0,value:v,rows:32,multiline:!0,fullWidth:!0}),r.a.createElement(d.a,{position:"absolute",width:"100%",height:30,bottom:0,left:0,px:1,pt:.5,bgcolor:"lightGray",borderRadius:"0 0 4px 4px",display:"flex",justifyContent:"flex-end"},y&&r.a.createElement(m.a,{align:"right"},"Correct"))))))))}var O=n(38),M=n.n(O),F=n(39),k=Object(F.a)({typography:{fontFamily:['"Courier New"',"Monospace"].join(",")},palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:M.a.A400},background:{default:"#fff"}},props:{MuiTextField:{variant:"outlined"}}});l.a.render(r.a.createElement(c.a,{theme:k},r.a.createElement(i.a,null),r.a.createElement(C,null)),document.querySelector("#root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e511df20.chunk.js.map