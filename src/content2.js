function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }


(function () { 
    const name = $('.normal[id$=name]').text()
    const url = window.location.href
    const catList = $('#catlist')
    const onDefectPage = !!$('div.cSelected > a:contains(defects)').length
    const onProjectsPage = !!('div.cSelected > a:contains(projects)').length
    if (onDefectPage || onProjectsPage) {
        const button = $(`<button>Get ${onDefectPage ? 'Defect' : 'Task'} Commit Message</button>`)
        const prefix = onDefectPage ? 'D' : 'F'
        catList.append(button)
        button.click(() => {
            const message = `${prefix}: ${name} ${url}`.replace('\"', "\'")
            const command = `git commit -m "${message}"`
            copyToClipboard(command)
            console.log(command)  
        })
    }
})()