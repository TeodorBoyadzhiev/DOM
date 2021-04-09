function solve() {
    const inputs = document.querySelectorAll('form input');
    const title = inputs[0];
    const year = inputs[1];
    const price = inputs[2];

    let total = 0;

    document.querySelector('form button').addEventListener('click', (event) => addBook(event, title, year, price));



    function addBook(event, title, year, price) {
        event.preventDefault();
        title = title.value;
        year = year.value;
        price = price.value;

        if (title !== '' && year > 0 && price > 0) {
            const div = e('div', '', 'book');
            const p = e('p', `${title} [${year}]`);
            const buyBtn = e('button', `Buy it only for ${Number(price).toFixed(2)} BGN`);
            const moveBtn = e('button', 'Move to old section');

            div.appendChild(p);
            div.appendChild(buyBtn);
            div.appendChild(moveBtn);

            const results = document.querySelectorAll('.selected div')[1];
            const rez = document.querySelectorAll('.selected div')[0];

            if (year >= 2000) {
                results.appendChild(div);
            } else {
                const div = e('div', '', 'book');
                const p = e('p', `${title} [${year}]`);
                if (year) {
                    price = (price * 0.85).toFixed(2);
                }
                const buyBtn = e('button', `Buy it only for ${Number(price).toFixed(2)} BGN`);
                buyBtn.addEventListener('click', (event) => buy(event, div, price));

                div.appendChild(p);
                div.appendChild(buyBtn);

                rez.appendChild(div);
            }

            buyBtn.addEventListener('click', (event) => buy(event, div, price));
            moveBtn.addEventListener('click', (event) => move(event, div, title, year, price));

            function move(event, element, title, year, price) {
                event.preventDefault();
                element.remove();
                price = Number(price).toFixed(2);
                const div = e('div', '', 'book');
                const p = e('p', `${title} [${year}]`);
                if (year) {
                    price = (price * 0.85).toFixed(2);
                }
                const buyBtn = e('button', `Buy it only for ${price} BGN`);

                div.appendChild(p);
                div.appendChild(buyBtn);
                const results = document.querySelectorAll('.selected div')[0];

                results.appendChild(div);
                buyBtn.addEventListener('click', (event) => buy(event, div, price));

            }
        }

        function e(type, content, className) {
            const result = document.createElement(type);

            result.textContent = content;
            if (className) {
                result.className = className;
            }
            return result;
        }
    }
    function buy(event, div, price) {
        event.preventDefault();
        div.remove();

        const profit = document.getElementsByTagName('h1')[1];

        total = Number(total);
        total = (total + (Number(price))).toFixed(2);
        profit.innerHTML = `Total Store Profit: ${total} BGN`;
    }
}