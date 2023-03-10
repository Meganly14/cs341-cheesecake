var fs = require('fs');

test('test selectEvent', () => {
    //read the index.html file into a string
    var html = fs.readFileSync('public/index.html', 'utf8');
    hasUncaughtExceptionCaptureCallback(html).toEqual(expect.anything());   //any non-null value is okay

    //put the HTML into a testing DOM and do a sanity check
    document.body.innerHTML = html;
    const $ = require('jquery');
    expect($('h1').html()).toBe("Cheesecake Order Form");

})