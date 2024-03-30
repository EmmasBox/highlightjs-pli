/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'PLI',
        aliases: ['PL/I', 'PL/1'],
        case_insensitive: false,
        keywords: {
            keyword: [
                "ALIGNED",
                "ALLOCATE",
                "ALLOC",
                "ASSEMBLER",
                "ASM",
                "AUTOMATIC",
                "AUTO",
                "BASED",
                "BINARY",
                "BIN",
                "BIT",
                "BUILTIN",
                "BY",
                "CALL",
                "CHARGRAPHIC",
                "CHARG",
                "CLOSE",
                "COBOL",
                "COMPLEX",
                "CPLX",
                "CONDITION",
                "COND",
                "DECIMAL",
                "DEC",
                "DECLARE",
                "DCL",
                "DEFAULT",
                "DFT",
                "DEFINED",
                "DEF",
                "DELAY",
                "DELETE",
                "DIMENSION",
                "DIM",
                "DO",
                "DOWNTHRU",
                "ELSE",
                "ENVIRONMENT",
                "EVENT",
                "EXIT",
                "EXPORTS",
                "EXTERNAL",
                "EXT",
                "FETCH",
                "FINISH",
                "FIXED",
                "FIXEDOVERFLOW",
                "FOFL",
                "FLOAT",
                "FLUSH",
                "FORMAT",
                "FORTRAN",
                "FREE",
                "GENERIC",
                "GET",
                "GOTO",
                "GRAPHIC",
                "IF",
                "IGNORE",
                "INITIAL",
                "INIT",
                "INTER",
                "INTERNAL",
                "INT",
                "INTO",
                "ITERATE",
                "IRREDUCIBLE",
                "IRRED",
                "KEYFROM",
                "KEYTO",
                "LIKE",
                "LOCATE",
                "NOCHARGRAPHIC",
                "NOCHARG",
                "NOCHECK",
                "NOCONVERSION",
                "NOCONV",
                "NOEXECOPS",
                "NOFIXEDOVERFLOW",
                "NOFOFL",
                "NOLOCK",
                "NOMAP",
                "NOMAPIN",
                "NOMAPOUT",
                "NONVARYING",
                "NONVAR",
                "NOOVERFLOW",
                "NOOFL",
                "NOSIZE",
                "NOSTRINGRANGE",
                "NOSTRG",
                "NOSTRINGSIZE",
                "NOSUBSCRIPTRANGE",
                "NOSUBRG",
                "NOUNDERFLOW",
                "NOUFL",
                "NOZERODIVIDE",
                "NOZDIV",
                "OFFSET",
                "OPEN",
                "OPTIONS",
                "ORDER",
                "OTHERWISE",
                "OTHER",
                "OVERFLOW",
                "OFL",
                "PACKAGE",
                "PENDING",
                "PICTURE",
                "PIC",
                "POINTER",
                "PTR",
                "PRECISION",
                "PRIORITY",
                "PROCEDURE",
                "PUT",
                "RANGE",
                "READ",
                "REAL",
                "RECURSIVE",
                "REDUCIBLE",
                "RED",
                "REENTRANT",
                "REFER",
                "RELEASE",
                "REORDER",
                "REPEAT",
                "RESERVES",
                "RESIGNAL",
                "RETURN",
                "RETURNS",
                "REWRITE",
                "SELECT",
                "SET",
                "SIGNED",
                "SNAP",
                "STATIC",
                "STRINGRANGE",
                "STRG",
                "STRINGSIZE",
                "STRZ",
                "SUBSCRIPTRANGE",
                "SUBRG",
                "TASK",
                "THEN",
                "TRANSMIT",
                "UNALIGNED",
                "UNAL",
                "UNDEFINEDFILE",
                "UNDF",
                "UNDERFLOW",
                "UFL",
                "UNLOCK",
                "UNTIL",
                "UPTHRU",
                "VARYINGZ",
                "VARZ",
                "WAIT",
                "WHEN",
                "WHILE",
                "WRITE",
                "WRITE",
                "ZERODIVIDE",
                "SQL",
                "CICS",
                "DLI",
                "EXEC"
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
                begin: /(\+| - |\/==|\/=|\*\*|\*|\/\/|\/|<>|\**\|\*\|>=|<=|¬<|¬>|>|<|==|¬==|=|¬=|¬|&&|&|%)/
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