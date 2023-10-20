// CodeEditor.js

document.addEventListener('DOMContentLoaded', function () {
    const codeEditor = document.getElementById('codeEditor');
    const indentButton = document.getElementById('indentButton');
    const copyButton = document.getElementById('copyButton');
    const lockButton = document.getElementById('lockButton');
    const languageSelector = document.getElementById('languageSelector');

    let code = '';
    let isLocked = false;

    function handleIndentation() {
        // Implement your indentation logic here.
        // For example, add 2 spaces to the beginning of each line.
        const indentedCode = code
            .split('\n')
            .map(line => '  ' + line)
            .join('\n');
        setCode(indentedCode);
    }

    function handleCopyToClipboard() {
        navigator.clipboard.writeText(code).then(() => alert('Code copied to clipboard!'));
    }

    function handleToggleLock() {
        isLocked = !isLocked;
        codeEditor.contentEditable = !isLocked;
        lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
    }

    function handleLanguageChange() {
        const selectedLanguage = languageSelector.value;
        const languages = {
            javascript: `// JavaScript code\nfunction greet() {\n  return "Hello, World!";\n}`,
            python: `# Python code\ndef greet():\n    return "Hello, World!"`,
            java: `// Java code\nclass Greeting {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
        };
        setCode(languages[selectedLanguage] || '');
    }

    function setCode(newCode) {
        code = newCode;
        codeEditor.textContent = code;
    }

    indentButton.addEventListener('click', handleIndentation);
    copyButton.addEventListener('click', handleCopyToClipboard);
    lockButton.addEventListener('click', handleToggleLock);
    languageSelector.addEventListener('change', handleLanguageChange);
});
