// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26994 = arguments.length;
switch (G__26994) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26995 = (function (f,blockable,meta26996){
this.f = f;
this.blockable = blockable;
this.meta26996 = meta26996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26997,meta26996__$1){
var self__ = this;
var _26997__$1 = this;
return (new cljs.core.async.t_cljs$core$async26995(self__.f,self__.blockable,meta26996__$1));
});

cljs.core.async.t_cljs$core$async26995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26997){
var self__ = this;
var _26997__$1 = this;
return self__.meta26996;
});

cljs.core.async.t_cljs$core$async26995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26996","meta26996",-1827137872,null)], null);
});

cljs.core.async.t_cljs$core$async26995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26995";

cljs.core.async.t_cljs$core$async26995.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26995");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26995.
 */
cljs.core.async.__GT_t_cljs$core$async26995 = (function cljs$core$async$__GT_t_cljs$core$async26995(f__$1,blockable__$1,meta26996){
return (new cljs.core.async.t_cljs$core$async26995(f__$1,blockable__$1,meta26996));
});

}

return (new cljs.core.async.t_cljs$core$async26995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27001 = arguments.length;
switch (G__27001) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27004 = arguments.length;
switch (G__27004) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27007 = arguments.length;
switch (G__27007) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27009 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27009);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27009,ret){
return (function (){
return fn1.call(null,val_27009);
});})(val_27009,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27011 = arguments.length;
switch (G__27011) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27013 = n;
var x_27014 = (0);
while(true){
if((x_27014 < n__4376__auto___27013)){
(a[x_27014] = (0));

var G__27015 = (x_27014 + (1));
x_27014 = G__27015;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27016 = (i + (1));
i = G__27016;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27017 = (function (flag,meta27018){
this.flag = flag;
this.meta27018 = meta27018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27019,meta27018__$1){
var self__ = this;
var _27019__$1 = this;
return (new cljs.core.async.t_cljs$core$async27017(self__.flag,meta27018__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27019){
var self__ = this;
var _27019__$1 = this;
return self__.meta27018;
});})(flag))
;

cljs.core.async.t_cljs$core$async27017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27017.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27018","meta27018",1444427861,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27017";

cljs.core.async.t_cljs$core$async27017.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27017");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27017.
 */
cljs.core.async.__GT_t_cljs$core$async27017 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27017(flag__$1,meta27018){
return (new cljs.core.async.t_cljs$core$async27017(flag__$1,meta27018));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27017(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27020 = (function (flag,cb,meta27021){
this.flag = flag;
this.cb = cb;
this.meta27021 = meta27021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27022,meta27021__$1){
var self__ = this;
var _27022__$1 = this;
return (new cljs.core.async.t_cljs$core$async27020(self__.flag,self__.cb,meta27021__$1));
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27022){
var self__ = this;
var _27022__$1 = this;
return self__.meta27021;
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27021","meta27021",2117500531,null)], null);
});

cljs.core.async.t_cljs$core$async27020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27020";

cljs.core.async.t_cljs$core$async27020.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27020");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27020.
 */
cljs.core.async.__GT_t_cljs$core$async27020 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27020(flag__$1,cb__$1,meta27021){
return (new cljs.core.async.t_cljs$core$async27020(flag__$1,cb__$1,meta27021));
});

}

return (new cljs.core.async.t_cljs$core$async27020(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27023_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27023_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27024_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27024_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27025 = (i + (1));
i = G__27025;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27031 = arguments.length;
var i__4500__auto___27032 = (0);
while(true){
if((i__4500__auto___27032 < len__4499__auto___27031)){
args__4502__auto__.push((arguments[i__4500__auto___27032]));

var G__27033 = (i__4500__auto___27032 + (1));
i__4500__auto___27032 = G__27033;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27028){
var map__27029 = p__27028;
var map__27029__$1 = ((((!((map__27029 == null)))?(((((map__27029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27029):map__27029);
var opts = map__27029__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27026){
var G__27027 = cljs.core.first.call(null,seq27026);
var seq27026__$1 = cljs.core.next.call(null,seq27026);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27027,seq27026__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27035 = arguments.length;
switch (G__27035) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26934__auto___27081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___27081){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___27081){
return (function (state_27059){
var state_val_27060 = (state_27059[(1)]);
if((state_val_27060 === (7))){
var inst_27055 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27061_27082 = state_27059__$1;
(statearr_27061_27082[(2)] = inst_27055);

(statearr_27061_27082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (1))){
var state_27059__$1 = state_27059;
var statearr_27062_27083 = state_27059__$1;
(statearr_27062_27083[(2)] = null);

(statearr_27062_27083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (4))){
var inst_27038 = (state_27059[(7)]);
var inst_27038__$1 = (state_27059[(2)]);
var inst_27039 = (inst_27038__$1 == null);
var state_27059__$1 = (function (){var statearr_27063 = state_27059;
(statearr_27063[(7)] = inst_27038__$1);

return statearr_27063;
})();
if(cljs.core.truth_(inst_27039)){
var statearr_27064_27084 = state_27059__$1;
(statearr_27064_27084[(1)] = (5));

} else {
var statearr_27065_27085 = state_27059__$1;
(statearr_27065_27085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (13))){
var state_27059__$1 = state_27059;
var statearr_27066_27086 = state_27059__$1;
(statearr_27066_27086[(2)] = null);

(statearr_27066_27086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (6))){
var inst_27038 = (state_27059[(7)]);
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27059__$1,(11),to,inst_27038);
} else {
if((state_val_27060 === (3))){
var inst_27057 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27059__$1,inst_27057);
} else {
if((state_val_27060 === (12))){
var state_27059__$1 = state_27059;
var statearr_27067_27087 = state_27059__$1;
(statearr_27067_27087[(2)] = null);

(statearr_27067_27087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (2))){
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27059__$1,(4),from);
} else {
if((state_val_27060 === (11))){
var inst_27048 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
if(cljs.core.truth_(inst_27048)){
var statearr_27068_27088 = state_27059__$1;
(statearr_27068_27088[(1)] = (12));

} else {
var statearr_27069_27089 = state_27059__$1;
(statearr_27069_27089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (9))){
var state_27059__$1 = state_27059;
var statearr_27070_27090 = state_27059__$1;
(statearr_27070_27090[(2)] = null);

(statearr_27070_27090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (5))){
var state_27059__$1 = state_27059;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27071_27091 = state_27059__$1;
(statearr_27071_27091[(1)] = (8));

} else {
var statearr_27072_27092 = state_27059__$1;
(statearr_27072_27092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (14))){
var inst_27053 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27073_27093 = state_27059__$1;
(statearr_27073_27093[(2)] = inst_27053);

(statearr_27073_27093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (10))){
var inst_27045 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27074_27094 = state_27059__$1;
(statearr_27074_27094[(2)] = inst_27045);

(statearr_27074_27094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (8))){
var inst_27042 = cljs.core.async.close_BANG_.call(null,to);
var state_27059__$1 = state_27059;
var statearr_27075_27095 = state_27059__$1;
(statearr_27075_27095[(2)] = inst_27042);

(statearr_27075_27095[(1)] = (10));


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
});})(c__26934__auto___27081))
;
return ((function (switch__26844__auto__,c__26934__auto___27081){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_27076 = [null,null,null,null,null,null,null,null];
(statearr_27076[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_27076[(1)] = (1));

return statearr_27076;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_27059){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27077){if((e27077 instanceof Object)){
var ex__26848__auto__ = e27077;
var statearr_27078_27096 = state_27059;
(statearr_27078_27096[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27097 = state_27059;
state_27059 = G__27097;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_27059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_27059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___27081))
})();
var state__26936__auto__ = (function (){var statearr_27079 = f__26935__auto__.call(null);
(statearr_27079[(6)] = c__26934__auto___27081);

return statearr_27079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___27081))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27098){
var vec__27099 = p__27098;
var v = cljs.core.nth.call(null,vec__27099,(0),null);
var p = cljs.core.nth.call(null,vec__27099,(1),null);
var job = vec__27099;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26934__auto___27270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___27270,res,vec__27099,v,p,job,jobs,results){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___27270,res,vec__27099,v,p,job,jobs,results){
return (function (state_27106){
var state_val_27107 = (state_27106[(1)]);
if((state_val_27107 === (1))){
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27106__$1,(2),res,v);
} else {
if((state_val_27107 === (2))){
var inst_27103 = (state_27106[(2)]);
var inst_27104 = cljs.core.async.close_BANG_.call(null,res);
var state_27106__$1 = (function (){var statearr_27108 = state_27106;
(statearr_27108[(7)] = inst_27103);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27106__$1,inst_27104);
} else {
return null;
}
}
});})(c__26934__auto___27270,res,vec__27099,v,p,job,jobs,results))
;
return ((function (switch__26844__auto__,c__26934__auto___27270,res,vec__27099,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0 = (function (){
var statearr_27109 = [null,null,null,null,null,null,null,null];
(statearr_27109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__);

(statearr_27109[(1)] = (1));

return statearr_27109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1 = (function (state_27106){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27110){if((e27110 instanceof Object)){
var ex__26848__auto__ = e27110;
var statearr_27111_27271 = state_27106;
(statearr_27111_27271[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27272 = state_27106;
state_27106 = G__27272;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = function(state_27106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1.call(this,state_27106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___27270,res,vec__27099,v,p,job,jobs,results))
})();
var state__26936__auto__ = (function (){var statearr_27112 = f__26935__auto__.call(null);
(statearr_27112[(6)] = c__26934__auto___27270);

return statearr_27112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___27270,res,vec__27099,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27113){
var vec__27114 = p__27113;
var v = cljs.core.nth.call(null,vec__27114,(0),null);
var p = cljs.core.nth.call(null,vec__27114,(1),null);
var job = vec__27114;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27273 = n;
var __27274 = (0);
while(true){
if((__27274 < n__4376__auto___27273)){
var G__27117_27275 = type;
var G__27117_27276__$1 = (((G__27117_27275 instanceof cljs.core.Keyword))?G__27117_27275.fqn:null);
switch (G__27117_27276__$1) {
case "compute":
var c__26934__auto___27278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27274,c__26934__auto___27278,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (__27274,c__26934__auto___27278,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async){
return (function (state_27130){
var state_val_27131 = (state_27130[(1)]);
if((state_val_27131 === (1))){
var state_27130__$1 = state_27130;
var statearr_27132_27279 = state_27130__$1;
(statearr_27132_27279[(2)] = null);

(statearr_27132_27279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (2))){
var state_27130__$1 = state_27130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27130__$1,(4),jobs);
} else {
if((state_val_27131 === (3))){
var inst_27128 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27130__$1,inst_27128);
} else {
if((state_val_27131 === (4))){
var inst_27120 = (state_27130[(2)]);
var inst_27121 = process.call(null,inst_27120);
var state_27130__$1 = state_27130;
if(cljs.core.truth_(inst_27121)){
var statearr_27133_27280 = state_27130__$1;
(statearr_27133_27280[(1)] = (5));

} else {
var statearr_27134_27281 = state_27130__$1;
(statearr_27134_27281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (5))){
var state_27130__$1 = state_27130;
var statearr_27135_27282 = state_27130__$1;
(statearr_27135_27282[(2)] = null);

(statearr_27135_27282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (6))){
var state_27130__$1 = state_27130;
var statearr_27136_27283 = state_27130__$1;
(statearr_27136_27283[(2)] = null);

(statearr_27136_27283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (7))){
var inst_27126 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27137_27284 = state_27130__$1;
(statearr_27137_27284[(2)] = inst_27126);

(statearr_27137_27284[(1)] = (3));


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
});})(__27274,c__26934__auto___27278,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async))
;
return ((function (__27274,switch__26844__auto__,c__26934__auto___27278,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0 = (function (){
var statearr_27138 = [null,null,null,null,null,null,null];
(statearr_27138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__);

(statearr_27138[(1)] = (1));

return statearr_27138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1 = (function (state_27130){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object)){
var ex__26848__auto__ = e27139;
var statearr_27140_27285 = state_27130;
(statearr_27140_27285[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27286 = state_27130;
state_27130 = G__27286;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = function(state_27130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1.call(this,state_27130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__;
})()
;})(__27274,switch__26844__auto__,c__26934__auto___27278,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async))
})();
var state__26936__auto__ = (function (){var statearr_27141 = f__26935__auto__.call(null);
(statearr_27141[(6)] = c__26934__auto___27278);

return statearr_27141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(__27274,c__26934__auto___27278,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async))
);


break;
case "async":
var c__26934__auto___27287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27274,c__26934__auto___27287,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (__27274,c__26934__auto___27287,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async){
return (function (state_27154){
var state_val_27155 = (state_27154[(1)]);
if((state_val_27155 === (1))){
var state_27154__$1 = state_27154;
var statearr_27156_27288 = state_27154__$1;
(statearr_27156_27288[(2)] = null);

(statearr_27156_27288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27155 === (2))){
var state_27154__$1 = state_27154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27154__$1,(4),jobs);
} else {
if((state_val_27155 === (3))){
var inst_27152 = (state_27154[(2)]);
var state_27154__$1 = state_27154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27154__$1,inst_27152);
} else {
if((state_val_27155 === (4))){
var inst_27144 = (state_27154[(2)]);
var inst_27145 = async.call(null,inst_27144);
var state_27154__$1 = state_27154;
if(cljs.core.truth_(inst_27145)){
var statearr_27157_27289 = state_27154__$1;
(statearr_27157_27289[(1)] = (5));

} else {
var statearr_27158_27290 = state_27154__$1;
(statearr_27158_27290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27155 === (5))){
var state_27154__$1 = state_27154;
var statearr_27159_27291 = state_27154__$1;
(statearr_27159_27291[(2)] = null);

(statearr_27159_27291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27155 === (6))){
var state_27154__$1 = state_27154;
var statearr_27160_27292 = state_27154__$1;
(statearr_27160_27292[(2)] = null);

(statearr_27160_27292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27155 === (7))){
var inst_27150 = (state_27154[(2)]);
var state_27154__$1 = state_27154;
var statearr_27161_27293 = state_27154__$1;
(statearr_27161_27293[(2)] = inst_27150);

(statearr_27161_27293[(1)] = (3));


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
});})(__27274,c__26934__auto___27287,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async))
;
return ((function (__27274,switch__26844__auto__,c__26934__auto___27287,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0 = (function (){
var statearr_27162 = [null,null,null,null,null,null,null];
(statearr_27162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__);

(statearr_27162[(1)] = (1));

return statearr_27162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1 = (function (state_27154){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27163){if((e27163 instanceof Object)){
var ex__26848__auto__ = e27163;
var statearr_27164_27294 = state_27154;
(statearr_27164_27294[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27154;
state_27154 = G__27295;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = function(state_27154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1.call(this,state_27154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__;
})()
;})(__27274,switch__26844__auto__,c__26934__auto___27287,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async))
})();
var state__26936__auto__ = (function (){var statearr_27165 = f__26935__auto__.call(null);
(statearr_27165[(6)] = c__26934__auto___27287);

return statearr_27165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(__27274,c__26934__auto___27287,G__27117_27275,G__27117_27276__$1,n__4376__auto___27273,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27117_27276__$1)].join('')));

}

var G__27296 = (__27274 + (1));
__27274 = G__27296;
continue;
} else {
}
break;
}

var c__26934__auto___27297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___27297,jobs,results,process,async){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___27297,jobs,results,process,async){
return (function (state_27187){
var state_val_27188 = (state_27187[(1)]);
if((state_val_27188 === (1))){
var state_27187__$1 = state_27187;
var statearr_27189_27298 = state_27187__$1;
(statearr_27189_27298[(2)] = null);

(statearr_27189_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (2))){
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(4),from);
} else {
if((state_val_27188 === (3))){
var inst_27185 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27187__$1,inst_27185);
} else {
if((state_val_27188 === (4))){
var inst_27168 = (state_27187[(7)]);
var inst_27168__$1 = (state_27187[(2)]);
var inst_27169 = (inst_27168__$1 == null);
var state_27187__$1 = (function (){var statearr_27190 = state_27187;
(statearr_27190[(7)] = inst_27168__$1);

return statearr_27190;
})();
if(cljs.core.truth_(inst_27169)){
var statearr_27191_27299 = state_27187__$1;
(statearr_27191_27299[(1)] = (5));

} else {
var statearr_27192_27300 = state_27187__$1;
(statearr_27192_27300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (5))){
var inst_27171 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27187__$1 = state_27187;
var statearr_27193_27301 = state_27187__$1;
(statearr_27193_27301[(2)] = inst_27171);

(statearr_27193_27301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (6))){
var inst_27173 = (state_27187[(8)]);
var inst_27168 = (state_27187[(7)]);
var inst_27173__$1 = cljs.core.async.chan.call(null,(1));
var inst_27174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27175 = [inst_27168,inst_27173__$1];
var inst_27176 = (new cljs.core.PersistentVector(null,2,(5),inst_27174,inst_27175,null));
var state_27187__$1 = (function (){var statearr_27194 = state_27187;
(statearr_27194[(8)] = inst_27173__$1);

return statearr_27194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27187__$1,(8),jobs,inst_27176);
} else {
if((state_val_27188 === (7))){
var inst_27183 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27195_27302 = state_27187__$1;
(statearr_27195_27302[(2)] = inst_27183);

(statearr_27195_27302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (8))){
var inst_27173 = (state_27187[(8)]);
var inst_27178 = (state_27187[(2)]);
var state_27187__$1 = (function (){var statearr_27196 = state_27187;
(statearr_27196[(9)] = inst_27178);

return statearr_27196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27187__$1,(9),results,inst_27173);
} else {
if((state_val_27188 === (9))){
var inst_27180 = (state_27187[(2)]);
var state_27187__$1 = (function (){var statearr_27197 = state_27187;
(statearr_27197[(10)] = inst_27180);

return statearr_27197;
})();
var statearr_27198_27303 = state_27187__$1;
(statearr_27198_27303[(2)] = null);

(statearr_27198_27303[(1)] = (2));


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
});})(c__26934__auto___27297,jobs,results,process,async))
;
return ((function (switch__26844__auto__,c__26934__auto___27297,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0 = (function (){
var statearr_27199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__);

(statearr_27199[(1)] = (1));

return statearr_27199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1 = (function (state_27187){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27200){if((e27200 instanceof Object)){
var ex__26848__auto__ = e27200;
var statearr_27201_27304 = state_27187;
(statearr_27201_27304[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27305 = state_27187;
state_27187 = G__27305;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = function(state_27187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1.call(this,state_27187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___27297,jobs,results,process,async))
})();
var state__26936__auto__ = (function (){var statearr_27202 = f__26935__auto__.call(null);
(statearr_27202[(6)] = c__26934__auto___27297);

return statearr_27202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___27297,jobs,results,process,async))
);


var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__,jobs,results,process,async){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__,jobs,results,process,async){
return (function (state_27240){
var state_val_27241 = (state_27240[(1)]);
if((state_val_27241 === (7))){
var inst_27236 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
var statearr_27242_27306 = state_27240__$1;
(statearr_27242_27306[(2)] = inst_27236);

(statearr_27242_27306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (20))){
var state_27240__$1 = state_27240;
var statearr_27243_27307 = state_27240__$1;
(statearr_27243_27307[(2)] = null);

(statearr_27243_27307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (1))){
var state_27240__$1 = state_27240;
var statearr_27244_27308 = state_27240__$1;
(statearr_27244_27308[(2)] = null);

(statearr_27244_27308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (4))){
var inst_27205 = (state_27240[(7)]);
var inst_27205__$1 = (state_27240[(2)]);
var inst_27206 = (inst_27205__$1 == null);
var state_27240__$1 = (function (){var statearr_27245 = state_27240;
(statearr_27245[(7)] = inst_27205__$1);

return statearr_27245;
})();
if(cljs.core.truth_(inst_27206)){
var statearr_27246_27309 = state_27240__$1;
(statearr_27246_27309[(1)] = (5));

} else {
var statearr_27247_27310 = state_27240__$1;
(statearr_27247_27310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (15))){
var inst_27218 = (state_27240[(8)]);
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27240__$1,(18),to,inst_27218);
} else {
if((state_val_27241 === (21))){
var inst_27231 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
var statearr_27248_27311 = state_27240__$1;
(statearr_27248_27311[(2)] = inst_27231);

(statearr_27248_27311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (13))){
var inst_27233 = (state_27240[(2)]);
var state_27240__$1 = (function (){var statearr_27249 = state_27240;
(statearr_27249[(9)] = inst_27233);

return statearr_27249;
})();
var statearr_27250_27312 = state_27240__$1;
(statearr_27250_27312[(2)] = null);

(statearr_27250_27312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (6))){
var inst_27205 = (state_27240[(7)]);
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27240__$1,(11),inst_27205);
} else {
if((state_val_27241 === (17))){
var inst_27226 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
if(cljs.core.truth_(inst_27226)){
var statearr_27251_27313 = state_27240__$1;
(statearr_27251_27313[(1)] = (19));

} else {
var statearr_27252_27314 = state_27240__$1;
(statearr_27252_27314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (3))){
var inst_27238 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27240__$1,inst_27238);
} else {
if((state_val_27241 === (12))){
var inst_27215 = (state_27240[(10)]);
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27240__$1,(14),inst_27215);
} else {
if((state_val_27241 === (2))){
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27240__$1,(4),results);
} else {
if((state_val_27241 === (19))){
var state_27240__$1 = state_27240;
var statearr_27253_27315 = state_27240__$1;
(statearr_27253_27315[(2)] = null);

(statearr_27253_27315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (11))){
var inst_27215 = (state_27240[(2)]);
var state_27240__$1 = (function (){var statearr_27254 = state_27240;
(statearr_27254[(10)] = inst_27215);

return statearr_27254;
})();
var statearr_27255_27316 = state_27240__$1;
(statearr_27255_27316[(2)] = null);

(statearr_27255_27316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (9))){
var state_27240__$1 = state_27240;
var statearr_27256_27317 = state_27240__$1;
(statearr_27256_27317[(2)] = null);

(statearr_27256_27317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (5))){
var state_27240__$1 = state_27240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27257_27318 = state_27240__$1;
(statearr_27257_27318[(1)] = (8));

} else {
var statearr_27258_27319 = state_27240__$1;
(statearr_27258_27319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (14))){
var inst_27218 = (state_27240[(8)]);
var inst_27220 = (state_27240[(11)]);
var inst_27218__$1 = (state_27240[(2)]);
var inst_27219 = (inst_27218__$1 == null);
var inst_27220__$1 = cljs.core.not.call(null,inst_27219);
var state_27240__$1 = (function (){var statearr_27259 = state_27240;
(statearr_27259[(8)] = inst_27218__$1);

(statearr_27259[(11)] = inst_27220__$1);

return statearr_27259;
})();
if(inst_27220__$1){
var statearr_27260_27320 = state_27240__$1;
(statearr_27260_27320[(1)] = (15));

} else {
var statearr_27261_27321 = state_27240__$1;
(statearr_27261_27321[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (16))){
var inst_27220 = (state_27240[(11)]);
var state_27240__$1 = state_27240;
var statearr_27262_27322 = state_27240__$1;
(statearr_27262_27322[(2)] = inst_27220);

(statearr_27262_27322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (10))){
var inst_27212 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
var statearr_27263_27323 = state_27240__$1;
(statearr_27263_27323[(2)] = inst_27212);

(statearr_27263_27323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (18))){
var inst_27223 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
var statearr_27264_27324 = state_27240__$1;
(statearr_27264_27324[(2)] = inst_27223);

(statearr_27264_27324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (8))){
var inst_27209 = cljs.core.async.close_BANG_.call(null,to);
var state_27240__$1 = state_27240;
var statearr_27265_27325 = state_27240__$1;
(statearr_27265_27325[(2)] = inst_27209);

(statearr_27265_27325[(1)] = (10));


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
});})(c__26934__auto__,jobs,results,process,async))
;
return ((function (switch__26844__auto__,c__26934__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0 = (function (){
var statearr_27266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__);

(statearr_27266[(1)] = (1));

return statearr_27266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1 = (function (state_27240){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27267){if((e27267 instanceof Object)){
var ex__26848__auto__ = e27267;
var statearr_27268_27326 = state_27240;
(statearr_27268_27326[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27327 = state_27240;
state_27240 = G__27327;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__ = function(state_27240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1.call(this,state_27240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__,jobs,results,process,async))
})();
var state__26936__auto__ = (function (){var statearr_27269 = f__26935__auto__.call(null);
(statearr_27269[(6)] = c__26934__auto__);

return statearr_27269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__,jobs,results,process,async))
);

return c__26934__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27329 = arguments.length;
switch (G__27329) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27332 = arguments.length;
switch (G__27332) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27335 = arguments.length;
switch (G__27335) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26934__auto___27384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___27384,tc,fc){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___27384,tc,fc){
return (function (state_27361){
var state_val_27362 = (state_27361[(1)]);
if((state_val_27362 === (7))){
var inst_27357 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27363_27385 = state_27361__$1;
(statearr_27363_27385[(2)] = inst_27357);

(statearr_27363_27385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (1))){
var state_27361__$1 = state_27361;
var statearr_27364_27386 = state_27361__$1;
(statearr_27364_27386[(2)] = null);

(statearr_27364_27386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (4))){
var inst_27338 = (state_27361[(7)]);
var inst_27338__$1 = (state_27361[(2)]);
var inst_27339 = (inst_27338__$1 == null);
var state_27361__$1 = (function (){var statearr_27365 = state_27361;
(statearr_27365[(7)] = inst_27338__$1);

return statearr_27365;
})();
if(cljs.core.truth_(inst_27339)){
var statearr_27366_27387 = state_27361__$1;
(statearr_27366_27387[(1)] = (5));

} else {
var statearr_27367_27388 = state_27361__$1;
(statearr_27367_27388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (13))){
var state_27361__$1 = state_27361;
var statearr_27368_27389 = state_27361__$1;
(statearr_27368_27389[(2)] = null);

(statearr_27368_27389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (6))){
var inst_27338 = (state_27361[(7)]);
var inst_27344 = p.call(null,inst_27338);
var state_27361__$1 = state_27361;
if(cljs.core.truth_(inst_27344)){
var statearr_27369_27390 = state_27361__$1;
(statearr_27369_27390[(1)] = (9));

} else {
var statearr_27370_27391 = state_27361__$1;
(statearr_27370_27391[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (3))){
var inst_27359 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27361__$1,inst_27359);
} else {
if((state_val_27362 === (12))){
var state_27361__$1 = state_27361;
var statearr_27371_27392 = state_27361__$1;
(statearr_27371_27392[(2)] = null);

(statearr_27371_27392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (2))){
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27361__$1,(4),ch);
} else {
if((state_val_27362 === (11))){
var inst_27338 = (state_27361[(7)]);
var inst_27348 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27361__$1,(8),inst_27348,inst_27338);
} else {
if((state_val_27362 === (9))){
var state_27361__$1 = state_27361;
var statearr_27372_27393 = state_27361__$1;
(statearr_27372_27393[(2)] = tc);

(statearr_27372_27393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (5))){
var inst_27341 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27342 = cljs.core.async.close_BANG_.call(null,fc);
var state_27361__$1 = (function (){var statearr_27373 = state_27361;
(statearr_27373[(8)] = inst_27341);

return statearr_27373;
})();
var statearr_27374_27394 = state_27361__$1;
(statearr_27374_27394[(2)] = inst_27342);

(statearr_27374_27394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (14))){
var inst_27355 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27375_27395 = state_27361__$1;
(statearr_27375_27395[(2)] = inst_27355);

(statearr_27375_27395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (10))){
var state_27361__$1 = state_27361;
var statearr_27376_27396 = state_27361__$1;
(statearr_27376_27396[(2)] = fc);

(statearr_27376_27396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (8))){
var inst_27350 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
if(cljs.core.truth_(inst_27350)){
var statearr_27377_27397 = state_27361__$1;
(statearr_27377_27397[(1)] = (12));

} else {
var statearr_27378_27398 = state_27361__$1;
(statearr_27378_27398[(1)] = (13));

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
});})(c__26934__auto___27384,tc,fc))
;
return ((function (switch__26844__auto__,c__26934__auto___27384,tc,fc){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_27379 = [null,null,null,null,null,null,null,null,null];
(statearr_27379[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_27379[(1)] = (1));

return statearr_27379;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_27361){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27380){if((e27380 instanceof Object)){
var ex__26848__auto__ = e27380;
var statearr_27381_27399 = state_27361;
(statearr_27381_27399[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_27361;
state_27361 = G__27400;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_27361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_27361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___27384,tc,fc))
})();
var state__26936__auto__ = (function (){var statearr_27382 = f__26935__auto__.call(null);
(statearr_27382[(6)] = c__26934__auto___27384);

return statearr_27382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___27384,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__){
return (function (state_27421){
var state_val_27422 = (state_27421[(1)]);
if((state_val_27422 === (7))){
var inst_27417 = (state_27421[(2)]);
var state_27421__$1 = state_27421;
var statearr_27423_27441 = state_27421__$1;
(statearr_27423_27441[(2)] = inst_27417);

(statearr_27423_27441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (1))){
var inst_27401 = init;
var state_27421__$1 = (function (){var statearr_27424 = state_27421;
(statearr_27424[(7)] = inst_27401);

return statearr_27424;
})();
var statearr_27425_27442 = state_27421__$1;
(statearr_27425_27442[(2)] = null);

(statearr_27425_27442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (4))){
var inst_27404 = (state_27421[(8)]);
var inst_27404__$1 = (state_27421[(2)]);
var inst_27405 = (inst_27404__$1 == null);
var state_27421__$1 = (function (){var statearr_27426 = state_27421;
(statearr_27426[(8)] = inst_27404__$1);

return statearr_27426;
})();
if(cljs.core.truth_(inst_27405)){
var statearr_27427_27443 = state_27421__$1;
(statearr_27427_27443[(1)] = (5));

} else {
var statearr_27428_27444 = state_27421__$1;
(statearr_27428_27444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (6))){
var inst_27408 = (state_27421[(9)]);
var inst_27404 = (state_27421[(8)]);
var inst_27401 = (state_27421[(7)]);
var inst_27408__$1 = f.call(null,inst_27401,inst_27404);
var inst_27409 = cljs.core.reduced_QMARK_.call(null,inst_27408__$1);
var state_27421__$1 = (function (){var statearr_27429 = state_27421;
(statearr_27429[(9)] = inst_27408__$1);

return statearr_27429;
})();
if(inst_27409){
var statearr_27430_27445 = state_27421__$1;
(statearr_27430_27445[(1)] = (8));

} else {
var statearr_27431_27446 = state_27421__$1;
(statearr_27431_27446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (3))){
var inst_27419 = (state_27421[(2)]);
var state_27421__$1 = state_27421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27421__$1,inst_27419);
} else {
if((state_val_27422 === (2))){
var state_27421__$1 = state_27421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27421__$1,(4),ch);
} else {
if((state_val_27422 === (9))){
var inst_27408 = (state_27421[(9)]);
var inst_27401 = inst_27408;
var state_27421__$1 = (function (){var statearr_27432 = state_27421;
(statearr_27432[(7)] = inst_27401);

return statearr_27432;
})();
var statearr_27433_27447 = state_27421__$1;
(statearr_27433_27447[(2)] = null);

(statearr_27433_27447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (5))){
var inst_27401 = (state_27421[(7)]);
var state_27421__$1 = state_27421;
var statearr_27434_27448 = state_27421__$1;
(statearr_27434_27448[(2)] = inst_27401);

(statearr_27434_27448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (10))){
var inst_27415 = (state_27421[(2)]);
var state_27421__$1 = state_27421;
var statearr_27435_27449 = state_27421__$1;
(statearr_27435_27449[(2)] = inst_27415);

(statearr_27435_27449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27422 === (8))){
var inst_27408 = (state_27421[(9)]);
var inst_27411 = cljs.core.deref.call(null,inst_27408);
var state_27421__$1 = state_27421;
var statearr_27436_27450 = state_27421__$1;
(statearr_27436_27450[(2)] = inst_27411);

(statearr_27436_27450[(1)] = (10));


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
});})(c__26934__auto__))
;
return ((function (switch__26844__auto__,c__26934__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26845__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26845__auto____0 = (function (){
var statearr_27437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27437[(0)] = cljs$core$async$reduce_$_state_machine__26845__auto__);

(statearr_27437[(1)] = (1));

return statearr_27437;
});
var cljs$core$async$reduce_$_state_machine__26845__auto____1 = (function (state_27421){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27438){if((e27438 instanceof Object)){
var ex__26848__auto__ = e27438;
var statearr_27439_27451 = state_27421;
(statearr_27439_27451[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27452 = state_27421;
state_27421 = G__27452;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26845__auto__ = function(state_27421){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26845__auto____1.call(this,state_27421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26845__auto____0;
cljs$core$async$reduce_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26845__auto____1;
return cljs$core$async$reduce_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__))
})();
var state__26936__auto__ = (function (){var statearr_27440 = f__26935__auto__.call(null);
(statearr_27440[(6)] = c__26934__auto__);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__))
);

return c__26934__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__,f__$1){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__,f__$1){
return (function (state_27458){
var state_val_27459 = (state_27458[(1)]);
if((state_val_27459 === (1))){
var inst_27453 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27458__$1 = state_27458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27458__$1,(2),inst_27453);
} else {
if((state_val_27459 === (2))){
var inst_27455 = (state_27458[(2)]);
var inst_27456 = f__$1.call(null,inst_27455);
var state_27458__$1 = state_27458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27458__$1,inst_27456);
} else {
return null;
}
}
});})(c__26934__auto__,f__$1))
;
return ((function (switch__26844__auto__,c__26934__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26845__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26845__auto____0 = (function (){
var statearr_27460 = [null,null,null,null,null,null,null];
(statearr_27460[(0)] = cljs$core$async$transduce_$_state_machine__26845__auto__);

(statearr_27460[(1)] = (1));

return statearr_27460;
});
var cljs$core$async$transduce_$_state_machine__26845__auto____1 = (function (state_27458){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27461){if((e27461 instanceof Object)){
var ex__26848__auto__ = e27461;
var statearr_27462_27464 = state_27458;
(statearr_27462_27464[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27465 = state_27458;
state_27458 = G__27465;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26845__auto__ = function(state_27458){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26845__auto____1.call(this,state_27458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26845__auto____0;
cljs$core$async$transduce_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26845__auto____1;
return cljs$core$async$transduce_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__,f__$1))
})();
var state__26936__auto__ = (function (){var statearr_27463 = f__26935__auto__.call(null);
(statearr_27463[(6)] = c__26934__auto__);

return statearr_27463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__,f__$1))
);

return c__26934__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27467 = arguments.length;
switch (G__27467) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__){
return (function (state_27492){
var state_val_27493 = (state_27492[(1)]);
if((state_val_27493 === (7))){
var inst_27474 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27494_27515 = state_27492__$1;
(statearr_27494_27515[(2)] = inst_27474);

(statearr_27494_27515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (1))){
var inst_27468 = cljs.core.seq.call(null,coll);
var inst_27469 = inst_27468;
var state_27492__$1 = (function (){var statearr_27495 = state_27492;
(statearr_27495[(7)] = inst_27469);

return statearr_27495;
})();
var statearr_27496_27516 = state_27492__$1;
(statearr_27496_27516[(2)] = null);

(statearr_27496_27516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (4))){
var inst_27469 = (state_27492[(7)]);
var inst_27472 = cljs.core.first.call(null,inst_27469);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27492__$1,(7),ch,inst_27472);
} else {
if((state_val_27493 === (13))){
var inst_27486 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27497_27517 = state_27492__$1;
(statearr_27497_27517[(2)] = inst_27486);

(statearr_27497_27517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (6))){
var inst_27477 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27477)){
var statearr_27498_27518 = state_27492__$1;
(statearr_27498_27518[(1)] = (8));

} else {
var statearr_27499_27519 = state_27492__$1;
(statearr_27499_27519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (3))){
var inst_27490 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27492__$1,inst_27490);
} else {
if((state_val_27493 === (12))){
var state_27492__$1 = state_27492;
var statearr_27500_27520 = state_27492__$1;
(statearr_27500_27520[(2)] = null);

(statearr_27500_27520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (2))){
var inst_27469 = (state_27492[(7)]);
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27469)){
var statearr_27501_27521 = state_27492__$1;
(statearr_27501_27521[(1)] = (4));

} else {
var statearr_27502_27522 = state_27492__$1;
(statearr_27502_27522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (11))){
var inst_27483 = cljs.core.async.close_BANG_.call(null,ch);
var state_27492__$1 = state_27492;
var statearr_27503_27523 = state_27492__$1;
(statearr_27503_27523[(2)] = inst_27483);

(statearr_27503_27523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (9))){
var state_27492__$1 = state_27492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27504_27524 = state_27492__$1;
(statearr_27504_27524[(1)] = (11));

} else {
var statearr_27505_27525 = state_27492__$1;
(statearr_27505_27525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (5))){
var inst_27469 = (state_27492[(7)]);
var state_27492__$1 = state_27492;
var statearr_27506_27526 = state_27492__$1;
(statearr_27506_27526[(2)] = inst_27469);

(statearr_27506_27526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (10))){
var inst_27488 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27507_27527 = state_27492__$1;
(statearr_27507_27527[(2)] = inst_27488);

(statearr_27507_27527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (8))){
var inst_27469 = (state_27492[(7)]);
var inst_27479 = cljs.core.next.call(null,inst_27469);
var inst_27469__$1 = inst_27479;
var state_27492__$1 = (function (){var statearr_27508 = state_27492;
(statearr_27508[(7)] = inst_27469__$1);

return statearr_27508;
})();
var statearr_27509_27528 = state_27492__$1;
(statearr_27509_27528[(2)] = null);

(statearr_27509_27528[(1)] = (2));


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
});})(c__26934__auto__))
;
return ((function (switch__26844__auto__,c__26934__auto__){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_27510 = [null,null,null,null,null,null,null,null];
(statearr_27510[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_27510[(1)] = (1));

return statearr_27510;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_27492){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27511){if((e27511 instanceof Object)){
var ex__26848__auto__ = e27511;
var statearr_27512_27529 = state_27492;
(statearr_27512_27529[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27530 = state_27492;
state_27492 = G__27530;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__))
})();
var state__26936__auto__ = (function (){var statearr_27513 = f__26935__auto__.call(null);
(statearr_27513[(6)] = c__26934__auto__);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__))
);

return c__26934__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27531 = (function (ch,cs,meta27532){
this.ch = ch;
this.cs = cs;
this.meta27532 = meta27532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27533,meta27532__$1){
var self__ = this;
var _27533__$1 = this;
return (new cljs.core.async.t_cljs$core$async27531(self__.ch,self__.cs,meta27532__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27533){
var self__ = this;
var _27533__$1 = this;
return self__.meta27532;
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27532","meta27532",862911038,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27531";

cljs.core.async.t_cljs$core$async27531.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27531");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27531.
 */
cljs.core.async.__GT_t_cljs$core$async27531 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27531(ch__$1,cs__$1,meta27532){
return (new cljs.core.async.t_cljs$core$async27531(ch__$1,cs__$1,meta27532));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27531(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26934__auto___27753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___27753,cs,m,dchan,dctr,done){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___27753,cs,m,dchan,dctr,done){
return (function (state_27668){
var state_val_27669 = (state_27668[(1)]);
if((state_val_27669 === (7))){
var inst_27664 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27670_27754 = state_27668__$1;
(statearr_27670_27754[(2)] = inst_27664);

(statearr_27670_27754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (20))){
var inst_27567 = (state_27668[(7)]);
var inst_27579 = cljs.core.first.call(null,inst_27567);
var inst_27580 = cljs.core.nth.call(null,inst_27579,(0),null);
var inst_27581 = cljs.core.nth.call(null,inst_27579,(1),null);
var state_27668__$1 = (function (){var statearr_27671 = state_27668;
(statearr_27671[(8)] = inst_27580);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27581)){
var statearr_27672_27755 = state_27668__$1;
(statearr_27672_27755[(1)] = (22));

} else {
var statearr_27673_27756 = state_27668__$1;
(statearr_27673_27756[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (27))){
var inst_27609 = (state_27668[(9)]);
var inst_27616 = (state_27668[(10)]);
var inst_27611 = (state_27668[(11)]);
var inst_27536 = (state_27668[(12)]);
var inst_27616__$1 = cljs.core._nth.call(null,inst_27609,inst_27611);
var inst_27617 = cljs.core.async.put_BANG_.call(null,inst_27616__$1,inst_27536,done);
var state_27668__$1 = (function (){var statearr_27674 = state_27668;
(statearr_27674[(10)] = inst_27616__$1);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27617)){
var statearr_27675_27757 = state_27668__$1;
(statearr_27675_27757[(1)] = (30));

} else {
var statearr_27676_27758 = state_27668__$1;
(statearr_27676_27758[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (1))){
var state_27668__$1 = state_27668;
var statearr_27677_27759 = state_27668__$1;
(statearr_27677_27759[(2)] = null);

(statearr_27677_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (24))){
var inst_27567 = (state_27668[(7)]);
var inst_27586 = (state_27668[(2)]);
var inst_27587 = cljs.core.next.call(null,inst_27567);
var inst_27545 = inst_27587;
var inst_27546 = null;
var inst_27547 = (0);
var inst_27548 = (0);
var state_27668__$1 = (function (){var statearr_27678 = state_27668;
(statearr_27678[(13)] = inst_27547);

(statearr_27678[(14)] = inst_27546);

(statearr_27678[(15)] = inst_27586);

(statearr_27678[(16)] = inst_27548);

(statearr_27678[(17)] = inst_27545);

return statearr_27678;
})();
var statearr_27679_27760 = state_27668__$1;
(statearr_27679_27760[(2)] = null);

(statearr_27679_27760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (39))){
var state_27668__$1 = state_27668;
var statearr_27683_27761 = state_27668__$1;
(statearr_27683_27761[(2)] = null);

(statearr_27683_27761[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (4))){
var inst_27536 = (state_27668[(12)]);
var inst_27536__$1 = (state_27668[(2)]);
var inst_27537 = (inst_27536__$1 == null);
var state_27668__$1 = (function (){var statearr_27684 = state_27668;
(statearr_27684[(12)] = inst_27536__$1);

return statearr_27684;
})();
if(cljs.core.truth_(inst_27537)){
var statearr_27685_27762 = state_27668__$1;
(statearr_27685_27762[(1)] = (5));

} else {
var statearr_27686_27763 = state_27668__$1;
(statearr_27686_27763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (15))){
var inst_27547 = (state_27668[(13)]);
var inst_27546 = (state_27668[(14)]);
var inst_27548 = (state_27668[(16)]);
var inst_27545 = (state_27668[(17)]);
var inst_27563 = (state_27668[(2)]);
var inst_27564 = (inst_27548 + (1));
var tmp27680 = inst_27547;
var tmp27681 = inst_27546;
var tmp27682 = inst_27545;
var inst_27545__$1 = tmp27682;
var inst_27546__$1 = tmp27681;
var inst_27547__$1 = tmp27680;
var inst_27548__$1 = inst_27564;
var state_27668__$1 = (function (){var statearr_27687 = state_27668;
(statearr_27687[(18)] = inst_27563);

(statearr_27687[(13)] = inst_27547__$1);

(statearr_27687[(14)] = inst_27546__$1);

(statearr_27687[(16)] = inst_27548__$1);

(statearr_27687[(17)] = inst_27545__$1);

return statearr_27687;
})();
var statearr_27688_27764 = state_27668__$1;
(statearr_27688_27764[(2)] = null);

(statearr_27688_27764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (21))){
var inst_27590 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27692_27765 = state_27668__$1;
(statearr_27692_27765[(2)] = inst_27590);

(statearr_27692_27765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (31))){
var inst_27616 = (state_27668[(10)]);
var inst_27620 = done.call(null,null);
var inst_27621 = cljs.core.async.untap_STAR_.call(null,m,inst_27616);
var state_27668__$1 = (function (){var statearr_27693 = state_27668;
(statearr_27693[(19)] = inst_27620);

return statearr_27693;
})();
var statearr_27694_27766 = state_27668__$1;
(statearr_27694_27766[(2)] = inst_27621);

(statearr_27694_27766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (32))){
var inst_27608 = (state_27668[(20)]);
var inst_27609 = (state_27668[(9)]);
var inst_27610 = (state_27668[(21)]);
var inst_27611 = (state_27668[(11)]);
var inst_27623 = (state_27668[(2)]);
var inst_27624 = (inst_27611 + (1));
var tmp27689 = inst_27608;
var tmp27690 = inst_27609;
var tmp27691 = inst_27610;
var inst_27608__$1 = tmp27689;
var inst_27609__$1 = tmp27690;
var inst_27610__$1 = tmp27691;
var inst_27611__$1 = inst_27624;
var state_27668__$1 = (function (){var statearr_27695 = state_27668;
(statearr_27695[(20)] = inst_27608__$1);

(statearr_27695[(9)] = inst_27609__$1);

(statearr_27695[(21)] = inst_27610__$1);

(statearr_27695[(22)] = inst_27623);

(statearr_27695[(11)] = inst_27611__$1);

return statearr_27695;
})();
var statearr_27696_27767 = state_27668__$1;
(statearr_27696_27767[(2)] = null);

(statearr_27696_27767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (40))){
var inst_27636 = (state_27668[(23)]);
var inst_27640 = done.call(null,null);
var inst_27641 = cljs.core.async.untap_STAR_.call(null,m,inst_27636);
var state_27668__$1 = (function (){var statearr_27697 = state_27668;
(statearr_27697[(24)] = inst_27640);

return statearr_27697;
})();
var statearr_27698_27768 = state_27668__$1;
(statearr_27698_27768[(2)] = inst_27641);

(statearr_27698_27768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (33))){
var inst_27627 = (state_27668[(25)]);
var inst_27629 = cljs.core.chunked_seq_QMARK_.call(null,inst_27627);
var state_27668__$1 = state_27668;
if(inst_27629){
var statearr_27699_27769 = state_27668__$1;
(statearr_27699_27769[(1)] = (36));

} else {
var statearr_27700_27770 = state_27668__$1;
(statearr_27700_27770[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (13))){
var inst_27557 = (state_27668[(26)]);
var inst_27560 = cljs.core.async.close_BANG_.call(null,inst_27557);
var state_27668__$1 = state_27668;
var statearr_27701_27771 = state_27668__$1;
(statearr_27701_27771[(2)] = inst_27560);

(statearr_27701_27771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (22))){
var inst_27580 = (state_27668[(8)]);
var inst_27583 = cljs.core.async.close_BANG_.call(null,inst_27580);
var state_27668__$1 = state_27668;
var statearr_27702_27772 = state_27668__$1;
(statearr_27702_27772[(2)] = inst_27583);

(statearr_27702_27772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (36))){
var inst_27627 = (state_27668[(25)]);
var inst_27631 = cljs.core.chunk_first.call(null,inst_27627);
var inst_27632 = cljs.core.chunk_rest.call(null,inst_27627);
var inst_27633 = cljs.core.count.call(null,inst_27631);
var inst_27608 = inst_27632;
var inst_27609 = inst_27631;
var inst_27610 = inst_27633;
var inst_27611 = (0);
var state_27668__$1 = (function (){var statearr_27703 = state_27668;
(statearr_27703[(20)] = inst_27608);

(statearr_27703[(9)] = inst_27609);

(statearr_27703[(21)] = inst_27610);

(statearr_27703[(11)] = inst_27611);

return statearr_27703;
})();
var statearr_27704_27773 = state_27668__$1;
(statearr_27704_27773[(2)] = null);

(statearr_27704_27773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (41))){
var inst_27627 = (state_27668[(25)]);
var inst_27643 = (state_27668[(2)]);
var inst_27644 = cljs.core.next.call(null,inst_27627);
var inst_27608 = inst_27644;
var inst_27609 = null;
var inst_27610 = (0);
var inst_27611 = (0);
var state_27668__$1 = (function (){var statearr_27705 = state_27668;
(statearr_27705[(20)] = inst_27608);

(statearr_27705[(9)] = inst_27609);

(statearr_27705[(21)] = inst_27610);

(statearr_27705[(27)] = inst_27643);

(statearr_27705[(11)] = inst_27611);

return statearr_27705;
})();
var statearr_27706_27774 = state_27668__$1;
(statearr_27706_27774[(2)] = null);

(statearr_27706_27774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (43))){
var state_27668__$1 = state_27668;
var statearr_27707_27775 = state_27668__$1;
(statearr_27707_27775[(2)] = null);

(statearr_27707_27775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (29))){
var inst_27652 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27708_27776 = state_27668__$1;
(statearr_27708_27776[(2)] = inst_27652);

(statearr_27708_27776[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (44))){
var inst_27661 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27709 = state_27668;
(statearr_27709[(28)] = inst_27661);

return statearr_27709;
})();
var statearr_27710_27777 = state_27668__$1;
(statearr_27710_27777[(2)] = null);

(statearr_27710_27777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (6))){
var inst_27600 = (state_27668[(29)]);
var inst_27599 = cljs.core.deref.call(null,cs);
var inst_27600__$1 = cljs.core.keys.call(null,inst_27599);
var inst_27601 = cljs.core.count.call(null,inst_27600__$1);
var inst_27602 = cljs.core.reset_BANG_.call(null,dctr,inst_27601);
var inst_27607 = cljs.core.seq.call(null,inst_27600__$1);
var inst_27608 = inst_27607;
var inst_27609 = null;
var inst_27610 = (0);
var inst_27611 = (0);
var state_27668__$1 = (function (){var statearr_27711 = state_27668;
(statearr_27711[(20)] = inst_27608);

(statearr_27711[(9)] = inst_27609);

(statearr_27711[(21)] = inst_27610);

(statearr_27711[(30)] = inst_27602);

(statearr_27711[(29)] = inst_27600__$1);

(statearr_27711[(11)] = inst_27611);

return statearr_27711;
})();
var statearr_27712_27778 = state_27668__$1;
(statearr_27712_27778[(2)] = null);

(statearr_27712_27778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (28))){
var inst_27608 = (state_27668[(20)]);
var inst_27627 = (state_27668[(25)]);
var inst_27627__$1 = cljs.core.seq.call(null,inst_27608);
var state_27668__$1 = (function (){var statearr_27713 = state_27668;
(statearr_27713[(25)] = inst_27627__$1);

return statearr_27713;
})();
if(inst_27627__$1){
var statearr_27714_27779 = state_27668__$1;
(statearr_27714_27779[(1)] = (33));

} else {
var statearr_27715_27780 = state_27668__$1;
(statearr_27715_27780[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (25))){
var inst_27610 = (state_27668[(21)]);
var inst_27611 = (state_27668[(11)]);
var inst_27613 = (inst_27611 < inst_27610);
var inst_27614 = inst_27613;
var state_27668__$1 = state_27668;
if(cljs.core.truth_(inst_27614)){
var statearr_27716_27781 = state_27668__$1;
(statearr_27716_27781[(1)] = (27));

} else {
var statearr_27717_27782 = state_27668__$1;
(statearr_27717_27782[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (34))){
var state_27668__$1 = state_27668;
var statearr_27718_27783 = state_27668__$1;
(statearr_27718_27783[(2)] = null);

(statearr_27718_27783[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (17))){
var state_27668__$1 = state_27668;
var statearr_27719_27784 = state_27668__$1;
(statearr_27719_27784[(2)] = null);

(statearr_27719_27784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (3))){
var inst_27666 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27668__$1,inst_27666);
} else {
if((state_val_27669 === (12))){
var inst_27595 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27720_27785 = state_27668__$1;
(statearr_27720_27785[(2)] = inst_27595);

(statearr_27720_27785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (2))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(4),ch);
} else {
if((state_val_27669 === (23))){
var state_27668__$1 = state_27668;
var statearr_27721_27786 = state_27668__$1;
(statearr_27721_27786[(2)] = null);

(statearr_27721_27786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (35))){
var inst_27650 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27722_27787 = state_27668__$1;
(statearr_27722_27787[(2)] = inst_27650);

(statearr_27722_27787[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (19))){
var inst_27567 = (state_27668[(7)]);
var inst_27571 = cljs.core.chunk_first.call(null,inst_27567);
var inst_27572 = cljs.core.chunk_rest.call(null,inst_27567);
var inst_27573 = cljs.core.count.call(null,inst_27571);
var inst_27545 = inst_27572;
var inst_27546 = inst_27571;
var inst_27547 = inst_27573;
var inst_27548 = (0);
var state_27668__$1 = (function (){var statearr_27723 = state_27668;
(statearr_27723[(13)] = inst_27547);

(statearr_27723[(14)] = inst_27546);

(statearr_27723[(16)] = inst_27548);

(statearr_27723[(17)] = inst_27545);

return statearr_27723;
})();
var statearr_27724_27788 = state_27668__$1;
(statearr_27724_27788[(2)] = null);

(statearr_27724_27788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (11))){
var inst_27567 = (state_27668[(7)]);
var inst_27545 = (state_27668[(17)]);
var inst_27567__$1 = cljs.core.seq.call(null,inst_27545);
var state_27668__$1 = (function (){var statearr_27725 = state_27668;
(statearr_27725[(7)] = inst_27567__$1);

return statearr_27725;
})();
if(inst_27567__$1){
var statearr_27726_27789 = state_27668__$1;
(statearr_27726_27789[(1)] = (16));

} else {
var statearr_27727_27790 = state_27668__$1;
(statearr_27727_27790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (9))){
var inst_27597 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27728_27791 = state_27668__$1;
(statearr_27728_27791[(2)] = inst_27597);

(statearr_27728_27791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (5))){
var inst_27543 = cljs.core.deref.call(null,cs);
var inst_27544 = cljs.core.seq.call(null,inst_27543);
var inst_27545 = inst_27544;
var inst_27546 = null;
var inst_27547 = (0);
var inst_27548 = (0);
var state_27668__$1 = (function (){var statearr_27729 = state_27668;
(statearr_27729[(13)] = inst_27547);

(statearr_27729[(14)] = inst_27546);

(statearr_27729[(16)] = inst_27548);

(statearr_27729[(17)] = inst_27545);

return statearr_27729;
})();
var statearr_27730_27792 = state_27668__$1;
(statearr_27730_27792[(2)] = null);

(statearr_27730_27792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (14))){
var state_27668__$1 = state_27668;
var statearr_27731_27793 = state_27668__$1;
(statearr_27731_27793[(2)] = null);

(statearr_27731_27793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (45))){
var inst_27658 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27732_27794 = state_27668__$1;
(statearr_27732_27794[(2)] = inst_27658);

(statearr_27732_27794[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (26))){
var inst_27600 = (state_27668[(29)]);
var inst_27654 = (state_27668[(2)]);
var inst_27655 = cljs.core.seq.call(null,inst_27600);
var state_27668__$1 = (function (){var statearr_27733 = state_27668;
(statearr_27733[(31)] = inst_27654);

return statearr_27733;
})();
if(inst_27655){
var statearr_27734_27795 = state_27668__$1;
(statearr_27734_27795[(1)] = (42));

} else {
var statearr_27735_27796 = state_27668__$1;
(statearr_27735_27796[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (16))){
var inst_27567 = (state_27668[(7)]);
var inst_27569 = cljs.core.chunked_seq_QMARK_.call(null,inst_27567);
var state_27668__$1 = state_27668;
if(inst_27569){
var statearr_27736_27797 = state_27668__$1;
(statearr_27736_27797[(1)] = (19));

} else {
var statearr_27737_27798 = state_27668__$1;
(statearr_27737_27798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (38))){
var inst_27647 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27738_27799 = state_27668__$1;
(statearr_27738_27799[(2)] = inst_27647);

(statearr_27738_27799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (30))){
var state_27668__$1 = state_27668;
var statearr_27739_27800 = state_27668__$1;
(statearr_27739_27800[(2)] = null);

(statearr_27739_27800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (10))){
var inst_27546 = (state_27668[(14)]);
var inst_27548 = (state_27668[(16)]);
var inst_27556 = cljs.core._nth.call(null,inst_27546,inst_27548);
var inst_27557 = cljs.core.nth.call(null,inst_27556,(0),null);
var inst_27558 = cljs.core.nth.call(null,inst_27556,(1),null);
var state_27668__$1 = (function (){var statearr_27740 = state_27668;
(statearr_27740[(26)] = inst_27557);

return statearr_27740;
})();
if(cljs.core.truth_(inst_27558)){
var statearr_27741_27801 = state_27668__$1;
(statearr_27741_27801[(1)] = (13));

} else {
var statearr_27742_27802 = state_27668__$1;
(statearr_27742_27802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (18))){
var inst_27593 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27743_27803 = state_27668__$1;
(statearr_27743_27803[(2)] = inst_27593);

(statearr_27743_27803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (42))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(45),dchan);
} else {
if((state_val_27669 === (37))){
var inst_27636 = (state_27668[(23)]);
var inst_27627 = (state_27668[(25)]);
var inst_27536 = (state_27668[(12)]);
var inst_27636__$1 = cljs.core.first.call(null,inst_27627);
var inst_27637 = cljs.core.async.put_BANG_.call(null,inst_27636__$1,inst_27536,done);
var state_27668__$1 = (function (){var statearr_27744 = state_27668;
(statearr_27744[(23)] = inst_27636__$1);

return statearr_27744;
})();
if(cljs.core.truth_(inst_27637)){
var statearr_27745_27804 = state_27668__$1;
(statearr_27745_27804[(1)] = (39));

} else {
var statearr_27746_27805 = state_27668__$1;
(statearr_27746_27805[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (8))){
var inst_27547 = (state_27668[(13)]);
var inst_27548 = (state_27668[(16)]);
var inst_27550 = (inst_27548 < inst_27547);
var inst_27551 = inst_27550;
var state_27668__$1 = state_27668;
if(cljs.core.truth_(inst_27551)){
var statearr_27747_27806 = state_27668__$1;
(statearr_27747_27806[(1)] = (10));

} else {
var statearr_27748_27807 = state_27668__$1;
(statearr_27748_27807[(1)] = (11));

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
});})(c__26934__auto___27753,cs,m,dchan,dctr,done))
;
return ((function (switch__26844__auto__,c__26934__auto___27753,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26845__auto__ = null;
var cljs$core$async$mult_$_state_machine__26845__auto____0 = (function (){
var statearr_27749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27749[(0)] = cljs$core$async$mult_$_state_machine__26845__auto__);

(statearr_27749[(1)] = (1));

return statearr_27749;
});
var cljs$core$async$mult_$_state_machine__26845__auto____1 = (function (state_27668){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27750){if((e27750 instanceof Object)){
var ex__26848__auto__ = e27750;
var statearr_27751_27808 = state_27668;
(statearr_27751_27808[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27809 = state_27668;
state_27668 = G__27809;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26845__auto__ = function(state_27668){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26845__auto____1.call(this,state_27668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26845__auto____0;
cljs$core$async$mult_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26845__auto____1;
return cljs$core$async$mult_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___27753,cs,m,dchan,dctr,done))
})();
var state__26936__auto__ = (function (){var statearr_27752 = f__26935__auto__.call(null);
(statearr_27752[(6)] = c__26934__auto___27753);

return statearr_27752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___27753,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27811 = arguments.length;
switch (G__27811) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27823 = arguments.length;
var i__4500__auto___27824 = (0);
while(true){
if((i__4500__auto___27824 < len__4499__auto___27823)){
args__4502__auto__.push((arguments[i__4500__auto___27824]));

var G__27825 = (i__4500__auto___27824 + (1));
i__4500__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27817){
var map__27818 = p__27817;
var map__27818__$1 = ((((!((map__27818 == null)))?(((((map__27818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27818):map__27818);
var opts = map__27818__$1;
var statearr_27820_27826 = state;
(statearr_27820_27826[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27818,map__27818__$1,opts){
return (function (val){
var statearr_27821_27827 = state;
(statearr_27821_27827[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27818,map__27818__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27822_27828 = state;
(statearr_27822_27828[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27813){
var G__27814 = cljs.core.first.call(null,seq27813);
var seq27813__$1 = cljs.core.next.call(null,seq27813);
var G__27815 = cljs.core.first.call(null,seq27813__$1);
var seq27813__$2 = cljs.core.next.call(null,seq27813__$1);
var G__27816 = cljs.core.first.call(null,seq27813__$2);
var seq27813__$3 = cljs.core.next.call(null,seq27813__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27814,G__27815,G__27816,seq27813__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27829 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27830){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27830 = meta27830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27831,meta27830__$1){
var self__ = this;
var _27831__$1 = this;
return (new cljs.core.async.t_cljs$core$async27829(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27830__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27831){
var self__ = this;
var _27831__$1 = this;
return self__.meta27830;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27830","meta27830",-1182041992,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27829";

cljs.core.async.t_cljs$core$async27829.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27829");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27829.
 */
cljs.core.async.__GT_t_cljs$core$async27829 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27829(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27830){
return (new cljs.core.async.t_cljs$core$async27829(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27830));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27829(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26934__auto___27993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___27993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___27993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27933){
var state_val_27934 = (state_27933[(1)]);
if((state_val_27934 === (7))){
var inst_27848 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
var statearr_27935_27994 = state_27933__$1;
(statearr_27935_27994[(2)] = inst_27848);

(statearr_27935_27994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (20))){
var inst_27860 = (state_27933[(7)]);
var state_27933__$1 = state_27933;
var statearr_27936_27995 = state_27933__$1;
(statearr_27936_27995[(2)] = inst_27860);

(statearr_27936_27995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (27))){
var state_27933__$1 = state_27933;
var statearr_27937_27996 = state_27933__$1;
(statearr_27937_27996[(2)] = null);

(statearr_27937_27996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (1))){
var inst_27835 = (state_27933[(8)]);
var inst_27835__$1 = calc_state.call(null);
var inst_27837 = (inst_27835__$1 == null);
var inst_27838 = cljs.core.not.call(null,inst_27837);
var state_27933__$1 = (function (){var statearr_27938 = state_27933;
(statearr_27938[(8)] = inst_27835__$1);

return statearr_27938;
})();
if(inst_27838){
var statearr_27939_27997 = state_27933__$1;
(statearr_27939_27997[(1)] = (2));

} else {
var statearr_27940_27998 = state_27933__$1;
(statearr_27940_27998[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (24))){
var inst_27893 = (state_27933[(9)]);
var inst_27884 = (state_27933[(10)]);
var inst_27907 = (state_27933[(11)]);
var inst_27907__$1 = inst_27884.call(null,inst_27893);
var state_27933__$1 = (function (){var statearr_27941 = state_27933;
(statearr_27941[(11)] = inst_27907__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27907__$1)){
var statearr_27942_27999 = state_27933__$1;
(statearr_27942_27999[(1)] = (29));

} else {
var statearr_27943_28000 = state_27933__$1;
(statearr_27943_28000[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (4))){
var inst_27851 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27851)){
var statearr_27944_28001 = state_27933__$1;
(statearr_27944_28001[(1)] = (8));

} else {
var statearr_27945_28002 = state_27933__$1;
(statearr_27945_28002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (15))){
var inst_27878 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27878)){
var statearr_27946_28003 = state_27933__$1;
(statearr_27946_28003[(1)] = (19));

} else {
var statearr_27947_28004 = state_27933__$1;
(statearr_27947_28004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (21))){
var inst_27883 = (state_27933[(12)]);
var inst_27883__$1 = (state_27933[(2)]);
var inst_27884 = cljs.core.get.call(null,inst_27883__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27885 = cljs.core.get.call(null,inst_27883__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27886 = cljs.core.get.call(null,inst_27883__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27933__$1 = (function (){var statearr_27948 = state_27933;
(statearr_27948[(10)] = inst_27884);

(statearr_27948[(12)] = inst_27883__$1);

(statearr_27948[(13)] = inst_27885);

return statearr_27948;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27933__$1,(22),inst_27886);
} else {
if((state_val_27934 === (31))){
var inst_27915 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27915)){
var statearr_27949_28005 = state_27933__$1;
(statearr_27949_28005[(1)] = (32));

} else {
var statearr_27950_28006 = state_27933__$1;
(statearr_27950_28006[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (32))){
var inst_27892 = (state_27933[(14)]);
var state_27933__$1 = state_27933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27933__$1,(35),out,inst_27892);
} else {
if((state_val_27934 === (33))){
var inst_27883 = (state_27933[(12)]);
var inst_27860 = inst_27883;
var state_27933__$1 = (function (){var statearr_27951 = state_27933;
(statearr_27951[(7)] = inst_27860);

return statearr_27951;
})();
var statearr_27952_28007 = state_27933__$1;
(statearr_27952_28007[(2)] = null);

(statearr_27952_28007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (13))){
var inst_27860 = (state_27933[(7)]);
var inst_27867 = inst_27860.cljs$lang$protocol_mask$partition0$;
var inst_27868 = (inst_27867 & (64));
var inst_27869 = inst_27860.cljs$core$ISeq$;
var inst_27870 = (cljs.core.PROTOCOL_SENTINEL === inst_27869);
var inst_27871 = ((inst_27868) || (inst_27870));
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27871)){
var statearr_27953_28008 = state_27933__$1;
(statearr_27953_28008[(1)] = (16));

} else {
var statearr_27954_28009 = state_27933__$1;
(statearr_27954_28009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (22))){
var inst_27893 = (state_27933[(9)]);
var inst_27892 = (state_27933[(14)]);
var inst_27891 = (state_27933[(2)]);
var inst_27892__$1 = cljs.core.nth.call(null,inst_27891,(0),null);
var inst_27893__$1 = cljs.core.nth.call(null,inst_27891,(1),null);
var inst_27894 = (inst_27892__$1 == null);
var inst_27895 = cljs.core._EQ_.call(null,inst_27893__$1,change);
var inst_27896 = ((inst_27894) || (inst_27895));
var state_27933__$1 = (function (){var statearr_27955 = state_27933;
(statearr_27955[(9)] = inst_27893__$1);

(statearr_27955[(14)] = inst_27892__$1);

return statearr_27955;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_27956_28010 = state_27933__$1;
(statearr_27956_28010[(1)] = (23));

} else {
var statearr_27957_28011 = state_27933__$1;
(statearr_27957_28011[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (36))){
var inst_27883 = (state_27933[(12)]);
var inst_27860 = inst_27883;
var state_27933__$1 = (function (){var statearr_27958 = state_27933;
(statearr_27958[(7)] = inst_27860);

return statearr_27958;
})();
var statearr_27959_28012 = state_27933__$1;
(statearr_27959_28012[(2)] = null);

(statearr_27959_28012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (29))){
var inst_27907 = (state_27933[(11)]);
var state_27933__$1 = state_27933;
var statearr_27960_28013 = state_27933__$1;
(statearr_27960_28013[(2)] = inst_27907);

(statearr_27960_28013[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (6))){
var state_27933__$1 = state_27933;
var statearr_27961_28014 = state_27933__$1;
(statearr_27961_28014[(2)] = false);

(statearr_27961_28014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (28))){
var inst_27903 = (state_27933[(2)]);
var inst_27904 = calc_state.call(null);
var inst_27860 = inst_27904;
var state_27933__$1 = (function (){var statearr_27962 = state_27933;
(statearr_27962[(7)] = inst_27860);

(statearr_27962[(15)] = inst_27903);

return statearr_27962;
})();
var statearr_27963_28015 = state_27933__$1;
(statearr_27963_28015[(2)] = null);

(statearr_27963_28015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (25))){
var inst_27929 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
var statearr_27964_28016 = state_27933__$1;
(statearr_27964_28016[(2)] = inst_27929);

(statearr_27964_28016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (34))){
var inst_27927 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
var statearr_27965_28017 = state_27933__$1;
(statearr_27965_28017[(2)] = inst_27927);

(statearr_27965_28017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (17))){
var state_27933__$1 = state_27933;
var statearr_27966_28018 = state_27933__$1;
(statearr_27966_28018[(2)] = false);

(statearr_27966_28018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (3))){
var state_27933__$1 = state_27933;
var statearr_27967_28019 = state_27933__$1;
(statearr_27967_28019[(2)] = false);

(statearr_27967_28019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (12))){
var inst_27931 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27933__$1,inst_27931);
} else {
if((state_val_27934 === (2))){
var inst_27835 = (state_27933[(8)]);
var inst_27840 = inst_27835.cljs$lang$protocol_mask$partition0$;
var inst_27841 = (inst_27840 & (64));
var inst_27842 = inst_27835.cljs$core$ISeq$;
var inst_27843 = (cljs.core.PROTOCOL_SENTINEL === inst_27842);
var inst_27844 = ((inst_27841) || (inst_27843));
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27844)){
var statearr_27968_28020 = state_27933__$1;
(statearr_27968_28020[(1)] = (5));

} else {
var statearr_27969_28021 = state_27933__$1;
(statearr_27969_28021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (23))){
var inst_27892 = (state_27933[(14)]);
var inst_27898 = (inst_27892 == null);
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27898)){
var statearr_27970_28022 = state_27933__$1;
(statearr_27970_28022[(1)] = (26));

} else {
var statearr_27971_28023 = state_27933__$1;
(statearr_27971_28023[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (35))){
var inst_27918 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27918)){
var statearr_27972_28024 = state_27933__$1;
(statearr_27972_28024[(1)] = (36));

} else {
var statearr_27973_28025 = state_27933__$1;
(statearr_27973_28025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (19))){
var inst_27860 = (state_27933[(7)]);
var inst_27880 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27860);
var state_27933__$1 = state_27933;
var statearr_27974_28026 = state_27933__$1;
(statearr_27974_28026[(2)] = inst_27880);

(statearr_27974_28026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (11))){
var inst_27860 = (state_27933[(7)]);
var inst_27864 = (inst_27860 == null);
var inst_27865 = cljs.core.not.call(null,inst_27864);
var state_27933__$1 = state_27933;
if(inst_27865){
var statearr_27975_28027 = state_27933__$1;
(statearr_27975_28027[(1)] = (13));

} else {
var statearr_27976_28028 = state_27933__$1;
(statearr_27976_28028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (9))){
var inst_27835 = (state_27933[(8)]);
var state_27933__$1 = state_27933;
var statearr_27977_28029 = state_27933__$1;
(statearr_27977_28029[(2)] = inst_27835);

(statearr_27977_28029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (5))){
var state_27933__$1 = state_27933;
var statearr_27978_28030 = state_27933__$1;
(statearr_27978_28030[(2)] = true);

(statearr_27978_28030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (14))){
var state_27933__$1 = state_27933;
var statearr_27979_28031 = state_27933__$1;
(statearr_27979_28031[(2)] = false);

(statearr_27979_28031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (26))){
var inst_27893 = (state_27933[(9)]);
var inst_27900 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27893);
var state_27933__$1 = state_27933;
var statearr_27980_28032 = state_27933__$1;
(statearr_27980_28032[(2)] = inst_27900);

(statearr_27980_28032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (16))){
var state_27933__$1 = state_27933;
var statearr_27981_28033 = state_27933__$1;
(statearr_27981_28033[(2)] = true);

(statearr_27981_28033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (38))){
var inst_27923 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
var statearr_27982_28034 = state_27933__$1;
(statearr_27982_28034[(2)] = inst_27923);

(statearr_27982_28034[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (30))){
var inst_27893 = (state_27933[(9)]);
var inst_27884 = (state_27933[(10)]);
var inst_27885 = (state_27933[(13)]);
var inst_27910 = cljs.core.empty_QMARK_.call(null,inst_27884);
var inst_27911 = inst_27885.call(null,inst_27893);
var inst_27912 = cljs.core.not.call(null,inst_27911);
var inst_27913 = ((inst_27910) && (inst_27912));
var state_27933__$1 = state_27933;
var statearr_27983_28035 = state_27933__$1;
(statearr_27983_28035[(2)] = inst_27913);

(statearr_27983_28035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (10))){
var inst_27835 = (state_27933[(8)]);
var inst_27856 = (state_27933[(2)]);
var inst_27857 = cljs.core.get.call(null,inst_27856,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27858 = cljs.core.get.call(null,inst_27856,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27859 = cljs.core.get.call(null,inst_27856,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27860 = inst_27835;
var state_27933__$1 = (function (){var statearr_27984 = state_27933;
(statearr_27984[(7)] = inst_27860);

(statearr_27984[(16)] = inst_27857);

(statearr_27984[(17)] = inst_27858);

(statearr_27984[(18)] = inst_27859);

return statearr_27984;
})();
var statearr_27985_28036 = state_27933__$1;
(statearr_27985_28036[(2)] = null);

(statearr_27985_28036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (18))){
var inst_27875 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
var statearr_27986_28037 = state_27933__$1;
(statearr_27986_28037[(2)] = inst_27875);

(statearr_27986_28037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (37))){
var state_27933__$1 = state_27933;
var statearr_27987_28038 = state_27933__$1;
(statearr_27987_28038[(2)] = null);

(statearr_27987_28038[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (8))){
var inst_27835 = (state_27933[(8)]);
var inst_27853 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27835);
var state_27933__$1 = state_27933;
var statearr_27988_28039 = state_27933__$1;
(statearr_27988_28039[(2)] = inst_27853);

(statearr_27988_28039[(1)] = (10));


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
});})(c__26934__auto___27993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26844__auto__,c__26934__auto___27993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26845__auto__ = null;
var cljs$core$async$mix_$_state_machine__26845__auto____0 = (function (){
var statearr_27989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27989[(0)] = cljs$core$async$mix_$_state_machine__26845__auto__);

(statearr_27989[(1)] = (1));

return statearr_27989;
});
var cljs$core$async$mix_$_state_machine__26845__auto____1 = (function (state_27933){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_27933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e27990){if((e27990 instanceof Object)){
var ex__26848__auto__ = e27990;
var statearr_27991_28040 = state_27933;
(statearr_27991_28040[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28041 = state_27933;
state_27933 = G__28041;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26845__auto__ = function(state_27933){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26845__auto____1.call(this,state_27933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26845__auto____0;
cljs$core$async$mix_$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26845__auto____1;
return cljs$core$async$mix_$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___27993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26936__auto__ = (function (){var statearr_27992 = f__26935__auto__.call(null);
(statearr_27992[(6)] = c__26934__auto___27993);

return statearr_27992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___27993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28043 = arguments.length;
switch (G__28043) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28047 = arguments.length;
switch (G__28047) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28045_SHARP_){
if(cljs.core.truth_(p1__28045_SHARP_.call(null,topic))){
return p1__28045_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28045_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28048 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28049){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28049 = meta28049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28050,meta28049__$1){
var self__ = this;
var _28050__$1 = this;
return (new cljs.core.async.t_cljs$core$async28048(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28049__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28050){
var self__ = this;
var _28050__$1 = this;
return self__.meta28049;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28049","meta28049",493443442,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28048";

cljs.core.async.t_cljs$core$async28048.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28048");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28048.
 */
cljs.core.async.__GT_t_cljs$core$async28048 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28048(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28049){
return (new cljs.core.async.t_cljs$core$async28048(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28049));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28048(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26934__auto___28168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28168,mults,ensure_mult,p){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28168,mults,ensure_mult,p){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (7))){
var inst_28118 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28124_28169 = state_28122__$1;
(statearr_28124_28169[(2)] = inst_28118);

(statearr_28124_28169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (20))){
var state_28122__$1 = state_28122;
var statearr_28125_28170 = state_28122__$1;
(statearr_28125_28170[(2)] = null);

(statearr_28125_28170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (1))){
var state_28122__$1 = state_28122;
var statearr_28126_28171 = state_28122__$1;
(statearr_28126_28171[(2)] = null);

(statearr_28126_28171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (24))){
var inst_28101 = (state_28122[(7)]);
var inst_28110 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28101);
var state_28122__$1 = state_28122;
var statearr_28127_28172 = state_28122__$1;
(statearr_28127_28172[(2)] = inst_28110);

(statearr_28127_28172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (4))){
var inst_28053 = (state_28122[(8)]);
var inst_28053__$1 = (state_28122[(2)]);
var inst_28054 = (inst_28053__$1 == null);
var state_28122__$1 = (function (){var statearr_28128 = state_28122;
(statearr_28128[(8)] = inst_28053__$1);

return statearr_28128;
})();
if(cljs.core.truth_(inst_28054)){
var statearr_28129_28173 = state_28122__$1;
(statearr_28129_28173[(1)] = (5));

} else {
var statearr_28130_28174 = state_28122__$1;
(statearr_28130_28174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (15))){
var inst_28095 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28131_28175 = state_28122__$1;
(statearr_28131_28175[(2)] = inst_28095);

(statearr_28131_28175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (21))){
var inst_28115 = (state_28122[(2)]);
var state_28122__$1 = (function (){var statearr_28132 = state_28122;
(statearr_28132[(9)] = inst_28115);

return statearr_28132;
})();
var statearr_28133_28176 = state_28122__$1;
(statearr_28133_28176[(2)] = null);

(statearr_28133_28176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (13))){
var inst_28077 = (state_28122[(10)]);
var inst_28079 = cljs.core.chunked_seq_QMARK_.call(null,inst_28077);
var state_28122__$1 = state_28122;
if(inst_28079){
var statearr_28134_28177 = state_28122__$1;
(statearr_28134_28177[(1)] = (16));

} else {
var statearr_28135_28178 = state_28122__$1;
(statearr_28135_28178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (22))){
var inst_28107 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28107)){
var statearr_28136_28179 = state_28122__$1;
(statearr_28136_28179[(1)] = (23));

} else {
var statearr_28137_28180 = state_28122__$1;
(statearr_28137_28180[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (6))){
var inst_28053 = (state_28122[(8)]);
var inst_28101 = (state_28122[(7)]);
var inst_28103 = (state_28122[(11)]);
var inst_28101__$1 = topic_fn.call(null,inst_28053);
var inst_28102 = cljs.core.deref.call(null,mults);
var inst_28103__$1 = cljs.core.get.call(null,inst_28102,inst_28101__$1);
var state_28122__$1 = (function (){var statearr_28138 = state_28122;
(statearr_28138[(7)] = inst_28101__$1);

(statearr_28138[(11)] = inst_28103__$1);

return statearr_28138;
})();
if(cljs.core.truth_(inst_28103__$1)){
var statearr_28139_28181 = state_28122__$1;
(statearr_28139_28181[(1)] = (19));

} else {
var statearr_28140_28182 = state_28122__$1;
(statearr_28140_28182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (25))){
var inst_28112 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28141_28183 = state_28122__$1;
(statearr_28141_28183[(2)] = inst_28112);

(statearr_28141_28183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (17))){
var inst_28077 = (state_28122[(10)]);
var inst_28086 = cljs.core.first.call(null,inst_28077);
var inst_28087 = cljs.core.async.muxch_STAR_.call(null,inst_28086);
var inst_28088 = cljs.core.async.close_BANG_.call(null,inst_28087);
var inst_28089 = cljs.core.next.call(null,inst_28077);
var inst_28063 = inst_28089;
var inst_28064 = null;
var inst_28065 = (0);
var inst_28066 = (0);
var state_28122__$1 = (function (){var statearr_28142 = state_28122;
(statearr_28142[(12)] = inst_28088);

(statearr_28142[(13)] = inst_28065);

(statearr_28142[(14)] = inst_28066);

(statearr_28142[(15)] = inst_28064);

(statearr_28142[(16)] = inst_28063);

return statearr_28142;
})();
var statearr_28143_28184 = state_28122__$1;
(statearr_28143_28184[(2)] = null);

(statearr_28143_28184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (3))){
var inst_28120 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (12))){
var inst_28097 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28144_28185 = state_28122__$1;
(statearr_28144_28185[(2)] = inst_28097);

(statearr_28144_28185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (2))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(4),ch);
} else {
if((state_val_28123 === (23))){
var state_28122__$1 = state_28122;
var statearr_28145_28186 = state_28122__$1;
(statearr_28145_28186[(2)] = null);

(statearr_28145_28186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (19))){
var inst_28053 = (state_28122[(8)]);
var inst_28103 = (state_28122[(11)]);
var inst_28105 = cljs.core.async.muxch_STAR_.call(null,inst_28103);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28122__$1,(22),inst_28105,inst_28053);
} else {
if((state_val_28123 === (11))){
var inst_28077 = (state_28122[(10)]);
var inst_28063 = (state_28122[(16)]);
var inst_28077__$1 = cljs.core.seq.call(null,inst_28063);
var state_28122__$1 = (function (){var statearr_28146 = state_28122;
(statearr_28146[(10)] = inst_28077__$1);

return statearr_28146;
})();
if(inst_28077__$1){
var statearr_28147_28187 = state_28122__$1;
(statearr_28147_28187[(1)] = (13));

} else {
var statearr_28148_28188 = state_28122__$1;
(statearr_28148_28188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (9))){
var inst_28099 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28149_28189 = state_28122__$1;
(statearr_28149_28189[(2)] = inst_28099);

(statearr_28149_28189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (5))){
var inst_28060 = cljs.core.deref.call(null,mults);
var inst_28061 = cljs.core.vals.call(null,inst_28060);
var inst_28062 = cljs.core.seq.call(null,inst_28061);
var inst_28063 = inst_28062;
var inst_28064 = null;
var inst_28065 = (0);
var inst_28066 = (0);
var state_28122__$1 = (function (){var statearr_28150 = state_28122;
(statearr_28150[(13)] = inst_28065);

(statearr_28150[(14)] = inst_28066);

(statearr_28150[(15)] = inst_28064);

(statearr_28150[(16)] = inst_28063);

return statearr_28150;
})();
var statearr_28151_28190 = state_28122__$1;
(statearr_28151_28190[(2)] = null);

(statearr_28151_28190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (14))){
var state_28122__$1 = state_28122;
var statearr_28155_28191 = state_28122__$1;
(statearr_28155_28191[(2)] = null);

(statearr_28155_28191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (16))){
var inst_28077 = (state_28122[(10)]);
var inst_28081 = cljs.core.chunk_first.call(null,inst_28077);
var inst_28082 = cljs.core.chunk_rest.call(null,inst_28077);
var inst_28083 = cljs.core.count.call(null,inst_28081);
var inst_28063 = inst_28082;
var inst_28064 = inst_28081;
var inst_28065 = inst_28083;
var inst_28066 = (0);
var state_28122__$1 = (function (){var statearr_28156 = state_28122;
(statearr_28156[(13)] = inst_28065);

(statearr_28156[(14)] = inst_28066);

(statearr_28156[(15)] = inst_28064);

(statearr_28156[(16)] = inst_28063);

return statearr_28156;
})();
var statearr_28157_28192 = state_28122__$1;
(statearr_28157_28192[(2)] = null);

(statearr_28157_28192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (10))){
var inst_28065 = (state_28122[(13)]);
var inst_28066 = (state_28122[(14)]);
var inst_28064 = (state_28122[(15)]);
var inst_28063 = (state_28122[(16)]);
var inst_28071 = cljs.core._nth.call(null,inst_28064,inst_28066);
var inst_28072 = cljs.core.async.muxch_STAR_.call(null,inst_28071);
var inst_28073 = cljs.core.async.close_BANG_.call(null,inst_28072);
var inst_28074 = (inst_28066 + (1));
var tmp28152 = inst_28065;
var tmp28153 = inst_28064;
var tmp28154 = inst_28063;
var inst_28063__$1 = tmp28154;
var inst_28064__$1 = tmp28153;
var inst_28065__$1 = tmp28152;
var inst_28066__$1 = inst_28074;
var state_28122__$1 = (function (){var statearr_28158 = state_28122;
(statearr_28158[(13)] = inst_28065__$1);

(statearr_28158[(17)] = inst_28073);

(statearr_28158[(14)] = inst_28066__$1);

(statearr_28158[(15)] = inst_28064__$1);

(statearr_28158[(16)] = inst_28063__$1);

return statearr_28158;
})();
var statearr_28159_28193 = state_28122__$1;
(statearr_28159_28193[(2)] = null);

(statearr_28159_28193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (18))){
var inst_28092 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28160_28194 = state_28122__$1;
(statearr_28160_28194[(2)] = inst_28092);

(statearr_28160_28194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28065 = (state_28122[(13)]);
var inst_28066 = (state_28122[(14)]);
var inst_28068 = (inst_28066 < inst_28065);
var inst_28069 = inst_28068;
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28069)){
var statearr_28161_28195 = state_28122__$1;
(statearr_28161_28195[(1)] = (10));

} else {
var statearr_28162_28196 = state_28122__$1;
(statearr_28162_28196[(1)] = (11));

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
});})(c__26934__auto___28168,mults,ensure_mult,p))
;
return ((function (switch__26844__auto__,c__26934__auto___28168,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28163[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28163[(1)] = (1));

return statearr_28163;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28122){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28164){if((e28164 instanceof Object)){
var ex__26848__auto__ = e28164;
var statearr_28165_28197 = state_28122;
(statearr_28165_28197[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28198 = state_28122;
state_28122 = G__28198;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28168,mults,ensure_mult,p))
})();
var state__26936__auto__ = (function (){var statearr_28166 = f__26935__auto__.call(null);
(statearr_28166[(6)] = c__26934__auto___28168);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28168,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28200 = arguments.length;
switch (G__28200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28203 = arguments.length;
switch (G__28203) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28206 = arguments.length;
switch (G__28206) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26934__auto___28273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28273,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28273,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28245){
var state_val_28246 = (state_28245[(1)]);
if((state_val_28246 === (7))){
var state_28245__$1 = state_28245;
var statearr_28247_28274 = state_28245__$1;
(statearr_28247_28274[(2)] = null);

(statearr_28247_28274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (1))){
var state_28245__$1 = state_28245;
var statearr_28248_28275 = state_28245__$1;
(statearr_28248_28275[(2)] = null);

(statearr_28248_28275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (4))){
var inst_28209 = (state_28245[(7)]);
var inst_28211 = (inst_28209 < cnt);
var state_28245__$1 = state_28245;
if(cljs.core.truth_(inst_28211)){
var statearr_28249_28276 = state_28245__$1;
(statearr_28249_28276[(1)] = (6));

} else {
var statearr_28250_28277 = state_28245__$1;
(statearr_28250_28277[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (15))){
var inst_28241 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28251_28278 = state_28245__$1;
(statearr_28251_28278[(2)] = inst_28241);

(statearr_28251_28278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (13))){
var inst_28234 = cljs.core.async.close_BANG_.call(null,out);
var state_28245__$1 = state_28245;
var statearr_28252_28279 = state_28245__$1;
(statearr_28252_28279[(2)] = inst_28234);

(statearr_28252_28279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (6))){
var state_28245__$1 = state_28245;
var statearr_28253_28280 = state_28245__$1;
(statearr_28253_28280[(2)] = null);

(statearr_28253_28280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (3))){
var inst_28243 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28245__$1,inst_28243);
} else {
if((state_val_28246 === (12))){
var inst_28231 = (state_28245[(8)]);
var inst_28231__$1 = (state_28245[(2)]);
var inst_28232 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28231__$1);
var state_28245__$1 = (function (){var statearr_28254 = state_28245;
(statearr_28254[(8)] = inst_28231__$1);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28232)){
var statearr_28255_28281 = state_28245__$1;
(statearr_28255_28281[(1)] = (13));

} else {
var statearr_28256_28282 = state_28245__$1;
(statearr_28256_28282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (2))){
var inst_28208 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28209 = (0);
var state_28245__$1 = (function (){var statearr_28257 = state_28245;
(statearr_28257[(7)] = inst_28209);

(statearr_28257[(9)] = inst_28208);

return statearr_28257;
})();
var statearr_28258_28283 = state_28245__$1;
(statearr_28258_28283[(2)] = null);

(statearr_28258_28283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (11))){
var inst_28209 = (state_28245[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28245,(10),Object,null,(9));
var inst_28218 = chs__$1.call(null,inst_28209);
var inst_28219 = done.call(null,inst_28209);
var inst_28220 = cljs.core.async.take_BANG_.call(null,inst_28218,inst_28219);
var state_28245__$1 = state_28245;
var statearr_28259_28284 = state_28245__$1;
(statearr_28259_28284[(2)] = inst_28220);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28245__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (9))){
var inst_28209 = (state_28245[(7)]);
var inst_28222 = (state_28245[(2)]);
var inst_28223 = (inst_28209 + (1));
var inst_28209__$1 = inst_28223;
var state_28245__$1 = (function (){var statearr_28260 = state_28245;
(statearr_28260[(10)] = inst_28222);

(statearr_28260[(7)] = inst_28209__$1);

return statearr_28260;
})();
var statearr_28261_28285 = state_28245__$1;
(statearr_28261_28285[(2)] = null);

(statearr_28261_28285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (5))){
var inst_28229 = (state_28245[(2)]);
var state_28245__$1 = (function (){var statearr_28262 = state_28245;
(statearr_28262[(11)] = inst_28229);

return statearr_28262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28245__$1,(12),dchan);
} else {
if((state_val_28246 === (14))){
var inst_28231 = (state_28245[(8)]);
var inst_28236 = cljs.core.apply.call(null,f,inst_28231);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28245__$1,(16),out,inst_28236);
} else {
if((state_val_28246 === (16))){
var inst_28238 = (state_28245[(2)]);
var state_28245__$1 = (function (){var statearr_28263 = state_28245;
(statearr_28263[(12)] = inst_28238);

return statearr_28263;
})();
var statearr_28264_28286 = state_28245__$1;
(statearr_28264_28286[(2)] = null);

(statearr_28264_28286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (10))){
var inst_28213 = (state_28245[(2)]);
var inst_28214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28245__$1 = (function (){var statearr_28265 = state_28245;
(statearr_28265[(13)] = inst_28213);

return statearr_28265;
})();
var statearr_28266_28287 = state_28245__$1;
(statearr_28266_28287[(2)] = inst_28214);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28245__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (8))){
var inst_28227 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28267_28288 = state_28245__$1;
(statearr_28267_28288[(2)] = inst_28227);

(statearr_28267_28288[(1)] = (5));


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
});})(c__26934__auto___28273,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26844__auto__,c__26934__auto___28273,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28268[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28268[(1)] = (1));

return statearr_28268;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28245){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28269){if((e28269 instanceof Object)){
var ex__26848__auto__ = e28269;
var statearr_28270_28289 = state_28245;
(statearr_28270_28289[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28290 = state_28245;
state_28245 = G__28290;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28245);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28273,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26936__auto__ = (function (){var statearr_28271 = f__26935__auto__.call(null);
(statearr_28271[(6)] = c__26934__auto___28273);

return statearr_28271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28273,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28293 = arguments.length;
switch (G__28293) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26934__auto___28347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28347,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28347,out){
return (function (state_28325){
var state_val_28326 = (state_28325[(1)]);
if((state_val_28326 === (7))){
var inst_28304 = (state_28325[(7)]);
var inst_28305 = (state_28325[(8)]);
var inst_28304__$1 = (state_28325[(2)]);
var inst_28305__$1 = cljs.core.nth.call(null,inst_28304__$1,(0),null);
var inst_28306 = cljs.core.nth.call(null,inst_28304__$1,(1),null);
var inst_28307 = (inst_28305__$1 == null);
var state_28325__$1 = (function (){var statearr_28327 = state_28325;
(statearr_28327[(7)] = inst_28304__$1);

(statearr_28327[(9)] = inst_28306);

(statearr_28327[(8)] = inst_28305__$1);

return statearr_28327;
})();
if(cljs.core.truth_(inst_28307)){
var statearr_28328_28348 = state_28325__$1;
(statearr_28328_28348[(1)] = (8));

} else {
var statearr_28329_28349 = state_28325__$1;
(statearr_28329_28349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (1))){
var inst_28294 = cljs.core.vec.call(null,chs);
var inst_28295 = inst_28294;
var state_28325__$1 = (function (){var statearr_28330 = state_28325;
(statearr_28330[(10)] = inst_28295);

return statearr_28330;
})();
var statearr_28331_28350 = state_28325__$1;
(statearr_28331_28350[(2)] = null);

(statearr_28331_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (4))){
var inst_28295 = (state_28325[(10)]);
var state_28325__$1 = state_28325;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28325__$1,(7),inst_28295);
} else {
if((state_val_28326 === (6))){
var inst_28321 = (state_28325[(2)]);
var state_28325__$1 = state_28325;
var statearr_28332_28351 = state_28325__$1;
(statearr_28332_28351[(2)] = inst_28321);

(statearr_28332_28351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (3))){
var inst_28323 = (state_28325[(2)]);
var state_28325__$1 = state_28325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28325__$1,inst_28323);
} else {
if((state_val_28326 === (2))){
var inst_28295 = (state_28325[(10)]);
var inst_28297 = cljs.core.count.call(null,inst_28295);
var inst_28298 = (inst_28297 > (0));
var state_28325__$1 = state_28325;
if(cljs.core.truth_(inst_28298)){
var statearr_28334_28352 = state_28325__$1;
(statearr_28334_28352[(1)] = (4));

} else {
var statearr_28335_28353 = state_28325__$1;
(statearr_28335_28353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (11))){
var inst_28295 = (state_28325[(10)]);
var inst_28314 = (state_28325[(2)]);
var tmp28333 = inst_28295;
var inst_28295__$1 = tmp28333;
var state_28325__$1 = (function (){var statearr_28336 = state_28325;
(statearr_28336[(11)] = inst_28314);

(statearr_28336[(10)] = inst_28295__$1);

return statearr_28336;
})();
var statearr_28337_28354 = state_28325__$1;
(statearr_28337_28354[(2)] = null);

(statearr_28337_28354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (9))){
var inst_28305 = (state_28325[(8)]);
var state_28325__$1 = state_28325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28325__$1,(11),out,inst_28305);
} else {
if((state_val_28326 === (5))){
var inst_28319 = cljs.core.async.close_BANG_.call(null,out);
var state_28325__$1 = state_28325;
var statearr_28338_28355 = state_28325__$1;
(statearr_28338_28355[(2)] = inst_28319);

(statearr_28338_28355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (10))){
var inst_28317 = (state_28325[(2)]);
var state_28325__$1 = state_28325;
var statearr_28339_28356 = state_28325__$1;
(statearr_28339_28356[(2)] = inst_28317);

(statearr_28339_28356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (8))){
var inst_28304 = (state_28325[(7)]);
var inst_28306 = (state_28325[(9)]);
var inst_28295 = (state_28325[(10)]);
var inst_28305 = (state_28325[(8)]);
var inst_28309 = (function (){var cs = inst_28295;
var vec__28300 = inst_28304;
var v = inst_28305;
var c = inst_28306;
return ((function (cs,vec__28300,v,c,inst_28304,inst_28306,inst_28295,inst_28305,state_val_28326,c__26934__auto___28347,out){
return (function (p1__28291_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28291_SHARP_);
});
;})(cs,vec__28300,v,c,inst_28304,inst_28306,inst_28295,inst_28305,state_val_28326,c__26934__auto___28347,out))
})();
var inst_28310 = cljs.core.filterv.call(null,inst_28309,inst_28295);
var inst_28295__$1 = inst_28310;
var state_28325__$1 = (function (){var statearr_28340 = state_28325;
(statearr_28340[(10)] = inst_28295__$1);

return statearr_28340;
})();
var statearr_28341_28357 = state_28325__$1;
(statearr_28341_28357[(2)] = null);

(statearr_28341_28357[(1)] = (2));


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
});})(c__26934__auto___28347,out))
;
return ((function (switch__26844__auto__,c__26934__auto___28347,out){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28342[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28342[(1)] = (1));

return statearr_28342;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28325){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28343){if((e28343 instanceof Object)){
var ex__26848__auto__ = e28343;
var statearr_28344_28358 = state_28325;
(statearr_28344_28358[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28359 = state_28325;
state_28325 = G__28359;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28347,out))
})();
var state__26936__auto__ = (function (){var statearr_28345 = f__26935__auto__.call(null);
(statearr_28345[(6)] = c__26934__auto___28347);

return statearr_28345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28347,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28361 = arguments.length;
switch (G__28361) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26934__auto___28406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28406,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28406,out){
return (function (state_28385){
var state_val_28386 = (state_28385[(1)]);
if((state_val_28386 === (7))){
var inst_28367 = (state_28385[(7)]);
var inst_28367__$1 = (state_28385[(2)]);
var inst_28368 = (inst_28367__$1 == null);
var inst_28369 = cljs.core.not.call(null,inst_28368);
var state_28385__$1 = (function (){var statearr_28387 = state_28385;
(statearr_28387[(7)] = inst_28367__$1);

return statearr_28387;
})();
if(inst_28369){
var statearr_28388_28407 = state_28385__$1;
(statearr_28388_28407[(1)] = (8));

} else {
var statearr_28389_28408 = state_28385__$1;
(statearr_28389_28408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (1))){
var inst_28362 = (0);
var state_28385__$1 = (function (){var statearr_28390 = state_28385;
(statearr_28390[(8)] = inst_28362);

return statearr_28390;
})();
var statearr_28391_28409 = state_28385__$1;
(statearr_28391_28409[(2)] = null);

(statearr_28391_28409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (4))){
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28385__$1,(7),ch);
} else {
if((state_val_28386 === (6))){
var inst_28380 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28392_28410 = state_28385__$1;
(statearr_28392_28410[(2)] = inst_28380);

(statearr_28392_28410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (3))){
var inst_28382 = (state_28385[(2)]);
var inst_28383 = cljs.core.async.close_BANG_.call(null,out);
var state_28385__$1 = (function (){var statearr_28393 = state_28385;
(statearr_28393[(9)] = inst_28382);

return statearr_28393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28385__$1,inst_28383);
} else {
if((state_val_28386 === (2))){
var inst_28362 = (state_28385[(8)]);
var inst_28364 = (inst_28362 < n);
var state_28385__$1 = state_28385;
if(cljs.core.truth_(inst_28364)){
var statearr_28394_28411 = state_28385__$1;
(statearr_28394_28411[(1)] = (4));

} else {
var statearr_28395_28412 = state_28385__$1;
(statearr_28395_28412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (11))){
var inst_28362 = (state_28385[(8)]);
var inst_28372 = (state_28385[(2)]);
var inst_28373 = (inst_28362 + (1));
var inst_28362__$1 = inst_28373;
var state_28385__$1 = (function (){var statearr_28396 = state_28385;
(statearr_28396[(10)] = inst_28372);

(statearr_28396[(8)] = inst_28362__$1);

return statearr_28396;
})();
var statearr_28397_28413 = state_28385__$1;
(statearr_28397_28413[(2)] = null);

(statearr_28397_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (9))){
var state_28385__$1 = state_28385;
var statearr_28398_28414 = state_28385__$1;
(statearr_28398_28414[(2)] = null);

(statearr_28398_28414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (5))){
var state_28385__$1 = state_28385;
var statearr_28399_28415 = state_28385__$1;
(statearr_28399_28415[(2)] = null);

(statearr_28399_28415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (10))){
var inst_28377 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28400_28416 = state_28385__$1;
(statearr_28400_28416[(2)] = inst_28377);

(statearr_28400_28416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (8))){
var inst_28367 = (state_28385[(7)]);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28385__$1,(11),out,inst_28367);
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
});})(c__26934__auto___28406,out))
;
return ((function (switch__26844__auto__,c__26934__auto___28406,out){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28401 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28401[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28401[(1)] = (1));

return statearr_28401;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28385){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28402){if((e28402 instanceof Object)){
var ex__26848__auto__ = e28402;
var statearr_28403_28417 = state_28385;
(statearr_28403_28417[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28418 = state_28385;
state_28385 = G__28418;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28406,out))
})();
var state__26936__auto__ = (function (){var statearr_28404 = f__26935__auto__.call(null);
(statearr_28404[(6)] = c__26934__auto___28406);

return statearr_28404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28406,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28420 = (function (f,ch,meta28421){
this.f = f;
this.ch = ch;
this.meta28421 = meta28421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28422,meta28421__$1){
var self__ = this;
var _28422__$1 = this;
return (new cljs.core.async.t_cljs$core$async28420(self__.f,self__.ch,meta28421__$1));
});

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28422){
var self__ = this;
var _28422__$1 = this;
return self__.meta28421;
});

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28423 = (function (f,ch,meta28421,_,fn1,meta28424){
this.f = f;
this.ch = ch;
this.meta28421 = meta28421;
this._ = _;
this.fn1 = fn1;
this.meta28424 = meta28424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28425,meta28424__$1){
var self__ = this;
var _28425__$1 = this;
return (new cljs.core.async.t_cljs$core$async28423(self__.f,self__.ch,self__.meta28421,self__._,self__.fn1,meta28424__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28425){
var self__ = this;
var _28425__$1 = this;
return self__.meta28424;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28419_SHARP_){
return f1.call(null,(((p1__28419_SHARP_ == null))?null:self__.f.call(null,p1__28419_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28423.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28421","meta28421",-649239393,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28420","cljs.core.async/t_cljs$core$async28420",850563905,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28424","meta28424",-392485533,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28423";

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28423");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28423.
 */
cljs.core.async.__GT_t_cljs$core$async28423 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28423(f__$1,ch__$1,meta28421__$1,___$2,fn1__$1,meta28424){
return (new cljs.core.async.t_cljs$core$async28423(f__$1,ch__$1,meta28421__$1,___$2,fn1__$1,meta28424));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28423(self__.f,self__.ch,self__.meta28421,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28421","meta28421",-649239393,null)], null);
});

cljs.core.async.t_cljs$core$async28420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28420";

cljs.core.async.t_cljs$core$async28420.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28420");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28420.
 */
cljs.core.async.__GT_t_cljs$core$async28420 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28420(f__$1,ch__$1,meta28421){
return (new cljs.core.async.t_cljs$core$async28420(f__$1,ch__$1,meta28421));
});

}

return (new cljs.core.async.t_cljs$core$async28420(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28426 = (function (f,ch,meta28427){
this.f = f;
this.ch = ch;
this.meta28427 = meta28427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28428,meta28427__$1){
var self__ = this;
var _28428__$1 = this;
return (new cljs.core.async.t_cljs$core$async28426(self__.f,self__.ch,meta28427__$1));
});

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28428){
var self__ = this;
var _28428__$1 = this;
return self__.meta28427;
});

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28427","meta28427",1980634244,null)], null);
});

cljs.core.async.t_cljs$core$async28426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28426";

cljs.core.async.t_cljs$core$async28426.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28426");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28426.
 */
cljs.core.async.__GT_t_cljs$core$async28426 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28426(f__$1,ch__$1,meta28427){
return (new cljs.core.async.t_cljs$core$async28426(f__$1,ch__$1,meta28427));
});

}

return (new cljs.core.async.t_cljs$core$async28426(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28429 = (function (p,ch,meta28430){
this.p = p;
this.ch = ch;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){
var self__ = this;
var _28431__$1 = this;
return (new cljs.core.async.t_cljs$core$async28429(self__.p,self__.ch,meta28430__$1));
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){
var self__ = this;
var _28431__$1 = this;
return self__.meta28430;
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28430","meta28430",-1657478422,null)], null);
});

cljs.core.async.t_cljs$core$async28429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28429";

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28429");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28429.
 */
cljs.core.async.__GT_t_cljs$core$async28429 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28429(p__$1,ch__$1,meta28430){
return (new cljs.core.async.t_cljs$core$async28429(p__$1,ch__$1,meta28430));
});

}

return (new cljs.core.async.t_cljs$core$async28429(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28433 = arguments.length;
switch (G__28433) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26934__auto___28473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28473,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28473,out){
return (function (state_28454){
var state_val_28455 = (state_28454[(1)]);
if((state_val_28455 === (7))){
var inst_28450 = (state_28454[(2)]);
var state_28454__$1 = state_28454;
var statearr_28456_28474 = state_28454__$1;
(statearr_28456_28474[(2)] = inst_28450);

(statearr_28456_28474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (1))){
var state_28454__$1 = state_28454;
var statearr_28457_28475 = state_28454__$1;
(statearr_28457_28475[(2)] = null);

(statearr_28457_28475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (4))){
var inst_28436 = (state_28454[(7)]);
var inst_28436__$1 = (state_28454[(2)]);
var inst_28437 = (inst_28436__$1 == null);
var state_28454__$1 = (function (){var statearr_28458 = state_28454;
(statearr_28458[(7)] = inst_28436__$1);

return statearr_28458;
})();
if(cljs.core.truth_(inst_28437)){
var statearr_28459_28476 = state_28454__$1;
(statearr_28459_28476[(1)] = (5));

} else {
var statearr_28460_28477 = state_28454__$1;
(statearr_28460_28477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (6))){
var inst_28436 = (state_28454[(7)]);
var inst_28441 = p.call(null,inst_28436);
var state_28454__$1 = state_28454;
if(cljs.core.truth_(inst_28441)){
var statearr_28461_28478 = state_28454__$1;
(statearr_28461_28478[(1)] = (8));

} else {
var statearr_28462_28479 = state_28454__$1;
(statearr_28462_28479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (3))){
var inst_28452 = (state_28454[(2)]);
var state_28454__$1 = state_28454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28454__$1,inst_28452);
} else {
if((state_val_28455 === (2))){
var state_28454__$1 = state_28454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28454__$1,(4),ch);
} else {
if((state_val_28455 === (11))){
var inst_28444 = (state_28454[(2)]);
var state_28454__$1 = state_28454;
var statearr_28463_28480 = state_28454__$1;
(statearr_28463_28480[(2)] = inst_28444);

(statearr_28463_28480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (9))){
var state_28454__$1 = state_28454;
var statearr_28464_28481 = state_28454__$1;
(statearr_28464_28481[(2)] = null);

(statearr_28464_28481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (5))){
var inst_28439 = cljs.core.async.close_BANG_.call(null,out);
var state_28454__$1 = state_28454;
var statearr_28465_28482 = state_28454__$1;
(statearr_28465_28482[(2)] = inst_28439);

(statearr_28465_28482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (10))){
var inst_28447 = (state_28454[(2)]);
var state_28454__$1 = (function (){var statearr_28466 = state_28454;
(statearr_28466[(8)] = inst_28447);

return statearr_28466;
})();
var statearr_28467_28483 = state_28454__$1;
(statearr_28467_28483[(2)] = null);

(statearr_28467_28483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28455 === (8))){
var inst_28436 = (state_28454[(7)]);
var state_28454__$1 = state_28454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28454__$1,(11),out,inst_28436);
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
});})(c__26934__auto___28473,out))
;
return ((function (switch__26844__auto__,c__26934__auto___28473,out){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28468 = [null,null,null,null,null,null,null,null,null];
(statearr_28468[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28468[(1)] = (1));

return statearr_28468;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28454){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28469){if((e28469 instanceof Object)){
var ex__26848__auto__ = e28469;
var statearr_28470_28484 = state_28454;
(statearr_28470_28484[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28485 = state_28454;
state_28454 = G__28485;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28473,out))
})();
var state__26936__auto__ = (function (){var statearr_28471 = f__26935__auto__.call(null);
(statearr_28471[(6)] = c__26934__auto___28473);

return statearr_28471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28473,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28487 = arguments.length;
switch (G__28487) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto__){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto__){
return (function (state_28550){
var state_val_28551 = (state_28550[(1)]);
if((state_val_28551 === (7))){
var inst_28546 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28552_28590 = state_28550__$1;
(statearr_28552_28590[(2)] = inst_28546);

(statearr_28552_28590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (20))){
var inst_28516 = (state_28550[(7)]);
var inst_28527 = (state_28550[(2)]);
var inst_28528 = cljs.core.next.call(null,inst_28516);
var inst_28502 = inst_28528;
var inst_28503 = null;
var inst_28504 = (0);
var inst_28505 = (0);
var state_28550__$1 = (function (){var statearr_28553 = state_28550;
(statearr_28553[(8)] = inst_28505);

(statearr_28553[(9)] = inst_28504);

(statearr_28553[(10)] = inst_28502);

(statearr_28553[(11)] = inst_28527);

(statearr_28553[(12)] = inst_28503);

return statearr_28553;
})();
var statearr_28554_28591 = state_28550__$1;
(statearr_28554_28591[(2)] = null);

(statearr_28554_28591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (1))){
var state_28550__$1 = state_28550;
var statearr_28555_28592 = state_28550__$1;
(statearr_28555_28592[(2)] = null);

(statearr_28555_28592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (4))){
var inst_28491 = (state_28550[(13)]);
var inst_28491__$1 = (state_28550[(2)]);
var inst_28492 = (inst_28491__$1 == null);
var state_28550__$1 = (function (){var statearr_28556 = state_28550;
(statearr_28556[(13)] = inst_28491__$1);

return statearr_28556;
})();
if(cljs.core.truth_(inst_28492)){
var statearr_28557_28593 = state_28550__$1;
(statearr_28557_28593[(1)] = (5));

} else {
var statearr_28558_28594 = state_28550__$1;
(statearr_28558_28594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (15))){
var state_28550__$1 = state_28550;
var statearr_28562_28595 = state_28550__$1;
(statearr_28562_28595[(2)] = null);

(statearr_28562_28595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (21))){
var state_28550__$1 = state_28550;
var statearr_28563_28596 = state_28550__$1;
(statearr_28563_28596[(2)] = null);

(statearr_28563_28596[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (13))){
var inst_28505 = (state_28550[(8)]);
var inst_28504 = (state_28550[(9)]);
var inst_28502 = (state_28550[(10)]);
var inst_28503 = (state_28550[(12)]);
var inst_28512 = (state_28550[(2)]);
var inst_28513 = (inst_28505 + (1));
var tmp28559 = inst_28504;
var tmp28560 = inst_28502;
var tmp28561 = inst_28503;
var inst_28502__$1 = tmp28560;
var inst_28503__$1 = tmp28561;
var inst_28504__$1 = tmp28559;
var inst_28505__$1 = inst_28513;
var state_28550__$1 = (function (){var statearr_28564 = state_28550;
(statearr_28564[(8)] = inst_28505__$1);

(statearr_28564[(9)] = inst_28504__$1);

(statearr_28564[(10)] = inst_28502__$1);

(statearr_28564[(14)] = inst_28512);

(statearr_28564[(12)] = inst_28503__$1);

return statearr_28564;
})();
var statearr_28565_28597 = state_28550__$1;
(statearr_28565_28597[(2)] = null);

(statearr_28565_28597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (22))){
var state_28550__$1 = state_28550;
var statearr_28566_28598 = state_28550__$1;
(statearr_28566_28598[(2)] = null);

(statearr_28566_28598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (6))){
var inst_28491 = (state_28550[(13)]);
var inst_28500 = f.call(null,inst_28491);
var inst_28501 = cljs.core.seq.call(null,inst_28500);
var inst_28502 = inst_28501;
var inst_28503 = null;
var inst_28504 = (0);
var inst_28505 = (0);
var state_28550__$1 = (function (){var statearr_28567 = state_28550;
(statearr_28567[(8)] = inst_28505);

(statearr_28567[(9)] = inst_28504);

(statearr_28567[(10)] = inst_28502);

(statearr_28567[(12)] = inst_28503);

return statearr_28567;
})();
var statearr_28568_28599 = state_28550__$1;
(statearr_28568_28599[(2)] = null);

(statearr_28568_28599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (17))){
var inst_28516 = (state_28550[(7)]);
var inst_28520 = cljs.core.chunk_first.call(null,inst_28516);
var inst_28521 = cljs.core.chunk_rest.call(null,inst_28516);
var inst_28522 = cljs.core.count.call(null,inst_28520);
var inst_28502 = inst_28521;
var inst_28503 = inst_28520;
var inst_28504 = inst_28522;
var inst_28505 = (0);
var state_28550__$1 = (function (){var statearr_28569 = state_28550;
(statearr_28569[(8)] = inst_28505);

(statearr_28569[(9)] = inst_28504);

(statearr_28569[(10)] = inst_28502);

(statearr_28569[(12)] = inst_28503);

return statearr_28569;
})();
var statearr_28570_28600 = state_28550__$1;
(statearr_28570_28600[(2)] = null);

(statearr_28570_28600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (3))){
var inst_28548 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28550__$1,inst_28548);
} else {
if((state_val_28551 === (12))){
var inst_28536 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28571_28601 = state_28550__$1;
(statearr_28571_28601[(2)] = inst_28536);

(statearr_28571_28601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (2))){
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28550__$1,(4),in$);
} else {
if((state_val_28551 === (23))){
var inst_28544 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28572_28602 = state_28550__$1;
(statearr_28572_28602[(2)] = inst_28544);

(statearr_28572_28602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (19))){
var inst_28531 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28573_28603 = state_28550__$1;
(statearr_28573_28603[(2)] = inst_28531);

(statearr_28573_28603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (11))){
var inst_28502 = (state_28550[(10)]);
var inst_28516 = (state_28550[(7)]);
var inst_28516__$1 = cljs.core.seq.call(null,inst_28502);
var state_28550__$1 = (function (){var statearr_28574 = state_28550;
(statearr_28574[(7)] = inst_28516__$1);

return statearr_28574;
})();
if(inst_28516__$1){
var statearr_28575_28604 = state_28550__$1;
(statearr_28575_28604[(1)] = (14));

} else {
var statearr_28576_28605 = state_28550__$1;
(statearr_28576_28605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (9))){
var inst_28538 = (state_28550[(2)]);
var inst_28539 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28550__$1 = (function (){var statearr_28577 = state_28550;
(statearr_28577[(15)] = inst_28538);

return statearr_28577;
})();
if(cljs.core.truth_(inst_28539)){
var statearr_28578_28606 = state_28550__$1;
(statearr_28578_28606[(1)] = (21));

} else {
var statearr_28579_28607 = state_28550__$1;
(statearr_28579_28607[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (5))){
var inst_28494 = cljs.core.async.close_BANG_.call(null,out);
var state_28550__$1 = state_28550;
var statearr_28580_28608 = state_28550__$1;
(statearr_28580_28608[(2)] = inst_28494);

(statearr_28580_28608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (14))){
var inst_28516 = (state_28550[(7)]);
var inst_28518 = cljs.core.chunked_seq_QMARK_.call(null,inst_28516);
var state_28550__$1 = state_28550;
if(inst_28518){
var statearr_28581_28609 = state_28550__$1;
(statearr_28581_28609[(1)] = (17));

} else {
var statearr_28582_28610 = state_28550__$1;
(statearr_28582_28610[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (16))){
var inst_28534 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
var statearr_28583_28611 = state_28550__$1;
(statearr_28583_28611[(2)] = inst_28534);

(statearr_28583_28611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28551 === (10))){
var inst_28505 = (state_28550[(8)]);
var inst_28503 = (state_28550[(12)]);
var inst_28510 = cljs.core._nth.call(null,inst_28503,inst_28505);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28550__$1,(13),out,inst_28510);
} else {
if((state_val_28551 === (18))){
var inst_28516 = (state_28550[(7)]);
var inst_28525 = cljs.core.first.call(null,inst_28516);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28550__$1,(20),out,inst_28525);
} else {
if((state_val_28551 === (8))){
var inst_28505 = (state_28550[(8)]);
var inst_28504 = (state_28550[(9)]);
var inst_28507 = (inst_28505 < inst_28504);
var inst_28508 = inst_28507;
var state_28550__$1 = state_28550;
if(cljs.core.truth_(inst_28508)){
var statearr_28584_28612 = state_28550__$1;
(statearr_28584_28612[(1)] = (10));

} else {
var statearr_28585_28613 = state_28550__$1;
(statearr_28585_28613[(1)] = (11));

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
});})(c__26934__auto__))
;
return ((function (switch__26844__auto__,c__26934__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26845__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26845__auto____0 = (function (){
var statearr_28586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28586[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26845__auto__);

(statearr_28586[(1)] = (1));

return statearr_28586;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26845__auto____1 = (function (state_28550){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28587){if((e28587 instanceof Object)){
var ex__26848__auto__ = e28587;
var statearr_28588_28614 = state_28550;
(statearr_28588_28614[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28615 = state_28550;
state_28550 = G__28615;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26845__auto__ = function(state_28550){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26845__auto____1.call(this,state_28550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26845__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26845__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto__))
})();
var state__26936__auto__ = (function (){var statearr_28589 = f__26935__auto__.call(null);
(statearr_28589[(6)] = c__26934__auto__);

return statearr_28589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto__))
);

return c__26934__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28617 = arguments.length;
switch (G__28617) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28620 = arguments.length;
switch (G__28620) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28623 = arguments.length;
switch (G__28623) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26934__auto___28670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28670,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28670,out){
return (function (state_28647){
var state_val_28648 = (state_28647[(1)]);
if((state_val_28648 === (7))){
var inst_28642 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28649_28671 = state_28647__$1;
(statearr_28649_28671[(2)] = inst_28642);

(statearr_28649_28671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (1))){
var inst_28624 = null;
var state_28647__$1 = (function (){var statearr_28650 = state_28647;
(statearr_28650[(7)] = inst_28624);

return statearr_28650;
})();
var statearr_28651_28672 = state_28647__$1;
(statearr_28651_28672[(2)] = null);

(statearr_28651_28672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (4))){
var inst_28627 = (state_28647[(8)]);
var inst_28627__$1 = (state_28647[(2)]);
var inst_28628 = (inst_28627__$1 == null);
var inst_28629 = cljs.core.not.call(null,inst_28628);
var state_28647__$1 = (function (){var statearr_28652 = state_28647;
(statearr_28652[(8)] = inst_28627__$1);

return statearr_28652;
})();
if(inst_28629){
var statearr_28653_28673 = state_28647__$1;
(statearr_28653_28673[(1)] = (5));

} else {
var statearr_28654_28674 = state_28647__$1;
(statearr_28654_28674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (6))){
var state_28647__$1 = state_28647;
var statearr_28655_28675 = state_28647__$1;
(statearr_28655_28675[(2)] = null);

(statearr_28655_28675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (3))){
var inst_28644 = (state_28647[(2)]);
var inst_28645 = cljs.core.async.close_BANG_.call(null,out);
var state_28647__$1 = (function (){var statearr_28656 = state_28647;
(statearr_28656[(9)] = inst_28644);

return statearr_28656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28647__$1,inst_28645);
} else {
if((state_val_28648 === (2))){
var state_28647__$1 = state_28647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28647__$1,(4),ch);
} else {
if((state_val_28648 === (11))){
var inst_28627 = (state_28647[(8)]);
var inst_28636 = (state_28647[(2)]);
var inst_28624 = inst_28627;
var state_28647__$1 = (function (){var statearr_28657 = state_28647;
(statearr_28657[(10)] = inst_28636);

(statearr_28657[(7)] = inst_28624);

return statearr_28657;
})();
var statearr_28658_28676 = state_28647__$1;
(statearr_28658_28676[(2)] = null);

(statearr_28658_28676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (9))){
var inst_28627 = (state_28647[(8)]);
var state_28647__$1 = state_28647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28647__$1,(11),out,inst_28627);
} else {
if((state_val_28648 === (5))){
var inst_28624 = (state_28647[(7)]);
var inst_28627 = (state_28647[(8)]);
var inst_28631 = cljs.core._EQ_.call(null,inst_28627,inst_28624);
var state_28647__$1 = state_28647;
if(inst_28631){
var statearr_28660_28677 = state_28647__$1;
(statearr_28660_28677[(1)] = (8));

} else {
var statearr_28661_28678 = state_28647__$1;
(statearr_28661_28678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (10))){
var inst_28639 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28662_28679 = state_28647__$1;
(statearr_28662_28679[(2)] = inst_28639);

(statearr_28662_28679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (8))){
var inst_28624 = (state_28647[(7)]);
var tmp28659 = inst_28624;
var inst_28624__$1 = tmp28659;
var state_28647__$1 = (function (){var statearr_28663 = state_28647;
(statearr_28663[(7)] = inst_28624__$1);

return statearr_28663;
})();
var statearr_28664_28680 = state_28647__$1;
(statearr_28664_28680[(2)] = null);

(statearr_28664_28680[(1)] = (2));


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
});})(c__26934__auto___28670,out))
;
return ((function (switch__26844__auto__,c__26934__auto___28670,out){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28665[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28665[(1)] = (1));

return statearr_28665;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28647){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28666){if((e28666 instanceof Object)){
var ex__26848__auto__ = e28666;
var statearr_28667_28681 = state_28647;
(statearr_28667_28681[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28682 = state_28647;
state_28647 = G__28682;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28670,out))
})();
var state__26936__auto__ = (function (){var statearr_28668 = f__26935__auto__.call(null);
(statearr_28668[(6)] = c__26934__auto___28670);

return statearr_28668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28670,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28684 = arguments.length;
switch (G__28684) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26934__auto___28750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28750,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28750,out){
return (function (state_28722){
var state_val_28723 = (state_28722[(1)]);
if((state_val_28723 === (7))){
var inst_28718 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28724_28751 = state_28722__$1;
(statearr_28724_28751[(2)] = inst_28718);

(statearr_28724_28751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (1))){
var inst_28685 = (new Array(n));
var inst_28686 = inst_28685;
var inst_28687 = (0);
var state_28722__$1 = (function (){var statearr_28725 = state_28722;
(statearr_28725[(7)] = inst_28686);

(statearr_28725[(8)] = inst_28687);

return statearr_28725;
})();
var statearr_28726_28752 = state_28722__$1;
(statearr_28726_28752[(2)] = null);

(statearr_28726_28752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (4))){
var inst_28690 = (state_28722[(9)]);
var inst_28690__$1 = (state_28722[(2)]);
var inst_28691 = (inst_28690__$1 == null);
var inst_28692 = cljs.core.not.call(null,inst_28691);
var state_28722__$1 = (function (){var statearr_28727 = state_28722;
(statearr_28727[(9)] = inst_28690__$1);

return statearr_28727;
})();
if(inst_28692){
var statearr_28728_28753 = state_28722__$1;
(statearr_28728_28753[(1)] = (5));

} else {
var statearr_28729_28754 = state_28722__$1;
(statearr_28729_28754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (15))){
var inst_28712 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28730_28755 = state_28722__$1;
(statearr_28730_28755[(2)] = inst_28712);

(statearr_28730_28755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (13))){
var state_28722__$1 = state_28722;
var statearr_28731_28756 = state_28722__$1;
(statearr_28731_28756[(2)] = null);

(statearr_28731_28756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (6))){
var inst_28687 = (state_28722[(8)]);
var inst_28708 = (inst_28687 > (0));
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28708)){
var statearr_28732_28757 = state_28722__$1;
(statearr_28732_28757[(1)] = (12));

} else {
var statearr_28733_28758 = state_28722__$1;
(statearr_28733_28758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (3))){
var inst_28720 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28722__$1,inst_28720);
} else {
if((state_val_28723 === (12))){
var inst_28686 = (state_28722[(7)]);
var inst_28710 = cljs.core.vec.call(null,inst_28686);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28722__$1,(15),out,inst_28710);
} else {
if((state_val_28723 === (2))){
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28722__$1,(4),ch);
} else {
if((state_val_28723 === (11))){
var inst_28702 = (state_28722[(2)]);
var inst_28703 = (new Array(n));
var inst_28686 = inst_28703;
var inst_28687 = (0);
var state_28722__$1 = (function (){var statearr_28734 = state_28722;
(statearr_28734[(10)] = inst_28702);

(statearr_28734[(7)] = inst_28686);

(statearr_28734[(8)] = inst_28687);

return statearr_28734;
})();
var statearr_28735_28759 = state_28722__$1;
(statearr_28735_28759[(2)] = null);

(statearr_28735_28759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (9))){
var inst_28686 = (state_28722[(7)]);
var inst_28700 = cljs.core.vec.call(null,inst_28686);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28722__$1,(11),out,inst_28700);
} else {
if((state_val_28723 === (5))){
var inst_28690 = (state_28722[(9)]);
var inst_28695 = (state_28722[(11)]);
var inst_28686 = (state_28722[(7)]);
var inst_28687 = (state_28722[(8)]);
var inst_28694 = (inst_28686[inst_28687] = inst_28690);
var inst_28695__$1 = (inst_28687 + (1));
var inst_28696 = (inst_28695__$1 < n);
var state_28722__$1 = (function (){var statearr_28736 = state_28722;
(statearr_28736[(12)] = inst_28694);

(statearr_28736[(11)] = inst_28695__$1);

return statearr_28736;
})();
if(cljs.core.truth_(inst_28696)){
var statearr_28737_28760 = state_28722__$1;
(statearr_28737_28760[(1)] = (8));

} else {
var statearr_28738_28761 = state_28722__$1;
(statearr_28738_28761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (14))){
var inst_28715 = (state_28722[(2)]);
var inst_28716 = cljs.core.async.close_BANG_.call(null,out);
var state_28722__$1 = (function (){var statearr_28740 = state_28722;
(statearr_28740[(13)] = inst_28715);

return statearr_28740;
})();
var statearr_28741_28762 = state_28722__$1;
(statearr_28741_28762[(2)] = inst_28716);

(statearr_28741_28762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (10))){
var inst_28706 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28742_28763 = state_28722__$1;
(statearr_28742_28763[(2)] = inst_28706);

(statearr_28742_28763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (8))){
var inst_28695 = (state_28722[(11)]);
var inst_28686 = (state_28722[(7)]);
var tmp28739 = inst_28686;
var inst_28686__$1 = tmp28739;
var inst_28687 = inst_28695;
var state_28722__$1 = (function (){var statearr_28743 = state_28722;
(statearr_28743[(7)] = inst_28686__$1);

(statearr_28743[(8)] = inst_28687);

return statearr_28743;
})();
var statearr_28744_28764 = state_28722__$1;
(statearr_28744_28764[(2)] = null);

(statearr_28744_28764[(1)] = (2));


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
});})(c__26934__auto___28750,out))
;
return ((function (switch__26844__auto__,c__26934__auto___28750,out){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28745[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28745[(1)] = (1));

return statearr_28745;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28722){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28746){if((e28746 instanceof Object)){
var ex__26848__auto__ = e28746;
var statearr_28747_28765 = state_28722;
(statearr_28747_28765[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28766 = state_28722;
state_28722 = G__28766;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28750,out))
})();
var state__26936__auto__ = (function (){var statearr_28748 = f__26935__auto__.call(null);
(statearr_28748[(6)] = c__26934__auto___28750);

return statearr_28748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28750,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28768 = arguments.length;
switch (G__28768) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26934__auto___28838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26934__auto___28838,out){
return (function (){
var f__26935__auto__ = (function (){var switch__26844__auto__ = ((function (c__26934__auto___28838,out){
return (function (state_28810){
var state_val_28811 = (state_28810[(1)]);
if((state_val_28811 === (7))){
var inst_28806 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28812_28839 = state_28810__$1;
(statearr_28812_28839[(2)] = inst_28806);

(statearr_28812_28839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (1))){
var inst_28769 = [];
var inst_28770 = inst_28769;
var inst_28771 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28810__$1 = (function (){var statearr_28813 = state_28810;
(statearr_28813[(7)] = inst_28770);

(statearr_28813[(8)] = inst_28771);

return statearr_28813;
})();
var statearr_28814_28840 = state_28810__$1;
(statearr_28814_28840[(2)] = null);

(statearr_28814_28840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (4))){
var inst_28774 = (state_28810[(9)]);
var inst_28774__$1 = (state_28810[(2)]);
var inst_28775 = (inst_28774__$1 == null);
var inst_28776 = cljs.core.not.call(null,inst_28775);
var state_28810__$1 = (function (){var statearr_28815 = state_28810;
(statearr_28815[(9)] = inst_28774__$1);

return statearr_28815;
})();
if(inst_28776){
var statearr_28816_28841 = state_28810__$1;
(statearr_28816_28841[(1)] = (5));

} else {
var statearr_28817_28842 = state_28810__$1;
(statearr_28817_28842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (15))){
var inst_28800 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28818_28843 = state_28810__$1;
(statearr_28818_28843[(2)] = inst_28800);

(statearr_28818_28843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (13))){
var state_28810__$1 = state_28810;
var statearr_28819_28844 = state_28810__$1;
(statearr_28819_28844[(2)] = null);

(statearr_28819_28844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (6))){
var inst_28770 = (state_28810[(7)]);
var inst_28795 = inst_28770.length;
var inst_28796 = (inst_28795 > (0));
var state_28810__$1 = state_28810;
if(cljs.core.truth_(inst_28796)){
var statearr_28820_28845 = state_28810__$1;
(statearr_28820_28845[(1)] = (12));

} else {
var statearr_28821_28846 = state_28810__$1;
(statearr_28821_28846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (3))){
var inst_28808 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28810__$1,inst_28808);
} else {
if((state_val_28811 === (12))){
var inst_28770 = (state_28810[(7)]);
var inst_28798 = cljs.core.vec.call(null,inst_28770);
var state_28810__$1 = state_28810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28810__$1,(15),out,inst_28798);
} else {
if((state_val_28811 === (2))){
var state_28810__$1 = state_28810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28810__$1,(4),ch);
} else {
if((state_val_28811 === (11))){
var inst_28774 = (state_28810[(9)]);
var inst_28778 = (state_28810[(10)]);
var inst_28788 = (state_28810[(2)]);
var inst_28789 = [];
var inst_28790 = inst_28789.push(inst_28774);
var inst_28770 = inst_28789;
var inst_28771 = inst_28778;
var state_28810__$1 = (function (){var statearr_28822 = state_28810;
(statearr_28822[(11)] = inst_28790);

(statearr_28822[(7)] = inst_28770);

(statearr_28822[(8)] = inst_28771);

(statearr_28822[(12)] = inst_28788);

return statearr_28822;
})();
var statearr_28823_28847 = state_28810__$1;
(statearr_28823_28847[(2)] = null);

(statearr_28823_28847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (9))){
var inst_28770 = (state_28810[(7)]);
var inst_28786 = cljs.core.vec.call(null,inst_28770);
var state_28810__$1 = state_28810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28810__$1,(11),out,inst_28786);
} else {
if((state_val_28811 === (5))){
var inst_28771 = (state_28810[(8)]);
var inst_28774 = (state_28810[(9)]);
var inst_28778 = (state_28810[(10)]);
var inst_28778__$1 = f.call(null,inst_28774);
var inst_28779 = cljs.core._EQ_.call(null,inst_28778__$1,inst_28771);
var inst_28780 = cljs.core.keyword_identical_QMARK_.call(null,inst_28771,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28781 = ((inst_28779) || (inst_28780));
var state_28810__$1 = (function (){var statearr_28824 = state_28810;
(statearr_28824[(10)] = inst_28778__$1);

return statearr_28824;
})();
if(cljs.core.truth_(inst_28781)){
var statearr_28825_28848 = state_28810__$1;
(statearr_28825_28848[(1)] = (8));

} else {
var statearr_28826_28849 = state_28810__$1;
(statearr_28826_28849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (14))){
var inst_28803 = (state_28810[(2)]);
var inst_28804 = cljs.core.async.close_BANG_.call(null,out);
var state_28810__$1 = (function (){var statearr_28828 = state_28810;
(statearr_28828[(13)] = inst_28803);

return statearr_28828;
})();
var statearr_28829_28850 = state_28810__$1;
(statearr_28829_28850[(2)] = inst_28804);

(statearr_28829_28850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (10))){
var inst_28793 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28830_28851 = state_28810__$1;
(statearr_28830_28851[(2)] = inst_28793);

(statearr_28830_28851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (8))){
var inst_28770 = (state_28810[(7)]);
var inst_28774 = (state_28810[(9)]);
var inst_28778 = (state_28810[(10)]);
var inst_28783 = inst_28770.push(inst_28774);
var tmp28827 = inst_28770;
var inst_28770__$1 = tmp28827;
var inst_28771 = inst_28778;
var state_28810__$1 = (function (){var statearr_28831 = state_28810;
(statearr_28831[(7)] = inst_28770__$1);

(statearr_28831[(8)] = inst_28771);

(statearr_28831[(14)] = inst_28783);

return statearr_28831;
})();
var statearr_28832_28852 = state_28810__$1;
(statearr_28832_28852[(2)] = null);

(statearr_28832_28852[(1)] = (2));


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
});})(c__26934__auto___28838,out))
;
return ((function (switch__26844__auto__,c__26934__auto___28838,out){
return (function() {
var cljs$core$async$state_machine__26845__auto__ = null;
var cljs$core$async$state_machine__26845__auto____0 = (function (){
var statearr_28833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28833[(0)] = cljs$core$async$state_machine__26845__auto__);

(statearr_28833[(1)] = (1));

return statearr_28833;
});
var cljs$core$async$state_machine__26845__auto____1 = (function (state_28810){
while(true){
var ret_value__26846__auto__ = (function (){try{while(true){
var result__26847__auto__ = switch__26844__auto__.call(null,state_28810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26847__auto__;
}
break;
}
}catch (e28834){if((e28834 instanceof Object)){
var ex__26848__auto__ = e28834;
var statearr_28835_28853 = state_28810;
(statearr_28835_28853[(5)] = ex__26848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28854 = state_28810;
state_28810 = G__28854;
continue;
} else {
return ret_value__26846__auto__;
}
break;
}
});
cljs$core$async$state_machine__26845__auto__ = function(state_28810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26845__auto____1.call(this,state_28810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26845__auto____0;
cljs$core$async$state_machine__26845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26845__auto____1;
return cljs$core$async$state_machine__26845__auto__;
})()
;})(switch__26844__auto__,c__26934__auto___28838,out))
})();
var state__26936__auto__ = (function (){var statearr_28836 = f__26935__auto__.call(null);
(statearr_28836[(6)] = c__26934__auto___28838);

return statearr_28836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26936__auto__);
});})(c__26934__auto___28838,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545334057611
