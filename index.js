const http = require('http');
const fs = require('fs');
const app = http.createServer((req, res)=> {
    res.writeHead(200, "status code 200", {
        "Content-Type": "text/html",
    }); 
        // đồng thời chỉ chạy sync hoặc async

        // ASYNC
        // fs.readFile('./cv.html', {encoding: 'utf8', flag:'r'}, (err, data)=>{
        //     if (err) throw err;
        //     res.end(data);
        // })

        // SYNC
        // const body1 = fs.readFileSync('./cv.html', {encoding: 'utf8', flag:'r'})
        // res.end(body1);
});
app.listen(8000, ()=> {
    console.log("server running on port: 8000");
})
