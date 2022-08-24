const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add to current tab content item
    this.classList.add('tab-border');
    // console.log(this.id);
    //Grab content item from document dynamically from their ID
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

//Remove border on every tab
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Remove show on all tab content to hide them
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));