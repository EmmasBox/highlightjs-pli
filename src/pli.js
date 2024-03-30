/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'PLI',
        aliases: ['PL/I', 'PL/1'],
        case_insensitive: false,
        keywords: {
            keyword: [

            ],
            built_in: [

            ],
            type: [

            ],
            meta: [

            ]
        },
        contains: [
            hljs.COMMENT(
                /\/\*/,
                /\*\//
            ),
            {
                scope: 'string',
                begin: "'", end: "'"
            },
            {
                scope: 'operator',
                begin: /(\+| - |\*\*|\*|\/\/|\/|\**\|\*\|>=|<=|¬<|¬>|>|<|¬==|=|¬=| EQ | NE | LT | GT | LE | GE | NG | NL | AND | && | OR )/
            },
            {
                scope: 'number',
                begin: /\s([0-9]+(?:(\.)[0-9]+)*)/
            },
            {
                scope: 'variable',
                begin: /(&\w+)/
            }
        ]
    }
}