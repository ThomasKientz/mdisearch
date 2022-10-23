var t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},e=/&(?:amp|lt|gt|quot|#39);/g,r=RegExp(e.source);function u(u){return u&&r.test(u)?u.replace(e,function(e){return t[e]}):u}export{u as unescape};
//# sourceMappingURL=unescape.js.map
