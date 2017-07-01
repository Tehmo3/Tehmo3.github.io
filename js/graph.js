var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var graph = [];
var started = false;
var newNodes = true;
var radius = 0;
var i = 0;
var maxRadius = Math.max(w/2, h/2);
var sign = Math.random() >= 0.5 ? 1: -1;
class Node {
  constructor(settings) {
    this.pos = settings.pos,
    this.edges = settings.edges,
    this.age = settings.age
  }
}

defaultSettings = {
  pos: [w/2, h/2],
  edges: [],
  age: 0
}

graph.push(getNode());


function preload() {
  setTimeout(function() { return false}, 5000);
}
function setup() {
	// createCanvas must be the first statement
  createCanvas(w, h);
  background(254,95,85);
  stroke(255);     // Set line drawing color to white
  noFill();
  frameRate(30);
}

setTimeout(function() {
  started = true;
}, 4000)
setTimeout(function() {
  newNodes = false;
}, 20000)


function addNode() {
  if (started) {
    graph.push(getNode());
    redraw();
  }
}

function draw() {
  if (started) {
    if (i%15 == 0 && newNodes) { graph.push(getNode()); }
    graph.forEach(function(node) {
      if (node.age < 1) { node.age += 10 }
      strokeWeight(10);
      stroke(255, 255, 255, node.age);
      ellipse(node.pos[0], node.pos[1], 10);
      node.edges.forEach(function(edge) {
        var to = graph[edge];
        strokeWeight(2);
        line(node.pos[0], node.pos[1], to.pos[0], to.pos[1]);
      });
    });
  }
  i++;
}

function getNode() {
  var middle = [w/2, h/2];
  sign = Math.random() >= 0.5 ? 1: -1;
  var x = middle[0] + Math.floor(Math.random() * radius * sign);
  sign = Math.random() >= 0.5 ? 1: -1;
  var y = middle[1] + Math.floor(Math.random() * radius * sign);
  radius += h/4;
  if (radius > maxRadius) {
    radius = Math.min(h, w) - 100;
  }
  var node = new Node({pos: [x,y], edges: [], age: 0});
  if (!isVisibleNode(node)) {
    return getNode();
  }
  node = createEdges(node);
  return node;
}

function isVisibleNode(node) {
  return (node.pos[0] < w-100 && node.pos[1] < h-100);
}

function createEdges(node) {
  graph.forEach(function(node2, index) {
    var distance = getDistance(node, node2)
    if (distance < h/2) {
      if ((distance < h/4 && Math.random() >= 0.5) || (distance >= h/4 && Math.random() >= 0.3)) {
        node.edges.push(index)
      }
    }
  })
  return node;
}

function getDistance(node1, node2) {
  var run = (node2.pos[0] - node1.pos[0]) > 0 ? node2.pos[0] - node1.pos[0] : node1.pos[0] - node2.pos[0];
  var rise = (node2.pos[1] - node1.pos[1]) > 0 ? node2.pos[1] - node1.pos[1] : node1.pos[1] - node2.pos[1];
  var distance = Math.sqrt(Math.pow(run, 2) + Math.pow(rise, 2));
  return distance;
}
