// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29043_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29043_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29044 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29045 = null;
var count__29046 = (0);
var i__29047 = (0);
while(true){
if((i__29047 < count__29046)){
var n = cljs.core._nth.call(null,chunk__29045,i__29047);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29048 = seq__29044;
var G__29049 = chunk__29045;
var G__29050 = count__29046;
var G__29051 = (i__29047 + (1));
seq__29044 = G__29048;
chunk__29045 = G__29049;
count__29046 = G__29050;
i__29047 = G__29051;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29044);
if(temp__5457__auto__){
var seq__29044__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29044__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29044__$1);
var G__29052 = cljs.core.chunk_rest.call(null,seq__29044__$1);
var G__29053 = c__4319__auto__;
var G__29054 = cljs.core.count.call(null,c__4319__auto__);
var G__29055 = (0);
seq__29044 = G__29052;
chunk__29045 = G__29053;
count__29046 = G__29054;
i__29047 = G__29055;
continue;
} else {
var n = cljs.core.first.call(null,seq__29044__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29056 = cljs.core.next.call(null,seq__29044__$1);
var G__29057 = null;
var G__29058 = (0);
var G__29059 = (0);
seq__29044 = G__29056;
chunk__29045 = G__29057;
count__29046 = G__29058;
i__29047 = G__29059;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29060){
var vec__29061 = p__29060;
var _ = cljs.core.nth.call(null,vec__29061,(0),null);
var v = cljs.core.nth.call(null,vec__29061,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29064){
var vec__29065 = p__29064;
var k = cljs.core.nth.call(null,vec__29065,(0),null);
var v = cljs.core.nth.call(null,vec__29065,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29077_29085 = cljs.core.seq.call(null,deps);
var chunk__29078_29086 = null;
var count__29079_29087 = (0);
var i__29080_29088 = (0);
while(true){
if((i__29080_29088 < count__29079_29087)){
var dep_29089 = cljs.core._nth.call(null,chunk__29078_29086,i__29080_29088);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29089;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29089));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29089,(depth + (1)),state);
} else {
}


var G__29090 = seq__29077_29085;
var G__29091 = chunk__29078_29086;
var G__29092 = count__29079_29087;
var G__29093 = (i__29080_29088 + (1));
seq__29077_29085 = G__29090;
chunk__29078_29086 = G__29091;
count__29079_29087 = G__29092;
i__29080_29088 = G__29093;
continue;
} else {
var temp__5457__auto___29094 = cljs.core.seq.call(null,seq__29077_29085);
if(temp__5457__auto___29094){
var seq__29077_29095__$1 = temp__5457__auto___29094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29077_29095__$1)){
var c__4319__auto___29096 = cljs.core.chunk_first.call(null,seq__29077_29095__$1);
var G__29097 = cljs.core.chunk_rest.call(null,seq__29077_29095__$1);
var G__29098 = c__4319__auto___29096;
var G__29099 = cljs.core.count.call(null,c__4319__auto___29096);
var G__29100 = (0);
seq__29077_29085 = G__29097;
chunk__29078_29086 = G__29098;
count__29079_29087 = G__29099;
i__29080_29088 = G__29100;
continue;
} else {
var dep_29101 = cljs.core.first.call(null,seq__29077_29095__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29101;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29101));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29101,(depth + (1)),state);
} else {
}


var G__29102 = cljs.core.next.call(null,seq__29077_29095__$1);
var G__29103 = null;
var G__29104 = (0);
var G__29105 = (0);
seq__29077_29085 = G__29102;
chunk__29078_29086 = G__29103;
count__29079_29087 = G__29104;
i__29080_29088 = G__29105;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29081){
var vec__29082 = p__29081;
var seq__29083 = cljs.core.seq.call(null,vec__29082);
var first__29084 = cljs.core.first.call(null,seq__29083);
var seq__29083__$1 = cljs.core.next.call(null,seq__29083);
var x = first__29084;
var xs = seq__29083__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29082,seq__29083,first__29084,seq__29083__$1,x,xs,get_deps__$1){
return (function (p1__29068_SHARP_){
return clojure.set.difference.call(null,p1__29068_SHARP_,x);
});})(vec__29082,seq__29083,first__29084,seq__29083__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29106 = cljs.core.seq.call(null,provides);
var chunk__29107 = null;
var count__29108 = (0);
var i__29109 = (0);
while(true){
if((i__29109 < count__29108)){
var prov = cljs.core._nth.call(null,chunk__29107,i__29109);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29110_29118 = cljs.core.seq.call(null,requires);
var chunk__29111_29119 = null;
var count__29112_29120 = (0);
var i__29113_29121 = (0);
while(true){
if((i__29113_29121 < count__29112_29120)){
var req_29122 = cljs.core._nth.call(null,chunk__29111_29119,i__29113_29121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29122,prov);


var G__29123 = seq__29110_29118;
var G__29124 = chunk__29111_29119;
var G__29125 = count__29112_29120;
var G__29126 = (i__29113_29121 + (1));
seq__29110_29118 = G__29123;
chunk__29111_29119 = G__29124;
count__29112_29120 = G__29125;
i__29113_29121 = G__29126;
continue;
} else {
var temp__5457__auto___29127 = cljs.core.seq.call(null,seq__29110_29118);
if(temp__5457__auto___29127){
var seq__29110_29128__$1 = temp__5457__auto___29127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29110_29128__$1)){
var c__4319__auto___29129 = cljs.core.chunk_first.call(null,seq__29110_29128__$1);
var G__29130 = cljs.core.chunk_rest.call(null,seq__29110_29128__$1);
var G__29131 = c__4319__auto___29129;
var G__29132 = cljs.core.count.call(null,c__4319__auto___29129);
var G__29133 = (0);
seq__29110_29118 = G__29130;
chunk__29111_29119 = G__29131;
count__29112_29120 = G__29132;
i__29113_29121 = G__29133;
continue;
} else {
var req_29134 = cljs.core.first.call(null,seq__29110_29128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29134,prov);


var G__29135 = cljs.core.next.call(null,seq__29110_29128__$1);
var G__29136 = null;
var G__29137 = (0);
var G__29138 = (0);
seq__29110_29118 = G__29135;
chunk__29111_29119 = G__29136;
count__29112_29120 = G__29137;
i__29113_29121 = G__29138;
continue;
}
} else {
}
}
break;
}


var G__29139 = seq__29106;
var G__29140 = chunk__29107;
var G__29141 = count__29108;
var G__29142 = (i__29109 + (1));
seq__29106 = G__29139;
chunk__29107 = G__29140;
count__29108 = G__29141;
i__29109 = G__29142;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29106);
if(temp__5457__auto__){
var seq__29106__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29106__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29106__$1);
var G__29143 = cljs.core.chunk_rest.call(null,seq__29106__$1);
var G__29144 = c__4319__auto__;
var G__29145 = cljs.core.count.call(null,c__4319__auto__);
var G__29146 = (0);
seq__29106 = G__29143;
chunk__29107 = G__29144;
count__29108 = G__29145;
i__29109 = G__29146;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29106__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29114_29147 = cljs.core.seq.call(null,requires);
var chunk__29115_29148 = null;
var count__29116_29149 = (0);
var i__29117_29150 = (0);
while(true){
if((i__29117_29150 < count__29116_29149)){
var req_29151 = cljs.core._nth.call(null,chunk__29115_29148,i__29117_29150);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29151,prov);


var G__29152 = seq__29114_29147;
var G__29153 = chunk__29115_29148;
var G__29154 = count__29116_29149;
var G__29155 = (i__29117_29150 + (1));
seq__29114_29147 = G__29152;
chunk__29115_29148 = G__29153;
count__29116_29149 = G__29154;
i__29117_29150 = G__29155;
continue;
} else {
var temp__5457__auto___29156__$1 = cljs.core.seq.call(null,seq__29114_29147);
if(temp__5457__auto___29156__$1){
var seq__29114_29157__$1 = temp__5457__auto___29156__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29114_29157__$1)){
var c__4319__auto___29158 = cljs.core.chunk_first.call(null,seq__29114_29157__$1);
var G__29159 = cljs.core.chunk_rest.call(null,seq__29114_29157__$1);
var G__29160 = c__4319__auto___29158;
var G__29161 = cljs.core.count.call(null,c__4319__auto___29158);
var G__29162 = (0);
seq__29114_29147 = G__29159;
chunk__29115_29148 = G__29160;
count__29116_29149 = G__29161;
i__29117_29150 = G__29162;
continue;
} else {
var req_29163 = cljs.core.first.call(null,seq__29114_29157__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29163,prov);


var G__29164 = cljs.core.next.call(null,seq__29114_29157__$1);
var G__29165 = null;
var G__29166 = (0);
var G__29167 = (0);
seq__29114_29147 = G__29164;
chunk__29115_29148 = G__29165;
count__29116_29149 = G__29166;
i__29117_29150 = G__29167;
continue;
}
} else {
}
}
break;
}


var G__29168 = cljs.core.next.call(null,seq__29106__$1);
var G__29169 = null;
var G__29170 = (0);
var G__29171 = (0);
seq__29106 = G__29168;
chunk__29107 = G__29169;
count__29108 = G__29170;
i__29109 = G__29171;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29172_29176 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29173_29177 = null;
var count__29174_29178 = (0);
var i__29175_29179 = (0);
while(true){
if((i__29175_29179 < count__29174_29178)){
var ns_29180 = cljs.core._nth.call(null,chunk__29173_29177,i__29175_29179);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29180);


var G__29181 = seq__29172_29176;
var G__29182 = chunk__29173_29177;
var G__29183 = count__29174_29178;
var G__29184 = (i__29175_29179 + (1));
seq__29172_29176 = G__29181;
chunk__29173_29177 = G__29182;
count__29174_29178 = G__29183;
i__29175_29179 = G__29184;
continue;
} else {
var temp__5457__auto___29185 = cljs.core.seq.call(null,seq__29172_29176);
if(temp__5457__auto___29185){
var seq__29172_29186__$1 = temp__5457__auto___29185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29172_29186__$1)){
var c__4319__auto___29187 = cljs.core.chunk_first.call(null,seq__29172_29186__$1);
var G__29188 = cljs.core.chunk_rest.call(null,seq__29172_29186__$1);
var G__29189 = c__4319__auto___29187;
var G__29190 = cljs.core.count.call(null,c__4319__auto___29187);
var G__29191 = (0);
seq__29172_29176 = G__29188;
chunk__29173_29177 = G__29189;
count__29174_29178 = G__29190;
i__29175_29179 = G__29191;
continue;
} else {
var ns_29192 = cljs.core.first.call(null,seq__29172_29186__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29192);


var G__29193 = cljs.core.next.call(null,seq__29172_29186__$1);
var G__29194 = null;
var G__29195 = (0);
var G__29196 = (0);
seq__29172_29176 = G__29193;
chunk__29173_29177 = G__29194;
count__29174_29178 = G__29195;
i__29175_29179 = G__29196;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29197__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29198__i = 0, G__29198__a = new Array(arguments.length -  0);
while (G__29198__i < G__29198__a.length) {G__29198__a[G__29198__i] = arguments[G__29198__i + 0]; ++G__29198__i;}
  args = new cljs.core.IndexedSeq(G__29198__a,0,null);
} 
return G__29197__delegate.call(this,args);};
G__29197.cljs$lang$maxFixedArity = 0;
G__29197.cljs$lang$applyTo = (function (arglist__29199){
var args = cljs.core.seq(arglist__29199);
return G__29197__delegate(args);
});
G__29197.cljs$core$IFn$_invoke$arity$variadic = G__29197__delegate;
return G__29197;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29200_SHARP_,p2__29201_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29200_SHARP_)].join('')),p2__29201_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29202_SHARP_,p2__29203_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_)].join(''),p2__29203_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29204 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29204.addCallback(((function (G__29204){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29204))
);

G__29204.addErrback(((function (G__29204){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29204))
);

return G__29204;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29205){if((e29205 instanceof Error)){
var e = e29205;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29205;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29206){if((e29206 instanceof Error)){
var e = e29206;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29206;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29207 = cljs.core._EQ_;
var expr__29208 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29207.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29208))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29207.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29208))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29207.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29208))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29207,expr__29208){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29207,expr__29208))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29210,callback){
var map__29211 = p__29210;
var map__29211__$1 = ((((!((map__29211 == null)))?(((((map__29211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29211):map__29211);
var file_msg = map__29211__$1;
var request_url = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29211,map__29211__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29211,map__29211__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__){
return (function (state_29249){
var state_val_29250 = (state_29249[(1)]);
if((state_val_29250 === (7))){
var inst_29245 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29251_29277 = state_29249__$1;
(statearr_29251_29277[(2)] = inst_29245);

(statearr_29251_29277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (1))){
var state_29249__$1 = state_29249;
var statearr_29252_29278 = state_29249__$1;
(statearr_29252_29278[(2)] = null);

(statearr_29252_29278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (4))){
var inst_29215 = (state_29249[(7)]);
var inst_29215__$1 = (state_29249[(2)]);
var state_29249__$1 = (function (){var statearr_29253 = state_29249;
(statearr_29253[(7)] = inst_29215__$1);

return statearr_29253;
})();
if(cljs.core.truth_(inst_29215__$1)){
var statearr_29254_29279 = state_29249__$1;
(statearr_29254_29279[(1)] = (5));

} else {
var statearr_29255_29280 = state_29249__$1;
(statearr_29255_29280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (15))){
var inst_29230 = (state_29249[(8)]);
var inst_29228 = (state_29249[(9)]);
var inst_29232 = inst_29230.call(null,inst_29228);
var state_29249__$1 = state_29249;
var statearr_29256_29281 = state_29249__$1;
(statearr_29256_29281[(2)] = inst_29232);

(statearr_29256_29281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (13))){
var inst_29239 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29257_29282 = state_29249__$1;
(statearr_29257_29282[(2)] = inst_29239);

(statearr_29257_29282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (6))){
var state_29249__$1 = state_29249;
var statearr_29258_29283 = state_29249__$1;
(statearr_29258_29283[(2)] = null);

(statearr_29258_29283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (17))){
var inst_29236 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29259_29284 = state_29249__$1;
(statearr_29259_29284[(2)] = inst_29236);

(statearr_29259_29284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (3))){
var inst_29247 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29249__$1,inst_29247);
} else {
if((state_val_29250 === (12))){
var state_29249__$1 = state_29249;
var statearr_29260_29285 = state_29249__$1;
(statearr_29260_29285[(2)] = null);

(statearr_29260_29285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (2))){
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29249__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29250 === (11))){
var inst_29220 = (state_29249[(10)]);
var inst_29226 = figwheel.client.file_reloading.blocking_load.call(null,inst_29220);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29249__$1,(14),inst_29226);
} else {
if((state_val_29250 === (9))){
var inst_29220 = (state_29249[(10)]);
var state_29249__$1 = state_29249;
if(cljs.core.truth_(inst_29220)){
var statearr_29261_29286 = state_29249__$1;
(statearr_29261_29286[(1)] = (11));

} else {
var statearr_29262_29287 = state_29249__$1;
(statearr_29262_29287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (5))){
var inst_29221 = (state_29249[(11)]);
var inst_29215 = (state_29249[(7)]);
var inst_29220 = cljs.core.nth.call(null,inst_29215,(0),null);
var inst_29221__$1 = cljs.core.nth.call(null,inst_29215,(1),null);
var state_29249__$1 = (function (){var statearr_29263 = state_29249;
(statearr_29263[(10)] = inst_29220);

(statearr_29263[(11)] = inst_29221__$1);

return statearr_29263;
})();
if(cljs.core.truth_(inst_29221__$1)){
var statearr_29264_29288 = state_29249__$1;
(statearr_29264_29288[(1)] = (8));

} else {
var statearr_29265_29289 = state_29249__$1;
(statearr_29265_29289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (14))){
var inst_29220 = (state_29249[(10)]);
var inst_29230 = (state_29249[(8)]);
var inst_29228 = (state_29249[(2)]);
var inst_29229 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29230__$1 = cljs.core.get.call(null,inst_29229,inst_29220);
var state_29249__$1 = (function (){var statearr_29266 = state_29249;
(statearr_29266[(8)] = inst_29230__$1);

(statearr_29266[(9)] = inst_29228);

return statearr_29266;
})();
if(cljs.core.truth_(inst_29230__$1)){
var statearr_29267_29290 = state_29249__$1;
(statearr_29267_29290[(1)] = (15));

} else {
var statearr_29268_29291 = state_29249__$1;
(statearr_29268_29291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (16))){
var inst_29228 = (state_29249[(9)]);
var inst_29234 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29228);
var state_29249__$1 = state_29249;
var statearr_29269_29292 = state_29249__$1;
(statearr_29269_29292[(2)] = inst_29234);

(statearr_29269_29292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (10))){
var inst_29241 = (state_29249[(2)]);
var state_29249__$1 = (function (){var statearr_29270 = state_29249;
(statearr_29270[(12)] = inst_29241);

return statearr_29270;
})();
var statearr_29271_29293 = state_29249__$1;
(statearr_29271_29293[(2)] = null);

(statearr_29271_29293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (8))){
var inst_29221 = (state_29249[(11)]);
var inst_29223 = eval(inst_29221);
var state_29249__$1 = state_29249;
var statearr_29272_29294 = state_29249__$1;
(statearr_29272_29294[(2)] = inst_29223);

(statearr_29272_29294[(1)] = (10));


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
});})(c__26934__auto__))
;
return ((function (switch__26844__auto__,c__26934__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26845__auto__ = null;
var figwheel$client$file_reloading$state_machine__26845__auto____0 = (function (){
var statearr_29273 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29273[(0)] = figwheel$client$file_reloading$state_machine__26845__auto__);

(statearr_29273[(1)] = (1));

return statearr_29273;
});
var figwheel$client$file_reloading$state_machine__26845__auto____1 = (function (state_29249){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_29249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e29274){if((e29274 instanceof Object)){
var ex__26848__auto__ = e29274;
var statearr_29275_29295 = state_29249;
(statearr_29275_29295[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29296 = state_29249;
state_29249 = G__29296;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26845__auto__ = function(state_29249){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26845__auto____1.call(this,state_29249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26845__auto____0;
figwheel$client$file_reloading$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26845__auto____1;
return figwheel$client$file_reloading$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__))
})();
var state__26936__auto__ = (function (){var statearr_29276 = f__26935__auto__.call(null);
(statearr_29276[(6)] = c__26934__auto__);

return statearr_29276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__))
);

return c__26934__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29298 = arguments.length;
switch (G__29298) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29300,callback){
var map__29301 = p__29300;
var map__29301__$1 = ((((!((map__29301 == null)))?(((((map__29301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29301):map__29301);
var file_msg = map__29301__$1;
var namespace = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29301,map__29301__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29301,map__29301__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29303){
var map__29304 = p__29303;
var map__29304__$1 = ((((!((map__29304 == null)))?(((((map__29304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
var file_msg = map__29304__$1;
var namespace = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29306){
var map__29307 = p__29306;
var map__29307__$1 = ((((!((map__29307 == null)))?(((((map__29307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29307):map__29307);
var file_msg = map__29307__$1;
var namespace = cljs.core.get.call(null,map__29307__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29309,callback){
var map__29310 = p__29309;
var map__29310__$1 = ((((!((map__29310 == null)))?(((((map__29310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29310):map__29310);
var file_msg = map__29310__$1;
var request_url = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26934__auto___29360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___29360,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___29360,out){
return (function (state_29345){
var state_val_29346 = (state_29345[(1)]);
if((state_val_29346 === (1))){
var inst_29319 = cljs.core.seq.call(null,files);
var inst_29320 = cljs.core.first.call(null,inst_29319);
var inst_29321 = cljs.core.next.call(null,inst_29319);
var inst_29322 = files;
var state_29345__$1 = (function (){var statearr_29347 = state_29345;
(statearr_29347[(7)] = inst_29320);

(statearr_29347[(8)] = inst_29321);

(statearr_29347[(9)] = inst_29322);

return statearr_29347;
})();
var statearr_29348_29361 = state_29345__$1;
(statearr_29348_29361[(2)] = null);

(statearr_29348_29361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (2))){
var inst_29328 = (state_29345[(10)]);
var inst_29322 = (state_29345[(9)]);
var inst_29327 = cljs.core.seq.call(null,inst_29322);
var inst_29328__$1 = cljs.core.first.call(null,inst_29327);
var inst_29329 = cljs.core.next.call(null,inst_29327);
var inst_29330 = (inst_29328__$1 == null);
var inst_29331 = cljs.core.not.call(null,inst_29330);
var state_29345__$1 = (function (){var statearr_29349 = state_29345;
(statearr_29349[(10)] = inst_29328__$1);

(statearr_29349[(11)] = inst_29329);

return statearr_29349;
})();
if(inst_29331){
var statearr_29350_29362 = state_29345__$1;
(statearr_29350_29362[(1)] = (4));

} else {
var statearr_29351_29363 = state_29345__$1;
(statearr_29351_29363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (3))){
var inst_29343 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29345__$1,inst_29343);
} else {
if((state_val_29346 === (4))){
var inst_29328 = (state_29345[(10)]);
var inst_29333 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29328);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29345__$1,(7),inst_29333);
} else {
if((state_val_29346 === (5))){
var inst_29339 = cljs.core.async.close_BANG_.call(null,out);
var state_29345__$1 = state_29345;
var statearr_29352_29364 = state_29345__$1;
(statearr_29352_29364[(2)] = inst_29339);

(statearr_29352_29364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (6))){
var inst_29341 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
var statearr_29353_29365 = state_29345__$1;
(statearr_29353_29365[(2)] = inst_29341);

(statearr_29353_29365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (7))){
var inst_29329 = (state_29345[(11)]);
var inst_29335 = (state_29345[(2)]);
var inst_29336 = cljs.core.async.put_BANG_.call(null,out,inst_29335);
var inst_29322 = inst_29329;
var state_29345__$1 = (function (){var statearr_29354 = state_29345;
(statearr_29354[(12)] = inst_29336);

(statearr_29354[(9)] = inst_29322);

return statearr_29354;
})();
var statearr_29355_29366 = state_29345__$1;
(statearr_29355_29366[(2)] = null);

(statearr_29355_29366[(1)] = (2));


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
});})(c__26934__auto___29360,out))
;
return ((function (switch__26844__auto__,c__26934__auto___29360,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto____0 = (function (){
var statearr_29356 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29356[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto__);

(statearr_29356[(1)] = (1));

return statearr_29356;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto____1 = (function (state_29345){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_29345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e29357){if((e29357 instanceof Object)){
var ex__26848__auto__ = e29357;
var statearr_29358_29367 = state_29345;
(statearr_29358_29367[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29368 = state_29345;
state_29345 = G__29368;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto__ = function(state_29345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto____1.call(this,state_29345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___29360,out))
})();
var state__26936__auto__ = (function (){var statearr_29359 = f__26935__auto__.call(null);
(statearr_29359[(6)] = c__26934__auto___29360);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___29360,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29369,opts){
var map__29370 = p__29369;
var map__29370__$1 = ((((!((map__29370 == null)))?(((((map__29370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370):map__29370);
var eval_body = cljs.core.get.call(null,map__29370__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29370__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29372){var e = e29372;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29373_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29373_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29374){
var vec__29375 = p__29374;
var k = cljs.core.nth.call(null,vec__29375,(0),null);
var v = cljs.core.nth.call(null,vec__29375,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29378){
var vec__29379 = p__29378;
var k = cljs.core.nth.call(null,vec__29379,(0),null);
var v = cljs.core.nth.call(null,vec__29379,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29385,p__29386){
var map__29387 = p__29385;
var map__29387__$1 = ((((!((map__29387 == null)))?(((((map__29387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29387):map__29387);
var opts = map__29387__$1;
var before_jsload = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29388 = p__29386;
var map__29388__$1 = ((((!((map__29388 == null)))?(((((map__29388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29388):map__29388);
var msg = map__29388__$1;
var files = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29542){
var state_val_29543 = (state_29542[(1)]);
if((state_val_29543 === (7))){
var inst_29404 = (state_29542[(7)]);
var inst_29403 = (state_29542[(8)]);
var inst_29402 = (state_29542[(9)]);
var inst_29405 = (state_29542[(10)]);
var inst_29410 = cljs.core._nth.call(null,inst_29403,inst_29405);
var inst_29411 = figwheel.client.file_reloading.eval_body.call(null,inst_29410,opts);
var inst_29412 = (inst_29405 + (1));
var tmp29544 = inst_29404;
var tmp29545 = inst_29403;
var tmp29546 = inst_29402;
var inst_29402__$1 = tmp29546;
var inst_29403__$1 = tmp29545;
var inst_29404__$1 = tmp29544;
var inst_29405__$1 = inst_29412;
var state_29542__$1 = (function (){var statearr_29547 = state_29542;
(statearr_29547[(7)] = inst_29404__$1);

(statearr_29547[(11)] = inst_29411);

(statearr_29547[(8)] = inst_29403__$1);

(statearr_29547[(9)] = inst_29402__$1);

(statearr_29547[(10)] = inst_29405__$1);

return statearr_29547;
})();
var statearr_29548_29631 = state_29542__$1;
(statearr_29548_29631[(2)] = null);

(statearr_29548_29631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (20))){
var inst_29445 = (state_29542[(12)]);
var inst_29453 = figwheel.client.file_reloading.sort_files.call(null,inst_29445);
var state_29542__$1 = state_29542;
var statearr_29549_29632 = state_29542__$1;
(statearr_29549_29632[(2)] = inst_29453);

(statearr_29549_29632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (27))){
var state_29542__$1 = state_29542;
var statearr_29550_29633 = state_29542__$1;
(statearr_29550_29633[(2)] = null);

(statearr_29550_29633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (1))){
var inst_29394 = (state_29542[(13)]);
var inst_29391 = before_jsload.call(null,files);
var inst_29392 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29393 = (function (){return ((function (inst_29394,inst_29391,inst_29392,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29382_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29382_SHARP_);
});
;})(inst_29394,inst_29391,inst_29392,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29394__$1 = cljs.core.filter.call(null,inst_29393,files);
var inst_29395 = cljs.core.not_empty.call(null,inst_29394__$1);
var state_29542__$1 = (function (){var statearr_29551 = state_29542;
(statearr_29551[(14)] = inst_29391);

(statearr_29551[(13)] = inst_29394__$1);

(statearr_29551[(15)] = inst_29392);

return statearr_29551;
})();
if(cljs.core.truth_(inst_29395)){
var statearr_29552_29634 = state_29542__$1;
(statearr_29552_29634[(1)] = (2));

} else {
var statearr_29553_29635 = state_29542__$1;
(statearr_29553_29635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (24))){
var state_29542__$1 = state_29542;
var statearr_29554_29636 = state_29542__$1;
(statearr_29554_29636[(2)] = null);

(statearr_29554_29636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (39))){
var inst_29495 = (state_29542[(16)]);
var state_29542__$1 = state_29542;
var statearr_29555_29637 = state_29542__$1;
(statearr_29555_29637[(2)] = inst_29495);

(statearr_29555_29637[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (46))){
var inst_29537 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29556_29638 = state_29542__$1;
(statearr_29556_29638[(2)] = inst_29537);

(statearr_29556_29638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (4))){
var inst_29439 = (state_29542[(2)]);
var inst_29440 = cljs.core.List.EMPTY;
var inst_29441 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29440);
var inst_29442 = (function (){return ((function (inst_29439,inst_29440,inst_29441,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29383_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29383_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29383_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29383_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29439,inst_29440,inst_29441,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29443 = cljs.core.filter.call(null,inst_29442,files);
var inst_29444 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29445 = cljs.core.concat.call(null,inst_29443,inst_29444);
var state_29542__$1 = (function (){var statearr_29557 = state_29542;
(statearr_29557[(17)] = inst_29441);

(statearr_29557[(12)] = inst_29445);

(statearr_29557[(18)] = inst_29439);

return statearr_29557;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29558_29639 = state_29542__$1;
(statearr_29558_29639[(1)] = (16));

} else {
var statearr_29559_29640 = state_29542__$1;
(statearr_29559_29640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (15))){
var inst_29429 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29560_29641 = state_29542__$1;
(statearr_29560_29641[(2)] = inst_29429);

(statearr_29560_29641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (21))){
var inst_29455 = (state_29542[(19)]);
var inst_29455__$1 = (state_29542[(2)]);
var inst_29456 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29455__$1);
var state_29542__$1 = (function (){var statearr_29561 = state_29542;
(statearr_29561[(19)] = inst_29455__$1);

return statearr_29561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29542__$1,(22),inst_29456);
} else {
if((state_val_29543 === (31))){
var inst_29540 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29542__$1,inst_29540);
} else {
if((state_val_29543 === (32))){
var inst_29495 = (state_29542[(16)]);
var inst_29500 = inst_29495.cljs$lang$protocol_mask$partition0$;
var inst_29501 = (inst_29500 & (64));
var inst_29502 = inst_29495.cljs$core$ISeq$;
var inst_29503 = (cljs.core.PROTOCOL_SENTINEL === inst_29502);
var inst_29504 = ((inst_29501) || (inst_29503));
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29504)){
var statearr_29562_29642 = state_29542__$1;
(statearr_29562_29642[(1)] = (35));

} else {
var statearr_29563_29643 = state_29542__$1;
(statearr_29563_29643[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (40))){
var inst_29517 = (state_29542[(20)]);
var inst_29516 = (state_29542[(2)]);
var inst_29517__$1 = cljs.core.get.call(null,inst_29516,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29518 = cljs.core.get.call(null,inst_29516,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29519 = cljs.core.not_empty.call(null,inst_29517__$1);
var state_29542__$1 = (function (){var statearr_29564 = state_29542;
(statearr_29564[(21)] = inst_29518);

(statearr_29564[(20)] = inst_29517__$1);

return statearr_29564;
})();
if(cljs.core.truth_(inst_29519)){
var statearr_29565_29644 = state_29542__$1;
(statearr_29565_29644[(1)] = (41));

} else {
var statearr_29566_29645 = state_29542__$1;
(statearr_29566_29645[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (33))){
var state_29542__$1 = state_29542;
var statearr_29567_29646 = state_29542__$1;
(statearr_29567_29646[(2)] = false);

(statearr_29567_29646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (13))){
var inst_29415 = (state_29542[(22)]);
var inst_29419 = cljs.core.chunk_first.call(null,inst_29415);
var inst_29420 = cljs.core.chunk_rest.call(null,inst_29415);
var inst_29421 = cljs.core.count.call(null,inst_29419);
var inst_29402 = inst_29420;
var inst_29403 = inst_29419;
var inst_29404 = inst_29421;
var inst_29405 = (0);
var state_29542__$1 = (function (){var statearr_29568 = state_29542;
(statearr_29568[(7)] = inst_29404);

(statearr_29568[(8)] = inst_29403);

(statearr_29568[(9)] = inst_29402);

(statearr_29568[(10)] = inst_29405);

return statearr_29568;
})();
var statearr_29569_29647 = state_29542__$1;
(statearr_29569_29647[(2)] = null);

(statearr_29569_29647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (22))){
var inst_29459 = (state_29542[(23)]);
var inst_29455 = (state_29542[(19)]);
var inst_29463 = (state_29542[(24)]);
var inst_29458 = (state_29542[(25)]);
var inst_29458__$1 = (state_29542[(2)]);
var inst_29459__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29458__$1);
var inst_29460 = (function (){var all_files = inst_29455;
var res_SINGLEQUOTE_ = inst_29458__$1;
var res = inst_29459__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29459,inst_29455,inst_29463,inst_29458,inst_29458__$1,inst_29459__$1,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29384_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29384_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29459,inst_29455,inst_29463,inst_29458,inst_29458__$1,inst_29459__$1,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29461 = cljs.core.filter.call(null,inst_29460,inst_29458__$1);
var inst_29462 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29463__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29462);
var inst_29464 = cljs.core.not_empty.call(null,inst_29463__$1);
var state_29542__$1 = (function (){var statearr_29570 = state_29542;
(statearr_29570[(26)] = inst_29461);

(statearr_29570[(23)] = inst_29459__$1);

(statearr_29570[(24)] = inst_29463__$1);

(statearr_29570[(25)] = inst_29458__$1);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29464)){
var statearr_29571_29648 = state_29542__$1;
(statearr_29571_29648[(1)] = (23));

} else {
var statearr_29572_29649 = state_29542__$1;
(statearr_29572_29649[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (36))){
var state_29542__$1 = state_29542;
var statearr_29573_29650 = state_29542__$1;
(statearr_29573_29650[(2)] = false);

(statearr_29573_29650[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (41))){
var inst_29517 = (state_29542[(20)]);
var inst_29521 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29522 = cljs.core.map.call(null,inst_29521,inst_29517);
var inst_29523 = cljs.core.pr_str.call(null,inst_29522);
var inst_29524 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29523)].join('');
var inst_29525 = figwheel.client.utils.log.call(null,inst_29524);
var state_29542__$1 = state_29542;
var statearr_29574_29651 = state_29542__$1;
(statearr_29574_29651[(2)] = inst_29525);

(statearr_29574_29651[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (43))){
var inst_29518 = (state_29542[(21)]);
var inst_29528 = (state_29542[(2)]);
var inst_29529 = cljs.core.not_empty.call(null,inst_29518);
var state_29542__$1 = (function (){var statearr_29575 = state_29542;
(statearr_29575[(27)] = inst_29528);

return statearr_29575;
})();
if(cljs.core.truth_(inst_29529)){
var statearr_29576_29652 = state_29542__$1;
(statearr_29576_29652[(1)] = (44));

} else {
var statearr_29577_29653 = state_29542__$1;
(statearr_29577_29653[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (29))){
var inst_29461 = (state_29542[(26)]);
var inst_29459 = (state_29542[(23)]);
var inst_29455 = (state_29542[(19)]);
var inst_29495 = (state_29542[(16)]);
var inst_29463 = (state_29542[(24)]);
var inst_29458 = (state_29542[(25)]);
var inst_29491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29494 = (function (){var all_files = inst_29455;
var res_SINGLEQUOTE_ = inst_29458;
var res = inst_29459;
var files_not_loaded = inst_29461;
var dependencies_that_loaded = inst_29463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29495,inst_29463,inst_29458,inst_29491,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29493){
var map__29578 = p__29493;
var map__29578__$1 = ((((!((map__29578 == null)))?(((((map__29578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);
var namespace = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29495,inst_29463,inst_29458,inst_29491,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29495__$1 = cljs.core.group_by.call(null,inst_29494,inst_29461);
var inst_29497 = (inst_29495__$1 == null);
var inst_29498 = cljs.core.not.call(null,inst_29497);
var state_29542__$1 = (function (){var statearr_29580 = state_29542;
(statearr_29580[(28)] = inst_29491);

(statearr_29580[(16)] = inst_29495__$1);

return statearr_29580;
})();
if(inst_29498){
var statearr_29581_29654 = state_29542__$1;
(statearr_29581_29654[(1)] = (32));

} else {
var statearr_29582_29655 = state_29542__$1;
(statearr_29582_29655[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (44))){
var inst_29518 = (state_29542[(21)]);
var inst_29531 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29518);
var inst_29532 = cljs.core.pr_str.call(null,inst_29531);
var inst_29533 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29532)].join('');
var inst_29534 = figwheel.client.utils.log.call(null,inst_29533);
var state_29542__$1 = state_29542;
var statearr_29583_29656 = state_29542__$1;
(statearr_29583_29656[(2)] = inst_29534);

(statearr_29583_29656[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (6))){
var inst_29436 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29584_29657 = state_29542__$1;
(statearr_29584_29657[(2)] = inst_29436);

(statearr_29584_29657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (28))){
var inst_29461 = (state_29542[(26)]);
var inst_29488 = (state_29542[(2)]);
var inst_29489 = cljs.core.not_empty.call(null,inst_29461);
var state_29542__$1 = (function (){var statearr_29585 = state_29542;
(statearr_29585[(29)] = inst_29488);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29489)){
var statearr_29586_29658 = state_29542__$1;
(statearr_29586_29658[(1)] = (29));

} else {
var statearr_29587_29659 = state_29542__$1;
(statearr_29587_29659[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (25))){
var inst_29459 = (state_29542[(23)]);
var inst_29475 = (state_29542[(2)]);
var inst_29476 = cljs.core.not_empty.call(null,inst_29459);
var state_29542__$1 = (function (){var statearr_29588 = state_29542;
(statearr_29588[(30)] = inst_29475);

return statearr_29588;
})();
if(cljs.core.truth_(inst_29476)){
var statearr_29589_29660 = state_29542__$1;
(statearr_29589_29660[(1)] = (26));

} else {
var statearr_29590_29661 = state_29542__$1;
(statearr_29590_29661[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (34))){
var inst_29511 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29511)){
var statearr_29591_29662 = state_29542__$1;
(statearr_29591_29662[(1)] = (38));

} else {
var statearr_29592_29663 = state_29542__$1;
(statearr_29592_29663[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (17))){
var state_29542__$1 = state_29542;
var statearr_29593_29664 = state_29542__$1;
(statearr_29593_29664[(2)] = recompile_dependents);

(statearr_29593_29664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (3))){
var state_29542__$1 = state_29542;
var statearr_29594_29665 = state_29542__$1;
(statearr_29594_29665[(2)] = null);

(statearr_29594_29665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (12))){
var inst_29432 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29595_29666 = state_29542__$1;
(statearr_29595_29666[(2)] = inst_29432);

(statearr_29595_29666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (2))){
var inst_29394 = (state_29542[(13)]);
var inst_29401 = cljs.core.seq.call(null,inst_29394);
var inst_29402 = inst_29401;
var inst_29403 = null;
var inst_29404 = (0);
var inst_29405 = (0);
var state_29542__$1 = (function (){var statearr_29596 = state_29542;
(statearr_29596[(7)] = inst_29404);

(statearr_29596[(8)] = inst_29403);

(statearr_29596[(9)] = inst_29402);

(statearr_29596[(10)] = inst_29405);

return statearr_29596;
})();
var statearr_29597_29667 = state_29542__$1;
(statearr_29597_29667[(2)] = null);

(statearr_29597_29667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (23))){
var inst_29461 = (state_29542[(26)]);
var inst_29459 = (state_29542[(23)]);
var inst_29455 = (state_29542[(19)]);
var inst_29463 = (state_29542[(24)]);
var inst_29458 = (state_29542[(25)]);
var inst_29466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29468 = (function (){var all_files = inst_29455;
var res_SINGLEQUOTE_ = inst_29458;
var res = inst_29459;
var files_not_loaded = inst_29461;
var dependencies_that_loaded = inst_29463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29463,inst_29458,inst_29466,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29467){
var map__29598 = p__29467;
var map__29598__$1 = ((((!((map__29598 == null)))?(((((map__29598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29598):map__29598);
var request_url = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29463,inst_29458,inst_29466,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29469 = cljs.core.reverse.call(null,inst_29463);
var inst_29470 = cljs.core.map.call(null,inst_29468,inst_29469);
var inst_29471 = cljs.core.pr_str.call(null,inst_29470);
var inst_29472 = figwheel.client.utils.log.call(null,inst_29471);
var state_29542__$1 = (function (){var statearr_29600 = state_29542;
(statearr_29600[(31)] = inst_29466);

return statearr_29600;
})();
var statearr_29601_29668 = state_29542__$1;
(statearr_29601_29668[(2)] = inst_29472);

(statearr_29601_29668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (35))){
var state_29542__$1 = state_29542;
var statearr_29602_29669 = state_29542__$1;
(statearr_29602_29669[(2)] = true);

(statearr_29602_29669[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (19))){
var inst_29445 = (state_29542[(12)]);
var inst_29451 = figwheel.client.file_reloading.expand_files.call(null,inst_29445);
var state_29542__$1 = state_29542;
var statearr_29603_29670 = state_29542__$1;
(statearr_29603_29670[(2)] = inst_29451);

(statearr_29603_29670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (11))){
var state_29542__$1 = state_29542;
var statearr_29604_29671 = state_29542__$1;
(statearr_29604_29671[(2)] = null);

(statearr_29604_29671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (9))){
var inst_29434 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29605_29672 = state_29542__$1;
(statearr_29605_29672[(2)] = inst_29434);

(statearr_29605_29672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (5))){
var inst_29404 = (state_29542[(7)]);
var inst_29405 = (state_29542[(10)]);
var inst_29407 = (inst_29405 < inst_29404);
var inst_29408 = inst_29407;
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29408)){
var statearr_29606_29673 = state_29542__$1;
(statearr_29606_29673[(1)] = (7));

} else {
var statearr_29607_29674 = state_29542__$1;
(statearr_29607_29674[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (14))){
var inst_29415 = (state_29542[(22)]);
var inst_29424 = cljs.core.first.call(null,inst_29415);
var inst_29425 = figwheel.client.file_reloading.eval_body.call(null,inst_29424,opts);
var inst_29426 = cljs.core.next.call(null,inst_29415);
var inst_29402 = inst_29426;
var inst_29403 = null;
var inst_29404 = (0);
var inst_29405 = (0);
var state_29542__$1 = (function (){var statearr_29608 = state_29542;
(statearr_29608[(7)] = inst_29404);

(statearr_29608[(32)] = inst_29425);

(statearr_29608[(8)] = inst_29403);

(statearr_29608[(9)] = inst_29402);

(statearr_29608[(10)] = inst_29405);

return statearr_29608;
})();
var statearr_29609_29675 = state_29542__$1;
(statearr_29609_29675[(2)] = null);

(statearr_29609_29675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (45))){
var state_29542__$1 = state_29542;
var statearr_29610_29676 = state_29542__$1;
(statearr_29610_29676[(2)] = null);

(statearr_29610_29676[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (26))){
var inst_29461 = (state_29542[(26)]);
var inst_29459 = (state_29542[(23)]);
var inst_29455 = (state_29542[(19)]);
var inst_29463 = (state_29542[(24)]);
var inst_29458 = (state_29542[(25)]);
var inst_29478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29480 = (function (){var all_files = inst_29455;
var res_SINGLEQUOTE_ = inst_29458;
var res = inst_29459;
var files_not_loaded = inst_29461;
var dependencies_that_loaded = inst_29463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29463,inst_29458,inst_29478,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29479){
var map__29611 = p__29479;
var map__29611__$1 = ((((!((map__29611 == null)))?(((((map__29611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29611):map__29611);
var namespace = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29463,inst_29458,inst_29478,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29481 = cljs.core.map.call(null,inst_29480,inst_29459);
var inst_29482 = cljs.core.pr_str.call(null,inst_29481);
var inst_29483 = figwheel.client.utils.log.call(null,inst_29482);
var inst_29484 = (function (){var all_files = inst_29455;
var res_SINGLEQUOTE_ = inst_29458;
var res = inst_29459;
var files_not_loaded = inst_29461;
var dependencies_that_loaded = inst_29463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29463,inst_29458,inst_29478,inst_29480,inst_29481,inst_29482,inst_29483,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29461,inst_29459,inst_29455,inst_29463,inst_29458,inst_29478,inst_29480,inst_29481,inst_29482,inst_29483,state_val_29543,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29485 = setTimeout(inst_29484,(10));
var state_29542__$1 = (function (){var statearr_29613 = state_29542;
(statearr_29613[(33)] = inst_29478);

(statearr_29613[(34)] = inst_29483);

return statearr_29613;
})();
var statearr_29614_29677 = state_29542__$1;
(statearr_29614_29677[(2)] = inst_29485);

(statearr_29614_29677[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (16))){
var state_29542__$1 = state_29542;
var statearr_29615_29678 = state_29542__$1;
(statearr_29615_29678[(2)] = reload_dependents);

(statearr_29615_29678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (38))){
var inst_29495 = (state_29542[(16)]);
var inst_29513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29495);
var state_29542__$1 = state_29542;
var statearr_29616_29679 = state_29542__$1;
(statearr_29616_29679[(2)] = inst_29513);

(statearr_29616_29679[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (30))){
var state_29542__$1 = state_29542;
var statearr_29617_29680 = state_29542__$1;
(statearr_29617_29680[(2)] = null);

(statearr_29617_29680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (10))){
var inst_29415 = (state_29542[(22)]);
var inst_29417 = cljs.core.chunked_seq_QMARK_.call(null,inst_29415);
var state_29542__$1 = state_29542;
if(inst_29417){
var statearr_29618_29681 = state_29542__$1;
(statearr_29618_29681[(1)] = (13));

} else {
var statearr_29619_29682 = state_29542__$1;
(statearr_29619_29682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (18))){
var inst_29449 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29449)){
var statearr_29620_29683 = state_29542__$1;
(statearr_29620_29683[(1)] = (19));

} else {
var statearr_29621_29684 = state_29542__$1;
(statearr_29621_29684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (42))){
var state_29542__$1 = state_29542;
var statearr_29622_29685 = state_29542__$1;
(statearr_29622_29685[(2)] = null);

(statearr_29622_29685[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (37))){
var inst_29508 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29623_29686 = state_29542__$1;
(statearr_29623_29686[(2)] = inst_29508);

(statearr_29623_29686[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (8))){
var inst_29402 = (state_29542[(9)]);
var inst_29415 = (state_29542[(22)]);
var inst_29415__$1 = cljs.core.seq.call(null,inst_29402);
var state_29542__$1 = (function (){var statearr_29624 = state_29542;
(statearr_29624[(22)] = inst_29415__$1);

return statearr_29624;
})();
if(inst_29415__$1){
var statearr_29625_29687 = state_29542__$1;
(statearr_29625_29687[(1)] = (10));

} else {
var statearr_29626_29688 = state_29542__$1;
(statearr_29626_29688[(1)] = (11));

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
});})(c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26844__auto__,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto____0 = (function (){
var statearr_29627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29627[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto__);

(statearr_29627[(1)] = (1));

return statearr_29627;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto____1 = (function (state_29542){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_29542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e29628){if((e29628 instanceof Object)){
var ex__26848__auto__ = e29628;
var statearr_29629_29689 = state_29542;
(statearr_29629_29689[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29690 = state_29542;
state_29542 = G__29690;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto__ = function(state_29542){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto____1.call(this,state_29542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26936__auto__ = (function (){var statearr_29630 = f__26935__auto__.call(null);
(statearr_29630[(6)] = c__26934__auto__);

return statearr_29630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__,map__29387,map__29387__$1,opts,before_jsload,on_jsload,reload_dependents,map__29388,map__29388__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26934__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29693,link){
var map__29694 = p__29693;
var map__29694__$1 = ((((!((map__29694 == null)))?(((((map__29694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);
var file = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29694,map__29694__$1,file){
return (function (p1__29691_SHARP_,p2__29692_SHARP_){
if(cljs.core._EQ_.call(null,p1__29691_SHARP_,p2__29692_SHARP_)){
return p1__29691_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29694,map__29694__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29697){
var map__29698 = p__29697;
var map__29698__$1 = ((((!((map__29698 == null)))?(((((map__29698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);
var match_length = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29696_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29696_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29700_SHARP_,p2__29701_SHARP_){
return cljs.core.assoc.call(null,p1__29700_SHARP_,cljs.core.get.call(null,p2__29701_SHARP_,key),p2__29701_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29702 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29702);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29702);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29703,p__29704){
var map__29705 = p__29703;
var map__29705__$1 = ((((!((map__29705 == null)))?(((((map__29705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var on_cssload = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29706 = p__29704;
var map__29706__$1 = ((((!((map__29706 == null)))?(((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var files_msg = map__29706__$1;
var files = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545334058225
