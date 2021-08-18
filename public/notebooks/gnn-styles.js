export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# GNN Styles`
)});
  main.variable(observer("param_col_rgb")).define("param_col_rgb", function(){return(
"#4D9DB5"
)});
  main.variable(observer("param_col")).define("param_col", ["format","param_col_rgb"], function(format,param_col_rgb){return(
format(param_col_rgb)
)});
  main.variable(observer("neigh_col_rgb")).define("neigh_col_rgb", function(){return(
"#A95AA1"
)});
  main.variable(observer("neigh_col")).define("neigh_col", ["format","neigh_col_rgb"], function(format,neigh_col_rgb){return(
format(neigh_col_rgb)
)});
  main.variable(observer("main_col_rgb")).define("main_col_rgb", function(){return(
"#FE6100"
)});
  main.variable(observer("main_col")).define("main_col", ["format","main_col_rgb"], function(format,main_col_rgb){return(
format(main_col_rgb)
)});
  main.variable(observer("spectral_col_rgb")).define("spectral_col_rgb", function(){return(
"#0047AB"
)});
  main.variable(observer("spectral_col")).define("spectral_col", ["format","spectral_col_rgb"], function(format,spectral_col_rgb){return(
format(spectral_col_rgb)
)});
  main.variable(observer("natural_col_rgb")).define("natural_col_rgb", function(){return(
"#177245"
)});
  main.variable(observer("natural_col")).define("natural_col", ["format","natural_col_rgb"], function(format,natural_col_rgb){return(
format(natural_col_rgb)
)});
  main.variable(observer("format")).define("format", function(){return(
function format(rgb_str){
  return "\\color{" + rgb_str + "} ";
}
)});
  return main;
}
