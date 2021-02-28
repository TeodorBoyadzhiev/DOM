function addItem() {
    const myText = document.getElementById('newItemText');
    const myValue = document.getElementById('newItemValue');

    document.getElementsByTagName('article')[0].addEventListener('click', function(e) {
        const target = e.target;
        const button = document.querySelector('input[type="button"]') === target;

        if (button) {
            const opt = document.createElement('option');
            const me = document.getElementById('menu');
            opt.textContent = myText.value;
            opt.value = myValue.value;
            me.appendChild(opt);
            document.getElementById('newItemText').value = '';
            document.getElementById('newItemValue').value = '';
            
        }
    });
}


