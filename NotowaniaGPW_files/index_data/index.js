(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bck1 = function() {
	this.initialize(img.bck1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1260,600);


(lib.bck2 = function() {
	this.initialize(img.bck2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1260,600);


(lib.bck3 = function() {
	this.initialize(img.bck3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1260,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjADBIAAmBIGBAAIAAGBg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-19.2,38.6,38.5);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bck3();
	this.instance.setTransform(-375,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-100,1260,600);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAmIAAg2IAPAAIAAA2gAgHgXIAAgOIAPAAIAAAOg");
	this.shape.setTransform(33.45,-74.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAmIgPgVIgHAAIAAAVIgPAAIAAhLIAPAAIAAApIAHAAIAPgUIAQAAIAAAAIgTAaIAVAbIAAABg");
	this.shape_1.setTransform(29.125,-74.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAnQgGAAgDgDQgDgCAAgFIAAgEIAFgJIgFACIgFAAQgMAAgIgIQgIgIAAgMQAAgMAIgIQAIgIALAAQANAAAHAIQAIAHAAANIAAACIgBACIgnAAQABAGADACQAEAEAFAAQAEAAADgCQADgCABgDIAPAAIgBAFIgEAJIgDAHIgBAFIABACIADABIAFAAIAAALgAANgQQgBgFgDgCQgEgDgFAAQgEAAgEADQgDACgBAFIAZAAIAAAAg");
	this.shape_2.setTransform(22.475,-72.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcIAAg3IAjAAIgEAOIgQAAIAAApg");
	this.shape_3.setTransform(17.425,-73.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAfQgIgJAAgMQAAgLAIgJQAIgHAMgBQADAAAEACIAHAEIAAgaIAPAAIAABMIgLAAIgDgGQgDADgEACQgEACgEAAQgMgBgIgHgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgFgGABQgGgBgDAFg");
	this.shape_4.setTransform(9.425,-74.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgHAMgBQANABAIAHQAJAJgBALQABAMgJAJQgIAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAHAAAEgEQADgEAAgHQAAgGgDgEQgEgFgHABQgGgBgDAFg");
	this.shape_5.setTransform(2.9,-73.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAVQgIgJAAgMQAAgMAIgIQAIgHALgBQANAAAHAIQAIAIAAAMIAAACIgBACIgnAAQABAGADADQAEADAFAAQAEAAADgCQADgCABgDIAPAAQgBAJgHAFQgIAGgKAAQgMgBgIgHgAANgFQgBgFgDgDQgEgCgFAAQgEAAgEACQgDADgBAFIAZAAIAAAAg");
	this.shape_6.setTransform(-5.325,-73.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAcIAAgeQAAgFgCgDQgEgEgFAAQgFAAgDAEQgCADAAAFIAAAeIgQAAIAAg2IALAAIADAGQACgEAFgCQAEgBAEAAQALAAAGAGQAGAGABALIAAAgg");
	this.shape_7.setTransform(-11.75,-73.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAnIAAhMIALAAIADAGQADgDAEgCQAEgCAEAAQAMABAIAHQAIAJAAAMQAAALgIAJQgIAHgMABQgDAAgEgCIgHgEIAAAagAgKgUQgEAEAAAHQAAAHAEADQAEAEAGAAQAGAAAEgEQADgDAAgHQAAgHgDgEQgEgFgGABQgGgBgEAFg");
	this.shape_8.setTransform(-18.375,-72.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAnQgGAAgDgDQgDgCAAgFIAAgEIAFgJIgFACIgFAAQgMAAgIgIQgIgIAAgMQAAgMAIgIQAIgIALAAQANAAAHAIQAIAHAAANIAAACIgBACIgnAAQABAGADACQAEAEAFAAQAEAAADgCQADgCABgDIAPAAIgBAFIgEAJIgDAHIgBAFIABACIADABIAFAAIAAALgAANgQQgBgFgDgCQgEgDgFAAQgEAAgEADQgDACgBAFIAZAAIAAAAg");
	this.shape_9.setTransform(-25.125,-72.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAiQgLAAgFgFQgFgFgBgLIAAgVIgJAAIAAgCIAWgXIACAAIAAANIAQAAIAAAMIgQAAIAAAUQAAAEABACQACACAFAAIAJAAIAAAOg");
	this.shape_10.setTransform(-30.7,-74.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAXQgHgFAAgJIAPAAQAAADACADQADACAEAAQAEAAACgCQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgIgBIgEgBQgJgBgEgEQgFgEgBgHQABgIAFgFQAHgFAKAAQAKABAGAFQAHAEAAAIIgOAAQAAgCgDgCQgCgCgEAAIgGABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQACABAEABIAFABQAKABAEAEQAFAEAAAGQAAAJgGAEQgHAFgKABQgKAAgHgGg");
	this.shape_11.setTransform(-35.6,-73.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAIgHAMgBQANABAJAHQAHAJAAALQAAAMgHAJQgJAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgFgGABQgGgBgDAFg");
	this.shape_12.setTransform(-41.7,-73.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAfQgIgJAAgMQAAgLAIgJQAIgHAMgBQADAAAEACIAHAEIAAgaIAPAAIAABMIgLAAIgDgGQgDADgEACQgEACgEAAQgMgBgIgHgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgFgGABQgGgBgDAFg");
	this.shape_13.setTransform(-48.625,-74.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAmIAAgNIAIAAQAGgBABgBQADgCABgEIAAAAIgEAAIgVg2IAPAAIAOAoIAPgoIAPAAIgVA7QgEAIgFAEQgEAEgKAAg");
	this.shape_14.setTransform(-56.75,-72.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAfQgIgJAAgMQAAgLAIgJQAIgHAMgBQADAAAEACIAHAEIAAgaIAPAAIAABMIgLAAIgDgGQgDADgEACQgEACgEAAQgMgBgIgHgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgFgGABQgGgBgDAFg");
	this.shape_15.setTransform(-63.475,-74.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgHAMgBQANABAIAHQAJAJgBALQABAMgJAJQgIAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAHAAAEgEQADgEAAgHQAAgGgDgEQgEgFgHABQgGgBgDAFg");
	this.shape_16.setTransform(-70,-73.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAmIAAgfQAAgFgCgCQgEgEgFAAQgFAAgDAEQgCACAAAFIAAAfIgQAAIAAhLIAQAAIAAAZIAGgEIAHgBQALAAAGAGQAGAGABAKIAAAhg");
	this.shape_17.setTransform(-76.55,-74.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAVQgHgJgBgMQABgLAHgJQAJgHAMgBQALAAAIAHQAHAGACALIgQAAQgBgEgDgEQgEgCgEAAQgGgBgDAFQgEAEAAAGQAAAHAEAEQADAEAGAAQAEAAAEgCQADgEABgFIAQAAQgCAMgHAGQgIAHgLAAQgMgBgJgHg");
	this.shape_18.setTransform(-83.15,-73.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgHAMgBQANABAJAHQAHAJABALQgBAMgHAJQgJAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAFgEQADgEAAgHQAAgGgDgEQgFgFgGABQgGgBgDAFg");
	this.shape_19.setTransform(-89.65,-73.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcAcIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAg2IAKAAIADAGQADgEAEgCQAEgBAEAAQAGAAAFACQADACADAEQADgEAFgCQAEgCAGAAQAKAAAGAGQAGAGAAAKIAAAhg");
	this.shape_20.setTransform(-97.875,-73.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAIgHAMgBQAEAAAEACQAEACADADIADgGIALAAIAAA3IgLAAIgDgGQgDADgEACQgEACgEAAQgMgBgIgHgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgFgGABQgGgBgDAFg");
	this.shape_21.setTransform(-106.575,-73.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAXQgHgFAAgJIAPAAQAAADACADQADACAEAAQAEAAACgCQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgIgBIgEgBQgJgBgEgEQgFgEgBgHQABgIAFgFQAHgFAKAAQAKABAGAFQAHAEAAAIIgOAAQAAgCgDgCQgCgCgEAAIgGABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQACABAEABIAFABQAKABAEAEQAFAEAAAGQAAAJgGAEQgHAFgKABQgKAAgHgGg");
	this.shape_22.setTransform(-112.55,-73.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAkQgLgLAAgRIAAg1IAYAAIAAAyQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAgyIAYAAIAAA1QAAARgLALQgMAKgTAAQgSAAgMgKg");
	this.shape_23.setTransform(-22.825,-86.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbAmQgLgJAAgOIAXAAQAAAGAFADQAFAEAGAAQAHAAAEgDQADgCAAgDQAAgEgDgCQgEgCgHgBIgIgBQgPgDgIgGQgHgHgBgLQAAgNAKgIQAKgIARAAQAQAAALAIQALAJAAANIgWAAQgBgFgEgDQgEgDgHAAQgGAAgEACQgCACAAAEQgBADAEACQADADAHABIAIABQAQADAIAGQAIAGAAAKQAAAOgLAJQgKAIgSAAQgQAAgMgJg");
	this.shape_24.setTransform(-32.6,-86.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAiQgOgNAAgVQAAgUAOgNQAMgNAUAAQAUAAAMANQAMAMAAAVIAAADIAAAEIhBAAQABAJAHAFQAFAFAJAAQAHAAAFgDQAFgDACgFIAYAAQgCAOgMAJQgMAJgRAAQgUAAgNgNgAAWgJQgCgIgGgEQgFgFgJABQgIAAgEADQgFAFgDAIIAqAAIAAAAg");
	this.shape_25.setTransform(-42.4,-86.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAuIAAgyQAAgJgGgFQgEgFgJAAQgHAAgGAFQgFAFAAAJIAAAyIgYAAIAAhZIARAAIAEAJQAGgFAGgDQAHgDAHAAQASAAAKALQALAKAAARIAAA1g");
	this.shape_26.setTransform(-52.9,-86.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmAtIAAgVIAugvIgtAAIAAgVIBKAAIAAAVIguAvIAwAAIAAAVg");
	this.shape_27.setTransform(-62.925,-86.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLA+IAAhZIAXAAIAABZgAgLgmIAAgXIAXAAIAAAXg");
	this.shape_28.setTransform(-69.925,-88);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AguA5IAAhyIAwAAQATABALAHQALAJAAAPQAAAHgDAHQgEAGgHAEQAJACAEAIQAFAGAAAKQAAAPgLAJQgLAIgTAAgAgVAlIAZAAQAIgBAEgDQAFgEAAgGQAAgHgFgEQgEgDgIAAIgZAAgAgVgKIAWAAQAIAAAEgEQAFgDAAgGQAAgGgFgEQgEgDgIAAIgWAAg");
	this.shape_29.setTransform(-77.725,-87.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLA+IAAhZIAXAAIAABZgAgLgmIAAgXIAXAAIAAAXg");
	this.shape_30.setTransform(-89.125,-88);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AATAuIAAgyQAAgJgGgFQgEgFgJAAQgHAAgGAFQgFAFAAAJIAAAyIgZAAIAAhZIASAAIAEAJQAGgFAGgDQAHgDAHAAQASAAAKALQALAKAAARIAAA1g");
	this.shape_31.setTransform(-96.9,-86.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2A5IAAhyIAyAAQAYAAASAQQAQARAAAYQAAAZgQAQQgSAQgYAAgAgdAjIAZAAQAOAAAKgKQAJgKAAgPQAAgPgJgJQgKgJgOAAIgZAAg");
	this.shape_32.setTransform(-108.55,-87.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,-101.4,240.39999999999998,34.80000000000001);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bck2();
	this.instance.setTransform(-375,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-100,1260,600);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgKIAAggIAPAAIAAAeQAAAFADADQACADAFAAQAFAAADgDQADgDAAgFIAAgeIAPAAIAAAgQAAAKgIAGQgGAHgMAAQgLAAgHgGg");
	this.shape.setTransform(-33.85,-71.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAfQgIgIAAgNQAAgLAIgJQAIgIAMAAQADABAEABIAHAEIAAgZIAPAAIAABKIgLAAIgDgFQgDADgEACQgEABgEAAQgMAAgIgHgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgFgGABQgGgBgDAFg");
	this.shape_1.setTransform(-40.675,-72.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAnQgGAAgDgDQgDgCAAgFIAAgEIAFgIIgFABIgFAAQgMAAgIgIQgIgIAAgLQAAgNAIgIQAIgIALAAQANAAAHAHQAIAJAAANIAAABIgBACIgnAAQABAGADACQAEADAFABQAEgBADgCQADgBABgCIAPAAIgBADIgEAJIgDAIIgBAFIABACIADABIAFAAIAAALgAANgQQgBgEgDgDQgEgDgFAAQgEAAgEADQgDADgBAEIAZAAIAAAAg");
	this.shape_2.setTransform(-47.025,-70.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAbIAAgMIAbgdIgbAAIAAgNIAtAAIAAANIgbAdIAdAAIAAAMg");
	this.shape_3.setTransform(-52.9,-71.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAbIAAg2IAjAAIgEAOIgQAAIAAAog");
	this.shape_4.setTransform(-57.575,-71.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAbIAAgMIAcgdIgbAAIAAgNIAtAAIAAANIgcAdIAdAAIAAAMg");
	this.shape_5.setTransform(-64.65,-71.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAmIgPgWIgHAAIAAAWIgPAAIAAhLIAPAAIAAApIAHAAIAPgUIAQAAIAAABIgTAZIAVAcIAAAAg");
	this.shape_6.setTransform(-72.075,-72.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAVQgJgIABgNQgBgLAJgJQAIgIAMAAQANAAAIAIQAJAJgBALQABANgJAIQgIAHgNAAQgMAAgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAHAAADgEQAEgEAAgHQAAgGgEgEQgDgFgHABQgGgBgDAFg");
	this.shape_7.setTransform(-78.9,-71.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAbIAAg2IAjAAIgEAOIgQAAIAAAog");
	this.shape_8.setTransform(-84.075,-71.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAmIAAgNIAIAAQAEAAACgCQADgCACgDIAAgBIgFAAIgVg2IAQAAIANAoIAPgoIAPAAIgWA6QgCAKgGADQgEAEgJAAg");
	this.shape_9.setTransform(-91.55,-70.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAiQgLAAgFgFQgFgFAAgLIAAgVIgJAAIAAgCIAUgXIADAAIAAANIAPAAIAAAMIgPAAIAAAUQAAAEACACQABACAEAAIAJAAIAAAOg");
	this.shape_10.setTransform(-97.05,-72.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAbIAAg2IAjAAIgEAOIgQAAIAAAog");
	this.shape_11.setTransform(-101.075,-71.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQAEABAEABQAEACADADIADgGIALAAIAAA2IgLAAIgDgFQgDADgEACQgEABgEAAQgMAAgIgHgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgFgGABQgGgBgDAFg");
	this.shape_12.setTransform(-107.275,-71.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAbIgLgcIgLAcIgOAAIgTg2IAOAAIANAkIALgbIgDgJIAOAAIAOAkIAKgkIAPAAIgRA2g");
	this.shape_13.setTransform(-115,-71.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAbIAAgMIAcgdIgbAAIAAgNIAtAAIAAANIgcAdIAdAAIAAAMg");
	this.shape_14.setTransform(-122.25,-71.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAVQgHgIgBgNQABgLAHgJQAJgIAMAAQALABAIAGQAHAHACALIgQAAQgBgGgEgCQgDgDgEAAQgFgBgFAFQgDAEAAAGQAAAHADAEQAFAEAFAAQAEAAADgCQAEgEABgEIAQAAQgCALgHAGQgIAHgLgBQgMAAgJgHg");
	this.shape_15.setTransform(-128.25,-71.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAiQgNgOAAgUQAAgUANgNQANgNATAAQAUAAAMANQANANAAAUIAAADIAAAEIhCAAQACAJAFAFQAHAFAIAAQAHAAAFgDQAFgDACgFIAYAAQgDAOgLAJQgMAJgRAAQgUAAgNgNgAAVgJQgBgHgGgFQgFgFgJAAQgIABgFAEQgFAEgCAIIApAAIAAAAg");
	this.shape_16.setTransform(5.95,-84.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAiQgNgOAAgUQAAgUANgMQAOgOATAAQATAAANALQAMALADASIgaAAQgCgJgFgEQgGgFgIAAQgJAAgGAHQgGAHAAAKQAAALAGAHQAGAHAJAAQAIAAAGgFQAFgFACgIIAaAAQgDASgMALQgNALgTAAQgTAAgOgNg");
	this.shape_17.setTransform(-4.375,-84.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAmQgMgJAAgOIAYAAQAAAFAFAEQAFADAHAAQAGAAADgCQAEgCAAgDQAAgEgEgCQgCgCgIgBIgIgBQgPgCgIgIQgIgFAAgMQAAgNALgIQAJgIARAAQAQAAAMAIQAKAIABANIgYAAQABgFgFgCQgEgDgHAAQgGAAgEACQgDACAAAEQABAEADACQADACAHABIAJABQAPACAIAHQAHAFAAALQAAAOgKAJQgKAIgRAAQgRAAgMgJg");
	this.shape_18.setTransform(-14.2,-84.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_19.setTransform(-21.225,-85.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAiQgNgOAAgUQAAgUANgMQAOgOAUAAQAVAAAOAOQANAMAAAUQAAAUgNAOQgOANgVAAQgUAAgOgNgAgQgRQgGAHAAAKQAAALAGAHQAHAHAJAAQAKAAAHgHQAHgHAAgLQAAgKgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_20.setTransform(-29.075,-84.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguA6IAAhzIAvAAQAWAAAMAKQAMALAAATQAAASgMAKQgMALgWAAIgWAAIAAAkgAgVAAIAXAAQAKAAAFgEQAFgEAAgJQAAgJgFgEQgFgFgKABIgXAAg");
	this.shape_21.setTransform(-39.775,-85.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAtIgTgvIgSAvIgXAAIgghZIAZAAIAUA7IATgsIgGgPIAYAAIAWA7IASg7IAXAAIgcBZg");
	this.shape_22.setTransform(-56.225,-84.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAA6IAAhbIgXAAIAHgYIAoAAIAABzg");
	this.shape_23.setTransform(-70.3,-85.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAtIAAhZIA7AAIgIAXIgaAAIAABCg");
	this.shape_24.setTransform(-79.2,-84.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAiQgOgOAAgUQAAgUANgNQANgNAUAAQAUAAANANQAMANgBAUIAAADIAAAEIhBAAQABAJAHAFQAFAFAJAAQAHAAAFgDQAFgDABgFIAZAAQgDAOgLAJQgMAJgRAAQgUAAgNgNgAAVgJQgBgHgFgFQgHgFgIAAQgIABgEAEQgGAEgBAIIAoAAIAAAAg");
	this.shape_25.setTransform(-88.6,-84.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAuAuIAAgzQAAgJgEgEQgFgFgIAAQgHAAgFAFQgEAEgBAJIAAAzIgXAAIAAgzQAAgJgFgEQgEgFgIAAQgIAAgFAFQgEAEAAAJIAAAzIgZAAIAAhZIASAAIAEAIQAFgFAGgCQAHgDAHAAQAJAAAIAEQAGADAFAHQAFgHAIgDQAHgEAKAAQAQAAAKAKQAKAKAAAQIAAA3g");
	this.shape_26.setTransform(-101.85,-84.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAjQgLgJAAgTIAAg0IAYAAIAAAyQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAgyIAYAAIAAA0QAAASgLAKQgMALgTAAQgSAAgMgLg");
	this.shape_27.setTransform(-115.325,-84.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATAuIAAgxQAAgJgGgGQgEgFgJAAQgIAAgFAFQgFAFAAAKIAAAxIgYAAIAAhZIARAAIAEAJQAGgFAGgDQAHgDAHAAQARAAALAKQALALgBARIAAA1g");
	this.shape_28.setTransform(-125.9,-84.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-99.4,240.4,44.00000000000001);


(lib.Tween3copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAfQgGgGAAgJQAAgJAGgGQAGgFAKAAQAJAAAGAFQAGAGAAAJQAAAJgGAGQgGAFgJAAQgKAAgGgFgAAUAJQgCADAAAEQAAAEACACQADADAEAAQADAAACgDQADgCAAgEQAAgEgDgDQgCgCgDAAQgEAAgDACgAgcAjIAqhFIAPAAIgrBFgAgpAAQgGgGAAgJQAAgJAGgFQAHgGAJAAQAJAAAGAGQAGAFAAAJQAAAJgGAGQgGAFgJAAQgJAAgHgFgAgggVQgCACAAAEQAAAEACADQADACAEAAQADAAADgCQADgDAAgEQAAgEgDgCQgDgDgDAAQgEAAgDADg");
	this.shape.setTransform(-29.6,-62.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAjIAAg3IgOAAIAFgOIAYAAIAABFg");
	this.shape_1.setTransform(-36.975,-62.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAaQgIgKAAgQQAAgPAIgKQAIgKANAAQAOAAAIAKQAIAKAAAPQAAAQgIAKQgIAKgOAAQgNAAgIgKgAgKgPQgEAGAAAJQAAAKAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgLQAAgJgEgGQgEgGgHAAQgGAAgEAGg");
	this.shape_2.setTransform(-42.175,-62.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAjIAAg3IgOAAIAFgOIAYAAIAABFg");
	this.shape_3.setTransform(-47.925,-62.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAeQgIgHAAgNQAAgLAIgIQAIgJAMABQADgBAEACIAHAEIAAgZIAPAAIAABKIgLAAIgDgFQgDADgEACQgEACgEgBQgMABgIgJgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgEgGgBQgGABgDAEg");
	this.shape_4.setTransform(-55.075,-62.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQANgBAIAJQAIAIAAALQAAANgIAHQgIAJgNgBQgMABgIgJgAgJgKQgEAEAAAGQAAAHAEAEQAEAEAFAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGgBQgFABgEAEg");
	this.shape_5.setTransform(-61.6,-61.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAmIAEgNIAYAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIAAgHQgDADgEABQgEABgDABQgMAAgIgJQgIgHAAgLQAAgMAIgIQAIgHAMAAQAEgBAEACIAIAFIADgFIAKAAIAAA2QAAAMgEAEQgFAFgMgBgAgJgUQgEAEAAAGQAAAGAEAEQAEADAGAAQAGAAAEgDQAEgEAAgGQAAgGgEgEQgEgFgGAAQgGAAgEAFg");
	this.shape_6.setTransform(-70.325,-60.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgGgDgDQgEgDgFAAQgEAAgDADQgEADAAAGIAAAeIgOAAIAAg2IAKAAIADAFQADgCAEgDQAEgBAEAAQALAAAGAGQAHAHAAAKIAAAgg");
	this.shape_7.setTransform(-76.85,-61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAmIAAg2IAOAAIAAA2gAgGgWIAAgPIAOAAIAAAPg");
	this.shape_8.setTransform(-81.7,-62.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAXQgHgFAAgJIAOAAQABAEADACQADACADAAQAEAAACgBQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgGgCIgFgBQgJgCgFgEQgEgDAAgHQgBgIAHgFQAFgFALABQAJAAAHAEQAHAGAAAHIgOAAQAAgDgDgCQgDgBgDAAIgGABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAQACACADAAIAFABQAKACAFADQAEADAAAHQAAAIgGAGQgGAEgLAAQgKAAgHgFg");
	this.shape_9.setTransform(-85.95,-61.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQAEgBAEACQAEACADADIADgFIALAAIAAA1IgLAAIgDgFQgDADgEACQgEACgEgBQgMABgIgJgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgGgBQgGABgDAEg");
	this.shape_10.setTransform(-92.375,-61.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAUQgIgHAAgNQAAgMAIgHQAIgJALABQANAAAHAHQAIAIAAAMIAAABIgBADIgnAAQABAGADADQAEADAFAAQAEAAADgCQADgBABgEIAPAAQgBAJgHAFQgIAFgKAAQgMABgIgJgAANgFQgBgFgDgDQgEgDgFAAQgEAAgEADQgDADgBAFIAZAAIAAAAg");
	this.shape_11.setTransform(-98.725,-61.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAmIAAhLIAOAAIAABLg");
	this.shape_12.setTransform(-103.35,-62.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAjQgLgKAAgSIAAg0IAYAAIAAAyQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAgyIAYAAIAAA0QAAASgLAKQgMALgTAAQgSAAgMgLg");
	this.shape_13.setTransform(-12.325,-73.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAmQgMgJABgOIAXAAQAAAGAFADQAFADAGAAQAHAAADgBQAEgCAAgFQAAgDgEgCQgDgCgHgBIgIgBQgPgDgIgHQgIgGABgLQAAgNAKgIQAKgIAQAAQARAAALAJQALAHgBANIgWAAQAAgEgFgDQgFgDgGAAQgGAAgDACQgEADAAADQAAAEAEABQADADAHABIAJABQAPADAIAGQAIAGgBALQAAANgKAIQgLAJgRAAQgQAAgMgJg");
	this.shape_14.setTransform(-22.1,-73.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAiQgOgOAAgUQAAgUANgNQANgNAUAAQAUAAANANQAMAMgBAVIAAACIAAAFIhBAAQABAJAHAFQAFAFAJAAQAHAAAFgDQAFgDABgFIAZAAQgDAOgLAJQgMAJgRAAQgUAAgNgNgAAVgJQgBgIgFgEQgHgEgIgBQgIAAgEAFQgGAEgBAIIAoAAIAAAAg");
	this.shape_15.setTransform(-31.9,-73.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATAuIAAgyQAAgIgFgFQgFgGgJAAQgHAAgGAFQgFAGAAAIIAAAyIgYAAIAAhZIARAAIAEAJQAFgFAHgDQAHgDAHAAQARAAALAKQAKALAAARIAAA1g");
	this.shape_16.setTransform(-42.4,-73.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmAtIAAgUIAugxIgtAAIAAgUIBKAAIAAAUIguAxIAwAAIAAAUg");
	this.shape_17.setTransform(-52.425,-73.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLA+IAAhZIAXAAIAABZgAgLglIAAgYIAXAAIAAAYg");
	this.shape_18.setTransform(-59.425,-75.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguA6IAAhyIAwAAQATgBALAJQALAIAAAOQAAAJgDAGQgEAGgHAEQAJADAEAGQAFAIAAAJQAAAQgLAIQgLAJgTAAgAgVAkIAZAAQAIABAEgEQAFgDAAgHQAAgHgFgDQgEgFgIAAIgZAAgAgVgKIAWAAQAIAAAEgDQAFgEAAgGQAAgGgFgEQgEgDgIAAIgWAAg");
	this.shape_19.setTransform(-67.225,-75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLA+IAAhZIAXAAIAABZgAgLglIAAgYIAXAAIAAAYg");
	this.shape_20.setTransform(-78.625,-75.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATAuIAAgyQAAgIgGgFQgEgGgJAAQgIAAgFAFQgFAGAAAIIAAAyIgYAAIAAhZIARAAIAEAJQAFgFAHgDQAHgDAHAAQARAAALAKQAKALAAARIAAA1g");
	this.shape_21.setTransform(-86.4,-73.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag2A6IAAhyIAxAAQAZgBARARQARAQAAAYQAAAYgRARQgRAQgZABgAgcAiIAXAAQAPAAAJgJQAKgJAAgQQAAgOgKgKQgJgKgPAAIgXAAg");
	this.shape_22.setTransform(-98.05,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,-88.9,240.39999999999998,34.800000000000004);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAUQgEgEAAgGIAJAAQAAADADABQAAAAAAABQABAAAAAAQABAAABAAQAAAAAAAAQADAAACgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgDAAIgIAAIAAgGIAHAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAABIgJAAQAAgHAEgDQAFgFAGAAQAHAAAEAFQAFADgBAGQABADgCACQgBADgDABQADABACADQABADAAAEQABAFgFAEQgFAEgGgBQgHABgFgEg");
	this.shape.setTransform(65.7,-65.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcAcIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAg2IAKAAIADAFQADgDAEgCQAEgBAEAAQAGAAAFACQADACADAEQADgEAFgCQAEgCAGAAQAKAAAGAGQAGAGAAAKIAAAhg");
	this.shape_1.setTransform(58.875,-61.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAdQgHgHAAgMQAAgFACgFQABgEAFgHIAPgYIAPAAIgNAXIABAAIACgBQALAAAHAHQAHAGAAAKQAAALgIAIQgIAHgLAAQgLAAgIgHgAgJACQgDADAAAFQAAAGADADQAEADAFAAQAFAAAEgDQADgDAAgGQAAgFgDgDQgEgDgFAAQgFAAgEADg");
	this.shape_2.setTransform(48.975,-62.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAQIAGgfIAPAAIgJAfg");
	this.shape_3.setTransform(44.15,-58.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAkIAOgXIgCABIAAAAQgMAAgHgHQgHgHAAgJQAAgLAIgHQAHgIAMAAQALAAAHAHQAIAIAAALQAAAFgBAEIgHAMIgPAYgAgIgSQgEADAAAGQAAAFAEAEQAEACAFAAQAFAAAEgCQADgEAAgFQAAgGgDgDQgEgDgFAAQgFAAgEADg");
	this.shape_4.setTransform(39.9,-62.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAkIAAgNIAXgUIAHgHQACgDAAgEQAAgFgDgCQgCgDgEAAQgEAAgCACQgDADAAAFIgPAAQAAgLAHgGQAHgHAKAAQALAAAHAGQAHAHAAAKQAAAHgEAFQgEAFgIAIIgLAKIAbAAIAAANg");
	this.shape_5.setTransform(33.775,-62.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQANgBAIAJQAIAIAAALQAAANgIAHQgIAJgNgBQgMABgIgJgAgJgKQgEAEAAAGQAAAHAEAEQAEAEAFAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGgBQgFABgEAEg");
	this.shape_6.setTransform(25.7,-61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAeQgIgHAAgNQAAgLAIgIQAIgJAMABQADgBAEACIAHAEIAAgZIAPAAIAABKIgLAAIgDgFQgDADgEACQgEACgEgBQgMABgIgJgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgEgGgBQgGABgDAEg");
	this.shape_7.setTransform(18.775,-62.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQAEgBAEACQAEACADADIADgFIALAAIAAA1IgLAAIgDgFQgDADgEACQgEACgEgBQgMABgIgJgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgGgBQgGABgDAEg");
	this.shape_8.setTransform(10.125,-61.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMAbIgMgcIgKAcIgPAAIgTg1IAQAAIAMAjIAMgaIgEgJIAOAAIANAjIAMgjIANAAIgRA1g");
	this.shape_9.setTransform(2.4,-61.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAUQgJgHABgNQgBgLAJgIQAIgJAMABQANgBAIAJQAJAIgBALQABANgJAHQgIAJgNgBQgMABgIgJgAgJgKQgEAEAAAGQAAAHAEAEQAEAEAFAAQAHAAADgEQAEgEABgHQgBgGgEgEQgDgEgHgBQgFABgEAEg");
	this.shape_10.setTransform(-5.45,-61.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKAmIgPgWIgHAAIAAAWIgPAAIAAhLIAPAAIAAApIAHAAIAPgUIAQAAIAAAAIgTAZIAVAcIAAABg");
	this.shape_11.setTransform(-11.575,-62.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgGgDgDQgEgDgFAAQgEAAgDADQgEADAAAGIAAAeIgOAAIAAg2IAKAAIADAFQADgCAEgDQAEgBAEAAQALAAAGAGQAHAHAAAKIAAAgg");
	this.shape_12.setTransform(-18.35,-61.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgKIAAggIAPAAIAAAeQAAAGADADQADACAEAAQAFAAADgCQADgDAAgGIAAgeIAPAAIAAAgQAAAKgHAHQgIAGgLAAQgLAAgHgGg");
	this.shape_13.setTransform(-24.9,-61.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAeQgIgHAAgNQAAgLAIgIQAIgJAMABQADgBAEACIAHAEIAAgZIAPAAIAABKIgLAAIgDgFQgDADgEACQgEACgEgBQgMABgIgJgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgEgGgBQgGABgDAEg");
	this.shape_14.setTransform(-31.725,-62.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQAEgBAEACQAEACADADIADgFIALAAIAAA1IgLAAIgDgFQgDADgEACQgEACgEgBQgMABgIgJgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgGgBQgGABgDAEg");
	this.shape_15.setTransform(-38.575,-61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAmIAAgaIgIAFIAAgNIAIgFIAAgkIAOAAIAAAaIAJgGIAAAPIgJAEIAAAkg");
	this.shape_16.setTransform(-43.525,-62.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAeQgJgHABgNQgBgLAJgIQAIgJALABQAMAAAHAGQAJAHAAAJIgOAAQgCgEgEgCQgDgEgFAAQgEABgFAEQgDADAAAHQAAAHADAEQAFAEAEAAQAFAAADgDQAEgCACgGIAOAAQAAALgJAHQgHAGgMAAQgLABgIgJgAgGgVIALgQIAPAAIgNAQg");
	this.shape_17.setTransform(-50.35,-62.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAhQgHgFAAgJIAPAAQAAAEACACQADACAEAAQAEAAACgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgIgCIgEgBQgJgCgEgEQgFgEgBgGQABgIAFgFQAHgFAKABQAKAAAGAEQAHAGAAAHIgOAAQAAgDgDgCQgCgBgEAAIgGABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQACACAEAAIAFABQAKACAEAEQAFADAAAHQAAAIgGAGQgHAEgKAAQgKAAgHgFgAgGgVIAKgQIAQAAIgNAQg");
	this.shape_18.setTransform(-56.3,-62.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQANgBAJAJQAHAIAAALQAAANgHAHQgJAJgNgBQgMABgIgJgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGgBQgGABgDAEg");
	this.shape_19.setTransform(-62.4,-61.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgGgEgDQgDgDgFAAQgFAAgDADQgDADAAAGIAAAeIgPAAIAAg2IALAAIADAFQADgCAEgDQAEgBAEAAQALAAAGAGQAHAHgBAKIAAAgg");
	this.shape_20.setTransform(-68.95,-61.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcAcIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAg2IAKAAIADAFQADgDAEgCQAEgBAEAAQAGAAAFACQADACADAEQADgEAFgCQAEgCAGAAQAKAAAGAGQAGAGAAAKIAAAhg");
	this.shape_21.setTransform(-77.275,-61.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAUQgIgHAAgNQAAgMAIgHQAIgJALABQANAAAHAHQAIAIAAAMIAAABIgBADIgnAAQABAGADADQAEADAFAAQAEAAADgCQADgBABgEIAPAAQgBAJgHAFQgIAFgKAAQgMABgIgJgAANgFQgBgFgDgDQgEgDgFAAQgEAAgEADQgDADgBAFIAZAAIAAAAg");
	this.shape_22.setTransform(-85.475,-61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAwIAAgNIAFAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAg3IAOAAIAAA3QAAAKgFAFQgFAFgJgBgAAAghIAAgOIAOAAIAAAOg");
	this.shape_23.setTransform(-90.775,-61.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAUQgIgHAAgNQAAgLAIgIQAIgJAMABQANgBAIAJQAIAIAAALQAAANgIAHQgIAJgNgBQgMABgIgJgAgJgKQgEAEAAAGQAAAHAEAEQAEAEAFAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGgBQgFABgEAEg");
	this.shape_24.setTransform(-94.9,-61.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAmIAAhKIALAAIADAFQADgDAEgCQAEgCAEABQAMgBAIAJQAIAIAAAMQAAAMgIAHQgIAJgMgBQgDABgEgCIgHgEIAAAZgAgKgUQgEAEAAAHQAAAHAEADQAEAEAGAAQAGAAAEgEQADgDAAgHQAAgHgDgEQgEgEgGgBQgGABgEAEg");
	this.shape_25.setTransform(-101.425,-60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-82.9,207.5,50.800000000000004);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAmIAAgOIAIAAQAGAAABgBQADgBACgFIAAAAIgFAAIgVg2IAPAAIAOAoIAPgoIAPAAIgWA7QgDAIgFAEQgEAEgKAAg");
	this.shape.setTransform(65.75,-65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAcIgLgdIgLAdIgOAAIgTg2IAOAAIANAkIALgbIgDgJIAOAAIAOAkIALgkIAOAAIgRA2g");
	this.shape_1.setTransform(58.15,-66.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgHAMgBQANABAJAHQAHAJABALQgBAMgHAJQgJAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAFgEQADgEABgHQgBgGgDgEQgFgEgGAAQgGAAgDAEg");
	this.shape_2.setTransform(50.3,-66.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAfQgIgJAAgMQAAgLAIgJQAIgHAMgBQADAAAEACIAHAEIAAgaIAPAAIAABMIgLAAIgDgGQgDADgEACQgEABgEABQgMgBgIgHgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgEgGAAQgGAAgDAEg");
	this.shape_3.setTransform(43.375,-67.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAWQgHgGAAgLIAAggIAPAAIAAAeQAAAFADADQACAEAFAAQAFAAADgEQADgDAAgFIAAgeIAPAAIAAAgQAAAKgHAHQgIAGgLAAQgLAAgHgGg");
	this.shape_4.setTransform(37,-66);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAlQgEgCgDgDIgDAGIgLAAIAAhMIAPAAIAAAaIAHgEQAEgCADAAQAMABAIAHQAIAJAAALQAAAMgIAJQgIAHgMABQgEgBgEgBgAgKAAQgEADAAAHQAAAHAEAEQAEAEAGAAQAGAAAEgEQADgEAAgHQAAgHgDgDQgEgEgGAAQgGAAgEAEg");
	this.shape_5.setTransform(30.575,-67.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAIgHAMgBQAEAAAEACQAEACADADIADgFIALAAIAAA2IgLAAIgDgGQgDADgEACQgEABgEABQgMgBgIgHgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgGAAQgGAAgDAEg");
	this.shape_6.setTransform(23.325,-66.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAcIAAgNIAbgdIgbAAIAAgMIAtAAIAAAMIgbAdIAdAAIAAANg");
	this.shape_7.setTransform(17.4,-66.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAmIAAg2IANAAIAAA2gAgGgXIAAgOIANAAIAAAOg");
	this.shape_8.setTransform(11.35,-67.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAwIAAgNIAFAAQAEAAACgCQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAg3IAOAAIAAA4QAAAJgFAFQgFAEgJAAgAAAghIAAgPIAOAAIAAAPg");
	this.shape_9.setTransform(7.725,-66.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAVQgHgJgBgMQABgLAHgJQAJgHAMgBQALAAAIAHQAHAGACALIgQAAQgBgFgDgDQgEgCgEAAQgGAAgDAEQgEAEAAAGQAAAHAEAEQADAEAGAAQAEAAAEgDQADgDABgFIAQAAQgCALgHAHQgIAGgLABQgMgBgJgHg");
	this.shape_10.setTransform(3.7,-66.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAmIAAhKIALAAIADAFQADgDAEgCQAEgCAEAAQAMABAIAHQAIAJAAAMQAAALgIAJQgIAHgMABQgDgBgEgBIgHgEIAAAZgAgKgUQgEAEAAAHQAAAHAEADQAEAEAGAAQAGAAAEgEQADgDAAgHQAAgHgDgEQgEgEgGAAQgGAAgEAEg");
	this.shape_11.setTransform(-2.725,-65.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAVQgIgJgBgMQABgLAIgJQAIgHAMgBQANABAJAHQAHAJABALQgBAMgHAJQgJAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGAAQgGAAgDAEg");
	this.shape_12.setTransform(-9.65,-66.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgFgEgDQgDgEgFAAQgEAAgDAEQgEADAAAFIAAAeIgOAAIAAg2IAKAAIADAGQADgEAEgCQAEgBAEAAQALAAAGAGQAHAHgBAKIAAAgg");
	this.shape_13.setTransform(-18,-66.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAIgHAMgBQANABAIAHQAIAJAAALQAAAMgIAJQgIAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQAEAEAFAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGAAQgFAAgEAEg");
	this.shape_14.setTransform(-24.7,-66.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAmIAAg2IAOAAIAAA2gAgHgXIAAgOIAOAAIAAAOg");
	this.shape_15.setTransform(-29.45,-67.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAmIAAhLIANAAIAABLg");
	this.shape_16.setTransform(-32.4,-67.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAmIAAg2IAOAAIAAA2gAgGgXIAAgOIAOAAIAAAOg");
	this.shape_17.setTransform(-35.35,-67.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcAcIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAgfQAAgFgCgDQgDgDgFAAQgFAAgDADQgCADAAAFIAAAfIgPAAIAAg2IAKAAIADAGQADgEAEgCQAEgBAEAAQAGAAAFACQADACADAEQADgEAFgCQAEgCAGAAQAKAAAGAGQAGAGAAAKIAAAhg");
	this.shape_18.setTransform(-41.775,-66.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAfQgIgJAAgMQAAgLAIgJQAIgHAMgBQADAAAEACIAHAEIAAgaIAPAAIAABMIgLAAIgDgGQgDADgEACQgEABgEABQgMgBgIgHgAgIAAQgEADAAAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgHgEgDQgEgEgGAAQgGAAgDAEg");
	this.shape_19.setTransform(-52.275,-67.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAIgHAMgBQAEAAAEACQAEACADADIADgFIALAAIAAA2IgLAAIgDgGQgDADgEACQgEABgEABQgMgBgIgHgAgIgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgGAAQgGAAgDAEg");
	this.shape_20.setTransform(-59.125,-66.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgFgDgDQgEgEgFAAQgEAAgDAEQgEADAAAFIAAAeIgOAAIAAg2IAKAAIADAGQADgEAEgCQAEgBAEAAQALAAAGAGQAHAHAAAKIAAAgg");
	this.shape_21.setTransform(-65.6,-66.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAIgHAMgBQANABAJAHQAHAJAAALQAAAMgHAJQgJAHgNABQgMgBgIgHgAgJgKQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAAEgEQAFgEAAgHQAAgGgFgEQgEgEgGAAQgGAAgDAEg");
	this.shape_22.setTransform(-72.3,-66.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcAmIAAhKIALAAIADAFQADgDAEgCQAEgCAEAAQAMABAIAHQAIAJAAAMQAAALgIAJQgIAHgMABQgDgBgEgBIgHgEIAAAZgAgKgUQgEAEAAAHQAAAHAEADQAEAEAGAAQAGAAAEgEQADgDAAgHQAAgHgDgEQgEgEgGAAQgGAAgEAEg");
	this.shape_23.setTransform(-78.825,-65.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-87.3,207.5,39.599999999999994);


(lib.TITRE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBGIAAiLIBlAAIAAAcIhGAAIAAAcIA/AAIAAAaIg/AAIAAAdIBGAAIAAAcg");
	this.shape.setTransform(110.075,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BGIAAgcIBIhTIhFAAIAAgcIBsAAIAAAcIhHBTIBJAAIAAAcg");
	this.shape_1.setTransform(96.825,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyA0QgVgVAAgfQAAgeAVgUQAUgWAfAAQAbAAAUARQAUARAEAbIggAAQgDgQgLgIQgKgJgPAAQgSAAgLANQgMAMAAATQAAAUAMANQALALASAAQAPABAKgJQALgJADgOIAgAAQgEAagTARQgUAQgcAAQgfAAgUgUg");
	this.shape_2.setTransform(82.425,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBGIgchKIgfBKIgeAAIgriLIAhAAIAcBiIAdhHIgKgbIAgAAIAiBeIAbheIAgAAIgrCLg");
	this.shape_3.setTransform(63.8,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqBGIgMgdIg8AAIgNAdIggAAIA8iLIAfAAIA8CLgAATANIgTguIgTAuIAmAAg");
	this.shape_4.setTransform(45.225,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBGIAAhvIgxAAIAAgcIB/AAIAAAcIgxAAIAABvg");
	this.shape_5.setTransform(30.425,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA7QgRgNAAgUIAgAAQAAAIAIAGQAIAGALgBQAJAAAHgEQAGgDAAgHQAAgHgFgDQgFgEgMgCIgMgBQgWgEgMgKQgNgLAAgRQABgUAPgLQAOgNAYAAQAZAAAPANQAPAMAAAUIgfAAQAAgIgHgEQgGgFgKgBQgKAAgHAFQgGADAAAHQAAAGAFADQAHAEAOADIAMACQAWADALAJQAKALAAARQAAAVgPALQgOAMgaAAQgZAAgQgNg");
	this.shape_6.setTransform(17,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A0QgVgVAAgfQAAgeAVgVQAVgUAfgBQAgABAVAUQAVAVAAAeQAAAfgVAVQgVAUggAAQgfAAgVgUgAgegfQgLAMAAATQAAAUALAMQAMAMASAAQATAAAMgLQALgNAAgUQAAgTgMgMQgLgNgTAAQgSAAgMANg");
	this.shape_7.setTransform(2.225,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCBGIAAiLIA8AAQAfAAAVAUQAVAUAAAdQAAAfgVATQgVAUgfAAgAgjAqIAdAAQASAAAMgLQALgMAAgTQAAgSgLgMQgMgLgSAAIgdAAg");
	this.shape_8.setTransform(-13.375,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBHIAAg2Ig2hXIAjAAIAiA7IAjg7IAhAAIg2BXIAAA2g");
	this.shape_9.setTransform(113.3,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBHIAAiNIA8AAQAfAAAVAVQAVATAAAeQAAAegVAVQgVATgfABgAgjAqIAdAAQASAAAMgMQALgLAAgTQAAgSgLgLQgMgMgSAAIgdAAg");
	this.shape_10.setTransform(98.775,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0A0QgVgUAAggQAAgeAVgVQAVgVAfABQAggBAVAVQAVAVAAAeQAAAggVAUQgVAVgggBQgfABgVgVgAgegfQgLAMAAATQAAAUALAMQAMAMASAAQATABAMgMQALgNAAgUQAAgTgMgMQgLgNgTAAQgSAAgMANg");
	this.shape_11.setTransform(82.275,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgBHIAAg7Ig/AAIAAA7IgfAAIAAiNIAfAAIAAA4IA/AAIAAg4IAfAAIAACNg");
	this.shape_12.setTransform(66.15,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyA0QgVgUAAggQAAgeAVgVQAUgUAfAAQAbgBAUARQAUARAEAbIggAAQgDgQgLgIQgKgJgPAAQgSAAgLANQgMAMAAATQAAAUAMANQALAMASgBQAPAAAKgIQALgIADgQIAgAAQgEAbgTARQgUAQgcAAQgfABgUgVg");
	this.shape_13.setTransform(50.275,15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0A0QgVgUAAggQAAgeAVgVQAVgVAfABQAggBAVAVQAVAVAAAeQAAAggVAUQgVAVgggBQgfABgVgVgAgegfQgLAMAAATQAAAUALAMQAMAMASAAQATABAMgMQALgNAAgUQAAgTgMgMQgLgNgTAAQgSAAgMANg");
	this.shape_14.setTransform(34.075,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA0BHIgJhfIgdBTIgdAAIgdhQIgIBcIgeAAIANiNIAnAAIAeBaIAghaIAmAAIANCNg");
	this.shape_15.setTransform(16.625,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAqBHIgMgeIg8AAIgNAeIggAAIA8iNIAfAAIA8CNgAATANIgTguIgTAuIAmAAg");
	this.shape_16.setTransform(-0.625,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoA8QgQgNAAgVIAgAAQAAAJAIAFQAIAFAKAAQALAAAGgDQAGgFAAgGQAAgGgFgEQgFgDgNgCIgKgCQgXgEgMgKQgNgLAAgRQAAgTAPgNQAPgMAYABQAYgBAQANQAQAMAAAVIggAAQAAgJgHgEQgGgGgKAAQgLAAgFAEQgHAEAAAHQAAAGAGAEQAFADAPACIAMADQAWACALAKQAKALAAARQAAAUgPANQgPAMgZgBQgZABgRgNg");
	this.shape_17.setTransform(-15.1,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOBHIAAhwIgxAAIAAgcIB/AAIAAAcIgxAAIAABwg");
	this.shape_18.setTransform(71.575,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBHIAAiMIAfAAIAABvIBCAAIAAAdg");
	this.shape_19.setTransform(59.3,-1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguA3QgRgPAAgeIAAhQIAfAAIAABPQAAAQAIAKQAIAIAQABQAQgBAJgIQAIgKAAgQIAAhPIAfAAIAABQQAAAegRAPQgQAQgfABQgegBgQgQg");
	this.shape_20.setTransform(45.075,-1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAqBHIgMgfIg8AAIgNAfIggAAIA8iMIAfAAIA8CMgAATANIgTguIgTAuIAmAAg");
	this.shape_21.setTransform(29.425,-1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAkBHIhGhbIAABbIgeAAIAAiMIAeAAIBGBaIAAhaIAdAAIAACMg");
	this.shape_22.setTransform(13.35,-1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBHIAAiMIBlAAIAAAbIhGAAIAAAdIA/AAIAAAaIg/AAIAAAdIBGAAIAAAdg");
	this.shape_23.setTransform(-0.875,-1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAYBHIgYgvIgbAAIAAAvIgfAAIAAiMIA7AAQAZAAAOAMQAPANAAAWQAAAPgHAJQgGAMgNAFIAeA0gAgbgBIAcAAQALAAAGgFQAGgFAAgLQAAgJgGgFQgGgGgLAAIgcAAg");
	this.shape_24.setTransform(-14.125,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TITRE, new cjs.Rectangle(-23.7,-18.1,294.09999999999997,66.7), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsI/IE0o+IkInuIkGHuICZEfIgsBRIjHlwIE0o/IBYAAIE0I/Ik0I+gAiDI/Ik0o+IE0o/IBXAAIk0I/IEJHsIEInsIibkgIAshSIDGFyIk0I+g");
	this.shape.setTransform(51.4,-66.8,0.7272,0.7274,0,0,0,43.2,-57.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-12,-66.9,64,83.60000000000001), null);


(lib.Symbol10kopia2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAZQgKgKAAgPQAAgOAKgKQAJgKAOAAQAGABAHADQAHADADAFIACgKIAJAAIAABBIgJAAIgCgLQgDAHgHACQgHAEgGAAQgOgBgJgJgAgOgQQgHAHAAAJQAAALAHAGQAGAHAIAAQAKAAAHgHQAGgGAAgLQAAgJgGgHQgHgHgKAAQgIAAgGAHg");
	this.shape.setTransform(65.6,116.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAiIAAglQAAgJgFgFQgGgFgIAAQgIAAgFAFQgFAFAAAJIAAAlIgMAAIAAhBIAJAAIACAKQADgGAGgDQAGgDAGAAQANAAAIAIQAIAHAAANIAAAng");
	this.shape_1.setTransform(57.675,115.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAhIgRgqIgSAqIgLAAIgXhBIALAAIATAzIASgpIgFgKIALAAIAVA0IASg0IAKAAIgVBBg");
	this.shape_2.setTransform(48.05,116.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAZQgJgKAAgPQAAgOAJgKQAKgKAOAAQAGABAHADQAGADAEAFIADgKIAIAAIAABBIgIAAIgDgLQgEAHgGACQgHAEgGAAQgOgBgKgJgAgPgQQgGAHAAAJQAAALAGAGQAHAHAJAAQAKAAAGgHQAHgGgBgLQABgJgHgHQgGgHgKAAQgJAAgHAHg");
	this.shape_3.setTransform(38.1,116.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIgDAKIgXAAIAAA3g");
	this.shape_4.setTransform(32.075,116.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAuIAAhaIAJAAIACAKQAEgFAGgDQAGgDAHgBQAOAAAJAKQAKAKAAAPQAAAOgKAKQgJAJgOABQgGAAgGgEQgHgCgDgFIAAAigAgQgcQgGAHAAAKQAAALAGAFQAHAHAJAAQAJAAAHgHQAGgFAAgLQAAgKgGgHQgHgHgJAAQgJAAgHAHg");
	this.shape_5.setTransform(25.1,117.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgJgKAAgPQAAgOAJgKQAKgKAOAAQAGABAHADQAGADAFAFIACgKIAIAAIAABBIgIAAIgCgLQgFAHgGACQgHAEgGAAQgOgBgKgJgAgPgQQgGAHAAAJQAAALAGAGQAHAHAIAAQALAAAGgHQAHgGAAgLQAAgJgHgHQgGgHgLAAQgIAAgHAHg");
	this.shape_6.setTransform(13.9,116.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAnQgNAAgFgFQgHgFAAgMIAAghIgJAAIAAgDIATgTIACAAIAAAMIAYAAIAAAKIgYAAIAAAhQAAAGADACQADADAHAAIALAAIAAALg");
	this.shape_7.setTransform(7.2,115.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKgAgQgRQgGAIAAAJQAAAKAGAIQAHAGAJAAQAKAAAGgGQAHgIAAgKQAAgJgHgIQgGgGgKAAQgJAAgHAGg");
	this.shape_8.setTransform(0.575,116.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAiIAAglQAAgJgFgFQgGgFgIAAQgIAAgFAFQgFAFAAAJIAAAlIgMAAIAAhBIAJAAIACAKQADgGAGgDQAGgDAGAAQANAAAIAIQAIAHAAANIAAAng");
	this.shape_9.setTransform(-7.425,115.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10kopia2, new cjs.Rectangle(-17.2,102.7,91,23), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EioMBkFMAAAjIJMFQZAAAMAAADIJg");
	this.shape.setTransform(1076.5,640.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2153,1281);


(lib.Symbol7kopia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAEAQIAGgfIANAAIgJAfgAgWAQIAGgfIANAAIgJAfg");
	this.shape.setTransform(-12.075,37.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAkQgIgIgBgLIALAAQABAIAFAEQAFAEAGAAQAIAAAFgEQAFgEAAgGQAAgHgEgEQgFgEgHAAIgOAAIAAgJIANAAQAHAAAEgDQAEgEAAgGQAAgGgEgFQgFgDgHAAQgGAAgFAEQgFAEAAAIIgMAAQABgMAIgHQAIgHALAAQAMAAAIAHQAHAGAAAKQAAAGgDAFQgDAFgFADQAGACAEAEQADAGAAAHQAAALgIAGQgIAHgMAAQgMAAgIgHg");
	this.shape_1.setTransform(-18.575,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAqIAAgKIAbgYQAJgIADgEQAEgFAAgGQAAgHgFgFQgEgEgHAAQgHAAgEAFQgFAEgBAIIgLAAQAAgMAJgHQAHgIAMAAQAMAAAIAHQAHAHAAALQAAAJgEAHQgEAGgNAKIgRAQIAoAAIAAAKg");
	this.shape_2.setTransform(-25.6,39.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAfQgJgLAAgUQAAgSAJgNQAKgLAOAAQAQAAAIALQAJANAAASQAAAUgJALQgIAMgQAAQgOAAgKgMgAgPgXQgGAJAAAOQAAAPAGAJQAGAJAJgBQAKABAGgJQAFgJAAgPQAAgPgFgIQgGgJgKAAQgJAAgGAJg");
	this.shape_3.setTransform(-33.1,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAqIAAgKIAbgYQAJgIADgEQAEgFAAgGQAAgHgFgFQgEgEgHAAQgGAAgGAFQgEAEAAAIIgMAAQABgMAHgHQAIgIAMAAQANAAAHAHQAIAHAAALQgBAJgEAHQgFAGgMAKIgRAQIAoAAIAAAKg");
	this.shape_4.setTransform(-40.75,39.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAFIAAgJIAhAAIAAAJg");
	this.shape_5.setTransform(-46.5,40.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAfQgJgLAAgUQAAgSAJgNQAIgLAPAAQAPAAAJALQAKANgBASQABAUgKALQgJAMgPAAQgPAAgIgMgAgPgXQgFAJAAAOQAAAPAFAJQAGAJAJgBQAKABAGgJQAGgJAAgPQAAgPgGgIQgGgJgKAAQgJAAgGAJg");
	this.shape_6.setTransform(-52.85,39.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAqIAAgKIAbgYQAJgIAEgEQADgFAAgGQAAgHgEgFQgFgEgHAAQgHAAgEAFQgFAEgBAIIgLAAQAAgMAIgHQAJgIALAAQAMAAAIAHQAIAHgBALQABAJgFAHQgFAGgMAKIgRAQIAoAAIAAAKg");
	this.shape_7.setTransform(-60.5,39.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAfQgIgLgBgUQABgSAIgNQAKgLAOAAQAQAAAJALQAIANABASQgBAUgIALQgJAMgQAAQgOAAgKgMgAgPgXQgGAJABAOQgBAPAGAJQAGAJAJgBQAKABAGgJQAGgJgBgPQABgPgGgIQgGgJgKAAQgJAAgGAJg");
	this.shape_8.setTransform(-68,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAqIAAgKIAbgYQAJgIADgEQAEgFAAgGQAAgHgFgFQgEgEgHAAQgGAAgFAFQgFAEgBAIIgLAAQAAgMAJgHQAIgIALAAQAMAAAIAHQAHAHAAALQAAAJgEAHQgEAGgNAKIgRAQIAoAAIAAAKg");
	this.shape_9.setTransform(-75.65,39.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAtIAAglQAAgIgGgEQgEgFgJAAQgHAAgFAFQgGAEABAIIAAAlIgLAAIAAhZIALAAIAAAiQADgEAGgDQAFgCAFAAQAMAAAIAHQAHAHAAAMIAAAmg");
	this.shape_10.setTransform(-85.2,39.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAHQAGAGAIAAQAIAAAFgEQAGgFABgHIAMAAQgCALgJAIQgIAHgNAAQgNAAgJgKg");
	this.shape_11.setTransform(-92.925,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCADgGIACgGIgFAAIgag9IANAAIAUA0IAWg0IAMAAIgeBGQgDAJgFAFQgFADgKAAg");
	this.shape_12.setTransform(-100.2,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAgIAAgKIAmgrIglAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_13.setTransform(-106.9,40.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAHQAGAGAIAAQAIAAAFgEQAGgFABgHIAMAAQgCALgJAIQgIAHgNAAQgNAAgJgKg");
	this.shape_14.setTransform(-113.825,40.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAgIgSgpIgQApIgLAAIgXg/IAMAAIASAyIARgoIgEgKIAKAAIAVAyIAQgyIALAAIgWA/g");
	this.shape_15.setTransform(-122.9,40.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_16.setTransform(-132.525,40.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFABgLIAAggIgKAAIAAgCIASgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFABADQAEACAGAAIAMAAIAAALg");
	this.shape_17.setTransform(-139,40.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAbQgIgHAAgKIALAAQABAGAEAEQAEADAIAAQAGAAAEgCQAEgCAAgFQAAgEgDgBQgEgCgGgCIgHgBQgKgBgGgEQgEgEAAgJQAAgIAGgFQAGgFAMAAQALAAAIAGQAHAFAAAJIgLAAQAAgFgEgDQgFgDgGAAQgGAAgEACQgDACgBAFQAAAEADADQAEABAGABIAHABQALACAFAEQAFAEAAAIQAAAJgGAFQgIAFgLAAQgMAAgIgGg");
	this.shape_18.setTransform(-144.8,40.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_19.setTransform(-151.975,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgJQAJgJAOAAQAGAAAGACQAGADAEAFIAAgjIALAAIAABYIgIAAIgCgKQgFAFgGAEQgGACgGAAQgOAAgJgJgAgOgEQgGAGAAAKQAAAKAGAHQAGAGAIABQAKgBAGgGQAGgHAAgKQAAgKgGgGQgGgFgKAAQgIAAgGAFg");
	this.shape_20.setTransform(-160.225,39.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IALAAIASAyIARgoIgEgKIAKAAIAVAyIARgyIAKAAIgWA/g");
	this.shape_21.setTransform(-171.65,40.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgOAJgIQAJgJAOAAQAPAAAJAJQAJAIAAAOQAAAPgJAJQgJAJgPAAQgOAAgJgJgAgPgEQgGAGAAAKQAAAKAGAHQAGAGAJABQAKgBAGgGQAGgHAAgKQAAgKgGgGQgGgFgKAAQgJAAgGAFgAgEgZIAMgTIAMAAIgPATg");
	this.shape_22.setTransform(-180.825,39.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgJQAJgJAOAAQAGAAAGACQAGADAEAFIAAgjIALAAIAABYIgIAAIgCgKQgFAFgGAEQgGACgGAAQgOAAgJgJgAgOgEQgGAGAAAKQAAAKAGAHQAGAGAIABQAKgBAGgGQAGgHAAgKQAAgKgGgGQgGgFgKAAQgIAAgGAFg");
	this.shape_23.setTransform(-189.075,39.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_24.setTransform(-196.825,40.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASAtIAAglQAAgIgEgEQgGgFgIAAQgHAAgFAFQgFAEgBAIIAAAlIgKAAIAAhZIAKAAIAAAiQAEgEAFgDQAGgCAFAAQANAAAHAHQAIAHgBAMIAAAmg");
	this.shape_25.setTransform(-204.6,39.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAHQAGAGAIAAQAIAAAFgEQAGgFABgHIAMAAQgCALgJAIQgIAHgNAAQgNAAgJgKg");
	this.shape_26.setTransform(-212.325,40.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_27.setTransform(-219.975,40.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAnAgIAAglQAAgHgEgFQgFgEgHAAQgIAAgFAEQgEAFAAAHIAAAlIgLAAIAAglQAAgHgEgFQgFgEgIAAQgHAAgFAEQgFAFAAAHIAAAlIgLAAIAAg+IAIAAIACAIQADgEAGgDQAFgCAHAAQAHAAAGADQAGADACAFQADgFAGgDQAGgDAIAAQALAAAIAGQAHAHAAAMIAAAmg");
	this.shape_28.setTransform(-229.875,40.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_29.setTransform(-240.325,40.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAbQgIgHAAgKIALAAQAAAGAFAEQAEADAIAAQAHAAAEgCQADgCAAgFQAAgEgDgBQgEgCgGgCIgHgBQgKgBgGgEQgEgEAAgJQgBgIAHgFQAGgFAMAAQALAAAIAGQAHAFAAAJIgLAAQAAgFgEgDQgFgDgGAAQgHAAgDACQgDACAAAFQAAAEACADQADABAHABIAHABQAKACAGAEQAFAEAAAIQAAAJgGAFQgIAFgLAAQgMAAgIgGg");
	this.shape_30.setTransform(-247.5,40.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAtIAAglQAAgIgEgEQgGgFgIAAQgHAAgFAFQgFAEgBAIIAAAlIgKAAIAAhZIAKAAIAAAiQAEgEAFgDQAGgCAFAAQAMAAAIAHQAIAHgBAMIAAAmg");
	this.shape_31.setTransform(-256.9,39.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAHQAGAGAIAAQAIAAAFgEQAGgFABgHIAMAAQgCALgJAIQgIAHgNAAQgNAAgJgKg");
	this.shape_32.setTransform(-264.625,40.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbAsIAAgKIAHAAQAHAAADgCQADgCADgGIABgGIgDAAIgag9IALAAIAVA0IAWg0IALAAIgdBGQgDAJgFAFQgFADgKAAg");
	this.shape_33.setTransform(-271.9,42);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgXg/IAMAAIASAyIARgoIgEgKIAKAAIAVAyIARgyIAKAAIgWA/g");
	this.shape_34.setTransform(-280.75,40.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_35.setTransform(-289.925,40.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AATAgIAAgjQAAgJgGgFQgEgEgJAAQgHAAgFAFQgGAFABAIIAAAjIgMAAIAAg+IAIAAIADAJQADgFAGgDQAFgCAGAAQAMAAAIAHQAHAHAAAMIAAAlg");
	this.shape_36.setTransform(-297.7,40.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAGQAGAFAIAAQAIAAAFgDQAFgEACgGIALAAQgCAKgJAHQgIAGgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJgBQgHABgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_37.setTransform(-307.725,40.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOA4IAAgKIAHAAQAGAAACgCQACgCAAgGIAAhDIALAAIAABDQAAALgFAFQgFAEgKAAgAADgrIAAgMIAMAAIAAAMg");
	this.shape_38.setTransform(-314.025,40.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAHQAGAGAIAAQAIAAAFgEQAGgFABgHIAMAAQgCALgJAIQgIAHgNAAQgNAAgJgKg");
	this.shape_39.setTransform(-318.475,40.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_40.setTransform(-326.575,40.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_41.setTransform(-332.425,40.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgKAAIAAgCIATgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFADADQADACAHAAIAKAAIAAALg");
	this.shape_42.setTransform(-337.95,40.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgSAbQgHgHgBgKIALAAQABAGAEAEQAFADAGAAQAIAAADgCQAEgCAAgFQAAgEgDgBQgDgCgIgCIgGgBQgLgBgEgEQgGgEAAgJQABgIAGgFQAHgFALAAQALAAAHAGQAIAFAAAJIgLAAQAAgFgFgDQgEgDgGAAQgGAAgEACQgEACAAAFQABAEADADQADABAGABIAHABQALACAFAEQAFAEAAAIQAAAJgHAFQgGAFgNAAQgLAAgIgGg");
	this.shape_43.setTransform(-343.75,40.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAGQAGAFAIAAQAIAAAFgDQAFgEACgGIALAAQgCAKgJAHQgIAGgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJgBQgHABgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_44.setTransform(-350.825,40.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgOA4IAAgKIAHAAQAGAAACgCQACgCAAgGIAAhDIALAAIAABDQAAALgFAFQgFAEgKAAgAADgrIAAgMIAMAAIAAAMg");
	this.shape_45.setTransform(-357.125,40.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAGQAGAFAIAAQAIAAAFgDQAFgEACgGIALAAQgCAKgJAHQgIAGgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJgBQgHABgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_46.setTransform(-361.625,40.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUApIgUgeIgVAAIAAAeIgMAAIAAhSIAhAAQAOABAIAGQAJAHgBANQAAAJgEAGQgFAGgKADIAWAfgAgVABIAVAAQAIAAAGgEQAFgDAAgIQAAgIgFgEQgGgEgIgBIgVAAg");
	this.shape_47.setTransform(-369.25,39.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAEAQIAGgfIANAAIgJAfgAgWAQIAHgfIAMAAIgJAfg");
	this.shape_48.setTransform(-376.75,44.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGAgIAAgNIANAAIAAANgAgGgRIAAgOIANAAIAAAOg");
	this.shape_49.setTransform(377.475,25.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAUAqIgUgfIgVAAIAAAfIgLAAIAAhSIAgAAQAOAAAIAGQAJAHgBANQAAAJgEAFQgFAHgJACIAVAhgAgVABIAVAAQAIAAAGgDQAFgFAAgHQAAgIgFgEQgGgEgIAAIgVAAg");
	this.shape_50.setTransform(372.25,24.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAfAqIgKgXIgpAAIgKAXIgMAAIAlhSIALAAIAlBSgAAQAIIgQgkIgPAkIAfAAg");
	this.shape_51.setTransform(363.15,24.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAkAqIgHhCIgYA6IgKAAIgXg6IgHBCIgLAAIAIhSIAPAAIAXA9IAZg9IAOAAIAIBSg");
	this.shape_52.setTransform(353.075,24.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAeAqIgJgXIgpAAIgKAXIgMAAIAlhSIALAAIAlBSgAAQAIIgQgkIgPAkIAfAAg");
	this.shape_53.setTransform(343,24.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWAjQgKgHAAgNIAMAAQABAIAGAFQAGAEAJAAQAJAAAFgDQAFgEAAgGQAAgFgEgDQgFgEgIgBIgHgBQgNgCgIgFQgGgHAAgKQAAgKAIgHQAHgGAOAAQAOAAAJAHQAIAHABANIgMAAQgBgIgFgFQgFgDgIAAQgKAAgEACQgFAEAAAGQAAAGAEADQAFADAKACIAIABQAMACAGAFQAHAGAAAJQAAAMgIAGQgJAHgPAAQgNAAgKgIg");
	this.shape_54.setTransform(334.5,24.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_55.setTransform(323.425,25.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXAsIADgKIAcAAQAIAAADgCQACgDAAgHIAAgMQgEAFgFACQgGADgGABQgOAAgJgKQgJgJAAgNQAAgPAJgJQAJgIAOgBQAGAAAGADQAGADAFAGIACgLIAIAAIAABBQAAAMgGAFQgGAGgNgBgAgPgcQgGAHAAAKQAAAKAGAFQAGAGAKAAQAJAAAHgGQAFgFAAgKQAAgKgFgHQgHgFgJgBQgKABgGAFg");
	this.shape_56.setTransform(315.2,26.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_57.setTransform(307.525,25.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIABAJQAEgFAFgDQAGgCAGAAQANAAAHAHQAIAHgBAMIAAAlg");
	this.shape_58.setTransform(299.85,25.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOA4IAAgKIAHAAQAGAAACgCQACgCAAgGIAAhDIALAAIAABDQAAALgFAFQgFAEgKAAgAADgrIAAgMIAMAAIAAAMg");
	this.shape_59.setTransform(293.375,25.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCADgGIACgFIgFAAIgZg+IAMAAIAUA1IAWg1IAMAAIgeBHQgDAJgFADQgFAEgKAAg");
	this.shape_60.setTransform(289.15,26.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACANIgMAAQgBgJgGgEQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAGQAGAHAIAAQAIAAAFgEQAGgFABgIIAMAAQgCAMgJAHQgIAIgNAAQgNAAgJgKg");
	this.shape_61.setTransform(281.875,25.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_62.setTransform(273.775,25.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgbAgIAAgKIAogrIgnAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_63.setTransform(266.75,25.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCACgGIADgFIgFAAIgag+IANAAIAVA1IAVg1IAMAAIgeBHQgEAJgEADQgFAEgKAAg");
	this.shape_64.setTransform(260.05,26.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_65.setTransform(254.525,25.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_66.setTransform(247.725,25.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgKAAIAAgCIATgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFADADQADACAHAAIAKAAIAAALg");
	this.shape_67.setTransform(241.2,24.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_68.setTransform(234.825,25.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAkAqIgHhCIgYA6IgKAAIgXg6IgHBCIgLAAIAIhSIAPAAIAXA9IAZg9IAOAAIAIBSg");
	this.shape_69.setTransform(225.375,24.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAFQAEAEAIABQAIgBAFgEQAFgFgBgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_70.setTransform(212.85,25.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAQAtIgYgcIgKAAIAAAcIgLAAIAAhZIALAAIAAAzIALAAIAWgZIANAAIAAABIgbAdIAdAgIAAABg");
	this.shape_71.setTransform(205.9,23.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIACAJQADgFAGgDQAFgCAGAAQAMAAAIAHQAIAHgBAMIAAAlg");
	this.shape_72.setTransform(198.05,25.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgbAsIAAgKIAHAAQAHAAADgCQADgCACgGIACgFIgDAAIgbg+IAMAAIAWA1IAVg1IALAAIgdBHQgEAJgEADQgFAEgKAAg");
	this.shape_73.setTransform(190.55,26.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAUAqIgUgfIgVAAIAAAfIgMAAIAAhSIAhAAQAOAAAJAGQAHAHAAANQABAJgFAFQgFAHgKACIAXAhgAgVABIAVAAQAJAAAFgDQAFgFAAgHQAAgIgFgEQgFgEgJAAIgVAAg");
	this.shape_74.setTransform(183.2,24.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AATAtIAAglQgBgIgFgEQgEgFgJAAQgHAAgFAFQgGAEABAIIAAAlIgMAAIAAg/IAIAAIACAKQAEgFAFgDQAGgDAHAAQAMAAAHAHQAHAHABAMIAAAmgAgEgYIANgUIAMAAIgPAUg");
	this.shape_75.setTransform(171.55,23.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_76.setTransform(163.225,25.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgXAkQgJgKAAgOQAAgNAJgKQAJgIAOgBQAGAAAGADQAGACAEAFIAAgiIALAAIAABYIgIAAIgCgKQgFAFgGADQgGAEgGAAQgOAAgJgKgAgOgEQgGAGAAAKQAAALAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgIABgGAFg");
	this.shape_77.setTransform(155.025,23.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_78.setTransform(146.825,25.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgfAqIAAhSIAgAAQANgBAHAGQAIAGAAAKQAAAHgDAEQgDAFgFACQAHACADAFQAEAFAAAHQAAAMgIAFQgIAHgNAAgAgTAgIAVAAQAJgBAEgDQAFgDAAgIQAAgGgFgEQgEgDgJAAIgVAAgAgTgEIATAAQAIgBAFgDQAEgDAAgHQAAgGgEgEQgEgDgJAAIgTAAg");
	this.shape_79.setTransform(139.075,24.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUAZQgIgHAAgNIAAglIALAAIAAAjQAAAKAFAFQAFAEAHABQAIgBAFgEQAFgFgBgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgIgIg");
	this.shape_80.setTransform(127.7,25.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFAAgLIAAggIgKAAIAAgCIASgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFACADQAEACAHAAIALAAIAAALg");
	this.shape_81.setTransform(121.3,24.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAFQAFAEAHABQAIgBAFgEQAEgFABgKIAAgjIALAAIAAAlQAAAMgIAIQgIAIgNAAQgNAAgIgIg");
	this.shape_82.setTransform(115.05,25.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFAAgLIAAggIgKAAIAAgCIATgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFACADQADACAGAAIALAAIAAALg");
	this.shape_83.setTransform(108.65,24.575);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCACgGIADgFIgFAAIgag+IANAAIAUA1IAWg1IAMAAIgeBHQgEAJgEADQgFAEgKAAg");
	this.shape_84.setTransform(102.65,26.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFAAgLIAAggIgKAAIAAgCIATgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFACADQADACAHAAIAKAAIAAALg");
	this.shape_85.setTransform(96.5,24.575);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAHAFADQAFADAGAAQAHAAAFgBQADgDAAgFQAAgDgDgDQgEgCgGgBIgHgBQgLgBgEgEQgFgFgBgHQAAgJAHgFQAGgFAMAAQALAAAHAFQAIAGAAAJIgLAAQAAgFgFgDQgEgDgGAAQgHAAgDACQgEADABAEQAAAEACADQADACAHABIAHABQALABAFAEQAFAEAAAIQAAAIgGAGQgIAFgMAAQgLAAgIgHg");
	this.shape_86.setTransform(90.7,25.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AATAgIAAgjQAAgJgGgFQgEgEgJAAQgHAAgFAFQgGAFABAIIAAAjIgLAAIAAg+IAHAAIADAJQADgFAGgDQAFgCAGAAQAMAAAIAHQAHAHAAAMIAAAlg");
	this.shape_87.setTransform(83.55,25.125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgFAqIAAhSIALAAIAABSg");
	this.shape_88.setTransform(77.775,24.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFABgLIAAggIgLAAIAAgCIATgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFABADQAEACAGAAIALAAIAAALg");
	this.shape_89.setTransform(70.15,24.575);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_90.setTransform(65.675,25.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_91.setTransform(58.875,25.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AggAsIAAhXIAIAAIACALQAFgGAGgDQAGgDAGAAQAOABAJAIQAJAKAAAOQAAANgJAKQgJAKgOAAQgGAAgGgEQgGgCgEgFIAAAhgAgPgcQgGAHAAAKQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgFAAgLQAAgKgGgHQgGgFgJgBQgJABgGAFg");
	this.shape_92.setTransform(51.075,26.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_93.setTransform(42.425,25.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_94.setTransform(36.575,25.175);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_95.setTransform(26.525,25.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAWAtQgGAAgEgCQgDgDAAgFQAAgDACgEIAGgGIAHgFIgBgIQgFAGgGADQgGADgGAAQgOAAgJgKQgJgJAAgNQAAgPAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgJAHIgEAEQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIAJAAIAAAIgAgOgcQgGAGAAALQAAAKAGAFQAGAHAIAAQAKAAAGgHQAGgFAAgKQAAgLgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_96.setTransform(15.025,26.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgSAaQgHgFgBgLIALAAQAAAHAFADQAEADAIAAQAGAAAEgBQAEgDAAgFQAAgDgDgDQgEgCgHgBIgGgBQgKgBgGgEQgEgFAAgHQAAgJAGgFQAHgFALAAQALAAAIAFQAHAGAAAJIgLAAQAAgFgEgDQgFgDgGAAQgGAAgEACQgDADgBAEQAAAEADADQAEACAGABIAHABQAKABAGAEQAFAEAAAIQAAAIgHAGQgHAFgLAAQgMAAgIgHg");
	this.shape_97.setTransform(7.85,25.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_98.setTransform(-2.475,25.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgKAAIAAgCIATgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQABAFACADQADACAHAAIAKAAIAAALg");
	this.shape_99.setTransform(-8.9,24.575);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_100.setTransform(-13.375,25.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_101.setTransform(-20.625,25.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggAsIAAhXIAIAAIACALQAFgGAGgDQAGgDAGAAQAOABAJAIQAJAKAAAOQAAANgJAKQgJAKgOAAQgGAAgGgEQgGgCgEgFIAAAhgAgPgcQgGAHAAAKQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgFAAgLQAAgKgGgHQgGgFgJgBQgJABgGAFg");
	this.shape_102.setTransform(-28.375,26.35);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_103.setTransform(-36.575,25.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgKAAIAAgCIATgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFADADQADACAHAAIAKAAIAAALg");
	this.shape_104.setTransform(-46.35,24.575);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_105.setTransform(-50.45,23.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAFQAEAEAIABQAIgBAFgEQAFgFgBgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_106.setTransform(-55.8,25.25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_107.setTransform(-63.925,25.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgFgEgJAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_108.setTransform(-71.65,25.125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_109.setTransform(-79.425,25.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAUAqIgUgfIgVAAIAAAfIgLAAIAAhSIAgAAQAOAAAJAGQAHAHABANQAAAJgFAFQgFAHgJACIAVAhgAgVABIAVAAQAJAAAFgDQAFgFAAgHQAAgIgFgEQgFgEgJAAIgVAAg");
	this.shape_110.setTransform(-87.05,24.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AATAtIAAglQAAgIgGgEQgEgFgJAAQgHAAgFAFQgGAEABAIIAAAlIgLAAIAAhZIALAAIAAAiQADgEAGgDQAFgCAFAAQAMAAAIAHQAHAHAAAMIAAAmg");
	this.shape_111.setTransform(-98.7,23.875);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACANIgMAAQgBgJgGgEQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAGQAGAHAIAAQAIAAAFgEQAGgFABgIIAMAAQgCAMgJAHQgIAIgNAAQgNAAgJgKg");
	this.shape_112.setTransform(-106.425,25.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCADgGIACgFIgFAAIgag+IANAAIAUA1IAWg1IAMAAIgeBHQgDAJgFADQgFAEgKAAg");
	this.shape_113.setTransform(-113.7,26.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgaAgIAAgKIAmgrIglAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_114.setTransform(-120.4,25.175);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACANIgMAAQgBgJgGgEQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAGQAGAHAIAAQAIAAAFgEQAGgFABgIIAMAAQgCAMgJAHQgIAIgNAAQgNAAgJgKg");
	this.shape_115.setTransform(-127.325,25.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AASAgIgSgpIgQApIgLAAIgXg/IAMAAIASAyIARgoIgEgKIAKAAIAVAyIAQgyIALAAIgWA/g");
	this.shape_116.setTransform(-136.4,25.175);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_117.setTransform(-146.025,25.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFABgLIAAggIgKAAIAAgCIASgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFABADQAEACAGAAIAMAAIAAALg");
	this.shape_118.setTransform(-152.5,24.575);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQABAHAEADQAEADAIAAQAGAAAEgBQAEgDAAgFQAAgDgDgDQgEgCgGgBIgHgBQgKgBgGgEQgEgFAAgHQAAgJAGgFQAGgFAMAAQALAAAIAFQAHAGAAAJIgLAAQAAgFgEgDQgFgDgGAAQgGAAgEACQgDADgBAEQAAAEADADQAEACAGABIAHABQALABAFAEQAFAEAAAIQAAAIgGAGQgIAFgLAAQgMAAgIgHg");
	this.shape_119.setTransform(-158.3,25.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_120.setTransform(-165.475,25.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgXAkQgJgKAAgOQAAgNAJgKQAJgIAOgBQAGAAAGADQAGACAEAFIAAgiIALAAIAABYIgIAAIgCgKQgFAFgGADQgGAEgGAAQgOAAgJgKgAgOgEQgGAGAAAKQAAALAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgIABgGAFg");
	this.shape_121.setTransform(-173.725,23.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IALAAIASAyIARgoIgEgKIAKAAIAVAyIARgyIAKAAIgWA/g");
	this.shape_122.setTransform(-186.15,25.175);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgKQAJgIAOgBQAPABAJAIQAJAKAAANQAAAPgJAJQgJAKgPAAQgOAAgJgKgAgPgEQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgJABgGAFgAgEgZIAMgTIAMAAIgPATg");
	this.shape_123.setTransform(-195.325,23.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXAkQgJgKAAgOQAAgNAJgKQAJgIAOgBQAGAAAGADQAGACAEAFIAAgiIALAAIAABYIgIAAIgCgKQgFAFgGADQgGAEgGAAQgOAAgJgKgAgOgEQgGAGAAAKQAAALAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgIABgGAFg");
	this.shape_124.setTransform(-203.575,23.95);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_125.setTransform(-211.325,25.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AASAtIAAglQAAgIgEgEQgGgFgIAAQgHAAgFAFQgFAEgBAIIAAAlIgKAAIAAhZIAKAAIAAAiQAEgEAFgDQAGgCAFAAQAMAAAIAHQAIAHgBAMIAAAmg");
	this.shape_126.setTransform(-219.1,23.875);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACANIgMAAQgBgJgGgEQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAGQAGAHAIAAQAIAAAFgEQAGgFABgIIAMAAQgCAMgJAHQgIAIgNAAQgNAAgJgKg");
	this.shape_127.setTransform(-226.825,25.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_128.setTransform(-234.475,25.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAnAgIAAglQAAgHgEgFQgFgEgHAAQgIAAgFAEQgEAFAAAHIAAAlIgLAAIAAglQAAgHgEgFQgFgEgIAAQgHAAgFAEQgFAFAAAHIAAAlIgLAAIAAg+IAIAAIACAIQADgEAGgDQAFgCAHAAQAHAAAGADQAGADACAFQADgFAGgDQAGgDAIAAQALAAAIAGQAHAHAAAMIAAAmg");
	this.shape_129.setTransform(-244.375,25.125);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_130.setTransform(-254.825,25.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAHAFADQAEADAIAAQAGAAAFgBQADgDAAgFQAAgDgDgDQgEgCgGgBIgHgBQgKgBgGgEQgEgFAAgHQgBgJAHgFQAGgFAMAAQALAAAHAFQAIAGAAAJIgLAAQAAgFgEgDQgFgDgGAAQgHAAgDACQgEADABAEQAAAEACADQADACAHABIAHABQAKABAGAEQAFAEAAAIQAAAIgGAGQgIAFgLAAQgMAAgIgHg");
	this.shape_131.setTransform(-262,25.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgbAsIAAgKIAHAAQAHAAADgCQADgCACgGIACgFIgDAAIgbg+IAMAAIAWA1IAVg1IALAAIgdBHQgEAJgEADQgFAEgKAAg");
	this.shape_132.setTransform(-272.05,26.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgbAsIAAgKIAogrIgnAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKgAgFgfIAAgMIALAAIAAAMg");
	this.shape_133.setTransform(-278.75,23.95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_134.setTransform(-286.275,25.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgXAkQgJgKAAgOQAAgNAJgKQAJgIAOgBQAGAAAGADQAGACAEAFIAAgiIALAAIAABYIgIAAIgCgKQgFAFgGADQgGAEgGAAQgOAAgJgKgAgOgEQgGAGAAAKQAAALAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgIABgGAFg");
	this.shape_135.setTransform(-294.475,23.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_136.setTransform(-302.125,25.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgbAgIAAgKIAngrIgmAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_137.setTransform(-309.1,25.175);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_138.setTransform(-314.275,25.175);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AggAsIAAhXIAIAAIACALQAFgGAGgDQAGgDAGAAQAOABAJAIQAJAKAAAOQAAANgJAKQgJAKgOAAQgGAAgGgEQgGgCgEgFIAAAhgAgPgcQgGAHAAAKQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgFAAgLQAAgKgGgHQgGgFgJgBQgJABgGAFg");
	this.shape_139.setTransform(-321.075,26.35);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAHAFADQAFADAGAAQAHAAAFgBQADgDAAgFQAAgDgDgDQgEgCgGgBIgHgBQgLgBgFgEQgEgFgBgHQAAgJAHgFQAGgFAMAAQALAAAHAFQAIAGAAAJIgLAAQAAgFgFgDQgEgDgGAAQgHAAgDACQgEADABAEQAAAEACADQADACAHABIAHABQALABAFAEQAFAEAAAIQAAAIgGAGQgIAFgMAAQgLAAgIgHg");
	this.shape_140.setTransform(-328.7,25.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_141.setTransform(-339.125,25.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_142.setTransform(-350.075,25.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AATAgIAAgjQgBgJgFgFQgEgEgJAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_143.setTransform(-357.75,25.125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_144.setTransform(-366.075,25.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgkAqIAAhSIAgAAQARAAAMALQAMALAAASQAAASgMAMQgMAMgRAAgAgZAfIAVAAQAMAAAJgIQAIgJAAgOQAAgNgIgIQgJgJgMAAIgVAAg");
	this.shape_145.setTransform(-374.275,24.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_146.setTransform(-128.175,-3.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgOA4IAAgKIAHAAQAGAAACgCQACgCAAgGIAAhDIALAAIAABDQAAALgFAFQgFAEgKAAgAADgrIAAgMIAMAAIAAAMg");
	this.shape_147.setTransform(-131.975,-6.025);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAGQAGAFAIAAQAIAAAFgDQAFgEACgGIALAAQgCAKgJAHQgIAGgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJgBQgHABgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_148.setTransform(-136.475,-6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AASAgIgRgpIgRApIgLAAIgXg/IALAAIASAyIASgoIgEgKIAKAAIAUAyIARgyIAKAAIgVA/g");
	this.shape_149.setTransform(-145.6,-6.025);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_150.setTransform(-154.775,-6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgWAtIACgLIAcAAQAHAAADgDQAEgCAAgIIAAgKQgFAEgFADQgHADgFAAQgOAAgJgKQgJgJAAgNQAAgPAJgIQAJgJAOAAQAGAAAHACQAFADAFAGIACgKIAIAAIAAA/QAAANgGAFQgGAGgNAAgAgOgcQgHAHAAAKQAAAKAHAFQAGAGAIAAQAKAAAGgGQAHgGAAgJQAAgKgHgHQgGgFgKAAQgIAAgGAFg");
	this.shape_151.setTransform(-163,-4.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgLAAIAAg+IAJAAIABAJQAEgFAFgDQAGgCAHAAQALAAAIAHQAIAHAAAMIAAAlg");
	this.shape_152.setTransform(-170.75,-6.075);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgFAsIAAg+IALAAIAAA+gAgFgfIAAgMIALAAIAAAMg");
	this.shape_153.setTransform(-176.35,-7.25);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgSAbQgIgHAAgKIALAAQABAGAEAEQAEADAIAAQAGAAAEgCQAEgCAAgFQAAgEgDgBQgEgCgGgCIgHgBQgKgBgGgEQgEgEAAgJQAAgIAGgFQAGgFAMAAQALAAAIAGQAHAFAAAJIgLAAQAAgFgEgDQgFgDgGAAQgGAAgEACQgDACgBAFQAAAEADADQAEABAGABIAHABQALACAFADQAFAFAAAIQAAAJgGAFQgIAFgLAAQgMAAgIgGg");
	this.shape_154.setTransform(-181.25,-6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_155.setTransform(-188.875,-6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAGQAGAFAIAAQAIAAAFgDQAFgEACgGIALAAQgCAKgJAHQgIAGgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJgBQgHABgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_156.setTransform(-196.525,-6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_157.setTransform(-201.95,-7.325);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgFAsIAAg+IALAAIAAA+gAgFgfIAAgMIALAAIAAAMg");
	this.shape_158.setTransform(-207.4,-7.25);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAHQAGAGAIAAQAIAAAFgEQAGgFABgHIAMAAQgCALgJAIQgIAHgNAAQgNAAgJgKg");
	this.shape_159.setTransform(-212.725,-6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgSAnQgIgGAAgLIALAAQAAAHAFAEQAFADAGAAQAHAAAFgCQADgCAAgFQAAgEgDgCQgEgCgGgBIgHgBQgLgCgFgFQgEgEgBgHQAAgIAHgGQAGgEAMAAQALgBAHAGQAIAGAAAIIgLAAQAAgFgFgDQgEgCgGAAQgHAAgDACQgEACABAFQAAADACACQADACAHABIAHABQALABAFAFQAFAEAAAJQAAAIgGAFQgIAFgMAAQgLAAgIgGgAgEgZIALgTIAMAAIgOATg");
	this.shape_160.setTransform(-219.8,-7.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_161.setTransform(-226.975,-6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIABAJQAEgFAFgDQAGgCAGAAQANAAAHAHQAIAHgBAMIAAAlg");
	this.shape_162.setTransform(-234.75,-6.075);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_163.setTransform(-240.35,-7.325);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_164.setTransform(-245.825,-6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgJQAJgJAOAAQAGAAAGACQAGADAEAFIAAgjIALAAIAABYIgIAAIgCgKQgFAFgGAEQgGACgGAAQgOAAgJgJgAgOgEQgGAGAAAKQAAAKAGAHQAGAGAIABQAKgBAGgGQAGgHAAgKQAAgKgGgGQgGgFgKAAQgIAAgGAFg");
	this.shape_165.setTransform(-254.075,-7.25);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgbAgIAAgKIAogrIgnAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_166.setTransform(-261.1,-6.025);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_167.setTransform(-270.875,-6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgFAsIAAg+IALAAIAAA+gAgFgfIAAgMIALAAIAAAMg");
	this.shape_168.setTransform(-276.35,-7.25);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgFgEgJAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_169.setTransform(-281.8,-6.075);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_170.setTransform(-290.125,-6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgJQAJgJAOAAQAGAAAGACQAGADAEAFIAAgjIALAAIAABYIgIAAIgCgKQgFAFgGAEQgGACgGAAQgOAAgJgJgAgOgEQgGAGAAAKQAAAKAGAHQAGAGAIABQAKgBAGgGQAGgHAAgKQAAgKgGgGQgGgFgKAAQgIAAgGAFg");
	this.shape_171.setTransform(-298.325,-7.25);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgKQgFAGgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_172.setTransform(-306.525,-6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgFAsIAAg+IAKAAIAAA+gAgFgfIAAgMIALAAIAAAMg");
	this.shape_173.setTransform(-312,-7.25);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgSAbQgIgHAAgKIALAAQAAAGAFAEQAEADAIAAQAHAAAEgCQADgCAAgFQAAgEgDgBQgEgCgGgCIgHgBQgKgBgGgEQgEgEAAgJQgBgIAHgFQAGgFAMAAQALAAAHAGQAIAFAAAJIgLAAQAAgFgEgDQgFgDgGAAQgHAAgDACQgEACABAFQAAAEACADQADABAHABIAHABQAKACAGADQAFAFAAAIQAAAJgGAFQgIAFgLAAQgMAAgIgGg");
	this.shape_174.setTransform(-316.9,-6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_175.setTransform(-324.075,-6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AggAtIAAhXIAIAAIACAKQAFgGAGgDQAGgCAGAAQAOAAAJAJQAJAJAAAOQAAAOgJAJQgJAJgOAAQgGAAgGgCQgGgDgEgFIAAAigAgPgcQgGAHAAAKQAAAKAGAGQAGAGAJABQAJgBAGgGQAGgGAAgKQAAgKgGgHQgGgFgJAAQgJAAgGAFg");
	this.shape_176.setTransform(-331.875,-4.85);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgJQAJgJAOAAQAGAAAGACQAGADAEAFIAAgjIALAAIAABYIgIAAIgCgKQgFAFgGAEQgGACgGAAQgOAAgJgJgAgOgEQgGAGAAAKQAAAKAGAHQAGAGAIABQAKgBAGgGQAGgHAAgKQAAgKgGgGQgGgFgKAAQgIAAgGAFg");
	this.shape_177.setTransform(-342.775,-7.25);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXAXQgJgIAAgPQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAPgJAIQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_178.setTransform(-350.525,-6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFAAgLIAAggIgKAAIAAgCIASgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFACADQAEACAHAAIALAAIAAALg");
	this.shape_179.setTransform(-359.3,-6.625);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgSAbQgHgHgBgKIALAAQABAGAEAEQAEADAHAAQAIAAADgCQAEgCAAgFQAAgEgDgBQgDgCgIgCIgGgBQgLgBgEgEQgGgEAAgJQABgIAGgFQAHgFALAAQALAAAIAGQAHAFAAAJIgLAAQAAgFgFgDQgEgDgGAAQgHAAgDACQgEACAAAFQAAAEAEADQADABAGABIAHABQAKACAGADQAFAFAAAIQAAAJgHAFQgGAFgNAAQgLAAgIgGg");
	this.shape_180.setTransform(-365.1,-6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAGQAGAFAIAAQAIAAAFgDQAFgEACgGIALAAQgCAKgJAHQgIAGgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJgBQgHABgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_181.setTransform(-372.175,-6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgOA4IAAgKIAHAAQAGAAACgCQACgCAAgGIAAhDIALAAIAABDQAAALgFAFQgFAEgKAAgAADgrIAAgMIAMAAIAAAMg");
	this.shape_182.setTransform(-378.475,-6.025);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_183.setTransform(374.775,-21.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_184.setTransform(367.1,-21.675);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_185.setTransform(359.225,-21.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFgfIAAgMIALAAIAAAMg");
	this.shape_186.setTransform(353.7,-22.85);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AATAgIAAgjQAAgJgGgFQgEgEgJAAQgHAAgFAFQgFAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQADgFAGgDQAFgCAGAAQAMAAAIAHQAHAHAAAMIAAAlg");
	this.shape_187.setTransform(348.25,-21.675);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgbAsIAAgKIAogrIgmAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKgAgFgfIAAgMIALAAIAAAMg");
	this.shape_188.setTransform(341.1,-22.85);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_189.setTransform(334.125,-21.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_190.setTransform(328.7,-22.925);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_191.setTransform(322.775,-21.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgaAgIAAgKIAmgrIglAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_192.setTransform(315.75,-21.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAEQAEAFAIABQAIgBAFgFQAFgEAAgKIAAgjIALAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_193.setTransform(308.8,-21.55);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAEQAFAFAHABQAIgBAFgFQAFgEgBgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_194.setTransform(297.8,-21.55);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgWAsIACgKIAcAAQAHAAADgCQAEgDAAgHIAAgMQgFAFgFACQgHADgFABQgOAAgJgKQgJgJAAgNQAAgPAJgJQAJgIAOgBQAGAAAHADQAFADAFAGIACgLIAIAAIAABBQAAAMgGAFQgGAGgNgBgAgOgcQgHAHAAAKQAAAKAHAFQAGAGAIAAQAKAAAGgGQAHgFAAgKQAAgKgHgHQgGgFgKgBQgIABgGAFg");
	this.shape_195.setTransform(289.7,-20.45);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIABAJQAEgFAFgDQAGgCAHAAQALAAAIAHQAIAHAAAMIAAAlg");
	this.shape_196.setTransform(281.95,-21.675);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgFAsIAAg/IALAAIAAA/gAgFgfIAAgMIALAAIAAAMg");
	this.shape_197.setTransform(276.35,-22.85);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQABAHAEADQAEADAIAAQAGAAAEgBQAEgDAAgFQAAgDgDgDQgEgCgGgBIgHgBQgKgBgGgEQgEgFAAgHQAAgJAGgFQAGgFAMAAQALAAAIAFQAHAGAAAJIgLAAQAAgFgEgDQgFgDgGAAQgHAAgDACQgDADAAAEQgBAEADADQAEACAGABIAHAAQALACAFAEQAFAEAAAIQAAAIgGAGQgIAFgLAAQgMAAgIgHg");
	this.shape_198.setTransform(271.45,-21.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_199.setTransform(263.825,-21.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_200.setTransform(256.175,-21.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_201.setTransform(250.75,-22.925);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgbAsIAAgKIAHAAQAHAAADgCQADgCACgGIACgFIgDAAIgag+IALAAIAWA1IAVg1IALAAIgdBHQgEAJgEADQgFAEgKAAg");
	this.shape_202.setTransform(242.2,-20.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IALAAIASAyIARgoIgEgKIAKAAIAVAyIARgyIAKAAIgWA/g");
	this.shape_203.setTransform(233.35,-21.625);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_204.setTransform(224.175,-21.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAnAgIAAglQAAgHgEgFQgFgEgHAAQgIAAgFAEQgEAFAAAHIAAAlIgLAAIAAglQAAgHgEgFQgFgEgIAAQgHAAgFAEQgFAFAAAHIAAAlIgLAAIAAg+IAIAAIACAIQADgEAGgDQAFgCAHAAQAHAAAGADQAGADACAFQADgFAGgDQAGgDAIAAQALAAAIAGQAHAHAAAMIAAAmg");
	this.shape_205.setTransform(214.275,-21.675);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAEQAEAFAIABQAIgBAFgFQAFgEAAgKIAAgjIALAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_206.setTransform(204.4,-21.55);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_207.setTransform(193.375,-21.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgFAsIAAg/IAKAAIAAA/gAgFgfIAAgMIALAAIAAAMg");
	this.shape_208.setTransform(187.95,-22.85);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACANIgMAAQgBgJgGgEQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAGQAGAHAIAAQAIAAAFgEQAGgFABgIIAMAAQgCAMgJAHQgIAIgNAAQgNAAgJgKg");
	this.shape_209.setTransform(182.625,-21.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_210.setTransform(176.875,-21.625);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_211.setTransform(169.625,-21.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IALAAIASAyIARgoIgEgKIAKAAIAVAyIARgyIAKAAIgWA/g");
	this.shape_212.setTransform(160.45,-21.625);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_213.setTransform(150.825,-21.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgfApIAAgKIAwg9IguAAIAAgKIA9AAIAAAKIgxA9IAyAAIAAAKg");
	this.shape_214.setTransform(143.25,-22.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_215.setTransform(134.775,-19.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgJAAIAAgCIASgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFADADQADACAHAAIALAAIAAALg");
	this.shape_216.setTransform(130.85,-22.225);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_217.setTransform(126.75,-22.925);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAEQAFAFAHABQAIgBAFgFQAFgEgBgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_218.setTransform(121.4,-21.55);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_219.setTransform(113.275,-21.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgLAAIAAg+IAJAAIABAJQAEgFAFgDQAGgCAHAAQALAAAIAHQAIAHAAAMIAAAlg");
	this.shape_220.setTransform(105.55,-21.675);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_221.setTransform(97.775,-21.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAUApIgUgeIgVAAIAAAeIgMAAIAAhRIAhAAQAOAAAJAGQAHAHABANQAAAJgFAFQgFAHgKACIAXAggAgVABIAVAAQAJAAAFgEQAFgEAAgHQAAgIgFgEQgFgEgJAAIgVAAg");
	this.shape_222.setTransform(90.15,-22.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IALAAIARAyIASgoIgEgKIAKAAIAUAyIASgyIAKAAIgWA/g");
	this.shape_223.setTransform(76.85,-21.625);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgXAkQgJgJAAgPQAAgNAJgKQAJgIAOgBQAPABAJAIQAJAKAAANQAAAPgJAJQgJAKgPAAQgOAAgJgKgAgPgEQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgJABgGAFgAgEgZIAMgTIAMAAIgPATg");
	this.shape_224.setTransform(67.675,-22.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_225.setTransform(61.775,-21.625);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_226.setTransform(55.075,-21.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIACAJQADgFAFgDQAGgCAGAAQANAAAHAHQAIAHgBAMIAAAlg");
	this.shape_227.setTransform(47.4,-21.675);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFAAgLIAAggIgKAAIAAgCIATgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFACADQADACAGAAIALAAIAAALg");
	this.shape_228.setTransform(40.8,-22.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_229.setTransform(36.325,-21.625);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_230.setTransform(29.075,-21.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AggApIAAhRIAgAAQAQgBAIAIQAJAGAAANQAAANgJAGQgIAHgQAAIgUAAIAAAdgAgUACIAVAAQAJgBAFgDQAGgEAAgIQAAgIgGgEQgFgEgJAAIgVAAg");
	this.shape_231.setTransform(21.425,-22.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AATAtIAAglQAAgIgGgEQgEgFgJAAQgHAAgFAFQgGAEABAIIAAAlIgMAAIAAhZIAMAAIAAAiQADgEAGgDQAFgCAFAAQAMAAAIAHQAHAHAAAMIAAAmg");
	this.shape_232.setTransform(9.65,-22.925);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACANIgMAAQgBgJgGgEQgFgEgIAAQgIAAgGAGQgFAHAAAJQAAAKAFAGQAGAHAIAAQAIAAAFgEQAGgFABgIIAMAAQgCAMgJAHQgIAIgNAAQgNAAgJgKg");
	this.shape_233.setTransform(1.925,-21.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCACgGIADgFIgFAAIgag+IANAAIAUA1IAWg1IAMAAIgeBHQgEAJgEADQgFAEgKAAg");
	this.shape_234.setTransform(-5.35,-20.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AATAgIAAgjQAAgJgGgFQgEgEgJAAQgHAAgFAFQgGAFABAIIAAAjIgLAAIAAg+IAHAAIADAJQADgFAGgDQAFgCAGAAQAMAAAIAHQAHAHAAAMIAAAlg");
	this.shape_235.setTransform(-12.75,-21.675);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_236.setTransform(-21.075,-21.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IAKAAIASAyIASgoIgEgKIAKAAIAUAyIASgyIAJAAIgVA/g");
	this.shape_237.setTransform(-30.25,-21.625);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_238.setTransform(-39.425,-21.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgaAgIAAgKIAmgrIglAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_239.setTransform(-46.5,-21.625);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgbAsIAAgKIAHAAQAHAAADgCQADgCADgGIABgFIgDAAIgag+IALAAIAVA1IAWg1IALAAIgdBHQgDAJgFADQgFAEgKAAg");
	this.shape_240.setTransform(-53.2,-20.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_241.setTransform(-58.725,-21.625);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_242.setTransform(-65.525,-21.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFABgLIAAggIgLAAIAAgCIATgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFABADQAEACAGAAIALAAIAAALg");
	this.shape_243.setTransform(-72.05,-22.225);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgVAZQgHgHAAgNIAAglIALAAIAAAjQAAAKAFAEQAEAFAIABQAIgBAFgFQAFgEgBgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgMAAgJgIg");
	this.shape_244.setTransform(-78.3,-21.55);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAeApIgKgWIgoAAIgKAWIgMAAIAlhRIALAAIAlBRgAAQAIIgQgkIgPAkIAfAAg");
	this.shape_245.setTransform(-86.65,-22.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgUAZQgIgHAAgNIAAglIALAAIAAAjQAAAKAFAEQAFAFAHABQAIgBAFgFQAEgEAAgKIAAgjIAMAAIAAAlQAAAMgIAIQgIAIgNAAQgNAAgHgIg");
	this.shape_246.setTransform(-98.4,-21.55);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_247.setTransform(-109.425,-21.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgFgEgJAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_248.setTransform(-117.1,-21.675);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AggAsIAAhXIAIAAIACALQAFgGAGgDQAGgDAGAAQAOABAJAIQAJAKAAAOQAAANgJAKQgJAKgOAAQgGAAgGgEQgGgCgEgFIAAAhgAgPgcQgGAHAAAKQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgFAAgLQAAgKgGgHQgGgFgJgBQgJABgGAFg");
	this.shape_249.setTransform(-124.975,-20.45);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAWAtQgHAAgDgDQgEgCAAgFIABgGIAHgLIgHACIgIABQgOAAgJgKQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAACIAAACIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAIgCAGIgGALIgFAKIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAFABIAIAAIAAAIgAAVgRQAAgIgGgFQgGgFgJAAQgHAAgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_250.setTransform(-133.075,-20.375);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgKAAIAAgCIATgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQAAAFADADQADACAHAAIAKAAIAAALg");
	this.shape_251.setTransform(-139.5,-22.225);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgSAaQgHgFgBgLIALAAQABAHAEADQAFADAGAAQAIAAADgBQAEgDAAgFQAAgDgDgDQgDgCgIgBIgGgBQgLgBgEgEQgGgFAAgHQABgJAGgFQAHgFALAAQALAAAHAFQAIAGAAAJIgLAAQAAgFgFgDQgEgDgGAAQgGAAgEACQgEADAAAEQABAEADADQADACAGABIAHAAQALACAFAEQAFAEAAAIQAAAIgHAGQgGAFgNAAQgLAAgIgHg");
	this.shape_252.setTransform(-145.3,-21.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_253.setTransform(-152.475,-21.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgXAkQgJgKAAgOQAAgNAJgKQAJgIAOgBQAGAAAGADQAGACAEAFIAAgiIALAAIAABYIgIAAIgCgKQgFAFgGADQgGAEgGAAQgOAAgJgKgAgOgEQgGAGAAAKQAAALAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgFgKgBQgIABgGAFg");
	this.shape_254.setTransform(-160.725,-22.85);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_255.setTransform(-169.375,-19.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_256.setTransform(-174.575,-21.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_257.setTransform(-179.825,-19.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_258.setTransform(-185.025,-21.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgaAgIAAgKIAmgrIglAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_259.setTransform(-195.55,-21.625);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_260.setTransform(-203.525,-19.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AggAsIAAhXIAIAAIACALQAFgGAGgDQAGgDAGAAQAOABAJAIQAJAKAAAOQAAANgJAKQgJAKgOAAQgGAAgGgEQgGgCgEgFIAAAhgAgPgcQgGAHAAAKQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgFAAgLQAAgKgGgHQgGgFgJgBQgJABgGAFg");
	this.shape_261.setTransform(-208.725,-20.45);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgWAjQgJgHgBgNIAMAAQABAIAGAFQAGAEAJAAQAJAAAFgDQAFgEAAgGQAAgFgEgDQgFgEgIgBIgHgBQgOgCgGgFQgIgHABgKQgBgKAJgHQAHgGAOAAQANAAAKAHQAIAHABANIgMAAQgBgIgFgFQgFgDgJAAQgIAAgFACQgFAEAAAGQAAAGAFADQAFADAJACIAHABQANACAGAFQAHAGAAAJQAAAMgJAGQgHAHgPAAQgPAAgJgIg");
	this.shape_262.setTransform(-217,-22.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_263.setTransform(-228.725,-21.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAQAtIgYgcIgKAAIAAAcIgKAAIAAhZIAKAAIAAAzIALAAIAXgZIAMAAIAAABIgbAdIAcAgIAAABg");
	this.shape_264.setTransform(-235.75,-22.925);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQABAHAEADQAFADAGAAQAIAAADgBQAEgDAAgFQAAgDgDgDQgDgCgIgBIgGgBQgLgBgEgEQgGgFAAgHQABgJAGgFQAGgFAMAAQALAAAHAFQAIAGAAAJIgLAAQAAgFgFgDQgEgDgGAAQgHAAgDACQgEADAAAEQAAAEAEADQADACAGABIAHAAQAKACAGAEQAFAEAAAIQAAAIgHAGQgGAFgNAAQgLAAgIgHg");
	this.shape_265.setTransform(-243.05,-21.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_266.setTransform(-247.95,-22.925);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAJQgJAKgPAAQgOAAgJgKgAgPgQQgGAHAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_267.setTransform(-253.425,-21.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AggApIAAhRIAgAAQAQgBAIAIQAJAGAAANQAAANgJAGQgIAHgQAAIgUAAIAAAdgAgUACIAVAAQAJgBAFgDQAGgEAAgIQAAgIgGgEQgFgEgJAAIgVAAg");
	this.shape_268.setTransform(-261.125,-22.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgWAsIACgKIAcAAQAHAAADgCQAEgDAAgHIAAgMQgFAFgFACQgHADgFABQgOAAgJgKQgJgJAAgNQAAgPAJgJQAJgIAOgBQAGAAAHADQAFADAFAGIACgLIAIAAIAABBQAAAMgGAFQgGAGgNgBgAgOgcQgHAHAAAKQAAAKAHAFQAGAGAIAAQAKAAAGgGQAHgFAAgKQAAgKgHgHQgGgFgKgBQgIABgGAFg");
	this.shape_269.setTransform(-273.35,-20.45);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIABAJQAEgFAFgDQAGgCAGAAQANAAAHAHQAIAHgBAMIAAAlg");
	this.shape_270.setTransform(-281.1,-21.675);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgFAsIAAg/IALAAIAAA/gAgFgfIAAgMIALAAIAAAMg");
	this.shape_271.setTransform(-286.7,-22.85);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAHAFADQAEADAIAAQAHAAAEgBQADgDAAgFQAAgDgDgDQgEgCgGgBIgHgBQgKgBgGgEQgEgFAAgHQgBgJAHgFQAGgFAMAAQALAAAIAFQAHAGAAAJIgLAAQAAgFgEgDQgFgDgGAAQgHAAgDACQgDADAAAEQAAAEACADQADACAHABIAHAAQAKACAGAEQAFAEAAAIQAAAIgGAGQgIAFgLAAQgMAAgIgHg");
	this.shape_272.setTransform(-291.6,-21.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAJgJAOAAQAGAAAGACQAGADAFAGIACgKIAIAAIAAA+IgIAAIgCgJQgFAFgGADQgGADgGAAQgOAAgJgKgAgOgQQgGAHAAAJQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgKAAQgIAAgGAGg");
	this.shape_273.setTransform(-299.225,-21.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_274.setTransform(-306.875,-21.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgaApIAAhRIAMAAIAABHIApAAIAAAKg");
	this.shape_275.setTransform(-313.65,-22.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgFApIAAhRIALAAIAABRg");
	this.shape_276.setTransform(-322.775,-22.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgcAfQgMgNAAgSQAAgSAMgMQAMgMARAAQAPAAALAKQAMAIACAQIgMAAQgCgLgIgGQgHgGgLAAQgNgBgIAKQgIAIAAAOQAAAOAIAJQAIAKANgBQALAAAHgGQAIgGACgMIAMAAQgCAQgLAJQgMAKgPAAQgRAAgMgMg");
	this.shape_277.setTransform(-329.225,-22.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAUApIgUgeIgVAAIAAAeIgMAAIAAhRIAhAAQAOAAAJAGQAHAHABANQAAAJgFAFQgFAHgKACIAXAggAgVABIAVAAQAJAAAFgEQAFgEAAgHQAAgIgFgEQgFgEgJAAIgVAAg");
	this.shape_278.setTransform(-337.8,-22.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgbAgIAAgKIAogrIgnAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_279.setTransform(-348.95,-21.625);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgWAXQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAJQAJAIAAAOIAAABIAAADIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAQgCAJgJAGQgIAHgMAAQgOAAgJgKgAAVgFQAAgIgGgFQgGgEgJAAQgHAAgGAEQgGAFgBAIIApAAIAAAAg");
	this.shape_280.setTransform(-355.925,-21.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgbAgIAAgKIAogrIgnAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_281.setTransform(-362.9,-21.625);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_282.setTransform(-368.075,-21.625);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AggAsIAAhXIAIAAIACALQAFgGAGgDQAGgDAGAAQAOABAJAIQAJAKAAAOQAAANgJAKQgJAKgOAAQgGAAgGgEQgGgCgEgFIAAAhgAgPgcQgGAHAAAKQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgFAAgLQAAgKgGgHQgGgFgJgBQgJABgGAFg");
	this.shape_283.setTransform(-374.875,-20.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_284.setTransform(374.925,-37.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgXAtIADgKIAcAAQAIAAACgEQADgCAAgIIAAgLQgDAFgHADQgFACgGAAQgOAAgJgJQgJgJAAgNQAAgOAJgKQAJgJAOAAQAGABAGACQAHADAEAFIACgKIAIAAIAABAQAAAMgGAGQgGAFgNABgAgPgbQgGAFAAALQAAAKAGAFQAHAGAJAAQAJAAAHgGQAFgGAAgJQAAgKgFgGQgHgHgJAAQgJAAgHAHg");
	this.shape_285.setTransform(366.7,-36.05);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_286.setTransform(359.025,-37.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_287.setTransform(351.35,-37.275);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_288.setTransform(343.025,-37.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AASAgIgSgpIgQApIgLAAIgXg/IAMAAIASAyIARgoIgEgKIAKAAIAVAyIAQgyIALAAIgWA/g");
	this.shape_289.setTransform(333.85,-37.225);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_290.setTransform(324.675,-37.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_291.setTransform(318.775,-37.225);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_292.setTransform(312.075,-37.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgNAtIAAg0IgKAAIAAgKIAKAAIAAgFQAAgLAGgFQAGgGALAAIAOAAIgDAJIgKAAQgHAAgDADQgDAEAAAGIAAAFIAXAAIAAAKIgXAAIAAA0g");
	this.shape_293.setTransform(305.925,-38.525);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_294.setTransform(299.425,-37.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgUAZQgIgIAAgNIAAgkIALAAIAAAjQAAAJAFAGQAEAEAIAAQAIAAAFgEQAEgGAAgJIAAgjIAMAAIAAAkQAAANgIAIQgIAIgNgBQgNABgHgIg");
	this.shape_295.setTransform(289.4,-37.15);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgXAtIADgKIAcAAQAIAAACgEQADgCAAgIIAAgLQgDAFgHADQgFACgGAAQgOAAgJgJQgJgJAAgNQAAgOAJgKQAJgJAOAAQAGABAGACQAHADAEAFIACgKIAIAAIAABAQAAAMgGAGQgGAFgNABgAgPgbQgGAFAAALQAAAKAGAFQAGAGAJAAQAKAAAHgGQAFgGABgJQgBgKgFgGQgHgHgKAAQgJAAgGAHg");
	this.shape_296.setTransform(281.3,-36.05);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AASAgIAAgjQABgJgGgFQgEgEgJAAQgHAAgFAFQgFAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQADgFAGgDQAFgCAGAAQAMAAAIAHQAHAHAAAMIAAAlg");
	this.shape_297.setTransform(273.55,-37.275);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgFAsIAAg/IAKAAIAAA/gAgFgeIAAgNIALAAIAAANg");
	this.shape_298.setTransform(267.95,-38.45);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAGAFAEQAFADAGABQAHAAAFgCQADgDAAgEQAAgFgDgCQgEgBgGgBIgHgBQgLgCgFgEQgEgFgBgHQAAgJAHgFQAGgFAMAAQALAAAHAFQAIAGAAAKIgLAAQAAgGgFgDQgEgDgGAAQgHAAgDACQgEACABAFQAAAEACACQADACAHACIAHABQALABAFADQAFAFAAAIQAAAJgGAEQgIAGgMAAQgLAAgIgHg");
	this.shape_299.setTransform(263.05,-37.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_300.setTransform(255.425,-37.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_301.setTransform(247.775,-37.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgEAtIAAhZIAKAAIAABZg");
	this.shape_302.setTransform(242.35,-38.525);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgFAsIAAg/IAKAAIAAA/gAgFgeIAAgNIALAAIAAANg");
	this.shape_303.setTransform(236.8,-38.45);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAQAtIgXgcIgKAAIAAAcIgLAAIAAhZIALAAIAAAzIAKAAIAXgZIAMAAIAAABIgbAdIAcAgIAAABg");
	this.shape_304.setTransform(232.05,-38.525);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AATAgIAAgjQgBgJgFgFQgEgEgJAAQgHAAgFAFQgGAFABAIIAAAjIgMAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAHAHABAMIAAAlg");
	this.shape_305.setTransform(224.2,-37.275);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgVAZQgHgIAAgNIAAgkIALAAIAAAjQAAAJAFAGQAEAEAIAAQAIAAAFgEQAFgGgBgJIAAgjIAMAAIAAAkQAAANgIAIQgIAIgNgBQgMABgJgIg");
	this.shape_306.setTransform(216.45,-37.15);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_307.setTransform(210.675,-37.225);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_308.setTransform(203.425,-37.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AASAgIgRgpIgRApIgLAAIgXg/IALAAIASAyIASgoIgEgKIAKAAIAUAyIARgyIAKAAIgVA/g");
	this.shape_309.setTransform(194.25,-37.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_310.setTransform(182.825,-37.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AARAgIgQgpIgRApIgLAAIgWg/IAKAAIASAyIASgoIgEgKIAKAAIAUAyIASgyIAJAAIgVA/g");
	this.shape_311.setTransform(173.7,-37.225);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_312.setTransform(164.525,-37.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgEAtIAAghIgKAGIAAgLIAKgGIAAgtIAKAAIAAAnIAJgGIAAALIgJAFIAAAog");
	this.shape_313.setTransform(158.75,-38.525);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgXAkQgJgJAAgOQAAgOAJgKQAJgJAOAAQAPAAAJAJQAJAKAAAOQAAAOgJAJQgJAJgPAAQgOAAgJgJgAgPgDQgGAFAAALQAAAJAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgKAAQgJAAgGAHgAgEgZIAMgUIAMAAIgPAUg");
	this.shape_314.setTransform(152.975,-38.45);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgXAtIADgKIAcAAQAIAAADgEQACgCAAgIIAAgLQgDAFgHADQgFACgGAAQgOAAgJgJQgJgJAAgNQAAgOAJgKQAJgJAOAAQAGABAGACQAHADAEAFIACgKIAIAAIAABAQAAAMgGAGQgGAFgNABgAgPgbQgGAFAAALQAAAKAGAFQAHAGAJAAQAJAAAHgGQAFgGAAgJQAAgKgFgGQgHgHgJAAQgJAAgHAHg");
	this.shape_315.setTransform(144.75,-36.05);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_316.setTransform(137.075,-37.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgbAgIAAgKIAngrIgmAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_317.setTransform(130.1,-37.225);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAGAAAKQAAAKAFAGQAGAHAIAAQAIAAAFgFQAGgEABgHIAMAAQgCALgJAHQgIAIgNAAQgNAAgJgJg");
	this.shape_318.setTransform(123.175,-37.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgbAgIAAgKIAogrIgnAAIAAgKIA0AAIAAAKIgnArIAoAAIAAAKg");
	this.shape_319.setTransform(116.25,-37.225);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgWAjQgJgIgBgLIAMAAQAAAHAHAFQAGAFAJAAQAJAAAFgEQAFgDAAgHQAAgGgEgDQgEgDgKgBIgHgBQgMgCgHgFQgIgGAAgKQABgLAHgHQAJgGANAAQANAAAJAHQAJAHABAMIgMAAQgBgHgFgEQgFgEgIgBQgKABgEADQgFADAAAGQAAAGAEAEQAFADAKABIAIABQAMACAHAFQAGAFAAAKQAAAMgJAGQgHAHgPAAQgPAAgJgIg");
	this.shape_320.setTransform(109.1,-38.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_321.setTransform(101.475,-34.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AARAgIgRgpIgQApIgLAAIgWg/IALAAIARAyIASgoIgEgKIAKAAIAUAyIASgyIAKAAIgWA/g");
	this.shape_322.setTransform(94.85,-37.225);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgFgFgBgLIAAggIgKAAIAAgCIATgUIACAAIAAAMIAXAAIAAAKIgXAAIAAAgQABAFACADQADACAHAAIAKAAIAAALg");
	this.shape_323.setTransform(86.95,-37.825);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgSAaQgHgFgBgLIALAAQABAGAEAEQAFADAGABQAHAAAFgCQADgDAAgEQAAgFgDgCQgDgBgIgBIgGgBQgLgCgEgEQgFgFgBgHQAAgJAHgFQAGgFAMAAQALAAAHAFQAIAGAAAKIgLAAQAAgGgFgDQgEgDgGAAQgGAAgEACQgDACAAAFQAAAEADACQADACAGACIAHABQALABAFADQAFAFAAAIQAAAJgHAEQgGAGgNAAQgLAAgIgHg");
	this.shape_324.setTransform(81.15,-37.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_325.setTransform(75.875,-37.225);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_326.setTransform(69.075,-37.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgFAsIAAg/IAKAAIAAA/gAgFgeIAAgNIALAAIAAANg");
	this.shape_327.setTransform(63.55,-38.45);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgLAqQgGgCgFgGIgCAKIgIAAIAAhZIALAAIAAAjQAEgEAGgDQAGgCAGgBQAOAAAJAJQAJAKAAAOQAAAOgJAJQgJAJgOAAQgGAAgGgDgAgPgDQgGAFAAALQAAAJAGAHQAGAGAJAAQAJAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgJAAQgJAAgGAHg");
	this.shape_328.setTransform(58.075,-38.45);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAWAtQgHAAgDgDQgEgCAAgFIABgGIAHgLIgHACIgIABQgOAAgJgKQgJgJAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAACIAAACIg0AAQABAJAGAFQAGAGAIAAQAIAAAFgDQAFgEACgFIALAAIgCAGIgGALIgFAKIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFABIAIAAIAAAIgAAVgRQAAgIgGgFQgGgFgJAAQgHAAgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_329.setTransform(49.975,-35.975);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFgeIAAgNIALAAIAAANg");
	this.shape_330.setTransform(44.55,-38.45);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgSAaQgHgFgBgLIALAAQABAGAEAEQAFADAGABQAIAAADgCQAEgDAAgEQAAgFgDgCQgDgBgIgBIgGgBQgLgCgEgEQgGgFAAgHQABgJAGgFQAHgFALAAQALAAAHAFQAIAGAAAKIgLAAQAAgGgFgDQgEgDgGAAQgGAAgEACQgEACAAAFQABAEADACQADACAGACIAHABQALABAFADQAFAFAAAIQAAAJgHAEQgGAGgNAAQgLAAgIgHg");
	this.shape_331.setTransform(39.65,-37.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgXAkQgJgJAAgOQAAgOAJgKQAJgJAOAAQAGABAGACQAGADAEAEIAAgjIALAAIAABZIgIAAIgCgKQgFAGgGACQgGADgGAAQgOAAgJgJgAgOgDQgGAFAAALQAAAJAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgKAAQgIAAgGAHg");
	this.shape_332.setTransform(32.025,-38.45);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_333.setTransform(24.375,-37.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgaAgIAAgKIAmgrIglAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_334.setTransform(17.4,-37.225);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_335.setTransform(12.225,-37.225);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AggAtIAAhYIAIAAIACAKQAFgFAGgDQAGgCAGgBQAOAAAJAJQAJAKAAAPQAAANgJAJQgJAJgOAAQgGAAgGgDQgGgCgEgFIAAAigAgPgbQgGAGAAALQAAAJAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgJQAAgLgGgGQgGgHgJAAQgJAAgGAHg");
	this.shape_336.setTransform(5.425,-36.05);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_337.setTransform(-5.575,-37.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_338.setTransform(-11.05,-38.525);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgXAkQgJgJAAgOQAAgOAJgKQAJgJAOAAQAGABAGACQAGADAEAEIAAgjIALAAIAABZIgIAAIgCgKQgFAGgGACQgGADgGAAQgOAAgJgJgAgOgDQgGAFAAALQAAAJAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgKAAQgIAAgGAHg");
	this.shape_339.setTransform(-16.975,-38.45);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AASAtIAAglQABgIgGgEQgEgFgJAAQgHAAgFAFQgFAEAAAIIAAAlIgLAAIAAhZIALAAIAAAiQADgEAGgDQAFgCAFAAQAMAAAIAHQAHAHAAAMIAAAmg");
	this.shape_340.setTransform(-27.05,-38.525);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgNAJgKQAJgJANAAQANAAAIAHQAJAHACAMIgMAAQgBgHgGgFQgFgEgIAAQgIAAgGAGQgFAGAAAKQAAAKAFAGQAGAHAIAAQAIAAAFgFQAGgEABgHIAMAAQgCALgJAHQgIAIgNAAQgNAAgJgJg");
	this.shape_341.setTransform(-34.775,-37.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgbAsIAAgKIAHAAQAHAAADgCQADgCADgGIACgFIgFAAIgZg+IAMAAIAUA1IAWg1IALAAIgdBHQgDAIgFAEQgFAEgKAAg");
	this.shape_342.setTransform(-42.05,-36);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AASAgIgSgpIgQApIgLAAIgXg/IAMAAIASAyIARgoIgEgKIAKAAIAVAyIAQgyIALAAIgWA/g");
	this.shape_343.setTransform(-50.9,-37.225);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_344.setTransform(-60.075,-37.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgXAtIADgKIAcAAQAHAAAEgEQACgCAAgIIAAgLQgEAFgFADQgHACgFAAQgOAAgJgJQgJgJAAgNQAAgOAJgKQAJgJAOAAQAGABAGACQAGADAFAFIACgKIAIAAIAABAQAAAMgGAGQgGAFgNABgAgOgbQgHAFAAALQAAAKAHAFQAFAGAKAAQAJAAAGgGQAHgGgBgJQABgKgHgGQgGgHgJAAQgKAAgFAHg");
	this.shape_345.setTransform(-68.3,-36.05);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AATAgIAAgjQgBgJgFgFQgEgEgJAAQgHAAgFAFQgGAFAAAIIAAAjIgLAAIAAg+IAIAAIACAJQAEgFAFgDQAGgCAHAAQAMAAAHAHQAIAHAAAMIAAAlg");
	this.shape_346.setTransform(-76.05,-37.275);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgEAsIAAg/IAKAAIAAA/gAgFgeIAAgNIALAAIAAANg");
	this.shape_347.setTransform(-81.65,-38.45);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgSAaQgHgFgBgLIALAAQABAGAEAEQAEADAHABQAIAAADgCQAEgDAAgEQAAgFgDgCQgDgBgIgBIgGgBQgLgCgEgEQgGgFAAgHQABgJAGgFQAHgFALAAQALAAAIAFQAHAGAAAKIgLAAQAAgGgFgDQgEgDgGAAQgHAAgDACQgDACgBAFQAAAEAEACQADACAGACIAHABQAKABAGADQAFAFAAAIQAAAJgHAEQgGAGgNAAQgLAAgIgHg");
	this.shape_348.setTransform(-86.55,-37.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_349.setTransform(-94.175,-37.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_350.setTransform(-101.825,-37.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_351.setTransform(-107.25,-38.525);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFABgLIAAggIgKAAIAAgCIASgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFABADQAEACAGAAIAMAAIAAALg");
	this.shape_352.setTransform(-113.8,-37.825);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_353.setTransform(-120.625,-37.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgFAtIAAghIgJAGIAAgLIAJgGIAAgtIAKAAIAAAnIAKgGIAAALIgKAFIAAAog");
	this.shape_354.setTransform(-126.35,-38.525);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AggAtIAAhYIAIAAIACAKQAFgFAGgDQAGgCAGgBQAOAAAJAJQAJAKAAAPQAAANgJAJQgJAJgOAAQgGAAgGgDQgGgCgEgFIAAAigAgPgbQgGAGAAALQAAAJAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgJQAAgLgGgGQgGgHgJAAQgJAAgGAHg");
	this.shape_355.setTransform(-132.125,-36.05);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_356.setTransform(-140.325,-37.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_357.setTransform(-150.925,-37.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AAnAgIAAglQAAgHgEgFQgFgEgHAAQgIAAgFAEQgEAFAAAHIAAAlIgLAAIAAglQAAgHgEgFQgFgEgIAAQgHAAgFAEQgFAFAAAHIAAAlIgLAAIAAg+IAIAAIACAIQADgEAGgDQAFgCAHAAQAHAAAGADQAGADACAFQADgFAGgDQAGgDAIAAQALAAAIAGQAHAHAAAMIAAAmg");
	this.shape_358.setTransform(-160.775,-37.275);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgVAZQgHgIAAgNIAAgkIALAAIAAAjQAAAJAFAGQAFAEAHAAQAIAAAFgEQAFgGgBgJIAAgjIAMAAIAAAkQAAANgIAIQgIAIgNgBQgMABgJgIg");
	this.shape_359.setTransform(-170.65,-37.15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAGAFAEQAEADAIABQAHAAAEgCQADgDAAgEQAAgFgDgCQgEgBgGgBIgHgBQgKgCgGgEQgEgFAAgHQgBgJAHgFQAGgFAMAAQALAAAIAFQAHAGAAAKIgLAAQAAgGgEgDQgFgDgGAAQgHAAgDACQgDACAAAFQAAAEACACQADACAHACIAHABQAKABAGADQAFAFAAAIQAAAJgGAEQgIAGgLAAQgMAAgIgHg");
	this.shape_360.setTransform(-177.75,-37.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_361.setTransform(-187.725,-37.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AASAgIgRgpIgRApIgLAAIgXg/IALAAIASAyIASgoIgEgKIAKAAIAUAyIARgyIAKAAIgVA/g");
	this.shape_362.setTransform(-196.9,-37.225);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_363.setTransform(-206.075,-37.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgXAkQgJgJAAgOQAAgOAJgKQAJgJAOAAQAGABAGACQAGADAEAEIAAgjIALAAIAABZIgIAAIgCgKQgFAGgGACQgGADgGAAQgOAAgJgJgAgOgDQgGAFAAALQAAAJAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgKAAQgIAAgGAHg");
	this.shape_364.setTransform(-214.325,-38.45);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_365.setTransform(-222.525,-37.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgEAtIAAghIgKAGIAAgLIAKgGIAAgtIAJAAIAAAnIAKgGIAAALIgKAFIAAAog");
	this.shape_366.setTransform(-228.25,-38.525);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAQAtIgYgcIgKAAIAAAcIgLAAIAAhZIALAAIAAAzIALAAIAWgZIANAAIAAABIgbAdIAdAgIAAABg");
	this.shape_367.setTransform(-233.3,-38.525);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgbAsIAAgKIAIAAQAGAAADgCQADgCACgGIADgFIgFAAIgag+IANAAIAUA1IAWg1IAMAAIgeBHQgEAIgEAEQgFAEgKAAg");
	this.shape_368.setTransform(-240.8,-36);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgbAgIAAgKIAogrIgmAAIAAgKIAzAAIAAAKIgnArIApAAIAAAKg");
	this.shape_369.setTransform(-247.5,-37.225);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgSAgIAAg/IAlAAIgEAKIgWAAIAAA1g");
	this.shape_370.setTransform(-252.675,-37.225);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AggAtIAAhYIAIAAIACAKQAFgFAGgDQAGgCAGgBQAOAAAJAJQAJAKAAAPQAAANgJAJQgJAJgOAAQgGAAgGgDQgGgCgEgFIAAAigAgPgbQgGAGAAALQAAAJAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgJQAAgLgGgGQgGgHgJAAQgJAAgGAHg");
	this.shape_371.setTransform(-259.475,-36.05);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_372.setTransform(-270.025,-37.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AALAmQgLAAgGgFQgGgFAAgLIAAggIgKAAIAAgCIATgUIADAAIAAAMIAWAAIAAAKIgWAAIAAAgQAAAFACADQADACAGAAIALAAIAAALg");
	this.shape_373.setTransform(-276.55,-37.825);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AANAkQgHgHAAgKQAAgLAHgGQAGgGALABQALgBAHAGQAHAGAAALQAAAKgHAHQgHAHgLAAQgKAAgHgHgAAUAIQgEAEAAAHQAAAGAEAEQAEAFAGAAQAHAAAEgFQAEgEAAgGQAAgHgEgEQgEgDgHAAQgGAAgEADgAgeAqIAyhTIALAAIgyBTgAgvgBQgHgHAAgKQAAgKAHgIQAGgGALAAQALAAAHAGQAHAIAAAKQAAAKgHAHQgHAGgLAAQgLAAgGgGgAgogcQgEAEAAAGQAAAHAEADQAEAEAGABQAHAAAEgFQAEgEAAgGQAAgGgEgEQgEgFgHAAQgGAAgEAFg");
	this.shape_374.setTransform(-287.45,-38.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AACAqIAAhIIgPAAIADgLIAYAAIAABTg");
	this.shape_375.setTransform(-296.025,-38.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgXAgQgJgMAAgUQAAgTAJgLQAIgMAPAAQAPAAAJAMQAKALgBATQABATgKAMQgJAMgPAAQgPAAgIgLgAgPgXQgFAJAAAOQAAAPAFAJQAGAJAJAAQAKAAAGgJQAGgIAAgQQAAgPgGgIQgGgJgKAAQgJAAgGAJg");
	this.shape_376.setTransform(-301.7,-38.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AACAqIAAhIIgPAAIADgLIAYAAIAABTg");
	this.shape_377.setTransform(-308.375,-38.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgXAkQgJgJAAgOQAAgOAJgKQAJgJAOAAQAGABAGACQAGADAEAEIAAgjIALAAIAABZIgIAAIgCgKQgFAGgGACQgGADgGAAQgOAAgJgJgAgOgDQgGAFAAALQAAAJAGAHQAGAGAIAAQAKAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgKAAQgIAAgGAHg");
	this.shape_378.setTransform(-316.675,-38.45);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgJAOAAQAPAAAJAJQAJAJAAAOQAAAOgJAKQgJAJgPAAQgOAAgJgJgAgPgQQgGAGAAAKQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_379.setTransform(-324.425,-37.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgWAtIACgKIAcAAQAHAAADgEQAEgCAAgIIAAgLQgFAFgFADQgHACgFAAQgOAAgJgJQgJgJAAgNQAAgOAJgKQAJgJAOAAQAGABAHACQAFADAFAFIACgKIAIAAIAABAQAAAMgGAGQgGAFgNABgAgOgbQgHAFAAALQAAAKAHAFQAGAGAIAAQAKAAAGgGQAHgGAAgJQAAgKgHgGQgGgHgKAAQgIAAgGAHg");
	this.shape_380.setTransform(-335,-36.05);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AASAgIAAgjQAAgJgEgFQgGgEgIAAQgHAAgFAFQgFAFgBAIIAAAjIgKAAIAAg+IAIAAIABAJQAEgFAFgDQAGgCAGAAQANAAAHAHQAIAHgBAMIAAAlg");
	this.shape_381.setTransform(-342.75,-37.275);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgFAsIAAg/IALAAIAAA/gAgFgeIAAgNIALAAIAAANg");
	this.shape_382.setTransform(-348.35,-38.45);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgSAaQgIgFAAgLIALAAQAAAGAFAEQAEADAIABQAHAAAEgCQADgDAAgEQAAgFgDgCQgEgBgGgBIgHgBQgKgCgGgEQgEgFAAgHQgBgJAHgFQAGgFAMAAQALAAAIAFQAHAGAAAKIgLAAQAAgGgEgDQgFgDgGAAQgHAAgDACQgDACAAAFQAAAEACACQADACAHACIAHABQAKABAGADQAFAFAAAIQAAAJgGAEQgIAGgLAAQgMAAgIgHg");
	this.shape_383.setTransform(-353.25,-37.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAJgJAOAAQAGAAAGADQAGADAFAFIACgKIAIAAIAAA/IgIAAIgCgKQgFAFgGADQgGADgGAAQgOAAgJgJgAgOgQQgGAGAAAKQAAAKAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgKQAAgKgGgGQgGgGgKAAQgIAAgGAGg");
	this.shape_384.setTransform(-360.875,-37.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgJANAAQAOAAAJAIQAJAJAAAOIAAABIAAACIg0AAQABAKAGAFQAGAGAIAAQAIAAAFgDQAFgDACgHIALAAQgCALgJAFQgIAHgMAAQgOAAgJgJgAAVgFQAAgIgGgFQgGgFgJABQgHgBgGAFQgGAEgBAJIApAAIAAAAg");
	this.shape_385.setTransform(-368.525,-37.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgaAqIAAhTIAMAAIAABIIApAAIAAALg");
	this.shape_386.setTransform(-375.3,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Warstwa_1
	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("EhibAu4MAAAhdvMDE3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_387).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7kopia, new cjs.Rectangle(-630,-300,1260,600), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggA0IAAgSIAmgnIglAAIAAgRIA+AAIAAARIgmAnIAoAAIAAASgAgIgcIAOgXIAVAAIgTAXg");
	this.shape.setTransform(17.875,-1.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAqQgKgMAAgQQAAgQAKgLQALgLAQAAQAFAAAFABQAGACAEAEIAAgjIAUAAIAABnIgOAAIgEgHQgFAEgGACQgFADgGAAQgQAAgLgLgAgMAAQgGAEAAAKQAAAJAGAGQAFAFAIAAQAIAAAGgFQAFgGAAgJQAAgKgFgEQgGgGgIAAQgIAAgFAGg");
	this.shape_1.setTransform(9.125,-1.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAmIgQgoIgPAoIgUAAIgahLIAVAAIARAyIAPglIgEgNIAUAAIASAyIAPgyIATAAIgXBLg");
	this.shape_2.setTransform(-1.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAcQgKgMAAgQQAAgQAKgLQALgLAQAAQAGAAAFACQAGACAFAFIAEgIIAOAAIAABLIgOAAIgEgIQgFAEgGADQgFACgGAAQgQAAgLgLgAgMgOQgGAGAAAIQAAAJAGAGQAFAFAIABQAIgBAGgFQAFgGAAgJQAAgIgFgGQgGgGgIAAQgIAAgFAGg");
	this.shape_3.setTransform(-12.625,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAmIAAhLIAxAAIgGATIgXAAIAAA4g");
	this.shape_4.setTransform(-19.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA0IAAhmIAOAAIAEAIQAFgFAGgCQAFgCAGAAQAQAAALALQAKALAAARQAAAPgKALQgLALgQAAQgFAAgFgCQgGgCgEgDIAAAigAgOgcQgFAGAAAKQAAAJAFAFQAGAFAIAAQAIAAAFgFQAGgFAAgJQAAgKgGgGQgFgFgIAAQgIAAgGAFg");
	this.shape_5.setTransform(-27.525,1.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfQgKgHAAgLIAUAAQAAAEADADQAFADAFAAQAGAAACgBQAEgCAAgEQAAgDgEgBQgCgCgHgBIgGgBQgNgCgGgFQgGgGAAgJQAAgLAIgGQAJgHANAAQAOAAAJAHQAJAHAAAKIgTAAQAAgDgEgDQgDgDgGABQgFAAgDABQgCACAAADQAAADACACIAJACIAHACQANABAGAGQAHAEAAAKQAAALgJAHQgJAHgOAAQgOAAgJgIg");
	this.shape_6.setTransform(-36.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AvVDpIAAnRIerAAIAAHRg");
	this.shape_7.setTransform(-8.375,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.6,-23.4,196.5,46.599999999999994);


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(-236.5,71.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(309).to({_off:false},0).to({alpha:1},6).to({startPosition:0},61).to({alpha:0},7).to({startPosition:0},3).to({_off:true},1).wait(3));

	// Layer_6
	this.instance_1 = new lib.Tween3copy("synched",0);
	this.instance_1.setTransform(-246.95,59.25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({_off:false},0).to({alpha:1},6).to({startPosition:0},49).to({alpha:0},6).to({startPosition:0},75).to({_off:true},1).wait(3));

	// Layer_3
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-246.95,59.25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152).to({_off:false},0).to({alpha:1},6).to({startPosition:0},87).to({alpha:0},6).to({startPosition:0},135).to({_off:true},1).wait(3));

	// Layer_4
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(-269.65,63.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(76).to({_off:false},0).to({alpha:1},6).to({startPosition:0},65).to({alpha:0},6).to({startPosition:0},233).to({_off:true},1).wait(3));

	// Layer_5
	this.instance_4 = new lib.Tween6("synched",0);
	this.instance_4.setTransform(-220.35,69.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},5).to({startPosition:0},66).to({alpha:0},6).to({_off:true},1).wait(312));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.1,-29.7,240.8,56.8);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.TITRE();
	this.instance.setTransform(209.5,86.15,1.96,1.96,0,0,0,86,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-5.5,-19.1,576.4,127.80000000000001), null);


(lib.Symbol12kopia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,3).p("ABHBHIhHhHIhGhGABHhGIhHBGIhGBH");
	this.shape.setTransform(4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,0,0,3).p("AAkAkIhHhH");
	this.shape_1.setTransform(7.55,4.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#656B53").ss(3,0,0,3).p("ABHhGIhHBGIhGBHAAAAAIhGhG");
	this.shape_2.setTransform(4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AjADBIAAmBIGBAAIAAGBg");
	this.shape_3.setTransform(3.7,1.275);

	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(3.7,1.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjcDcQhbhaAAiCQAAiBBbhbQBbhbCBAAQCCAABaBbQBcBbAACBQAACChcBaQhaBciCAAQiBAAhbhcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-31.2,62.4,62.4);


(lib.Symbol9kopia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.Symbol10kopia2();
	this.instance.setTransform(872.5,-276.2,0.9713,0.9713,0,0,0,46,11.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AolB1IAAjpIRLAAIAADpg");
	this.shape.setTransform(858.925,-173.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(804,-187.8,109.89999999999998,26);


// stage content:
(lib.REN_LCV_DCO_PL_1260x600_60324 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,376,386,387];
	// timeline functions:
	this.frame_0 = function() {
		this.loop = 0;
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		var root = this;
		var frequency = 3;
		stage.enableMouseOver(frequency);
		stage.canvas.style.cursor = "pointer";
		
		this.legalBtn.addEventListener("mouseover", viewLegal.bind(this));
		this.closeBtn.addEventListener("mouseover", closeLegal.bind(this));
		
		function viewLegal() 
		{
			this.legal.visible = true;
			this.closeBtn.visible = true;
		
		}
		
		function closeLegal() 
		{
			this.legal.visible = false;
			this.closeBtn.visible = false;
		
		}
		
		if(!this.klik.hasEventListener('click'))
			this.klik.addEventListener('click',onclickF,false);
		
		
		function onclickF()
		{
			clickFunc()
		}
	}
	this.frame_376 = function() {
		this.loop++
		if(this.loop == 2)
		{
			
			this.gotoAndStop(387);
		}
	}
	this.frame_386 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
	}
	this.frame_387 = function() {
		var _this = this;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(376).call(this.frame_376).wait(10).call(this.frame_386).wait(1).call(this.frame_387).wait(2));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,2,1).p("Ehibgu3MDE3AAAMAAABdvMjE3AAAg");
	this.shape.setTransform(630,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(389));

	// nota_prawna_zamknij
	this.closeBtn = new lib.Symbol12kopia();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.setTransform(1256.4,21.1,0.6,0.6,0,0,0,17,17.2);
	this.closeBtn.visible = false;
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.Symbol12kopia(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).to({_off:true},388).wait(1));

	// nota_prawna_opis
	this.legal = new lib.Symbol7kopia();
	this.legal.name = "legal";
	this.legal.setTransform(630,300);
	this.legal.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.legal).to({_off:true},388).wait(1));

	// nota_prawna_btn
	this.legalBtn = new lib.Symbol9kopia();
	this.legalBtn.name = "legalBtn";
	this.legalBtn.setTransform(151.2,775.8,0.9922,0.9927,0,0,0,71.8,45.7);
	new cjs.ButtonHelper(this.legalBtn, 0, 1, 2, false, new lib.Symbol9kopia(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEApIAAhSIAJAAIAABSg");
	this.shape_1.setTransform(964.775,554.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAqIAAhRIAHAAIACAJQAEgFAGgCQAGgDAFAAQANAAAIAJQAIAIAAANQAAAMgIAJQgIAJgNgBQgFAAgGgCQgFgCgEgFIAAAggAgOgZQgGAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAFgFQAGgGAAgJQAAgJgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(959.725,556.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_3.setTransform(954.525,558.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKAjQgKAAgGgFQgFgEAAgKIAAgeIgJAAIAAgCIARgSIACAAIAAALIAVAAIAAAJIgVAAIAAAdQAAAFACADQADACAHAAIAKAAIAAAKg");
	this.shape_4.setTransform(950.875,555.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEApIAAhSIAJAAIAABSg");
	this.shape_5.setTransform(947.075,554.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAXQgIgHAAgMIAAghIALAAIAAAhQAAAIAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAghIALAAIAAAhQAAAMgHAHQgIAHgMAAQgLAAgHgHg");
	this.shape_6.setTransform(942.125,555.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAWQgIgJAAgNQAAgMAIgIQAIgJANAAQAGAAAFADQAGACAEAFIACgJIAHAAIAAA5IgHAAIgCgJQgEAFgGADQgFACgGAAQgNABgIgJgAgNgOQgGAGAAAIQAAAJAGAHQAFAFAIAAQAJAAAGgFQAGgHAAgJQAAgIgGgGQgGgGgJAAQgIAAgFAGg");
	this.shape_7.setTransform(934.675,555.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAeIAAghQAAgIgFgEQgEgEgIgBQgGABgGAEQgEAFAAAHIAAAhIgKAAIAAg6IAHAAIACAJQADgFAFgCQAFgDAGAAQALAAAIAHQAGAHABALIAAAig");
	this.shape_8.setTransform(927.55,555.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAWQgJgJAAgNQAAgNAJgIQAIgJAMABQANgBAJAJQAIAIAAANIAAAAIAAACIgwAAQAAAJAGAGQAFAFAIAAQAHAAAFgEQAFgCABgGIALAAQgCAJgIAGQgIAGgLgBQgMABgJgJgAAUgEQgBgIgFgEQgGgFgIABQgHgBgFAFQgFAEgBAIIAmAAIAAAAg");
	this.shape_9.setTransform(920.375,555.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAhAAIgDAJIgUAAIAAAwg");
	this.shape_10.setTransform(914.975,555.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAWQgIgJAAgNQAAgMAIgIQAIgJANAAQAGAAAFADQAGACAEAFIACgJIAHAAIAAA5IgHAAIgCgJQgEAFgGADQgFACgGAAQgNABgIgJgAgNgOQgGAGAAAIQAAAJAGAHQAFAFAIAAQAJAAAGgFQAGgHAAgJQAAgIgGgGQgGgGgJAAQgIAAgFAGg");
	this.shape_11.setTransform(906.275,555.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAeIAAghQAAgIgFgEQgFgEgHgBQgHABgEAEQgFAFAAAHIAAAhIgLAAIAAg6IAIAAIACAJQADgFAFgCQAFgDAGAAQAMAAAGAHQAIAHgBALIAAAig");
	this.shape_12.setTransform(899.15,555.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFApIAAg6IAKAAIAAA6gAgFgcIAAgMIALAAIAAAMg");
	this.shape_13.setTransform(891.95,554.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARApIAAghQAAgIgEgEQgGgEgHAAQgHAAgEAEQgFAEAAAIIAAAhIgLAAIAAhSIALAAIAAAgQADgEAFgCQAFgCAFAAQAMAAAGAGQAIAHgBAKIAAAjg");
	this.shape_14.setTransform(884.85,554.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAWQgIgJgBgNQABgMAIgIQAIgJAMAAQAMAAAHAGQAIAHADALIgMAAQgBgHgFgEQgFgEgHAAQgHAAgGAGQgFAGAAAIQAAAKAFAGQAGAFAHAAQAHAAAFgDQAFgEABgIIAMAAQgDAMgIAGQgHAHgMgBQgMABgIgJg");
	this.shape_15.setTransform(877.75,555.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAWQgIgJAAgNQAAgMAIgIQAIgJANAAQAGAAAFADQAGACAEAFIACgJIAHAAIAAA5IgHAAIgCgJQgEAFgGADQgFACgGAAQgNABgIgJgAgNgOQgGAGAAAIQAAAJAGAHQAFAFAIAAQAJAAAGgFQAGgHAAgJQAAgIgGgGQgGgGgJAAQgIAAgFAGg");
	this.shape_16.setTransform(870.275,555.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARAeIAAghQAAgIgFgEQgFgEgHgBQgHABgEAEQgFAFAAAHIAAAhIgLAAIAAg6IAIAAIACAJQADgFAFgCQAFgDAGAAQAMAAAGAHQAIAHgBALIAAAig");
	this.shape_17.setTransform(863.15,555.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAJgIQAIgJANAAQANAAAJAJQAJAIAAAMQAAANgJAJQgJAJgNgBQgNABgIgJgAgOgOQgFAGAAAIQAAAJAFAHQAGAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(855.875,555.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEApIAAhSIAJAAIAABSg");
	this.shape_19.setTransform(850.775,554.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAWQgIgJAAgNQAAgMAIgIQAIgJANAAQAGAAAFADQAGACAEAFIACgJIAHAAIAAA5IgHAAIgCgJQgEAFgGADQgFACgGAAQgNABgIgJgAgNgOQgGAGAAAIQAAAJAGAHQAFAFAIAAQAJAAAGgFQAGgHAAgJQAAgIgGgGQgGgGgJAAQgIAAgFAGg");
	this.shape_20.setTransform(845.325,555.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAZQgGgGgBgJIALAAQgBAFAFAEQAEADAHAAQAGAAAEgCQACgCAAgEQAAgDgCgCQgDgDgGAAIgGgCQgKgBgFgDQgFgEAAgIQAAgIAGgFQAHgEAKAAQAKgBAHAGQAHAGAAAIIgKAAQAAgFgFgDQgEgDgFAAQgGAAgEADQgCABAAAEQgBAFADABQADACAGABIAGACQALAAAEAEQAFAEAAAHQAAAIgHAFQgGAFgKgBQgLABgIgGg");
	this.shape_21.setTransform(838.7,555.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQAdIgPglIgPAlIgKAAIgWg5IALAAIAQAtIAQgkIgDgJIAJAAIATAuIAPguIAKAAIgUA5g");
	this.shape_22.setTransform(828.725,555.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZApIAAgKIAHAAQAGAAADgCQADgCACgFIACgFIgEAAIgYg5IALAAIATAxIAUgxIALAAIgbBBQgEAJgDADQgFAEgJAAg");
	this.shape_23.setTransform(818.525,556.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEApIAAgeIgKAFIAAgKIAKgFIAAgqIAJAAIAAAlIAKgGIAAAKIgKAEIAAAlg");
	this.shape_24.setTransform(813.55,554.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAiQgJgJAAgOQAAgMAJgIQAIgJANAAQANAAAJAJQAJAIAAAMQAAAOgJAJQgJAIgNAAQgNAAgIgIgAgOgCQgFAEAAAJQAAAKAFAGQAGAGAIAAQAJAAAFgGQAGgGAAgKQAAgIgGgFQgFgHgJAAQgIAAgGAHgAgEgXIALgSIALAAIgNASg");
	this.shape_25.setTransform(808.225,554.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAqIACgKIAaAAQAGAAADgDQADgDAAgGIAAgLQgEAFgGADQgFABgFAAQgMAAgJgIQgJgJABgLQgBgNAJgIQAJgJAMAAQAGAAAFADQAGACAEAFIACgJIAHAAIAAA7QABALgGAFQgFAFgMABgAgOgaQgFAHAAAJQAAAJAFAFQAGAFAIAAQAKAAAFgFQAGgFAAgJQAAgKgGgFQgFgGgKAAQgIAAgGAFg");
	this.shape_26.setTransform(800.6,556.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAWQgJgJAAgNQAAgNAJgIQAIgJAMABQANgBAJAJQAIAIAAANIAAAAIAAACIgwAAQAAAJAGAGQAFAFAIAAQAHAAAFgEQAFgCABgGIALAAQgCAJgIAGQgIAGgLgBQgMABgJgJgAAUgEQgBgIgFgEQgGgFgIABQgHgBgFAFQgFAEgBAIIAmAAIAAAAg");
	this.shape_27.setTransform(793.525,555.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZAdIAAgJIAkgoIgjAAIAAgIIAwAAIAAAIIgkAoIAmAAIAAAJg");
	this.shape_28.setTransform(787.1,555.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAWQgJgJAAgNQAAgMAJgIQAIgJAMAAQALAAAJAGQAHAHADALIgLAAQgCgHgFgEQgFgEgHAAQgIAAgFAGQgFAGAAAIQAAAKAFAGQAFAFAIAAQAHAAAFgDQAFgEACgIIALAAQgDAMgHAGQgJAHgLgBQgMABgIgJg");
	this.shape_29.setTransform(780.75,555.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAdIAAgJIAkgoIgjAAIAAgIIAvAAIAAAIIgkAoIAlAAIAAAJg");
	this.shape_30.setTransform(774.35,555.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAZQgIgGAAgJIAKAAQABAFAEAEQAEADAHAAQAGAAADgCQADgCAAgEQAAgDgCgCQgDgDgHAAIgGgCQgJgBgFgDQgFgEAAgIQAAgIAHgFQAFgEALAAQAKgBAHAGQAHAGAAAIIgKAAQgBgFgDgDQgFgDgFAAQgGAAgDADQgEABAAAEQABAFACABQADACAGABIAGACQALAAAEAEQAFAEAAAHQAAAIgGAFQgHAFgKgBQgLABgHgGg");
	this.shape_31.setTransform(768.35,555.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.legalBtn}]},256).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},132).wait(1));

	// clickTag
	this.klik = new lib.Symbol33();
	this.klik.name = "klik";
	this.klik.setTransform(35480.9,499.85,0.5852,0.7806,0,0,0,60628.3,640.3);
	new cjs.ButtonHelper(this.klik, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.klik).to({_off:true},388).wait(1));

	// CTA
	this.instance = new lib.cta("synched",0);
	this.instance.setTransform(1120,532.2,1.3075,1.3075,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(389));

	// head
	this.instance_1 = new lib.LOGO();
	this.instance_1.setTransform(1110.1,454.35,2.7848,2.7848,0,0,0,20.1,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(389));

	// Layer_6
	this.instance_2 = new lib.text("synched",0);
	this.instance_2.setTransform(35.95,563.9,2.6232,2.6232,0,0,0,-351.2,2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRBYIAAh+IAiAAIAAB+gAgRg1IAAgiIAiAAIAAAig");
	this.shape_32.setTransform(378.7,546.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAXBYIgkgyIgPAAIAAAyIgjAAIAAivIAjAAIAABgIAQAAIAjgvIAmAAIAAABIguA7IAxBBIAAABg");
	this.shape_33.setTransform(368.65,546.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAqBaQgOAAgHgGQgIgGAAgKQAAgFACgFQACgGAIgNIgLACIgLABQgdAAgTgTQgSgSAAgcQAAgeASgSQASgSAcAAQAcAAASASQARASAAAdIAAAFIAAAFIhdAAQACAOAJAGQAIAHANAAQAKAAAHgFQAGgEADgGIAiAAIgDALIgIATIgIATIgCAKQAAAFACACQADABAEAAIAMAAIAAAZgAAeglQgCgLgIgGQgIgHgMAAQgLAAgHAGQgIAGgCAMIA6AAIAAAAg");
	this.shape_34.setTransform(353.325,551.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpBAIAAh+IBTAAIgKAfIgmAAIAABfg");
	this.shape_35.setTransform(341.65,549.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgvBGQgSgTAAgcQAAgcASgSQASgTAaAAQAKAAAJADQAJAEAHAGIAAg7IAiAAIAACuIgYAAIgHgNQgIAIgJAEQgKAEgLAAQgaAAgSgTgAgVgCQgJAJAAAQQAAAQAJAJQAJAKANAAQAPAAAJgKQAJgJAAgQQAAgQgJgJQgJgJgPAAQgNAAgJAJg");
	this.shape_36.setTransform(323.375,546.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgwAwQgTgSAAgeQAAgcATgTQATgSAdAAQAeAAATASQATATAAAcQAAAdgTATQgTASgeAAQgdAAgTgSgAgXgYQgJAKAAAOQAAAQAJAJQAJAKAOAAQAOAAAKgKQAJgJAAgQQAAgOgJgKQgKgKgOAAQgOAAgJAKg");
	this.shape_37.setTransform(308.35,549.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgtAwQgSgSAAgeQAAgcASgTQASgSAcAAQAcAAASASQARASAAAdIAAAEIAAAGIhdAAQACANAJAHQAIAHANAAQAKAAAHgFQAGgDADgIIAiAAQgDAUgRANQgQAMgYAAQgdAAgTgSgAAegNQgCgLgIgGQgIgHgMAAQgLABgHAFQgIAHgCALIA6AAIAAAAg");
	this.shape_38.setTransform(289.375,549.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAbBBIAAhGQAAgNgIgHQgHgIgMAAQgLAAgHAHQgHAIAAANIAABGIgjAAIAAh+IAYAAIAHANQAGgHAKgFQAKgEAKAAQAYAAAPAPQAPAPAAAXIAABMg");
	this.shape_39.setTransform(274.525,548.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhBBZIAAiuIAYAAIAHANQAHgIAKgEQAKgEAKAAQAbAAASATQASATAAAcQAAAcgSATQgSASgbAAQgJAAgJgDQgJgDgGgHIAAA7gAgYgvQgJAKAAAPQAAAQAJAJQAJAJAPAAQANAAAJgJQAJgJAAgQQAAgPgJgKQgJgKgNAAQgPAAgJAKg");
	this.shape_40.setTransform(259.275,551.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAqBaQgOAAgHgGQgIgGAAgKQAAgFACgFQACgGAIgNIgLACIgLABQgdAAgTgTQgSgSAAgcQAAgeASgSQASgSAcAAQAcAAASASQARASAAAdIAAAFIAAAFIhdAAQACAOAJAGQAIAHANAAQAKAAAHgFQAGgEADgGIAiAAIgDALIgIATIgIATIgCAKQAAAFACACQADABAEAAIAMAAIAAAZgAAeglQgCgLgIgGQgIgHgMAAQgLAAgHAGQgIAGgCAMIA6AAIAAAAg");
	this.shape_41.setTransform(243.725,551.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAaBOQgbAAgMgMQgMgLAAgZIAAgxIgWAAIAAgGIAzg0IAFAAIAAAdIAkAAIAAAdIgkAAIAAAuQAAAKAEAEQAEAEAKAAIAVAAIAAAhg");
	this.shape_42.setTransform(230.975,547.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmA2QgRgOAAgTIAiAAQAAAJAGAEQAHAFAKAAQAKAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgLgBIgLgCQgWgEgKgJQgLgJAAgQQAAgTAOgLQAOgLAXAAQAYAAAPAMQAQALAAASIghAAQAAgGgGgEQgGgEgKAAQgIAAgFADQgEADAAAFQAAAFAEADQAFADAKACIAMABQAWAEALAIQALAJAAAPQAAAUgPAMQgPALgYAAQgYAAgQgMg");
	this.shape_43.setTransform(219.625,549.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgwAwQgTgSAAgeQAAgcATgTQATgSAdAAQAeAAATASQATATAAAcQAAAdgTATQgTASgeAAQgdAAgTgSgAgXgYQgJAKAAAOQAAAQAJAJQAJAKAOAAQAPAAAJgKQAJgJAAgQQAAgOgJgKQgJgKgPAAQgOAAgJAKg");
	this.shape_44.setTransform(205.6,549.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgvBGQgSgTAAgcQAAgcASgSQASgTAaAAQAKAAAJADQAJAEAHAGIAAg7IAiAAIAACuIgYAAIgHgNQgIAIgJAEQgKAEgLAAQgaAAgSgTgAgVgCQgJAJAAAQQAAAQAJAJQAJAKANAAQAPAAAJgKQAJgJAAgQQAAgQgJgJQgJgJgPAAQgNAAgJAJg");
	this.shape_45.setTransform(189.625,546.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag1BYIAAgfIATAAQALAAAFgEQAFgDADgJIABgBIgLAAIgxh+IAlAAIAhBdIAihdIAjAAIgyCIQgHAUgMAJQgLAIgWABg");
	this.shape_46.setTransform(170.975,551.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgvBGQgSgTAAgcQAAgcASgSQASgTAaAAQAKAAAJADQAJAEAHAGIAAg7IAiAAIAACuIgYAAIgHgNQgIAIgJAEQgKAEgLAAQgaAAgSgTgAgVgCQgJAJAAAQQAAAQAJAJQAJAKANAAQAPAAAJgKQAJgJAAgQQAAgQgJgJQgJgJgPAAQgNAAgJAJg");
	this.shape_47.setTransform(155.525,546.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgwAwQgTgSAAgeQAAgcATgTQATgSAdAAQAeAAATASQATATAAAcQAAAdgTATQgTASgeAAQgdAAgTgSgAgXgYQgJAKAAAOQAAAQAJAJQAJAKAOAAQAOAAAKgKQAJgJAAgQQAAgOgJgKQgKgKgOAAQgOAAgJAKg");
	this.shape_48.setTransform(140.5,549.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAbBYIAAhHQAAgNgIgGQgHgIgMAAQgLAAgHAHQgHAHAAANIAABHIgjAAIAAivIAjAAIAAA6QAGgGAJgDQAJgDAIAAQAYAAAPAPQAPAOAAAXIAABNg");
	this.shape_49.setTransform(125.325,546.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AguAwQgTgSAAgeQAAgcATgTQASgSAcAAQAbAAASAPQARAPAEAaIgkAAQgDgLgHgIQgJgGgLAAQgMAAgJAKQgJAKAAAOQAAAQAJAJQAIAKANAAQALAAAJgGQAHgHADgMIAkAAQgEAagRAPQgSAPgbAAQgcAAgSgSg");
	this.shape_50.setTransform(110.275,549.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgwAwQgTgSAAgeQAAgcATgTQATgSAdAAQAeAAATASQATATAAAcQAAAdgTATQgTASgeAAQgdAAgTgSgAgXgYQgJAKAAAOQAAAQAJAJQAJAKAOAAQAOAAAKgKQAJgJAAgQQAAgOgJgKQgKgKgOAAQgOAAgJAKg");
	this.shape_51.setTransform(95.25,549.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ABBBBIAAhJQABgLgHgHQgGgHgLAAQgLAAgHAHQgGAHgBALIAABJIgiAAIAAhJQAAgLgFgHQgIgHgKAAQgLAAgHAHQgGAHAAALIAABJIgjAAIAAh+IAZAAIAFAMQAHgHAJgEQAJgEALAAQAOAAAKAFQAJAFAHAJQAHgJALgFQALgFANAAQAWAAAPAOQAOAOAAAXIAABOg");
	this.shape_52.setTransform(76.2,548.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgvAwQgSgUAAgcQAAgcASgSQASgTAaAAQALAAAKAEQAJAEAIAHIAHgMIAYAAIAAB+IgYAAIgHgOQgIAIgJAEQgKAEgLAAQgaAAgSgSgAgVgYQgJAKAAAOQAAAQAJAJQAJAKANAAQAPAAAJgKQAJgJAAgQQAAgOgJgKQgJgKgPAAQgNAAgJAKg");
	this.shape_53.setTransform(56.175,549.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgmA2QgRgOAAgTIAiAAQAAAJAGAEQAHAFAKAAQAKAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgLgBIgLgCQgWgEgKgJQgLgJAAgQQAAgTAOgLQAOgLAXAAQAYAAAPAMQAQALAAASIghAAQAAgGgGgEQgGgEgKAAQgIAAgFADQgEADAAAFQAAAFAEADQAFADAKACIAMABQAWAEALAIQALAJAAAPQAAAUgPAMQgPALgYAAQgYAAgQgMg");
	this.shape_54.setTransform(42.375,549.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAZBHQgOgOAAgUQAAgVAOgOQAOgMAWAAQAVAAAOAMQAOAOAAAVQAAAUgOAOQgOANgVAAQgWAAgOgNgAAuAWQgFAFAAAKQAAAJAFAFQAGAGAJAAQAIAAAGgGQAFgGAAgIQAAgKgFgFQgGgGgIAAQgJAAgGAGgAhCBRIBjihIAiAAIhjChgAhfgBQgOgNAAgVQAAgVAOgNQAOgOAVAAQAWAAAOAOQAOANAAAVQAAAVgOANQgOAMgWAAQgVAAgOgMgAhKgyQgGAGAAAJQAAAJAGAGQAFAFAJAAQAJAAAFgGQAGgFAAgJQAAgJgFgGQgGgGgJAAQgJAAgFAGg");
	this.shape_55.setTransform(209.025,522.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAABRIAAiAIghAAIAKghIA5AAIAAChg");
	this.shape_56.setTransform(192.125,522.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgyA9QgTgXAAgmQAAglATgXQATgXAfAAQAgAAATAXQATAXAAAlQAAAmgTAXQgUAXgfAAQgfAAgTgXgAgYgkQgJAOAAAWQAAAYAJAOQAJANAPAAQAQAAAJgNQAIgOAAgYQAAgXgIgNQgJgOgQAAQgPAAgJAOg");
	this.shape_57.setTransform(180.175,522.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAABRIAAiAIghAAIAKghIA5AAIAAChg");
	this.shape_58.setTransform(167.025,522.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgvBGQgSgTAAgcQAAgcASgSQASgTAaAAQAKAAAJADQAJAEAHAGIAAg7IAiAAIAACuIgYAAIgHgNQgIAIgJAEQgKAEgLAAQgaAAgSgTgAgVgCQgJAJAAAQQAAAQAJAJQAJAKANAAQAPAAAJgKQAJgJAAgQQAAgQgJgJQgJgJgPAAQgNAAgJAJg");
	this.shape_59.setTransform(150.625,522.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgwAvQgTgRAAgeQAAgcATgSQATgTAdAAQAeAAATATQATASAAAcQAAAegTARQgTATgeAAQgdAAgTgTgAgXgZQgJAKAAAPQAAAQAJAKQAJAJAOAAQAOAAAKgJQAJgKAAgQQAAgPgJgKQgKgJgOAAQgOAAgJAJg");
	this.shape_60.setTransform(135.55,524.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgvBZIAJggIA5AAQAHAAAEgDQADgDAAgIIAAgQQgIAFgJADQgJADgJAAQgbAAgSgSQgUgSABgaQgBgcAUgSQASgSAbAAQALAAAJAEQALAEAIAIIAHgNIAYAAIAACAQgBAZgKAKQgLALgbAAgAgWgwQgJAJAAAPQAAAOAJAJQAJAIAOAAQAQAAAJgIQAJgJAAgOQAAgPgJgJQgJgJgQAAQgOAAgJAJg");
	this.shape_61.setTransform(115.45,526.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAbBBIAAhGQAAgNgIgHQgHgIgMAAQgLAAgHAHQgHAIAAANIAABGIgjAAIAAh+IAYAAIAHANQAGgHAKgFQAKgEAKAAQAYAAAPAPQAPAPAAAXIAABMg");
	this.shape_62.setTransform(100.375,524.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgRBXIAAh9IAiAAIAAB9gAgRg1IAAghIAiAAIAAAhg");
	this.shape_63.setTransform(89.25,521.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgmA1QgRgMAAgUIAiAAQAAAJAGAEQAHAFAKAAQAKAAAEgDQAFgCAAgHQAAgEgEgDQgFgDgLgBIgLgCQgWgEgKgJQgLgJAAgQQAAgTAOgLQAOgLAXAAQAYAAAPALQAQAMAAASIghAAQAAgHgGgEQgGgDgKAAQgIAAgFACQgEADAAAGQAAAFAEADQAFADAKABIAMACQAWADALAKQALAHAAARQAAASgPAMQgPAMgYAAQgYAAgQgNg");
	this.shape_64.setTransform(79.425,524.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgvAvQgSgSAAgdQAAgcASgSQASgTAaAAQALAAAKAEQAJAEAIAHIAHgMIAYAAIAAB9IgYAAIgHgMQgIAHgJAEQgKAEgLAAQgaAAgSgTgAgVgZQgJAKAAAPQAAAQAJAKQAJAJANAAQAPAAAJgJQAJgKAAgQQAAgPgJgKQgJgJgPAAQgNAAgJAJg");
	this.shape_65.setTransform(64.675,524.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgtAvQgSgRAAgeQAAgdASgRQASgTAcAAQAcAAASASQARASAAAdIAAAEIAAAFIhdAAQACAOAJAHQAIAHANAAQAKAAAHgEQAGgFADgHIAiAAQgDAUgRAMQgQANgYAAQgdAAgTgTgAAegMQgCgMgIgGQgIgGgMAAQgLgBgHAHQgIAGgCAMIA6AAIAAAAg");
	this.shape_66.setTransform(49.925,524.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgQBXIAAitIAiAAIAACtg");
	this.shape_67.setTransform(39.35,521.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhMBZQgdgZAAgsIAAiGIA9AAIAAB/QAAAWAMANQAMAMAUAAQAVAAAMgMQAMgNAAgWIAAh/IA9AAIAACGQAAAqgdAaQgdAbgwAAQgwAAgcgag");
	this.shape_68.setTransform(267.125,490.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhFBfQgdgXAAgiIA8AAQgBAOAMAJQAMAIAUAAQAPAAAJgFQAJgFAAgKQAAgJgJgFQgIgEgTgDIgVgDQgmgGgTgRQgTgRAAgdQAAghAZgUQAZgTAqAAQAqAAAbAUQAcAVAAAgIg6AAQAAgMgKgHQgMgHgRAAQgQAAgIAFQgIAGAAAJQAAAJAIAFQAIAFATADIAVADQAoAGATAQQATAPAAAcQAAAjgaAUQgaAVgqAAQgtAAgdgWg");
	this.shape_69.setTransform(242.7,490.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhQBVQghghAAg0QAAgzAgghQAgggAzAAQAyAAAfAgQAfAgAAA0IAAAHIgBAKIilAAQADAYAQAMQAOAMAXAAQASAAAMgHQANgIAEgNIA+AAQgGAkgeAWQgeAWgrAAQgzAAghgggAA1gXQgDgUgPgLQgOgMgVAAQgUAAgNALQgNAKgFAWIBoAAIAAAAg");
	this.shape_70.setTransform(218.25,490.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAvBzIAAh9QABgXgNgNQgOgNgUAAQgWgBgMANQgNANAAAYIAAB9Ig+AAIAAjhIAsAAIAMAYQAMgNAQgIQARgHAUAAQArAAAbAaQAaAaAAAqIAACHg");
	this.shape_71.setTransform(192,490.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhhBxIAAg0IB0h5IhxAAIAAg0IC6AAIAAA0Ih0B5IB6AAIAAA0g");
	this.shape_72.setTransform(166.825,490.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgeCcIAAjhIA9AAIAADhgAgehfIAAg8IA9AAIAAA8g");
	this.shape_73.setTransform(149.4,486);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ah0CQIAAkfIB6AAQAwAAAbAUQAbAVAAAkQAAAVgJAQQgJAQgSAJQAXAIALASQALARAAAYQgBAngaAVQgbAVgxAAgAg1BcIA+AAQAVAAALgJQAMgJAAgRQAAgQgMgKQgLgJgVAAIg+AAgAg1gaIA3AAQATAAAMgJQALgIAAgQQAAgPgLgIQgMgJgTAAIg3AAg");
	this.shape_74.setTransform(129.9,487.125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgeCcIAAjhIA9AAIAADhgAgehfIAAg8IA9AAIAAA8g");
	this.shape_75.setTransform(101.45,486);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAvBzIAAh9QAAgXgNgNQgMgNgWAAQgVgBgNANQgMANAAAYIAAB9Ig+AAIAAjhIAsAAIALAYQAMgNARgIQASgHAUAAQAqAAAaAaQAbAaAAAqIAACHg");
	this.shape_76.setTransform(82.05,490.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AiHCQIAAkfIB6AAQBBAAAqApQAqApAAA9QAAA+gqApQgqAphBAAgAhIBWIA7AAQAmAAAXgYQAYgXAAgnQAAgmgYgXQgXgYgmAAIg7AAg");
	this.shape_77.setTransform(52.95,487.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},387).wait(2));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_144 = new cjs.Graphics().p("EgVDBYgMBdiixEIALAGMhdjCxDg");
	var mask_graphics_145 = new cjs.Graphics().p("EgfCBU+MBdjixDINkHIMhdiCxDg");
	var mask_graphics_146 = new cjs.Graphics().p("EgorBRlMBdjixEIaiN7MhdjCxEg");
	var mask_graphics_147 = new cjs.Graphics().p("Egx+BOTMBdjixEMAnBAUfMhdiCxEg");
	var mask_graphics_148 = new cjs.Graphics().p("Eg67BLIMBdjixDMAzDAa0MhdiCxDg");
	var mask_graphics_149 = new cjs.Graphics().p("EhDjBIFMBdjixDMA+pAg6MhdiCxDg");
	var mask_graphics_150 = new cjs.Graphics().p("EhL1BFKMBdjixDMBJyAmwMhdjCxDg");
	var mask_graphics_151 = new cjs.Graphics().p("EhTxBCWMBdjixDMBUcAsYMhdjCxDg");
	var mask_graphics_152 = new cjs.Graphics().p("EhbXA/qMBdiixEMBerAxxMhdkCxEg");
	var mask_graphics_153 = new cjs.Graphics().p("EhioA9FMBdjixDMBobA26MhdkCxDg");
	var mask_graphics_154 = new cjs.Graphics().p("EhnoA6oMBdjixDMBxuA70MhdjCxDg");
	var mask_graphics_155 = new cjs.Graphics().p("EhsEA4TMBdkixEMB6lBAfMhdkCxEg");
	var mask_graphics_156 = new cjs.Graphics().p("EhwQA2FMBdjixDMCC+BE6MhdjCxDg");
	var mask_graphics_157 = new cjs.Graphics().p("Eh0PAz/MBdkixEMCK7BJHMhdkCxEg");
	var mask_graphics_158 = new cjs.Graphics().p("Eh3+AyAMBdjixDMCSaBNEMhdjCxDg");
	var mask_graphics_159 = new cjs.Graphics().p("Eh7fAwJMBdjixDMCZcBQyMhdjCxDg");
	var mask_graphics_160 = new cjs.Graphics().p("Eh+yAuaMBdkixDMCgBBUQMhdkCxDg");
	var mask_graphics_161 = new cjs.Graphics().p("EiB2AsyMBdkixDMCmJBXgMhdkCxDg");
	var mask_graphics_162 = new cjs.Graphics().p("EiErArSMBdjixDMCr0BagMhdjCxDg");
	var mask_graphics_163 = new cjs.Graphics().p("EiHSAp6MBdjixDMCxCBdQMhdjCxDg");
	var mask_graphics_164 = new cjs.Graphics().p("EiJrAoqMBdkixEMC1zBfxMhdkCxEg");
	var mask_graphics_165 = new cjs.Graphics().p("EiL1AnhMBdkixEMC6HBiDMhdkCxEg");
	var mask_graphics_166 = new cjs.Graphics().p("EiNwAmfMBdkixDMC99BkGMhdkCxDg");
	var mask_graphics_167 = new cjs.Graphics().p("EiPdAlmMBdkixEMDBXBl5MhdkCxEg");
	var mask_graphics_168 = new cjs.Graphics().p("EiQ7Ak0MBdjixEMDEUBndMhdjCxEg");
	var mask_graphics_169 = new cjs.Graphics().p("EiSLAkJMBdjixDMDG0BoyMhdjCxDg");
	var mask_graphics_170 = new cjs.Graphics().p("EiTMAjnMBdjixEMDI2Bp3MhdjCxEg");
	var mask_graphics_171 = new cjs.Graphics().p("EiT/AjMMBdjixEMDKcBqtMhdjCxEg");
	var mask_graphics_172 = new cjs.Graphics().p("EiUkAi5MBdkixEMDLlBrTMhdkCxEg");
	var mask_graphics_173 = new cjs.Graphics().p("EiU5AitMBdjixDMDMQBrqMhdjCxDg");
	var mask_graphics_174 = new cjs.Graphics().p("EiVBAipMBdkixDMDMfBryMhdkCxDg");
	var mask_graphics_240 = new cjs.Graphics().p("EiVBAipMBdkixDMDMfBryMhdkCxDg");
	var mask_graphics_241 = new cjs.Graphics().p("EiU4AiuMBdjixEMDMOBrpMhdjCxEg");
	var mask_graphics_242 = new cjs.Graphics().p("EiUfAi7MBdjixEMDLcBrPMhdjCxEg");
	var mask_graphics_243 = new cjs.Graphics().p("EiT2AjRMBdkixDMDKJBqiMhdkCxDg");
	var mask_graphics_244 = new cjs.Graphics().p("EiS7AjwMBdjixEMDIUBplMhdjCxEg");
	var mask_graphics_245 = new cjs.Graphics().p("EiRwAkYMBdjixEMDF+BoVMhdjCxEg");
	var mask_graphics_246 = new cjs.Graphics().p("EiQVAlIMBdkixDMDDHBm0MhdkCxDg");
	var mask_graphics_247 = new cjs.Graphics().p("EiOoAmBMBdjixDMC/uBlCMhdjCxDg");
	var mask_graphics_248 = new cjs.Graphics().p("EiMrAnEMBdjixEMC70Bi9MhdjCxEg");
	var mask_graphics_249 = new cjs.Graphics().p("EiKeAoPMBdkixEMC3ZBgnMhdkCxEg");
	var mask_graphics_250 = new cjs.Graphics().p("EiH/ApiMBdjixDMCycBeAMhdjCxDg");
	var mask_graphics_251 = new cjs.Graphics().p("EiFQAq/MBdjixEMCs+BbHMhdjCxEg");
	var mask_graphics_252 = new cjs.Graphics().p("EiCRAskMBdkixDMCm/BX8MhdkCxDg");
	var mask_graphics_253 = new cjs.Graphics().p("Eh/AAuSMBdjixDMCgeBUgMhdjCxDg");
	var mask_graphics_254 = new cjs.Graphics().p("Eh7fAwJMBdjixDMCZcBQyMhdjCxDg");
	var mask_graphics_255 = new cjs.Graphics().p("Eh3uAyJMBdkixDMCR5BMyMhdkCxDg");
	var mask_graphics_256 = new cjs.Graphics().p("EhzrA0SMBdjixEMCJ0BIhMhdjCxEg");
	var mask_graphics_257 = new cjs.Graphics().p("EhvYA2jMBdkixEMCBNBD/MhdkCxEg");
	var mask_graphics_258 = new cjs.Graphics().p("Ehq0A49MBdjixEMB4GA/LMhdjCxEg");
	var mask_graphics_259 = new cjs.Graphics().p("EhmAA7gMBdkixEMBudA6FMhdkCxEg");
	var mask_graphics_260 = new cjs.Graphics().p("EhgKA+LMBdjixEMBkSA0vMhdjCxEg");
	var mask_graphics_261 = new cjs.Graphics().p("EhYJBA/MBdiixDMBZnAvGMhdjCxDg");
	var mask_graphics_262 = new cjs.Graphics().p("EhPvBD8MBdiixDMBOaApMMhdjCxDg");
	var mask_graphics_263 = new cjs.Graphics().p("EhG8BHCMBdiixEMBCrAjBMhdiCxEg");
	var mask_graphics_264 = new cjs.Graphics().p("Eg9wBKQMBdiixEMA2bAclMhdiCxEg");
	var mask_graphics_265 = new cjs.Graphics().p("Eg0LBNnMBdjixEMAppAV3MhdjCxEg");
	var mask_graphics_266 = new cjs.Graphics().p("EgqMBRGMBdiixDIcWO4MhdjCxDg");
	var mask_graphics_267 = new cjs.Graphics().p("Egf1BUvMBdjixEIOhHnMhdjCxEg");
	var mask_graphics_268 = new cjs.Graphics().p("EgVDBYgMBdiixEIALAGMhdjCxDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_graphics_144,x:464.9672,y:300.0111}).wait(1).to({graphics:mask_graphics_145,x:486.932,y:300.5322}).wait(1).to({graphics:mask_graphics_146,x:508.1498,y:301.0357}).wait(1).to({graphics:mask_graphics_147,x:528.6203,y:301.5218}).wait(1).to({graphics:mask_graphics_148,x:548.3439,y:301.9904}).wait(1).to({graphics:mask_graphics_149,x:567.3208,y:302.4414}).wait(1).to({graphics:mask_graphics_150,x:585.5513,y:302.8749}).wait(1).to({graphics:mask_graphics_151,x:603.0357,y:303.2908}).wait(1).to({graphics:mask_graphics_152,x:619.7742,y:303.6891}).wait(1).to({graphics:mask_graphics_153,x:635.767,y:304.0699}).wait(1).to({graphics:mask_graphics_154,x:638.6927,y:304.433}).wait(1).to({graphics:mask_graphics_155,x:639.3684,y:304.7785}).wait(1).to({graphics:mask_graphics_156,x:640.0094,y:305.1064}).wait(1).to({graphics:mask_graphics_157,x:640.6157,y:305.4166}).wait(1).to({graphics:mask_graphics_158,x:641.1873,y:305.7091}).wait(1).to({graphics:mask_graphics_159,x:641.7243,y:305.984}).wait(1).to({graphics:mask_graphics_160,x:642.2266,y:306.2412}).wait(1).to({graphics:mask_graphics_161,x:642.6942,y:306.4807}).wait(1).to({graphics:mask_graphics_162,x:643.1271,y:306.7025}).wait(1).to({graphics:mask_graphics_163,x:643.5254,y:306.9066}).wait(1).to({graphics:mask_graphics_164,x:643.8891,y:307.0929}).wait(1).to({graphics:mask_graphics_165,x:644.2181,y:307.2616}).wait(1).to({graphics:mask_graphics_166,x:644.5125,y:307.4125}).wait(1).to({graphics:mask_graphics_167,x:644.7722,y:307.5456}).wait(1).to({graphics:mask_graphics_168,x:644.9973,y:307.6611}).wait(1).to({graphics:mask_graphics_169,x:645.1878,y:307.7587}).wait(1).to({graphics:mask_graphics_170,x:645.3436,y:307.8386}).wait(1).to({graphics:mask_graphics_171,x:645.4648,y:307.9008}).wait(1).to({graphics:mask_graphics_172,x:645.5514,y:307.9452}).wait(1).to({graphics:mask_graphics_173,x:645.6033,y:307.9718}).wait(1).to({graphics:mask_graphics_174,x:630.0052,y:300.0326}).wait(1).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_graphics_240,x:630.0052,y:300.0326}).wait(1).to({graphics:mask_graphics_241,x:630.005,y:300.0329}).wait(1).to({graphics:mask_graphics_242,x:630.0046,y:300.0336}).wait(1).to({graphics:mask_graphics_243,x:630.0039,y:300.0349}).wait(1).to({graphics:mask_graphics_244,x:630.0029,y:300.0367}).wait(1).to({graphics:mask_graphics_245,x:630.0016,y:300.039}).wait(1).to({graphics:mask_graphics_246,x:630,y:300.0419}).wait(1).to({graphics:mask_graphics_247,x:629.9981,y:300.0452}).wait(1).to({graphics:mask_graphics_248,x:629.996,y:300.049}).wait(1).to({graphics:mask_graphics_249,x:629.9935,y:300.0534}).wait(1).to({graphics:mask_graphics_250,x:629.9908,y:300.0582}).wait(1).to({graphics:mask_graphics_251,x:629.9878,y:300.0636}).wait(1).to({graphics:mask_graphics_252,x:629.9846,y:300.0694}).wait(1).to({graphics:mask_graphics_253,x:629.981,y:300.0757}).wait(1).to({graphics:mask_graphics_254,x:629.9772,y:300.0826}).wait(1).to({graphics:mask_graphics_255,x:629.9731,y:300.0898}).wait(1).to({graphics:mask_graphics_256,x:629.9688,y:300.0976}).wait(1).to({graphics:mask_graphics_257,x:629.9642,y:300.1058}).wait(1).to({graphics:mask_graphics_258,x:629.9593,y:300.1145}).wait(1).to({graphics:mask_graphics_259,x:629.9541,y:300.1237}).wait(1).to({graphics:mask_graphics_260,x:625.145,y:300.1333}).wait(1).to({graphics:mask_graphics_261,x:608.0439,y:300.1433}).wait(1).to({graphics:mask_graphics_262,x:590.1065,y:300.1538}).wait(1).to({graphics:mask_graphics_263,x:571.3325,y:300.1647}).wait(1).to({graphics:mask_graphics_264,x:551.7216,y:300.176}).wait(1).to({graphics:mask_graphics_265,x:531.2734,y:300.1878}).wait(1).to({graphics:mask_graphics_266,x:509.9877,y:300.1999}).wait(1).to({graphics:mask_graphics_267,x:487.864,y:300.2124}).wait(1).to({graphics:mask_graphics_268,x:464.9672,y:300.0111}).wait(1).to({graphics:null,x:0,y:0}).wait(120));

	// Layer_1
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(375,100);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).to({_off:true},125).wait(120));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_65 = new cjs.Graphics().p("EgVDBYgMBdiixEIALAGMhdjCxDg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgfCBU+MBdjixDINkHIMhdiCxDg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgorBRlMBdjixEIaiN7MhdjCxEg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Egx+BOTMBdjixEMAnBAUfMhdiCxEg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Eg67BLIMBdjixDMAzDAa0MhdiCxDg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EhDjBIFMBdjixDMA+pAg6MhdiCxDg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EhL1BFKMBdjixDMBJyAmwMhdjCxDg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EhTxBCWMBdjixDMBUcAsYMhdjCxDg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EhbXA/qMBdiixEMBerAxxMhdkCxEg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EhioA9FMBdjixDMBobA26MhdkCxDg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EhnoA6oMBdjixDMBxuA70MhdjCxDg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EhsEA4TMBdkixEMB6lBAfMhdkCxEg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EhwQA2FMBdjixDMCC+BE6MhdjCxDg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eh0PAz/MBdkixEMCK7BJHMhdkCxEg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eh3+AyAMBdjixDMCSaBNEMhdjCxDg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eh7fAwJMBdjixDMCZcBQyMhdjCxDg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eh+yAuaMBdkixDMCgBBUQMhdkCxDg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EiB2AsyMBdkixDMCmJBXgMhdkCxDg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EiErArSMBdjixDMCr0BagMhdjCxDg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EiHSAp6MBdjixDMCxCBdQMhdjCxDg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EiJrAoqMBdkixEMC1zBfxMhdkCxEg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EiL1AnhMBdkixEMC6HBiDMhdkCxEg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EiNwAmfMBdkixDMC99BkGMhdkCxDg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EiPdAlmMBdkixEMDBXBl5MhdkCxEg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EiQ7Ak0MBdjixEMDEUBndMhdjCxEg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EiSLAkJMBdjixDMDG0BoyMhdjCxDg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EiTMAjnMBdjixEMDI2Bp3MhdjCxEg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EiT/AjMMBdjixEMDKcBqtMhdjCxEg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EiUkAi5MBdkixEMDLlBrTMhdkCxEg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EiU5AitMBdjixDMDMQBrqMhdjCxDg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EiVBAipMBdkixDMDMfBryMhdkCxDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_1_graphics_65,x:464.9672,y:300.0111}).wait(1).to({graphics:mask_1_graphics_66,x:486.932,y:300.5322}).wait(1).to({graphics:mask_1_graphics_67,x:508.1498,y:301.0357}).wait(1).to({graphics:mask_1_graphics_68,x:528.6203,y:301.5218}).wait(1).to({graphics:mask_1_graphics_69,x:548.3439,y:301.9904}).wait(1).to({graphics:mask_1_graphics_70,x:567.3208,y:302.4414}).wait(1).to({graphics:mask_1_graphics_71,x:585.5513,y:302.8749}).wait(1).to({graphics:mask_1_graphics_72,x:603.0357,y:303.2908}).wait(1).to({graphics:mask_1_graphics_73,x:619.7742,y:303.6891}).wait(1).to({graphics:mask_1_graphics_74,x:635.767,y:304.0699}).wait(1).to({graphics:mask_1_graphics_75,x:638.6927,y:304.433}).wait(1).to({graphics:mask_1_graphics_76,x:639.3684,y:304.7785}).wait(1).to({graphics:mask_1_graphics_77,x:640.0094,y:305.1064}).wait(1).to({graphics:mask_1_graphics_78,x:640.6157,y:305.4166}).wait(1).to({graphics:mask_1_graphics_79,x:641.1873,y:305.7091}).wait(1).to({graphics:mask_1_graphics_80,x:641.7243,y:305.984}).wait(1).to({graphics:mask_1_graphics_81,x:642.2266,y:306.2412}).wait(1).to({graphics:mask_1_graphics_82,x:642.6942,y:306.4807}).wait(1).to({graphics:mask_1_graphics_83,x:643.1271,y:306.7025}).wait(1).to({graphics:mask_1_graphics_84,x:643.5254,y:306.9066}).wait(1).to({graphics:mask_1_graphics_85,x:643.8891,y:307.0929}).wait(1).to({graphics:mask_1_graphics_86,x:644.2181,y:307.2616}).wait(1).to({graphics:mask_1_graphics_87,x:644.5125,y:307.4125}).wait(1).to({graphics:mask_1_graphics_88,x:644.7722,y:307.5456}).wait(1).to({graphics:mask_1_graphics_89,x:644.9973,y:307.6611}).wait(1).to({graphics:mask_1_graphics_90,x:645.1878,y:307.7587}).wait(1).to({graphics:mask_1_graphics_91,x:645.3436,y:307.8386}).wait(1).to({graphics:mask_1_graphics_92,x:645.4648,y:307.9008}).wait(1).to({graphics:mask_1_graphics_93,x:645.5514,y:307.9452}).wait(1).to({graphics:mask_1_graphics_94,x:645.6033,y:307.9718}).wait(1).to({graphics:mask_1_graphics_95,x:630.0052,y:300.0326}).wait(1).to({graphics:null,x:0,y:0}).wait(293));

	// Layer_4
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(375,100);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({_off:true},94).wait(230));

	// Layer_1
	this.instance_5 = new lib.ClipGroup();
	this.instance_5.setTransform(222.95,122.75,1.329,1.329,0,0,0,139.1,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(389));

	// Layer_2
	this.instance_6 = new lib.bck1();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(389));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(629,292.1,635.9000000000001,707.9);
// library properties:
lib.properties = {
	id: '0428EB47FCCA48398AB7139863648D7B',
	width: 1260,
	height: 600,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/bck1.jpg", id:"bck1"},
		{src:"images/bck2.jpg", id:"bck2"},
		{src:"images/bck3.jpg", id:"bck3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0428EB47FCCA48398AB7139863648D7B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;