// https://observablehq.com/@ameyasd/neighbourhoods-for-cnns-and-gnns@243
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Neighbourhood Definitions for CNNs and GNNs`
)});
  main.variable(observer("cnn_svg")).define("cnn_svg", ["html"], function(html){return(
html`<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   sodipodi:docname="cnn.svg"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   id="svg406"
   version="1.1"
   viewBox="0 0 130.28541 30"
   width="130.28542mm">
  <defs
     id="defs400">
    <marker
       style="overflow:visible"
       id="marker5798"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path5796" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker5702"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path5700" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker6129"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path6127" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker5981"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path5979" />
    </marker>
    <marker
       style="overflow:visible"
       id="Tail"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Tail"
       inkscape:isstock="true">
      <g
         transform="scale(-1.2)"
         id="g3579"
         style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -3.8048674,-3.9585227 0.54352094,0"
           id="path3567" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -1.2866832,-3.9585227 3.0617053,0"
           id="path3569" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M 1.3053582,-3.9585227 5.6537466,0"
           id="path3571" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -3.8048674,4.1775838 0.54352094,0.21974226"
           id="path3573" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -1.2866832,4.1775838 3.0617053,0.21974226"
           id="path3575" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M 1.3053582,4.1775838 5.6537466,0.21974226"
           id="path3577" />
      </g>
    </marker>
    <marker
       style="overflow:visible"
       id="marker4147"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4145" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4223"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4221" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4261"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4259" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4299"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4297" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4337"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4335" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker3863"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path3861" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker3198"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path3196" />
    </marker>
    <marker
       style="overflow:visible"
       id="Arrow2Send"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow2Send"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.3,0,0,-0.3,0.69,0)"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.625;stroke-linejoin:round;stroke-opacity:1"
         id="path2116" />
    </marker>
    <marker
       style="overflow:visible"
       id="Arrow1Send"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Send"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.2,0,0,-0.2,-1.2,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2098" />
    </marker>
    <marker
       style="overflow:visible"
       id="Arrow1Lend"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Lend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.8,0,0,-0.8,-10,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2086" />
    </marker>
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect335" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect338" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-2" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect341" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-24" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect344" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-26" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect347" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-9" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect350" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-53" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect353" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-4" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect600" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-5-0" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect603" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-2-0" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect606" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-24-9" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect609" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-26-3" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect612" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-9-7" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect615" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-53-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect618" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-4-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect952" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-5-0-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect955" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-2-0-8" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect958" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-24-9-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect961" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-26-3-6" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect964" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-9-7-7" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect967" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-53-5-9" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect970" />
    <marker
       style="overflow:visible"
       id="Arrow1Mend-4"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2092-9" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker2818-4"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2816-0" />
    </marker>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="11.422788"
     inkscape:cx="218.67679"
     inkscape:cy="4.4071333"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     inkscape:document-rotation="0"
     showgrid="false"
     inkscape:window-width="1792"
     inkscape:window-height="993"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0" />
  <metadata
     id="metadata403">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-29.474211,-84.274269)">
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.264583"
       x="81.037849"
       y="111.85567"
       id="text2068"><tspan
         sodipodi:role="line"
         id="tspan2066"
         x="81.037849"
         y="111.85567"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.264583">Convolution in CNNs</tspan></text>
    <text
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:sans-serif;stroke-width:0.264583"
       x="45.22963"
       y="94.334717"
       id="text4486"><tspan
         sodipodi:role="line"
         id="tspan4484"
         x="45.22963"
         y="94.334717"
         style="stroke-width:0.264583" /></text>
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 43.434138,84.399266 V 104.39927"
       inkscape:label="MajorXDiv1"
       id="path3531" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 47.434138,84.399266 V 104.39927"
       inkscape:label="MajorXDiv2"
       id="path3533" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 51.434138,84.399266 V 104.39927"
       inkscape:label="MajorXDiv3"
       id="path3535" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 55.434138,84.399266 V 104.39927"
       inkscape:label="MajorXDiv4"
       id="path3537" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 39.434138,88.399266 h 20"
       inkscape:label="MajorYDiv1"
       id="path3541" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 39.434138,92.399266 h 20"
       inkscape:label="MajorYDiv2"
       id="path3543" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 39.434138,96.399266 h 20"
       inkscape:label="MajorYDiv3"
       id="path3545" />
    <path
       style="fill:none;stroke:#6c6060;stroke-width:0.05;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 39.434138,100.39927 h 20"
       inkscape:label="MajorYDiv4"
       id="path3547" />
    <rect
       x="39.434139"
       y="84.399269"
       width="20"
       height="20"
       style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       inkscape:label="Border"
       id="rect3551" />
    <rect
       x="43.448975"
       y="88.410683"
       width="11.940943"
       height="11.908811"
       style="fill:none;stroke:#6c6060;stroke-width:0.149061;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       inkscape:label="Border"
       id="rect3551-3" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 43.554053,90.428891 v -1.928375 h 1.903332 1.903332 v 1.928375 1.928376 h -1.903332 -1.903332 z"
       id="path4719" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 43.554053,94.410862 v -1.95342 h 1.903332 1.903332 v 1.95342 1.953419 h -1.903332 -1.903332 z"
       id="path4721" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 47.460892,90.428891 v -1.928375 h 1.95342 1.953419 v 1.928375 1.928376 h -1.953419 -1.95342 z"
       id="path4723" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 43.554053,98.342745 v -1.878288 h 1.903332 1.903332 v 1.878288 1.878285 h -1.903332 -1.903332 z"
       id="path4727" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 47.460892,98.342745 v -1.878288 h 1.95342 1.953419 v 1.878288 1.878285 h -1.953419 -1.95342 z"
       id="path4729" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 51.467907,98.342745 v -1.878288 h 1.903331 1.903332 v 1.878288 1.878285 h -1.903332 -1.903331 z"
       id="path4731" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 51.467907,94.410862 v -1.95342 h 1.903331 1.903332 v 1.95342 1.953419 h -1.903332 -1.903331 z"
       id="path4733" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0473268;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 51.467907,90.428891 v -1.928375 h 1.903331 1.903332 v 1.928375 1.928376 h -1.903332 -1.903331 z"
       id="path4735" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="44.032829"
       y="93.288116"
       id="text1629-5-5-2-6-6"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-8"
         x="44.032829"
         y="93.288116"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">1</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="43.914642"
       y="97.158073"
       id="text1629-5-5-2-6-67"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-1"
         x="43.914642"
         y="97.158073"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">7</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="43.9039"
       y="101.21744"
       id="text1629-5-5-2-6-8"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-4"
         x="43.9039"
         y="101.21744"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">6</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="51.661804"
       y="101.21744"
       id="text1629-5-5-2-6-9"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-7"
         x="51.661804"
         y="101.21744"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">7</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="47.663635"
       y="101.21744"
       id="text1629-5-5-2-6-3"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-10"
         x="47.663635"
         y="101.21744"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">1</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="51.675785"
       y="97.158073"
       id="text1629-5-5-2-6-2"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-3"
         x="51.675785"
         y="97.158073"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">6</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="47.693604"
       y="93.288116"
       id="text1629-5-5-2-6-7"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-18"
         x="47.693604"
         y="93.288116"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">4</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="51.695076"
       y="93.288116"
       id="text1629-5-5-2-6-93"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-74"
         x="51.695076"
         y="93.288116"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">5</tspan></text>
    <g
       id="g5126"
       transform="translate(0.27122524,0.81929016)">
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 133.52847,83.579975 V 103.57998"
         inkscape:label="MajorXDiv1"
         id="path3531-9" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 137.52847,83.579975 V 103.57998"
         inkscape:label="MajorXDiv2"
         id="path3533-2" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 141.52847,83.579975 V 103.57998"
         inkscape:label="MajorXDiv3"
         id="path3535-9" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 145.52847,83.579975 V 103.57998"
         inkscape:label="MajorXDiv4"
         id="path3537-1" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 129.52847,87.579975 h 20"
         inkscape:label="MajorYDiv1"
         id="path3541-0" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 129.52847,91.579975 h 20"
         inkscape:label="MajorYDiv2"
         id="path3543-9" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 129.52847,95.579975 h 20"
         inkscape:label="MajorYDiv3"
         id="path3545-3" />
      <path
         style="fill:none;stroke:#6c6060;stroke-width:0.0499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 129.52847,99.579979 h 20"
         inkscape:label="MajorYDiv4"
         id="path3547-0" />
      <rect
         x="129.52847"
         y="83.579979"
         width="20"
         height="20"
         style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         inkscape:label="Border"
         id="rect3551-0" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
         x="135.97316"
         y="96.321754"
         id="text1629-7-2-6-1-3-0"
         transform="scale(1.0207835,0.97963966)"><tspan
           sodipodi:role="line"
           id="tspan1627-79-4-3-4-75-1"
           x="135.97316"
           y="96.321754"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">6</tspan></text>
    </g>
    <path
       style="fill:none;stroke:#000000;stroke-width:0.233;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.233, 2.796;stroke-dashoffset:0;stroke-opacity:1;marker-mid:url(#marker6129)"
       d="m 55.391097,88.425409 45.984583,2.190968 36.7185,1.749479"
       id="path5011"
       sodipodi:nodetypes="ccc" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.232521;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.232521, 2.79025;stroke-dashoffset:0;stroke-opacity:1;marker-mid:url(#marker5798)"
       d="m 55.387733,100.34623 45.323387,-2.196367 37.72532,-1.828166"
       id="path5013"
       sodipodi:nodetypes="ccc" />
    <path
       style="fill:#e2e2e2;fill-opacity:1;stroke:#000000;stroke-width:0.0526421;stroke-dasharray:0.0526421, 0.631706;paint-order:stroke fill markers"
       d="M 199.09199,10.130164 V 8.187385 h 1.94278 1.94278 v 1.942779 1.942779 h -1.94278 -1.94278 z"
       id="path1312"
       transform="translate(-151.59175,84.274269)" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="47.622528"
       y="97.183395"
       id="text1629-5-5-2-6-7-2"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0-18-2"
         x="47.622528"
         y="97.183395"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">3</tspan></text>
  </g>
</svg>
`
)});
  main.variable(observer("svg")).define("svg", ["html"], function(html){return(
html`<svg
xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   sodipodi:docname="cnn-vs-gnn.svg"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   id="svg406"
   version="1.1"
   viewBox="0 45 130.28541 45"
   width="130.28542mm">
  <defs
     id="defs400">
    <marker
       style="overflow:visible"
       id="marker5798"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path5796" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker5702"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path5700" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker6129"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path6127" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker5981"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path5979" />
    </marker>
    <marker
       style="overflow:visible"
       id="Tail"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Tail"
       inkscape:isstock="true">
      <g
         transform="scale(-1.2)"
         id="g3579"
         style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -3.8048674,-3.9585227 0.54352094,0"
           id="path3567" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -1.2866832,-3.9585227 3.0617053,0"
           id="path3569" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M 1.3053582,-3.9585227 5.6537466,0"
           id="path3571" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -3.8048674,4.1775838 0.54352094,0.21974226"
           id="path3573" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M -1.2866832,4.1775838 3.0617053,0.21974226"
           id="path3575" />
        <path
           style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;stroke-linecap:round;stroke-opacity:1"
           d="M 1.3053582,4.1775838 5.6537466,0.21974226"
           id="path3577" />
      </g>
    </marker>
    <marker
       style="overflow:visible"
       id="marker4147"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4145" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4223"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4221" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4261"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4259" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4299"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4297" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker4337"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path4335" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker3863"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path3861" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker3198"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path3196" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker3144"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true"
       inkscape:collect="always">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path3142" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker2870"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true"
       inkscape:collect="always">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2868" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker2818"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true"
       inkscape:collect="always">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2816" />
    </marker>
    <marker
       style="overflow:visible"
       id="Arrow2Send"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow2Send"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.3,0,0,-0.3,0.69,0)"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.625;stroke-linejoin:round;stroke-opacity:1"
         id="path2116" />
    </marker>
    <marker
       style="overflow:visible"
       id="Arrow1Send"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Send"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.2,0,0,-0.2,-1.2,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2098" />
    </marker>
    <marker
       style="overflow:visible"
       id="Arrow1Lend"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Lend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.8,0,0,-0.8,-10,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2086" />
    </marker>
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect335" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect338" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-2" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect341" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-24" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect344" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-26" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect347" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-9" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect350" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-53" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect353" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-4" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect600" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-5-0" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect603" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-2-0" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect606" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-24-9" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect609" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-26-3" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect612" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-9-7" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect615" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-53-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect618" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-4-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect952" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-5-0-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect955" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-2-0-8" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect958" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-24-9-5" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect961" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-26-3-6" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect964" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-9-7-7" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect967" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect2140-53-5-9" />
    <rect
       x="20.293285"
       y="73.980583"
       width="4.6237864"
       height="7.1925564"
       id="rect970" />
    <marker
       style="overflow:visible"
       id="Arrow1Mend-4"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2092-9" />
    </marker>
    <marker
       style="overflow:visible"
       id="marker2818-4"
       refX="0"
       refY="0"
       orient="auto"
       inkscape:stockid="Arrow1Mend"
       inkscape:isstock="true">
      <path
         transform="matrix(-0.4,0,0,-0.4,-4,0)"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         id="path2816-0" />
    </marker>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="9.8885723"
     inkscape:cx="85.860932"
     inkscape:cy="51.80526"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     inkscape:document-rotation="0"
     showgrid="false"
     inkscape:window-width="1792"
     inkscape:window-height="993"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0" />
  <metadata
     id="metadata403">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="Layer 2"
     transform="translate(-29.474211,-84.274269)">
    <path
       style="fill:none;stroke:#000000;stroke-width:0.264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.264583, 3.175;stroke-dashoffset:0;stroke-opacity:1;marker-mid:url(#marker3144)"
       d="m 47.755239,143.79894 51.149443,8.59556 26.277768,4.41592"
       id="gnn-arrow-1"
       class="gnn-arrows"
       sodipodi:nodetypes="ccc" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.264583, 3.175;stroke-dashoffset:0;stroke-opacity:1;marker-mid:url(#marker3198)"
       d="m 34.048184,157.10441 63.310572,-0.20423 27.823694,-0.0898"
       id="gnn-arrow-2"
       class="gnn-arrows"
       sodipodi:nodetypes="ccc" />
  </g>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-29.474211,-84.274269)">
    <path
       style="fill:none;stroke:#130e05;stroke-width:0.280985;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.96371;paint-order:stroke fill markers"
       d="m 130.81757,131.80783 -8.83343,9.50391 16.90536,2.19322 3.35061,24.41774"
       id="path5587-2-6" />
    <path
       style="fill:none;stroke:#050505;stroke-width:0.280546px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.987903;paint-order:stroke fill markers"
       d="m 125.18245,156.81042 13.70705,-13.30546 19.18987,16.08353"
       id="path5597-9-8" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.280546px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 138.8895,143.50496 14.92545,-5.26371"
       id="path5599-7-3" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-A-after"
       class="node-after"
       cx="130.89372"
       cy="131.88092"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-A-after-dummy"
       class="dummy-node"
       cx="130.89372"
       cy="131.88092"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-F-after"
       class="node-after"
       cx="142.69701"
       cy="167.81644"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-F-after-dummy"
       class="dummy-node"
       cx="142.69701"
       cy="167.81644"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-C-after"
       class="node-after"
       cx="138.8895"
       cy="143.35873"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-C-after-dummy"
       class="dummy-node"
       cx="138.8895"
       cy="143.35873"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-D-after"
       class="node-after"
       cx="153.96725"
       cy="138.38744"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-D-after-dummy"
       class="dummy-node"
       cx="153.96725"
       cy="138.38744"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-E-after"
       class="node-after"
       cx="125.48703"
       cy="156.81041"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-E-after-dummy"
       class="dummy-node"
       cx="125.48703"
       cy="156.81041"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-G-after"
       class="node-after"
       cx="157.92706"
       cy="159.88091"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-G-after-dummy"
       class="dummy-node"
       cx="157.92706"
       cy="159.88091"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-B-after"
       class="node-after"
       cx="122.44104"
       cy="140.87308"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-B-after-dummy"
       class="dummy-node"
       cx="122.44104"
       cy="140.87308"
       rx="5"
       ry="5" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="119.21555"
       y="144.61508"
       id="text1629-2-4-5"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-7-2-5"
         x="119.21555"
         y="144.61508"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">4</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="135.41678"
       y="147.17316"
       id="text1629-3-1-2"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-9-9-4"
         x="135.41678"
         y="147.17316"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">6</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="122.19999"
       y="160.8163"
       id="text1629-7-2-9"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-79-4-4"
         x="122.19999"
         y="160.8163"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">1</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="139.04074"
       y="172.11452"
       id="text1629-5-5-4"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-7"
         x="139.04074"
         y="172.11452"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">2</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="154.07358"
       y="164.01392"
       id="text1629-33-6-9"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-8-2-5"
         x="154.07358"
         y="164.01392"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">5</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="150.12581"
       y="141.95039"
       id="text1629-58-5-5"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-96-1-6"
         x="150.12581"
         y="141.95039"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">4</tspan></text>
    <path
       style="fill:none;stroke:#130e05;stroke-width:0.280985;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.96371;paint-order:stroke fill markers"
       d="m 39.683307,131.80783 -8.833433,9.50391 16.905363,2.19322 3.350602,24.41775"
       id="path5587-2-1-1" />
    <path
       style="fill:none;stroke:#050505;stroke-width:0.280546px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.987903;paint-order:stroke fill markers"
       d="m 34.048183,156.81043 13.707054,-13.30547 19.189862,16.08353"
       id="path5597-9-6-5" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.280546px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;paint-order:stroke fill markers"
       d="m 47.755237,143.50496 14.925451,-5.26371"
       id="path5599-7-1-9" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-A-before"
       class="node-before"
       cx="39.759457"
       cy="131.88094"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-A-before-dummy"
       class="dummy-node"
       cx="39.759457"
       cy="131.88094"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-F-before"
       class="node-before"
       cx="51.562744"
       cy="167.81644"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-F-before-dummy"
       class="dummy-node"
       cx="51.562744"
       cy="167.81644"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-C-before"
       class="node-before"
       cx="47.755238"
       cy="143.35873"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-C-before-dummy"
       class="dummy-node"
       cx="47.755238"
       cy="143.35873"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-D-before"
       class="node-before"
       cx="62.832981"
       cy="138.38745"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-D-before-dummy"
       class="dummy-node"
       cx="62.832981"
       cy="138.38745"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-E-before"
       class="node-before"
       cx="34.352787"
       cy="156.81042"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-E-before-dummy"
       class="dummy-node"
       cx="34.352787"
       cy="156.81042"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-G-before"
       class="node-before"
       cx="66.792793"
       cy="159.88091"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-G-before-dummy"
       class="dummy-node"
       cx="66.792793"
       cy="159.88091"
       rx="5"
       ry="5" />
    <ellipse
       style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.16223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="node-B-before"
       class="node-before"
       cx="31.306782"
       cy="140.87309"
       rx="1.7514559"
       ry="1.6814617" />
    <ellipse
       style="fill:#ffffff;fill-opacity:0;stroke:#000000;stroke-width:0;"
       id="node-B-before-dummy"
       class="dummy-node"
       cx="31.306782"
       cy="140.87309"
       rx="5"
       ry="5" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="38.216156"
       y="135.39996"
       id="text1629-55-5-9"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-5-3-5"
         x="38.216156"
         y="135.39996"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">1</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="29.936821"
       y="144.6151"
       id="text1629-2-4-9-1"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-7-2-0-7"
         x="29.936821"
         y="144.6151"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">7</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="46.138046"
       y="147.17317"
       id="text1629-3-1-5-4"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-9-9-5-5"
         x="46.138046"
         y="147.17317"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">3</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="32.921261"
       y="160.81631"
       id="text1629-7-2-6-1"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-79-4-3-4"
         x="32.921261"
         y="160.81631"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">6</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="49.762009"
       y="172.11453"
       id="text1629-5-5-2-6"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-3-8-6-0"
         x="49.762009"
         y="172.11453"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">1</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="64.784181"
       y="164.01393"
       id="text1629-33-6-8-3"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-8-2-9-2"
         x="64.784181"
         y="164.01393"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">7</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="60.847054"
       y="141.95041"
       id="text1629-58-5-1-2"
       transform="scale(1.0207835,0.97963965)"><tspan
         sodipodi:role="line"
         id="tspan1627-96-1-4-1"
         x="60.847054"
         y="141.95041"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">6</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82223px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.264583"
       x="73.734978"
       y="173.28056"
       id="text2068-4"><tspan
         sodipodi:role="line"
         id="tspan2066-7"
         x="73.734978"
         y="173.28056"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82223px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.264583">Localized Convolution in GNNs</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;line-height:1.25;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0895329"
       x="127.51811"
       y="135.38573"
       id="text1629-58-5-5-8"
       transform="scale(1.0207835,0.97963966)"><tspan
         sodipodi:role="line"
         id="tspan1627-96-1-6-0"
         x="127.51811"
         y="135.38573"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.38755px;font-family:'Avenir Next';-inkscape-font-specification:'Avenir Next';stroke-width:0.0895329">2</tspan></text>
    <text
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:sans-serif;stroke-width:0.264583"
       x="45.22963"
       y="94.334717"
       id="text4486"><tspan
         sodipodi:role="line"
         id="tspan4484"
         x="45.22963"
         y="94.334717"
         style="stroke-width:0.264583"></tspan></text>
  </g>
</svg>
`
)});
  main.variable(observer("get_neighbours")).define("get_neighbours", function(){return(
function get_neighbours(node_id){
  let key_id = node_id.split('-')[1];
  let neighbours_map = {
    'A': ['A', 'B'],
    'B': ['B', 'A', 'C'],
    'C': ['C', 'B', 'D', 'E', 'F', 'G'],
    'D': ['D', 'C'],
    'E': ['E', 'C'],
    'F': ['F', 'C'],
    'G': ['G', 'C'],
  }
  return neighbours_map[key_id].map((id) => (`#node-${id}-before`));
}
)});
  main.variable(observer("reset_nodes")).define("reset_nodes", ["d3","svg"], function(d3,svg){return(
function reset_nodes() {
  d3.select(svg)
    .selectAll('.node-before')
    .transition(1000)
    .style('fill', '#ffffff');
}
)});
  main.variable(observer("highlight_nodes")).define("highlight_nodes", ["d3","svg"], function(d3,svg){return(
function highlight_nodes(id) {
  d3.select(svg)
    .select(id)
    .transition(1000)
    .style('fill', '#e2e2e2');
}
)});
  main.variable(observer("get_node_position")).define("get_node_position", ["d3","svg"], function(d3,svg){return(
function get_node_position(id){
  let node = d3.select(svg).select(id);
  return [node.attr('cx'), node.attr('cy')];
}
)});
  main.variable(observer("remove_old_arrows")).define("remove_old_arrows", ["d3","svg"], function(d3,svg){return(
function remove_old_arrows(){
  d3.select(svg)
    .selectAll('.gnn-arrows')
    .remove();
}
)});
  main.variable(observer("draw_arrows_to_updated_node")).define("draw_arrows_to_updated_node", ["get_node_position","updated_node_position","d3","svg"], function(get_node_position,updated_node_position,d3,svg){return(
function draw_arrows_to_updated_node(id) {
  let position = get_node_position(id);
  let half_diff = [(updated_node_position[0] - position[0])/2,
                   (updated_node_position[1] - position[1])/2];
  let position_str = position.join(',');
  let half_diff_str = half_diff.join(',');

  d3.select(svg)
    .select('#layer2')
    .append('path')
    .attr('d', `m ${position_str} l ${half_diff_str} l ${half_diff_str}`)
    .attr('class', 'gnn-arrows')
    .attr('stroke', '#000000')
    .attr('fill', 'none')
    .attr('stroke-width', 0.264583)
    .attr('stroke-linecap', 'butt')
    .attr('stroke-linejoin', 'miter')
    .attr('stroke-miterlimit', 4)
    .attr('stroke-dasharray', '0.264583, 3.175')
    .attr('stroke-dashoffset', 0)
    .attr('stroke-opacity', 1)
    .attr('marker-mid', 'url(#marker3144)');
}
)});
  main.variable(observer("on_selected_node_change")).define("on_selected_node_change", ["reset_nodes","get_neighbours","selected_node_id","highlight_nodes","remove_old_arrows","draw_arrows_to_updated_node"], function(reset_nodes,get_neighbours,selected_node_id,highlight_nodes,remove_old_arrows,draw_arrows_to_updated_node)
{
  // Reset all node fills.
  reset_nodes();
  
  // Highlight neighbours.
  let neighbours_ids = get_neighbours(selected_node_id);
  neighbours_ids.map(highlight_nodes);
  
  // Draw arrows.
  remove_old_arrows();
  neighbours_ids.map(draw_arrows_to_updated_node);
}
);
  main.variable(observer("add_interactivity")).define("add_interactivity", ["d3","svg","mutable selected_node_id"], function(d3,svg,$0)
{
  d3.select(svg)
    .selectAll('.dummy-node')
    .style('fill', '#ffffff')
    .style('fill-opacity', '0')
    .on('mouseover', function(event){
      $0.value = '#' + d3.select(this).attr('id')
        .replace('-dummy', '').replace('-after', '-before');
    })
}
);
  main.variable(observer("adjust_dimensions")).define("adjust_dimensions", ["d3","cnn_svg","svg_width","cnn_svg_height","svg","svg_height"], function(d3,cnn_svg,svg_width,cnn_svg_height,svg,svg_height)
{
  d3.select(cnn_svg)
    .attr('width', svg_width)
    .attr('height', cnn_svg_height);
  d3.select(svg)
    .attr('width', svg_width)
    .attr('height', svg_height);
}
);
  main.define("initial selected_node_id", function(){return(
'#node-E-before'
)});
  main.variable(observer("mutable selected_node_id")).define("mutable selected_node_id", ["Mutable", "initial selected_node_id"], (M, _) => new M(_));
  main.variable(observer("selected_node_id")).define("selected_node_id", ["mutable selected_node_id"], _ => _.generator);
  main.variable(observer("updated_node_id")).define("updated_node_id", ["selected_node_id"], function(selected_node_id){return(
selected_node_id.replace('before', 'after')
)});
  main.variable(observer("updated_node_position")).define("updated_node_position", ["get_node_position","updated_node_id"], function(get_node_position,updated_node_id){return(
get_node_position(updated_node_id)
)});
  main.variable(observer("svg_width")).define("svg_width", ["width"], function(width){return(
0.7 * width
)});
  main.variable(observer("svg_height")).define("svg_height", ["svg_width"], function(svg_width){return(
svg_width * 45 / 130
)});
  main.variable(observer("cnn_svg_height")).define("cnn_svg_height", ["svg_width"], function(svg_width){return(
svg_width * 28 / 130
)});
  return main;
}