var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

Joomla=window.Joomla||{};Joomla.editors={};Joomla.editors.instances={};Joomla.submitform=function(a,b){if(typeof(b)==="undefined"){b=document.getElementById("adminForm")}if(typeof(a)!=="undefined"&&a!==""){b.task.value=a}if(typeof b.onsubmit=="function"){b.onsubmit()}if(typeof b.fireEvent=="function"){b.fireEvent("submit")}b.submit()};Joomla.submitbutton=function(a){Joomla.submitform(a)};Joomla.JText={strings:{},_:function(a,b){return typeof this.strings[a.toUpperCase()]!=="undefined"?this.strings[a.toUpperCase()]:b},load:function(a){for(var b in a){this.strings[b.toUpperCase()]=a[b]}return this}};Joomla.replaceTokens=function(c){var b=document.getElementsByTagName("input"),a;for(a=0;a<b.length;a++){if((b[a].type=="hidden")&&(b[a].name.length==32)&&b[a].value=="1"){b[a].name=c}}};Joomla.isEmail=function(b){var a=new RegExp("^[\\w-_.]*[\\w-_.]@[\\w].+[\\w]+[\\w]$");return a.test(b)};Joomla.checkAll=function(b,f){if(!f){f="cb"}if(b.form){var g=0,a,d;for(a=0,n=b.form.elements.length;a<n;a++){d=b.form.elements[a];if(d.type==b.type){if((f&&d.id.indexOf(f)==0)||!f){d.checked=b.checked;g+=(d.checked==true?1:0)}}}if(b.form.boxchecked){b.form.boxchecked.value=g}return true}return false};Joomla.renderMessages=function(d){var e=jQuery.noConflict(),g,b,a,f,c;Joomla.removeMessages();g=e("#system-message-container");e.each(d,function(h,j){b=e("<div/>",{id:"system-message","class":"alert alert-"+h});g.append(b);a=e("<h4/>",{"class":"alert-heading",text:Joomla.JText._(h)});b.append(a);f=e("<div/>");e.each(j,function(k,l){c=e("<p/>",{html:l});f.append(c)});b.append(f)})};Joomla.removeMessages=function(){jQuery("#system-message-container").empty()};Joomla.isChecked=function(a,d){if(typeof(d)==="undefined"){d=document.getElementById("adminForm")}if(a==true){d.boxchecked.value++}else{d.boxchecked.value--}var g=true,b,f;for(b=0,n=d.elements.length;b<n;b++){f=d.elements[b];if(f.type=="checkbox"){if(f.name!="checkall-toggle"&&f.checked==false){g=false;break}}}if(d.elements["checkall-toggle"]){d.elements["checkall-toggle"].checked=g}};Joomla.popupWindow=function(e,k,j,c,f){var g=(screen.width-j)/2,b,a,d;b=(screen.height-c)/2;a="height="+c+",width="+j+",top="+b+",left="+g+",scrollbars="+f+",resizable";d=window.open(e,k,a);d.window.focus()};Joomla.tableOrdering=function(a,c,b,d){if(typeof(d)==="undefined"){d=document.getElementById("adminForm")}d.filter_order.value=a;d.filter_order_Dir.value=c;Joomla.submitform(b,d)};function writeDynaList(e,g,d,h,a){var c="\n  <select "+e+">",b,f;b=0;for(x in g){if(g[x][0]==d){f="";if((h==d&&a==g[x][1])||(b==0&&h!=d)){f='selected="selected"'}c+='\n     <option value="'+g[x][1]+'" '+f+">"+g[x][2]+"</option>"}b++}c+="\n </select>";document.writeln(c)}function changeDynaList(c,e,b,f,a){var d=document.adminForm[c];for(i in d.options.length){d.options[i]=null}i=0;for(x in e){if(e[x][0]==b){opt=new Option();opt.value=e[x][1];opt.text=e[x][2];if((f==b&&a==opt.value)||i==0){opt.selected=true}d.options[i++]=opt}}d.length=i}function radioGetCheckedValue(b){if(!b){return""}var c=b.length,a;if(c==undefined){if(b.checked){return b.value}else{return""}}for(a=0;a<c;a++){if(b[a].checked){return b[a].value}}return""}function getSelectedValue(b,a){var c=document[b],d=c[a];i=d.selectedIndex;if(i!=null&&i>-1){return d.options[i].value}else{return null}}function listItemTask(g,b){var d=document.adminForm,c,e,a=d[g];if(a){for(c=0;true;c++){e=d["cb"+c];if(!e){break}e.checked=false}a.checked=true;d.boxchecked.value=1;submitbutton(b)}return false}function submitbutton(a){submitform(a)}function submitform(a){if(a){document.adminForm.task.value=a}if(typeof document.adminForm.onsubmit=="function"){document.adminForm.onsubmit()}if(typeof document.adminForm.fireEvent=="function"){document.adminForm.fireEvent("submit")}document.adminForm.submit()}function saveorder(b,a){checkAll_button(b,a)}function checkAll_button(d,a){if(!a){a="saveorder"}var b,c;for(b=0;b<=d;b++){c=document.adminForm["cb"+b];if(c){if(c.checked==false){c.checked=true}}else{alert("You cannot change the order of items, as an item in the list is `Checked Out`");return}}submitform(a)};

}
/*
     FILE ARCHIVED ON 00:03:20 Dec 14, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:21:55 Mar 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.676
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.017
  esindex: 0.013
  cdx.remote: 25.754
  LoadShardBlock: 482.75 (3)
  PetaboxLoader3.datanode: 141.341 (4)
  PetaboxLoader3.resolve: 415.775 (2)
  load_resource: 82.661
*/