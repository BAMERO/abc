 const { Configuration, OpenAIApi } = require("openai");
 const deepai = require('deepai');
 deepai.setApiKey('05b652a4-b6ec-4a12-98ea-a621c82593db');
 const fs=require("fs");
 const path = require('path')
 const { v4: uuidv4 } = require('uuid');


 const configuration = new Configuration({
    apiKey:'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'
});

 const uuid = uuidv4(); // 生成一个新的 UUID
console.log(uuid)
 // deepai.callStandardApi('text2img', {
 //     text: "a cat"
 // }).then(response => {
 //     // 将生成的图片URL显示在页面上
 //     debugger
 //     const img = document.createElement('img');
 //     img.src = response.output_url;
 //     document.body.appendChild(img);
 // }).catch(error => {
 //     console.log(error);
 // });
 //
 //  const openai = new OpenAIApi(configuration);
 // const  response =openai.createFile(
 //     fs.createReadStream(path.join(__dirname, './a.jsonl')),
 //     "fine-tune"
 // ).then((response) => {
 //     const fineTuneId = response.data.id;
 //     console.log(`Fine-tuning with ID ${fineTuneId} has been started.`);
 //     // 等待FineTuning任务完成
 // }).then((response) => {
 //     console.log('Fine-tuning completed.');
 //     // 获取FineTune任务结果
 //     return openai.FineTunes.getFineTune(fineTuneId);
 // }).then((response) => {
 //     console.log('Fine-tuning result:');
 //     console.log(response.data.completion);
 // }).catch((error) => {
 //     console.log(`Error: ${error.message}`);
 // });
 // const  response =openai.createModeration({
 //     prompt: "A cute baby sea otter",
 //     n: 2,
 //     size: "1024x1024",
 // }).then((com)=>{
 //     console.log(com.data);
 // })
 // openai.createImageVariation(
 //     fs.createReadStream("dog.png"),
 //     2,
 //     "1024x1024"
 // ).then(console.log);

 // const response =  openai.createImageEdit(
 //     fs.createReadStream(path.join(__dirname,"./dog.png")),
 //     "A cute baby sea otter wearing a beret",
 //     1,
 //     "1024x1024"
 // ).then((completion)=>{
 //     console.log(completion.data);
 // }).catch(e=>{
 //     console.log(e);
 //
 // })

// const openai = new OpenAIApi(configuration);
//
// const response = await openai.listEngines();
// openai.createCompletion({
//     model: "text-davinci-002",
//     prompt: "Hello world",
// }).then((completion)=>{
//    // debugger
//     console.log(completion.data.choices[0].text);
// })

 //text-davinci-003

 // const configuration = new Configuration({
 //     apiKey:'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',
 // });
 // const openai = new OpenAIApi(configuration);
 // const response =  openai.listModels();
 // debugger
 // console.log(response)
