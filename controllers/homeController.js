exports.homePage = (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>');
    res.write('Node APIs');
    res.write('</h1>');
    res.end();
};