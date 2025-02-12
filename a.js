import fs from 'fs-extra';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import axios from 'axios'
async function binaryToPdf(binaryFilePath, outputPdfFilePath) {
    try {
        // 检查文件是否存在，不存在则报错并返回
        if (!(await fs.pathExists(binaryFilePath))) {
            console.error("文件不存在: " + binaryFilePath);
            return;
        }

        // 读取二进制文件内容（假设里面是Base64编码的数据）
        const base64String = await fs.readFile(binaryFilePath, 'utf8');

        // 使用Buffer对象进行Base64解码，对应Java中Base64.getDecoder().decode的功能
        const decodedBytes = Buffer.from(base64String, 'base64');

        // 将解码后的数据写入PDF文件
        await fs.writeFile(outputPdfFilePath, decodedBytes);
        console.log("PDF 文件已成功生成: " + outputPdfFilePath);

    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Base64解码失败，可能文件内容有误: " + error.message);
        } else {
            console.error("读取文件或生成PDF时发生错误: " + error.message);
        }
    }
}

// 使用示例，你需要替换下面的路径为实际的二进制文件路径（含Base64编码内容）和期望输出的PDF文件路径
const binaryFilePath = "/Users/ldx/Documents/ldx/凌日/vpp/1.bin";
const outputPdfFilePath = "24.pdf";
binaryToPdf(binaryFilePath, outputPdfFilePath);


// axios({
// url:'http://114.251.111.103:18080/kfs/file/readPage',
// data:{code: 'a3140c3a91366c836b5c3068a39a36dd',page:10},
// responseType: 'blob',
// method:'post'
// }).then((response) => {
//   // apiData 是 api 返回的数据
//   const apiData = response.data

//   console.log('apiData',response);

//   // binaryToPdf(apiData, outputPdfFilePath);

// })


