if(window.location.pathname == "/budgetReports"){
    $ondelete = $(".table tbody td a .delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/budgetReports/api/budjetReportDelete/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}