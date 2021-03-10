try {
    chrome.runtime.onInstalled.addListener(() => {
        console.log("installed");
        console.log(chrome, chrome.printerProvider);

    });
    chrome.printerProvider.onGetPrintersRequested.addListener((resultCallback) => {
        const pi = {
            id: 'testPrinter',
            name: 'testPrinter',
            description: 'testPrinter',
        };
        resultCallback([pi]);
    });

    chrome.printerProvider.onGetCapabilityRequested.addListener((nil, capabilitiesCallback) => {
        // @ts-ignore
        capabilitiesCallback({
            "version": "2.0",
            "printer": {
            }
        });
    });

    chrome.printerProvider.onGetUsbPrinterInfoRequested.addListener((device, resultCallback) => {
        resultCallback({
            id: 'testPrinter USB',
            name: 'testPrinter USB',
            description: 'testPrinter USB',
        })
    });

    chrome.printerProvider.onPrintRequested.addListener((chromePrintJob, printRequestCallback) => {
        console.log("Print requested", chromePrintJob);
        printRequestCallback("OK");
    });
} catch (e) {
    console.error(e);
}