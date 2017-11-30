(function () { 
    var dots = $('#trig-more-cats'); 
    var users = $('#edit-assigned > li').toArray().map((el) => `<option value="${el.innerText}"id="filter-by-name-${el.innerText}">${el.innerText}</option>`); 
    users.splice(0, 0, '<option value="None" id="filter-by-name-none">None</option>');
    var select = $(`<select>${users.join('')}</select>`); 
    var countSpan = $('<span style="display: inline-block; padding: 4px 8px;"></span>')
    dots.before(select); 
    select.after(countSpan)
    var taskSelector = '.task[id^=task]'; 
    var onUserSelect = function (evt) { 
        console.log('filtering by: ', evt.target.value); 
        var valueToMatch = evt.target.value === 'None' ? '' : evt.target.value
        $(taskSelector).show(); 
        var total = $(taskSelector).length
        var filteredTasks = $($(`[id$=assigned]:not(:contains(${valueToMatch}))`).closest(taskSelector)); 
        var count = total - filteredTasks.length
        countSpan.html(count)
        filteredTasks.hide()
    }; 
    select.change(onUserSelect); 
    countSpan.html($(taskSelector).length)
})()