

function remove(el) {
    if(el.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var element = el;
            element.remove();
        }
    }
    
}





