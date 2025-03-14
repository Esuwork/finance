// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {

})();

// Санхүүтэй ажиллах контроллер
var financeController = (function() {

})();

// Програмын холбогч контроллер
var appController = (function(uiController, financeController) {
    var ctrlAddItem = function(){
       console.log('Delgetsees ugugdluu avah heseg.'); 
    };
    document.querySelector('.add__btn').addEventListener('click',function(){
        // 1. Өгөгдлийг дэлгэцээс олж авна.
        ctrlAddItem();
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална.

        // 3. Олж авсан өгөгдлүүдийг вэб дээрээ тохирох хэсэгт гаргана.

        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.

    });

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(uiController, financeController);
