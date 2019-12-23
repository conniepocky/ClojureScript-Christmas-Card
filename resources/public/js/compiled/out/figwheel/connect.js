// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31307__delegate = function (x__31291__auto__){
if(cljs.core.truth_(susan_card.core.on_js_reload)){
return cljs.core.apply.call(null,susan_card.core.on_js_reload,x__31291__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("susan-card.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__31307 = function (var_args){
var x__31291__auto__ = null;
if (arguments.length > 0) {
var G__31308__i = 0, G__31308__a = new Array(arguments.length -  0);
while (G__31308__i < G__31308__a.length) {G__31308__a[G__31308__i] = arguments[G__31308__i + 0]; ++G__31308__i;}
  x__31291__auto__ = new cljs.core.IndexedSeq(G__31308__a,0,null);
} 
return G__31307__delegate.call(this,x__31291__auto__);};
G__31307.cljs$lang$maxFixedArity = 0;
G__31307.cljs$lang$applyTo = (function (arglist__31309){
var x__31291__auto__ = cljs.core.seq(arglist__31309);
return G__31307__delegate(x__31291__auto__);
});
G__31307.cljs$core$IFn$_invoke$arity$variadic = G__31307__delegate;
return G__31307;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1577120284097
