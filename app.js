var uiController = (function() {
    var x =100;

    function add(y){
        return x + y ;
    }

    return{
       publicAdd: function(a){
        a = add(a);
        console.log('bolovsruulsan utga ; ' + a);
       } 
    }
})();

var financeController = (function() {

})();

var appController = (function(uiController, financeController) {
    uiController.publicAdd(50);
})(uiController, financeController);
