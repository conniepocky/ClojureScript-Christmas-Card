// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30794){if((e30794 instanceof Error)){
var e = e30794;
return "Error: Unable to stringify";
} else {
throw e30794;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30797 = arguments.length;
switch (G__30797) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30795_SHARP_){
if(typeof p1__30795_SHARP_ === 'string'){
return p1__30795_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30795_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30800 = arguments.length;
var i__4500__auto___30801 = (0);
while(true){
if((i__4500__auto___30801 < len__4499__auto___30800)){
args__4502__auto__.push((arguments[i__4500__auto___30801]));

var G__30802 = (i__4500__auto___30801 + (1));
i__4500__auto___30801 = G__30802;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30799){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30799));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30804 = arguments.length;
var i__4500__auto___30805 = (0);
while(true){
if((i__4500__auto___30805 < len__4499__auto___30804)){
args__4502__auto__.push((arguments[i__4500__auto___30805]));

var G__30806 = (i__4500__auto___30805 + (1));
i__4500__auto___30805 = G__30806;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30803){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30803));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30807){
var map__30808 = p__30807;
var map__30808__$1 = ((((!((map__30808 == null)))?(((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30808):map__30808);
var message = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26934__auto___30887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___30887,ch){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___30887,ch){
return (function (state_30859){
var state_val_30860 = (state_30859[(1)]);
if((state_val_30860 === (7))){
var inst_30855 = (state_30859[(2)]);
var state_30859__$1 = state_30859;
var statearr_30861_30888 = state_30859__$1;
(statearr_30861_30888[(2)] = inst_30855);

(statearr_30861_30888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (1))){
var state_30859__$1 = state_30859;
var statearr_30862_30889 = state_30859__$1;
(statearr_30862_30889[(2)] = null);

(statearr_30862_30889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (4))){
var inst_30812 = (state_30859[(7)]);
var inst_30812__$1 = (state_30859[(2)]);
var state_30859__$1 = (function (){var statearr_30863 = state_30859;
(statearr_30863[(7)] = inst_30812__$1);

return statearr_30863;
})();
if(cljs.core.truth_(inst_30812__$1)){
var statearr_30864_30890 = state_30859__$1;
(statearr_30864_30890[(1)] = (5));

} else {
var statearr_30865_30891 = state_30859__$1;
(statearr_30865_30891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (15))){
var inst_30819 = (state_30859[(8)]);
var inst_30834 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30819);
var inst_30835 = cljs.core.first.call(null,inst_30834);
var inst_30836 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30835);
var inst_30837 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30836)].join('');
var inst_30838 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30837);
var state_30859__$1 = state_30859;
var statearr_30866_30892 = state_30859__$1;
(statearr_30866_30892[(2)] = inst_30838);

(statearr_30866_30892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (13))){
var inst_30843 = (state_30859[(2)]);
var state_30859__$1 = state_30859;
var statearr_30867_30893 = state_30859__$1;
(statearr_30867_30893[(2)] = inst_30843);

(statearr_30867_30893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (6))){
var state_30859__$1 = state_30859;
var statearr_30868_30894 = state_30859__$1;
(statearr_30868_30894[(2)] = null);

(statearr_30868_30894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (17))){
var inst_30841 = (state_30859[(2)]);
var state_30859__$1 = state_30859;
var statearr_30869_30895 = state_30859__$1;
(statearr_30869_30895[(2)] = inst_30841);

(statearr_30869_30895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (3))){
var inst_30857 = (state_30859[(2)]);
var state_30859__$1 = state_30859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30859__$1,inst_30857);
} else {
if((state_val_30860 === (12))){
var inst_30818 = (state_30859[(9)]);
var inst_30832 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30818,opts);
var state_30859__$1 = state_30859;
if(cljs.core.truth_(inst_30832)){
var statearr_30870_30896 = state_30859__$1;
(statearr_30870_30896[(1)] = (15));

} else {
var statearr_30871_30897 = state_30859__$1;
(statearr_30871_30897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (2))){
var state_30859__$1 = state_30859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30859__$1,(4),ch);
} else {
if((state_val_30860 === (11))){
var inst_30819 = (state_30859[(8)]);
var inst_30824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30825 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30819);
var inst_30826 = cljs.core.async.timeout.call(null,(1000));
var inst_30827 = [inst_30825,inst_30826];
var inst_30828 = (new cljs.core.PersistentVector(null,2,(5),inst_30824,inst_30827,null));
var state_30859__$1 = state_30859;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30859__$1,(14),inst_30828);
} else {
if((state_val_30860 === (9))){
var inst_30819 = (state_30859[(8)]);
var inst_30845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30846 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30819);
var inst_30847 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30846);
var inst_30848 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30847)].join('');
var inst_30849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30848);
var state_30859__$1 = (function (){var statearr_30872 = state_30859;
(statearr_30872[(10)] = inst_30845);

return statearr_30872;
})();
var statearr_30873_30898 = state_30859__$1;
(statearr_30873_30898[(2)] = inst_30849);

(statearr_30873_30898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (5))){
var inst_30812 = (state_30859[(7)]);
var inst_30814 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30815 = (new cljs.core.PersistentArrayMap(null,2,inst_30814,null));
var inst_30816 = (new cljs.core.PersistentHashSet(null,inst_30815,null));
var inst_30817 = figwheel.client.focus_msgs.call(null,inst_30816,inst_30812);
var inst_30818 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30817);
var inst_30819 = cljs.core.first.call(null,inst_30817);
var inst_30820 = figwheel.client.autoload_QMARK_.call(null);
var state_30859__$1 = (function (){var statearr_30874 = state_30859;
(statearr_30874[(8)] = inst_30819);

(statearr_30874[(9)] = inst_30818);

return statearr_30874;
})();
if(cljs.core.truth_(inst_30820)){
var statearr_30875_30899 = state_30859__$1;
(statearr_30875_30899[(1)] = (8));

} else {
var statearr_30876_30900 = state_30859__$1;
(statearr_30876_30900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (14))){
var inst_30830 = (state_30859[(2)]);
var state_30859__$1 = state_30859;
var statearr_30877_30901 = state_30859__$1;
(statearr_30877_30901[(2)] = inst_30830);

(statearr_30877_30901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (16))){
var state_30859__$1 = state_30859;
var statearr_30878_30902 = state_30859__$1;
(statearr_30878_30902[(2)] = null);

(statearr_30878_30902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (10))){
var inst_30851 = (state_30859[(2)]);
var state_30859__$1 = (function (){var statearr_30879 = state_30859;
(statearr_30879[(11)] = inst_30851);

return statearr_30879;
})();
var statearr_30880_30903 = state_30859__$1;
(statearr_30880_30903[(2)] = null);

(statearr_30880_30903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30860 === (8))){
var inst_30818 = (state_30859[(9)]);
var inst_30822 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30818,opts);
var state_30859__$1 = state_30859;
if(cljs.core.truth_(inst_30822)){
var statearr_30881_30904 = state_30859__$1;
(statearr_30881_30904[(1)] = (11));

} else {
var statearr_30882_30905 = state_30859__$1;
(statearr_30882_30905[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26934__auto___30887,ch))
;
return ((function (switch__26844__auto__,c__26934__auto___30887,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26845__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26845__auto____0 = (function (){
var statearr_30883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30883[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26845__auto__);

(statearr_30883[(1)] = (1));

return statearr_30883;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26845__auto____1 = (function (state_30859){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_30859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e30884){if((e30884 instanceof Object)){
var ex__26848__auto__ = e30884;
var statearr_30885_30906 = state_30859;
(statearr_30885_30906[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30907 = state_30859;
state_30859 = G__30907;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26845__auto__ = function(state_30859){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26845__auto____1.call(this,state_30859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26845__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26845__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___30887,ch))
})();
var state__26936__auto__ = (function (){var statearr_30886 = f__26935__auto__.call(null);
(statearr_30886[(6)] = c__26934__auto___30887);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___30887,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30908_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30908_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30912 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30912){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30910 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30911 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30910,_STAR_print_fn_STAR_30911,sb,base_path_30912){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30910,_STAR_print_fn_STAR_30911,sb,base_path_30912))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30911;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30910;
}}catch (e30909){if((e30909 instanceof Error)){
var e = e30909;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30912], null));
} else {
var e = e30909;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30912))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30913){
var map__30914 = p__30913;
var map__30914__$1 = ((((!((map__30914 == null)))?(((((map__30914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30914):map__30914);
var opts = map__30914__$1;
var build_id = cljs.core.get.call(null,map__30914__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30914,map__30914__$1,opts,build_id){
return (function (p__30916){
var vec__30917 = p__30916;
var seq__30918 = cljs.core.seq.call(null,vec__30917);
var first__30919 = cljs.core.first.call(null,seq__30918);
var seq__30918__$1 = cljs.core.next.call(null,seq__30918);
var map__30920 = first__30919;
var map__30920__$1 = ((((!((map__30920 == null)))?(((((map__30920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30920):map__30920);
var msg = map__30920__$1;
var msg_name = cljs.core.get.call(null,map__30920__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30918__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30917,seq__30918,first__30919,seq__30918__$1,map__30920,map__30920__$1,msg,msg_name,_,map__30914,map__30914__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30917,seq__30918,first__30919,seq__30918__$1,map__30920,map__30920__$1,msg,msg_name,_,map__30914,map__30914__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30914,map__30914__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30922){
var vec__30923 = p__30922;
var seq__30924 = cljs.core.seq.call(null,vec__30923);
var first__30925 = cljs.core.first.call(null,seq__30924);
var seq__30924__$1 = cljs.core.next.call(null,seq__30924);
var map__30926 = first__30925;
var map__30926__$1 = ((((!((map__30926 == null)))?(((((map__30926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30926):map__30926);
var msg = map__30926__$1;
var msg_name = cljs.core.get.call(null,map__30926__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30924__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30928){
var map__30929 = p__30928;
var map__30929__$1 = ((((!((map__30929 == null)))?(((((map__30929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30929):map__30929);
var on_compile_warning = cljs.core.get.call(null,map__30929__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30929__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30929,map__30929__$1,on_compile_warning,on_compile_fail){
return (function (p__30931){
var vec__30932 = p__30931;
var seq__30933 = cljs.core.seq.call(null,vec__30932);
var first__30934 = cljs.core.first.call(null,seq__30933);
var seq__30933__$1 = cljs.core.next.call(null,seq__30933);
var map__30935 = first__30934;
var map__30935__$1 = ((((!((map__30935 == null)))?(((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var msg = map__30935__$1;
var msg_name = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30933__$1;
var pred__30937 = cljs.core._EQ_;
var expr__30938 = msg_name;
if(cljs.core.truth_(pred__30937.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30938))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30937.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30938))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30929,map__30929__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__,msg_hist,msg_names,msg){
return (function (state_31027){
var state_val_31028 = (state_31027[(1)]);
if((state_val_31028 === (7))){
var inst_30947 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30947)){
var statearr_31029_31076 = state_31027__$1;
(statearr_31029_31076[(1)] = (8));

} else {
var statearr_31030_31077 = state_31027__$1;
(statearr_31030_31077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (20))){
var inst_31021 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31031_31078 = state_31027__$1;
(statearr_31031_31078[(2)] = inst_31021);

(statearr_31031_31078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (27))){
var inst_31017 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31032_31079 = state_31027__$1;
(statearr_31032_31079[(2)] = inst_31017);

(statearr_31032_31079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (1))){
var inst_30940 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30940)){
var statearr_31033_31080 = state_31027__$1;
(statearr_31033_31080[(1)] = (2));

} else {
var statearr_31034_31081 = state_31027__$1;
(statearr_31034_31081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (24))){
var inst_31019 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31035_31082 = state_31027__$1;
(statearr_31035_31082[(2)] = inst_31019);

(statearr_31035_31082[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (4))){
var inst_31025 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31027__$1,inst_31025);
} else {
if((state_val_31028 === (15))){
var inst_31023 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31036_31083 = state_31027__$1;
(statearr_31036_31083[(2)] = inst_31023);

(statearr_31036_31083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (21))){
var inst_30976 = (state_31027[(2)]);
var inst_30977 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30978 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30977);
var state_31027__$1 = (function (){var statearr_31037 = state_31027;
(statearr_31037[(7)] = inst_30976);

return statearr_31037;
})();
var statearr_31038_31084 = state_31027__$1;
(statearr_31038_31084[(2)] = inst_30978);

(statearr_31038_31084[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (31))){
var inst_31006 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_31006)){
var statearr_31039_31085 = state_31027__$1;
(statearr_31039_31085[(1)] = (34));

} else {
var statearr_31040_31086 = state_31027__$1;
(statearr_31040_31086[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (32))){
var inst_31015 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31041_31087 = state_31027__$1;
(statearr_31041_31087[(2)] = inst_31015);

(statearr_31041_31087[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (33))){
var inst_31002 = (state_31027[(2)]);
var inst_31003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31004 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31003);
var state_31027__$1 = (function (){var statearr_31042 = state_31027;
(statearr_31042[(8)] = inst_31002);

return statearr_31042;
})();
var statearr_31043_31088 = state_31027__$1;
(statearr_31043_31088[(2)] = inst_31004);

(statearr_31043_31088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (13))){
var inst_30961 = figwheel.client.heads_up.clear.call(null);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(16),inst_30961);
} else {
if((state_val_31028 === (22))){
var inst_30982 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30983 = figwheel.client.heads_up.append_warning_message.call(null,inst_30982);
var state_31027__$1 = state_31027;
var statearr_31044_31089 = state_31027__$1;
(statearr_31044_31089[(2)] = inst_30983);

(statearr_31044_31089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (36))){
var inst_31013 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31045_31090 = state_31027__$1;
(statearr_31045_31090[(2)] = inst_31013);

(statearr_31045_31090[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (29))){
var inst_30993 = (state_31027[(2)]);
var inst_30994 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30995 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30994);
var state_31027__$1 = (function (){var statearr_31046 = state_31027;
(statearr_31046[(9)] = inst_30993);

return statearr_31046;
})();
var statearr_31047_31091 = state_31027__$1;
(statearr_31047_31091[(2)] = inst_30995);

(statearr_31047_31091[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (6))){
var inst_30942 = (state_31027[(10)]);
var state_31027__$1 = state_31027;
var statearr_31048_31092 = state_31027__$1;
(statearr_31048_31092[(2)] = inst_30942);

(statearr_31048_31092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (28))){
var inst_30989 = (state_31027[(2)]);
var inst_30990 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30991 = figwheel.client.heads_up.display_warning.call(null,inst_30990);
var state_31027__$1 = (function (){var statearr_31049 = state_31027;
(statearr_31049[(11)] = inst_30989);

return statearr_31049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(29),inst_30991);
} else {
if((state_val_31028 === (25))){
var inst_30987 = figwheel.client.heads_up.clear.call(null);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(28),inst_30987);
} else {
if((state_val_31028 === (34))){
var inst_31008 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(37),inst_31008);
} else {
if((state_val_31028 === (17))){
var inst_30967 = (state_31027[(2)]);
var inst_30968 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30969 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30968);
var state_31027__$1 = (function (){var statearr_31050 = state_31027;
(statearr_31050[(12)] = inst_30967);

return statearr_31050;
})();
var statearr_31051_31093 = state_31027__$1;
(statearr_31051_31093[(2)] = inst_30969);

(statearr_31051_31093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (3))){
var inst_30959 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30959)){
var statearr_31052_31094 = state_31027__$1;
(statearr_31052_31094[(1)] = (13));

} else {
var statearr_31053_31095 = state_31027__$1;
(statearr_31053_31095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (12))){
var inst_30955 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31054_31096 = state_31027__$1;
(statearr_31054_31096[(2)] = inst_30955);

(statearr_31054_31096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (2))){
var inst_30942 = (state_31027[(10)]);
var inst_30942__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31027__$1 = (function (){var statearr_31055 = state_31027;
(statearr_31055[(10)] = inst_30942__$1);

return statearr_31055;
})();
if(cljs.core.truth_(inst_30942__$1)){
var statearr_31056_31097 = state_31027__$1;
(statearr_31056_31097[(1)] = (5));

} else {
var statearr_31057_31098 = state_31027__$1;
(statearr_31057_31098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (23))){
var inst_30985 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30985)){
var statearr_31058_31099 = state_31027__$1;
(statearr_31058_31099[(1)] = (25));

} else {
var statearr_31059_31100 = state_31027__$1;
(statearr_31059_31100[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (35))){
var state_31027__$1 = state_31027;
var statearr_31060_31101 = state_31027__$1;
(statearr_31060_31101[(2)] = null);

(statearr_31060_31101[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (19))){
var inst_30980 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30980)){
var statearr_31061_31102 = state_31027__$1;
(statearr_31061_31102[(1)] = (22));

} else {
var statearr_31062_31103 = state_31027__$1;
(statearr_31062_31103[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (11))){
var inst_30951 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31063_31104 = state_31027__$1;
(statearr_31063_31104[(2)] = inst_30951);

(statearr_31063_31104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (9))){
var inst_30953 = figwheel.client.heads_up.clear.call(null);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(12),inst_30953);
} else {
if((state_val_31028 === (5))){
var inst_30944 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31027__$1 = state_31027;
var statearr_31064_31105 = state_31027__$1;
(statearr_31064_31105[(2)] = inst_30944);

(statearr_31064_31105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (14))){
var inst_30971 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30971)){
var statearr_31065_31106 = state_31027__$1;
(statearr_31065_31106[(1)] = (18));

} else {
var statearr_31066_31107 = state_31027__$1;
(statearr_31066_31107[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (26))){
var inst_30997 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31027__$1 = state_31027;
if(cljs.core.truth_(inst_30997)){
var statearr_31067_31108 = state_31027__$1;
(statearr_31067_31108[(1)] = (30));

} else {
var statearr_31068_31109 = state_31027__$1;
(statearr_31068_31109[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (16))){
var inst_30963 = (state_31027[(2)]);
var inst_30964 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30965 = figwheel.client.heads_up.display_exception.call(null,inst_30964);
var state_31027__$1 = (function (){var statearr_31069 = state_31027;
(statearr_31069[(13)] = inst_30963);

return statearr_31069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(17),inst_30965);
} else {
if((state_val_31028 === (30))){
var inst_30999 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31000 = figwheel.client.heads_up.display_warning.call(null,inst_30999);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(33),inst_31000);
} else {
if((state_val_31028 === (10))){
var inst_30957 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31070_31110 = state_31027__$1;
(statearr_31070_31110[(2)] = inst_30957);

(statearr_31070_31110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (18))){
var inst_30973 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30974 = figwheel.client.heads_up.display_exception.call(null,inst_30973);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(21),inst_30974);
} else {
if((state_val_31028 === (37))){
var inst_31010 = (state_31027[(2)]);
var state_31027__$1 = state_31027;
var statearr_31071_31111 = state_31027__$1;
(statearr_31071_31111[(2)] = inst_31010);

(statearr_31071_31111[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31028 === (8))){
var inst_30949 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31027__$1,(11),inst_30949);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26934__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26844__auto__,c__26934__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31072[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto____1 = (function (state_31027){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_31027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__26848__auto__ = e31073;
var statearr_31074_31112 = state_31027;
(statearr_31074_31112[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31113 = state_31027;
state_31027 = G__31113;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto__ = function(state_31027){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto____1.call(this,state_31027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__,msg_hist,msg_names,msg))
})();
var state__26936__auto__ = (function (){var statearr_31075 = f__26935__auto__.call(null);
(statearr_31075[(6)] = c__26934__auto__);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__,msg_hist,msg_names,msg))
);

return c__26934__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26934__auto___31142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___31142,ch){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___31142,ch){
return (function (state_31128){
var state_val_31129 = (state_31128[(1)]);
if((state_val_31129 === (1))){
var state_31128__$1 = state_31128;
var statearr_31130_31143 = state_31128__$1;
(statearr_31130_31143[(2)] = null);

(statearr_31130_31143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (2))){
var state_31128__$1 = state_31128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31128__$1,(4),ch);
} else {
if((state_val_31129 === (3))){
var inst_31126 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31128__$1,inst_31126);
} else {
if((state_val_31129 === (4))){
var inst_31116 = (state_31128[(7)]);
var inst_31116__$1 = (state_31128[(2)]);
var state_31128__$1 = (function (){var statearr_31131 = state_31128;
(statearr_31131[(7)] = inst_31116__$1);

return statearr_31131;
})();
if(cljs.core.truth_(inst_31116__$1)){
var statearr_31132_31144 = state_31128__$1;
(statearr_31132_31144[(1)] = (5));

} else {
var statearr_31133_31145 = state_31128__$1;
(statearr_31133_31145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (5))){
var inst_31116 = (state_31128[(7)]);
var inst_31118 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31116);
var state_31128__$1 = state_31128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31128__$1,(8),inst_31118);
} else {
if((state_val_31129 === (6))){
var state_31128__$1 = state_31128;
var statearr_31134_31146 = state_31128__$1;
(statearr_31134_31146[(2)] = null);

(statearr_31134_31146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (7))){
var inst_31124 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31135_31147 = state_31128__$1;
(statearr_31135_31147[(2)] = inst_31124);

(statearr_31135_31147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (8))){
var inst_31120 = (state_31128[(2)]);
var state_31128__$1 = (function (){var statearr_31136 = state_31128;
(statearr_31136[(8)] = inst_31120);

return statearr_31136;
})();
var statearr_31137_31148 = state_31128__$1;
(statearr_31137_31148[(2)] = null);

(statearr_31137_31148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26934__auto___31142,ch))
;
return ((function (switch__26844__auto__,c__26934__auto___31142,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26845__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26845__auto____0 = (function (){
var statearr_31138 = [null,null,null,null,null,null,null,null,null];
(statearr_31138[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26845__auto__);

(statearr_31138[(1)] = (1));

return statearr_31138;
});
var figwheel$client$heads_up_plugin_$_state_machine__26845__auto____1 = (function (state_31128){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_31128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e31139){if((e31139 instanceof Object)){
var ex__26848__auto__ = e31139;
var statearr_31140_31149 = state_31128;
(statearr_31140_31149[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31150 = state_31128;
state_31128 = G__31150;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26845__auto__ = function(state_31128){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26845__auto____1.call(this,state_31128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26845__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26845__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___31142,ch))
})();
var state__26936__auto__ = (function (){var statearr_31141 = f__26935__auto__.call(null);
(statearr_31141[(6)] = c__26934__auto___31142);

return statearr_31141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___31142,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__){
return (function (state_31156){
var state_val_31157 = (state_31156[(1)]);
if((state_val_31157 === (1))){
var inst_31151 = cljs.core.async.timeout.call(null,(3000));
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31156__$1,(2),inst_31151);
} else {
if((state_val_31157 === (2))){
var inst_31153 = (state_31156[(2)]);
var inst_31154 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31156__$1 = (function (){var statearr_31158 = state_31156;
(statearr_31158[(7)] = inst_31153);

return statearr_31158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31156__$1,inst_31154);
} else {
return null;
}
}
});})(c__26934__auto__))
;
return ((function (switch__26844__auto__,c__26934__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26845__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26845__auto____0 = (function (){
var statearr_31159 = [null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26845__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26845__auto____1 = (function (state_31156){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_31156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__26848__auto__ = e31160;
var statearr_31161_31163 = state_31156;
(statearr_31161_31163[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31164 = state_31156;
state_31156 = G__31164;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26845__auto__ = function(state_31156){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26845__auto____1.call(this,state_31156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26845__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26845__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__))
})();
var state__26936__auto__ = (function (){var statearr_31162 = f__26935__auto__.call(null);
(statearr_31162[(6)] = c__26934__auto__);

return statearr_31162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__))
);

return c__26934__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31171){
var state_val_31172 = (state_31171[(1)]);
if((state_val_31172 === (1))){
var inst_31165 = cljs.core.async.timeout.call(null,(2000));
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31171__$1,(2),inst_31165);
} else {
if((state_val_31172 === (2))){
var inst_31167 = (state_31171[(2)]);
var inst_31168 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31169 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31168);
var state_31171__$1 = (function (){var statearr_31173 = state_31171;
(statearr_31173[(7)] = inst_31167);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31171__$1,inst_31169);
} else {
return null;
}
}
});})(c__26934__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26844__auto__,c__26934__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto____0 = (function (){
var statearr_31174 = [null,null,null,null,null,null,null,null];
(statearr_31174[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto__);

(statearr_31174[(1)] = (1));

return statearr_31174;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto____1 = (function (state_31171){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_31171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e31175){if((e31175 instanceof Object)){
var ex__26848__auto__ = e31175;
var statearr_31176_31178 = state_31171;
(statearr_31176_31178[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31179 = state_31171;
state_31171 = G__31179;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto__ = function(state_31171){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto____1.call(this,state_31171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26936__auto__ = (function (){var statearr_31177 = f__26935__auto__.call(null);
(statearr_31177[(6)] = c__26934__auto__);

return statearr_31177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__,figwheel_version,temp__5457__auto__))
);

return c__26934__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31180){
var map__31181 = p__31180;
var map__31181__$1 = ((((!((map__31181 == null)))?(((((map__31181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31181):map__31181);
var file = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31183 = "";
var G__31183__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31183),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31183);
var G__31183__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31183__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31183__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31183__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31183__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31184){
var map__31185 = p__31184;
var map__31185__$1 = ((((!((map__31185 == null)))?(((((map__31185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31185):map__31185);
var ed = map__31185__$1;
var formatted_exception = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31187_31191 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31188_31192 = null;
var count__31189_31193 = (0);
var i__31190_31194 = (0);
while(true){
if((i__31190_31194 < count__31189_31193)){
var msg_31195 = cljs.core._nth.call(null,chunk__31188_31192,i__31190_31194);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31195);


var G__31196 = seq__31187_31191;
var G__31197 = chunk__31188_31192;
var G__31198 = count__31189_31193;
var G__31199 = (i__31190_31194 + (1));
seq__31187_31191 = G__31196;
chunk__31188_31192 = G__31197;
count__31189_31193 = G__31198;
i__31190_31194 = G__31199;
continue;
} else {
var temp__5457__auto___31200 = cljs.core.seq.call(null,seq__31187_31191);
if(temp__5457__auto___31200){
var seq__31187_31201__$1 = temp__5457__auto___31200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31187_31201__$1)){
var c__4319__auto___31202 = cljs.core.chunk_first.call(null,seq__31187_31201__$1);
var G__31203 = cljs.core.chunk_rest.call(null,seq__31187_31201__$1);
var G__31204 = c__4319__auto___31202;
var G__31205 = cljs.core.count.call(null,c__4319__auto___31202);
var G__31206 = (0);
seq__31187_31191 = G__31203;
chunk__31188_31192 = G__31204;
count__31189_31193 = G__31205;
i__31190_31194 = G__31206;
continue;
} else {
var msg_31207 = cljs.core.first.call(null,seq__31187_31201__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31207);


var G__31208 = cljs.core.next.call(null,seq__31187_31201__$1);
var G__31209 = null;
var G__31210 = (0);
var G__31211 = (0);
seq__31187_31191 = G__31208;
chunk__31188_31192 = G__31209;
count__31189_31193 = G__31210;
i__31190_31194 = G__31211;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31212){
var map__31213 = p__31212;
var map__31213__$1 = ((((!((map__31213 == null)))?(((((map__31213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31213):map__31213);
var w = map__31213__$1;
var message = cljs.core.get.call(null,map__31213__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31215 = cljs.core.seq.call(null,plugins);
var chunk__31216 = null;
var count__31217 = (0);
var i__31218 = (0);
while(true){
if((i__31218 < count__31217)){
var vec__31219 = cljs.core._nth.call(null,chunk__31216,i__31218);
var k = cljs.core.nth.call(null,vec__31219,(0),null);
var plugin = cljs.core.nth.call(null,vec__31219,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31225 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31215,chunk__31216,count__31217,i__31218,pl_31225,vec__31219,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31225.call(null,msg_hist);
});})(seq__31215,chunk__31216,count__31217,i__31218,pl_31225,vec__31219,k,plugin))
);
} else {
}


var G__31226 = seq__31215;
var G__31227 = chunk__31216;
var G__31228 = count__31217;
var G__31229 = (i__31218 + (1));
seq__31215 = G__31226;
chunk__31216 = G__31227;
count__31217 = G__31228;
i__31218 = G__31229;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31215);
if(temp__5457__auto__){
var seq__31215__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31215__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31215__$1);
var G__31230 = cljs.core.chunk_rest.call(null,seq__31215__$1);
var G__31231 = c__4319__auto__;
var G__31232 = cljs.core.count.call(null,c__4319__auto__);
var G__31233 = (0);
seq__31215 = G__31230;
chunk__31216 = G__31231;
count__31217 = G__31232;
i__31218 = G__31233;
continue;
} else {
var vec__31222 = cljs.core.first.call(null,seq__31215__$1);
var k = cljs.core.nth.call(null,vec__31222,(0),null);
var plugin = cljs.core.nth.call(null,vec__31222,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31234 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31215,chunk__31216,count__31217,i__31218,pl_31234,vec__31222,k,plugin,seq__31215__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31234.call(null,msg_hist);
});})(seq__31215,chunk__31216,count__31217,i__31218,pl_31234,vec__31222,k,plugin,seq__31215__$1,temp__5457__auto__))
);
} else {
}


var G__31235 = cljs.core.next.call(null,seq__31215__$1);
var G__31236 = null;
var G__31237 = (0);
var G__31238 = (0);
seq__31215 = G__31235;
chunk__31216 = G__31236;
count__31217 = G__31237;
i__31218 = G__31238;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31240 = arguments.length;
switch (G__31240) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31241_31246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31242_31247 = null;
var count__31243_31248 = (0);
var i__31244_31249 = (0);
while(true){
if((i__31244_31249 < count__31243_31248)){
var msg_31250 = cljs.core._nth.call(null,chunk__31242_31247,i__31244_31249);
figwheel.client.socket.handle_incoming_message.call(null,msg_31250);


var G__31251 = seq__31241_31246;
var G__31252 = chunk__31242_31247;
var G__31253 = count__31243_31248;
var G__31254 = (i__31244_31249 + (1));
seq__31241_31246 = G__31251;
chunk__31242_31247 = G__31252;
count__31243_31248 = G__31253;
i__31244_31249 = G__31254;
continue;
} else {
var temp__5457__auto___31255 = cljs.core.seq.call(null,seq__31241_31246);
if(temp__5457__auto___31255){
var seq__31241_31256__$1 = temp__5457__auto___31255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31241_31256__$1)){
var c__4319__auto___31257 = cljs.core.chunk_first.call(null,seq__31241_31256__$1);
var G__31258 = cljs.core.chunk_rest.call(null,seq__31241_31256__$1);
var G__31259 = c__4319__auto___31257;
var G__31260 = cljs.core.count.call(null,c__4319__auto___31257);
var G__31261 = (0);
seq__31241_31246 = G__31258;
chunk__31242_31247 = G__31259;
count__31243_31248 = G__31260;
i__31244_31249 = G__31261;
continue;
} else {
var msg_31262 = cljs.core.first.call(null,seq__31241_31256__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31262);


var G__31263 = cljs.core.next.call(null,seq__31241_31256__$1);
var G__31264 = null;
var G__31265 = (0);
var G__31266 = (0);
seq__31241_31246 = G__31263;
chunk__31242_31247 = G__31264;
count__31243_31248 = G__31265;
i__31244_31249 = G__31266;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31271 = arguments.length;
var i__4500__auto___31272 = (0);
while(true){
if((i__4500__auto___31272 < len__4499__auto___31271)){
args__4502__auto__.push((arguments[i__4500__auto___31272]));

var G__31273 = (i__4500__auto___31272 + (1));
i__4500__auto___31272 = G__31273;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31268){
var map__31269 = p__31268;
var map__31269__$1 = ((((!((map__31269 == null)))?(((((map__31269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31269):map__31269);
var opts = map__31269__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31267){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31267));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31274){if((e31274 instanceof Error)){
var e = e31274;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31274;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31275){
var map__31276 = p__31275;
var map__31276__$1 = ((((!((map__31276 == null)))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);
var msg_name = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545334059938
