$(window).load(function() {
  $(".demo").click(function(){
    changeColor($(".knob"), '#fff333');
  });
  $(".knob").knob({
    change : function (value) {
      //value = parseFloat(value);
    },
    release : function (value) {
      //value = value;
    },
    cancel : function () {
      //console.log("cancel : ", this);
    },
    draw : function () {
      if(this.unit != undefined)
      {
        this.i.val(parseFloat(this.i.val())+this.unit);                 
      }
      // "tron" case
      if(this.$.data('skin') == 'tron') {

        var a = this.angle(this.cv)  // Angle
          , sa = this.startAngle          // Previous start angle
          , sat = this.startAngle         // Start angle
          , ea                            // Previous end angle
          , eat = sat + a                 // End angle
          , r = 1;

        this.g.lineWidth = this.lineWidth;
        

        this.o.cursor
          && (sat = eat - 0.3)
          && (eat = eat + 0.3);

        if (this.o.displayPrevious) {
          ea = this.startAngle + this.angle(this.v);
          this.o.cursor
            && (sa = ea - 0.3)
            && (ea = ea + 0.3);
          this.g.beginPath();
          this.g.strokeStyle = this.pColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
          this.g.stroke();
        }

        this.g.beginPath();
        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
        this.g.stroke();

        this.g.lineWidth = 2;
        this.g.beginPath();
        this.g.strokeStyle = this.o.fgColor;
        this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
        this.g.stroke();

        
        return false;
      }
    }
  });
  function grow($object, value){
    if(parseFloat($object.val()) < value)
    {
      setTimeout(function(){
        $object.val(parseFloat($object.val())+1).trigger("change");grow($object, value);},30);
    }
    
  }
  
  function changeColor($object, value){
    $object.trigger('configure', {"fgColor":value, "inputColor": value});
  }
  grow($('.knob'), 75)
  });
