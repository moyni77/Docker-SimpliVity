(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(e,t,r){e.exports=r.p+"assets/img/prom-load.a3355682.png"},168:function(e,t,r){e.exports=r.p+"assets/img/istio-mesh.7f403db5.png"},169:function(e,t,r){e.exports=r.p+"assets/img/istio-service.86075562.png"},170:function(e,t,r){e.exports=r.p+"assets/img/istio-workload.1b7e1dd2.png"},171:function(e,t,r){e.exports=r.p+"assets/img/istio-performance.5000a623.png"},172:function(e,t,r){e.exports=r.p+"assets/img/istio-mixer.56cb8c9e.png"},173:function(e,t,r){e.exports=r.p+"assets/img/istio-galley.c537d767.png"},174:function(e,t,r){e.exports=r.p+"assets/img/istio-pilot.88278b1a.png"},175:function(e,t,r){e.exports=r.p+"assets/img/jaeger-search.c81b46e8.png"},176:function(e,t,r){e.exports=r.p+"assets/img/jaeger-traces.b0d64a45.png"},177:function(e,t,r){e.exports=r.p+"assets/img/jaeger-drill-down.3c2f5546.png"},178:function(e,t,r){e.exports=r.p+"assets/img/kiali-all.424db867.png"},314:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"observability-and-metrics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#observability-and-metrics","aria-hidden":"true"}},[this._v("#")]),this._v(" Observability and metrics")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Logging")]),this._v(" "),t("li",[this._v("Monitoring")]),this._v(" "),t("li",[this._v("Distributed Tracing")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"load-generation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-generation","aria-hidden":"true"}},[this._v("#")]),this._v(" Load generation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Before looking at metrics, it is helpful to generate a load on the application. In this instance, we will generate a load for 5 minutes using\nthe "),t("code",[this._v("istio/fortio")]),this._v(" image, but other load generators are available and some are documented at the end of this\narticle.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Connect to one of your Docker nodes and run the "),t("code",[this._v("fortio")]),this._v(" image:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# ssh hpe-worker01 \n\n# docker run istio/fortio load -t 5m -qps 5 http://hpe2-ucp01.am2.cloudra.local:33380/productpage\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Alternatively, you could run the load from the Ansible controller using "),t("code",[this._v("kubectl")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl run fortio --image=istio/fortio -- load -t 5m -qps 5 http://hpe2-ucp01.am2.cloudra.local:33380/productpage\n\ndeployment.apps/fortio created\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("Note:")]),e._v(" The "),r("code",[e._v("docker")]),e._v(" version of the command will stop as expected after 5 minutes.\nHowever, the "),r("code",[e._v("kubectl")]),e._v(" version will run forever, by default, as the pod will get restarted\nautomatically. While you can set "),r("code",[e._v("--restart='Never'")]),e._v(", it may be preferrable to set "),r("code",[e._v("--restart='OnFailure'")]),e._v("\nas issues have been seen with the pod failing to access the URL immediately after it has started. Ideally,\nyou would create a "),r("code",[e._v("CronJob")]),e._v(" resource for such a run-once operation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"querying-metrics-from-prometheus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querying-metrics-from-prometheus","aria-hidden":"true"}},[this._v("#")]),this._v(" Querying Metrics from Prometheus")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The following query shows the requests to the various services ("),r("code",[e._v("productpage")]),e._v(", "),r("code",[e._v("details")]),e._v(", "),r("code",[e._v("ratings")]),e._v(", "),r("code",[e._v("reviews")]),e._v(") building\nup over the 5 minute duration of the load test. (Prometheus is available on port "),r("code",[e._v("33090")]),e._v(" on any node in the cluster,  based on the original configuration).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(167),alt:"Prometheus load",title:"Figure: Prometheus load"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Prometheus load")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vizualizing-metrics-with-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vizualizing-metrics-with-grafana","aria-hidden":"true"}},[this._v("#")]),this._v(" Vizualizing Metrics with Grafana")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The demo deploys a number of Grafana dashboards for visualizing various aspects of application. (Grafana is available on port "),t("code",[this._v("33080")]),this._v(" on any node in the cluster,  based on the original configuration).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mesh-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesh-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Mesh dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(168),alt:"Istio Mesh Dashboard",title:"Figure: Istio Mesh Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Mesh Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"service-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Service dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(169),alt:"Istio Service Dashboard",title:"Figure: Istio Service Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Service Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"workload-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workload-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Workload dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(170),alt:"Istio Workload Dashboard",title:"Figure: Istio Workload Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Workload Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"performance-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Performance dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(171),alt:"Istio Performance Dashboard",title:"Figure: Istio Performance Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Performance Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mixer-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixer-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Mixer dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(172),alt:"Istio Mixer Dashboard",title:"Figure: Istio Mixer Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Mixer Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"galley-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#galley-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Galley dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(173),alt:"Istio Galley Dashboard",title:"Figure: Istio Galley Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Galley Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pilot-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pilot-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" Pilot dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(174),alt:"Istio Pilot Dashboard",title:"Figure: Istio Pilot Dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Istio Pilot Dashboard")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"using-jaeger-for-distributed-tracing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-jaeger-for-distributed-tracing","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Jaeger for distributed tracing")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Distributed context propagation")]),e._v(" "),r("li",[e._v("Distributed transaction monitoring")]),e._v(" "),r("li",[e._v("Root cause analysis")]),e._v(" "),r("li",[e._v("Service dependency analysis")]),e._v(" "),r("li",[e._v("Performance / latency optimization")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Jaeger is available on port "),t("code",[this._v("33086")]),this._v(" on any node in the cluster,  based on the original configuration:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(175),alt:"Jaeger search",title:"Figure: Jaeger search"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Jaeger search")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Select the "),t("code",[this._v("productpage")]),this._v(" service and click "),t("code",[this._v("Find Traces")]),this._v(" (if necessary, set the "),t("code",[this._v("Loookback")]),this._v(" field to cover the time period when you ran the load). An overview of the available traces is displayed:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(176),alt:"Jaeger traces",title:"Figure: Jaeger traces"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Jaeger traces")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Click on a trace in the list to drill down into the timing details - you can see how the response time for\n"),r("code",[e._v("productpage")]),e._v(" is divided up between the individual "),r("code",[e._v("details")]),e._v(", "),r("code",[e._v("ratings")]),e._v(" and "),r("code",[e._v("reviews")]),e._v(" services:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(177),alt:"Jaeger drill down",title:"Figure: Jaeger drill down"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Jaeger drill down")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"using-kiali-to-vizualize-the-service-mesh-topology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-kiali-to-vizualize-the-service-mesh-topology","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Kiali to vizualize the service mesh topology")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Kiali works with Istio to visualize the service mesh topology, including features like circuit breakers or request rates. Kiali also includes Jaeger Tracing to provide distributed tracing out of the box. (Kiali is available\non port "),t("code",[this._v("330001")]),this._v(" on any node in the cluster,  based on the original configuration. The default login is "),t("code",[this._v("admin")]),this._v(" \\ "),t("code",[this._v("admin")]),this._v(").")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(178),alt:"Kiali graph",title:"Figure: Kiali graph"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure.")]),this._v(" Kiali graph")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl run siege --image=yokogawa/siege -- -d1 -r10 -c25 www.google.com\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl run stress --image=progrium/stress --cpu 2 --io 1 --vm 2 --vm-bytes 128M --timeout 1000s\n")])])])}],i=r(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("The three pillars of observability:")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("This Istio demo supports observabilty using Prometheus and Grafana for monitoring, and Jaeger and Kiali for tracing.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("This gives the global view of the Mesh along with services and workloads in the mesh. You can get more details about services and workloads by navigating to their specific dashboards as explained below.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),r("p",[e._v("This gives details about metrics for the service and then client workloads (workloads that are calling this service) and service workloads (workloads that are providing this service) for that service.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),r("p",[e._v("This gives details about metrics for each workload and then inbound workloads (workloads that are sending request to this workload) and outbound services (services to which this workload send requests) for that workload.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),r("p",[e._v("Jaeger is a distributed tracing system released as open source by Uber Technologies. It is used for monitoring and troubleshooting microservices-based distributed systems, including:")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),r("p",[e._v("The following image is a graph representation of the Bookinfo application, showing the three separate reviews services (no stars, black stars, red stars) used when a call is made for the product page.")]),e._v(" "),e._m(49),e._v(" "),e._m(50),e._v(" "),r("p",[e._v("You can click on any edge in the graph to see how much traffic has traversed that particular route. In this case,\nan equal amount of traffic will have gone to each of the three versions of the reviews service.")]),e._v(" "),e._m(51),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.linode.com/docs/tools-reference/tools/load-testing-with-siege/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Load testing with Siege"),r("OutboundLink")],1)]),e._v(" "),e._m(52),r("p",[r("a",{attrs:{href:"https://github.com/progrium/docker-stress",target:"_blank",rel:"noopener noreferrer"}},[e._v("Progrium stress"),r("OutboundLink")],1)]),e._v(" "),e._m(53)])},s,!1,null,null,null);a.options.__file="istio-getting-started-3.md";t.default=a.exports}}]);