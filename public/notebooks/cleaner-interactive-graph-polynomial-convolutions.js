import define1 from "../observablehq-base/inputs.js";
import define2 from "../observablehq-base/color-legend.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# (Cleaner) Interactive Graph Polynomial Convolutions`
)});
  main.variable(observer("grid_buttons_display")).define("grid_buttons_display", ["html","mutable orig_img","init_2D_array","img_height","img_width","random_2D_array"], function(html,$0,init_2D_array,img_height,img_width,random_2D_array)
{
  const reset_inp = html`<button>Reset Grid</button>`;
  reset_inp.onclick = () => {
    $0.value = init_2D_array(img_height, img_width);
  }

  const randomize_inp = html`<button id="randomize">Randomize Grid</button>`;
  randomize_inp.onclick = () => {
    $0.value = random_2D_array(img_height, img_width);
  }
  
  const combined_div = html`
    <style>
      #button-container {
        text-align: center;
      }
    </style>

    <div id="button-container">
      ${reset_inp}
      ${randomize_inp}
    </div>
  `;
  return combined_div;
}
);
  main.variable(observer("common_scale")).define("common_scale", ["d3"], function(d3){return(
d3.scaleDivergingSqrt([-2, 0, 2], d3.interpolateRdBu)
)});
  main.variable(observer("poly_color_scale")).define("poly_color_scale", ["legend","common_scale"], function(legend,common_scale){return(
legend({
  color: common_scale,
  title: "Color Scale",
})
)});
  main.variable(observer("poly_figcaptions")).define("poly_figcaptions", ["html","figcaption_orig_nat_1","figcaption_orig_nat_2","figcaption_poly","figcaption_kernel","figcaption_upd_nat_1","figcaption_upd_nat_2"], function(html,figcaption_orig_nat_1,figcaption_orig_nat_2,figcaption_poly,figcaption_kernel,figcaption_upd_nat_1,figcaption_upd_nat_2){return(
html`
<div id="figcaptions" style="position: relative; left: 55px; top: 25px;">
    <figcaption id="orig-nat-caption-1">${figcaption_orig_nat_1}</figcaption>
    <figcaption id="orig-nat-caption-2">${figcaption_orig_nat_2}</figcaption>
    <figcaption id="poly-caption">${figcaption_poly}</figcaption>
    <figcaption id="kernel-caption">${figcaption_kernel}</figcaption>
    <figcaption id="upd-nat-caption-1">${figcaption_upd_nat_1}</figcaption>
    <figcaption id="upd-nat-caption-2">${figcaption_upd_nat_2}</figcaption>
</div>
`
)});
  main.variable(observer("poly_conv_main_div")).define("poly_conv_main_div", ["html","style"], function(html,style){return(
html`
  ${style}
  <div id="poly-main-div">
    <svg id="poly-svg"></svg>
  </div>
`
)});
  main.variable(observer("viewof laplacian_type")).define("viewof laplacian_type", ["radio","tex"], function(radio,tex){return(
radio({
  title: 'Choice of Laplacian',
  options: [
    { label: tex`\text{Unnormalized} \ L`, value: 'unnormalized' },
    { label: tex`\text{Normalized} \ \tilde{L}`, value: 'normalized' },
  ],
  value: 'unnormalized'
})
)});
  main.variable(observer("laplacian_type")).define("laplacian_type", ["Generators", "viewof laplacian_type"], (G, _) => G.input(_));
  main.variable(observer("polynomial_display")).define("polynomial_display", ["tex","laplacian_symbol","max_degree","polynomial_display_expanded"], function(tex,laplacian_symbol,max_degree,polynomial_display_expanded){return(
tex.block`
  p_w(${laplacian_symbol})
      = \sum_{i = 0}^${max_degree} w_i ${laplacian_symbol}^i
      = ${polynomial_display_expanded}.
`
)});
  main.variable(observer("poly_conv_sliders")).define("poly_conv_sliders", ["html","poly_coeffs_sliders"], function(html,poly_coeffs_sliders){return(
html`<div id="poly_conv_sliders">${poly_coeffs_sliders}</div>`
)});
  main.variable(observer("reset_coeffs_button_display")).define("reset_coeffs_button_display", ["html","poly_coeffs_sliders","d3"], function(html,poly_coeffs_sliders,d3)
{
  const reset_coeffs = html`<button>Reset Coefficients</button>`;
  reset_coeffs.onclick = () => {
    poly_coeffs_sliders.forEach((elem, i) => {
      elem.reset();      
      elem.value = 0;
      d3.select(elem).select('input').property('value', 0);
      d3.select(elem).select('output').text(elem.value);
    });
  }
  
  const combined_div = html`
    <style>
      #button-container {
        text-align: center;
      }
    </style>

    <div id="button-container">
      ${reset_coeffs}
    </div>
  `;
  return combined_div;
}
);
  main.variable(observer("svg")).define("svg", ["d3","poly_conv_main_div","svg_width","svg_height"], function(d3,poly_conv_main_div,svg_width,svg_height)
{
  var svg = d3.select(poly_conv_main_div).select("svg")
              .attr("viewBox", [0, 0, svg_width, svg_height])
              .attr("width", svg_width)
              .attr("height", svg_height);
  
  var all_g = svg.append('g')
                 .attr('id', 'all-g')
                 .attr("transform", "translate(" + 35 + "," + -75 + ")");
 
  var orig_img_g = all_g.append('g')
                 .attr('class', 'img')
                 .attr('id', 'orig-img')
                 .attr("transform", "translate(" + 170 + "," + 80 + ")");

  var conv_kernel_g = all_g.append('g')
                 .attr('class', 'img')
                 .attr('id', 'conv-kernel')
                 .attr("transform", "translate(" + 450 + "," + 170 + ")");

  var upd_img_g = all_g.append('g')
                 .attr('class', 'img')
                 .attr('id', 'upd-img')
                 .attr("transform", "translate(" + 730 + "," + 80 + ")");
 
  return svg;
}
);
  main.variable(observer("laplacian_symbol")).define("laplacian_symbol", ["laplacian_type"], function(laplacian_type){return(
laplacian_type == 'unnormalized' ? 'L' : '\\tilde{L}'
)});
  main.variable(observer("polynomial_display_expanded")).define("polynomial_display_expanded", ["d3","max_degree","polynomial_coeffs","laplacian_symbol"], function(d3,max_degree,polynomial_coeffs,laplacian_symbol){return(
d3.range(1 + max_degree).map(
  (i) => polynomial_coeffs[i].toString()
         + (i == 0 ? 'I' :  i == 1 ? `${laplacian_symbol}` : `${laplacian_symbol}^${i}`)
).join(' \\ + \\ ')
)});
  main.variable(observer("draw_bottom_line")).define("draw_bottom_line", ["svg"], function(svg)
{
  var all_g = svg.select('#all-g');
  all_g.append('line')
     .attr('x1', 100)
     .attr('x2', 900)
     .attr('y1', 560)
     .attr('y2', 560)
     .style("stroke", "black");
}
);
  main.variable(observer("draw_arrow")).define("draw_arrow", ["svg","d3"], function(svg,d3)
{
  var all_g = svg.select('#all-g');
  all_g
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

  all_g
    .append('path')
    .attr('d', d3.line()([[410, 130], [590, 130]]))
    .attr('stroke', 'black')
    .attr('marker-end', 'url(#arrow)')
    .attr('fill', 'none');
  
  all_g
    .append('text')
    .text('Convolve')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .attr('x', 500)
    .attr('y', 110);
}
);
  main.variable(observer("draw_image")).define("draw_image", ["get_index_for_coordinates","img_pixel_size"], function(get_index_for_coordinates,img_pixel_size){return(
function draw_image(img, img_g, img_scale){
  var img_rows = img_g.selectAll('g.img-rows')
                    .data(img.map((row_vals, row) => ([row, row_vals])))
                    .join(
                      enter => (
                        enter.append('g')
                      ),
                      update => update,
                      exit => exit.remove(),
                    )
                    .attr('class', 'img-rows');

  var img_cells = img_rows
                  .selectAll('rect')
                  .data(([row, row_vals]) => row_vals.map((pixel, col) => [pixel, row, col]))
                  .join(
                    enter => (
                      enter.append("rect")
                            .attr("class", ([pixel, row, col]) =>
                                  `pixel rect_${get_index_for_coordinates([row, col])}`)
                            .attr("stroke", "silver")
                            .attr("x", ([pixel, row, col]) => (img_pixel_size * col))
                            .attr("y", ([pixel, row, col]) => (img_pixel_size * row))
                            .attr("width",  img_pixel_size - 0.6)
                            .attr("height", img_pixel_size - 0.6)
                            .attr("stroke-width", 0.3)
                    ),
                    update => update,
                    exit => exit.remove(),
                  )
                  .transition()
                  .duration(1000)
                  .attr("fill", ([pixel, row, col]) => img_scale(pixel));
}
)});
  main.variable(observer("draw_axes")).define("draw_axes", ["graph_height","d3","x_spacing"], function(graph_height,d3,x_spacing){return(
function draw_axes(graph_g, y_axis_lim, y_spacing){
  graph_g.selectAll('g.x-axis').remove();
  graph_g.selectAll('g.y-axis').remove();
  graph_g.selectAll('g.labels').remove();

  var x_axis_lim = 260;
  var labels_g = graph_g.append('g')
                        .attr('class', 'labels')
                        .attr('transform', `translate(0, ${graph_height})`);
  
  var x_axis_label = labels_g.append('text')
                      .attr('x', x_axis_lim/2)
                      .attr('y', 100)
                      .attr('font-size', 14)
                      .attr('text-anchor', 'middle')
                      .attr('dominant-baseline', 'central')
                      .text('Eigenvector #');
  
  var x_scale = d3.scaleLinear()
                    .domain([-1, x_axis_lim/x_spacing - 1])  
                    .range([0, x_axis_lim])
 
  var x_axis = graph_g.append('g')
                      .call(d3.axisBottom(x_scale).ticks(5))
                      .attr('transform', `translate(0, ${graph_height})`)
                      .attr('class', 'x-axis');

  var y_scale = d3.scaleLinear()
                    .domain([-y_axis_lim, y_axis_lim])  
                    .range([graph_height + y_axis_lim * y_spacing, graph_height - y_axis_lim * y_spacing])
                    .nice();

  var y_axis_label = labels_g.append('text')
                            .attr('x', -75)
                            .attr('y', 5)
                            .attr('font-size', 14)
                            .text('Value');
  
  var y_axis = graph_g.append('g')
                      .call(d3.axisLeft(y_scale).ticks(5))
                      .attr('class', 'y-axis')
                      .attr('transform', `translate(0, 0)`);

}
)});
  main.variable(observer("draw_spectrum")).define("draw_spectrum", ["graph_height","x_spacing","math"], function(graph_height,x_spacing,math){return(
function draw_spectrum(graph_g, coeffs, y_spacing){
  var coeffs_g = graph_g.selectAll('g.coeff')
                        .data(coeffs)
                        .join(
                          enter => {
                            enter = enter.append('g') 
                                         .attr('class', 'coeff');
                            enter.append('line')
                                  .attr('class', 'coeff-line');
                            enter.append('circle')
                                  .attr('class', 'coeff-circle');
                            enter.append('text')
                                  .attr('class', 'coeff-text');
                            return enter;
                          },
                          update => update,
                          exit => exit.remove(),
                        )
                       .attr('transform', `translate(0, ${graph_height})`);

  var coeffs_line = coeffs_g.select('line.coeff-line')
                              .attr('stroke', 'black')
                              .attr('stroke-width', 1)
                              .attr('x1', (d, i) => 20 + x_spacing * i)
                              .attr('x2', (d, i) => 20 + x_spacing * i)
                              .transition()
                              .duration(1000)
                              .attr('display', (d, i) => true)
                              .attr('y1', (d, i) => 0)
                              .attr('y2', (d, i) => -y_spacing * d);
  
  var coeffs_circle = coeffs_g.select('circle.coeff-circle')
                               .attr('r', 3)
                               .attr('cx', (d, i) => 20 + x_spacing * i)
                               .attr('stroke', 'black')
                               .attr('stroke-width', 0.1)
                               .transition()
                               .duration(1000)
                               .attr('display', (d, i) => true)
                               .attr('cy', (d, i) => -y_spacing * d);
  
  var coeffs_text = coeffs_g.select('text.coeff-text')
                               .attr('text-anchor', 'middle')
                               .attr('dominant-baseline', 'central')
                               .attr('x', (d, i) => 20 + x_spacing * i)
                               .text((d, i) => (i + 1))
                               .transition()
                               .duration(1000)
                               .style('display', (d, i) => 'none')
                               .attr('y', (d, i) => -y_spacing * d)
                               .attr('dy', (d, i) => (d == 0 ? 20 : 20 * -math.sign(d)));
  
}
)});
  main.variable(observer("draw_original_img")).define("draw_original_img", ["svg","draw_image","orig_img","common_scale","highlight_selected_cell","mutable orig_img","mutable selected_cell","get_index_for_coordinates"], function(svg,draw_image,orig_img,common_scale,highlight_selected_cell,$0,$1,get_index_for_coordinates)
{
  var img_g = svg.select('g#orig-img');
  
  draw_image(orig_img, img_g, common_scale);
  highlight_selected_cell();

  function handle_click(event, [val, row, col]){
    orig_img[row][col] = 1 - orig_img[row][col];
    $0.value = $0.value;
  }
  img_g.selectAll('rect').on('click', handle_click);

  function handle_mouseover(event, [val, row, col]){
    $1.value = get_index_for_coordinates([row, col]);
  }
  img_g.selectAll('rect').on('mouseover', handle_mouseover);
}
);
  main.variable(observer("draw_convolutional_kernel")).define("draw_convolutional_kernel", ["svg","draw_image","conv_kernel","common_scale","highlight_selected_cell"], function(svg,draw_image,conv_kernel,common_scale,highlight_selected_cell)
{
  var conv_kernel_g = svg.select('g#conv-kernel');  
  draw_image(conv_kernel, conv_kernel_g, common_scale);
  highlight_selected_cell();
}
);
  main.variable(observer("draw_updated_img")).define("draw_updated_img", ["svg","draw_image","upd_img","common_scale","highlight_selected_cell"], function(svg,draw_image,upd_img,common_scale,highlight_selected_cell)
{
  var img_g = svg.select('g#upd-img');
  draw_image(upd_img, img_g, common_scale);
  highlight_selected_cell();
}
);
  main.variable(observer("draw_static_graph_orig")).define("draw_static_graph_orig", ["svg","draw_axes","y_axis_lim_orig","y_axis_spacing_orig"], function(svg,draw_axes,y_axis_lim_orig,y_axis_spacing_orig)
{
  var graph_g = svg.select('g#orig-spectral');
  draw_axes(graph_g, y_axis_lim_orig, y_axis_spacing_orig);
}
);
  main.variable(observer("draw_static_graph_upd")).define("draw_static_graph_upd", ["svg","draw_axes","y_axis_lim_upd","y_axis_spacing_upd"], function(svg,draw_axes,y_axis_lim_upd,y_axis_spacing_upd)
{
  var graph_g = svg.select('g#upd-spectral');
  draw_axes(graph_g, y_axis_lim_upd, y_axis_spacing_upd);
}
);
  main.variable(observer("draw_dyn_graph_orig")).define("draw_dyn_graph_orig", ["svg","draw_spectrum","orig_spectral_coeffs","y_axis_spacing_orig"], function(svg,draw_spectrum,orig_spectral_coeffs,y_axis_spacing_orig)
{  
  var graph_g = svg.select('g#orig-spectral');

  draw_spectrum(graph_g, orig_spectral_coeffs, y_axis_spacing_orig);
}
);
  main.variable(observer("draw_dyn_graph_upd")).define("draw_dyn_graph_upd", ["svg","draw_spectrum","upd_spectral_coeffs","y_axis_spacing_upd"], function(svg,draw_spectrum,upd_spectral_coeffs,y_axis_spacing_upd)
{  
  var graph_g = svg.select('g#upd-spectral');
  draw_spectrum(graph_g, upd_spectral_coeffs, y_axis_spacing_upd);
}
);
  main.variable(observer("highlight_selected_cell")).define("highlight_selected_cell", ["d3","selected_cell"], function(d3,selected_cell){return(
function highlight_selected_cell() {
  d3.selectAll('.pixel')
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.3);
  d3.selectAll(`.rect_${selected_cell}`)
    .attr('stroke', '#191970')
    .attr('stroke-width', 2);
}
)});
  main.variable(observer("x_spacing")).define("x_spacing", function(){return(
10
)});
  main.variable(observer("y_axis_lim_orig")).define("y_axis_lim_orig", ["math","orig_spectral_coeffs"], function(math,orig_spectral_coeffs){return(
-Math.max(1, 1.5 * math.max(math.abs(orig_spectral_coeffs)))
)});
  main.variable(observer("y_axis_spacing_orig")).define("y_axis_spacing_orig", ["y_axis_lim_orig"], function(y_axis_lim_orig){return(
-100/y_axis_lim_orig
)});
  main.variable(observer("y_axis_lim_upd")).define("y_axis_lim_upd", ["math","upd_spectral_coeffs"], function(math,upd_spectral_coeffs){return(
-Math.max(1, 1.5 * math.max(math.abs(upd_spectral_coeffs)))
)});
  main.variable(observer("y_axis_spacing_upd")).define("y_axis_spacing_upd", ["y_axis_lim_upd"], function(y_axis_lim_upd){return(
-100/y_axis_lim_upd
)});
  main.variable(observer("style")).define("style", ["html","svg_height"], function(html,svg_height){return(
html`
<style>
   
   #poly-main-div {
      position: relative;
      height: ${svg_height}px;
   }

   #poly-svg {
      position: absolute;
      left: 0px;
      top: 0px;
   }

   #figcaptions {
      position: relative;
   }

   #figcaptions figcaption {
      position: absolute;
   }

   #orig-nat-caption-1 {
      left: 170px;
      top: 140px;
   }
   #orig-nat-caption-2 {
      left: 170px;
      top: 160px;
   }
   #poly-caption {
      left: 460px;
      top: 90px;
   }
   #kernel-caption {
      left: 360px;
      top: 230px;
   }
   #upd-nat-caption-1 {
      left: 725px;
      top: 140px;
   }
   #upd-nat-caption-2 {
      left: 740px;
      top: 160px;
   }

   #poly_conv_sliders form {
      margin-left: 5%;
      margin-right: 5%;
   }
    
   #poly_conv_sliders input {
      width: 80%;
   }

   #poly_conv_sliders output {
      width: 3em;
      margin-left: 0 !important;
   }

   #poly_conv_sliders {
      display: flex;
      width: 60%;
      margin: 0 auto;
      text-align: center;
      align-items: center; 
      justify-content: center; 
    }
  
   input[type="range"] {
      -webkit-appearance: none;
      grid-column: middle;
      height: 5px;
      border-radius: 1px;   
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

   input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%; 
      background: #575245;
      cursor: pointer;
    }

   input[type="range"]::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #f5f2eb;
      cursor: pointer;
   }

   output[name="output"] {
      width: 1em;
      display: inline-block;
   }
</style>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Calculations`
)});
  main.define("initial selected_cell", ["get_index_for_coordinates","math","img_height","img_width"], function(get_index_for_coordinates,math,img_height,img_width){return(
get_index_for_coordinates([math.floor(img_height / 2), math.floor(img_width / 2)])
)});
  main.variable(observer("mutable selected_cell")).define("mutable selected_cell", ["Mutable", "initial selected_cell"], (M, _) => new M(_));
  main.variable(observer("selected_cell")).define("selected_cell", ["mutable selected_cell"], _ => _.generator);
  main.variable(observer("get_neighbour_weights")).define("get_neighbour_weights", function(){return(
function get_neighbour_weights(poly, selected_cell){
  return poly[selected_cell].map((val, index) => [val, index]).filter(([val, index]) => (val != 0));
}
)});
  main.variable(observer("get_index_for_coordinates")).define("get_index_for_coordinates", ["img_width"], function(img_width){return(
function get_index_for_coordinates([row, col]){
  return img_width * row + col;
}
)});
  main.variable(observer("get_coordinates_for_index")).define("get_coordinates_for_index", ["math","img_width"], function(math,img_width){return(
function get_coordinates_for_index(index){
  return [math.floor(index / img_width), index % img_width];
}
)});
  main.variable(observer()).define(["conv_kernel"], function(conv_kernel){return(
conv_kernel
)});
  main.variable(observer("conv_kernel")).define("conv_kernel", ["init_2D_array","img_height","img_width","get_neighbour_weights","poly","selected_cell","get_coordinates_for_index"], function(init_2D_array,img_height,img_width,get_neighbour_weights,poly,selected_cell,get_coordinates_for_index)
{
  // We extract the weights from the current polynomial.
  let kernel = init_2D_array(img_height, img_width);
  let weights = get_neighbour_weights(poly, selected_cell);
  for(let [weight, index] of weights){
    let coords = get_coordinates_for_index(index);
    kernel[coords[0]][coords[1]] = weight;
  }
  return kernel;
}
);
  main.variable(observer("orig_feature")).define("orig_feature", ["orig_img"], function(orig_img){return(
orig_img.flat()
)});
  main.define("initial orig_img", ["init_2D_array","img_height","img_width"], function(init_2D_array,img_height,img_width)
{
  let img = init_2D_array(img_height, img_width);
  for(var i = 0; i < img_height; i++) {
    for(var j = 0; j < img_width; j++) {
      img[i][j] = (Math.random() <= 0.5 ? 1 : 0);
    }
  }
  return img;
}
);
  main.variable(observer("mutable orig_img")).define("mutable orig_img", ["Mutable", "initial orig_img"], (M, _) => new M(_));
  main.variable(observer("orig_img")).define("orig_img", ["mutable orig_img"], _ => _.generator);
  main.variable(observer("orig_spectral_coeffs")).define("orig_spectral_coeffs", ["math","eigenvectors","orig_feature"], function(math,eigenvectors,orig_feature){return(
math.multiply(eigenvectors, orig_feature)
)});
  main.variable(observer("upd_feature")).define("upd_feature", ["apply_polynomial","poly","orig_feature"], function(apply_polynomial,poly,orig_feature){return(
apply_polynomial(poly, orig_feature)
)});
  main.variable(observer("upd_img")).define("upd_img", ["unflatten","upd_feature","img_height","img_width"], function(unflatten,upd_feature,img_height,img_width){return(
unflatten(upd_feature, img_height, img_width)
)});
  main.variable(observer("upd_spectral_coeffs")).define("upd_spectral_coeffs", ["math","eigenvectors","upd_feature"], function(math,eigenvectors,upd_feature){return(
math.multiply(eigenvectors, upd_feature)
)});
  main.variable(observer("poly")).define("poly", ["polynomial_coeffs","math","chosen_laplacian","num_pixels"], function(polynomial_coeffs,math,chosen_laplacian,num_pixels){return(
[...polynomial_coeffs].reverse().reduce((acc, curr) => {
    acc = math.multiply(acc, chosen_laplacian);
    acc = math.add(acc, math.multiply(curr, math.identity(num_pixels)));
    return acc;
  }, math.zeros([num_pixels, num_pixels])
).toArray()
)});
  main.variable(observer("apply_polynomial")).define("apply_polynomial", ["math"], function(math){return(
function apply_polynomial(poly, feature){  
  return math.multiply(poly, feature);
}
)});
  main.define("initial polynomial_coeffs", ["poly_coeffs_sliders"], function(poly_coeffs_sliders){return(
poly_coeffs_sliders.map((elem) => (elem.value))
)});
  main.variable(observer("mutable polynomial_coeffs")).define("mutable polynomial_coeffs", ["Mutable", "initial polynomial_coeffs"], (M, _) => new M(_));
  main.variable(observer("polynomial_coeffs")).define("polynomial_coeffs", ["mutable polynomial_coeffs"], _ => _.generator);
  main.variable(observer("l2_normalize")).define("l2_normalize", ["math"], function(math){return(
function l2_normalize(arrs){
  return arrs.map((arr) => math.divide(arr, math.sqrt(math.sum(math.square(arr)))));
}
)});
  main.variable(observer("eigenvectors")).define("eigenvectors", ["l2_normalize","math","laplacian_eigs"], function(l2_normalize,math,laplacian_eigs){return(
l2_normalize(math.transpose(laplacian_eigs.vectors))
)});
  main.variable(observer("chosen_laplacian")).define("chosen_laplacian", ["laplacian_type","laplacian","normalized_laplacian"], function(laplacian_type,laplacian,normalized_laplacian){return(
laplacian_type == 'unnormalized' ? laplacian : normalized_laplacian
)});
  main.variable(observer("max_eigenvalue")).define("max_eigenvalue", ["math","laplacian_eigs"], function(math,laplacian_eigs){return(
math.max(laplacian_eigs.values)
)});
  main.variable(observer("laplacian_eigs")).define("laplacian_eigs", ["math","laplacian"], function(math,laplacian){return(
math.eigs(laplacian)
)});
  main.variable(observer("laplacian")).define("laplacian", ["compute_laplacian","adjacency_matrix"], function(compute_laplacian,adjacency_matrix){return(
compute_laplacian(adjacency_matrix)
)});
  main.variable(observer("normalized_laplacian")).define("normalized_laplacian", ["math","max_eigenvalue","laplacian","num_pixels"], function(math,max_eigenvalue,laplacian,num_pixels){return(
math.subtract(
  math.multiply(2/max_eigenvalue, laplacian), 
  math.identity(num_pixels)
).toArray()
)});
  main.variable(observer("adjacency_matrix")).define("adjacency_matrix", ["compute_adjacency_for_img_dims","img_height","img_width"], function(compute_adjacency_for_img_dims,img_height,img_width){return(
compute_adjacency_for_img_dims(img_height, img_width)
)});
  main.variable(observer("init_2D_array")).define("init_2D_array", function(){return(
function init_2D_array(height, width){
  var arr = [];
  for(var i = 0; i < height; i++) {
    arr.push([]);
    for(var j = 0; j < width; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}
)});
  main.variable(observer("random_2D_array")).define("random_2D_array", ["init_2D_array"], function(init_2D_array){return(
function random_2D_array(height, width){
  var arr = init_2D_array(height, width);
  for(var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
      arr[i][j] = (Math.random() <= 0.5 ? 1 : 0);
    }
  }
  return arr;
}
)});
  main.variable(observer("compute_laplacian")).define("compute_laplacian", ["math"], function(math){return(
function compute_laplacian(adj){
  var degree = math.diag(math.apply(adj, 1, math.sum));
  return math.subtract(degree, adj);
}
)});
  main.variable(observer("compute_adjacency_for_img_dims")).define("compute_adjacency_for_img_dims", ["init_2D_array","num_pixels"], function(init_2D_array,num_pixels){return(
function compute_adjacency_for_img_dims(height, width){
  
  // Helper to check whether a position is valid.
  function check_bounds([row, col]) { 
    return (0 <= row && row < height && 0 <= col && col < width)
  }

  // Helper to map a position indicated by a row and column to an index.
  function index([row, col]) {
   return row * width + col;
  }
  
  // Add neighbours.
  var adj = init_2D_array(num_pixels, num_pixels);
  for(var row = 0; row < height; row++){
    for(var col = 0; col < width; col++){
      var neighbour_offsets = [
       [-1, -1], [-1, 0], [-1, 1],
       [ 0, -1],          [ 0, 1],
       [ 1, -1], [ 1, 0], [ 1, 1],
      ]
      var neighbours = neighbour_offsets.map(([r_off, c_off]) => [row + r_off, col + c_off])
      var neighbours_filtered = neighbours.filter(check_bounds);
      var neighbour_indices = neighbours_filtered.map(index);
      var pixel_index = index([row, col]);

      neighbour_indices.forEach(n_index => {
        adj[pixel_index][n_index] = 1;
      });
    }
  }
 
  return adj;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Appendix`
)});
  main.variable(observer("poly_coeffs_sliders")).define("poly_coeffs_sliders", ["laplacian_type","d3","max_degree","slider","math","tex"], function(laplacian_type,d3,max_degree,slider,math,tex)
{
  if(laplacian_type == 'unnormalized'){
    return d3.range(1 + max_degree).map(
      i => slider({
            min: -1/math.pow(10, i), 
            max: 1/math.pow(10, i), 
            step: 1/math.pow(10, i + 1), 
            precision: i + 1,
            value: i <= 1 ? 1/math.pow(10, i) : 0, 
            title: tex`{w_{${i}}}`, 
          })
    )
  } else {
    return d3.range(1 + max_degree).map(
      i => slider({
            min: -1, 
            max: 1, 
            step: 0.1, 
            precision: 1,
            value: i <= 1 ? 1/math.pow(10, i) : 0, 
            title: tex`{w_{${i}}}`, 
          })
    )
  }
}
);
  main.variable(observer("poly_input_slider_watch")).define("poly_input_slider_watch", ["d3","mutable polynomial_coeffs"], function(d3,$0)
{
  var sliders = d3.select('#poly_conv_sliders').selectAll('form');
  
  // When slider changes.
  sliders.on('input', (event) => {
    var elem = event.currentTarget;
    var i = sliders.nodes().indexOf(elem);

    $0.value[i] = elem.value;
    $0.value = $0.value;
  });
  
  // On reset.
  sliders.on('reset', (event) => {
    var elem = event.currentTarget;
    elem.reset();  
    d3.select(elem).select('input').property('value', 0);
    d3.select(elem).select('output').text(0);

    var i = sliders.nodes().indexOf(elem);
    $0.value[i] = 0;
    $0.value = $0.value;
  });
  
}
);
  main.variable(observer("figcaption_orig_nat_1")).define("figcaption_orig_nat_1", ["html"], function(html){return(
html`
  Input Grid
`
)});
  main.variable(observer("figcaption_poly")).define("figcaption_poly", ["html","tex"], function(html,tex){return(
html`
  ${tex`p_w(L)`}
`
)});
  main.variable(observer("figcaption_kernel")).define("figcaption_kernel", ["html"], function(html){return(
html`
  Convolutional Kernel at Highlighted Pixel
`
)});
  main.variable(observer("figcaption_upd_nat_1")).define("figcaption_upd_nat_1", ["html"], function(html){return(
html`
  Output Grid
`
)});
  main.variable(observer("figcaption_orig_nat_2")).define("figcaption_orig_nat_2", ["html","tex","num_pixels"], function(html,tex,num_pixels){return(
html`
  ${tex`x \in \{0, 1\}^{${num_pixels}}`}
`
)});
  main.variable(observer("figcaption_upd_nat_2")).define("figcaption_upd_nat_2", ["html","tex","num_pixels"], function(html,tex,num_pixels){return(
html`
  ${tex`x' \in \mathbb{R}^{${num_pixels}}`}
`
)});
  main.variable(observer("figcaption_orig_spec_1")).define("figcaption_orig_spec_1", ["html"], function(html){return(
html`
  Spectral Representation
`
)});
  main.variable(observer("figcaption_upd_spec_1")).define("figcaption_upd_spec_1", ["html"], function(html){return(
html`
  Spectral Representation
`
)});
  main.variable(observer("figcaption_orig_spec_2")).define("figcaption_orig_spec_2", ["html","tex"], function(html,tex){return(
html`
  ${tex`\hat{x}`}
`
)});
  main.variable(observer("figcaption_upd_spec_2")).define("figcaption_upd_spec_2", ["html","tex"], function(html,tex){return(
html`
  ${tex`\hat{x'}`}
`
)});
  main.variable(observer("max_degree")).define("max_degree", function(){return(
2
)});
  main.variable(observer("img_pixel_size")).define("img_pixel_size", function(){return(
20
)});
  main.variable(observer("img_height")).define("img_height", function(){return(
5
)});
  main.variable(observer("img_width")).define("img_width", function(){return(
5
)});
  main.variable(observer("num_pixels")).define("num_pixels", ["img_height","img_width"], function(img_height,img_width){return(
img_height * img_width
)});
  main.variable(observer("svg_height")).define("svg_height", function(){return(
220
)});
  main.variable(observer("svg_width")).define("svg_width", function(){return(
1000
)});
  main.variable(observer("graph_height")).define("graph_height", function(){return(
250
)});
  main.variable(observer("unflatten")).define("unflatten", ["init_2D_array"], function(init_2D_array){return(
function unflatten(arr, height, width){
  var unflattened = init_2D_array(height, width);
  var k = 0;
  for(var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
      unflattened[i][j] = arr[k];
      k++;
    }
  }
  return unflattened;
}
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("radio", child1);
  const child2 = runtime.module(define2);
  main.import("legend", child2);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@6')
)});
  main.variable(observer("math")).define("math", ["require"], function(require){return(
require('mathjs@7.6.0/dist/math.min.js')
)});
  return main;
}