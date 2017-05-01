$(function() {

  var list = [];
  var sortedList = [];

  $("form#groceries").submit(function(event) {
    debugger;
    var item = $("input#item").val();

    $("ul#firstList").prepend("<li>" + item + "</li>");

    list.push(item);

    sortedList = list.map(function(item) {
      return item.toUpperCase();
    });

    sortedList = sortedList.sort();

    // $("#abc").submit(function(event) {
    //   debugger;
    //   $("sortedList").forEach(function(item2) {
    //     $("ul#secondList").prepend("<li>" + item2 + "</li>");
    //     $("#firstList").hide();
    //     $("#secondList").show();
    //   })
    // });
    console.log(sortedList);
    event.preventDefault();



  });


});
