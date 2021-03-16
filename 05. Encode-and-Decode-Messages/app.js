function encodeAndDecodeMessages() {
    const writeMess = document.querySelectorAll('textarea')[0];
    const resMess = document.querySelectorAll('textarea')[1];

    document.querySelectorAll('button')[0].addEventListener('click', () => {

        let sentance = writeMess.value.trim();
        let encodeSen = '';
        for (let i = 0; i < sentance.length; i++) {
            let code = sentance.charCodeAt(i);
            encodeSen += String.fromCharCode(code + 1);
            code = 0;
        }
        resMess.value = encodeSen;
        writeMess.value = '';
    });


    document.querySelectorAll('button')[1].addEventListener('click', () => {

        let sentance = resMess.value;
        let decodeMess = '';
        for (let i = 0; i < sentance.length; i++) {
            let code = sentance.charCodeAt(i);
            decodeMess += String.fromCharCode(code - 1);
            code = 0;
        }
        resMess.value = decodeMess;
    });
}



