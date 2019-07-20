import { AddressInfo, createServer } from "net";
export default async () => {
  return new Promise<number>((resolve, reject) => {
    const server = createServer();
    let port: number;
    server.once("listening", () => {
      const address = server.address() as AddressInfo;
      port = address.port;
      server.close();
    });
    server.once("close", () => {
      if (typeof port === "undefined") {
        reject("Can't get port");
        return;
      }
      resolve(port);
    });
    server.once("error", reject);
    server.listen(0, "127.0.0.1");
  });
};
