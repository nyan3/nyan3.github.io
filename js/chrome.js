   var aa = document.getElementById("input").value;

   function get() {

       //通过document.getElementById(“id名”).value来获取value值。
       pass();
   }

   function pass() {
       var dd = aa.indexOf("http:");
       var ddd = aa.indexOf("https:");
       var dddd = aa.indexOf("www.");
       if (dd == 0 || ddd == 0 || dddd == 0) {
           //  表示strCode是以ssss开头；
           search()
       } else {
           //百度搜索（暂未完成）
       }
   }

   function search() {

       document.getElementById("chrome").src = aa
   }