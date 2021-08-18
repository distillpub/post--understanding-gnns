import define1 from "../observablehq-base/inputs.js";
import define2 from "../observablehq-base/color-legend.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Interactive Spectral Conversions`
)});
  main.variable(observer("figcaptions")).define("figcaptions", ["html","figcaption_spec_1","figcaption_spec_2","figcaption_quot","figcaption_nat_1","figcaption_nat_2"], function(html,figcaption_spec_1,figcaption_spec_2,figcaption_quot,figcaption_nat_1,figcaption_nat_2){return(
html`
<div id="figcaptions">
    <figcaption id="spec-caption-1">${figcaption_spec_1}</figcaption>
    <figcaption id="spec-caption-2">${figcaption_spec_2}</figcaption>
    <div id="quot-caption-div">
      <figcaption id="quot-caption-1">${figcaption_quot}</figcaption>
    </div>
    <figcaption id="nat-caption-1">${figcaption_nat_1}</figcaption>
    <figcaption id="nat-caption-2">${figcaption_nat_2}</figcaption>
</div>
`
)});
  main.variable(observer("spec_conv_main_div")).define("spec_conv_main_div", ["html","style"], function(html,style){return(
html`
  ${style}
  <div id="spec-main-div">
    <svg id="spec-svg"></svg>
  </div>
`
)});
  main.variable(observer("spec_color_scale")).define("spec_color_scale", ["legend","img_scale"], function(legend,img_scale){return(
legend({
  color: img_scale,
  title: "Color Scale",
})
)});
  main.variable(observer("subgrid_main_div")).define("subgrid_main_div", ["html"], function(html){return(
html`
  <div id="subgrid-main-div">
    <svg id="subgrid-svg"></svg>
  </div>
`
)});
  main.variable(observer("spec_conv_sliders")).define("spec_conv_sliders", ["html","coeffs"], function(html,coeffs){return(
html`<div id="spec-sliders">${coeffs}</div>`
)});
  main.variable(observer("spec_conv_buttons_display")).define("spec_conv_buttons_display", ["html","coeffs","d3"], function(html,coeffs,d3)
{
  const reset_inp = html`<button>Reset Coefficients</button>`;
  reset_inp.onclick = () => {
    coeffs.forEach((elem, i) => {
      elem.reset();      
      d3.select(elem).select('input').property('value', 0);
      d3.select(elem).select('output').text(0);
    });
  }

  const combined_div = html`
    <style>
      #button-container {
        text-align: center;
      }
    </style>

    <div id="button-container">
      ${reset_inp}
    </div>
  `;
  return combined_div;
}
);
  main.variable(observer("svg")).define("svg", ["d3","spec_conv_main_div","svg_width","svg_height"], function(d3,spec_conv_main_div,svg_width,svg_height)
{
  var svg = d3.select(spec_conv_main_div).select("svg")
              .attr("viewBox", [0, 0, svg_width, svg_height])
              .attr("width", svg_width)
              .attr("height", svg_height);
  
  var img_g = svg.append('g')
                 .attr('class', 'img')
                 .attr("transform", "translate(" + 150 + "," + 100 + ")");
  
  var graph_g = svg.append('g')
                    .attr('class', 'graph')
                    .attr("transform", "translate(" + 500 + "," + -100 + ")");
 
  return svg;
}
);
  main.variable(observer("img_scale")).define("img_scale", ["d3"], function(d3){return(
d3.scaleDivergingSqrt([-0.5, 0, 0.5], d3.interpolateRdBu)
)});
  main.variable(observer("draw_img_helper")).define("draw_img_helper", ["img_scale"], function(img_scale){return(
function draw_img_helper(img, img_g, img_pixel_size) {
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
                            .attr("stroke", "silver")
                            .attr("x", ([pixel, row, col]) => (img_pixel_size * col))
                            .attr("y", ([pixel, row, col]) => (img_pixel_size * row))
                            .attr("width",  img_pixel_size)
                            .attr("height", img_pixel_size)
                            .attr("stroke-width", 0.5)
                    ),
                    update => update,
                    exit => exit.remove(),
                  )
                  .transition()
                  .duration(0)
                  .attr("fill", ([pixel, row, col]) => img_scale(pixel));
}
)});
  main.variable(observer("draw_img")).define("draw_img", ["svg","draw_img_helper","img","img_pixel_size"], function(svg,draw_img_helper,img,img_pixel_size)
{
  var img_g = svg.select('g.img');
  draw_img_helper(img, img_g, img_pixel_size);
}
);
  main.variable(observer("draw_eigenvectors")).define("draw_eigenvectors", ["d3","subgrid_main_div","subgrid_svg_width","subgrid_svg_height","math","img_pixel_size","num_eigenvectors","max_eigenvectors","eigenvectors","unflatten","img_height","img_width","draw_img_helper"], function(d3,subgrid_main_div,subgrid_svg_width,subgrid_svg_height,math,img_pixel_size,num_eigenvectors,max_eigenvectors,eigenvectors,unflatten,img_height,img_width,draw_img_helper)
{
  var subgrid_svg = d3.select(subgrid_main_div).select("svg")
                      .attr("viewBox", [0, 0, subgrid_svg_width, subgrid_svg_height])
                      .attr("width", subgrid_svg_width)
                      .attr("height", subgrid_svg_height);

  var x_offset = 32;
  var subgrid_pixel_size = math.floor(img_pixel_size / 2);
  var x_spacing = subgrid_svg_width / num_eigenvectors;
  var y_offset = 10;
  var eigenvectors_gs = subgrid_svg.selectAll('g.eigenvectors')
                          .data(d3.range(max_eigenvectors))
                          .join(
                            enter => (
                              enter.append('g')
                            ),
                            update => update,
                            exit => exit.remove(),
                          )
                          .attr('class', 'eigenvectors')
                          .attr('transform',
                                (index) => `translate(${x_offset + x_spacing * index},${y_offset})`)
                          .each(function(index){
                            let eigenvector = eigenvectors[index];
                            let eigenvector_reshaped = unflatten(eigenvector, img_height, img_width);
                            draw_img_helper(eigenvector_reshaped, d3.select(this),
                                            subgrid_pixel_size);
                          });
  
}
);
  main.variable(observer("draw_static_graph")).define("draw_static_graph", ["svg","y_spacing","graph_height","d3","x_spacing"], function(svg,y_spacing,graph_height,d3,x_spacing)
{
  var graph_g = svg.select('g.graph');
  
  // Axes.
  var x_axis_lim = 300;
  var y_axis_lim = -1 * y_spacing;
    
  var labels_g = graph_g.append('g')
                        .attr('transform', `translate(0, ${graph_height})`);

  var x_axis_label = labels_g.append('text')
                      .attr('x', x_axis_lim + 20)
                      .attr('y', 30)
                      .attr('text-anchor', 'middle')
                      .attr('dominant-baseline', 'central')
                      .text('Spectral Coefficient');
  
  var x_axis_label_2 = labels_g.append('text')
                      .attr('x', x_axis_lim/2)
                      .attr('y', 184)
                      .attr('text-anchor', 'middle')
                      .attr('dominant-baseline', 'central')
                      .text('Eigenvector #');
  
  var x_scale = d3.scaleLinear()
                    .domain([0, x_axis_lim/x_spacing])  
                    .range([0, x_axis_lim]);
 
  var x_axis = graph_g.append('g').call(d3.axisBottom(x_scale))
                     .attr('transform', `translate(0, ${graph_height})`)
  x_axis.selectAll('text').remove();
  x_axis.selectAll('.tick').remove();

  var y_scale = d3.scaleLinear()
                    .domain([-y_axis_lim/y_spacing, y_axis_lim/y_spacing])  
                    .range([graph_height + y_axis_lim, graph_height - y_axis_lim])

  var y_axis_label = labels_g.append('text')
                            .attr('x', -75)
                            .attr('y', 5)
                            .text('Value');
  
  var y_axis = graph_g.append('g').call(d3.axisLeft(y_scale))
                      .attr('transform', `translate(0, 0)`);

}
);
  main.variable(observer("draw_dyn_graph")).define("draw_dyn_graph", ["svg","spectral_coeffs","graph_height","x_spacing","y_spacing","math","num_eigenvectors","d3"], function(svg,spectral_coeffs,graph_height,x_spacing,y_spacing,math,num_eigenvectors,d3)
{  
  var graph_g = svg.select('g.graph');

  // Spectral Coefficients
  var coeffs_g = graph_g.selectAll('g.coeff')
                        .data(spectral_coeffs)
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
                              .attr('display', (d, i) => display(i))
                              .attr('y1', (d, i) => 0)
                              .attr('y2', (d, i) => -y_spacing * d);
  
  var coeffs_circle = coeffs_g.select('circle.coeff-circle')
                               .attr('r', 3)
                               .attr('cx', (d, i) => 20 + x_spacing * i)
                               .attr('stroke', 'black')
                               .attr('stroke-width', 0.1)
                               .transition()
                               .duration(1000)
                               .attr('display', (d, i) => display(i))
                               .attr('cy', (d, i) => -y_spacing * d);
  
  var coeffs_text = coeffs_g.select('text.coeff-text')
                               .attr('text-anchor', 'middle')
                               .attr('dominant-baseline', 'central')
                               .attr('x', (d, i) => 20 + x_spacing * i)
                               .text((d, i) => (i + 1))
                               .transition()
                               .duration(1000)
                               .attr('display', (d, i) => display(i))
                               .attr('y', (d, i) => -y_spacing * d)
                               .attr('dy', (d, i) => (d == 0 ? 20 : 20 * -math.sign(d)));
  
  function display(i){
    return i < num_eigenvectors ? '' : 'none';
  }
  
  d3.select('span.texed-letters')
      .data(spectral_coeffs)
      .style('position', 'absolute')
      .style('left', (d, i) => 20 + x_spacing * i)
      .style('top', (d, i) => -y_spacing * d);
}
);
  main.variable(observer("style")).define("style", ["html","svg_height"], function(html,svg_height){return(
html`
<style>
   #spec-main-div {
      position: relative;
      height: ${svg_height}px;
   }

   #spec-svg {
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

   #spec-caption-1 {
      left: 660px;
      top: 400px;
   }
   #spec-caption-2 {
      left: 620px;
      top: 420px;
   }
   #quot-caption-div {
      position: relative;
      width: 200px;
      left: 170px;
      top: 350px;
   }
   #figcaptions #quot-caption-1 {
      position: relative;
      text-align: center;
      font: inherit;
      color: inherit;
   }
   #nat-caption-1 {
      left: 205px;
      top: 400px;
   }
   #nat-caption-2 {
      left: 255px;
      top: 420px;
   }

   #spec-sliders form {
      margin-left: 2%;
      margin-right: 2%;
   }
    
   #spec-sliders input {
      width: 100%;
   }

   #spec-sliders output {
      width: 3em;
      margin-left: 0 !important;
   }

   #spec-sliders {
      display: flex;
      margin: 0 auto;
      text-align: center;
   }

   #subgrid-main-div {
      display: flex;
      margin: 0 auto;
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
  main.variable(observer("img")).define("img", ["unflatten","natural_feature","img_height","img_width"], function(unflatten,natural_feature,img_height,img_width){return(
unflatten(natural_feature, img_height, img_width)
)});
  main.define("initial spectral_coeffs", ["coeffs"], function(coeffs){return(
coeffs.map((elem) => (elem.value))
)});
  main.variable(observer("mutable spectral_coeffs")).define("mutable spectral_coeffs", ["Mutable", "initial spectral_coeffs"], (M, _) => new M(_));
  main.variable(observer("spectral_coeffs")).define("spectral_coeffs", ["mutable spectral_coeffs"], _ => _.generator);
  main.variable(observer("natural_feature")).define("natural_feature", ["spectral_coeffs","math","eigenvectors"], function(spectral_coeffs,math,eigenvectors)
{
  var weighted_eigenvectors = spectral_coeffs.map(
    (coeff, index) => math.multiply(eigenvectors[index], coeff)
  );
  return math.apply(weighted_eigenvectors, 0, math.sum);
}
);
  main.variable(observer("rayleigh_quotient")).define("rayleigh_quotient", ["natural_feature","laplacian","math"], function(natural_feature,laplacian,math)
{
  var x = natural_feature;
  var L = laplacian;
  var quot = math.multiply(math.multiply(x, L), x) / math.multiply(x, x);
  return isNaN(quot) ? "\\text{undefined}" : math.round(quot, 2).toFixed(2);
}
);
  main.variable(observer("eigenvalues")).define("eigenvalues", ["laplacian_eigs"], function(laplacian_eigs){return(
laplacian_eigs.values
)});
  main.variable(observer("eigenvectors")).define("eigenvectors", ["normalize","math","laplacian_eigs"], function(normalize,math,laplacian_eigs){return(
normalize(math.transpose(laplacian_eigs.vectors))
)});
  main.variable(observer("normalize")).define("normalize", ["math"], function(math){return(
function normalize(arrs){
  return arrs.map((arr) => math.divide(arr, math.sqrt(math.sum(math.square(arr)))));
}
)});
  main.variable(observer("laplacian_eigs")).define("laplacian_eigs", ["math","laplacian"], function(math,laplacian){return(
math.eigs(laplacian)
)});
  main.variable(observer("laplacian")).define("laplacian", ["compute_laplacian","adjacency_matrix"], function(compute_laplacian,adjacency_matrix){return(
compute_laplacian(adjacency_matrix)
)});
  main.variable(observer("adjacency_matrix")).define("adjacency_matrix", ["compute_adjacency_for_img_dims","img_height","img_width"], function(compute_adjacency_for_img_dims,img_height,img_width){return(
compute_adjacency_for_img_dims(img_height, img_width)
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
  main.variable(observer("figcaption_quot")).define("figcaption_quot", ["html","tex","rayleigh_quotient"], function(html,tex,rayleigh_quotient){return(
html`
  ${tex`R_L(x) = ${rayleigh_quotient}`}
`
)});
  main.variable(observer("figcaption_nat_1")).define("figcaption_nat_1", ["html"], function(html){return(
html`
  Natural Representation
`
)});
  main.variable(observer("figcaption_nat_2")).define("figcaption_nat_2", ["html","tex","num_pixels"], function(html,tex,num_pixels){return(
html`
  ${tex`x \in \mathbb{R}^{${num_pixels}}`}
`
)});
  main.variable(observer("figcaption_spec_1")).define("figcaption_spec_1", ["html"], function(html){return(
html`
  Spectral Representation
`
)});
  main.variable(observer("figcaption_spec_2")).define("figcaption_spec_2", ["html","tex","d3","num_eigenvectors"], function(html,tex,d3,num_eigenvectors){return(
html`
  ${tex`\hat{x} = \left[
    ${d3.range(num_eigenvectors).map(
      i => '\\hat{x}_{' + (i + 1).toString() + '}'
    ).join(' \\ ')}
  \right]`}
`
)});
  main.variable(observer("spec_input_slider_watch")).define("spec_input_slider_watch", ["d3","mutable spectral_coeffs","num_eigenvectors"], function(d3,$0,num_eigenvectors)
{
  var sliders = d3.select('#spec-sliders').selectAll('form');
  
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
    var i = sliders.nodes().indexOf(elem);

    $0.value[i] = 0;
    $0.value = $0.value;
  });
  
  // When number of eigenvalues change.
  sliders
    .transition()
    .duration(1000)
    .style('visibility', function (d, i) {
      if(i < num_eigenvectors){
        return 'visible';
      } else {
        this.reset();
        this.value = 0;
        d3.select(this).select('output').text(this.value);
        return 'hidden';
      }
  });
}
);
  main.variable(observer("texed_letters")).define("texed_letters", ["d3","num_eigenvectors","html","tex"], function(d3,num_eigenvectors,html,tex){return(
d3.range(num_eigenvectors).map(
  (i) => html`
      <span class="texed-letters">
       ${tex`{\hat{x}_{${i + 1}}}`}
      </span>`
)
)});
  main.variable(observer("coeffs")).define("coeffs", ["d3","max_eigenvectors","slider","tex"], function(d3,max_eigenvectors,slider,tex)
{
  return d3.range(max_eigenvectors).map(
    i => slider({
          min: -1, 
          max: 1, 
          step: 0.1, 
          value: -1 + 2 * Math.random(), 
          title: tex`{\hat{x}_{${i + 1}}}`, 
        })
  )
}
);
  main.variable(observer("num_eigenvectors")).define("num_eigenvectors", ["max_eigenvectors"], function(max_eigenvectors){return(
max_eigenvectors
)});
  main.variable(observer("max_eigenvectors")).define("max_eigenvectors", function(){return(
10
)});
  main.variable(observer("img_pixel_size")).define("img_pixel_size", function(){return(
12
)});
  main.variable(observer("img_height")).define("img_height", function(){return(
8
)});
  main.variable(observer("img_width")).define("img_width", function(){return(
8
)});
  main.variable(observer("num_pixels")).define("num_pixels", ["img_height","img_width"], function(img_height,img_width){return(
img_height * img_width
)});
  main.variable(observer("subgrid_svg_height")).define("subgrid_svg_height", function(){return(
60
)});
  main.variable(observer("svg_height")).define("svg_height", function(){return(
400
)});
  main.variable(observer("subgrid_svg_width")).define("subgrid_svg_width", function(){return(
1072
)});
  main.variable(observer("svg_width")).define("svg_width", function(){return(
1072
)});
  main.variable(observer("graph_height")).define("graph_height", function(){return(
250
)});
  main.variable(observer("x_spacing")).define("x_spacing", function(){return(
20
)});
  main.variable(observer("y_spacing")).define("y_spacing", function(){return(
120
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
  main.variable(observer("init_image")).define("init_image", ["init_2D_array"], function(init_2D_array){return(
function init_image(height, width){
  var img = init_2D_array(height, width);
  for(var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
      img[i][j] = Math.random();
    }
  }
  return img;
}
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
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