import chalk, {Chalk} from 'chalk';
export interface IOptions {
    title?: string;
    color?: Chalk;
    length?: number;
    middle?: boolean;
}
export interface IContent {
    [key: string]: string | number | boolean;
}

const Edges = {
    bottomLeft: '┗',
    horizontal: '━',
    topLeft: '┏',
    vertical: '┃'
};

const max = (a: number, b: number) => (a > b ? a : b);

export default function log(content: IContent, option: IOptions): void {
    option.length = option.length || 10;
    option.color = option.color || chalk.cyan;
    option.title = option.title || '';
    option.middle = true;

    let keyLength: number = 0;
    let valueLength: number = 0;

    for (const key in content) {
        if (content.hasOwnProperty(key)) {
            if (key.length > keyLength) {
                keyLength = key.length;
            }
            if (content[key].toString().length > valueLength) {
                valueLength = content[key].toString().length;
            }
        }
    }
    const maxLength: number = max(option.length, keyLength + valueLength + 6);

    const top = `${Edges.topLeft} ${option.title} `.padEnd(
        maxLength,
        Edges.horizontal
    );
    console.log(option.color(top));
    for (const key in content) {
        if (content.hasOwnProperty(key)) {
            const keyString = option.middle
                ? key.padStart(keyLength, ' ')
                : key.padEnd(keyLength, ' ');
            const contentString = content[key].toString();
            const each = `${Edges.vertical} ${keyString} : ${contentString}`;
            console.log(option.color(each));
        }
    }
    const bottom = Edges.bottomLeft.padEnd(maxLength, Edges.horizontal);
    console.log(option.color(bottom));
}
