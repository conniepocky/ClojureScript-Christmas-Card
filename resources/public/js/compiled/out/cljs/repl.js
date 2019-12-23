// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30506){
var map__30507 = p__30506;
var map__30507__$1 = ((((!((map__30507 == null)))?(((((map__30507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507):map__30507);
var m = map__30507__$1;
var n = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30509_30531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30510_30532 = null;
var count__30511_30533 = (0);
var i__30512_30534 = (0);
while(true){
if((i__30512_30534 < count__30511_30533)){
var f_30535 = cljs.core._nth.call(null,chunk__30510_30532,i__30512_30534);
cljs.core.println.call(null,"  ",f_30535);


var G__30536 = seq__30509_30531;
var G__30537 = chunk__30510_30532;
var G__30538 = count__30511_30533;
var G__30539 = (i__30512_30534 + (1));
seq__30509_30531 = G__30536;
chunk__30510_30532 = G__30537;
count__30511_30533 = G__30538;
i__30512_30534 = G__30539;
continue;
} else {
var temp__5457__auto___30540 = cljs.core.seq.call(null,seq__30509_30531);
if(temp__5457__auto___30540){
var seq__30509_30541__$1 = temp__5457__auto___30540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30509_30541__$1)){
var c__4319__auto___30542 = cljs.core.chunk_first.call(null,seq__30509_30541__$1);
var G__30543 = cljs.core.chunk_rest.call(null,seq__30509_30541__$1);
var G__30544 = c__4319__auto___30542;
var G__30545 = cljs.core.count.call(null,c__4319__auto___30542);
var G__30546 = (0);
seq__30509_30531 = G__30543;
chunk__30510_30532 = G__30544;
count__30511_30533 = G__30545;
i__30512_30534 = G__30546;
continue;
} else {
var f_30547 = cljs.core.first.call(null,seq__30509_30541__$1);
cljs.core.println.call(null,"  ",f_30547);


var G__30548 = cljs.core.next.call(null,seq__30509_30541__$1);
var G__30549 = null;
var G__30550 = (0);
var G__30551 = (0);
seq__30509_30531 = G__30548;
chunk__30510_30532 = G__30549;
count__30511_30533 = G__30550;
i__30512_30534 = G__30551;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30552 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30552);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30552)))?cljs.core.second.call(null,arglists_30552):arglists_30552));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30513_30553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30514_30554 = null;
var count__30515_30555 = (0);
var i__30516_30556 = (0);
while(true){
if((i__30516_30556 < count__30515_30555)){
var vec__30517_30557 = cljs.core._nth.call(null,chunk__30514_30554,i__30516_30556);
var name_30558 = cljs.core.nth.call(null,vec__30517_30557,(0),null);
var map__30520_30559 = cljs.core.nth.call(null,vec__30517_30557,(1),null);
var map__30520_30560__$1 = ((((!((map__30520_30559 == null)))?(((((map__30520_30559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30520_30559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520_30559):map__30520_30559);
var doc_30561 = cljs.core.get.call(null,map__30520_30560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30562 = cljs.core.get.call(null,map__30520_30560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30558);

cljs.core.println.call(null," ",arglists_30562);

if(cljs.core.truth_(doc_30561)){
cljs.core.println.call(null," ",doc_30561);
} else {
}


var G__30563 = seq__30513_30553;
var G__30564 = chunk__30514_30554;
var G__30565 = count__30515_30555;
var G__30566 = (i__30516_30556 + (1));
seq__30513_30553 = G__30563;
chunk__30514_30554 = G__30564;
count__30515_30555 = G__30565;
i__30516_30556 = G__30566;
continue;
} else {
var temp__5457__auto___30567 = cljs.core.seq.call(null,seq__30513_30553);
if(temp__5457__auto___30567){
var seq__30513_30568__$1 = temp__5457__auto___30567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30513_30568__$1)){
var c__4319__auto___30569 = cljs.core.chunk_first.call(null,seq__30513_30568__$1);
var G__30570 = cljs.core.chunk_rest.call(null,seq__30513_30568__$1);
var G__30571 = c__4319__auto___30569;
var G__30572 = cljs.core.count.call(null,c__4319__auto___30569);
var G__30573 = (0);
seq__30513_30553 = G__30570;
chunk__30514_30554 = G__30571;
count__30515_30555 = G__30572;
i__30516_30556 = G__30573;
continue;
} else {
var vec__30522_30574 = cljs.core.first.call(null,seq__30513_30568__$1);
var name_30575 = cljs.core.nth.call(null,vec__30522_30574,(0),null);
var map__30525_30576 = cljs.core.nth.call(null,vec__30522_30574,(1),null);
var map__30525_30577__$1 = ((((!((map__30525_30576 == null)))?(((((map__30525_30576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30525_30576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30525_30576):map__30525_30576);
var doc_30578 = cljs.core.get.call(null,map__30525_30577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30579 = cljs.core.get.call(null,map__30525_30577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30575);

cljs.core.println.call(null," ",arglists_30579);

if(cljs.core.truth_(doc_30578)){
cljs.core.println.call(null," ",doc_30578);
} else {
}


var G__30580 = cljs.core.next.call(null,seq__30513_30568__$1);
var G__30581 = null;
var G__30582 = (0);
var G__30583 = (0);
seq__30513_30553 = G__30580;
chunk__30514_30554 = G__30581;
count__30515_30555 = G__30582;
i__30516_30556 = G__30583;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30527 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30528 = null;
var count__30529 = (0);
var i__30530 = (0);
while(true){
if((i__30530 < count__30529)){
var role = cljs.core._nth.call(null,chunk__30528,i__30530);
var temp__5457__auto___30584__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30584__$1)){
var spec_30585 = temp__5457__auto___30584__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30585));
} else {
}


var G__30586 = seq__30527;
var G__30587 = chunk__30528;
var G__30588 = count__30529;
var G__30589 = (i__30530 + (1));
seq__30527 = G__30586;
chunk__30528 = G__30587;
count__30529 = G__30588;
i__30530 = G__30589;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30527);
if(temp__5457__auto____$1){
var seq__30527__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30527__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30527__$1);
var G__30590 = cljs.core.chunk_rest.call(null,seq__30527__$1);
var G__30591 = c__4319__auto__;
var G__30592 = cljs.core.count.call(null,c__4319__auto__);
var G__30593 = (0);
seq__30527 = G__30590;
chunk__30528 = G__30591;
count__30529 = G__30592;
i__30530 = G__30593;
continue;
} else {
var role = cljs.core.first.call(null,seq__30527__$1);
var temp__5457__auto___30594__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30594__$2)){
var spec_30595 = temp__5457__auto___30594__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30595));
} else {
}


var G__30596 = cljs.core.next.call(null,seq__30527__$1);
var G__30597 = null;
var G__30598 = (0);
var G__30599 = (0);
seq__30527 = G__30596;
chunk__30528 = G__30597;
count__30529 = G__30598;
i__30530 = G__30599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1577120283454
