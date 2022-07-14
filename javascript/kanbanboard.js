var app = {
    newjob: function(e, type ,input){
        var jobName = $(input).val();

        var event = window.event || e;

        if(event.keyCode === 13 && jobName.trim() !== ''){
            
            this.addJobToList(type, jobName);

            $(input).val('');
        }
    },

    addJobToList: function(type ,jobName){
         var item ='<div class="item-content hoder">' +
         '<a href="#!" class="list-group-item list-group-item-action ">'+ jobName +'</a>'+
        '</div>';

         $('#',type).append(item);
     },
};

$(function() {
  $(".sort-list" ).sortable({
    connectWith: ".sort-list",
    placeholder: "hoder",
  });
});
