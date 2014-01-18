$(function() {
  $(".knob").knob({
    change : function (value) {
    },
    release : function (value) {
    },
    cancel : function () {
    },
    draw : function () {
      if(this.unit != undefined)
      {
        this.i.val(parseFloat(this.i.val())+this.unit);                
      }
    }
  });
  function grow($object, value){
    if(parseFloat($object.val()) < value)
    {
      setTimeout(function(){
        $object.val(parseFloat($object.val())+1).trigger("change");grow($object, value);
      },30);
    }
    
  }
  grow($('.knob'), 75)
});
