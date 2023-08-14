# 💥 VLogger

**VLogger** is a utility class for console logging, error throwing, and data validation in JavaScript applications.

## 🚀 Installation

To use VLogger, you can require it as a module in your JavaScript code.

```bash
npm install vlogger
```

## 💼 Methods

* INFO(data, message, ?_dir)
* THROW(error, message, ?_dir)
* ERROR(error, message, ?_dir)
* VTHROW(data, message, ?_dir, ?name)
* DEBUG(data, ?_dir, ?name, ?message)

## 🎮 Usage

Import the VLogger class into your JavaScript file:

``` foo.js
const VLogger = require('vlogger');

const vlog = new VLogger(true); // Pass true to enable logging
```

### .INFO() : Logging an informational message

```
function doSomething() {
    const data = getData();
    if (data) {
        await useData(data);
        
        vlog.INFO(data, 'This is an informational message', '.doSomething()');    
    }
}
```

### .THROW() : Logging an error and throwing an error

```
try {
    const data = await functionThatThrows();
} catch (error) {
    vlog.THROW(error, 'An error occurred', '.functionThatThrows()');
}
```

### .ERROR() : Logging an error

```
try {
    const data = await functionThatThrows();
} catch (erro) {
    vlog.ERROR(error, 'An error occurred', '.functionThatThrows()');
}
```

### .VTHROW() : Logging an error and throwing an error if data is invalid

```
const data = await getData();
vlog.VTHROW(data, 'Data is invalid', '.getData()', 'Invalid Data');
```

### .DEBUG() : Logging a debug message

```
function fetchImportantData() {
    const data = await getData();
    vlog.DEBUG(data, 'fetchImportantData()', '.getData()', 'Debug message');
}
```

## 📄 License

This project is licensed under the MIT License

```
Ready to level up your logs? Contribute to this project by submitting pull requests or opening
 issues in the GitHub repository. Your feedback powers the magic! ✨
```