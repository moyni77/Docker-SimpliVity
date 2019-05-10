(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{184:function(e,t,s){e.exports=s.p+"assets/img/k8s-guestbook1.a70eb434.png"},263:function(e,t,s){"use strict";s.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"post-deploy-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-deploy-validation","aria-hidden":"true"}},[this._v("#")]),this._v(" Post-deploy validation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Install the "),s("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),e._v(" "),s("li",[e._v("Install the UCP Client bundle for the "),s("code",[e._v("admin")]),e._v(" user")]),e._v(" "),s("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),s("code",[e._v("kubectl get nodes")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubernetes-guestbook-example-with-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-guestbook-example-with-redis","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes guestbook example with Redis")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cd ~/Docker-Simplivity\n# ansible-playbook -i vm_hosts test/playbooks/k8s-guestbook.yml --vault-password-file .vault_pass\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[this._v("#")]),this._v(" Quick start")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cd ~/Docker-Simplivity/test/files/k8s-examples/guestbook\n# kubectl apply -f redis-master-deployment.yaml\n# kubectl apply -f redis-master-service.yaml\n# kubectl apply -f redis-slave-deployment.yaml\n# kubectl apply -f redis-slave-service.yaml\n# kubectl apply -f frontend-deployment.yaml\n# kubectl apply -f frontend-service.yaml\n# kubectl get svc frontend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[this._v("#")]),this._v(" Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Change to the directory containing the "),t("code",[this._v("guestbook")]),this._v(" YAML files.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cd ~/Docker-Simplivity/test/files/k8s-examples/guestbook\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The manifest file "),t("code",[this._v("redis-master-deployment.yaml")]),this._v(", included below, specifies a deployment controller that runs a single replica Redis master pod.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cat redis-master-deployment.yaml\n\napiVersion: apps/v1 #  for k8s versions before 1.9.0 use apps/v1beta2  and before 1.8.0 use extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: redis-master\nspec:\n  selector:\n    matchLabels:\n      app: redis\n      role: master\n      tier: backend\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: redis\n        role: master\n        tier: backend\n    spec:\n      containers:\n      - name: master\n        image: k8s.gcr.io/redis:e2e  # or just image: redis\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 6379\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Apply the Redis master deployment from the "),t("code",[this._v("redis-master-deployment.yaml")]),this._v(" file:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl apply -f redis-master-deployment.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl get pods | grep redis\n\nredis-master-57657796fc-psvhc     1/1       Running   0          32s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use the "),t("code",[this._v("kubectl logs")]),this._v(" command to view the logs from the Redis master pod:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl logs -f redis-master-57657796fc-psvhc\n\n                _._\n           _.-``__ ''-._\n      _.-``    `.  `_.  ''-._           Redis 2.8.19 (00000000/0) 64 bit\n  .-`` .-```.  ```\\/    _.,_ ''-._\n (    '      ,       .-`  | `,    )     Running in stand alone mode\n |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379\n |    `-._   `._    /     _.-'    |     PID: 1\n  `-._    `-._  `-./  _.-'    _.-'\n |`-._`-._    `-.__.-'    _.-'_.-'|\n |    `-._`-._        _.-'_.-'    |           http://redis.io\n  `-._    `-._`-.__.-'_.-'    _.-'\n |`-._`-._    `-.__.-'    _.-'_.-'|\n |    `-._`-._        _.-'_.-'    |\n  `-._    `-._`-.__.-'_.-'    _.-'\n      `-._    `-.__.-'    _.-'\n          `-._        _.-'\n              `-.__.-'\n\n[1] 07 Feb 15:04:32.189 # Server started, Redis version 2.8.19\n[1] 07 Feb 15:04:32.189 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.\n[1] 07 Feb 15:04:32.189 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.\n[1] 07 Feb 15:04:32.190 * The server is now ready to accept connections on port 6379\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cat redis-master-service.yaml\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-master\n  labels:\n    app: redis\n    role: master\n    tier: backend\nspec:\n  ports:\n  - port: 6379\n    targetPort: 6379\n  selector:\n    app: redis\n    role: master\n    tier: backend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Apply the Redis master service from the "),t("code",[this._v("redis-master-service.yaml")]),this._v(" file:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('#  kubectl apply -f redis-master-service.yaml\n\nservice "redis-master" created\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl get svc\n\nNAME           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE\nredis-master   ClusterIP   10.96.240.18    <none>        6379/TCP         1m\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cat redis-slave-deployment.yaml\n\napiVersion: apps/v1 #  for k8s versions before 1.9.0 use apps/v1beta2  and before 1.8.0 use extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: redis-slave\nspec:\n  selector:\n    matchLabels:\n      app: redis\n      role: slave\n      tier: backend\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: redis\n        role: slave\n        tier: backend\n    spec:\n      containers:\n      - name: slave\n        image: gcr.io/google_samples/gb-redisslave:v1\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        env:\n        - name: GET_HOSTS_FROM\n          value: dns\n          # If your cluster config does not include a dns service, then to\n          # instead access an environment variable to find the master\n          # service's host, comment out the 'value: dns' line above, and\n          # uncomment the line below:\n          # value: env\n        ports:\n        - containerPort: 6379\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create the Redis slaves from the "),t("code",[this._v("redis-slave-deployment.yaml")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# kubectl apply -f  redis-slave-deployment.yaml\n\ndeployment.apps "redis-slave" created\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl get pods | grep redis\n\nredis-master-57657796fc-psvhc     1/1       Running   0          7m\nredis-slave-5cb5956459-bqqlg      1/1       Running   0          19s\nredis-slave-5cb5956459-gql5x      1/1       Running   0          19s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cat redis-slave-service.yaml\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-slave\n  labels:\n    app: redis\n    role: slave\n    tier: backend\nspec:\n  ports:\n  - port: 6379\n  selector:\n    app: redis\n    role: slave\n    tier: backend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Deploy the Redis slave service from the "),t("code",[this._v("redis-slave-service.yaml")]),this._v(" file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# kubectl apply -f redis-slave-service.yaml\n\nservice "redis-slave" created\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl get services | grep redis\n\nredis-master   ClusterIP   10.96.240.18    <none>        6379/TCP         4m\nredis-slave    ClusterIP   10.96.200.85    <none>        6379/TCP         22s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The guestbook application has a web frontend written in PHP serving the HTTP requests. It is configured to connect to the "),t("code",[this._v("redis-master")]),this._v(" service for write requests and the "),t("code",[this._v("redis-slave")]),this._v(" service for read requests.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cat frontend-deployment.yaml\n\napiVersion: apps/v1 #  for k8s versions before 1.9.0 use apps/v1beta2  and before 1.8.0 use extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: frontend\nspec:\n  selector:\n    matchLabels:\n      app: guestbook\n      tier: frontend\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: guestbook\n        tier: frontend\n    spec:\n      containers:\n      - name: php-redis\n        image: gcr.io/google-samples/gb-frontend:v4\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        env:\n        - name: GET_HOSTS_FROM\n          value: dns\n          # If your cluster config does not include a dns service, then to\n          # instead access environment variables to find service host\n          # info, comment out the 'value: dns' line above, and uncomment the\n          # line below:\n          # value: env\n        ports:\n        - containerPort: 80\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create the frontend deployment using the "),t("code",[this._v("frontend-deployment.yaml")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# kubectl apply -f frontend-deployment.yaml\n\ndeployment.apps "frontend" created\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kubectl get pods -l app=guestbook -l tier=frontend\n\nNAME                        READY     STATUS    RESTARTS   AGE\nfrontend-7f5cd767dc-28j6b   1/1       Running   0          23s\nfrontend-7f5cd767dc-mqcbv   1/1       Running   0          23s\nfrontend-7f5cd767dc-v6lwc   1/1       Running   0          23s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cat frontend-service.yaml\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: frontend\n  labels:\n    app: guestbook\n    tier: frontend\nspec:\n  # comment or delete the following line if you want to use a LoadBalancer\n  type: NodePort\n  # if your cluster supports it, uncomment the following to automatically create\n  # an external load-balanced IP for the frontend service.\n  # type: LoadBalancer\n  ports:\n  - port: 80\n  selector:\n    app: guestbook\n    tier: frontend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Deploy the "),t("code",[this._v("frontend")]),this._v(" service using the "),t("code",[this._v("frontend-service.yaml")]),this._v(" file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# kubectl apply -f frontend-service.yaml\n\nservice "frontend" created\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Query the list of services to verify that the "),t("code",[this._v("frontend")]),this._v(" service is running.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#  kubectl get services | grep frontend\n\nfrontend       NodePort    10.96.16.200    <none>        80:33444/TCP     25s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Access the UI using the identified port on any node in your cluster, for example, "),t("code",[this._v("http://hpe2-ucp01.am2.cloudra.local:33444/")]),this._v(" as shown in the figure below.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(184),alt:' "Guestbook UI"'}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Figure 21.")]),this._v(" Guestbook UI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"teardown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#teardown","aria-hidden":"true"}},[this._v("#")]),this._v(" Teardown")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A playbook is provided to remove the deployed "),t("code",[this._v("guestbook")]),this._v("artifacts.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cd ~/Docker-Simplivity\n# ansible-playbook -i vm_hosts test/playbooks/k8s-guestbook-teardown.yml --vault-password-file .vault_pass\n")])])])}],a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Many sample Kubernetes applications are available at "),s("a",{attrs:{href:"https://kubernetes.io/docs/tutorials/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/tutorials/"),s("OutboundLink")],1),e._v(". This section details how to deploy the stateless guestbook application with Redis as documented at "),s("a",{attrs:{href:"https://kubernetes.io/docs/tutorials/stateless-application/guestbook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/tutorials/stateless-application/guestbook/"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("When deploying applications, you must be aware that Kubernetes version 1.11 shipped with Docker 2.1.  If you are testing examples that are designed to work with a newer (or older) version of Kubernetes, you may have to make changes in some places to the configuration files.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("The playbook for the Kubernetes example guestbook is based on the example taken from the GitHub repo at https://github.com/kubernetes/examples.")]),e._v(" "),e._m(4),s("p",[e._v("You can run the playbook directly, but it can be informative to walk through the individual files to see what is going on under the covers.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),s("p",[e._v("Query the list of Pods to verify that the Redis master pod is running.")]),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),s("p",[e._v("The guestbook application needs to communicate with the Redis master to write its data. You need to apply a service to proxy the traffic to the Redis master pod. A service defines a policy to access the pods.")]),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),s("p",[e._v("Query the list of services to verify that the Redis master service is running.")]),e._v(" "),e._m(20),s("p",[e._v("Although the Redis master is a single pod, you can make it highly available to meet traffic demands by adding replica Redis slaves.")]),e._v(" "),e._m(21),e._m(22),e._v(" "),e._m(23),s("p",[e._v("Query the list of Pods to verify that the Redis slave pods are running.")]),e._v(" "),e._m(24),s("p",[e._v("The guestbook application needs to communicate to Redis slaves to read data. To make the Redis slaves discoverable, you need to set up a service that provides transparent load balancing to the set of pods.")]),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),s("p",[e._v("Query the list of services to verify that the Redis slave service is running.")]),e._v(" "),e._m(28),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),s("p",[e._v("Query the list of pods to verify that the three frontend replicas are running.")]),e._v(" "),e._m(33),s("p",[e._v("If you want guests to be able to access your guestbook, you must configure the frontend service to be externally visible, so a client can request the service from outside the container cluster.")]),e._v(" "),e._m(34),e._m(35),e._v(" "),e._m(36),e._m(37),e._v(" "),e._m(38),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44)])},n,!1,null,null,null);r.options.__file="k8s-example-guestbook.md";t.default=r.exports}}]);