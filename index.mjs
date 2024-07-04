import http, { request } from "http";

const server = http.createServer((request, resopnse) => {
  resopnse.setHeader("content-type", "text/html;charset=utf-8");
  resopnse.end(`Hello server ,你好主機,${process.argv[2]}`);
});

server.listen(9000, () => {
  console.log("伺服器運行中 http://localhost:9000");
});
