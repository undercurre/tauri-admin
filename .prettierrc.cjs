module.exports = {
    // 1.一行代码的最大字符数，默认是80(printWidth: <int>)
    printWidth: 80,
    // 2.tab宽度为2空格(tabWidth: <int>)
    tabWidth: 2,
    // 3.是否使用tab来缩进，我们使用空格(useTabs: <bool>)
    useTabs: false,
    // 4.结尾是否添加分号，false的情况下只会在一些导致ASI错误的其工况下在开头加分号，我选择无分号结尾的风格(semi: <bool>)
    semi: false,
    // 5.使用单引号(singleQuote: <bool>)
    singleQuote: true,
    // 6.在jsx文件中的引号需要单独设置（jsxSingleQuote: <bool>）
    jsxSingleQuote: false,
    // 7.object对象中key值是否加引号（quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
    quoteProps: 'as-needed',
    // 8.尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: "<es5|none|all>"）
    trailingComma: 'es5',
    // 9.将多行HTML（HTML、JSX、Vue、Angular）元素的>放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
    bracketSameLine: false,
    // 10.将多行JSX元素的>放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
    jsxBracketSameLine: false,
    // 11.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
    arrowParens: 'always',
    // 12.range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
    rangeStart: 0,
    rangeEnd: Infinity,
    // 13.Prettier可以限制自己只格式化那些在文件顶部包含特殊注释（称为pragma）的文件。这在逐步将大型的、未格式化的代码库过渡到Prettier时非常有用。
    requirePragma: false,
    // 14.Prettier可以在文件的顶部插入一个特殊的@format标记，指定该文件已经被Prettier格式化。这在与--require-pragma选项一起使用时效果很好。如果在文件的顶部已经有一个文档块，那么这个选项将在它和@format标记之间添加一个换行。
    insertPragma: false,
    // 15.默认情况下，Prettier不会改变markdown文本的包装，因为一些服务使用了对换行符敏感的渲染器，例如GitHub的评论和BitBucket。要让Prettier将散文包装成打印宽度，请将此选项改为 "alawys"。如果你想让Prettier强制所有的散文块都在一个行上，而依靠编辑器/浏览器的软包装，你可以使用 "never"。
    proseWrap: "preserve",
    // 16.指定HTML、Vue、Angular和Handlebars的全局空白敏感性。更多信息请参见空白敏感格式化。
    htmlWhitespaceSensitivity: "css",
    // 17.是否要缩进Vue文件中<script>和<style>标签内的代码。有些人（比如Vue的创建者）不缩进以保存缩进程度，但这可能会破坏编辑器中的代码折叠。
    vueIndentScriptAndStyle: false,
    // 18.object对象里面的key和value值和括号间的空格(bracketSpacing: <bool>)
    bracketSpacing: true,
    // 19.endOfLine: "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
    endOfLine: 'lf',
    // 20.embeddedLanguageFormatting: "off",默认是auto,控制被引号包裹的代码是否进行格式化
    embeddedLanguageFormatting: 'off',
    // 还有解析器Parser、File Path两个配置项
  }