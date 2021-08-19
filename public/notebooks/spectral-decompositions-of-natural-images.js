import define1 from "../observablehq-base/inputs.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["spectral-frog-1500.png",new URL("./files/8768e02036a11bf4151969a2648536079dd553b49e75ad9a25be1d61c1d5e849d8ce595e40b8d665c561881eab369c36d15bf15f77b53aaad8322cd57b65d1fd",import.meta.url)],["spectral-chicken-50.png",new URL("./files/59ac9075b128644b501d4ff85925c9bb4c5c9842a037b455365ced579c9812025fc2a36da47afce7c54ffeead6dd542e6cde899dc7a747e8ba66ea6dec7f1ae5",import.meta.url)],["spectral-frog-200.png",new URL("./files/ca8a3e8abfdb5ea70db9cc310035301b83b75267c9bcc86e8c952e28b8c70de695f37572645f35b05db7539f67c1a6ef9faf54e8c40d88011551af2688fd50f0",import.meta.url)],["spectral-fish-1.png",new URL("./files/b9363d36946ba4eb5d86cfe4090d0dbde1aedace30daa7179f8e99145aae606c7e19f2658498e83fe8c295e9b761bad080bd81f0ed591aed14afa66d52c227a3",import.meta.url)],["spectral-fish-100.png",new URL("./files/77f9c2b11e8bf33e69b46b4fcbdf4eab7282285433a45225634f16e1300a3e8ad39c528ec7da92c5944824328e7848df082b7c7f8226d89c642337cbcada5fc6",import.meta.url)],["spectral-frog-10.png",new URL("./files/b87e4b964a4ff54bc42565d13e852c61b46ebbfca148b00da6d7e5bd04790ddb732214f8dabd3840a14df29a7f530e38805cb4bc9ac5bc627c4283f7c1310ad0",import.meta.url)],["spectral-spider-500.png",new URL("./files/588a0a25d9a87410e92f6bf8aa700cd7bfafe103a29e4f30cbed74128daf768bc6f7c84997f7e6faf30a7e814b08f1594bc4ce5ae83326732a0e324251a7260c",import.meta.url)],["spectral-frog-50.png",new URL("./files/84a69008c4b7611ea9a600bc451dd9ac7f2f7afeb4e2b3f381813fb0275ebba3d85e03f05d3448d6bf077929985adf908c6723894db224564abd823cc51a77b4",import.meta.url)],["spectral-frog-750.png",new URL("./files/0ec2f4f2ec82fcba8226dd68a38c229dca4e89935c10a4b8d513519b9ab586481d25298181fa2acdd11b5f7393f977cf3ed46e775c22af100d79e4ba9ca101d0",import.meta.url)],["spectral-chicken-10.png",new URL("./files/4fc6d8a67f7d6beb17034d9dcf7a0b42efe01983174a9b4d9b77faff3f5d49aaca8007c400dc438d74926e9dc25c02583da70310d6ecd6157668e3f1cd0bbe17",import.meta.url)],["spectral-chicken-1.png",new URL("./files/bf6991fb550c31ab962c1d2a81c4248a161f3fd355118af30a373a172c9e73448f33f57a15ff00c4fac8a5d54f8fb314f6f66549a61481875b289dc94e64695c",import.meta.url)],["spectral-frog-500.png",new URL("./files/c676a1dadee9a9ed9ab6746c3cf9879b9fe59d6fc2605c58cba14dab8d3c2178eca2adbafc2fca31b9600456e0ef26b884d2f47d5cde0f6ab407d395102d5658",import.meta.url)],["spectral-frog-5.png",new URL("./files/db4be9dbb1e93598f3e3a1534c66b5d02d4d75dcf10f573c069ecf7bb702c2fa561aee31de4d8c96eda85eed71bab60925a403960bb4bd490bd10c0ae6a81390",import.meta.url)],["spectral-spider-200.png",new URL("./files/e8db9d9b807b494e70e266005b7587307d3357636f482421cd254c828d927bc60fa5ad668029f9f246e44255a30a67f73c8bb9455e53638c11b535d321618538",import.meta.url)],["spectral-chicken-750.png",new URL("./files/8a126aba74b1730990f20a9b26000bea9c797630b8c1c76809b828b0ae0a4e2605618d8b877358cbd3c5113a3b83fcdb9d6214b4d35d371e7be41905c7c98c32",import.meta.url)],["spectral-frog-1.png",new URL("./files/4955c168e0ee4ea3a5150ec7634d73169f1e48e6a350554ea9599b509480a45e81cc849e4b9a4e584c955ce274cd7d2a67762845e48dffaf67fb55a2298abecb",import.meta.url)],["spectral-fish-500.png",new URL("./files/dac309395ade545161fbd0d5d3f2983db2b2997a17a4467078f4b9ebd989f0c7986167d19917174d4350c8540f09c36311231bee9f4e2d36d16169a5ea5efe2e",import.meta.url)],["spectral-chicken-100.png",new URL("./files/427bb150aa469894ea5649729167ddfd1d425c9e8195e37d2a4992ce400d36f0e927043ebcfc42ea451a156de0db162bbd5e00baae3ee94464fcc621e86b63bd",import.meta.url)],["spectral-chicken-5.png",new URL("./files/8bd654ccbcbb117989fa44903ef45d351c1ed0fd8ef50b27c357821ecc34d91742af6b0980c18f9e25b19a41343bcaea00e4de4203c359ceee51f7d5d886c1d3",import.meta.url)],["spectral-fish-1500.png",new URL("./files/6c8db0ea97fcd395a4a230b166761bb2d685e454dd732b92a406b015df4974bdb45d0d054c734934b8cdae7adb6beefc054c1702ff2b3ca4f486c0aa119d2c68",import.meta.url)],["spectral-chicken-1000.png",new URL("./files/a4231f21b636994576c414b785b75df7c7a1240c4867b54e8c1cc6c47d7f4aea3c4fe2b5b6836588d0982784fadad94ea5a50cdfc1c2c4b75d6b2f6c5a75d80a",import.meta.url)],["spectral-chicken-500.png",new URL("./files/731d131baa6cfb8830f4a940bb2daab81bd00e63ba23e54c3c775ea15868bdcc0aa7f1eb6eaf09363c8dbab949cd08a10402a130847170d77aa876b9f8161e0b",import.meta.url)],["spectral-spider-5.png",new URL("./files/7cb6dd6ab212adf24aa36ea4cb3ecf0d8e16fe02385818797e0b65a98d1be1a781a02204ace8c0e84f0a859e8369650bb7e49b42b68d12c2643a4f83fef5de1e",import.meta.url)],["spectral-spider-20.png",new URL("./files/227f6a769c6864eac5cb049eb444fa13cac7845905a84f1556491fbc597c15f681cb90cf71745aa812bb36328b23c14191fb5f3751c8fda5bd0b9d2b3a7afcae",import.meta.url)],["spectral-spider-50.png",new URL("./files/46756bd0aa0497a1ac9a3200fe63b2e129f4e945e25a23e24fe157d5fc22e565f1ce6e9fc6188655e8dad399aa5f93672c9b46013d33fdf20958c94201f10b29",import.meta.url)],["spectral-spider-750.png",new URL("./files/ae9271e2bb1c7d61843b0a6ae28ccf3bdcd750257a6e5f18398ccc2c0669a0a8c3acde407fb0e4e32db1eb1781c496d821e783549604c3a7b67959449b61f75c",import.meta.url)],["spectral-frog-20.png",new URL("./files/62cad6652d2a05f3ee8b443f49cebbf67a8488157b8dfe8a544b005001c0c4322f1d6092fc7bf56d4d1bafa744f89630d6c3b3d7a427dd90395a80ce9dc8ef87",import.meta.url)],["spectral-fish-10.png",new URL("./files/7ca9029a4481da7efd4131810364e16ed0e40dc3669b41c477f1d110d4a9d4a7aee25d80c254970fc54e99f51de57f644f7861d57486f37655ebc08b0953c5d0",import.meta.url)],["spectral-fish-200.png",new URL("./files/04afeef5de36bf9ec44ace9388268f33c31f69f182c8aaa92f28a316c18acc27c1cf2d52379ec9faf6ccad8aad2353be21f773566073af36e683c17c27a3ad0a",import.meta.url)],["spectral-spider-1500.png",new URL("./files/3d2d3dc13a1ff92fcc2d9f99187f2cc08b5b91938124c687f0e7ddd3abe05fd82e8d3b3395ac51265176eb0ed2627f4112bdfcc9c46d568612848a64767d5f59",import.meta.url)],["spectral-fish-1000.png",new URL("./files/1c9414f2ea3ad17b9d7dd211aa8035d8d6d45c978e023b23b9844ad8020173c6a251de14f01b2699eb5a5d7cd7930d16a89bfcfe67e011b090e5cc0405a3c684",import.meta.url)],["spectral-fish-5.png",new URL("./files/9e2b4e07eb7962bb979fa3344abda05cfab8e6b4cbf2a50041eb8e4eb92d3c462aa369be740b9811f931d21397157d7fbc8e0d7a922cbb95fb3a92e32a74b051",import.meta.url)],["spectral-frog-2000.png",new URL("./files/81a242678d96697b064f8c15c7a228aafb1f13340170b351e301ba1cc3691c1a1d503d4b29fbdab00d8e32a2634cb64731f8c34f389acb910adcd2454384c775",import.meta.url)],["spectral-chicken-200.png",new URL("./files/2227dfe8cac05e7ccf751649af5dda27df35dc8b54db737adae3f8ae3cadeadcc70c8f3278c3d157b295ef40730b099b7624c6d47b3e23bb31a620115203fe01",import.meta.url)],["spectral-chicken-2000.png",new URL("./files/5a4013f9174faf519dea89085731c2b38564cb9cc0ddaf7a490c8a638d7841bf951a4d35fd04b53d35a8a8182253edd2e5f272c7fb03793e1d8dda1100c6d75b",import.meta.url)],["spectral-spider-1000.png",new URL("./files/31e2425e40eea7d7266f4fa72571fc3b0efda5b5381e9b0e9b1a446657513c8468fbbd5959d6650699e0e3ecc0c67ffb4a59250b86aa86ac2ff7cff87c22f1f0",import.meta.url)],["spectral-frog-100.png",new URL("./files/a7e8e50144f3688bfedc09e1cc0b7d0a2269636af6a44a57bed301848b0039ccecfe4015c22ae8917b4bc10295d53695414409d9e45dd24ec47d8c02791b1561",import.meta.url)],["spectral-frog-1000.png",new URL("./files/ddc9c7afd4f5bd1da4390746c13d495c903ae7f458b963e5fef539c0b6355828ee62efb010ca07f141bd1b8be86d7fc7818f308db2ce7be0e72cdbcf70762f51",import.meta.url)],["spectral-fish-750.png",new URL("./files/6f963da4b540f64768c6ca6b0e5112667051958f0fb8946a2e0a22d302c039ce5273883ca65a9cec32e37f5f0c0c3227ddac57f0f4e6f6331937874612908018",import.meta.url)],["spectral-spider-1.png",new URL("./files/68bc7bbf2c760aac9dc4f25a755ed4703482289869580168c144db87366769007f4a09b4054593b7ba9034ad6274f6adc56ce6d84cf688ce9fc55d34429c52a4",import.meta.url)],["spectral-spider-10.png",new URL("./files/a0265e77182fc8cb73a902a90bb7d825afb104d38289d5b7079277448ff45a80bd6b455d45095534187ddccf7cf774f5ee5f1532bc7f31114b71c1843c2b6dc5",import.meta.url)],["spectral-chicken-1500.png",new URL("./files/e9c075af377ec3ac244e4e7c318a7ee7ebaff54a71ff8d98aff203154a2aa70f895eb0a48360e692b4fb30ffd81e3349257928ff48674b3cd8eaacb0a434afda",import.meta.url)],["spectral-fish-50.png",new URL("./files/691ca67ab35bbeb6ff454823d44b65687b7e2de51389692e7a6973a7a17faff63ec65f0fd0d48c349648c673908e91065bc3808a8e09d75f4ae6a24bfa7370c1",import.meta.url)],["spectral-chicken-20.png",new URL("./files/f5e0752c77ff7b7ed46b12a2235c7720e889ae952d7dcb2b1417be9003bc67df4429b03d2197a43e99458a0a586277541a06102f12bce90967fb02d7d23bdaee",import.meta.url)],["spectral-fish-20.png",new URL("./files/242d72c9e71a56231dbfdc26951012f88e5b87fd657116473ee5cf1a8afcf611c1355dfb24cd0f1838cb3482317e0c4153548c4e558f4367bcdc99f0f356ec14",import.meta.url)],["spectral-spider-100.png",new URL("./files/69d576196824e164189905fe03b9c023dd18d10135c9ed50ce18a878c8b7c24da1f16e1ad1090634a9d2016ffd9c9e28594934cc2a6f455fd25d6bf27b017287",import.meta.url)],["spectral-fish-2000.png",new URL("./files/e13ed069d10c208811eb48018fe7a585cb5c5b56e4b5bba597421ac04b9eccb4d3948b46fe5ca18d88e5d81c1add7e99623abe00d433df7cc895d273fe073353",import.meta.url)],["spectral-spider-2000.png",new URL("./files/5f42798bc616e5531b8e879531e4e3ce2e78ca8d6dd543f5b2769da218fc5c27759acd8e61bd13103b40f1e7986cd59e12b1d51c88c1b0b86eb2450c386ee2b5",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Spectral Decomposition of Natural Images`
)});
  main.variable(observer("spectralDecompositionsAll")).define("spectralDecompositionsAll", ["html","inputsRadio","body","inputsSlider"], function(html,inputsRadio,body,inputsSlider){return(
html`
  <div id="specDecompAll">
    ${inputsRadio}
    ${body}
    ${inputsSlider}
  </div>
`
)});
  main.variable(observer("inputsRadio")).define("inputsRadio", ["html","baseImageRadio"], function(html,baseImageRadio){return(
html`
  <div id="specDecompInputsRadio">
    ${baseImageRadio}
  </div>
`
)});
  main.variable(observer("inputsSlider")).define("inputsSlider", ["html","numComponentsSlider"], function(html,numComponentsSlider){return(
html`
  <div id="specDecompInputsSlider">
    ${numComponentsSlider}
  </div>
`
)});
  main.variable(observer("body")).define("body", ["html","origCanvas","origCaption","arrow","updCanvas","updCaption"], function(html,origCanvas,origCaption,arrow,updCanvas,updCaption){return(
html`
  <div id="specDecompBody">
    <div id="orig">
      ${origCanvas}
      ${origCaption}
    </div>
    ${arrow}
    <div id="upd">
      ${updCanvas}
      ${updCaption}
    </div>
  </div>
`
)});
  main.variable(observer("origCaption")).define("origCaption", ["html","tex"], function(html,tex){return(
html`
<figcaption id="origCaption">
  Original Image
  ${tex`x`}
</figcaption>
`
)});
  main.variable(observer("updCaption")).define("updCaption", ["html","tex"], function(html,tex){return(
html`
<figcaption id="updCaption">
  Transformed Image
  ${tex`x'`}
</figcaption>
`
)});
  main.variable(observer("updateArrowCaption")).define("updateArrowCaption", ["numComponents","maxComponents","d3","arrow"], function(numComponents,maxComponents,d3,arrow)
{
  const text = (numComponents == maxComponents ? `All ${maxComponents}` : `First ${numComponents}`);
  d3.select(arrow).select('#caption').text(`Keep ${text} Spectral Components`);
}
);
  main.variable(observer("arrow")).define("arrow", ["html"], function(html){return(
html`
<svg id="svgArrow" width=320 height=50 viewBox="0 0 320 50">
<g>
  <text id="caption"></text>
</g>
</svg>`
)});
  main.variable(observer("drawArrow")).define("drawArrow", ["d3","arrow"], function(d3,arrow)
{
  const group = d3.select(arrow).select('g');
  group
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', [0, 0, 20, 20])
    .attr('refX', 10)
    .attr('refY', 10)
    .attr('markerWidth', 10)
    .attr('markerHeight', 10)
    .attr('orient', 'auto-start-reverse')
    .append('path')
    .attr('d', d3.line()([[0, 0], [0, 20], [20, 10]]))
    .attr('stroke', 'black');

  const xOffset = 10;
  const arrowLen = 300;
  group
    .append('path')
    .attr('d', d3.line()([[xOffset, 25], [xOffset + arrowLen, 25]]))
    .attr('stroke', 'black')
    .attr('marker-end', 'url(#arrow)')
    .attr('fill', 'none');
  
  group
    .select('#caption')
    .text(`Keep Top Spectral Components`)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .attr('x', xOffset + (arrowLen / 2))
    .attr('y', 40);
}
);
  main.variable(observer("baseImageRadio")).define("baseImageRadio", ["radio"], function(radio){return(
radio({
  title: 'Sample Image',
  options: [
    { label: 'Chicken', value: 'chicken' },
    { label: 'Fish', value: 'fish' },
    { label: 'Frog', value: 'frog' },
    { label: 'Spider', value: 'spider' },
  ],
  value: 'chicken'
})
)});
  main.variable(observer("baseImage")).define("baseImage", ["Generators","baseImageRadio"], function(Generators,baseImageRadio){return(
Generators.input(baseImageRadio)
)});
  main.variable(observer("numComponentsSlider")).define("numComponentsSlider", ["slider"], function(slider)
{
  var allowedVals = [1, 5, 10, 20, 50, 100, 200, 500, 750, 1000, 1500, 2000];
  return slider({
    min: 0,
    max: allowedVals.length - 1,
    step: 1,
    title: "Number of Spectral Components (m)",
    value: 6,
    getValue: n => allowedVals[n.value],
  });
}
);
  main.variable(observer("numComponents")).define("numComponents", ["Generators","numComponentsSlider"], function(Generators,numComponentsSlider){return(
Generators.input(numComponentsSlider)
)});
  main.variable(observer("allAttachments")).define("allAttachments", ["FileAttachment"], function(FileAttachment){return(
[
  FileAttachment('spectral-chicken-1.png'),
  FileAttachment('spectral-chicken-5.png'),
  FileAttachment('spectral-chicken-10.png'),
  FileAttachment('spectral-chicken-20.png'),
  FileAttachment('spectral-chicken-50.png'),
  FileAttachment('spectral-chicken-100.png'),
  FileAttachment('spectral-chicken-200.png'),
  FileAttachment('spectral-chicken-500.png'),
  FileAttachment('spectral-chicken-750.png'),
  FileAttachment('spectral-chicken-1000.png'),
  FileAttachment('spectral-chicken-1500.png'),
  FileAttachment('spectral-chicken-2000.png'),
  FileAttachment('spectral-fish-1.png'),
  FileAttachment('spectral-fish-5.png'),
  FileAttachment('spectral-fish-10.png'),
  FileAttachment('spectral-fish-20.png'),
  FileAttachment('spectral-fish-50.png'),
  FileAttachment('spectral-fish-100.png'),
  FileAttachment('spectral-fish-200.png'),
  FileAttachment('spectral-fish-500.png'),
  FileAttachment('spectral-fish-750.png'),
  FileAttachment('spectral-fish-1000.png'),
  FileAttachment('spectral-fish-1500.png'),
  FileAttachment('spectral-fish-2000.png'),
  FileAttachment('spectral-frog-1.png'),
  FileAttachment('spectral-frog-5.png'),
  FileAttachment('spectral-frog-10.png'),
  FileAttachment('spectral-frog-20.png'),
  FileAttachment('spectral-frog-50.png'),
  FileAttachment('spectral-frog-100.png'),
  FileAttachment('spectral-frog-200.png'),
  FileAttachment('spectral-frog-500.png'),
  FileAttachment('spectral-frog-750.png'),
  FileAttachment('spectral-frog-1000.png'),
  FileAttachment('spectral-frog-1500.png'),
  FileAttachment('spectral-frog-2000.png'),
  FileAttachment('spectral-spider-1.png'),
  FileAttachment('spectral-spider-5.png'),
  FileAttachment('spectral-spider-10.png'),
  FileAttachment('spectral-spider-20.png'),
  FileAttachment('spectral-spider-50.png'),
  FileAttachment('spectral-spider-100.png'),
  FileAttachment('spectral-spider-200.png'),
  FileAttachment('spectral-spider-500.png'),
  FileAttachment('spectral-spider-750.png'),
  FileAttachment('spectral-spider-1000.png'),
  FileAttachment('spectral-spider-1500.png'),
  FileAttachment('spectral-spider-2000.png'),
]
)});
  main.variable(observer("allImages")).define("allImages", ["allAttachments"], async function(allAttachments)
{
  var images = await Promise.all(allAttachments.map(file => file.image()));
  var dict = {};
  for(const [i, f] of allAttachments.entries()){
    dict[f.name] = images[i];
  }
  return dict;
}
);
  main.variable(observer("getImageByName")).define("getImageByName", ["allImages"], function(allImages){return(
function getImageByName(imglabel, numcomponents){
  return allImages[`spectral-${imglabel}-${numcomponents}.png`];
}
)});
  main.variable(observer("drawImage")).define("drawImage", ["getImageByName","maxComponents","origCanvas"], function(getImageByName,maxComponents,origCanvas){return(
function drawImage(baseImage) {
  const image = getImageByName(baseImage, `${maxComponents}`);
  const ctx = origCanvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
}
)});
  main.variable(observer("drawCurrBaseImg")).define("drawCurrBaseImg", ["drawImage","baseImage"], function(drawImage,baseImage){return(
drawImage(baseImage)
)});
  main.variable(observer("drawUpdImage")).define("drawUpdImage", ["getImageByName","updCanvas"], function(getImageByName,updCanvas){return(
function drawUpdImage(baseImage, numComponents) {
  const image = getImageByName(baseImage, numComponents);
  const ctx = updCanvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
}
)});
  main.variable(observer("drawCurrUpdImg")).define("drawCurrUpdImg", ["drawUpdImage","baseImage","numComponents"], function(drawUpdImage,baseImage,numComponents){return(
drawUpdImage(baseImage, numComponents)
)});
  main.variable(observer("imageExample")).define("imageExample", ["getImageByName"], function(getImageByName){return(
getImageByName('chicken', 100)
)});
  main.variable(observer("canvasWidth")).define("canvasWidth", ["imageExample"], function(imageExample){return(
imageExample.width
)});
  main.variable(observer("canvasHeight")).define("canvasHeight", ["imageExample"], function(imageExample){return(
imageExample.height
)});
  main.variable(observer("origCanvas")).define("origCanvas", ["html","canvasWidth","canvasHeight"], function(html,canvasWidth,canvasHeight){return(
html`<canvas width=${canvasWidth} height=${canvasHeight}></canvas>`
)});
  main.variable(observer("updCanvas")).define("updCanvas", ["html","canvasWidth","canvasHeight"], function(html,canvasWidth,canvasHeight){return(
html`<canvas width=${canvasWidth} height=${canvasHeight}></canvas>`
)});
  main.variable(observer("maxComponents")).define("maxComponents", function(){return(
2000
)});
  main.variable(observer("style")).define("style", ["html"], function(html){return(
html`
  <style>
    #specDecompBody {
      display: flex;
      justify-content: center;
    }
    #svgArrow {
      margin-top: 83px;
      margin-left: 2em;
      margin-right: 2em;
    }
    #specDecompAll {
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 350px;
      justify-content: space-evenly;
    }
    #specDecompInputsRadio input {
      margin-top: 0.5em;
      vertical-align: unset !important;
    }
    #origCaption {
      margin-top: 1em;
    }
    #updCaption {
      margin-top: 1em;
    }
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Appendix`
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("radio", child1);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@6')
)});
  main.variable(observer("math")).define("math", ["require"], function(require){return(
require('mathjs@7.6.0/dist/math.min.js')
)});
  return main;
}