(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{308:function(e,r,t){"use strict";t.r(r);var s=t(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"installing-metrics-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-metrics-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing metrics-server")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("metrics-server")]),e._v(" is not installed, you will see an error when you try to run  "),t("code",[e._v("kubectl top")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# kubectl top pods\nError from server (NotFound): the server could not find the requested resource (get services http:heapster:)\n")])])]),t("p",[e._v("Alternatively, run "),t("code",[e._v("kubectl get pods,svc,deployments -n kube-system | grep metrics-server")]),e._v(" to see if "),t("code",[e._v("metrics-server")]),e._v(" is present.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[e._v("Install the "),t("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),e._v(" "),t("li",[e._v("Install the UCP Client bundle for the "),t("code",[e._v("admin")]),e._v(" user")]),e._v(" "),t("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),t("code",[e._v("kubectl get nodes")])])]),e._v(" "),t("h2",{attrs:{id:"download-and-install-metrics-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-and-install-metrics-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Download and install "),t("code",[e._v("metrics-server")])]),e._v(" "),t("p",[e._v("Download the project from GitHub:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# git clone https://github.com/kubernetes-incubator/metrics-server\n# cd metrics-server\n")])])]),t("p",[e._v("Apply all the appropriate "),t("code",[e._v("yaml")]),e._v(" files to deploy "),t("code",[e._v("metrics-server")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# kubectl apply -f deploy/1.8+/\n\nclusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created\nclusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created\nrolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created\napiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created\nserviceaccount/metrics-server created\ndeployment.extensions/metrics-server created\nservice/metrics-server created\nclusterrole.rbac.authorization.k8s.io/system:metrics-server created\nclusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created\n")])])]),t("p",[e._v("Now, when you run "),t("code",[e._v("kubectl get pods,svc,deployments -n kube-system")]),e._v(", you should see the deployment, pod and service:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("NAME                                           READY     STATUS    RESTARTS   AGE\npod/metrics-server-559d9f45f-tg7l6             1/1       Running   0          34s\n\nNAME                     TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)         AGE\nservice/metrics-server   ClusterIP   10.96.181.69    <none>        443/TCP         34s\n\nNAME                                            DESIRED   CURRENT   UP-TO-DATE   AVAILABLE \ndeployment.extensions/metrics-server            1         1         1            1         \n")])])]),t("p",[e._v("You can look at the pod logs to ensure that it installed correctly:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# kubectl logs pod/metrics-server-559d9f45f-tg7l6 -n kube-system\n\nI0227 13:50:34.034542       1 serving.go:273] Generated self-signed cert (apiserver.local.config/certificates/apiserver.crt, apiserver.local.config/certificates/apiserver.key)\n[restful] 2019/02/27 13:50:34 log.go:33: [restful/swagger] listing is available at https://:443/swaggerapi\n[restful] 2019/02/27 13:50:34 log.go:33: [restful/swagger] https://:443/swaggerui/ is mapped to folder /swagger-ui/\nI0227 13:50:34.556081       1 serve.go:96] Serving securely on [::]:443\n")])])]),t("h2",{attrs:{id:"use-metrics-server-via-kubectl-top"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-metrics-server-via-kubectl-top","aria-hidden":"true"}},[e._v("#")]),e._v(" Use metrics-server via "),t("code",[e._v("kubectl top")])]),e._v(" "),t("p",[e._v("Now, when you run "),t("code",[e._v("kubectl top")]),e._v(", you should see metrics reported:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@hpe-ansible metrics-server]# kubectl top nodes\nNAME                              CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%\nhpe2-dtr01.am2.cloudra.local      134m         6%        2201Mi          14%\nhpe2-dtr02.am2.cloudra.local      106m         5%        2115Mi          13%\nhpe2-dtr03.am2.cloudra.local      106m         5%        2154Mi          13%\nhpe2-ucp01.am2.cloudra.local      586m         15%       4620Mi          33%\nhpe2-ucp02.am2.cloudra.local      525m         14%       4884Mi          35%\nhpe2-ucp03.am2.cloudra.local      743m         19%       7321Mi          53%\nhpe2-worker01.am2.cloudra.local   360m         9%        4857Mi          7%\nhpe2-worker02.am2.cloudra.local   143m         3%        2295Mi          3%\nhpe2-worker03.am2.cloudra.local   105m         2%        1362Mi          2%\n")])])])])}],!1,null,null,null);a.options.__file="install-metrics-server.md";r.default=a.exports}}]);