var students_names_array= [];
function submit()
{
    var display_students_names= [];
    for (i=1;i<=4;i++)
    {
        var students_names= document.getElementById("name_of_the_student_" + i).value;
        students_names_array.push(students_names);
    }

    for (i=0;i<students_names_array.length;i++)
    {
        display_students_names.push("<h4>Name = " + students_names_array[i] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_students_names;
    console.log(display_students_names);

    // The join() method returns an array as a string. 
    // The join() method does not change the original array.
    // Any separator can be specified. The default is comma (,).

    var remove_commas = display_students_names.join(" --- ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    students_names_array.sort();
    var display_students_sorted_names= [];
        for (i=0;i<students_names_array.length;i++)
    {
        display_students_sorted_names.push("<h4>Name = " + students_names_array[i] + "</h4>");
    }
    var remove_commas = display_students_names.join(" --- ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    // document.getElementById("display_name_without_commas").innerHTML=display_students_sorted_names;
    console.log(display_students_sorted_names);

}
