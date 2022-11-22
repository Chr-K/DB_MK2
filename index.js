var inputs = [
    'Email',
    'Password',
]
var id_format = 'login_input_'
var id_end_format = ''

document.addEventListener('mouseup',input_listeners,true)
document.addEventListener('keyup',input_listeners,true)
document.getElementById('signup_button').addEventListener('click',signup_table)


function input_listeners()
{

    for (var i = 0; i < inputs.length;i++)
{
    var tidyinput = inputs[i].replace('_',' ')
    if (document.activeElement.id === id_format + inputs[i])
    {
        if(document.activeElement.value == tidyinput)
        {
            document.activeElement.value = '';
        }
    }
    if (document.activeElement.id !== id_format + inputs[i])
    {
        if (document.getElementById(id_format + inputs[i]).value === '')
        {
            document.getElementById(id_format + inputs[i]).value = tidyinput
        }
    }
}
}
function signup_table()
{
    var signup_inputs = [
        'Email',
        'Phone_Number',
        'First_Name',
        'Last_Name',
        'Password',
        'Password_confirm',
    ]

    if (document.getElementById('signup_table') === null)
    {
        var signup_table = document.createElement('table')
        signup_table.id = 'signup_table'
        signup_table.className = 'signup_table'
        var signup_table_container = document.createElement('div')
        signup_table_container.id = 'signup_table_container'
        var signup_sign = document.createElement('div')
        signup_sign.innerHTML = 'Sign Up'
        signup_sign.className = 'signup_sign'
        signup_table_container.append(signup_sign,signup_table)
        document.getElementById('container_main').append(signup_table_container)
        fill_table(signup_table.id,signup_inputs,2)
        document.removeEventListener('mouseup',input_listeners,true)
        document.removeEventListener('keyup',input_listeners,true) 
        inputs = signup_inputs
        id_format = 'signup_table_input_'
        document.addEventListener('mouseup',input_listeners,true)
        document.addEventListener('keyup',input_listeners,true)
        document.getElementById('login_table_container').remove()
    }
}
function fill_table(table_id,input_array,cells_per_row){
    var table = document.getElementById(table_id);
    var row_iterator = 0
    for (var i = 0;i < input_array.length;i++)
    {
        if((i)%cells_per_row === 0)
        {
            var new_row = table.insertRow(row_iterator)
            new_row.id = table_id + '_row_' + row_iterator
            var new_cell = new_row.insertCell(i%cells_per_row)
            var cell_insertion = document.createElement('input')
            cell_insertion.id = table_id + '_input_' + input_array[i]
            cell_insertion.value = input_array[i].replace('_', ' ')
            new_cell.append(cell_insertion);
            row_iterator++
        }
        else{
            var edit_row = document.getElementById(table_id + '_row_' + (row_iterator-1))
            var new_cell = edit_row.insertCell(i%cells_per_row)
            var cell_insertion = document.createElement('input')
            cell_insertion.id = table_id + '_input_' + input_array[i]
            cell_insertion.value = input_array[i].replace('_', ' ')
            new_cell.append(cell_insertion)
        }
    }
        var signup_submit_button = document.createElement('button')
            signup_submit_button.innerHTML = 'Submit'
            signup_submit_button.id = 'signup_submit_button'
            signup_submit_button.className = 'main_btn_class'
        var signup_form_exit_button = document.createElement('button')
            signup_form_exit_button.innerHTML = 'Exit'
            signup_form_exit_button.id = 'signup_form_exit_button'
            signup_form_exit_button.className = 'main_btn_class'


            document.getElementById('signup_table_container').append(signup_form_exit_button, signup_submit_button)

}