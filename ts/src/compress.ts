const ORIGIN = 'aaabbcddd';
// const ORIGIN = 'abcdefg';

function compress(origin: string): string {
    let result = '';
    if (!origin) {
        return '';
    }
    let accumulator = '';
    let counter = 0;
    for (let i = 0; i < origin.length; i++) {
        if (!accumulator || accumulator === origin[i]) {
            counter++;
            accumulator = origin[i];
        } else {
            result += `${counter === 1 ? '' : counter}${accumulator}`;
            counter = 1;
            accumulator = origin[i];
        }
    }
    result += `${counter === 1 ? '' : counter}${accumulator}`;
    return result;
}

function decompress(arch: string): string {
    let result = '';
    let counter = 0;
    const setPart = (char: string) => {
        for (let i = 0; i < counter; i++) {
            result += `${char}`;
        }
    }
    for (let i = 0; i < arch.length; i++) {
        if (!isNaN(+arch[i])) {
            counter = +arch[i];
        } else {
            if (i === 0 || isNaN(+arch[i -1])) {
                counter = 1;
            }
            setPart(arch[i]);
        }
    }
    return result;
}

const compressed = compress(ORIGIN);
console.log(compressed, `Compression ratio: ${compressed.length / ORIGIN.length * 100}%`);
const decompressed = decompress(compressed);
console.log(decompressed);
console.log(`Check: ${decompressed === ORIGIN ? 'Pass' : 'Fail'}`);
